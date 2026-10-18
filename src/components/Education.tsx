import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData.ts';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 font-semibold mb-1">
            Academic Background & Qualifications
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
            Formal Education & Accreditations
          </h2>
          <p className="mt-1.5 text-sm text-stone-600 dark:text-stone-300">
            A solid theoretical foundation paired with practical application engineering.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="mt-8 relative">
          {/* Subtle vertical timeline rule */}
          <div
            className="hidden md:block absolute left-8 top-6 bottom-6 w-[2px] bg-gradient-to-b from-amber-600 via-stone-300 to-transparent dark:from-amber-500 dark:via-stone-700 dark:to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-6">
            {EDUCATION.map((item, idx) => (
              <div
                key={idx}
                className="relative md:pl-20 group"
              >
                {/* Year Marker on Timeline */}
                <div
                  className="hidden md:flex absolute left-4 top-5 -translate-x-1/2 w-7 h-7 rounded-full bg-white dark:bg-stone-950 border-2 border-amber-600 dark:border-amber-500 items-center justify-center text-amber-700 dark:text-amber-400 shadow-md shadow-stone-900/5 dark:shadow-amber-950 group-hover:bg-amber-600 group-hover:text-white transition-colors"
                  aria-hidden="true"
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                </div>

                {/* Card Container */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-stone-900/60 border border-stone-200/90 dark:border-stone-800/80 hover:border-amber-500/40 dark:hover:border-amber-900/40 transition-all shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-3 border-b border-stone-100 dark:border-stone-800">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/80 px-2.5 py-0.5 rounded border border-amber-300/80 dark:border-amber-800/40">
                          {item.year}
                        </span>
                        {item.institution && (
                          <span className="text-xs font-medium text-stone-500 dark:text-stone-400">
                            {item.institution}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 tracking-tight">
                        {item.degree}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-emerald-700 dark:text-amber-400 font-semibold">
                      <Award className="w-3.5 h-3.5" />
                      <span>Conferred Credential</span>
                    </div>
                  </div>

                  <p className="mt-2.5 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Key Areas List */}
                  <div className="mt-3.5 pt-3 border-t border-stone-100 dark:border-stone-800/60">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-2 flex items-center gap-1.5">
                      <BookOpen className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                      <span>Core Focus:</span>
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.keyAreas.map((area, areaIdx) => (
                        <span
                          key={areaIdx}
                          className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800/70 border border-stone-200/80 dark:border-stone-750 text-stone-800 dark:text-stone-200"
                        >
                          <CheckCircle2 className="w-3 h-3 text-amber-600 dark:text-amber-400 shrink-0" />
                          <span>{area}</span>
                        </span>
                      ))}
                    </div>
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
