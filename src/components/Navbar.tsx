import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon, Sparkles, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { useTheme } from '../context/ThemeContext.tsx';
import { ReubenLogo } from './ReubenLogo.tsx';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenBrandModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenBrandModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme, showEffects, toggleEffects } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Me', href: '#why-me' },
    { label: 'Skills', href: '#skills' },
    { label: 'Process', href: '#process' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#faf7f2]/90 dark:bg-[#0c0a09]/90 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800/80 py-3 shadow-sm dark:shadow-lg dark:shadow-black/30'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 sm:gap-8">
          {/* Zone 1: Brand wordmark with custom R+S Solution Logo */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-stone-900 dark:text-stone-100 hover:text-amber-700 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 group"
            >
              <ReubenLogo className="w-8 h-8 text-amber-600 dark:text-amber-400 transition-transform group-hover:scale-105" />
              <div className="flex flex-col">
                <span className="leading-tight font-extrabold">{PERSONAL_INFO.brandName}</span>
                <span className="text-[10px] font-mono font-medium text-stone-500 dark:text-stone-400 -mt-0.5">
                  by {PERSONAL_INFO.name}
                </span>
              </div>
            </a>

            {onOpenBrandModal && (
              <button
                onClick={onOpenBrandModal}
                className="hidden xl:inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold text-amber-800 dark:text-amber-300 bg-amber-100/70 dark:bg-amber-950/60 border border-amber-300/80 dark:border-amber-800/60 rounded hover:bg-amber-200/70 transition-colors"
                title="View Brand Logo Concept & Guidelines"
              >
                <span>Logo Info</span>
              </button>
            )}
          </div>

          {/* Zone 2: Clean nav links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-700 dark:text-stone-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-600 dark:after:bg-amber-500 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Controls (Theme Toggle + Effect Toggle + Primary Action) */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            {/* Ambient Background Effect Toggle */}
            <button
              onClick={toggleEffects}
              className={`p-2 rounded-lg border transition-colors ${
                showEffects
                  ? 'bg-amber-100/80 border-amber-300 text-amber-800 dark:bg-amber-950/60 dark:border-amber-800/60 dark:text-amber-300'
                  : 'bg-stone-100 border-stone-200 text-stone-400 dark:bg-stone-900 dark:border-stone-800 dark:text-stone-500 hover:text-stone-700 dark:hover:text-stone-300'
              }`}
              title={showEffects ? 'Effects: Enabled (Click to toggle)' : 'Effects: Disabled (Click to enable)'}
              aria-label="Toggle ambient background visual effects"
            >
              <Sparkles className="w-4 h-4" />
            </button>

            {/* Light / Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-stone-100 hover:bg-stone-200/80 border border-stone-200 text-stone-700 dark:bg-stone-900 dark:hover:bg-stone-800 dark:border-stone-800 dark:text-stone-300 transition-colors"
              title={isDark ? 'Switch to Warm Light Mode' : 'Switch to Warm Dark Mode'}
              aria-label="Toggle light and dark mode"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-amber-700" />}
            </button>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 rounded-lg transition-all whitespace-nowrap shrink-0 shadow-md shadow-amber-900/20 active:translate-y-0.5"
            >
              <span>Let's Build Together</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-stone-100 dark:bg-stone-900 text-stone-700 dark:text-stone-300"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-amber-700" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#ffffff] dark:bg-[#141210] border-b border-stone-200 dark:border-stone-800 px-4 pt-3 pb-6 mt-3 space-y-3 shadow-2xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-400 hover:bg-stone-100 dark:hover:bg-stone-900/60 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex items-center justify-between border-t border-stone-200 dark:border-stone-800">
            <span className="text-xs text-stone-500">Visual Effects</span>
            <button
              onClick={toggleEffects}
              className="text-xs font-semibold px-2.5 py-1 rounded bg-stone-100 dark:bg-stone-800 text-amber-700 dark:text-amber-400"
            >
              {showEffects ? 'Effects: ON' : 'Effects: OFF'}
            </button>
          </div>

          <div className="pt-1">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 rounded-lg transition-colors shadow-md shadow-amber-900/20"
            >
              <span>Let's Build Together</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
