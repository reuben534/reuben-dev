import React from 'react';
import { Award, Briefcase, GraduationCap, Compass, Layers, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <GraduationCap className="w-5 h-5 text-amber-700 dark:text-amber-400" />,
      title: 'Formal Academic Rigor',
      text: 'Diploma in Systems Development (2024) and Advanced Diploma in Applications Development (2026) from Boston City Campus, ensuring disciplined foundations.',
    },
    {
      icon: <Briefcase className="w-5 h-5 text-amber-700 dark:text-amber-400" />,
      title: 'Founder & Business Focus',
      text: 'Established my independent software development brand in 2024 to empower businesses with bespoke technology that generates tangible ROI.',
    },
    {
      icon: <Layers className="w-5 h-5 text-amber-700 dark:text-amber-400" />,
      title: 'From Concept to Deployment',
      text: 'Taking full ownership of the lifecycle: user flows, database design, clean C# / ASP.NET Core, MERN stack, cloud hosting, and continuous support.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-amber-700 dark:text-amber-400" />,
      title: 'Enterprise-Grade Security',
      text: 'Designing resilient architectures, secure role authorizations, input sanitization, and scalable database schemas from day zero.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 font-semibold mb-2 flex items-center gap-2">
            <Compass className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>The Developer & Founder</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight [text-wrap:balance]">
            Engineering Digital Solutions with Craftsmanship and Purpose
          </h2>
          <p className="mt-3 text-base text-stone-600 dark:text-stone-300">
            A developer who bridges the gap between high-level business strategy and deep, reliable software engineering.
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative Paragraphs */}
          <div className="lg:col-span-7 space-y-5 leading-relaxed text-base">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-stone-900/50 border border-stone-200/90 dark:border-stone-800/80 shadow-sm space-y-4">
              {PERSONAL_INFO.aboutNarrative.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? 'text-stone-900 dark:text-stone-100 font-medium' : 'text-stone-600 dark:text-stone-300'}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick Summary Bar */}
            <div className="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-sm">
              <span className="text-amber-800 dark:text-amber-400 font-semibold">Specialization Focus:</span>
              <div className="flex flex-wrap items-center gap-3 text-stone-700 dark:text-stone-300">
                <span>ASP.NET Core MVC</span>
                <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
                <span>MERN Stack (MongoDB, Express, React, Node)</span>
                <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
                <span>Database Engineering</span>
                <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
                <span>Cloud Deployment</span>
              </div>
            </div>
          </div>

          {/* Pillars & Credentials */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
              Foundational Strengths
            </div>
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-white/80 dark:bg-stone-900/60 border border-stone-200/80 dark:border-stone-800/80 hover:border-amber-500/40 dark:hover:border-amber-900/50 hover:bg-white dark:hover:bg-stone-900/90 transition-all shadow-sm group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-amber-100/70 dark:bg-amber-950/60 border border-amber-200/60 dark:border-amber-800/40 group-hover:bg-amber-200/60 dark:group-hover:bg-amber-900/40 transition-colors shrink-0">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100 tracking-tight group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                      {pillar.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
