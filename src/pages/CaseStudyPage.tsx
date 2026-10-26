import React, { useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  ExternalLink,
  Layers,
  Sparkles,
  Terminal,
  Calendar,
  Briefcase,
  Share2,
  Check,
  ChevronRight,
  ShieldCheck,
  Monitor,
  FolderGit2
} from 'lucide-react';
import { Link, useRouter } from '../router';
import { getProjectById, PROJECTS, Project } from '../data/projects';

interface CaseStudyPageProps {
  projectId: string;
}

export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ projectId }) => {
  const { navigate } = useRouter();
  const project = getProjectById(projectId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [projectId]);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">
          <Terminal className="w-8 h-8" />
        </div>
        <h1 className="font-heading text-3xl font-bold text-slate-900 dark:text-white">
          Project Case Study Not Found
        </h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto text-sm">
          The requested project id (<code className="font-mono text-sky-600 dark:text-sky-400">{projectId}</code>) could not be located in our active portfolio index.
        </p>
        <div className="pt-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 dark:bg-sky-500 text-white font-semibold text-sm hover:bg-slate-800 dark:hover:bg-sky-400 transition-colors shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Projects</span>
          </Link>
        </div>
      </div>
    );
  }

  // Find next and previous project for seamless navigation
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : PROJECTS[0];

  return (
    <article className="pb-24 text-slate-800 dark:text-slate-200">
      {/* Top Editorial Breadcrumb Bar */}
      <div className="border-b border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-[#070B12]/50 backdrop-blur-sm sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs font-mono-code">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <Link to="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/projects" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Projects
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 dark:text-white font-semibold truncate max-w-[160px] sm:max-w-xs">
              {project.title}
            </span>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Back to portfolio</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <header className="relative pt-12 sm:pt-16 pb-12 overflow-hidden">
        {/* Ambient lighting orb */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-sky-500/[0.05] dark:bg-sky-500/[0.12] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          {/* Index & Engagement Pill */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono-code text-xs px-2.5 py-1 rounded-md bg-sky-50 dark:bg-sky-950/70 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300 font-bold">
              PROJECT {project.projectNumber}
            </span>
            <span className="font-mono-code text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">
              {project.category}
            </span>
            <span className="font-mono-code text-xs px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {project.engagementType}
            </span>
          </div>

          {/* Large Title & Subtitle */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.08]">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Quick Metadata Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 shadow-xs">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 font-mono-code uppercase tracking-wider font-semibold">
                <Briefcase className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                <span>Client / Scope</span>
              </div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                {project.client || 'Forge Software Lab'}
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 font-mono-code uppercase tracking-wider font-semibold">
                <Calendar className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                <span>Year Delivered</span>
              </div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                {project.year}
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 font-mono-code uppercase tracking-wider font-semibold">
                <Clock className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                <span>Sprint Timeline</span>
              </div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                {project.timeline}
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 font-mono-code uppercase tracking-wider font-semibold">
                <Monitor className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                <span>Deployment</span>
              </div>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-sky-600 dark:text-sky-400 hover:underline"
                >
                  <span>Live Production</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                  Verified Lab Build
                </span>
              )}
            </div>
          </div>

          {/* Primary Action Buttons (if live URL exists) */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm transition-all shadow-md shadow-sky-600/20"
              >
                <span>Visit Live Platform</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
            <Link
              to={`/contact?project=${project.id}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 font-semibold text-sm transition-all shadow-xs"
            >
              <span>Commission Similar Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Primary Browser / Screen Presentation Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-800 bg-slate-900 shadow-2xl relative">
          {/* Browser Chrome Header */}
          <div className="px-4 py-3 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono-code">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="ml-2 text-slate-500 hidden sm:inline">forge-preview://</span>
              <span className="text-slate-300 font-medium truncate max-w-xs sm:max-w-md">
                {project.liveUrl ? project.liveUrl.replace('https://', '') : `${project.id}.forge.internal`}
              </span>
            </div>
            <div className="flex items-center gap-3 text-slate-400">
              <span className="hidden sm:inline text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                100% Scaled Render
              </span>
            </div>
          </div>

          {/* Screenshot Display */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-950 overflow-hidden group">
            <img
              src={project.heroImage}
              alt={`${project.title} Interface Showcase`}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
              loading="eager"
            />
          </div>

          <div className="p-4 sm:p-5 bg-slate-950/90 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-400 font-mono-code">
            <span>SHOWCASE: Primary production desktop interface & verified asset view</span>
            {project.testimonialOrNote && (
              <span className="text-sky-400 font-medium">{project.testimonialOrNote}</span>
            )}
          </div>
        </div>
      </section>

      {/* Main Editorial Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Story Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview / Context */}
            <section className="space-y-4">
              <div className="inline-flex items-center gap-2 font-mono-code text-xs uppercase tracking-wider text-sky-700 dark:text-sky-400 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>01 / The Overview</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Context & Objectives
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.overview}
              </p>
            </section>

            {/* Problem & Solution Split */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 space-y-3 shadow-xs">
                <div className="w-9 h-9 rounded-lg bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-900 flex items-center justify-center font-mono-code text-xs font-bold">
                  !
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                  The Problem & Challenge
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 space-y-3 shadow-xs">
                <div className="w-9 h-9 rounded-lg bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-900 flex items-center justify-center font-mono-code text-xs font-bold">
                  ✓
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                  The Engineering Solution
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Capabilities & Feature Breakdown */}
            <section className="space-y-6 pt-4">
              <div className="inline-flex items-center gap-2 font-mono-code text-xs uppercase tracking-wider text-sky-700 dark:text-sky-400 font-semibold">
                <Layers className="w-3.5 h-3.5" />
                <span>02 / Feature Breakdown</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Engineered Capabilities & Deliverables
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 flex items-start gap-3.5 group hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 dark:text-slate-200 leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Architectural Highlights */}
            <section className="space-y-6 pt-4">
              <div className="inline-flex items-center gap-2 font-mono-code text-xs uppercase tracking-wider text-sky-700 dark:text-sky-400 font-semibold">
                <Terminal className="w-3.5 h-3.5" />
                <span>03 / Technical Architecture</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                System Implementation & Codecraft
              </h2>

              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 space-y-4 shadow-xs">
                {project.architecture.map((arch, idx) => (
                  <div
                    key={idx}
                    className="pb-3 border-b border-slate-100 dark:border-slate-800 last:border-0 last:pb-0 flex items-start gap-3"
                  >
                    <span className="font-mono-code text-xs text-sky-600 dark:text-sky-400 font-semibold mt-0.5">
                      0{idx + 1}.
                    </span>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {arch}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Gallery Screenshots Walkthrough */}
            {project.galleryImages && project.galleryImages.length > 0 && (
              <section className="space-y-6 pt-6">
                <div className="inline-flex items-center gap-2 font-mono-code text-xs uppercase tracking-wider text-sky-700 dark:text-sky-400 font-semibold">
                  <Monitor className="w-3.5 h-3.5" />
                  <span>04 / Interface Walkthrough & Media</span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  Verified Interface Captures
                </h2>

                <div className="space-y-8">
                  {project.galleryImages.map((img, idx) => (
                    <figure
                      key={idx}
                      className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md group"
                    >
                      <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden">
                        <img
                          src={img.url}
                          alt={img.caption}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                          loading="lazy"
                        />
                      </div>
                      <figcaption className="p-4 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 font-mono-code">
                        <span>{img.caption}</span>
                        <span className="text-slate-400 shrink-0 ml-2">
                          FIGURE 0{idx + 1}
                        </span>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            )}

            {/* Documented Results */}
            {project.results && project.results.length > 0 && (
              <section className="space-y-6 pt-4">
                <div className="inline-flex items-center gap-2 font-mono-code text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>05 / Verified Outcomes</span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  Deliverable Results & Verification
                </h2>

                <div className="grid grid-cols-1 gap-3.5">
                  {project.results.map((res, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/60 flex items-center gap-3 text-sm text-emerald-950 dark:text-emerald-200"
                    >
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sticky Technical Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-32 space-y-6">
              {/* Technology Stack Matrix Card */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 space-y-4 shadow-xs">
                <h3 className="font-mono-code text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                  Technologies Deployed
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-mono-code rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Commission Similar Product Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 shadow-lg space-y-4">
                <span className="font-mono-code text-[11px] uppercase tracking-wider text-sky-400 font-semibold">
                  Work With Forge
                </span>
                <h3 className="font-heading text-lg font-bold text-white">
                  Need a similar solution built for your business?
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We engineer custom digital platforms, web applications, and AI integrations with sovereign code ownership and fixed milestone scoping.
                </p>

                <div className="pt-2 space-y-2">
                  <Link
                    to={`/contact?project=${project.id}`}
                    className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-colors"
                  >
                    <span>Discuss this project type</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/policies"
                    className="flex items-center justify-center gap-1.5 w-full py-2 px-4 rounded-lg border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white text-xs transition-colors"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                    <span>Review client warranties</span>
                  </Link>
                </div>
              </div>

              {/* Verified Deliverable Assurance */}
              <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-2 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-semibold">
                  <ShieldCheck className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  <span>Authentic Portfolio Standard</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Every project in this showcase represents verified software engineering, client deliverables, or specialized lab prototypes built by Forge Technologies.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Next / Previous Project Navigation Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-12 border-t border-slate-200 dark:border-slate-800">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Previous */}
          <Link
            to={`/projects/${prevProject.id}`}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 hover:border-sky-300 dark:hover:border-sky-700 transition-all group flex flex-col justify-between space-y-4"
          >
            <div className="flex items-center gap-2 text-xs font-mono-code text-slate-500 dark:text-slate-400">
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span>PREVIOUS CASE STUDY ({prevProject.projectNumber})</span>
            </div>
            <div>
              <p className="font-heading text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                {prevProject.title}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                {prevProject.category}
              </p>
            </div>
          </Link>

          {/* Next */}
          <Link
            to={`/projects/${nextProject.id}`}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 hover:border-sky-300 dark:hover:border-sky-700 transition-all group flex flex-col justify-between space-y-4 text-right"
          >
            <div className="flex items-center justify-end gap-2 text-xs font-mono-code text-slate-500 dark:text-slate-400">
              <span>NEXT CASE STUDY ({nextProject.projectNumber})</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
            <div>
              <p className="font-heading text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                {nextProject.title}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                {nextProject.category}
              </p>
            </div>
          </Link>
        </div>
      </section>
    </article>
  );
};
