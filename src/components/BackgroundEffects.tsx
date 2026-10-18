import React from 'react';
import { useTheme } from '../context/ThemeContext.tsx';

export const BackgroundEffects: React.FC = () => {
  const { isDark, showEffects } = useTheme();

  if (!showEffects) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
      {/* Subtle modern architectural grid effect */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isDark
            ? 'bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] opacity-60'
            : 'bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:40px_40px] opacity-70'
        }`}
      />

      {/* Primary Top-Center Ambient Warm Glow Orb */}
      <div
        className={`absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[550px] rounded-full blur-[140px] transition-all duration-700 ${
          isDark
            ? 'bg-amber-600/15'
            : 'bg-gradient-to-br from-amber-400/20 via-orange-300/15 to-yellow-200/20'
        }`}
      />

      {/* Secondary Mid-Right Floating Ambient Glow */}
      <div
        className={`absolute top-[40%] -right-40 w-[600px] h-[600px] rounded-full blur-[160px] transition-all duration-700 ${
          isDark
            ? 'bg-orange-700/10'
            : 'bg-gradient-to-tr from-orange-300/15 via-amber-200/15 to-transparent'
        }`}
      />

      {/* Tertiary Bottom-Left Subtle Warm Glow */}
      <div
        className={`absolute top-[75%] -left-40 w-[550px] h-[550px] rounded-full blur-[150px] transition-all duration-700 ${
          isDark
            ? 'bg-amber-900/15'
            : 'bg-gradient-to-br from-yellow-300/15 via-orange-200/15 to-transparent'
        }`}
      />

      {/* Subtle top edge warmth sheen */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 transition-colors duration-500 ${
          isDark
            ? 'bg-gradient-to-r from-transparent via-amber-500/30 to-transparent'
            : 'bg-gradient-to-r from-transparent via-amber-600/30 to-transparent'
        }`}
      />
    </div>
  );
};
