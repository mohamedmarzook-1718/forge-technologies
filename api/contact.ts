import { Resend } from 'resend';

// Types for request body
export interface ContactRequestBody {
  name: string;
  email: string;
  service: string;
  description: string;
  businessName?: string;
  budgetRange?: string;
  timeline?: string;
  type?: 'project_brief' | 'product_interest';
}

// In-memory rate limiting / duplicate submission protection (short window)
interface SubmissionRecord {
  timestamp: number;
  hash: string;
}
const recentSubmissions = new Map<string, SubmissionRecord>();

// Clean up stale entries every 5 minutes
const CLEANUP_INTERVAL_MS = 5 * 60 * 1000;
const DUPLICATE_WINDOW_MS = 10 * 1000; // 10 seconds

let lastCleanup = Date.now();
function cleanupOldSubmissions() {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;
  lastCleanup = now;
  for (const [key, record] of recentSubmissions.entries()) {
    if (now - record.timestamp > DUPLICATE_WINDOW_MS * 6) {
      recentSubmissions.delete(key);
    }
  }
}

// Helper to extract parsed JSON body from request
async function getRequestBody(req: any): Promise<any> {
  if (req.body) {
    if (typeof req.body === 'string') {
      try {
        return JSON.parse(req.body);
      } catch {
        return {};
      }
    }
    return req.body;
  }

  return new Promise((resolve) => {
    let data = '';
    req.on('data', (chunk: any) => {
      data += chunk;
    });
    req.on('end', () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch {
        resolve({});
      }
    });
    req.on('error', () => resolve({}));
  });
}

// Helper to send standard JSON response
function sendJson(res: any, statusCode: number, data: any) {
  if (typeof res.status === 'function' && typeof res.json === 'function') {
    return res.status(statusCode).json(data);
  }
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
}

// HTML escaping helper to prevent injection in email bodies
function escapeHtml(str: string = ''): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default async function handler(req: any, res: any) {
  // 1. Configure CORS headers for multi-domain & Vercel preview compatibility
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  // 2. Enforce POST method
  if (req.method !== 'POST') {
    return sendJson(res, 405, {
      success: false,
      error: `Method ${req.method} not allowed. Please use POST.`,
    });
  }

  cleanupOldSubmissions();

  try {
    // 3. Parse and validate body
    const body: ContactRequestBody = await getRequestBody(req);

    const name = (body.name || '').trim();
    const email = (body.email || '').trim();
    const service = (body.service || '').trim();
    const description = (body.description || '').trim();
    const businessName = (body.businessName || '').trim();
    const budgetRange = (body.budgetRange || '').trim();
    const timeline = (body.timeline || '').trim();
    const inquiryType = body.type || 'project_brief';

    const errors: Record<string, string> = {};

    if (!name || name.length < 2) {
      errors.name = 'Full name is required (minimum 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.email = 'A valid email address is required.';
    }

    if (!service) {
      errors.service = 'Service selection is required.';
    }

    if (!description || description.length < 10) {
      errors.description = 'Please provide project details (minimum 10 characters).';
    }

    if (Object.keys(errors).length > 0) {
      return sendJson(res, 400, {
        success: false,
        error: 'Validation failed. Please correct the highlighted fields.',
        details: errors,
      });
    }

    // 4. Duplicate submission check (same email + description within 10 seconds)
    const submissionKey = `${email.toLowerCase()}_${service}`;
    const submissionHash = `${name}_${description.slice(0, 30)}`;
    const now = Date.now();
    const existing = recentSubmissions.get(submissionKey);

    if (existing && existing.hash === submissionHash && now - existing.timestamp < DUPLICATE_WINDOW_MS) {
      return sendJson(res, 429, {
        success: false,
        error: 'Duplicate inquiry detected. Your previous submission was received. Please wait a moment before sending another.',
      });
    }

    // 5. Verify Resend environment configuration
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey || resendApiKey.trim().length === 0) {
      return sendJson(res, 503, {
        success: false,
        error: 'Email delivery service is not configured. Missing RESEND_API_KEY environment variable. Please configure RESEND_API_KEY in Vercel Project Settings.',
        code: 'MISSING_API_KEY',
      });
    }

    const resend = new Resend(resendApiKey.trim());

    // Official studio recipient and sender configuration
    const toEmail = process.env.TO_EMAIL?.trim() || 'contact.forgetechnologies@gmail.com';
    const fromEmail = process.env.FROM_EMAIL?.trim() || 'Forge Technologies <onboarding@resend.dev>';

    const subject =
      inquiryType === 'product_interest'
        ? `Product Lab Interest: ${service} – ${name}`
        : `Project Inquiry: ${service} – ${name}${businessName ? ` (${businessName})` : ''}`;

    // Format plain text email for reliable fallback
    const plainTextBody = [
      `============================================================`,
      `FORGE TECHNOLOGIES — NEW CLIENT INQUIRY`,
      `============================================================`,
      ``,
      `Client Name:        ${name}`,
      `Client Email:       ${email}`,
      `Business / Store:   ${businessName || 'Not specified'}`,
      `Requested Service:  ${service}`,
      `Estimated Budget:   ${budgetRange || 'To be discussed'}`,
      `Target Timeline:    ${timeline || 'Flexible'}`,
      `Inquiry Category:   ${inquiryType}`,
      `Received At:        ${new Date().toISOString()}`,
      ``,
      `------------------------------------------------------------`,
      `PROJECT DESCRIPTION & REQUIREMENTS:`,
      `------------------------------------------------------------`,
      description,
      ``,
      `============================================================`,
      `Reply directly to this email to contact the client at ${email}.`,
      `============================================================`,
    ].join('\n');

    // Format elegant, high-contrast HTML email matching Forge brand identity
    const htmlBody = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0b0f19; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f1f5f9;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0b0f19; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #111827; border: 1px solid #1f2937; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);">
          
          <!-- Brand Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #070b12 0%, #1e293b 100%); padding: 28px 32px; border-bottom: 1px solid #1e293b;">
              <table width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <div style="font-size: 11px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: #38bdf8; margin-bottom: 6px;">
                      Client Inbound Pipeline
                    </div>
                    <div style="font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: -0.02em;">
                      FORGE <span style="color: #38bdf8;">TECHNOLOGIES</span>
                    </div>
                  </td>
                  <td align="right" valign="middle">
                    <span style="display: inline-block; background-color: #0369a1; color: #ffffff; font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 9999px; text-transform: uppercase; letter-spacing: 0.05em;">
                      ${escapeHtml(inquiryType.replace('_', ' '))}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Summary Hero -->
          <tr>
            <td style="padding: 28px 32px 12px 32px;">
              <h1 style="margin: 0 0 10px 0; font-size: 20px; font-weight: 700; color: #f8fafc; line-height: 1.3;">
                ${escapeHtml(subject)}
              </h1>
              <p style="margin: 0; font-size: 13px; color: #94a3b8; line-height: 1.5;">
                A new project brief was dispatched from your website contact form.
              </p>
            </td>
          </tr>

          <!-- Details Table -->
          <tr>
            <td style="padding: 16px 32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0f172a; border: 1px solid #1e293b; border-radius: 12px; overflow: hidden;">
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #1e293b; color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600; width: 35%;">
                    Client Name
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #1e293b; color: #f1f5f9; font-size: 13px; font-weight: 600;">
                    ${escapeHtml(name)}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #1e293b; color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">
                    Client Email
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #1e293b; color: #38bdf8; font-size: 13px;">
                    <a href="mailto:${escapeHtml(email)}" style="color: #38bdf8; text-decoration: none; font-weight: 600;">${escapeHtml(email)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #1e293b; color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">
                    Business / Store
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #1e293b; color: #f1f5f9; font-size: 13px;">
                    ${escapeHtml(businessName || 'Not specified')}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #1e293b; color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">
                    Service Requested
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #1e293b; color: #38bdf8; font-size: 13px; font-weight: 600;">
                    ${escapeHtml(service)}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #1e293b; color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">
                    Estimated Budget
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #1e293b; color: #10b981; font-size: 13px; font-weight: 600;">
                    ${escapeHtml(budgetRange || 'To be discussed')}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">
                    Target Timeline
                  </td>
                  <td style="padding: 12px 16px; color: #f1f5f9; font-size: 13px;">
                    ${escapeHtml(timeline || 'Flexible')}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Project Description Section -->
          <tr>
            <td style="padding: 12px 32px 28px 32px;">
              <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #94a3b8; margin-bottom: 8px;">
                Project Description & Requirements
              </div>
              <div style="background-color: #0f172a; border-left: 3px solid #38bdf8; border-radius: 6px; padding: 16px; color: #e2e8f0; font-size: 13px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(description)}</div>
            </td>
          </tr>

          <!-- Direct Reply Button -->
          <tr>
            <td style="padding: 0 32px 32px 32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${escapeHtml(email)}?subject=${encodeURIComponent(`Re: ${subject}`)}" style="display: inline-block; background-color: #38bdf8; color: #0b0f19; font-size: 13px; font-weight: 700; padding: 12px 28px; border-radius: 8px; text-decoration: none; letter-spacing: 0.02em;">
                      Reply directly to ${escapeHtml(name)} &rarr;
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #090d16; padding: 20px 32px; border-top: 1px solid #1e293b; text-align: center;">
              <p style="margin: 0; font-size: 11px; color: #64748b;">
                Dispatched securely via Forge Technologies Production API &middot; Target: <span style="color: #94a3b8;">${escapeHtml(toEmail)}</span>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // 6. Send the studio notification email via Resend
    const sendResult = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email, // Directly allows hitting 'Reply' in Gmail to contact the client
      subject: subject,
      text: plainTextBody,
      html: htmlBody,
    });

    if (sendResult.error) {
      console.error('[Resend Error]', sendResult.error);
      return sendJson(res, 502, {
        success: false,
        error: `Email delivery failed: ${sendResult.error.message || 'Error occurred while dispatching through Resend.'}`,
        code: sendResult.error.name || 'EMAIL_DELIVERY_FAILED',
      });
    }

    // Record submission to prevent duplicates
    recentSubmissions.set(submissionKey, {
      timestamp: now,
      hash: submissionHash,
    });

    // 7. Send client confirmation receipt
    let confirmationSent = false;
    try {
      const clientConfirmationHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>We received your project brief — Forge Technologies</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0b0f19; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f1f5f9;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0b0f19; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #111827; border: 1px solid #1f2937; border-radius: 16px; overflow: hidden;">
          <tr>
            <td style="background: linear-gradient(135deg, #070b12 0%, #1e293b 100%); padding: 28px 32px; border-bottom: 1px solid #1e293b;">
              <div style="font-size: 11px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: #38bdf8; margin-bottom: 6px;">
                Inquiry Confirmation
              </div>
              <div style="font-size: 22px; font-weight: 800; color: #ffffff;">
                FORGE <span style="color: #38bdf8;">TECHNOLOGIES</span>
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding: 28px 32px;">
              <h2 style="margin: 0 0 12px 0; font-size: 18px; font-weight: 700; color: #f8fafc;">
                Hello ${escapeHtml(name)},
              </h2>
              <p style="margin: 0 0 16px 0; font-size: 13px; color: #cbd5e1; line-height: 1.6;">
                Thank you for reaching out to <strong>Forge Technologies</strong>. We have successfully received your project inquiry for <strong>${escapeHtml(service)}</strong>.
              </p>
              <p style="margin: 0 0 20px 0; font-size: 13px; color: #cbd5e1; line-height: 1.6;">
                Our engineering team reviews every brief personally. We will review your goals, scope, and technical requirements and get back to you within <strong>24 to 48 business hours</strong> with honest feedback and clear next steps.
              </p>

              <div style="background-color: #0f172a; border: 1px solid #1e293b; border-radius: 10px; padding: 16px; margin-bottom: 20px;">
                <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #94a3b8; margin-bottom: 8px;">
                  Summary of your submitted brief:
                </div>
                <div style="font-size: 12px; color: #e2e8f0; line-height: 1.5;">
                  <strong>Service:</strong> ${escapeHtml(service)}<br/>
                  ${budgetRange ? `<strong>Budget Scope:</strong> ${escapeHtml(budgetRange)}<br/>` : ''}
                  ${timeline ? `<strong>Timeline:</strong> ${escapeHtml(timeline)}<br/>` : ''}
                  <strong>Description:</strong><br/>
                  <span style="color: #94a3b8; white-space: pre-wrap;">${escapeHtml(description)}</span>
                </div>
              </div>

              <p style="margin: 0; font-size: 12px; color: #94a3b8; line-height: 1.5;">
                Need to add details or share files? Feel free to reply directly to this email or reach us at <a href="mailto:contact.forgetechnologies@gmail.com" style="color: #38bdf8; text-decoration: none;">contact.forgetechnologies@gmail.com</a>.
              </p>
            </td>
          </tr>
          <tr>
            <td style="background-color: #090d16; padding: 18px 32px; border-top: 1px solid #1e293b; text-align: center;">
              <p style="margin: 0; font-size: 11px; color: #64748b;">
                &copy; ${new Date().getFullYear()} Forge Technologies. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `;

      const confirmResult = await resend.emails.send({
        from: fromEmail,
        to: [email],
        replyTo: toEmail,
        subject: `We received your project brief — Forge Technologies`,
        text: `Hello ${name},\n\nThank you for reaching out to Forge Technologies. We have received your project brief for ${service} and will review it and reply within 24-48 business hours.\n\nSummary:\nService: ${service}\nBudget: ${budgetRange || 'Flexible'}\nTimeline: ${timeline || 'Flexible'}\nDescription: ${description}\n\nBest regards,\nForge Technologies Team\ncontact.forgetechnologies@gmail.com`,
        html: clientConfirmationHtml,
      });

      if (!confirmResult.error) {
        confirmationSent = true;
      } else {
        // If Resend is in sandbox (onboarding@resend.dev), sending to external addresses requires domain verification.
        // We log the warning without failing the user's inquiry since the studio notification succeeded!
        console.warn('[Resend Sandbox Note] Confirmation email to user could not be sent (domain verification needed for unverified domains):', confirmResult.error.message);
      }
    } catch (confirmError: any) {
      console.warn('[Confirmation Email Notice]', confirmError?.message || confirmError);
    }

    return sendJson(res, 200, {
      success: true,
      message: 'Your project brief has been transmitted successfully. We will reply within 24–48 hours.',
      id: sendResult.data?.id,
      confirmationSent,
    });
  } catch (err: any) {
    console.error('[API Handler Unhandled Error]', err);
    return sendJson(res, 500, {
      success: false,
      error: `An unexpected server error occurred: ${err.message || 'Please try again later or reach out directly.'}`,
    });
  }
}
