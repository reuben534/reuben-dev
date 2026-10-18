import React, { useState } from 'react';
import {
  Globe,
  UserCheck,
  Layers,
  ShoppingCart,
  BarChart3,
  Database,
  Cloud,
  ShieldCheck,
  ArrowRight,
  Check,
  Sparkles,
  X,
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData.ts';
import { ServiceItem } from '../types.ts';

interface ServicesProps {
  onSelectServiceForInquiry: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForInquiry }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Globe':
        return <Globe className="w-5 h-5 text-amber-700 dark:text-amber-400" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-amber-700 dark:text-amber-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-amber-700 dark:text-amber-400" />;
      case 'ShoppingCart':
        return <ShoppingCart className="w-5 h-5 text-amber-700 dark:text-amber-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-amber-700 dark:text-amber-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-amber-700 dark:text-amber-400" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-amber-700 dark:text-amber-400" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck className="w-5 h-5 text-amber-700 dark:text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 relative bg-stone-100/50 dark:bg-[#0e0c0a]/60 border-y border-stone-200/80 dark:border-stone-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 font-semibold mb-2">
              Capabilities & Offerings
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
              How I Can Help You
            </h2>
            <p className="mt-3 text-base text-stone-600 dark:text-stone-300">
              End-to-end digital solutions tailored for companies, founders, and startups looking to launch reliable, secure products.
            </p>
          </div>
          <div className="text-xs text-stone-500 dark:text-stone-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span>8 Specialized Core Disciplines</span>
          </div>
        </div>

        {/* 8 Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-2xl bg-white/90 dark:bg-stone-900/70 border border-stone-200/90 dark:border-stone-800/80 hover:border-amber-500/50 dark:hover:border-amber-500/40 transition-all flex flex-col justify-between group shadow-sm hover:shadow-xl hover:shadow-stone-900/5 dark:hover:shadow-amber-950/20"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200/80 dark:border-amber-900/30 group-hover:bg-amber-100 dark:group-hover:bg-amber-500/20 group-hover:border-amber-400 dark:group-hover:border-amber-500/40 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono text-stone-400 dark:text-stone-500 font-medium">
                    {service.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 tracking-tight group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs text-stone-600 dark:text-stone-300 leading-relaxed min-h-[3rem]">
                  {service.shortDesc}
                </p>

                {/* Tech Tags */}
                <div className="mt-4 pt-4 border-t border-stone-100 dark:border-stone-800/80 flex flex-wrap gap-1.5">
                  {service.techStack.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-800/70 px-2 py-0.5 rounded border border-stone-200/80 dark:border-stone-750"
                    >
                      {tech}
                    </span>
                  ))}
                  {service.techStack.length > 3 && (
                    <span className="text-[11px] font-mono text-amber-700 dark:text-amber-400 bg-amber-100/70 dark:bg-amber-950/40 px-1.5 py-0.5 rounded border border-amber-300/80 dark:border-amber-900/40">
                      +{service.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-2">
                <button
                  onClick={() => setActiveModalService(service)}
                  className="w-full flex items-center justify-between text-xs font-semibold text-stone-700 dark:text-stone-300 group-hover:text-amber-800 dark:group-hover:text-white py-2 px-3 rounded-lg bg-stone-50 dark:bg-stone-800/50 hover:bg-amber-50 dark:hover:bg-amber-500/15 hover:text-amber-800 dark:hover:text-amber-300 border border-stone-200/60 dark:border-transparent hover:border-amber-300 dark:hover:border-amber-500/30 transition-all"
                >
                  <span>Scope & Deliverables</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-amber-600 dark:text-amber-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/85 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg bg-white dark:bg-[#141210] border border-stone-200 dark:border-stone-700 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 p-1.5 text-stone-400 hover:text-stone-700 dark:hover:text-white rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400">
                {getIcon(activeModalService.iconName)}
              </div>
              <div>
                <span className="text-xs font-mono text-amber-700 dark:text-amber-400">Service {activeModalService.number}</span>
                <h3 className="text-xl font-bold text-stone-900 dark:text-white">{activeModalService.title}</h3>
              </div>
            </div>

            <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              {activeModalService.shortDesc}
            </p>

            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-400">
                Key Deliverables & Specifications
              </h4>
              <ul className="space-y-2 text-xs text-stone-600 dark:text-stone-300">
                {activeModalService.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800 text-xs">
              <span className="font-semibold text-stone-900 dark:text-stone-300 block mb-1">Recommended For:</span>
              <span className="text-stone-600 dark:text-stone-400">{activeModalService.bestFor}</span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => {
                  onSelectServiceForInquiry(activeModalService.title);
                  setActiveModalService(null);
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 rounded-lg transition-colors shadow-md shadow-amber-900/20"
              >
                <span>Request Scope for {activeModalService.title}</span>
                <Sparkles className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
