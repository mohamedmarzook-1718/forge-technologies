import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Layers,
  Sparkles,
  Code2,
  Terminal,
  ShieldCheck,
  Filter,
  CheckCircle2,
  Eye
} from 'lucide-react';
import { Link } from '../router';
import { PROJECTS, Project } from '../data/projects';

type CategoryFilter =
  | 'All Projects'
  | 'Websites & Digital Experiences'
  | 'Web Applications'
  | 'AI & Computer Vision'
  | 'Data Analytics & Dashboards'
  | 'Branding & Visual Design'
  | 'Learning Platforms';

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All Projects');

  const categories: CategoryFilter[] = [
    'All Projects',
    'Websites & Digital Experiences',
    'Web Applications',
    'AI & Computer Vision',
    'Data Analytics & Dashboards',
    'Branding & Visual Design',
    'Learning Platforms',
  ];

  const filteredProjects =
    selectedCategory === 'All Projects'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  // Prominently featured client hero project (Grow Data World)
  const heroProject = PROJECTS.find((p) => p.id === 'grow-data-world');
  // AI showcase project (YOLO Wildlife & Poacher Detection)
  const aiProject = PROJECTS.find((p) => p.id === 'yolo-detection-system');

  return (
    <div className="pb-24 text-slate-800 dark:text-slate-200">
      {/* Portfolio Header with Spatial Lighting */}
      <section className="relative pt-12 sm:pt-16 pb-12 overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[360px] bg-sky-500/[0.04] dark:bg-sky-500/[0.1] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs text-xs font-mono-code text-slate-700 dark:text-slate-300">
            <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse" />
            <span className="font-semibold text-slate-900 dark:text-white">Forge Technologies — Digital Dimension</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span className="text-slate-500 dark:text-slate-400">Verified Project Inventory</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.08]">
              Engineered Work.{' '}
              <span className="text-sky-700 dark:text-sky-400">Real Deliverables.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Explore our portfolio of client web platforms, custom web applications, computer vision intelligence,
              and data dashboards. Every entry represents actual code, design, and architecture delivered by Forge Technologies.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="pt-4 flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 text-xs font-mono-code text-slate-500 dark:text-slate-400 mr-2">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter:</span>
            </div>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-slate-900 dark:bg-sky-500 text-white shadow-xs ring-1 ring-slate-900 dark:ring-sky-400'
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Counter info */}
          <div className="pt-1 flex items-center justify-between text-xs font-mono-code text-slate-500 dark:text-slate-400">
            <span>
              Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} in {selectedCategory}
            </span>
            <span className="hidden sm:inline">100% Genuine Project Evidence</span>
          </div>
        </div>
      </section>

      {/* Featured Client Spotlight: Grow Data World (Visible when viewing All or Learning/Websites) */}
      {selectedCategory === 'All Projects' && heroProject && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-white to-slate-50/80 dark:from-slate-900/90 dark:to-slate-950 border border-slate-200/90 dark:border-slate-800 shadow-xl relative overflow-hidden">
            {/* Corner Spotlight badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-2">
                <span className="font-mono-code text-xs px-2.5 py-1 rounded bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 font-bold border border-sky-200 dark:border-sky-800">
                  FEATURED CLIENT CASE STUDY · 01
                </span>
                <span className="font-mono-code text-xs px-2.5 py-1 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-semibold border border-emerald-200 dark:border-emerald-800 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Client Production
                </span>
              </div>

              {heroProject.liveUrl && (
                <a
                  href={heroProject.liveUrl}
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
              {/* Copy Side */}
              <div className="lg:col-span-5 space-y-5">
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                  {heroProject.title}
                </h2>
                <p className="font-mono-code text-xs text-sky-700 dark:text-sky-400 font-semibold">
                  {heroProject.subtitle}
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {heroProject.summary}
                </p>

                <div className="space-y-2 pt-2">
                  <p className="text-xs font-mono-code text-slate-600 dark:text-slate-400 uppercase tracking-wider font-semibold">
                    Core Solutions Delivered:
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                    {heroProject.features.slice(0, 4).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {heroProject.tags.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono-code bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <Link
                    to={`/projects/${heroProject.id}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 dark:bg-sky-500 text-white font-semibold text-xs transition-colors hover:bg-slate-800 dark:hover:bg-sky-400 shadow-xs"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {heroProject.liveUrl && (
                    <a
                      href={heroProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 text-xs font-semibold transition-colors"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Browser Mockup Side */}
              <div className="lg:col-span-7">
                <Link
                  to={`/projects/${heroProject.id}`}
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
                      <span>Explore</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={heroProject.heroImage}
                      alt="Grow Data World Platform Showcase"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Dynamic Grid of Projects */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const isHero = project.id === 'grow-data-world' && selectedCategory === 'All Projects';
            if (isHero) return null; // Already featured prominently above

            return (
              <article
                key={project.id}
                className="rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 group hover:-translate-y-1.5"
              >
                <div>
                  {/* Card Visual Header with Browser Chrome Bar */}
                  <Link
                    to={`/projects/${project.id}`}
                    className="block relative aspect-[16/10] bg-slate-950 overflow-hidden border-b border-slate-100 dark:border-slate-800"
                  >
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-md">
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Case Study</span>
                      </span>
                    </div>

                    {/* Top Pill Badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="font-mono-code text-[11px] font-bold px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-sm text-white border border-white/10">
                        {project.projectNumber}
                      </span>
                      <span className="font-mono-code text-[10px] font-semibold px-2 py-0.5 rounded bg-sky-950/80 backdrop-blur-sm text-sky-300 border border-sky-500/20">
                        {project.category}
                      </span>
                    </div>
                  </Link>

                  {/* Card Body */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-mono-code text-slate-600 dark:text-slate-400 font-medium">
                      <span>{project.engagementType}</span>
                      <span>{project.year}</span>
                    </div>

                    <Link to={`/projects/${project.id}`}>
                      <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors leading-snug">
                        {project.title}
                      </h3>
                    </Link>

                    <p className="text-xs font-mono-code text-sky-700 dark:text-sky-400 line-clamp-1 font-medium">
                      {project.subtitle}
                    </p>

                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Tech Pills */}
                    <div className="pt-2 flex flex-wrap gap-1">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] font-mono-code rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3 bg-slate-50/50 dark:bg-slate-900/50">
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono-code text-slate-500 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Direct Project Inquiry Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 dark:bg-slate-950 border border-slate-800 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl relative overflow-hidden">
          <div className="max-w-2xl space-y-3 relative z-10">
            <span className="font-mono-code text-xs uppercase tracking-wider text-sky-400 font-semibold">
              Have a Project in Mind?
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              Let's engineer a standout digital experience for your brand.
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              We collaborate with startups, retail brands, and established companies on high-performance websites, custom web apps, and AI systems.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto relative z-10">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-colors shadow-sm"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
