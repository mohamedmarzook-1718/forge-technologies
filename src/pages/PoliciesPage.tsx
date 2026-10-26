import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  FileText,
  RefreshCw,
  Lock,
  CheckCircle2,
  Clock,
  ArrowRight,
  HelpCircle,
  Mail,
  AlertCircle,
  Terminal,
  FileCode2,
  Key,
  Database
} from 'lucide-react';
import { Link, useRouter } from '../router';

type PolicyTab = 'terms' | 'privacy' | 'refunds';

export const PoliciesPage: React.FC = () => {
  const { currentPath } = useRouter();
  const [activeTab, setActiveTab] = useState<PolicyTab>('terms');

  useEffect(() => {
    if (currentPath === '/privacy' || window.location.hash === '#privacy') {
      setActiveTab('privacy');
    } else if (currentPath === '/terms' || window.location.hash === '#terms') {
      setActiveTab('terms');
    } else if (window.location.hash === '#refunds') {
      setActiveTab('refunds');
    }
  }, [currentPath]);

  return (
    <div className="space-y-16 md:space-y-24 pb-24 text-slate-800">
      {/* Header */}
      <section className="pt-8 sm:pt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono-code text-sky-700 uppercase tracking-widest font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            <span>Governance & Legal Transparency</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-slate-500">Updated: October 2026</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.12]">
            Clear, comprehensive client freelance policies.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
            As a freelance digital engineering studio, we protect our clients with transparent contracts.
            Below you will find our comprehensive terms of service, 100% intellectual property handover guarantee,
            Web3Forms privacy disclosures, and fair milestone refund frameworks.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="mt-10 flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
          <button
            type="button"
            onClick={() => setActiveTab('terms')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap focus-visible:ring-2 focus-visible:ring-sky-500 ${
              activeTab === 'terms'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Client Service Agreement (Terms)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('privacy')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap focus-visible:ring-2 focus-visible:ring-sky-500 ${
              activeTab === 'privacy'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <Lock className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Privacy & Web3Forms Policy</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('refunds')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap focus-visible:ring-2 focus-visible:ring-sky-500 ${
              activeTab === 'refunds'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Revisions, Warranty & Refunds</span>
          </button>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Document Body */}
          <div className="lg:col-span-8 bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-sm space-y-10">
            {activeTab === 'terms' && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div className="border-b border-slate-200 pb-5">
                  <h2 className="font-heading text-2xl font-bold text-slate-900">
                    Client Freelance Service Agreement
                  </h2>
                  <p className="text-slate-500 text-xs font-mono-code mt-1">
                    Standard terms governing all digital, engineering, and creative engagements by Forge Technologies.
                  </p>
                </div>

                {/* Section 1 */}
                <div className="space-y-3">
                  <h3 className="font-heading text-lg font-bold text-slate-900 flex items-center gap-2">
                    <span className="font-mono-code text-xs text-sky-800 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded font-semibold">
                      01
                    </span>
                    <span>Written Scope of Work & Milestone Agreements</span>
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Prior to receiving initial deposits or commencing engineering work, Forge Technologies issues a detailed
                    Statement of Work (SOW). This document specifies all deliverables, technology choices, milestones,
                    and anticipated delivery dates. Any feature additions, third-party integrations, or architectural changes
                    requested subsequent to this document are treated as Change Requests and must be agreed upon in writing
                    with transparent timeline adjustments.
                  </p>
                </div>

                {/* Section 2 */}
                <div className="space-y-3">
                  <h3 className="font-heading text-lg font-bold text-slate-900 flex items-center gap-2">
                    <span className="font-mono-code text-xs text-sky-800 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded font-semibold">
                      02
                    </span>
                    <span>100% Intellectual Property & Code Sovereignty</span>
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We maintain an unconditional zero-lock-in standard. Upon receipt of full and final payment for an engagement
                    or agreed milestone, <strong>100% of all custom source code, documentation, database schemas, Figma/vector assets,
                    and deployment scripts become the exclusive intellectual property of the client</strong>. We transfer git repositories
                    directly to your organization and retain no proprietary licensing claims.
                  </p>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>
                      Open-source software libraries (such as React, Tailwind CSS, Spring Framework, or Three.js) remain subject
                      to their respective MIT/Apache 2.0 licenses without proprietary restrictions.
                    </span>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="space-y-3">
                  <h3 className="font-heading text-lg font-bold text-slate-900 flex items-center gap-2">
                    <span className="font-mono-code text-xs text-sky-800 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded font-semibold">
                      03
                    </span>
                    <span>Direct Senior Communication & Review Milestones</span>
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Clients collaborate directly with the lead developer handling their project via designated channels
                    (Email, Slack, WhatsApp, or scheduled video check-ins). Private staging previews are provided for every
                    milestone to enable hands-on validation. Each milestone includes two (2) complimentary structured rounds
                    of design or functional revisions to ensure perfect alignment.
                  </p>
                </div>

                {/* Section 4 */}
                <div className="space-y-3">
                  <h3 className="font-heading text-lg font-bold text-slate-900 flex items-center gap-2">
                    <span className="font-mono-code text-xs text-sky-800 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded font-semibold">
                      04
                    </span>
                    <span>Payment Terms & Milestone Distribution</span>
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    To reserve exclusive engineering capacity, freelance projects require an initial deposit (typically 30% to 50%
                    depending on project size). The remaining balance is split across concrete milestone sign-offs
                    (e.g., Prototype Approval, Functional Staging, and Production Deployment). Invoices are payable within seven (7)
                    business days of issuance via direct bank transfer or authorized payment gateway.
                  </p>
                </div>

                {/* Section 5 */}
                <div className="space-y-3">
                  <h3 className="font-heading text-lg font-bold text-slate-900 flex items-center gap-2">
                    <span className="font-mono-code text-xs text-sky-800 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded font-semibold">
                      05
                    </span>
                    <span>Third-Party Accounts & Infrastructure Ownership</span>
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We ensure you own your infrastructure. Domain registrations, hosting accounts (Vercel, GitHub Pages, Cloudflare, AWS),
                    payment gateways (Stripe), and API services (Web3Forms, OpenAI) are created directly in your company's name.
                    Forge Technologies never serves as an opaque middleman holding client hosting or DNS hostage.
                  </p>
                </div>

                {/* Section 6 */}
                <div className="space-y-3">
                  <h3 className="font-heading text-lg font-bold text-slate-900 flex items-center gap-2">
                    <span className="font-mono-code text-xs text-sky-800 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded font-semibold">
                      06
                    </span>
                    <span>14-Day Post-Launch Code Warranty</span>
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Every delivered project includes a complimentary 14-day warranty beginning on the day of production deployment.
                    If any bug, broken link, or deviation from the agreed specification arises within this period, Forge Technologies
                    will rectify the issue promptly at zero additional charge.
                  </p>
                </div>

                {/* Section 7 */}
                <div className="space-y-3">
                  <h3 className="font-heading text-lg font-bold text-slate-900 flex items-center gap-2">
                    <span className="font-mono-code text-xs text-sky-800 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded font-semibold">
                      07
                    </span>
                    <span>Mutual Non-Disclosure & Confidentiality</span>
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We routinely sign mutual Non-Disclosure Agreements (NDAs) with startups and retail businesses.
                    All proprietary commercial ideas, unpublished source code, financial data, and customer records shared with
                    Forge Technologies are treated with strict confidentiality.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'privacy' && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div className="border-b border-slate-200 pb-5">
                  <h2 className="font-heading text-2xl font-bold text-slate-900">
                    Privacy & Data Protection Policy
                  </h2>
                  <p className="text-slate-500 text-xs font-mono-code mt-1">
                    How Forge Technologies collects, processes, and safeguards client information.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-heading text-lg font-bold text-slate-900">
                    1. Information We Collect
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We only collect information voluntarily provided by you. When you submit a project brief or reach out to us,
                    we collect:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600">
                    <li>Your full name and contact email address</li>
                    <li>Business name, website URL, or retail store details</li>
                    <li>Requested service, estimated budget range, and timeline goals</li>
                    <li>Technical specifications, brand guidelines, and project notes</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-heading text-lg font-bold text-slate-900">
                    2. Web3Forms Service Processing
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Inquiries dispatched through our website form are transmitted using <strong>Web3Forms</strong>, an encrypted,
                    GDPR-compliant form routing API. Web3Forms validates the submission and delivers it directly to our official
                    monitored inbox (<code className="font-mono-code text-xs bg-slate-100 px-1.5 py-0.5 rounded text-sky-700">contact.forgetechnologies@gmail.com</code>).
                    Submissions are not stored in public databases or mined for ad targeting.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-heading text-lg font-bold text-slate-900">
                    3. No Third-Party Data Brokering
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Forge Technologies will never sell, lease, or distribute your email address, business ideas, or project brief
                    to third-party advertisers or lead-generation brokers. All communication remains strictly between you and
                    our engineering team.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-heading text-lg font-bold text-slate-900">
                    4. Zero Invasive Tracking Cookies
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    This website is built as an ultra-fast static application. We do not place advertising tracking pixels (such as
                    Meta, TikTok, or Google Ads Remarketing cookies) on your browser.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-heading text-lg font-bold text-slate-900">
                    5. Data Subject Rights
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    You have the right to request a copy of the project notes or contact records we hold, or to request the complete
                    deletion of your inquiry data from our email archives at any time by emailing{' '}
                    <a href="mailto:contact.forgetechnologies@gmail.com" className="text-sky-700 hover:underline font-medium">
                      contact.forgetechnologies@gmail.com
                    </a>.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'refunds' && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div className="border-b border-slate-200 pb-5">
                  <h2 className="font-heading text-2xl font-bold text-slate-900">
                    Revisions, Cancellation & Refund Policy
                  </h2>
                  <p className="text-slate-500 text-xs font-mono-code mt-1">
                    Equitable, clear guidelines for project revisions and milestone settlements.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-heading text-lg font-bold text-slate-900">
                    1. Complimentary Revision Cycles
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Every design prototype and engineering milestone includes two (2) comprehensive rounds of feedback.
                    Revisions include visual styling adjustments, layout tuning, copy tweaks, responsive adjustments, and bug fixes
                    within the agreed scope. Requests that introduce entirely new functionality outside the Statement of Work are
                    estimated as separate micro-sprints.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-heading text-lg font-bold text-slate-900">
                    2. Pre-Commencement Deposit Refund
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    If you decide to cancel an engagement prior to the commencement of any architectural research, design wireframing,
                    or development work, 100% of your deposit will be refunded within 5 business days without penalty.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-heading text-lg font-bold text-slate-900">
                    3. Mid-Stream Project Cancellation & Asset Handover
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Because bespoke development requires reserving exclusive engineering hours, milestone deposits for active phases
                    are non-refundable once work in that phase has commenced. If a project is cancelled mid-development by mutual
                    agreement, you will only be invoiced for completed milestones, and all code, Figma files, and assets produced up
                    to that moment will be immediately transferred to you.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-heading text-lg font-bold text-slate-900">
                    4. 14-Day Defect Remediation Warranty
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    If any delivered feature does not perform according to the agreed specification upon production launch, we will
                    remediate the defect under our 14-day warranty at no additional charge.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Highlights */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4 shadow-sm border border-slate-800">
              <div className="w-10 h-10 rounded-lg bg-sky-950 flex items-center justify-center text-sky-400 border border-sky-800/50">
                <ShieldCheck className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-lg font-bold text-white">
                Client Sovereignty Guarantees
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>100% sovereign code & asset ownership</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Transparent milestone-based invoices</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>2 included revision rounds per milestone</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>14-day post-launch code warranty</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Mutual NDA execution upon request</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <h4 className="font-heading text-base font-bold text-slate-900">
                Need contract customizations?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We are happy to review your company's vendor agreements, sign tailored NDAs, or adapt to your specific procurement requirements.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-900"
                >
                  <span>Discuss contract requirements</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
              <div className="flex items-center gap-1.5 font-semibold text-slate-900">
                <Mail className="w-3.5 h-3.5 text-sky-600" aria-hidden="true" />
                <span>Legal & Inquiries Channel</span>
              </div>
              <p className="font-mono-code text-[11px] text-slate-700 break-all">
                contact.forgetechnologies@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
