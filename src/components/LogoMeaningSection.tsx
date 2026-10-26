import React, { useState } from 'react';
import {
  Clock,
  Hammer,
  TrendingUp,
  Infinity as InfinityIcon,
  Sparkles,
  ArrowRight,
  Mail,
  Instagram,
  CheckCircle2,
  Code2,
  Smartphone,
  Cpu,
  Layers
} from 'lucide-react';
import { ForgeLogoSvg, LogoFacetKey } from './ForgeLogoSvg';
import { Link } from '../router';

export const LogoMeaningSection: React.FC = () => {
  const [activeFacet, setActiveFacet] = useState<LogoFacetKey>(null);

  // 4 Quadrants strictly aligned with the uploaded infographic
  const topLeftTime = {
    id: 'time',
    facet: 'time' as LogoFacetKey,
    title: 'TIME',
    icon: Clock,
    badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
    activeGlow: 'border-sky-400 bg-sky-50/80 ring-1 ring-sky-300 shadow-sm',
    quote: 'The sand clock represents time. We deliver fast, on time, and keep your ideas moving without delay.',
    explanation: 'Strict milestone commitments, transparent sprints, and zero engineering latency.'
  };

  const topRightForge = {
    id: 'forge',
    facet: 'forge' as LogoFacetKey,
    title: 'FORGE',
    icon: Hammer,
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    activeGlow: 'border-amber-400 bg-amber-50/80 ring-1 ring-amber-300 shadow-sm',
    quote: 'Inspired by the forge process — using a hammer to shape metal. We take your ideas and shape them into real, working technology products.',
    explanation: 'Disciplined technical craft: hammering raw concepts into hardened, production-grade systems.'
  };

  const bottomLeftInfinity = {
    id: 'infinity',
    facet: 'infinity' as LogoFacetKey,
    title: '2 M & INFINITY',
    icon: InfinityIcon,
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    activeGlow: 'border-purple-400 bg-purple-50/80 ring-1 ring-purple-300 shadow-sm',
    quote: 'The design also forms two M (Madhu Kruba MN & Mohammed Marzook ES) and the infinity symbol — showing long-term partnership, continuous innovation and limitless possibilities.',
    explanation: 'Founded by Madhu Kruba MN & Mohammed Marzook ES. Enduring client partnerships & unbounded engineering.'
  };

  const bottomRightArrow = {
    id: 'arrow',
    facet: 'arrow' as LogoFacetKey,
    title: 'UPWARD ARROW',
    icon: TrendingUp,
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    activeGlow: 'border-blue-400 bg-blue-50/80 ring-1 ring-blue-300 shadow-sm',
    quote: 'Shows continuous growth, progress and fast delivery with a smooth flow.',
    explanation: 'Scalable architecture, compounding performance gains, and seamless continuous delivery.'
  };

  const flyerServices = [
    {
      title: 'Custom Software',
      desc: 'Tailored solutions for your business needs',
      icon: Code2
    },
    {
      title: 'Web & Mobile Applications',
      desc: 'Modern, scalable and high-performance digital products',
      icon: Smartphone
    },
    {
      title: 'AI & Data Solutions',
      desc: 'Intelligent systems to unlock insights and automate work',
      icon: Cpu
    },
    {
      title: 'Product Development',
      desc: 'End-to-end design, development and deployment',
      icon: Layers
    }
  ];

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-slate-50/70 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Poster Header Lockup: Exact Brand Typography & Subtitles */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-mono-code text-sky-800 uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Brand Identity Blueprint</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            The Meaning Behind Our Logo
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-mono-code font-bold text-sky-700 tracking-[0.25em] uppercase">
            <span>IDEAS</span>
            <span className="text-slate-300">|</span>
            <span>TECHNOLOGY</span>
            <span className="text-slate-300">|</span>
            <span>PRODUCTS</span>
            <span className="text-slate-300">|</span>
            <span>PEOPLE</span>
          </div>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            <strong className="text-slate-900 font-semibold">
              "We Develop & Deliver TECH PRODUCTS That Create Real Impact"
            </strong>
            <br />
            Every facet of our geometric emblem represents an immutable law of our engineering practice.
          </p>
        </div>

        {/* 4-Part Meaning Division (Infographic Layout with Central Emblem & 4 Connected Quadrants) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
          {/* Left Column: Top-Left (TIME) and Bottom-Left (2 M & INFINITY) */}
          <div className="lg:col-span-4 space-y-6">
            {/* 1. TOP-LEFT: TIME */}
            <div
              onMouseEnter={() => setActiveFacet(topLeftTime.facet)}
              onMouseLeave={() => setActiveFacet(null)}
              onClick={() => setActiveFacet(activeFacet === topLeftTime.facet ? null : topLeftTime.facet)}
              className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer border relative group ${
                activeFacet === topLeftTime.facet
                  ? topLeftTime.activeGlow
                  : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2.5 rounded-xl border ${topLeftTime.badgeColor}`}>
                  <Clock className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <span className="text-[10px] font-mono-code text-sky-700 font-semibold uppercase tracking-wider block">
                    Quadrant 01 · Velocity
                  </span>
                  <h3 className="font-heading font-black text-slate-900 text-lg tracking-wider">
                    {topLeftTime.title}
                  </h3>
                </div>
              </div>

              <blockquote className="text-xs text-slate-700 leading-relaxed italic bg-slate-50 p-3 rounded-lg border-l-2 border-sky-500 mb-2.5">
                "{topLeftTime.quote}"
              </blockquote>

              <p className="text-[11px] text-slate-500 leading-relaxed font-mono-code">
                {topLeftTime.explanation}
              </p>
            </div>

            {/* 2. BOTTOM-LEFT: 2 M & INFINITY */}
            <div
              onMouseEnter={() => setActiveFacet(bottomLeftInfinity.facet)}
              onMouseLeave={() => setActiveFacet(null)}
              onClick={() => setActiveFacet(activeFacet === bottomLeftInfinity.facet ? null : bottomLeftInfinity.facet)}
              className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer border relative group ${
                activeFacet === bottomLeftInfinity.facet
                  ? bottomLeftInfinity.activeGlow
                  : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2.5 rounded-xl border ${bottomLeftInfinity.badgeColor}`}>
                  <InfinityIcon className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <span className="text-[10px] font-mono-code text-purple-700 font-semibold uppercase tracking-wider block">
                    Quadrant 02 · Leadership
                  </span>
                  <h3 className="font-heading font-black text-slate-900 text-lg tracking-wider">
                    {bottomLeftInfinity.title}
                  </h3>
                </div>
              </div>

              <blockquote className="text-xs text-slate-700 leading-relaxed italic bg-slate-50 p-3 rounded-lg border-l-2 border-purple-500 mb-2.5">
                "{bottomLeftInfinity.quote}"
              </blockquote>

              <p className="text-[11px] text-slate-500 leading-relaxed font-mono-code">
                {bottomLeftInfinity.explanation}
              </p>
            </div>
          </div>

          {/* Center Column: Illuminated Emblem with Live Callout Pointer Indicator */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative py-4">
            {/* Outer schematic guide rings */}
            <div className="absolute inset-0 m-auto w-72 h-72 rounded-full border border-dashed border-slate-200 pointer-events-none animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-0 m-auto w-84 h-84 rounded-full border border-sky-100 pointer-events-none" />

            <div className="relative p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md flex flex-col items-center w-full max-w-sm">
              <span className="font-mono-code text-[10px] uppercase tracking-widest text-sky-800 font-semibold mb-4 px-3 py-1 rounded-full bg-sky-50 border border-sky-100">
                Interactive Emblem Blueprint
              </span>

              {/* Vector SVG Emblem with Interactive Facet Highlighting */}
              <ForgeLogoSvg
                variant="emblem"
                size={280}
                activeFacet={activeFacet}
                onFacetHover={setActiveFacet}
                interactive={true}
                className="transition-transform duration-300 hover:scale-[1.03]"
              />

              <div className="mt-5 text-center">
                <div className="font-heading font-black tracking-[0.22em] text-slate-900 text-2xl uppercase">
                  FORGE
                </div>
                <div className="font-mono-code font-semibold tracking-[0.45em] text-sky-700 text-xs uppercase mt-0.5">
                  TECHNOLOGIES
                </div>
              </div>

              {/* Status pill indicating which part is illuminated */}
              <div className="mt-4 pt-3 border-t border-slate-100 w-full text-center">
                <span className="font-mono-code text-[11px] text-slate-600">
                  {activeFacet === 'time' && 'Highlighting: Upper Chamber (TIME)'}
                  {activeFacet === 'forge' && 'Highlighting: Central Anvil (FORGE)'}
                  {activeFacet === 'infinity' && 'Highlighting: Dual-M Monogram & Infinity'}
                  {activeFacet === 'arrow' && 'Highlighting: Upward Kinetic Vector Wing'}
                  {!activeFacet && 'Hover or tap cards to highlight facet'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Top-Right (FORGE) and Bottom-Right (UPWARD ARROW) */}
          <div className="lg:col-span-4 space-y-6">
            {/* 3. TOP-RIGHT: FORGE */}
            <div
              onMouseEnter={() => setActiveFacet(topRightForge.facet)}
              onMouseLeave={() => setActiveFacet(null)}
              onClick={() => setActiveFacet(activeFacet === topRightForge.facet ? null : topRightForge.facet)}
              className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer border relative group ${
                activeFacet === topRightForge.facet
                  ? topRightForge.activeGlow
                  : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2.5 rounded-xl border ${topRightForge.badgeColor}`}>
                  <Hammer className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <span className="text-[10px] font-mono-code text-amber-700 font-semibold uppercase tracking-wider block">
                    Quadrant 03 · Craftsmanship
                  </span>
                  <h3 className="font-heading font-black text-slate-900 text-lg tracking-wider">
                    {topRightForge.title}
                  </h3>
                </div>
              </div>

              <blockquote className="text-xs text-slate-700 leading-relaxed italic bg-slate-50 p-3 rounded-lg border-l-2 border-amber-500 mb-2.5">
                "{topRightForge.quote}"
              </blockquote>

              <p className="text-[11px] text-slate-500 leading-relaxed font-mono-code">
                {topRightForge.explanation}
              </p>
            </div>

            {/* 4. BOTTOM-RIGHT: UPWARD ARROW */}
            <div
              onMouseEnter={() => setActiveFacet(bottomRightArrow.facet)}
              onMouseLeave={() => setActiveFacet(null)}
              onClick={() => setActiveFacet(activeFacet === bottomRightArrow.facet ? null : bottomRightArrow.facet)}
              className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer border relative group ${
                activeFacet === bottomRightArrow.facet
                  ? bottomRightArrow.activeGlow
                  : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2.5 rounded-xl border ${bottomRightArrow.badgeColor}`}>
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <span className="text-[10px] font-mono-code text-blue-700 font-semibold uppercase tracking-wider block">
                    Quadrant 04 · Continuous Growth
                  </span>
                  <h3 className="font-heading font-black text-slate-900 text-lg tracking-wider">
                    {bottomRightArrow.title}
                  </h3>
                </div>
              </div>

              <blockquote className="text-xs text-slate-700 leading-relaxed italic bg-slate-50 p-3 rounded-lg border-l-2 border-blue-500 mb-2.5">
                "{bottomRightArrow.quote}"
              </blockquote>

              <p className="text-[11px] text-slate-500 leading-relaxed font-mono-code">
                {bottomRightArrow.explanation}
              </p>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Strip (Exact match from poster bottom) */}
        <div className="pt-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <h3 className="font-heading font-bold text-xl text-slate-900">
                Core Engineering Capabilities
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                The 4 primary technology solutions featured in our brand charter
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-900 transition-colors"
            >
              <span>Explore all services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {flyerServices.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-white border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-sm transition-all space-y-2.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center border border-sky-100">
                    <ServiceIcon className="w-4 h-4" />
                  </div>
                  <h4 className="font-heading font-semibold text-slate-900 text-sm">
                    {service.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Founders & Direct Contact Footnote */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono-code text-sky-700 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
              <span>Direct Founder Engagement</span>
            </div>
            <div className="text-sm sm:text-base font-semibold text-slate-900">
              Led by Co-Founders <span className="text-sky-800 font-bold">Madhu Kruba MN</span> &{' '}
              <span className="text-sky-800 font-bold">Mohammed Marzook ES</span>
            </div>
            <p className="text-xs text-slate-600">
              Direct engineering partnership with no sales intermediaries or middle management overhead.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono-code">
            <a
              href="mailto:contact.forgetechnologies@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 transition-colors"
            >
              <Mail className="w-4 h-4 text-sky-600" />
              <span>contact.forgetechnologies@gmail.com</span>
            </a>
            <a
              href="https://instagram.com/forge_technologies"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 transition-colors"
            >
              <Instagram className="w-4 h-4 text-sky-600" />
              <span>@forge_technologies</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
