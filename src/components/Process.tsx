import React, { useState } from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData.ts';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const currentStepData = PROCESS_STEPS.find((s) => s.stepNumber === activeStep) || PROCESS_STEPS[0];

  return (
    <section id="process" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 font-semibold mb-2">
            Methodology & Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
            My Development Process
          </h2>
          <p className="mt-3 text-base text-stone-600 dark:text-stone-300">
            A structured, 6-stage lifecycle that minimizes risk, prevents scope creep, and ensures your application launches on schedule.
          </p>
        </div>

        {/* Step Navigation Bar / Progress Tracker */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {PROCESS_STEPS.map((step) => {
            const isSelected = step.stepNumber === activeStep;
            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStep(step.stepNumber)}
                className={`p-3.5 sm:p-4 rounded-xl text-left transition-all border shadow-sm ${
                  isSelected
                    ? 'bg-amber-100/80 dark:bg-amber-500/15 border-amber-500/80 shadow-md shadow-amber-900/10 dark:shadow-amber-950/30'
                    : 'bg-white/80 dark:bg-stone-900/60 border-stone-200/80 dark:border-stone-800 hover:border-amber-400 dark:hover:border-stone-700 hover:bg-white dark:hover:bg-stone-900'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-mono font-bold ${
                      isSelected ? 'text-amber-800 dark:text-amber-400' : 'text-stone-500 dark:text-stone-400'
                    }`}
                  >
                    0{step.stepNumber}
                  </span>
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-amber-400" />}
                </div>
                <div
                  className={`text-xs font-bold truncate ${
                    isSelected ? 'text-stone-950 dark:text-stone-100' : 'text-stone-700 dark:text-stone-300'
                  }`}
                >
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep-Dive Card */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-white/95 dark:bg-stone-900/70 border border-stone-200/90 dark:border-stone-800/90 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/80 px-2.5 py-1 rounded-md border border-amber-300 dark:border-amber-800/40 font-semibold">
                  Step 0{currentStepData.stepNumber} of 06
                </span>
                <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">
                  {currentStepData.tagline}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
                {currentStepData.title}
              </h3>

              <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                {currentStepData.description}
              </p>

              {/* Client Expectations box */}
              <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-950/80 border border-stone-200/80 dark:border-stone-800/80">
                <span className="text-xs font-semibold text-amber-800 dark:text-amber-300 block mb-1">
                  What I Need From You in this Step:
                </span>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  {currentStepData.clientRole}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-stone-50/80 dark:bg-stone-950/60 p-5 rounded-xl border border-stone-200/80 dark:border-stone-800/80 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 block">
                Stage Deliverables & Outputs
              </span>
              <ul className="space-y-2.5">
                {currentStepData.deliverables.map((del, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-800 dark:text-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-stone-200/80 dark:border-stone-800/80 flex items-center justify-between text-xs">
                <span className="text-stone-500 dark:text-stone-400">Next Stage:</span>
                <button
                  onClick={() =>
                    setActiveStep(
                      activeStep === PROCESS_STEPS.length ? 1 : activeStep + 1
                    )
                  }
                  className="text-amber-700 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 font-semibold inline-flex items-center gap-1"
                >
                  <span>
                    {activeStep === PROCESS_STEPS.length
                      ? 'Back to Step 1'
                      : `Advance to Step 0${activeStep + 1}`}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
