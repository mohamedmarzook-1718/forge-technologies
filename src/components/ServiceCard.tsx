import React from 'react';
import {
  Globe,
  Code2,
  Smartphone,
  Cpu,
  Bot,
  Palette,
  Share2,
  ArrowRight,
  Check
} from 'lucide-react';
import { ServiceItem } from '../types';
import { Link } from '../router';

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, featured = false }) => {
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
    <article
      className={`group flex flex-col justify-between p-6 sm:p-7 rounded-xl transition-all duration-300 relative overflow-hidden ${
        featured
          ? 'bg-white border-2 border-sky-500/40 shadow-sm'
          : 'bg-white hover:bg-slate-50/70 border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-md'
      }`}
    >
      {/* Subtle top border accent highlight on hover */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Header: Icon & Category Indicator */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0 group-hover:border-sky-200 group-hover:bg-sky-100/70 transition-colors">
            {getIcon(service.iconName)}
          </div>
          <span className="font-mono-code text-[11px] uppercase tracking-wider text-slate-500">
            {service.category.replace('-', ' & ')}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 mb-2.5 group-hover:text-sky-700 transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-5">
          {service.shortDesc}
        </p>

        {/* Key Deliverables */}
        <div className="space-y-2 mb-6">
          <p className="font-mono-code text-xs text-slate-500 uppercase tracking-wider font-semibold">
            Scope & Deliverables
          </p>
          <ul className="space-y-1.5 text-xs text-slate-700">
            {service.deliverables.slice(0, 4).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer action */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
        <span className="text-[11px] text-slate-500 truncate max-w-[170px] sm:max-w-[190px]" title={service.idealFor}>
          {service.idealFor}
        </span>
        <Link
          to={`/contact?service=${service.id}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 hover:text-sky-900 group-hover:translate-x-0.5 transition-transform shrink-0"
        >
          <span>Discuss</span>
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
};
