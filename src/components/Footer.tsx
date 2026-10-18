import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { ReubenLogo } from './ReubenLogo.tsx';

interface FooterProps {
  onOpenBrandModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBrandModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-100/80 dark:bg-[#080706] border-t border-stone-200/90 dark:border-stone-800/80 text-stone-600 dark:text-stone-400 text-xs transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand & Identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5 text-stone-900 dark:text-stone-100 font-bold text-base">
              <ReubenLogo className="w-7 h-7 text-amber-600 dark:text-amber-400" />
              <div className="flex flex-col">
                <span className="leading-tight font-extrabold">{PERSONAL_INFO.brandName}</span>
                <span className="text-[10px] font-mono text-stone-500 font-normal">
                  Founded by {PERSONAL_INFO.name}
                </span>
              </div>
            </div>
            <p className="text-stone-600 dark:text-stone-400 max-w-sm text-xs leading-relaxed">
              {PERSONAL_INFO.title}. Building modern web applications, scalable enterprise backends, and digital business solutions that drive results.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-[11px] text-stone-500 dark:text-stone-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>{PERSONAL_INFO.location}</span>
                <span aria-hidden="true">·</span>
                <span>GMT+2 Timezone</span>
              </div>
              {onOpenBrandModal && (
                <button
                  onClick={onOpenBrandModal}
                  className="text-amber-700 dark:text-amber-400 hover:underline font-semibold flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Logo Guidelines & Mockup</span>
                </button>
              )}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-900 dark:text-stone-200 block mb-2">
              Sections
            </span>
            <ul className="space-y-1.5">
              <li>
                <a href="#about" className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#why-me" className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors">
                  Why Work With Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors">
                  Skills & Tech
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors">
                  Development Process
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors">
                  Education & Qualifications
                </a>
              </li>
            </ul>
          </div>

          {/* Inquiries & Connect */}
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-900 dark:text-stone-200 block mb-2">
              Connect
            </span>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors flex items-center gap-2"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  <span>LinkedIn Network</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-200 dark:border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500 dark:text-stone-400">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved. Built with precision and care.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-stone-500 dark:text-stone-400">Diploma & Advanced Diploma in Applications Development</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-amber-500 hover:text-amber-700 dark:hover:text-amber-400 transition-colors shadow-sm"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
