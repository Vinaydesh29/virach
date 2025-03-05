import React from "react";

const Moving = () => {
  return (
    <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Complex gradients */}
        <linearGradient id="cyber-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#000B2E", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#002456", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#001B3D", stopOpacity: 1 }}
          />
        </linearGradient>

        {/* Tech wave pattern */}
        <pattern
          id="wave-grid"
          x="0"
          y="0"
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 0 40 Q 20 35, 40 40 Q 60 45, 80 40"
            fill="none"
            stroke="#00ffff10"
            strokeWidth="0.5"
          />
          <path
            d="M 0 0 L 0 80 M 80 0 L 80 80"
            stroke="#00ffff08"
            strokeWidth="0.5"
          />
        </pattern>

        {/* Glow effects */}
        <filter id="neon-glow">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="0 0 0 0 0   0 0.5 0 0 0   1 0 1 0 0  0 0 0 5 -1"
            result="glow"
          />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Base background */}
      <rect width="800" height="400" fill="url(#cyber-gradient)" />
      <rect width="800" height="400" fill="url(#wave-grid)" />

      {/* 3D Platform Base */}
      <path
        d="M 100,300 L 700,300 L 600,350 L 200,350 Z"
        fill="#001B3D"
        stroke="#00ffff20"
        strokeWidth="1"
      />

      {/* Central Holographic Display */}
      <g transform="translate(400, 200)" filter="url(#neon-glow)">
        {/* Rotating hexagon frame */}
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0"
            to="360"
            dur="20s"
            repeatCount="indefinite"
          />
          <path
            d="M 0,-80 L 69.28,-40 L 69.28,40 L 0,80 L -69.28,40 L -69.28,-40 Z"
            fill="none"
            stroke="#00ffff"
            strokeWidth="0.5"
            strokeDasharray="5,5"
          />
        </g>

        {/* Digital core */}
        <g>
          <path
            d="M -40,-40 L 40,-40 L 40,40 L -40,40 Z"
            fill="#00ffff20"
            stroke="#00ffff"
            strokeWidth="2"
          >
            <animate
              attributeName="opacity"
              values="0.2;0.5;0.2"
              dur="3s"
              repeatCount="indefinite"
            />
          </path>
          {/* Circuit lines */}
          <path
            d="M -30,0 L 30,0 M 0,-30 L 0,30"
            stroke="#00ffff40"
            strokeWidth="1"
          />
          <circle cx="0" cy="0" r="5" fill="#00ffff" />
        </g>
      </g>

      {/* Company Branding */}
      <g transform="translate(400, 100)" filter="url(#neon-glow)">
        <text
          textAnchor="middle"
          fill="#ffffff"
          style={{ fontSize: "48px", fontWeight: "400" }}
        >
          VIRACH
        </text>
        <text
          y="40"
          textAnchor="middle"
          fill="#00ffff80"
          style={{ fontSize: "20px" }}
        >
          Innovative Software Solutions
        </text>
      </g>
    </svg>
  );
};

export default Moving;
