import React from 'react';

interface ReubenLogoProps {
  className?: string;
  size?: number;
}

export const ReubenLogo: React.FC<ReubenLogoProps> = ({ className = 'w-8 h-8', size = 32 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="RMK Solutions Logo"
    >
      <defs>
        <linearGradient id="rmk-warm-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="50%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <filter id="rmk-subtle-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#ea580c" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Outer rounded geometric container / frame */}
      <rect
        x="6"
        y="6"
        width="88"
        height="88"
        rx="22"
        fill="currentColor"
        fillOpacity="0.08"
        stroke="url(#rmk-warm-grad)"
        strokeWidth="3.5"
      />

      {/* Geometric Interlocking RMK Monogram with Solution Chevron Arrow */}
      <g filter="url(#rmk-subtle-glow)">
        {/* Letter 'R' */}
        <path
          d="M 22 30 V 70"
          stroke="url(#rmk-warm-grad)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M 22 32 H 36 C 44 32 44 48 36 48 H 22"
          stroke="url(#rmk-warm-grad)"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 32 48 L 42 70"
          stroke="url(#rmk-warm-grad)"
          strokeWidth="5.5"
          strokeLinecap="round"
        />

        {/* Central 'M' peak */}
        <path
          d="M 43 70 L 51 32 L 59 52 L 67 32 L 72 70"
          stroke="url(#rmk-warm-grad)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Forward Solution Chevron Arrow (K & Vector) */}
        <path
          d="M 68 38 L 82 51 L 68 64"
          stroke="url(#rmk-warm-grad)"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
