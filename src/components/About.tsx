import React from 'react';
import { Briefcase, GraduationCap, Compass, Layers, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <GraduationCap className="w-4 h-4 text-amber-700 dark:text-amber-400" />,
      title: 'Formal Qualifications',
      text: 'Diploma in Systems Development (2024) and Advanced Diploma in Applications Development (2026) from Boston City Campus.',
    },
    {
      icon: <Briefcase className="w-4 h-4 text-amber-700 dark:text-amber-400" />,
      title: 'RMK Solutions (Founder)',
      text: 'Established in 2024 to deliver bespoke, high-ROI web applications for growing businesses.',
    },
    {
      icon: <Layers className="w-4 h-4 text-amber-700 dark:text-amber-400" />,
      title: 'Idea to Deployment',
      text: 'Turnkey execution across database architecture, backend APIs, responsive frontends, and cloud launch.',
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-amber-700 dark:text-amber-400" />,
      title: 'Security & Speed First',
      text: 'Production-hardened architectures with parameterized queries, RBAC security, and sub-50ms API responses.',
    },
  ];

  return (
    <section id="about" className="py-10 md:py-14 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 font-semibold mb-1 flex items-center gap-2">
            <Compass className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>About The Founder</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
            Engineering Digital Products That Deliver Real Results
          </h2>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Narrative Paragraphs */}
          <div className="lg:col-span-6 space-y-3.5 leading-relaxed text-sm">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/80 dark:bg-stone-900/50 border border-stone-200/90 dark:border-stone-800/80 shadow-sm space-y-2.5">
              {PERSONAL_INFO.aboutNarrative.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? 'text-stone-900 dark:text-stone-100 font-medium' : 'text-stone-600 dark:text-stone-300'}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick Summary Bar */}
            <div className="p-3.5 rounded-xl bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm">
              <span className="text-amber-800 dark:text-amber-400 font-semibold">Specialization:</span>
              <div className="flex flex-wrap items-center gap-2 text-stone-700 dark:text-stone-300 font-medium">
                <span>ASP.NET Core</span>
                <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
                <span>MERN Stack</span>
                <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
                <span>SQL & MongoDB</span>
                <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
                <span>Azure Cloud</span>
              </div>
            </div>
          </div>

          {/* Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-white/80 dark:bg-stone-900/60 border border-stone-200/80 dark:border-stone-800/80 hover:border-amber-500/40 dark:hover:border-amber-900/50 transition-all shadow-sm group"
              >
                <div className="p-2 rounded-lg bg-amber-100/70 dark:bg-amber-950/60 border border-amber-200/60 dark:border-amber-800/40 w-fit mb-2.5">
                  {pillar.icon}
                </div>
                <h3 className="text-xs font-bold text-stone-900 dark:text-stone-100 tracking-tight group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-1 text-xs text-stone-600 dark:text-stone-400 leading-snug">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
