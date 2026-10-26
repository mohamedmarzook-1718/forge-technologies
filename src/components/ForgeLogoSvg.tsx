import React from 'react';

export type LogoFacetKey = 'time' | 'forge' | 'arrow' | 'infinity' | null;

// The exact SVG path from /public/assets/aistudio/forge_emblem_clean_d3ebd5b8.svg
export const FORGE_EMBLEM_PATH =
  'M 529 149 L 526 150 L 518 158 L 511 161 L 499 170 L 495 175 L 487 179 L 474 191 L 473 190 L 457 204 L 454 205 L 459 206 L 462 203 L 469 203 L 481 200 L 491 195 L 495 197 L 436 262 L 400 298 L 394 301 L 291 203 L 285 200 L 280 207 L 272 211 L 249 231 L 242 240 L 257 248 L 262 253 L 267 255 L 280 265 L 281 264 L 294 274 L 336 297 L 344 303 L 342 305 L 330 301 L 325 297 L 313 293 L 284 279 L 274 277 L 260 279 L 254 282 L 243 282 L 225 285 L 221 287 L 205 289 L 199 292 L 194 291 L 174 295 L 167 298 L 159 298 L 80 314 L 73 318 L 59 321 L 43 327 L 31 328 L 18 333 L 40 333 L 44 331 L 76 330 L 90 328 L 106 329 L 110 327 L 123 326 L 140 327 L 144 325 L 155 324 L 172 325 L 181 322 L 201 322 L 223 319 L 253 318 L 260 316 L 360 309 L 362 311 L 360 313 L 292 323 L 280 323 L 274 326 L 241 329 L 223 332 L 221 334 L 204 335 L 184 340 L 172 340 L 159 344 L 155 343 L 152 345 L 395 345 L 415 338 L 433 320 L 435 315 L 443 306 L 461 277 L 480 242 L 483 240 L 488 232 L 492 222 L 495 220 L 505 201 L 509 197 L 514 203 L 521 218 L 527 224 L 529 230 Z M 25 325 L 28 326 L 35 321 L 39 321 L 44 317 L 60 311 L 64 308 L 74 304 L 79 304 L 92 296 L 94 297 L 128 281 L 132 277 L 138 276 L 144 271 L 154 269 L 164 264 L 163 263 L 171 258 L 175 258 L 187 252 L 193 247 L 197 247 L 226 232 L 228 229 L 234 228 L 248 218 L 251 218 L 253 215 L 263 211 L 271 204 L 289 193 L 307 176 L 309 176 L 315 169 L 317 169 L 335 152 L 337 152 L 350 139 L 354 138 L 361 130 L 369 126 L 426 79 L 428 79 L 439 68 L 443 67 L 453 57 L 457 56 L 472 42 L 476 41 L 484 33 L 71 33 L 208 166 L 214 170 L 220 168 L 234 152 L 237 152 L 260 129 L 261 130 L 275 116 L 276 112 L 266 110 L 264 107 L 259 105 L 248 103 L 243 99 L 180 74 L 171 72 L 167 69 L 155 66 L 153 64 L 155 62 L 175 65 L 396 64 L 398 62 L 403 62 L 405 64 L 401 68 L 388 74 L 354 94 L 342 103 L 339 103 L 292 131 L 285 137 L 274 142 L 241 164 L 240 163 L 235 168 L 230 171 L 229 170 L 220 176 L 174 213 L 172 213 L 136 240 L 131 246 L 123 250 L 89 275 L 79 285 L 76 285 Z';

interface ForgeLogoSvgProps {
  variant?: 'emblem' | 'horizontal' | 'full';
  className?: string;
  size?: number | string;
  activeFacet?: LogoFacetKey;
  onFacetHover?: (facet: LogoFacetKey) => void;
  interactive?: boolean;
}

export const ForgeLogoSvg: React.FC<ForgeLogoSvgProps> = ({
  variant = 'horizontal',
  className = '',
  size,
  activeFacet = null,
  onFacetHover,
  interactive = false,
}) => {
  if (variant === 'emblem') {
    return (
      <svg
        viewBox="0 0 555 370"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`inline-block select-none ${className}`}
        style={size ? { width: size, height: 'auto' } : undefined}
        aria-label="Forge Technologies Emblem"
        role="img"
      >
        <defs>
          {/* Blueprint Clipping Quadrants (Exact 4-Quadrant Division) */}
          <clipPath id="forge-clip-time">
            <rect x="0" y="0" width="277.5" height="185" />
          </clipPath>
          <clipPath id="forge-clip-forge">
            <rect x="277.5" y="0" width="277.5" height="185" />
          </clipPath>
          <clipPath id="forge-clip-infinity">
            <rect x="0" y="185" width="277.5" height="185" />
          </clipPath>
          <clipPath id="forge-clip-arrow">
            <rect x="277.5" y="185" width="277.5" height="185" />
          </clipPath>

          {/* Gradients for Facet Highlighting in Light Theme */}
          <linearGradient id="glow-time" x1="0" y1="0" x2="277" y2="185" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#0369A1" />
          </linearGradient>

          <linearGradient id="glow-forge" x1="277" y1="0" x2="555" y2="185" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>

          <linearGradient id="glow-infinity" x1="0" y1="185" x2="277" y2="370" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#9333EA" />
            <stop offset="100%" stopColor="#7E22CE" />
          </linearGradient>

          <linearGradient id="glow-arrow" x1="277" y1="185" x2="555" y2="370" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="70%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>

          {/* Blueprint Grid Pattern */}
          {interactive && (
            <pattern id="blueprint-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="var(--emblem-grid, rgba(15,23,42,0.06))" strokeWidth="1" />
            </pattern>
          )}
        </defs>

        {/* Blueprint Grid Backdrop (shown in interactive blueprint mode) */}
        {interactive && (
          <g className="pointer-events-none">
            <rect width="555" height="370" fill="url(#blueprint-grid)" />
            {/* Coordinate Axis Dividers */}
            <line x1="277.5" y1="15" x2="277.5" y2="355" stroke="rgba(2,132,199,0.3)" strokeDasharray="4 4" strokeWidth="1.2" />
            <line x1="20" y1="185" x2="535" y2="185" stroke="rgba(2,132,199,0.3)" strokeDasharray="4 4" strokeWidth="1.2" />
            {/* Center Registration Reticle */}
            <circle cx="277.5" cy="185" r="8" fill="none" stroke="rgba(2,132,199,0.6)" strokeWidth="1.2" />
            <circle cx="277.5" cy="185" r="2.5" fill="#0284C7" />
            {/* Corner Blueprint Ticks */}
            <path d="M 15 30 L 15 15 L 30 15" fill="none" stroke="var(--emblem-grid-strong, rgba(15,23,42,0.25))" strokeWidth="1.5" />
            <path d="M 540 30 L 540 15 L 525 15" fill="none" stroke="var(--emblem-grid-strong, rgba(15,23,42,0.25))" strokeWidth="1.5" />
            <path d="M 15 340 L 15 355 L 30 355" fill="none" stroke="var(--emblem-grid-strong, rgba(15,23,42,0.25))" strokeWidth="1.5" />
            <path d="M 540 340 L 540 355 L 525 355" fill="none" stroke="var(--emblem-grid-strong, rgba(15,23,42,0.25))" strokeWidth="1.5" />
          </g>
        )}

        {/* Base Pristine Emblem Silhouette */}
        <path
          d={FORGE_EMBLEM_PATH}
          fill={activeFacet ? 'var(--emblem-active-fill, rgba(15, 23, 42, 0.15))' : 'var(--emblem-fill, #0F172A)'}
          fillRule="evenodd"
          stroke="none"
          className="transition-colors duration-300"
        />

        {/* Quadrant Highlights (Illuminated when activeFacet is selected or hovered) */}
        {/* 1. Q1 Top-Left: TIME */}
        <g
          clipPath="url(#forge-clip-time)"
          className={`transition-opacity duration-300 ${activeFacet === 'time' ? 'opacity-100' : 'opacity-0'}`}
        >
          <path d={FORGE_EMBLEM_PATH} fill="url(#glow-time)" fillRule="evenodd" filter="drop-shadow(0 4px 12px rgba(2,132,199,0.4))" />
        </g>

        {/* 2. Q2 Top-Right: FORGE */}
        <g
          clipPath="url(#forge-clip-forge)"
          className={`transition-opacity duration-300 ${activeFacet === 'forge' ? 'opacity-100' : 'opacity-0'}`}
        >
          <path d={FORGE_EMBLEM_PATH} fill="url(#glow-forge)" fillRule="evenodd" filter="drop-shadow(0 4px 12px rgba(217,119,6,0.4))" />
        </g>

        {/* 3. Q3 Bottom-Left: 2 M & INFINITY */}
        <g
          clipPath="url(#forge-clip-infinity)"
          className={`transition-opacity duration-300 ${activeFacet === 'infinity' ? 'opacity-100' : 'opacity-0'}`}
        >
          <path d={FORGE_EMBLEM_PATH} fill="url(#glow-infinity)" fillRule="evenodd" filter="drop-shadow(0 4px 12px rgba(147,51,234,0.4))" />
        </g>

        {/* 4. Q4 Bottom-Right: UPWARD ARROW */}
        <g
          clipPath="url(#forge-clip-arrow)"
          className={`transition-opacity duration-300 ${activeFacet === 'arrow' ? 'opacity-100' : 'opacity-0'}`}
        >
          <path d={FORGE_EMBLEM_PATH} fill="url(#glow-arrow)" fillRule="evenodd" filter="drop-shadow(0 4px 12px rgba(2,132,199,0.4))" />
        </g>

        {/* Interactive Hitbox Overlays (for direct hover interaction on blueprint) */}
        {interactive && (
          <g>
            <rect
              x="0"
              y="0"
              width="277.5"
              height="185"
              fill="transparent"
              className="cursor-pointer"
              onMouseEnter={() => onFacetHover?.('time')}
              onMouseLeave={() => onFacetHover?.(null)}
            />
            <rect
              x="277.5"
              y="0"
              width="277.5"
              height="185"
              fill="transparent"
              className="cursor-pointer"
              onMouseEnter={() => onFacetHover?.('forge')}
              onMouseLeave={() => onFacetHover?.(null)}
            />
            <rect
              x="0"
              y="185"
              width="277.5"
              height="185"
              fill="transparent"
              className="cursor-pointer"
              onMouseEnter={() => onFacetHover?.('infinity')}
              onMouseLeave={() => onFacetHover?.(null)}
            />
            <rect
              x="277.5"
              y="185"
              width="277.5"
              height="185"
              fill="transparent"
              className="cursor-pointer"
              onMouseEnter={() => onFacetHover?.('arrow')}
              onMouseLeave={() => onFacetHover?.(null)}
            />
          </g>
        )}
      </svg>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <ForgeLogoSvg
          variant="emblem"
          size={typeof size === 'number' ? size : 130}
          activeFacet={activeFacet}
          onFacetHover={onFacetHover}
          interactive={interactive}
        />
        <div className="mt-4 space-y-1">
          <div className="font-heading font-black tracking-[0.2em] text-slate-900 text-2xl sm:text-3xl uppercase leading-none">
            FORGE
          </div>
          <div className="font-mono-code font-semibold tracking-[0.4em] text-slate-500 text-[10px] sm:text-xs uppercase pl-1">
            TECHNOLOGIES
          </div>
        </div>
      </div>
    );
  }

  // Default 'horizontal' layout: Clean uploaded SVG emblem + typographic lockup
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <img
        src="/assets/aistudio/forge_emblem_clean_d3ebd5b8.svg"
        alt="Forge Technologies Emblem"
        style={size ? { height: size, width: 'auto' } : undefined}
        className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
      />
      <div className="flex flex-col justify-center leading-none">
        <span className="font-heading font-black tracking-[0.16em] text-slate-900 text-base sm:text-lg uppercase">
          FORGE
        </span>
        <span className="font-mono-code font-semibold tracking-[0.32em] text-slate-500 text-[9px] sm:text-[10px] uppercase mt-0.5">
          TECHNOLOGIES
        </span>
      </div>
    </div>
  );
};
