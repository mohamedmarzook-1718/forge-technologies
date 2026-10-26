import React from 'react';
import { ArrowUpRight, Terminal } from 'lucide-react';
import { Link } from '../router';

interface Blueprint {
  id: string;
  badge: string;
  title: string;
  category: string;
  challenge: string;
  solution: string;
  techStack: string[];
  serviceLink: string;
}

const BLUEPRINTS: Blueprint[] = [
  {
    id: 'retail-sync',
    badge: 'Retail Commerce Architecture',
    title: 'Omnichannel Storefront & Inventory Sync Engine',
    category: 'E-Commerce / Web Development',
    challenge: 'Retail shops often struggle with inventory mismatches between physical store sales and online web orders, leading to overselling and customer frustration.',
    solution: 'Engineered a lightweight, static-first web storefront paired with a real-time webhooks listener to synchronize inventory states instantaneously with zero monthly SaaS bloat.',
    techStack: ['React', 'TypeScript', 'Webhooks', 'Stripe', 'Tailwind CSS'],
    serviceLink: '/services?service=website-development',
  },
  {
    id: 'startup-ai-rag',
    badge: 'Applied AI Blueprint',
    title: 'Self-Serve Business Knowledge & Customer Support Bot',
    category: 'AI & Machine Learning',
    challenge: 'Startups and retail owners spend hours answering repetitive inquiries regarding product specs, opening hours, return policies, and order tracking.',
    solution: 'Architected a RAG (Retrieval-Augmented Generation) assistant embedded directly on the website, trained on store documents to answer customer questions 24/7 with zero hallucinations.',
    techStack: ['Python', 'LangChain', 'Vector DB', 'React Embed', 'Web3Forms'],
    serviceLink: '/services?service=ai-machine-learning',
  },
  {
    id: 'java-order-pipeline',
    badge: 'Software Engineering',
    title: 'High-Concurrency Java Order Processing Module',
    category: 'Java / Backend Solutions',
    challenge: 'Growing order volumes often cause off-the-shelf plugins to fail during flash sales, causing dropped payments and database locks.',
    solution: 'Constructed an ACID-compliant, multi-threaded Java Spring microservice that queues inbound transactions, issues PDF invoices, and securely updates inventory databases.',
    techStack: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Docker', 'REST API'],
    serviceLink: '/services?service=java-development',
  },
];

export const BlueprintShowcase: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono-code text-sky-700 uppercase tracking-wider mb-2 font-semibold">
            <Terminal className="w-3.5 h-3.5" />
            <span>Demonstrated Architectures</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            Project Blueprints & Problem Solvers
          </h2>
          <p className="text-slate-600 text-sm mt-2 max-w-xl">
            Sample architectures we design and build for startups, retail shops, and commercial clients.
          </p>
        </div>

        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-900"
        >
          <span>Commission a tailored blueprint</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {BLUEPRINTS.map((bp) => (
          <div
            key={bp.id}
            className="flex flex-col justify-between p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-sm transition-all duration-300 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono-code text-[11px] text-sky-700 uppercase tracking-wider font-semibold">
                  {bp.badge}
                </span>
                <span className="font-mono-code text-[10px] text-slate-500">
                  {bp.category}
                </span>
              </div>

              <h3 className="font-heading text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                {bp.title}
              </h3>

              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/70">
                  <span className="font-semibold text-slate-900 block mb-1">The Problem:</span>
                  <p className="text-slate-600 leading-relaxed">{bp.challenge}</p>
                </div>
                <div className="p-3 rounded-lg bg-sky-50/70 border border-sky-100">
                  <span className="font-semibold text-sky-800 block mb-1">Our Engineering Solution:</span>
                  <p className="text-slate-700 leading-relaxed">{bp.solution}</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6 flex flex-col gap-3">
              <div className="flex flex-wrap gap-1.5">
                {bp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono-code text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] font-mono-code text-slate-500">Fixed Milestone Delivery</span>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 hover:text-sky-900"
                >
                  <span>Build This</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
