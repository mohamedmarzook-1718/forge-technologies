import React from 'react';
import {
  Check,
  Target,
  MessageSquare,
  IndianRupee,
  Headphones,
  Store,
  Rocket,
  ArrowRight,
  ShieldCheck,
  Compass,
  Code2,
  Terminal,
  Cpu,
  Mail,
  Instagram,
  Sparkles
} from 'lucide-react';
import { Link } from '../router';
import { ForgeLogoSvg } from '../components/ForgeLogoSvg';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-20 md:space-y-28 pb-24 text-slate-800">
      {/* Page Header */}
      <section className="pt-8 sm:pt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono-code text-sky-700 uppercase tracking-widest font-semibold">
            <span>Engineering Discipline</span>
            <span aria-hidden="true">·</span>
            <span>Freelance Studio</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.12]">
            Freelance digital engineering rooted in precision, clarity, and sovereign code ownership.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
            Forge Technologies was established to provide ambitious startups, retail storefronts, and independent founders
            with senior-level technical execution. We combine modern full-stack web engineering, custom Java software,
            mobile development, and pragmatic AI automation without agency layers or inflated retainers.
          </p>
        </div>
      </section>

      {/* Editorial Craft Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
            <img
              src="/src/assets/images/about_forge_craft_1792698504188.jpg"
              alt="Hands sketching modular typography hierarchies and clean digital layout grids on paper"
              className="w-full h-[360px] sm:h-[440px] object-cover filter contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-6">
              <p className="text-xs font-mono-code text-white font-medium">
                Architectural wireframing & strict clean-code principles
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="font-mono-code text-xs text-sky-700 font-bold tracking-wider">
                OUR ENGINEERING PHILOSOPHY
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
                Eliminating agency friction with direct developer accountability
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Traditional digital agencies bill hefty monthly retainers to sustain junior account handlers,
                middle managers, and sales overhead. On the other end, commodity freelance marketplaces frequently result
                in abandoned codebases, technical debt, and zero architectural continuity.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Forge Technologies operates as a senior boutique studio: you interface directly with the lead engineer
                responsible for your architecture. Every line of code, schema design, and UI component is crafted for
                longevity, speed, and cross-device performance.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                <span>Zero Hallucinated Metrics Guarantee</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                We respect your intelligence. We do not invent fictional enterprise logos, synthetic awards, or inflated
                metrics. Every engagement is measured strictly by real deliverables: deployed websites, functional mobile
                apps, reliable Java backends, and satisfied customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-slate-50 border-y border-slate-200 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="font-mono-code text-xs uppercase tracking-wider text-sky-700 font-semibold mb-2">
              Target Clients
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
              Who Forge Technologies Serves
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              We focus our freelance practice on sectors where direct technical craftsmanship makes the most profound business impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-white border border-slate-200/90 shadow-xs space-y-3 hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center border border-sky-100">
                <Store className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900">
                Retail Shops & Boutiques
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Brick-and-mortar storefronts needing modern e-commerce websites, local SEO visibility, POS inventory synchronization, and promotional flyers.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200/90 shadow-xs space-y-3 hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center border border-sky-100">
                <Rocket className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900">
                Emerging Startups
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Early-stage founders needing rapid MVP development, interactive React interfaces, cross-platform mobile apps, and scalable cloud architectures.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200/90 shadow-xs space-y-3 hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center border border-sky-100">
                <Compass className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900">
                Small Businesses & Services
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Consultants, specialty contractors, and service providers seeking authoritative web presence, automated inquiry handling, and digital credibility.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200/90 shadow-xs space-y-3 hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center border border-sky-100">
                <Target className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900">
                Entrepreneurs & Creators
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Individuals launching digital products, niche communities, or personalized brands looking for end-to-end design and technical execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="font-mono-code text-xs uppercase tracking-wider text-sky-700 font-semibold mb-2">
            Guiding Principles
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
            Our Core Freelance Commitments
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            The fundamental standards that govern every line of code we write and every client relationship we nurture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Value 1 */}
          <div className="p-7 rounded-xl bg-white border border-slate-200/90 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-sky-50 text-sky-700 flex items-center justify-center shrink-0 border border-sky-100">
                <Target className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900">
                Tailored Solutions Over Templates
              </h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              We never force a one-size-fits-all theme. Your business requirements dictate the stack — whether a static site
              for lightning-fast page loads or a custom full-stack application tailored to your unique workflow.
            </p>
          </div>

          {/* Value 2 */}
          <div className="p-7 rounded-xl bg-white border border-slate-200/90 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-sky-50 text-sky-700 flex items-center justify-center shrink-0 border border-sky-100">
                <MessageSquare className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900">
                Direct Communication & Transparency
              </h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Clear, timely, and jargon-free updates. You collaborate directly with the engineer responsible for your project,
              ensuring questions are answered quickly and feedback is implemented without intermediary filters.
            </p>
          </div>

          {/* Value 3 */}
          <div className="p-7 rounded-xl bg-white border border-slate-300 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-200">
                <IndianRupee className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900">
                Budget-Conscious Milestone Scoping (₹ INR)
              </h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              We respect your capital. We provide transparent milestone-based scoping in Indian Rupees (₹), recommend cost-effective hosting
              (such as GitHub Pages or Vercel zero-tier setups), and eliminate unneeded technical complexity.
            </p>
          </div>

          {/* Value 4 */}
          <div className="p-7 rounded-xl bg-white border border-slate-200/90 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-sky-50 text-sky-700 flex items-center justify-center shrink-0 border border-sky-100">
                <Headphones className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900">
                14-Day Warranty & Reliable Support
              </h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              We don't hand over a codebase and disappear. We ensure proper handover documentation, guide you through
              content updates, and provide 14 days of complimentary defect remediation following launch.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership & Co-Founders Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-xs font-mono-code text-sky-800 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                <span>Founders & Engineering Leadership</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
                Founded by Madhu Kruba MN & Mohammed Marzook ES
              </h2>

              <p className="font-mono-code text-xs sm:text-sm text-sky-700 font-bold tracking-wider uppercase">
                IDEAS · TECHNOLOGY · PRODUCTS · PEOPLE
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Forge Technologies was created on a single conviction: <em>"We develop & deliver tech products that create real impact."</em> Rather than operating as an opaque agency with multiple layers of account executives, our founders take personal, line-by-line engineering responsibility for every solution delivered.
              </p>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                The dual "M" initials of Madhu Kruba and Mohammed Marzook are geometrically intertwined with the infinity symbol in our emblem—representing an enduring partnership, boundless technical curiosity, and an unwavering commitment to client success.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono-code">
                <a
                  href="mailto:contact.forgetechnologies@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 transition-colors"
                >
                  <Mail className="w-4 h-4 text-sky-600" />
                  <span>contact.forgetechnologies@gmail.com</span>
                </a>
                <a
                  href="https://instagram.com/forge_technologies"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-sky-600" />
                  <span>@forge_technologies</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <ForgeLogoSvg variant="emblem" size={130} />
              <div className="mt-3 font-heading font-black text-xl tracking-[0.2em] text-slate-900 uppercase">
                FORGE
              </div>
              <div className="font-mono-code text-[10px] tracking-[0.35em] text-sky-700 font-semibold uppercase">
                TECHNOLOGIES
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 w-full text-center">
                <Link
                  to="/#logo-meaning"
                  className="inline-flex items-center gap-1.5 text-xs font-mono-code text-sky-700 hover:text-sky-900 font-medium transition-colors"
                >
                  <span>Explore full logo anatomy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md">
          <div className="space-y-2">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
              Ready to collaborate on your next milestone?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Tell us about your business goals and where you need technical or design help. We'll be glad to discuss.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-md transition-colors shadow-sm whitespace-nowrap"
            >
              <span>Start a conversation</span>
              <ArrowRight className="ml-2 w-4 h-4 text-slate-900" aria-hidden="true" />
            </Link>
            <Link
              to="/policies"
              className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white hover:text-slate-200 border border-white/20 hover:border-white/40 rounded-md transition-colors whitespace-nowrap"
            >
              <span>Review client policies</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
