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
    <section id="why-me" className="py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 font-semibold mb-1">
            Value Proposition & Standards
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
            Why Work With Me
          </h2>
          <p className="mt-1.5 text-sm text-stone-600 dark:text-stone-300">
            A developer who combines engineering discipline, founder-level ownership, and transparent communication.
          </p>
        </div>

        {/* 10 Feature Cards Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {WHY_WORK_WITH_ME.map((item) => (
            <div
              key={item.id}
              className="p-4 sm:p-4.5 rounded-xl bg-white/85 dark:bg-stone-900/50 border border-stone-200/90 dark:border-stone-800/80 hover:border-amber-500/40 dark:hover:border-amber-900/50 hover:bg-white dark:hover:bg-stone-900/80 transition-all shadow-sm hover:shadow-md group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-lg bg-amber-100/70 dark:bg-amber-950/60 border border-amber-200/80 dark:border-amber-900/40 flex items-center justify-center group-hover:bg-amber-200/60 dark:group-hover:bg-amber-500/20 transition-colors">
                  {getIcon(item.iconName)}
                </div>
                <span className="text-[10px] font-mono text-amber-800 dark:text-amber-400/90 font-semibold tracking-wide">
                  {item.highlight}
                </span>
              </div>

              <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100 tracking-tight group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">
                {item.title}
              </h3>

              <p className="mt-1.5 text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
