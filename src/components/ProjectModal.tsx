import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../types.ts';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestCodeSample: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onRequestCodeSample,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8 bg-white dark:bg-[#141210] border border-stone-200 dark:border-stone-700/80 rounded-2xl overflow-hidden shadow-2xl">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 dark:border-stone-800 bg-stone-50/80 dark:bg-stone-900/60">
          <div>
            <span className="text-xs font-mono text-amber-700 dark:text-amber-400 font-semibold">
              Architecture & Technical Case Study
            </span>
            <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-white rounded-lg hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Visual Showcase */}
          <div className="relative rounded-xl overflow-hidden border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-950 aspect-[16/9]">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
              <span className="font-semibold">{project.subtitle}</span>
              <span className="font-mono text-amber-300">Production Build</span>
            </div>
          </div>

          {/* Detailed Summary */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
              System Overview & Objective
            </h4>
            <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Architecture Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
              Key Engineering Decisions
            </h4>
            <div className="space-y-2">
              {project.architecture.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-stone-50 dark:bg-stone-900/70 border border-stone-200/80 dark:border-stone-800/80 text-xs text-stone-700 dark:text-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Performance & Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800/80 text-center">
                <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-300 block">
                  {metric}
                </span>
                <span className="text-[10px] text-stone-500 dark:text-stone-400">Target Benchmark</span>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-850/80 rounded-md border border-stone-200 dark:border-stone-700/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-stone-200 dark:border-stone-800 bg-stone-50/80 dark:bg-stone-900/80 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-stone-600 dark:text-stone-400">
            Source code and database schema walkthrough available upon request.
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onRequestCodeSample(project.title);
                onClose();
              }}
              className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 rounded-lg transition-colors shadow-sm"
            >
              Request Code Walkthrough
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-stone-700 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white rounded-lg bg-stone-200/70 hover:bg-stone-200 dark:bg-stone-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
