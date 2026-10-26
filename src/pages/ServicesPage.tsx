import React, { useState } from 'react';
import {
  Globe,
  Code2,
  Smartphone,
  Cpu,
  Bot,
  Palette,
  Share2,
  Check,
  ArrowRight,
  CheckCircle2,
  Terminal,
  ShieldCheck,
  Layers,
  IndianRupee
} from 'lucide-react';
import { SERVICES } from '../data/services';
import { Link } from '../router';
import { BUDGET_TIERS } from '../utils/currency';

export const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All 7 Services' },
    { id: 'web', label: 'Web & Frontend' },
    { id: 'mobile-software', label: 'Mobile & Java Backend' },
    { id: 'ai', label: 'AI & Automation' },
    { id: 'creative', label: 'Design & Social' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedCategory);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Globe':
        return <Globe className="w-5 h-5 text-sky-600" aria-hidden="true" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-sky-600" aria-hidden="true" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-sky-600" aria-hidden="true" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-sky-600" aria-hidden="true" />;
      case 'Bot':
        return <Bot className="w-5 h-5 text-sky-600" aria-hidden="true" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-sky-600" aria-hidden="true" />;
      case 'Share2':
        return <Share2 className="w-5 h-5 text-sky-600" aria-hidden="true" />;
      default:
        return <Code2 className="w-5 h-5 text-sky-600" aria-hidden="true" />;
    }
  };

  return (
    <div className="space-y-16 md:space-y-24 pb-24 text-slate-800">
      {/* Header */}
      <section className="pt-8 sm:pt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono-code text-sky-700 uppercase tracking-widest font-semibold">
            <Terminal className="w-3.5 h-3.5" />
            <span>Digital Capabilities & Engineering</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.12]">
            Disciplined engineering and creative craft for modern business.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
            Every service is offered on a milestone freelance basis with clear deliverables, fixed-price options,
            and direct developer communication. Browse our core offerings below.
          </p>
        </div>

        {/* Filter Segmented Control */}
        <div className="mt-10 flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap focus-visible:ring-2 focus-visible:ring-sky-500 ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-xs font-semibold'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid with Detailed Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-sm flex flex-col justify-between transition-all group"
            >
              <div className="space-y-5">
                {/* Header row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0 group-hover:border-sky-200 group-hover:bg-sky-100/70 transition-colors">
                      {getIcon(service.iconName)}
                    </div>
                    <div>
                      <span className="font-mono-code text-[11px] text-sky-700 font-semibold uppercase tracking-wider block">
                        Service 0{index + 1}
                      </span>
                      <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.fullDesc}
                </p>

                {/* Scope & Deliverables */}
                <div className="space-y-2.5 pt-2 border-t border-slate-100">
                  <h3 className="font-mono-code text-xs uppercase tracking-wider text-slate-500 font-semibold">
                    Key Deliverables & Capabilities
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ideal for note */}
                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/70 text-xs text-slate-600">
                  <span className="font-semibold text-slate-900">Ideal for: </span>
                  {service.idealFor}
                </div>
              </div>

              {/* Action row */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono-code text-slate-500">
                  Milestone-based scope
                </span>
                <Link
                  to={`/contact?service=${service.id}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors shadow-xs"
                >
                  <span>Discuss this service</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement Model Notice & Indian Market Ballpark Tiers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-300 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-sky-700 font-mono-code text-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-sky-600" />
            <span>Freelance Pricing Philosophy · Indian Rupees (₹)</span>
          </div>
          <h3 className="font-heading text-xl font-bold text-slate-900">
            How service pricing and agreements work
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
            Because Indian startups, retail businesses, and boutique brands have varying stages and budgets, we quote every project
            based on concrete requirements rather than inflated monthly retainers. We define milestone payments upfront in Indian Rupees (₹),
            agree upon deliverables in writing, and hand over 100% sovereign ownership of the code, creative assets, and intellectual property.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-6 text-xs font-mono-code text-slate-700">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-sky-600" aria-hidden="true" />
              Transparent INR milestone payments
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-sky-600" aria-hidden="true" />
              Complete code & asset ownership
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-sky-600" aria-hidden="true" />
              14-day warranty support included
            </span>
          </div>
        </div>

        {/* Indian Market Pricing Cards */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-heading text-lg font-bold text-slate-900 flex items-center gap-2">
              <IndianRupee className="w-4 h-4 text-sky-600" />
              <span>Standard Indian Market Milestone Tiers</span>
            </h4>
            <span className="text-xs font-mono-code text-slate-500">Milestone Scoping</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BUDGET_TIERS.filter((t) => t.id !== 'flexible').map((tier) => (
              <div
                key={tier.id}
                className="p-5 rounded-xl bg-white border border-slate-300 shadow-xs hover:border-slate-400 flex flex-col justify-between space-y-3 transition-colors"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200 inline-block">
                    {tier.id.toUpperCase()}
                  </span>
                  <div className="font-heading text-base font-bold text-slate-900">
                    {tier.rangeText}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {tier.idealFor}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200">
                  <Link
                    to={`/contact?budget=${encodeURIComponent(tier.value)}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 hover:text-sky-700 transition-colors"
                  >
                    <span>Inquire this budget</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
          Need a multi-service package or custom architecture?
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
          We frequently bundle website development with branding and social media setups, or connect custom mobile frontends to Java backends.
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors shadow-xs"
          >
            <span>Request a customized project proposal</span>
            <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
          </Link>
          <Link
            to="/policies"
            className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-slate-700 hover:text-slate-900 border border-slate-200 bg-white hover:bg-slate-50 rounded-md transition-colors shadow-xs"
          >
            <span>Read client policies</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
