import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, MapPin, CheckCircle2, ShieldCheck, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO, STATISTICS } from '../data/portfolioData.ts';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen Hero: 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean unboxed metadata with separators */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-stone-600 dark:text-stone-400">
              <span className="flex items-center gap-1.5 text-amber-700 dark:text-amber-400 font-semibold">
                <MapPin className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                {PERSONAL_INFO.location}
              </span>
              <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
              <span className="text-stone-800 dark:text-stone-200 font-medium">ASP.NET Core MVC & MERN Stack Specialist</span>
              <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
              <span className="text-emerald-700 dark:text-amber-300 flex items-center gap-1 font-semibold">
                <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-amber-400" />
                Available for New Projects
              </span>
            </div>

            {/* Headline with balanced wrapping */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight leading-[1.1] [text-wrap:balance]">
              Turning Ideas Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-700 to-orange-600 dark:from-amber-300 dark:via-amber-200 dark:to-orange-400">
                Powerful Digital Solutions
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 max-w-2xl leading-relaxed">
              {PERSONAL_INFO.heroSubheadline}
            </p>

            {/* Tagline callout strip */}
            <div className="p-4 rounded-xl bg-white/80 dark:bg-stone-900/80 border border-stone-200/90 dark:border-stone-800/80 max-w-2xl shadow-sm">
              <p className="text-xs uppercase tracking-wider text-amber-700 dark:text-amber-400 font-semibold mb-1">
                Core Philosophy
              </p>
              <p className="text-sm text-stone-800 dark:text-stone-200 font-medium italic">
                "{PERSONAL_INFO.tagline}"
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 rounded-lg transition-all shadow-md shadow-amber-900/20 active:translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-stone-800 hover:text-stone-950 bg-white/90 hover:bg-stone-100 border border-stone-300/80 dark:bg-stone-900/80 dark:hover:bg-stone-800 dark:border-stone-800 dark:text-stone-200 dark:hover:text-white rounded-lg transition-all shadow-sm active:translate-y-0.5"
              >
                <span>Let's Build Together</span>
                <ArrowUpRight className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-stone-600 dark:text-stone-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                Enterprise Security Best Practices
              </span>
              <span className="flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                Enterprise .NET & MERN Stack Ecosystem
              </span>
            </div>
          </div>

          {/* Right Column: Developer Visual Container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer Glow & Frame */}
              <div className="relative rounded-2xl bg-gradient-to-b from-amber-500/25 via-stone-300/40 to-stone-400/20 dark:from-amber-500/25 dark:via-stone-800/40 dark:to-stone-900/80 p-1 shadow-xl shadow-stone-900/10 dark:shadow-2xl dark:shadow-amber-950/30">
                <div className="relative rounded-[15px] overflow-hidden bg-stone-100 dark:bg-stone-950 aspect-square">
                  {!imageError ? (
                    <img
                      src={PERSONAL_INFO.profileImage}
                      alt="Reuben - Full Stack Developer and Founder"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-stone-200 dark:bg-stone-900 p-6 text-center">
                      <div className="w-16 h-16 rounded-2xl bg-amber-500/20 text-amber-700 dark:text-amber-400 flex items-center justify-center mb-4">
                        <Sparkles className="w-8 h-8" />
                      </div>
                      <span className="text-xl font-bold text-stone-900 dark:text-white mb-1">{PERSONAL_INFO.name}</span>
                      <span className="text-xs text-amber-700 dark:text-amber-400 mb-2">{PERSONAL_INFO.title}</span>
                      <span className="text-xs text-stone-600 dark:text-stone-400">{PERSONAL_INFO.location}</span>
                    </div>
                  )}

                  {/* Gradient Overlay Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />

                  {/* Identification Card at Bottom of Frame */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 dark:bg-stone-950/85 backdrop-blur-md border border-stone-200/90 dark:border-stone-800/80 flex items-center justify-between shadow-md">
                    <div>
                      <div className="text-sm font-bold text-stone-900 dark:text-white tracking-tight flex items-center gap-2">
                        <span>{PERSONAL_INFO.brandName}</span>
                        <span className="text-[10px] text-amber-800 dark:text-amber-300 font-semibold px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-800/60">
                          Founder
                        </span>
                      </div>
                      <div className="text-xs text-stone-600 dark:text-stone-400">by {PERSONAL_INFO.name} · Full Stack Solutions</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[11px] font-mono text-stone-500 dark:text-stone-400">South Africa</div>
                      <div className="text-[10px] text-emerald-600 dark:text-amber-400 font-semibold">Ready to Deploy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Statistics Section (4-Column Strip Below Hero) */}
        <div className="mt-16 pt-10 border-t border-stone-200/80 dark:border-stone-800/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {STATISTICS.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white/70 dark:bg-stone-900/50 border border-stone-200/80 dark:border-stone-800/70 hover:border-amber-500/40 dark:hover:border-amber-900/40 transition-colors shadow-sm group"
              >
                <div className="text-3xl sm:text-4xl font-extrabold font-mono tabular-nums tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-300">
                    {stat.value}
                  </span>
                </div>
                <div className="mt-1 text-sm font-semibold text-stone-900 dark:text-stone-200">
                  {stat.label}
                </div>
                <div className="mt-1 text-xs text-stone-600 dark:text-stone-400 leading-snug">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
