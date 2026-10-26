import React, { useState } from 'react';
import { Layers, Code2, Cpu, Smartphone, Database, Cloud, Sparkles } from 'lucide-react';

interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'ai' | 'infra';
  description: string;
  badge: string;
}

const TECH_ITEMS: TechItem[] = [
  // Frontend
  { name: 'React 19 & Next.js', category: 'frontend', description: 'Server components, client hydration, and ultra-fast web architectures.', badge: 'Production' },
  { name: 'TypeScript', category: 'frontend', description: 'Strict typing for high-reliability, zero-runtime-error codebases.', badge: 'Standard' },
  { name: 'Tailwind CSS', category: 'frontend', description: 'Modular, responsive styling without CSS bundle bloat.', badge: 'Standard' },
  { name: 'Three.js & Canvas', category: 'frontend', description: 'Lightweight WebGL interactive visualizations and spatial graphics.', badge: 'Interactive' },

  // Backend
  { name: 'Java & Spring Boot', category: 'backend', description: 'Enterprise-grade microservices, REST APIs, and high-concurrency order systems.', badge: 'Enterprise' },
  { name: 'Node.js & Express', category: 'backend', description: 'Event-driven API endpoints, webhook proxies, and microservices.', badge: 'Agile' },
  { name: 'PostgreSQL & Cloud SQL', category: 'backend', description: 'ACID-compliant relational schema design, transactions, and indexing.', badge: 'Relational' },

  // Mobile
  { name: 'Flutter & React Native', category: 'mobile', description: 'Cross-platform native iOS & Android applications with shared logic.', badge: 'Mobile-first' },
  { name: 'Offline-First Sync', category: 'mobile', description: 'Local SQLite and cloud sync for seamless in-store retail operations.', badge: 'Reliability' },

  // AI & Automation
  { name: 'RAG Knowledge Pipelines', category: 'ai', description: 'Retrieval-Augmented Generation connecting LLMs to your store documentation.', badge: 'Applied AI' },
  { name: 'LangChain & Vector Embeddings', category: 'ai', description: 'Semantic search, document indexing, and private Q&A assistants.', badge: 'Precision' },
  { name: 'Conversational Business Bots', category: 'ai', description: '24/7 customer service automation for after-hours retail inquiries.', badge: 'Automation' },

  // Infra
  { name: 'Web3Forms & Cloud Webhooks', category: 'infra', description: 'GDPR-compliant, serverless form processing and instant lead routing.', badge: 'Serverless' },
  { name: 'Vercel, GitHub Pages & Cloudflare', category: 'infra', description: 'Zero-downtime global edge CDN distribution with SSL automation.', badge: 'Edge Global' },
];

export const TechStackMatrix: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'backend' | 'mobile' | 'ai' | 'infra'>('all');

  const filtered = activeTab === 'all' ? TECH_ITEMS : TECH_ITEMS.filter((t) => t.category === activeTab);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono-code text-sky-700 uppercase tracking-wider mb-2 font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>Architecture & Standards</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            Engineering Stack & Frameworks
          </h2>
          <p className="text-slate-600 text-sm mt-2 max-w-xl">
            We build strictly on battle-tested, open technologies that you can easily maintain, host, or scale without proprietary platform lock-in.
          </p>
        </div>

        {/* Category switcher */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg border border-slate-200">
          {[
            { id: 'all', label: 'All Stack' },
            { id: 'frontend', label: 'Frontend' },
            { id: 'backend', label: 'Java & Backend' },
            { id: 'mobile', label: 'Mobile' },
            { id: 'ai', label: 'AI & Automations' },
            { id: 'infra', label: 'Deploy & Infra' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-white text-slate-900 border border-slate-300 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of technologies */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((tech) => (
          <div
            key={tech.name}
            className="p-5 rounded-xl bg-white hover:bg-slate-50/70 border border-slate-200/90 hover:border-slate-300 transition-all duration-200 shadow-xs group"
          >
            <div className="flex items-center justify-between gap-2 mb-2.5">
              <h3 className="font-heading text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                {tech.name}
              </h3>
              <span className="font-mono-code text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700 font-medium">
                {tech.badge}
              </span>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              {tech.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
