import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  ShieldCheck,
  Zap,
  Layers,
  Sparkles,
  Store,
  Rocket,
  Clock,
  Check,
  Terminal,
  FileCheck,
  Lock,
  Headphones,
  CheckCheck,
  Globe,
  ShoppingBag,
  Eye,
  BarChart3,
  Palette,
  ExternalLink,
  ChevronRight,
  IndianRupee
} from 'lucide-react';
import { Link } from '../router';
import { PROJECTS } from '../data/projects';
import { ForgeLogo3D } from '../components/ForgeLogo3D';
import { LogoMeaningSection } from '../components/LogoMeaningSection';
import { TechStackMatrix } from '../components/TechStackMatrix';
import { BlueprintShowcase } from '../components/BlueprintShowcase';

export const HomePage: React.FC = () => {
  // Select verified projects for curated home showcase
  const growDataWorld = PROJECTS.find((p) => p.id === 'grow-data-world');
  const yoloProject = PROJECTS.find((p) => p.id === 'yolo-detection-system');
  const scriptoProject = PROJECTS.find((p) => p.id === 'scripto-modernizer');
  const mediremindProject = PROJECTS.find((p) => p.id === 'mediremind');

  // Interactive Quick Scope Estimator state
  const [selectedPreset, setSelectedPreset] = useState<'retail' | 'mvp' | 'ai' | 'branding'>('retail');

  const estimatorPresets = {
    retail: {
      title: 'Retail Storefront & E-Commerce',
      serviceId: 'website-development',
      timeline: '2–3 weeks',
      budget: '₹35,000 – ₹75,000',
      deliverables: [
        'Mobile-first responsive shop & catalog',
        'Google Business & local SEO integration',
        'Stripe & checkout payment flows',
        'Staff handover & 14-day defect warranty'
      ],
      idealFor: 'Physical shops, local boutiques, and retail brands wanting digital foot-traffic and online orders.'
    },
    mvp: {
      title: 'Startup Web & Mobile MVP',
      serviceId: 'frontend-development',
      timeline: '3–4 weeks',
      budget: '₹50,000 – ₹1,20,000',
      deliverables: [
        'Responsive React single-page app or mobile UI',
        'Backend REST API & authentication setup',
        'Clean, modular, and documented source code',
        '100% intellectual property & Git repository handover'
      ],
      idealFor: 'Early-stage founders validating ideas and pitching early users or investors.'
    },
    ai: {
      title: 'AI Customer Assistant & Automation',
      serviceId: 'ai-machine-learning',
      timeline: '1–2 weeks',
      budget: '₹25,000 – ₹55,000',
      deliverables: [
        'Custom 24/7 customer service chatbot',
        'RAG knowledge base trained on your store documents',
        'Lead capture & email notification triage',
        'Seamless embed for your existing website'
      ],
      idealFor: 'Businesses wanting automated customer support and hands-free inquiry answering.'
    },
    branding: {
      title: 'Brand Identity & Visual Kit',
      serviceId: 'graphic-design-branding',
      timeline: '1–2 weeks',
      budget: '₹15,000 – ₹35,000',
      deliverables: [
        'Custom vector logo mark & typography rules',
        'Print-ready promotional posters & shop signage',
        'Instagram & social media campaign templates',
        'Full vector SVG/PDF asset export package'
      ],
      idealFor: 'New ventures launching their brand or existing stores refreshing their public appearance.'
    }
  };

  const currentPreset = estimatorPresets[selectedPreset];

  // Core 6 Services specification as required by creative direction
  const coreServices = [
    {
      id: 'website-development',
      title: 'Website Development',
      icon: Globe,
      badge: 'Performance & SEO',
      description: 'High-converting business websites, interactive brand portfolios, and digital storefronts engineered for sub-second speeds and flawless mobile responsiveness.',
      value: 'Turn casual visitors into qualified customers with authoritative design, structured technical SEO, and rapid load times.',
      deliverables: ['Custom Web Presence', 'Mobile-First Layouts', 'SEO & Speed Architecture']
    },
    {
      id: 'web-applications',
      title: 'Web Application Development',
      icon: Code2,
      badge: 'React & Full-Stack',
      description: 'Custom SaaS dashboards, internal operational tools, and reactive client portals built with React, TypeScript, and resilient API backends.',
      value: 'Automate business workflows and scale your software idea with clean, sovereign code that you fully own.',
      deliverables: ['Custom Web Apps & Portals', 'Cloud API Integrations', 'Interactive Client Dashboards']
    },
    {
      id: 'ecommerce-retail',
      title: 'E-commerce & Retail Solutions',
      icon: ShoppingBag,
      badge: 'Conversion Focused',
      description: 'Digital catalog experiences, local inventory showcases, seamless checkout flows, and Google Business local SEO setups for retail brands.',
      value: 'Drive foot traffic to physical storefronts while growing direct-to-consumer online transactions with zero third-party lock-in.',
      deliverables: ['Storefront Catalogs', 'Payment & Checkout Pipelines', 'Local Foot-Traffic Optimization']
    },
    {
      id: 'ai-computer-vision',
      title: 'AI & Computer Vision',
      icon: Eye,
      badge: 'Machine Intelligence',
      description: 'Real-time object detection, automated visual inspection, smart poacher/threat tracking, and generative LLM document intelligence.',
      value: 'Leverage cutting-edge neural models (YOLOv8, OpenCV, Gemini) to automate complex visual verification and data extraction tasks.',
      deliverables: ['YOLOv8 Video Processing', 'Document Intelligence Models', 'Autonomous Visual Inspection']
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics & Visualization',
      icon: BarChart3,
      badge: 'Actionable BI',
      description: 'Executive dashboards, retail transaction heatmaps, and business intelligence reporting tailored for founders and C-suite leadership.',
      value: 'Convert raw spreadsheets and transaction logs into clear, actionable visual metrics that drive strategic decisions.',
      deliverables: ['Executive Tableau Dashboards', 'Sales & Customer Modeling', 'Automated Performance Audits']
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX & Digital Design',
      icon: Palette,
      badge: 'Brand & Craft',
      description: 'Cohesive brand identities, culinary menu artwork, promotional marketing collateral, and high-craft user experience systems.',
      value: 'Establish instant market authority with polished typography, distinctive art direction, and memorable visual assets.',
      deliverables: ['Vector Identity Systems', 'Print & Menu Artwork', 'Design Systems & Guidelines']
    }
  ];

  return (
    <div className="space-y-24 md:space-y-32 pb-24 text-slate-800 dark:text-slate-200">
      {/* 1. HERO SECTION: FORGE DIGITAL DIMENSION */}
      <section className="relative pt-8 sm:pt-14 lg:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle background ambient mesh */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-sky-500/[0.05] dark:bg-sky-500/[0.12] rounded-full blur-[140px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          {/* Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs text-xs font-mono-code text-slate-700 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse" />
              <span className="font-semibold text-slate-900 dark:text-white">Forge Technologies</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span className="text-slate-500 dark:text-slate-400">Digital Product Studio</span>
            </div>

            {/* Strict Requirement Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.75rem] font-bold tracking-tight text-[#101828] dark:text-white leading-[1.06]">
              WE TURN IDEAS INTO <span className="text-[#0284c7] dark:text-sky-400">DIGITAL REALITY.</span>
            </h1>

            {/* Strict Requirement Supporting Message */}
            <p className="text-base sm:text-lg text-[#475467] dark:text-slate-300 max-w-2xl leading-relaxed">
              Websites, intelligent applications, and digital experiences engineered to help ambitious businesses move forward.
            </p>

            {/* Strict Requirement CTAs: Primary "Explore Our Work" -> /projects, Secondary "Start a Project" -> /contact */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#101828] dark:bg-sky-500 dark:hover:bg-sky-400 hover:bg-slate-800 rounded-md transition-all shadow-md focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-[#101828] dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-[#D0D5DD] dark:border-slate-800 shadow-xs rounded-md transition-colors"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="ml-1.5 w-4 h-4 text-slate-500 dark:text-slate-400" aria-hidden="true" />
              </Link>
            </div>

            {/* Trust statement & Policy Guarantees */}
            <div className="pt-5 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-5 text-xs text-[#475467] dark:text-slate-400 font-mono-code">
              <div className="flex items-center gap-1.5 text-[#344054] dark:text-slate-200 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" aria-hidden="true" />
                <span>100% Sovereign Code Ownership</span>
              </div>
              <span className="hidden sm:inline text-slate-300 dark:text-slate-700">|</span>
              <div className="flex items-center gap-1.5 text-[#344054] dark:text-slate-200 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" aria-hidden="true" />
                <span>Fixed Milestone Scoping</span>
              </div>
              <span className="hidden sm:inline text-slate-300 dark:text-slate-700">|</span>
              <div className="flex items-center gap-1.5 text-[#344054] dark:text-slate-200 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" aria-hidden="true" />
                <span>14-Day Post-Launch Warranty</span>
              </div>
            </div>
          </div>

          {/* Hero 3D Interactive Stage */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full relative rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-sm overflow-hidden flex items-center justify-center p-2 group">
              <ForgeLogo3D modelPath="/models/fforge.glb" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SELECTED WORK: CURATED REAL PROJECTS (PROJECTS ARE THE MAIN ATTRACTION) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 dark:bg-sky-950/80 border border-sky-200 dark:border-sky-800 text-xs font-mono-code text-sky-700 dark:text-sky-300 font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SELECTED WORK · DIGITAL DIMENSION</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Proven Digital Systems & Client Deliveries
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
              We build real, production-ready software. Explore our flagship client work, computer vision implementations, and applied AI systems.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 dark:bg-sky-500 text-white font-semibold text-xs transition-colors hover:bg-slate-800 dark:hover:bg-sky-400 shadow-xs shrink-0"
          >
            <span>View All 7 Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Featured Showcase Item 1: Grow Data World (Large Prominent Client Work) */}
        {growDataWorld && (
          <div className="mb-10 rounded-3xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 border border-slate-200/90 dark:border-slate-800 p-8 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="font-mono-code text-xs px-2.5 py-1 rounded bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 font-bold border border-sky-200 dark:border-sky-800">
                  FLAGSHIP CLIENT CASE STUDY · 01
                </span>
                <span className="font-mono-code text-xs px-2.5 py-1 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-semibold border border-emerald-200 dark:border-emerald-800 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live in Production
                </span>
              </div>

              {growDataWorld.liveUrl && (
                <a
                  href={growDataWorld.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono-code font-semibold text-sky-600 dark:text-sky-400 hover:underline"
                >
                  <span>growdataworld.com</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 space-y-4">
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                  {growDataWorld.title}
                </h3>
                <p className="font-mono-code text-xs text-sky-700 dark:text-sky-400 font-semibold">
                  {growDataWorld.subtitle}
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {growDataWorld.summary}
                </p>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {growDataWorld.tags.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono-code bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <Link
                    to={`/projects/${growDataWorld.id}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 dark:bg-sky-500 text-white font-semibold text-xs hover:bg-slate-800 dark:hover:bg-sky-400 transition-colors shadow-xs"
                  >
                    <span>Read Grow Data World Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  {growDataWorld.liveUrl && (
                    <a
                      href={growDataWorld.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 text-xs font-semibold transition-colors"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              <div className="lg:col-span-7">
                <Link
                  to={`/projects/${growDataWorld.id}`}
                  className="block rounded-2xl overflow-hidden border border-slate-200/90 dark:border-slate-800 bg-slate-950 shadow-2xl group transition-transform duration-500 hover:-translate-y-1"
                >
                  <div className="px-4 py-2.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono-code">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                      <span className="ml-2 text-slate-500 text-[11px]">https://growdataworld.com/</span>
                    </div>
                    <span className="text-[10px] text-sky-400 group-hover:underline flex items-center gap-1">
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={growDataWorld.heroImage}
                      alt="Grow Data World Platform Showcase"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Selected Work Row 2: YOLO Computer Vision & Scripto Modernizer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* YOLO Detection Card */}
          {yoloProject && (
            <article className="rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-md flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
              <div>
                <Link
                  to={`/projects/${yoloProject.id}`}
                  className="block relative aspect-[16/10] bg-slate-950 overflow-hidden border-b border-slate-100 dark:border-slate-800"
                >
                  <img
                    src={yoloProject.heroImage}
                    alt={yoloProject.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="font-mono-code text-[11px] font-bold px-2.5 py-1 rounded bg-slate-950/80 backdrop-blur-md text-white border border-white/10">
                      PROJECT 02
                    </span>
                    <span className="font-mono-code text-[10px] font-semibold px-2.5 py-1 rounded bg-sky-950/80 backdrop-blur-md text-sky-300 border border-sky-500/20">
                      AI & Computer Vision
                    </span>
                  </div>
                </Link>

                <div className="p-7 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono-code text-slate-400">
                    <span>Python · Flask · YOLOv8 · OpenCV</span>
                    <span>2026</span>
                  </div>

                  <Link to={`/projects/${yoloProject.id}`}>
                    <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {yoloProject.title}
                    </h3>
                  </Link>

                  <p className="text-xs font-mono-code text-sky-700 dark:text-sky-400 font-semibold">
                    {yoloProject.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {yoloProject.summary}
                  </p>
                </div>
              </div>

              <div className="px-7 py-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex items-center justify-between">
                <Link
                  to={`/projects/${yoloProject.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors"
                >
                  <span>Explore Vision Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="font-mono-code text-[11px] text-slate-400">Lab Prototype</span>
              </div>
            </article>
          )}

          {/* Scripto Modernizer Card */}
          {scriptoProject && (
            <article className="rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-md flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
              <div>
                <Link
                  to={`/projects/${scriptoProject.id}`}
                  className="block relative aspect-[16/10] bg-slate-950 overflow-hidden border-b border-slate-100 dark:border-slate-800"
                >
                  <img
                    src={scriptoProject.heroImage}
                    alt={scriptoProject.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="font-mono-code text-[11px] font-bold px-2.5 py-1 rounded bg-slate-950/80 backdrop-blur-md text-white border border-white/10">
                      PROJECT 03
                    </span>
                    <span className="font-mono-code text-[10px] font-semibold px-2.5 py-1 rounded bg-sky-950/80 backdrop-blur-md text-sky-300 border border-sky-500/20">
                      Applied AI & Document Intelligence
                    </span>
                  </div>
                </Link>

                <div className="p-7 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono-code text-slate-400">
                    <span>React · Next.js · Gemini AI · Supabase</span>
                    <span>2026</span>
                  </div>

                  <Link to={`/projects/${scriptoProject.id}`}>
                    <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {scriptoProject.title}
                    </h3>
                  </Link>

                  <p className="text-xs font-mono-code text-sky-700 dark:text-sky-400 font-semibold">
                    {scriptoProject.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {scriptoProject.summary}
                  </p>
                </div>
              </div>

              <div className="px-7 py-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex items-center justify-between">
                <Link
                  to={`/projects/${scriptoProject.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors"
                >
                  <span>Explore Document AI System</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="font-mono-code text-[11px] text-slate-400">AI Prototype</span>
              </div>
            </article>
          )}
        </div>
      </section>

      {/* 3. CORE SERVICES: PRESENTED IN A POLISHED & CONCISE MANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="font-mono-code text-xs uppercase tracking-wider text-sky-700 dark:text-sky-400 font-semibold mb-2">
              Our Capabilities
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Core Digital Services & Solutions
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2 max-w-xl">
              Engineered for startups, retail brands, and ambitious enterprises seeking tangible business outcomes without agency bureaucracy.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 dark:text-sky-400 hover:underline shrink-0"
          >
            <span>View detailed service catalog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="p-7 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-400 flex items-center justify-center border border-sky-100 dark:border-sky-900">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono-code text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    <strong className="text-slate-800 dark:text-slate-200 block mb-0.5">Business Value:</strong>
                    {service.value}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <Link
                    to={`/contact?service=${service.id}`}
                    className="font-semibold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors inline-flex items-center gap-1"
                  >
                    <span>Inquire on service</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. OUR PROCESS: 4-STEP PROFESSIONAL WORKFLOW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="font-mono-code text-xs uppercase tracking-wider text-sky-700 dark:text-sky-400 font-semibold mb-2">
            Our Process
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            A disciplined, four-step production workflow
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2">
            Predictable sprints, direct communication, and strict intellectual property transfer at every milestone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 shadow-xs space-y-3 relative group">
            <span className="font-mono-code text-sm font-bold text-sky-700 dark:text-sky-400">
              01 — Discover
            </span>
            <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white">
              Business & Requirements
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
              Understand the client's business, objectives, users, and requirements. We define clear milestones and scope before touching code.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 shadow-xs space-y-3 relative group">
            <span className="font-mono-code text-sm font-bold text-sky-700 dark:text-sky-400">
              02 — Design
            </span>
            <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white">
              Experience & Architecture
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
              Develop the experience, architecture, and visual direction. Wireframes and interface blueprints are approved before full build.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 shadow-xs space-y-3 relative group">
            <span className="font-mono-code text-sm font-bold text-sky-700 dark:text-sky-400">
              03 — Build
            </span>
            <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white">
              Implement & Test
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
              Implement, test, and refine the solution. Disciplined frontend and backend development with responsive validation across devices.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 shadow-xs space-y-3 relative group">
            <span className="font-mono-code text-sm font-bold text-sky-700 dark:text-sky-400">
              04 — Launch
            </span>
            <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white">
              Deploy & Handover
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
              Deploy the approved product and provide agreed handover, full 100% IP code transfer, and 14-day post-launch warranty support.
            </p>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE SCOPE ESTIMATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="font-mono-code text-xs text-sky-700 dark:text-sky-400 uppercase tracking-wider font-semibold">
              Sprint Framework
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Instant Scope & Milestone Estimator
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Select your project profile below to preview our standard sprint framework and deliverables:
            </p>
          </div>

          {/* Preset Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-8">
            <button
              type="button"
              onClick={() => setSelectedPreset('retail')}
              className={`px-4 py-3 text-xs font-semibold rounded-lg border text-left transition-all ${
                selectedPreset === 'retail'
                  ? 'border-sky-300 dark:border-sky-600 bg-sky-50/80 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 shadow-xs ring-1 ring-sky-300 dark:ring-sky-600'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Store className="w-4 h-4 mb-1.5 text-sky-600 dark:text-sky-400" />
              <span>Retail & E-Commerce</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedPreset('mvp')}
              className={`px-4 py-3 text-xs font-semibold rounded-lg border text-left transition-all ${
                selectedPreset === 'mvp'
                  ? 'border-sky-300 dark:border-sky-600 bg-sky-50/80 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 shadow-xs ring-1 ring-sky-300 dark:ring-sky-600'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Rocket className="w-4 h-4 mb-1.5 text-sky-600 dark:text-sky-400" />
              <span>Startup MVP Web/App</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedPreset('ai')}
              className={`px-4 py-3 text-xs font-semibold rounded-lg border text-left transition-all ${
                selectedPreset === 'ai'
                  ? 'border-sky-300 dark:border-sky-600 bg-sky-50/80 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 shadow-xs ring-1 ring-sky-300 dark:ring-sky-600'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4 mb-1.5 text-sky-600 dark:text-sky-400" />
              <span>AI & Automation</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedPreset('branding')}
              className={`px-4 py-3 text-xs font-semibold rounded-lg border text-left transition-all ${
                selectedPreset === 'branding'
                  ? 'border-sky-300 dark:border-sky-600 bg-sky-50/80 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 shadow-xs ring-1 ring-sky-300 dark:ring-sky-600'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4 mb-1.5 text-sky-600 dark:text-sky-400" />
              <span>Branding & Design</span>
            </button>
          </div>

          {/* Active Preset Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
                  {currentPreset.title}
                </h3>
                <span className="font-mono-code text-xs px-2.5 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 border border-sky-300 dark:border-sky-800 font-semibold flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  Estimated: {currentPreset.timeline}
                </span>
                <span className="font-mono-code text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 font-semibold flex items-center gap-1">
                  <IndianRupee className="w-3 h-3 text-emerald-700 dark:text-emerald-400" />
                  Scope Budget: {currentPreset.budget}
                </span>
              </div>

              <p className="text-xs text-slate-700 dark:text-slate-300">
                {currentPreset.idealFor}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800 dark:text-slate-200 pt-1">
                {currentPreset.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <Link
                to={`/contact?service=${currentPreset.serviceId}&budget=${encodeURIComponent(currentPreset.budget)}`}
                className="inline-flex items-center justify-center w-full md:w-auto px-5 py-3 text-xs font-semibold text-white bg-slate-900 dark:bg-sky-500 hover:bg-slate-800 dark:hover:bg-sky-400 rounded-md transition-colors shadow-xs whitespace-nowrap"
              >
                <span>Request this scope</span>
                <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LOGO MEANING & BRAND IDENTITY BLUEPRINT */}
      <div id="logo-meaning">
        <LogoMeaningSection />
      </div>

      {/* 7. TECHNOLOGY STACK MATRIX */}
      <TechStackMatrix />

      {/* 8. BLUEPRINT SHOWCASE */}
      <BlueprintShowcase />

      {/* 9. FINAL CTA SECTION (STRICT SPECIFICATION) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-slate-900 dark:bg-slate-950 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="max-w-2xl space-y-4 relative z-10">
            <p className="font-mono-code text-xs uppercase tracking-wider text-sky-400 font-semibold">
              Forge Technologies · Production Inquiries
            </p>
            {/* Strict Requirement Headline */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              YOUR NEXT BIG IDEA STARTS HERE.
            </h2>
            {/* Strict Requirement Supporting Message */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Let's build a digital experience that moves your business forward.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3.5 shrink-0 w-full lg:w-auto relative z-10">
            {/* Strict Requirement CTA */}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-7 py-4 text-sm font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-xl transition-all shadow-md shadow-sky-500/20 whitespace-nowrap"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="ml-2 w-4 h-4 text-slate-950" aria-hidden="true" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-6 py-4 text-sm font-semibold text-white hover:text-slate-200 border border-white/20 hover:border-white/40 rounded-xl transition-colors whitespace-nowrap"
            >
              <span>Explore Portfolio</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
