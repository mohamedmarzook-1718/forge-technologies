import React, { useState, useMemo } from 'react';
import {
  IndianRupee,
  Calculator,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  Layers
} from 'lucide-react';
import { formatINR } from '../utils/currency';

export interface BudgetCalculatorProps {
  onApplyEstimate?: (serviceName: string, budgetRange: string, timeline: string) => void;
  className?: string;
  defaultService?: string;
}

interface ServicePricingRule {
  id: string;
  title: string;
  baseMin: number;
  baseMax: number;
  timeline: string;
  category: string;
}

const SERVICE_RULES: ServicePricingRule[] = [
  {
    id: 'website-development',
    title: 'Website Development',
    baseMin: 20000,
    baseMax: 40000,
    timeline: '1–2 weeks',
    category: 'Web & Storefronts',
  },
  {
    id: 'frontend-development',
    title: 'Web & Frontend Development',
    baseMin: 35000,
    baseMax: 70000,
    timeline: '2–3 weeks',
    category: 'React & Interactive Apps',
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    baseMin: 45000,
    baseMax: 90000,
    timeline: '3–4 weeks',
    category: 'iOS & Android Solutions',
  },
  {
    id: 'java-development',
    title: 'Java Development',
    baseMin: 50000,
    baseMax: 100000,
    timeline: '3–4 weeks',
    category: 'Backend & Enterprise',
  },
  {
    id: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    baseMin: 35000,
    baseMax: 75000,
    timeline: '2–3 weeks',
    category: 'Chatbots, RAG & Vision',
  },
  {
    id: 'graphic-design-branding',
    title: 'Graphic Design & Branding',
    baseMin: 15000,
    baseMax: 30000,
    timeline: '1–2 weeks',
    category: 'Logo, Print & Collateral',
  },
  {
    id: 'social-media-management',
    title: 'Social Media Management',
    baseMin: 18000,
    baseMax: 35000,
    timeline: 'Ongoing / Monthly Sprint',
    category: 'Content & Strategy',
  },
];

interface AddonOption {
  id: string;
  name: string;
  cost: number;
  desc: string;
}

const ADDONS: AddonOption[] = [
  {
    id: 'ai-bot',
    name: 'Conversational AI / RAG Chatbot',
    cost: 15000,
    desc: '24/7 business query answering trained on store docs',
  },
  {
    id: 'seo-speed',
    name: 'Advanced SEO & Core Web Vitals',
    cost: 8000,
    desc: 'Sub-second loading, schema metadata & local Google ranking',
  },
  {
    id: 'branding-kit',
    name: 'Complete Brand Identity & Vector Assets',
    cost: 10000,
    desc: 'Primary mark, typographic rules, and print-ready files',
  },
  {
    id: 'priority-sprint',
    name: 'Priority Fast-Track Delivery',
    cost: 12000,
    desc: 'Dedicated rapid milestone deployment with daily updates',
  },
];

export const BudgetCalculator: React.FC<BudgetCalculatorProps> = ({
  onApplyEstimate,
  className = '',
  defaultService,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(() => {
    if (defaultService) {
      const match = SERVICE_RULES.find((s) => s.title.toLowerCase() === defaultService.toLowerCase() || s.id === defaultService);
      if (match) return match.id;
    }
    return 'website-development';
  });

  const [scaleTier, setScaleTier] = useState<'mvp' | 'standard' | 'enterprise'>('standard');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [applied, setApplied] = useState(false);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const activeService = useMemo(
    () => SERVICE_RULES.find((s) => s.id === selectedServiceId) || SERVICE_RULES[0],
    [selectedServiceId]
  );

  const { calculatedMin, calculatedMax, calculatedTimeline } = useMemo(() => {
    let multiplier = 1.0;
    let timelineNote = activeService.timeline;

    if (scaleTier === 'mvp') {
      multiplier = 0.85;
      timelineNote = '1–2 weeks';
    } else if (scaleTier === 'standard') {
      multiplier = 1.0;
      timelineNote = activeService.timeline;
    } else if (scaleTier === 'enterprise') {
      multiplier = 1.6;
      timelineNote = '3–5 weeks';
    }

    const addonsCost = selectedAddons.reduce((acc, currId) => {
      const found = ADDONS.find((a) => a.id === currId);
      return acc + (found ? found.cost : 0);
    }, 0);

    const min = Math.round((activeService.baseMin * multiplier + addonsCost) / 1000) * 1000;
    const max = Math.round((activeService.baseMax * multiplier + addonsCost) / 1000) * 1000;

    return {
      calculatedMin: min,
      calculatedMax: max,
      calculatedTimeline: timelineNote,
    };
  }, [activeService, scaleTier, selectedAddons]);

  const formattedRangeText = `${formatINR(calculatedMin)} – ${formatINR(calculatedMax)}`;

  const handleApply = () => {
    if (onApplyEstimate) {
      onApplyEstimate(activeService.title, formattedRangeText, calculatedTimeline);
      setApplied(true);
      setTimeout(() => setApplied(false), 3000);
    }
  };

  return (
    <div
      className={`rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-md p-6 sm:p-8 space-y-6 ${className}`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono-code text-sky-700 dark:text-sky-400 uppercase tracking-wider font-bold mb-1">
            <Calculator className="w-4 h-4 text-sky-600 dark:text-sky-400" aria-hidden="true" />
            <span>Interactive Estimator · Indian Rupees (₹)</span>
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Project Scope & Budget Calculator
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
            Configure your deliverables to preview ballpark Indian-market pricing and milestone timelines.
          </p>
        </div>

        <span className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-800 text-xs font-mono-code font-bold text-emerald-800 dark:text-emerald-300">
          <IndianRupee className="w-3.5 h-3.5" aria-hidden="true" />
          <span>INR Pricing Model</span>
        </span>
      </div>

      {/* 1. Primary Service Selection */}
      <div className="space-y-2">
        <label htmlFor="calculator-service" className="block text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono-code">
          1. Select Core Service
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {SERVICE_RULES.map((service) => {
            const isSelected = selectedServiceId === service.id;
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setSelectedServiceId(service.id)}
                className={`p-3 rounded-lg border text-left transition-all text-xs flex flex-col justify-between min-h-[70px] ${
                  isSelected
                    ? 'border-sky-600 dark:border-sky-500 bg-sky-50/90 dark:bg-sky-950/60 ring-2 ring-sky-500/20 text-slate-950 dark:text-white font-bold shadow-xs'
                    : 'border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <span className="font-semibold leading-tight line-clamp-2">{service.title}</span>
                <span className="text-[10px] font-mono-code text-slate-500 dark:text-slate-400 mt-1">
                  From {formatINR(service.baseMin)}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Project Scope Scale */}
      <div className="space-y-2">
        <span className="block text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono-code">
          2. Project Scope & Scale
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {[
            {
              id: 'mvp',
              title: 'Starter / MVP',
              sub: 'Core essential features & fast release',
            },
            {
              id: 'standard',
              title: 'Professional Business',
              sub: 'Complete responsive system & custom UI',
            },
            {
              id: 'enterprise',
              title: 'Comprehensive / Scale',
              sub: 'Custom backend, multiple integrations & advanced architecture',
            },
          ].map((tier) => {
            const isSelected = scaleTier === tier.id;
            return (
              <button
                key={tier.id}
                type="button"
                onClick={() => setScaleTier(tier.id as any)}
                className={`p-3.5 rounded-lg border text-left transition-all text-xs ${
                  isSelected
                    ? 'border-slate-900 dark:border-sky-400 bg-slate-900 text-white dark:bg-sky-950/70 dark:text-white shadow-xs font-semibold'
                    : 'border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <div className="font-bold text-sm mb-0.5">{tier.title}</div>
                <div className={`text-[11px] leading-snug ${isSelected ? 'text-slate-200 dark:text-sky-200' : 'text-slate-600 dark:text-slate-400'}`}>
                  {tier.sub}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Add-on Capabilities */}
      <div className="space-y-2">
        <span className="block text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono-code">
          3. Optional Sprint Add-ons
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {ADDONS.map((addon) => {
            const isChecked = selectedAddons.includes(addon.id);
            return (
              <label
                key={addon.id}
                className={`p-3 rounded-lg border flex items-start gap-3 cursor-pointer transition-colors text-xs ${
                  isChecked
                    ? 'border-sky-500 bg-sky-50/70 dark:bg-sky-950/50 dark:border-sky-700'
                    : 'border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleAddon(addon.id)}
                  className="mt-0.5 w-4 h-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
                />
                <div className="space-y-0.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-slate-900 dark:text-white">{addon.name}</span>
                    <span className="font-mono-code text-[11px] font-bold text-sky-700 dark:text-sky-400 whitespace-nowrap">
                      +{formatINR(addon.cost)}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-tight">
                    {addon.desc}
                  </p>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      {/* Calculated Result Card (High Contrast) */}
      <div className="p-5 sm:p-6 rounded-xl bg-slate-900 text-white dark:bg-slate-950 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-mono-code text-sky-400 uppercase tracking-wider font-bold">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
            <span>Calculated Indian Market Ballpark</span>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              {formattedRangeText}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono-code text-slate-300 pt-1">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
              Timeline: <strong className="text-white font-semibold">{calculatedTimeline}</strong>
            </span>
            <span className="text-slate-600">·</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
              Includes 14-day defect warranty & full IP handover
            </span>
          </div>
        </div>

        {onApplyEstimate && (
          <button
            type="button"
            onClick={handleApply}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md shrink-0 focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            {applied ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-slate-950" aria-hidden="true" />
                <span>Estimate Applied to Brief!</span>
              </>
            ) : (
              <>
                <span>Apply to Inquiry Brief</span>
                <ArrowRight className="w-4 h-4 text-slate-950" aria-hidden="true" />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};
