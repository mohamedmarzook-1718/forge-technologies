import React, { useState } from 'react';
import {
  Package,
  Layers,
  Sparkles,
  ArrowRight,
  Send,
  CheckCircle2,
  Bell,
  Code2,
  Clock,
  Compass,
  Terminal,
  ShieldCheck
} from 'lucide-react';
import { Link } from '../router';

export const ProductsPage: React.FC = () => {
  const [notifyEmail, setNotifyEmail] = useState('');
  const [productIdea, setProductIdea] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInterestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!notifyEmail || !notifyEmail.includes('@')) return;

    // Static site handler: generates pre-filled mailto
    const subject = encodeURIComponent(`Product Lab Inquiry / Early Access – ${notifyEmail}`);
    const body = encodeURIComponent(
      `Hello Forge Technologies team,\n\nI would like to be notified when Forge Technologies releases software products and internal tools.\n\nEmail: ${notifyEmail}\nFeedback / Tool Idea: ${productIdea || 'None provided'}\n\nRegards.`
    );
    window.location.href = `mailto:contact.forgetechnologies@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 md:space-y-24 pb-24 text-slate-800">
      {/* Header */}
      <section className="pt-8 sm:pt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono-code text-sky-700 uppercase tracking-widest font-semibold">
            <Terminal className="w-3.5 h-3.5" />
            <span>Internal R&D Lab</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.12]">
            Purpose-built software tools, utilities, and components.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
            In addition to custom client engagements, Forge Technologies develops standalone software utilities
            and reusable starter engines aimed at simplifying retail operations and startup workflows.
          </p>
        </div>
      </section>

      {/* Hero Showcase Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white text-slate-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 space-y-6">
              <div className="inline-flex items-center gap-2 font-mono-code text-xs text-sky-700 uppercase tracking-wider font-semibold">
                <Clock className="w-3.5 h-3.5 text-sky-600" aria-hidden="true" />
                <span>Active Research & Development</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
                Upcoming Products & Starter Frameworks
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We are currently engineering lightweight tools designed around common friction points we see in small business:
                rapid retail inventory sync helpers, offline-first order trackers, and drop-in business chatbot scaffolding.
              </p>

              <div className="space-y-2 text-xs font-mono-code text-slate-500">
                <p>· Zero bloat · Self-hostable or cloud-native · Clean code principles</p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="#early-access"
                  className="inline-flex items-center justify-center px-5 py-3 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors shadow-xs"
                >
                  <span>Join early interest list</span>
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 text-xs font-medium text-slate-700 hover:text-slate-900 border border-slate-200 bg-white hover:bg-slate-50 rounded-md transition-colors shadow-xs"
                >
                  <span>Commission a custom tool</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 h-72 sm:h-96 lg:h-full relative min-h-[340px] bg-slate-100">
              <img
                src="/src/assets/images/products_forge_lab_1792698504079.jpg"
                alt="Forge Technologies laboratory workstation and testbench"
                className="w-full h-full object-cover filter contrast-[1.02]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-900/10 lg:bg-gradient-to-r lg:from-white/40 lg:via-transparent lg:to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Roadmap / Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="font-mono-code text-xs uppercase tracking-wider text-sky-700 font-semibold mb-2">
            Focus Areas
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
            What our product lab focuses on
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            We don't build generic SaaS bloatware. Our internal projects focus on solving concrete operational hurdles for retail and startups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-xl bg-white border border-slate-200/90 shadow-xs space-y-4 hover:border-slate-300 hover:shadow-sm transition-all">
            <span className="font-mono-code text-xs text-sky-700 font-bold tracking-wider">
              PILLAR 01
            </span>
            <h3 className="font-heading text-lg font-bold text-slate-900">
              Retail Workflow Tools
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Lightweight utilities for inventory auditing, digital receipt formatting, and local promotion management without recurring monthly SaaS fees.
            </p>
            <div className="pt-2 font-mono-code text-xs text-slate-500">
              Status: Scoping & Architecture
            </div>
          </div>

          <div className="p-7 rounded-xl bg-white border border-slate-200/90 shadow-xs space-y-4 hover:border-slate-300 hover:shadow-sm transition-all">
            <span className="font-mono-code text-xs text-sky-700 font-bold tracking-wider">
              PILLAR 02
            </span>
            <h3 className="font-heading text-lg font-bold text-slate-900">
              Startup Launch Scaffolds
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Production-ready starter kits for modern React and full-stack web applications designed to take founders from idea to working prototype in days.
            </p>
            <div className="pt-2 font-mono-code text-xs text-slate-500">
              Status: Internal Prototyping
            </div>
          </div>

          <div className="p-7 rounded-xl bg-white border border-slate-200/90 shadow-xs space-y-4 hover:border-slate-300 hover:shadow-sm transition-all">
            <span className="font-mono-code text-xs text-sky-700 font-bold tracking-wider">
              PILLAR 03
            </span>
            <h3 className="font-heading text-lg font-bold text-slate-900">
              AI Micro-Automations
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Drop-in customer assistant modules that connect to small business documentation, product manuals, and FAQ sheets to automate frontline inquiries.
            </p>
            <div className="pt-2 font-mono-code text-xs text-slate-500">
              Status: Early Validation
            </div>
          </div>
        </div>
      </section>

      {/* Early Access & Feedback Form */}
      <section id="early-access" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-white border border-slate-200 shadow-sm max-w-3xl mx-auto space-y-6">
          <div className="space-y-2">
            <p className="font-mono-code text-xs uppercase tracking-wider text-sky-700 font-semibold">
              Early Access & Input
            </p>
            <h3 className="font-heading text-2xl font-bold text-slate-900">
              Have an operational problem you'd like us to solve?
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Tell us what repetitive digital task eats up your team's time, or register your email to receive updates when our tools are released.
            </p>
          </div>

          {submitted ? (
            <div className="p-5 rounded-lg bg-sky-50 border border-sky-200 text-sky-900 text-sm flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0" aria-hidden="true" />
              <div>
                <p className="font-semibold">Thank you for your interest.</p>
                <p className="text-xs text-slate-600 mt-0.5">
                  Your mail client has been opened with your note. We review every tool suggestion carefully.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleInterestSubmit} className="space-y-4">
              <div>
                <label htmlFor="notifyEmail" className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Email Address *
                </label>
                <input
                  type="email"
                  id="notifyEmail"
                  required
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  placeholder="name@business.com"
                  className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:border-slate-900 focus-visible:ring-2 focus-visible:ring-sky-500"
                />
              </div>

              <div>
                <label htmlFor="productIdea" className="block text-xs font-semibold text-slate-700 mb-1">
                  What kind of tool or automation would help your business? (Optional)
                </label>
                <textarea
                  id="productIdea"
                  rows={3}
                  value={productIdea}
                  onChange={(e) => setProductIdea(e.target.value)}
                  placeholder="e.g. A lightweight tool to sync store inventory with our website..."
                  className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:border-slate-900 focus-visible:ring-2 focus-visible:ring-sky-500 resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                <p className="text-[11px] font-mono-code text-slate-500">
                  Static action · Opens mailto to contact.forgetechnologies@gmail.com
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors shadow-xs whitespace-nowrap"
                >
                  <span>Submit interest</span>
                  <Send className="ml-1.5 w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Custom Solution Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
          Need a dedicated software solution today?
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
          Instead of waiting for an off-the-shelf product, we can design and build a custom application tailored specifically for your business workflow.
        </p>
        <div className="pt-2">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors shadow-xs"
          >
            <span>Commission a custom solution</span>
            <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
};
