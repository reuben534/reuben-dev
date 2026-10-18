import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData.ts';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 font-semibold mb-2">
            Academic Background & Qualifications
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
            Formal Education & Accreditations
          </h2>
          <p className="mt-3 text-base text-stone-600 dark:text-stone-300">
            A strong theoretical foundation paired with rigorous application engineering to ensure every system is built to standard.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="mt-14 relative">
          {/* Subtle vertical timeline rule */}
          <div
            className="hidden md:block absolute left-8 top-6 bottom-6 w-[2px] bg-gradient-to-b from-amber-600 via-stone-300 to-transparent dark:from-amber-500 dark:via-stone-700 dark:to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {EDUCATION.map((item, idx) => (
              <div
                key={idx}
                className="relative md:pl-24 group"
              >
                {/* Year Marker on Timeline */}
                <div
                  className="hidden md:flex absolute left-4 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-stone-950 border-2 border-amber-600 dark:border-amber-500 items-center justify-center text-amber-700 dark:text-amber-400 shadow-md shadow-stone-900/5 dark:shadow-amber-950 group-hover:bg-amber-600 group-hover:text-white transition-colors"
                  aria-hidden="true"
                >
                  <GraduationCap className="w-4 h-4" />
                </div>

                {/* Card Container */}
                <div className="p-6 sm:p-8 rounded-2xl bg-white/90 dark:bg-stone-900/60 border border-stone-200/90 dark:border-stone-800/80 hover:border-amber-500/40 dark:hover:border-amber-900/40 transition-all shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-stone-100 dark:border-stone-800">
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
                      <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
                        {item.degree}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-emerald-700 dark:text-amber-400 font-semibold">
                      <Award className="w-4 h-4" />
                      <span>Conferred Credential</span>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Key Areas List */}
                  <div className="mt-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-3 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                      <span>Key Curriculum & Focus Areas:</span>
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                      {item.keyAreas.map((area, areaIdx) => (
                        <div
                          key={areaIdx}
                          className="flex items-center gap-2 p-2.5 rounded-lg bg-stone-50 dark:bg-stone-950/60 border border-stone-200/80 dark:border-stone-800/60 text-xs text-stone-800 dark:text-stone-200"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                          <span>{area}</span>
                        </div>
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
