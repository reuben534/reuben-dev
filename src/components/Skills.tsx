import React, { useState } from 'react';
import { Layout, Server, Wrench, Binary, Layers } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData.ts';

export const Skills: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-4 h-4 text-amber-700 dark:text-amber-400" />;
      case 'Layout':
        return <Layout className="w-4 h-4 text-amber-700 dark:text-amber-400" />;
      case 'Server':
        return <Server className="w-4 h-4 text-amber-700 dark:text-amber-400" />;
      case 'Wrench':
        return <Wrench className="w-4 h-4 text-amber-700 dark:text-amber-400" />;
      case 'Binary':
      default:
        return <Binary className="w-4 h-4 text-amber-700 dark:text-amber-400" />;
    }
  };

  const filteredCategories =
    selectedFilter === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === selectedFilter);

  return (
    <section id="skills" className="py-12 md:py-16 relative bg-stone-100/50 dark:bg-[#0e0c0a]/50 border-t border-stone-200/80 dark:border-stone-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 font-semibold mb-1">
              Technical Arsenal & Expertise
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
              Skills & Engineering Stack
            </h2>
            <p className="mt-1.5 text-sm text-stone-600 dark:text-stone-300">
              Modern full-stack technologies grounded in computer science principles and active commercial delivery.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/90 dark:bg-stone-900/80 border border-stone-200/90 dark:border-stone-800 rounded-xl shadow-sm">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                selectedFilter === 'all'
                  ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-sm'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              All
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setSelectedFilter(cat.category)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  selectedFilter === cat.category
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-sm'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
                }`}
              >
                {cat.category.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.category}
              className="p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-stone-900/60 border border-stone-200/90 dark:border-stone-800/80 hover:border-amber-500/40 dark:hover:border-amber-900/40 transition-all flex flex-col justify-between shadow-sm"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 border-b border-stone-100 dark:border-stone-800/80 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/70 border border-amber-200 dark:border-amber-900/40">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 tracking-tight">
                        {category.category}
                      </h3>
                      <div className="text-xs text-stone-500 dark:text-stone-400 font-mono">
                        {category.badge}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-amber-700 dark:text-amber-400 font-semibold">
                    {category.skills.length} competencies
                  </span>
                </div>

                {/* Skills List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-stone-50/80 dark:bg-stone-950/60 border border-stone-200/80 dark:border-stone-800/60 hover:border-amber-400 dark:hover:border-amber-900/40 transition-colors flex items-center justify-between"
                    >
                      <div>
                        <span className="text-xs font-semibold text-stone-900 dark:text-stone-100 block">
                          {skill.name}
                        </span>
                        <span className="text-[10px] text-stone-500 dark:text-stone-400">
                          {skill.categoryTag}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-semibold text-amber-700 dark:text-amber-400/90 text-right">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer Note */}
              <div className="mt-6 pt-4 border-t border-stone-100 dark:border-stone-800/60 text-[11px] text-stone-500 dark:text-stone-400 flex items-center justify-between">
                <span>Production Tested</span>
                <span className="font-mono text-amber-700 dark:text-amber-400/80">Strict Quality Assurance</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
