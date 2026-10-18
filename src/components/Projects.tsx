import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Info } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData.ts';
import { ProjectItem } from '../types.ts';
import { ProjectModal } from './ProjectModal.tsx';

interface ProjectsProps {
  onRequestCodeSample: (projectTitle: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onRequestCodeSample }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleLiveDemoClick = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  const handleGithubClick = (project: ProjectItem) => {
    onRequestCodeSample(project.title);
  };

  return (
    <section id="projects" className="py-12 md:py-16 relative bg-stone-100/40 dark:bg-[#0e0c0a]/60 border-t border-stone-200/80 dark:border-stone-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 font-semibold mb-1">
            Selected Works & Engineering
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-1.5 text-sm text-stone-600 dark:text-stone-300">
            Selected applications demonstrating real-world software engineering, responsive UI, and robust backends.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-white/90 dark:bg-stone-900/70 border border-stone-200/90 dark:border-stone-800/80 hover:border-amber-500/50 dark:hover:border-amber-900/50 overflow-hidden flex flex-col justify-between group transition-all shadow-sm hover:shadow-lg hover:shadow-stone-900/5 dark:hover:shadow-amber-950/20"
            >
              <div>
                {/* Project Image Frame */}
                <div className="relative aspect-[16/9] overflow-hidden bg-stone-100 dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800/80">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Top overlay kicker */}
                  <div className="absolute top-3 right-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-2.5 py-1 text-[11px] font-semibold text-white bg-stone-900/85 backdrop-blur-md border border-stone-700/80 rounded-md hover:bg-amber-600 hover:border-amber-500 transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <Eye className="w-3 h-3" />
                      <span>Inspect Details</span>
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-[11px] font-mono text-amber-700 dark:text-amber-400 font-semibold mb-1">
                    {project.subtitle}
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 tracking-tight group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 text-xs text-stone-600 dark:text-stone-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technology Stack Tags */}
                  <div className="mt-4 pt-4 border-t border-stone-100 dark:border-stone-800/80">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-2">
                      Stack & Tools:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-mono text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-800/70 px-2 py-0.5 rounded border border-stone-200/80 dark:border-stone-750"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Live Demo & GitHub Buttons */}
              <div className="p-6 pt-0 border-t border-stone-100 dark:border-stone-800/60 mt-4 flex items-center gap-3">
                <button
                  onClick={() => handleLiveDemoClick(project)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 rounded-lg transition-colors shadow-sm shadow-amber-900/20"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </button>

                <button
                  onClick={() => handleGithubClick(project)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-stone-800 hover:text-stone-950 dark:text-stone-200 dark:hover:text-white bg-stone-100 hover:bg-stone-200/80 dark:bg-stone-800/80 dark:hover:bg-stone-700/80 border border-stone-200 dark:border-stone-700/60 rounded-lg transition-colors shadow-sm"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Required Professional Note Banner */}
        <div className="mt-12 p-5 rounded-2xl bg-white/80 dark:bg-stone-900/50 border border-stone-200/90 dark:border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-start sm:items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-400 shrink-0 border border-amber-300/80 dark:border-amber-900/50">
              <Info className="w-4 h-4" />
            </div>
            <p className="text-sm text-stone-800 dark:text-stone-200 font-medium">
              Additional projects, source code samples, and detailed case studies are available upon request.
            </p>
          </div>
          <button
            onClick={() => onRequestCodeSample('Enterprise Repositories & Case Studies')}
            className="px-4 py-2 text-xs font-semibold text-stone-800 dark:text-stone-200 hover:text-stone-950 dark:hover:text-white bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-750 border border-stone-200 dark:border-stone-700 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            Request Private Repos
          </button>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestCodeSample={onRequestCodeSample}
      />
    </section>
  );
};
