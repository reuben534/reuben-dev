import React, { useState } from 'react';
import { X, Copy, Check } from 'lucide-react';
import { ReubenLogo } from './ReubenLogo.tsx';

interface BrandModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandModal: React.FC<BrandModalProps> = ({ isOpen, onClose }) => {
  const [copiedCode, setCopiedCode] = useState(false);

  if (!isOpen) return null;

  const svgCode = `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="rmk-warm" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="50%" stop-color="#d97706"/>
      <stop offset="100%" stop-color="#ea580c"/>
    </linearGradient>
  </defs>
  <rect x="6" y="6" width="88" height="88" rx="22" stroke="url(#rmk-warm)" stroke-width="3.5"/>
  <path d="M 22 30 V 70" stroke="url(#rmk-warm)" stroke-width="6" stroke-linecap="round"/>
  <path d="M 22 32 H 36 C 44 32 44 48 36 48 H 22" stroke="url(#rmk-warm)" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M 32 48 L 42 70" stroke="url(#rmk-warm)" stroke-width="5.5" stroke-linecap="round"/>
  <path d="M 43 70 L 51 32 L 59 52 L 67 32 L 72 70" stroke="url(#rmk-warm)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M 68 38 L 82 51 L 68 64" stroke="url(#rmk-warm)" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

  const handleCopySvg = () => {
    navigator.clipboard.writeText(svgCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl my-8 bg-white dark:bg-[#141210] border border-stone-200 dark:border-stone-700/80 rounded-2xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 dark:border-stone-800 bg-stone-50/80 dark:bg-stone-900/60">
          <div className="flex items-center gap-3">
            <ReubenLogo className="w-8 h-8 text-amber-600 dark:text-amber-400" />
            <div>
              <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">
                RMK Solutions — Brand Identity & Logo
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 font-mono">
                Founded by Reuben · Software Solutions
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-white rounded-lg hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors"
            aria-label="Close brand showcase modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto text-xs sm:text-sm">
          {/* Logo Showcase Image */}
          <div className="relative rounded-xl overflow-hidden border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-950 aspect-square max-w-sm mx-auto shadow-md">
            <img
              src="/src/assets/images/rmk_solutions_logo_1792317141613.jpg"
              alt="RMK Solutions Logo Mockup"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Design Concept Breakdown */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              Logo Concept & Symbolism
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-900/60 border border-stone-200/80 dark:border-stone-800/80 space-y-1">
                <span className="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  The "RMK" Monogram
                </span>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  Interlocking letterforms of <strong>R · M · K</strong> precision-crafted into an architectural software insignia.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-900/60 border border-stone-200/80 dark:border-stone-800/80 space-y-1">
                <span className="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-500" />
                  Forward Solution Chevron
                </span>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  The integrated chevron symbolizes <em>taking projects from concept to cloud deployment</em> and business growth.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-900/60 border border-stone-200/80 dark:border-stone-800/80 space-y-1">
                <span className="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-600" />
                  Warm Metallic Palette
                </span>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  Sunlit amber, gold, and warm stone convey high credibility, executive warmth, and technical craftsmanship.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-900/60 border border-stone-200/80 dark:border-stone-800/80 space-y-1">
                <span className="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  Scalable Responsive Geometry
                </span>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  Engineered to remain crisp as a browser favicon, mobile app icon, or corporate letterhead print.
                </p>
              </div>
            </div>
          </div>

          {/* Color Tokens */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
              Brand Color Palette
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
              <div className="p-2.5 rounded-lg bg-[#f59e0b] text-stone-950 font-mono font-bold">
                #F59E0B
                <span className="block text-[10px] font-sans font-normal">Sunlit Amber</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#ea580c] text-white font-mono font-bold">
                #EA580C
                <span className="block text-[10px] font-sans font-normal">Warm Terracotta</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#faf7f2] border border-stone-300 text-stone-900 font-mono font-bold">
                #FAF7F2
                <span className="block text-[10px] font-sans font-normal">Linen Paper</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0c0a09] text-white font-mono font-bold">
                #0C0A09
                <span className="block text-[10px] font-sans font-normal">Obsidian Stone</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-stone-200 dark:border-stone-800 bg-stone-50/80 dark:bg-stone-900/80 flex items-center justify-between gap-3">
          <button
            onClick={handleCopySvg}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-stone-800 hover:text-stone-950 dark:text-stone-200 dark:hover:text-white bg-stone-200/80 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-750 rounded-lg transition-colors"
          >
            {copiedCode ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-amber-400" />
                <span>Vector SVG Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Logo SVG</span>
              </>
            )}
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 rounded-lg transition-colors shadow-sm"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
