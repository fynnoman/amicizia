// Hand-drawn-feeling SVG ornaments. All scale via width/height props
// and inherit `currentColor` so they tint with the surrounding text color.

import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number | string };

const base = (size: number | string | undefined) => ({
  width: size ?? 28,
  height: size ?? 28,
  viewBox: "0 0 64 64",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

/* Olive branch — three olives & a few leaves */
export function OliveBranch({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M8 50c10-6 18-10 28-14 8-3 14-4 20-4" />
      <ellipse cx="40" cy="34" rx="3.3" ry="4.5" fill="currentColor" opacity="0.85" />
      <ellipse cx="50" cy="30" rx="3" ry="4" fill="currentColor" opacity="0.85" />
      <ellipse cx="56" cy="32.5" rx="2.6" ry="3.6" fill="currentColor" opacity="0.85" />
      <path d="M20 41c-5-4-3-10 2-11 1 5-1 9-2 11Z" fill="currentColor" opacity="0.18" />
      <path d="M30 38c-5-3-4-9 1-11 1 5-0 9-1 11Z" fill="currentColor" opacity="0.18" />
      <path d="M44 28c-5-3-4-9 1-11 1 5-0 9-1 11Z" fill="currentColor" opacity="0.18" />
      <path d="M52 22c-5-3-4-9 1-11 1 5-0 9-1 11Z" fill="currentColor" opacity="0.18" />
    </svg>
  );
}

/* Tomato with leafy crown */
export function Tomato({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path
        d="M32 18c10 0 18 8 18 18s-8 20-18 20S14 46 14 36 22 18 32 18Z"
        fill="currentColor"
        opacity="0.12"
      />
      <path d="M32 18c10 0 18 8 18 18s-8 20-18 20S14 46 14 36 22 18 32 18Z" />
      <path d="M22 18c2-3 5-4 10-4s8 1 10 4" />
      <path d="M32 14v6" />
      <path d="M27 18l-3-3M37 18l3-3" />
    </svg>
  );
}

/* Pasta swirl (spaghetti fork) */
export function PastaSwirl({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M14 38c0-10 8-18 18-18s18 8 18 18" />
      <path d="M18 38c0-8 6-14 14-14s14 6 14 14" opacity="0.55" />
      <path d="M22 38c0-6 4-10 10-10s10 4 10 10" opacity="0.4" />
      <path d="M28 40c0-3 2-6 4-6s4 3 4 6" opacity="0.4" />
      <path d="M14 38h36" />
      <path d="M22 38l-2 14M32 38v14M42 38l2 14" opacity="0.55" />
    </svg>
  );
}

/* Wheat ear */
export function Wheat({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M32 58V14" />
      <g>
        <path d="M32 18c-4-3-4-9 0-12 4 3 4 9 0 12Z" fill="currentColor" opacity="0.6" />
        <path d="M32 26c-5-3-7-9-3-13 4 1 6 8 3 13Z" fill="currentColor" opacity="0.55" />
        <path d="M32 26c5-3 7-9 3-13-4 1-6 8-3 13Z" fill="currentColor" opacity="0.55" />
        <path d="M32 34c-6-3-9-9-4-14 5 1 7 8 4 14Z" fill="currentColor" opacity="0.55" />
        <path d="M32 34c6-3 9-9 4-14-5 1-7 8-4 14Z" fill="currentColor" opacity="0.55" />
        <path d="M32 42c-7-3-10-10-4-15 5 2 8 9 4 15Z" fill="currentColor" opacity="0.55" />
        <path d="M32 42c7-3 10-10 4-15-5 2-8 9-4 15Z" fill="currentColor" opacity="0.55" />
      </g>
    </svg>
  );
}

/* Fork + knife crossed */
export function ForkKnife({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M16 8v18c0 2 1 4 4 4l1 26" />
      <path d="M16 8v12c0 2-3 2-3 0V8" />
      <path d="M20 8v12c0 2-3 2-3 0V8" />
      <path d="M48 8c-6 4-8 10-6 18 1 4 4 6 4 8l1 22" />
    </svg>
  );
}

/* Five-petal fleuron / dingbat */
export function Fleuron({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <g transform="translate(32 32)">
        {[0, 72, 144, 216, 288].map((r) => (
          <path
            key={r}
            transform={`rotate(${r})`}
            d="M0 0 C 4 -10 12 -14 18 -10 C 12 -6 10 -2 0 0 Z"
            fill="currentColor"
            opacity="0.85"
          />
        ))}
        <circle r="3" fill="currentColor" />
      </g>
    </svg>
  );
}

/* Simple five-point Italian decorative star */
export function Star({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path
        d="M32 8l6 16 17 1-13 11 4 17-14-9-14 9 4-17-13-11 17-1z"
        fill="currentColor"
      />
    </svg>
  );
}

/* Pizza slice */
export function PizzaSlice({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M10 54L32 8l22 46-44 0z" fill="currentColor" opacity="0.14" />
      <path d="M10 54L32 8l22 46-44 0z" />
      <path d="M10 54h44" />
      <circle cx="26" cy="32" r="2.5" fill="currentColor" opacity="0.85" />
      <circle cx="36" cy="36" r="2" fill="currentColor" opacity="0.85" />
      <circle cx="22" cy="44" r="2" fill="currentColor" opacity="0.85" />
      <circle cx="40" cy="46" r="2.5" fill="currentColor" opacity="0.85" />
    </svg>
  );
}

/* Tiny chef's hat */
export function ChefHat({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M16 30c-6-2-8-10-2-14 1-8 14-10 18-4 4-6 17-4 18 4 6 4 4 12-2 14v8H16v-8Z" />
      <path d="M16 42h32v6c0 2-2 4-4 4H20c-2 0-4-2-4-4v-6Z" fill="currentColor" opacity="0.18" />
    </svg>
  );
}

/* Sun (for "den ganzen Tag" / always open) */
export function Sun({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <circle cx="32" cy="32" r="10" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((r) => (
        <line
          key={r}
          x1="32"
          y1="14"
          x2="32"
          y2="6"
          transform={`rotate(${r} 32 32)`}
        />
      ))}
    </svg>
  );
}

/* Section ornament — tiny diamond row */
export function DiamondRow({ size, ...p }: IconProps) {
  return (
    <svg
      width={size ?? 80}
      height={size ?? 12}
      viewBox="0 0 80 12"
      fill="currentColor"
      aria-hidden
      {...p}
    >
      <path d="M40 0l4 6-4 6-4-6 4-6Z" />
      <path d="M22 4l3 2-3 2-3-2 3-2Z" opacity="0.7" />
      <path d="M58 4l3 2-3 2-3-2 3-2Z" opacity="0.7" />
      <path d="M8 5l2 1-2 1-2-1 2-1Z" opacity="0.4" />
      <path d="M72 5l2 1-2 1-2-1 2-1Z" opacity="0.4" />
    </svg>
  );
}

/* A circular "stamp" graphic with text along the perimeter — used as a vintage stamp */
export function CircleStamp({
  text = "AMICIZIA · DAL 2013 · TRATTORIA",
  size = 120,
  ...p
}: IconProps & { text?: string; size?: number }) {
  const id = React.useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      aria-hidden
      {...p}
    >
      <defs>
        <path id={id} d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
      </defs>
      <circle cx="60" cy="60" r="52" strokeWidth="1.5" />
      <circle cx="60" cy="60" r="46" strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />
      <circle cx="60" cy="60" r="30" strokeWidth="1" />
      <text
        fontFamily="var(--font-fraunces), Georgia, serif"
        fontSize="9"
        letterSpacing="3"
        fill="currentColor"
        stroke="none"
      >
        <textPath href={`#${id}`} startOffset="0">
          {text}
        </textPath>
      </text>
      <text
        x="60"
        y="56"
        textAnchor="middle"
        fontFamily="var(--font-fraunces), Georgia, serif"
        fontStyle="italic"
        fontWeight="600"
        fontSize="16"
        fill="currentColor"
        stroke="none"
      >
        con
      </text>
      <text
        x="60"
        y="72"
        textAnchor="middle"
        fontFamily="var(--font-fraunces), Georgia, serif"
        fontStyle="italic"
        fontWeight="600"
        fontSize="16"
        fill="currentColor"
        stroke="none"
      >
        amore
      </text>
    </svg>
  );
}

/* Section divider with central fleuron — use full-width */
export function Divider({
  className,
  label,
}: {
  className?: string;
  label?: React.ReactNode;
}) {
  return (
    <div className={`rule-fancy ${className ?? ""}`}>
      {label ? (
        <span className="flex items-center gap-3">
          <Fleuron size={20} />
          <span className="section-num">{label}</span>
          <Fleuron size={20} />
        </span>
      ) : (
        <Fleuron size={20} />
      )}
    </div>
  );
}
