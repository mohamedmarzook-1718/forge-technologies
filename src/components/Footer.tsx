import React from 'react';
import { Mail, Instagram, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Link } from '../router';

export const Footer: React.FC = () => {
  const currentYear = 2026;

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-t border-slate-300 dark:border-slate-800 mt-auto relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand & Positioning */}
          <div className="md:col-span-2 space-y-5">
            <Link to="/" className="inline-flex items-center gap-3 group" aria-label="Forge Technologies Home">
              <img
                src="/assets/aistudio/forge_emblem_clean_d3ebd5b8.svg"
                alt="Forge Technologies Emblem"
                className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col justify-center leading-none">
                <span className="font-heading font-black tracking-[0.16em] text-slate-900 dark:text-white text-base uppercase">
                  FORGE
                </span>
                <span className="font-mono-code font-semibold tracking-[0.32em] text-slate-600 dark:text-slate-400 text-[9px] uppercase mt-0.5">
                  TECHNOLOGIES
                </span>
              </div>
            </Link>

            <p className="text-slate-700 dark:text-slate-300 text-sm max-w-sm leading-relaxed">
              Senior freelance engineering studio for startups, retail businesses, and entrepreneurs.
              Building high-performance web platforms, mobile solutions, Java backends, and AI automation.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 text-xs font-mono-code text-slate-700 dark:text-slate-300">
              <a
                href="mailto:contact.forgetechnologies@gmail.com"
                className="inline-flex items-center gap-1.5 hover:text-sky-700 dark:hover:text-sky-400 transition-colors font-semibold"
                aria-label="Send email to contact.forgetechnologies@gmail.com"
              >
                <Mail className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" aria-hidden="true" />
                <span>contact.forgetechnologies@gmail.com</span>
              </a>
              <span className="hidden sm:inline text-slate-400 dark:text-slate-600">·</span>
              <a
                href="https://instagram.com/forge_technologies"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-sky-700 dark:hover:text-sky-400 transition-colors font-semibold"
                aria-label="Instagram profile @forge_technologies"
              >
                <Instagram className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" aria-hidden="true" />
                <span>@forge_technologies</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono-code tracking-wider uppercase text-slate-900 dark:text-white font-bold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors">
                  Projects & Case Studies
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors">
                  Product Lab
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors">
                  About the Studio
                </Link>
              </li>
              <li>
                <Link to="/policies" className="text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors">
                  Client Policies & Terms
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Quick Directory */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono-code tracking-wider uppercase text-slate-900 dark:text-white font-bold">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <Link to="/services" className="hover:text-sky-700 dark:hover:text-sky-400 transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-sky-700 dark:hover:text-sky-400 transition-colors">
                  Frontend & React Systems
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-sky-700 dark:hover:text-sky-400 transition-colors">
                  Custom Mobile Applications
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-sky-700 dark:hover:text-sky-400 transition-colors">
                  Java & Enterprise Backend
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-sky-700 dark:hover:text-sky-400 transition-colors">
                  AI & RAG Chatbot Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-sky-700 dark:hover:text-sky-400 transition-colors">
                  Brand & Graphic Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-sky-700 dark:hover:text-sky-400 transition-colors">
                  Social Media Strategy
                </Link>
              </li>
            </ul>
          </div>

          {/* Freelance Client Guarantee Box */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono-code tracking-wider uppercase text-sky-800 dark:text-sky-400 font-bold">
              Client Sovereignty
            </h4>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2 text-xs">
              <div className="flex items-center gap-1.5 text-slate-900 dark:text-white font-semibold">
                <ShieldCheck className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span>100% Code Ownership</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                Full intellectual property, repositories, and credentials are unconditionally transferred upon final settlement.
              </p>
              <div className="pt-1">
                <Link
                  to="/policies"
                  className="inline-flex items-center gap-1 text-[11px] text-sky-700 dark:text-sky-400 font-medium hover:underline"
                >
                  <span>Review client agreement</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom hairline & copyright */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {currentYear} Forge Technologies. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 text-slate-500 dark:text-slate-400 font-mono-code text-[11px]">
            <Link to="/policies" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Client Service Terms
            </Link>
            <span className="text-slate-300 dark:text-slate-700">·</span>
            <Link to="/policies#privacy" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Privacy & Web3Forms Policy
            </Link>
            <span className="text-slate-300 dark:text-slate-700">·</span>
            <Link to="/policies#refunds" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Revision & Warranty Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
