import React, { useState, useEffect, useRef } from 'react';
import {
  Mail,
  Instagram,
  Send,
  Copy,
  CheckCircle2,
  ExternalLink,
  AlertCircle,
  Sparkles,
  ShieldCheck,
  Loader2,
  IndianRupee,
  RefreshCw
} from 'lucide-react';
import { useRouter } from '../router';
import { SERVICES } from '../data/services';
import { ProjectBriefForm, FormErrors } from '../types';
import { BUDGET_TIERS } from '../utils/currency';
import { BudgetCalculator } from '../components/BudgetCalculator';

export const ContactPage: React.FC = () => {
  const { searchParams } = useRouter();
  const isSubmittingRef = useRef(false);

  // Form state
  const [formData, setFormData] = useState<ProjectBriefForm>({
    name: '',
    email: '',
    businessName: '',
    service: '',
    budgetRange: '',
    timeline: '',
    description: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [confirmationNotice, setConfirmationNotice] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  // Sync service and budget from URL search parameters if passed
  useEffect(() => {
    const preselectedServiceId = searchParams.get('service');
    if (preselectedServiceId) {
      const matched = SERVICES.find(
        (s) => s.id === preselectedServiceId || s.title.toLowerCase() === preselectedServiceId.toLowerCase()
      );
      if (matched) {
        setFormData((prev) => ({ ...prev, service: matched.title }));
      }
    }
    const preselectedBudget = searchParams.get('budget');
    if (preselectedBudget) {
      setFormData((prev) => ({ ...prev, budgetRange: decodeURIComponent(preselectedBudget) }));
    }
  }, [searchParams]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a primary service of interest.';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Please provide a brief description of your project or requirements.';
    } else if (formData.description.trim().length < 10) {
      newErrors.description = 'Please share a few more details (minimum 10 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateEmailSubject = (): string => {
    const company = formData.businessName ? ` (${formData.businessName})` : '';
    return `Project Inquiry: ${formData.service} – ${formData.name}${company}`;
  };

  const generateEmailBody = (): string => {
    return [
      `Hello Forge Technologies team,`,
      ``,
      `I would like to discuss a project with the following requirements:`,
      ``,
      `----------------------------------------`,
      `PROJECT BRIEF DETAILS`,
      `----------------------------------------`,
      `Client Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Business / Store: ${formData.businessName || 'Not specified'}`,
      `Service Requested: ${formData.service}`,
      `Estimated Budget: ${formData.budgetRange || 'To be discussed'}`,
      `Target Timeline: ${formData.timeline || 'Flexible'}`,
      ``,
      `Project Description & Goals:`,
      formData.description,
      `----------------------------------------`,
      ``,
      `Looking forward to your response.`,
      `Best regards,`,
      formData.name,
    ].join('\n');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmittingRef.current || isSubmitting) {
      return;
    }

    if (!validate()) {
      return;
    }

    setSubmissionError(null);
    setConfirmationNotice(null);
    setIsSubmitting(true);
    isSubmittingRef.current = true;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          businessName: formData.businessName.trim(),
          service: formData.service,
          budgetRange: formData.budgetRange,
          timeline: formData.timeline,
          description: formData.description.trim(),
          type: 'project_brief',
        }),
      });

      let data: any = {};
      try {
        data = await response.json();
      } catch (parseErr) {
        throw new Error('Server returned an unparseable response.');
      }

      if (response.ok && data.success) {
        setSubmissionSuccess(true);
        setSubmissionError(null);
        if (data.confirmationSent) {
          setConfirmationNotice(`A confirmation copy was also sent to ${formData.email}.`);
        }
      } else {
        // Explicitly handle failure: NEVER show success when delivery failed
        setSubmissionSuccess(false);
        const errorMsg =
          data.error ||
          (data.details && Object.values(data.details).join(' ')) ||
          'Failed to transmit inquiry to server. Please try again.';
        setSubmissionError(errorMsg);
      }
    } catch (err: any) {
      setSubmissionSuccess(false);
      setSubmissionError(
        err.message || 'Network connection failed. Please check your internet connection or use direct email below.'
      );
    } finally {
      setIsSubmitting(false);
      isSubmittingRef.current = false;
    }
  };

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generateEmailBody());
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
    }
  };

  const getGmailWebUrl = (): string => {
    const subject = encodeURIComponent(generateEmailSubject());
    const body = encodeURIComponent(generateEmailBody());
    return `https://mail.google.com/mail/?view=cm&fs=1&to=contact.forgetechnologies@gmail.com&su=${subject}&body=${body}`;
  };

  return (
    <div className="space-y-16 md:space-y-24 pb-24 text-slate-800">
      {/* Header */}
      <section className="pt-8 sm:pt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono-code text-sky-700 uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" aria-hidden="true" />
            <span>Fast Inquiries · Verified Direct Pipeline</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.12]">
            Let's build something remarkable together.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
            Tell us about your project, desired launch date, and budget. We review every brief personally and reply
            within 24 to 48 business hours with an honest estimate and clear roadmap.
          </p>
        </div>
      </section>

      {/* Interactive Scope & Estimated Budget Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BudgetCalculator
          defaultService={formData.service}
          onApplyEstimate={(serviceName, budgetRange, timeline) => {
            setFormData((prev) => ({
              ...prev,
              service: serviceName,
              budgetRange,
              timeline,
            }));
            const formElem = document.getElementById('project-brief-form');
            if (formElem) {
              formElem.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />
      </section>

      {/* Main Grid: Direct Channels & Project Brief Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Left Column: Direct Contact & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl bg-white border border-slate-300 shadow-sm space-y-6">
              <h2 className="font-heading text-xl font-bold text-slate-900">
                Direct Communication Channels
              </h2>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-mono-code uppercase tracking-wider text-slate-500 font-semibold">
                      Direct Email Inquiries
                    </p>
                    <a
                      href="mailto:contact.forgetechnologies@gmail.com"
                      className="font-medium text-slate-900 hover:text-sky-700 underline underline-offset-2 break-all transition-colors"
                    >
                      contact.forgetechnologies@gmail.com
                    </a>
                    <p className="text-xs text-slate-500">
                      Direct inbox for founders, shop owners, and collaborators
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0 mt-0.5">
                    <Instagram className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-mono-code uppercase tracking-wider text-slate-500 font-semibold">
                      Instagram Profile
                    </p>
                    <a
                      href="https://instagram.com/forge_technologies"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-slate-900 hover:text-sky-700 underline underline-offset-2 transition-colors"
                    >
                      <span>@forge_technologies</span>
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                    <p className="text-xs text-slate-500">
                      Design work-in-progress, updates, and direct messaging
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Client Commitments */}
            <div className="p-7 rounded-2xl bg-slate-900 text-white space-y-4 shadow-sm border border-slate-800">
              <h3 className="font-heading text-lg font-bold text-white">
                Client Commitments:
              </h3>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong className="text-white">Response in 24–48 hours:</strong> Direct technical review from senior staff.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong className="text-white">No sales pressure:</strong> Honest feasibility feedback and realistic budget options.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong className="text-white">Mutual NDA friendly:</strong> We gladly sign NDAs to protect your proprietary ideas.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong className="text-white">100% Code Ownership:</strong> You retain complete ownership of all delivered work.
                  </span>
                </li>
              </ul>
            </div>

            {/* Secure Infrastructure Note */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 shadow-xs space-y-2">
              <div className="flex items-center gap-1.5 font-semibold text-slate-900">
                <ShieldCheck className="w-4 h-4 text-sky-600" aria-hidden="true" />
                <span>Production Email Infrastructure</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Client inquiries are routed through our authenticated serverless pipeline directly into our verified studio inbox (<code className="text-sky-700 font-mono-code">contact.forgetechnologies@gmail.com</code>). All transmissions are SSL encrypted and confidential.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7" id="project-brief-form">
            <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-md">
              <div className="mb-6 space-y-1">
                <div className="flex items-center justify-between">
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    Project Requirements Brief
                  </h2>
                  <span className="font-mono-code text-[11px] text-sky-800 dark:text-sky-300 bg-sky-50 dark:bg-sky-950 px-2.5 py-0.5 rounded-full border border-sky-300 dark:border-sky-800 font-semibold">
                    Direct Studio Pipeline
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                  Fill in the details below to dispatch your brief or request a tailored consultation.
                </p>
              </div>

              {submissionSuccess ? (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="p-6 rounded-xl bg-sky-50 dark:bg-sky-950/70 border border-sky-300 dark:border-sky-800 text-slate-900 dark:text-slate-100 space-y-3">
                    <div className="flex items-center gap-2.5 text-sky-900 dark:text-sky-300 font-bold text-base">
                      <CheckCircle2 className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0" aria-hidden="true" />
                      <span>Inquiry Sent Successfully!</span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                      Thank you, <strong>{formData.name}</strong>. Your project brief for{' '}
                      <strong>{formData.service}</strong> has been transmitted to our engineering team at{' '}
                      <strong>contact.forgetechnologies@gmail.com</strong>. We will review your requirements
                      and get back to you at <strong>{formData.email}</strong> within 24 to 48 hours.
                    </p>
                    {confirmationNotice && (
                      <p className="text-xs text-sky-800 dark:text-sky-200 font-medium pt-1">
                        ✓ {confirmationNotice}
                      </p>
                    )}
                    {formData.budgetRange && (
                      <div className="flex items-center gap-2 pt-1 font-mono-code text-xs text-sky-950 dark:text-sky-200">
                        <IndianRupee className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                        <span>Estimated Budget Scope: <strong className="font-bold">{formData.budgetRange}</strong></span>
                      </div>
                    )}
                  </div>

                  {/* Direct Backup & Record Options */}
                  <div className="space-y-3 pt-2">
                    <p className="font-mono-code text-xs uppercase tracking-wider text-slate-500 font-semibold">
                      Direct Backup & Record Options
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={handleCopyToClipboard}
                        className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-md transition-colors"
                      >
                        {copied ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400" aria-hidden="true" />
                            <span>Copied to Clipboard!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 text-slate-500" aria-hidden="true" />
                            <span>Copy Brief to Clipboard</span>
                          </>
                        )}
                      </button>

                      <a
                        href={getGmailWebUrl()}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-sky-600 dark:hover:bg-sky-500 rounded-md transition-colors"
                      >
                        <span>Open in Gmail Web</span>
                        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  </div>

                  {/* Formatted Preview Box */}
                  <div className="space-y-2 pt-2">
                    <p className="font-mono-code text-xs uppercase tracking-wider text-slate-500 font-semibold">
                      Your Submitted Brief
                    </p>
                    <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono-code whitespace-pre-wrap leading-relaxed max-h-64 overflow-y-auto">
                      {generateEmailBody()}
                    </pre>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmissionSuccess(false);
                        setSubmissionError(null);
                        setConfirmationNotice(null);
                        setFormData({
                          name: '',
                          email: '',
                          businessName: '',
                          service: '',
                          budgetRange: '',
                          timeline: '',
                          description: '',
                        });
                      }}
                      className="inline-flex items-center gap-1.5 text-xs text-sky-700 dark:text-sky-400 hover:underline font-semibold"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Submit another inquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Global Server Error Alert */}
                  {submissionError && (
                    <div
                      role="alert"
                      className="p-4 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-300 dark:border-red-800 text-red-900 dark:text-red-200 space-y-2 animate-in fade-in duration-200"
                    >
                      <div className="flex items-center gap-2 text-sm font-semibold text-red-800 dark:text-red-300">
                        <AlertCircle className="w-4 h-4 shrink-0 text-red-600 dark:text-red-400" />
                        <span>Submission Encountered an Issue</span>
                      </div>
                      <p className="text-xs text-red-700 dark:text-red-300 leading-relaxed">
                        {submissionError}
                      </p>
                      <div className="pt-1 text-[11px] text-red-600 dark:text-red-400 border-t border-red-200 dark:border-red-800/80">
                        Need immediate assistance? You can also email us directly at{' '}
                        <a
                          href="mailto:contact.forgetechnologies@gmail.com"
                          className="font-bold underline hover:text-red-900 dark:hover:text-red-100"
                        >
                          contact.forgetechnologies@gmail.com
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-slate-900 dark:text-white bg-white dark:bg-slate-950 placeholder:text-slate-400 transition-colors focus:border-slate-900 dark:focus:border-sky-400 focus-visible:ring-2 focus-visible:ring-sky-500 ${
                          errors.name ? 'border-red-400 bg-red-50 dark:bg-red-950/30' : 'border-slate-300 dark:border-slate-700'
                        }`}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Work / Personal Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="e.g. alex@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-slate-900 dark:text-white bg-white dark:bg-slate-950 placeholder:text-slate-400 transition-colors focus:border-slate-900 dark:focus:border-sky-400 focus-visible:ring-2 focus-visible:ring-sky-500 ${
                          errors.email ? 'border-red-400 bg-red-50 dark:bg-red-950/30' : 'border-slate-300 dark:border-slate-700'
                        }`}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Business Name & Service Requested */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="businessName" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Business or Store Name <span className="text-slate-500 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Artisan Goods Boutique"
                        className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white bg-white dark:bg-slate-950 placeholder:text-slate-400 focus:border-slate-900 dark:focus:border-sky-400 focus-visible:ring-2 focus-visible:ring-sky-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Service of Interest *
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => {
                          setFormData({ ...formData, service: e.target.value });
                          if (errors.service) setErrors({ ...errors, service: undefined });
                        }}
                        className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-slate-900 dark:text-white bg-white dark:bg-slate-950 transition-colors focus:border-slate-900 dark:focus:border-sky-400 focus-visible:ring-2 focus-visible:ring-sky-500 ${
                          errors.service ? 'border-red-400 bg-red-50 dark:bg-red-950/30' : 'border-slate-300 dark:border-slate-700'
                        }`}
                        aria-invalid={!!errors.service}
                        aria-describedby={errors.service ? 'service-error' : undefined}
                      >
                        <option value="">Select primary service...</option>
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Multi-Service Package (Web + Branding + Social)">
                          Multi-Service Package (Web + Branding + Social)
                        </option>
                        <option value="Custom Software / AI Consulting">Custom Software / AI Consulting</option>
                      </select>
                      {errors.service && (
                        <p id="service-error" className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.service}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Budget & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="budgetRange" className="block text-xs font-bold text-slate-900 dark:text-white mb-1.5 flex items-center justify-between">
                        <span>
                          Estimated Budget (₹ INR) <span className="text-slate-500 font-normal">(Optional)</span>
                        </span>
                      </label>
                      <select
                        id="budgetRange"
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white bg-white dark:bg-slate-950 focus:border-slate-900 dark:focus:border-sky-400 focus-visible:ring-2 focus-visible:ring-sky-500 transition-colors"
                      >
                        <option value="">Select a ballpark range...</option>
                        {BUDGET_TIERS.map((tier) => (
                          <option key={tier.id} value={tier.value}>
                            {tier.label}
                          </option>
                        ))}
                        {formData.budgetRange && !BUDGET_TIERS.some((t) => t.value === formData.budgetRange) && (
                          <option value={formData.budgetRange}>{formData.budgetRange}</option>
                        )}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-xs font-bold text-slate-900 dark:text-white mb-1.5">
                        Target Launch Window <span className="text-slate-500 font-normal">(Optional)</span>
                      </label>
                      <select
                        id="timeline"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white bg-white dark:bg-slate-950 focus:border-slate-900 dark:focus:border-sky-400 focus-visible:ring-2 focus-visible:ring-sky-500 transition-colors"
                      >
                        <option value="">Select timeline...</option>
                        <option value="Urgent (1–2 weeks)">Urgent (1–2 weeks)</option>
                        <option value="Within 1 month">Within 1 month</option>
                        <option value="2–3 months">2–3 months</option>
                        <option value="Flexible / Exploring ideas">Flexible / Exploring ideas</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label htmlFor="description" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Project Description & Requirements *
                    </label>
                    <textarea
                      id="description"
                      rows={4}
                      value={formData.description}
                      onChange={(e) => {
                        setFormData({ ...formData, description: e.target.value });
                        if (errors.description) setErrors({ ...errors, description: undefined });
                      }}
                      placeholder="Tell us what you'd like to build, key features, preferred design style, reference websites, or business goals..."
                      className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-slate-900 dark:text-white bg-white dark:bg-slate-950 placeholder:text-slate-400 transition-colors focus:border-slate-900 dark:focus:border-sky-400 focus-visible:ring-2 focus-visible:ring-sky-500 resize-none ${
                        errors.description ? 'border-red-400 bg-red-50 dark:bg-red-950/30' : 'border-slate-300 dark:border-slate-700'
                      }`}
                      aria-invalid={!!errors.description}
                      aria-describedby={errors.description ? 'description-error' : undefined}
                    />
                    {errors.description && (
                      <p id="description-error" className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.description}</span>
                      </p>
                    )}
                  </div>

                  {/* Policy Acceptance Notice */}
                  <div className="pt-1 flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    <ShieldCheck className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>
                      By submitting this brief, you agree to our{' '}
                      <a href="/policies" className="text-sky-700 dark:text-sky-400 underline hover:text-sky-900 dark:hover:text-sky-300 font-medium">
                        Client Service Terms
                      </a>{' '}
                      and{' '}
                      <a href="/policies#privacy" className="text-sky-700 dark:text-sky-400 underline hover:text-sky-900 dark:hover:text-sky-300 font-medium">
                        Privacy Policy
                      </a>
                      . Your brief is transmitted confidentially.
                    </span>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-sky-600 dark:hover:bg-sky-500 disabled:opacity-60 disabled:cursor-not-allowed rounded-md transition-all shadow-xs focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin text-white" />
                          <span>Sending project brief to engineering team...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Project Brief</span>
                          <Send className="ml-2 w-4 h-4" aria-hidden="true" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
