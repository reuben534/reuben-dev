import React from 'react';
import {
  Cpu,
  Rocket,
  GraduationCap,
  Code2,
  Smartphone,
  Shield,
  Sparkles,
  TrendingUp,
  MessageSquare,
  CheckCircle2,
} from 'lucide-react';
import { WHY_WORK_WITH_ME } from '../data/portfolioData.ts';

export const WhyWorkWithMe: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-amber-700 dark:text-amber-400" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-amber-700 dark:text-amber-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-amber-700 dark:text-amber-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-amber-700 dark:text-amber-400" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-amber-700 dark:text-amber-400" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-amber-700 dark:text-amber-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-700 dark:text-amber-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-amber-700 dark:text-amber-400" />;
      case 'MessageSquare':
      case 'MessageSquareCheck':
        return <MessageSquare className="w-5 h-5 text-amber-700 dark:text-amber-400" />;
      case 'CheckCircle2':
      default:
        return <CheckCircle2 className="w-5 h-5 text-amber-700 dark:text-amber-400" />;
    }
  };

  return (
    <section id="why-me" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 font-semibold mb-2">
            Value Proposition & Standards
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
            Why Work With Me
          </h2>
          <p className="mt-3 text-base text-stone-600 dark:text-stone-300">
            A developer who combines engineering discipline, founder-level ownership, and transparent communication to safeguard your product’s success.
          </p>
        </div>

        {/* 10 Feature Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_WORK_WITH_ME.map((item, idx) => (
            <div
              key={item.id}
              className={`p-6 rounded-2xl bg-white/85 dark:bg-stone-900/50 border border-stone-200/90 dark:border-stone-800/80 hover:border-amber-500/40 dark:hover:border-amber-900/50 hover:bg-white dark:hover:bg-stone-900/80 transition-all shadow-sm hover:shadow-md group ${
                idx === 0 || idx === 1 ? 'lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100/70 dark:bg-amber-950/60 border border-amber-200/80 dark:border-amber-900/40 flex items-center justify-center group-hover:bg-amber-200/60 dark:group-hover:bg-amber-500/20 group-hover:border-amber-400 dark:group-hover:border-amber-500/40 transition-colors">
                  {getIcon(item.iconName)}
                </div>
                <span className="text-[11px] font-mono text-amber-800 dark:text-amber-400/90 font-semibold tracking-wide">
                  {item.highlight}
                </span>
              </div>

              <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 tracking-tight group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors flex items-center gap-2">
                <span>{item.title}</span>
              </h3>

              <p className="mt-2.5 text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
