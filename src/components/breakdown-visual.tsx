import type { VisualKind } from "@/lib/breakdowns/types";

/**
 * Generative diagram thumbnails. Each breakdown gets an analytical SVG
 * sketch instead of a stock photo — line charts, networks, grids —
 * drawn in ink with sparse accent annotations.
 */
export function BreakdownVisual({
  kind,
  className = "",
}: {
  kind: VisualKind;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`graph-paper relative overflow-hidden bg-wash ${className}`}
    >
      <svg
        viewBox="0 0 400 240"
        className="h-full w-full"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {DIAGRAMS[kind]}
      </svg>
    </div>
  );
}

const ink = "#1c1913";
const soft = "#a29a89";
const accent = "#d9481f";

const DIAGRAMS: Record<VisualKind, React.ReactNode> = {
  /* Hockey-stick view count curve with an annotated inflection point */
  spike: (
    <>
      <path d="M30 200 L110 192 L170 180 L215 150 L255 96 L300 52 L360 26" stroke={ink} strokeWidth="2" />
      <path d="M30 206 L360 206" stroke={soft} strokeWidth="1" />
      {[70, 130, 190, 250, 310].map((x) => (
        <line key={x} x1={x} y1={203} x2={x} y2={209} stroke={soft} strokeWidth="1" />
      ))}
      <circle cx="215" cy="150" r="5" stroke={accent} strokeWidth="2" fill="#faf7f1" />
      <path d="M215 145 L215 70" stroke={accent} strokeWidth="1" strokeDasharray="4 4" />
      <rect x="223" y="58" width="118" height="24" stroke={accent} strokeWidth="1" fill="#faf7f1" />
      <text x="233" y="74" fill={accent} fontFamily="var(--font-mono)" fontSize="11" letterSpacing="1.5">FORMAT CHANGE</text>
      <text x="30" y="34" fill={soft} fontFamily="var(--font-mono)" fontSize="10" letterSpacing="1.5">VIEWS / UPLOAD</text>
    </>
  ),

  /* Attention → distribution network */
  network: (
    <>
      <circle cx="120" cy="120" r="34" stroke={ink} strokeWidth="2" fill="#faf7f1" />
      {[
        [290, 46], [316, 120], [290, 196], [220, 60], [224, 182],
      ].map(([x, y], i) => (
        <g key={i}>
          <line x1="152" y1="120" x2={x - 12} y2={y} stroke={soft} strokeWidth="1" />
          <circle cx={x} cy={y} r={i === 1 ? 14 : 10} stroke={i === 1 ? accent : ink} strokeWidth={i === 1 ? 2 : 1.5} fill="#faf7f1" />
        </g>
      ))}
      <text x="96" y="125" fill={ink} fontFamily="var(--font-mono)" fontSize="11" letterSpacing="1">SIGNAL</text>
      <text x="288" y="152" fill={accent} fontFamily="var(--font-mono)" fontSize="10" letterSpacing="1">×12</text>
      <path d="M120 168 C 120 196, 150 210, 190 210" stroke={accent} strokeWidth="1" strokeDasharray="3 4" />
      <text x="198" y="214" fill={accent} fontFamily="var(--font-mono)" fontSize="10" letterSpacing="1.5">CARRIED, NOT PUSHED</text>
    </>
  ),

  /* Thumbnail grid with one frame circled */
  grid: (
    <>
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={36 + col * 86}
            y={30 + row * 62}
            width={70}
            height={46}
            stroke={row === 1 && col === 2 ? accent : ink}
            strokeWidth={row === 1 && col === 2 ? 2 : 1.2}
            fill="#faf7f1"
          />
        ))
      )}
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <line
            key={`f-${row}-${col}`}
            x1={44 + col * 86}
            y1={62 + row * 62}
            x2={90 + col * 86}
            y2={62 + row * 62}
            stroke={soft}
            strokeWidth="4"
            strokeLinecap="round"
          />
        ))
      )}
      <ellipse cx="243" cy="115" rx="48" ry="34" stroke={accent} strokeWidth="1.5" strokeDasharray="5 4" fill="none" />
      <path d="M286 138 L318 168" stroke={accent} strokeWidth="1" />
      <text x="252" y="184" fill={accent} fontFamily="var(--font-mono)" fontSize="10" letterSpacing="1.5">THE OUTLIER</text>
    </>
  ),

  /* Concentric launch ripples */
  ripple: (
    <>
      {[24, 52, 84, 120, 158].map((r, i) => (
        <circle
          key={r}
          cx="200"
          cy="120"
          r={r}
          stroke={i === 2 ? accent : ink}
          strokeWidth={i === 2 ? 1.8 : 1.2}
          strokeDasharray={i > 2 ? "3 6" : undefined}
          opacity={1 - i * 0.14}
        />
      ))}
      <circle cx="200" cy="120" r="6" fill={accent} />
      <path d="M206 114 L292 44" stroke={accent} strokeWidth="1" strokeDasharray="4 4" />
      <text x="296" y="40" fill={accent} fontFamily="var(--font-mono)" fontSize="10" letterSpacing="1.5">WAVE 3</text>
      <text x="36" y="212" fill={soft} fontFamily="var(--font-mono)" fontSize="10" letterSpacing="1.5">EACH RING = NEW AUDIENCE</text>
    </>
  ),

  /* Orbit: community around an idea, price line decaying below */
  orbit: (
    <>
      <ellipse cx="200" cy="104" rx="140" ry="52" stroke={ink} strokeWidth="1.4" />
      <ellipse cx="200" cy="104" rx="86" ry="30" stroke={soft} strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="200" cy="104" r="14" stroke={accent} strokeWidth="2" fill="#faf7f1" />
      <circle cx="76" cy="130" r="6" fill={ink} />
      <circle cx="318" cy="82" r="6" fill={ink} />
      <circle cx="256" cy="132" r="4" fill={soft} />
      <text x="222" y="108" fill={accent} fontFamily="var(--font-mono)" fontSize="10" letterSpacing="1.5">IDENTITY</text>
      <path d="M36 180 L120 190 L190 202 L280 208 L364 210" stroke={soft} strokeWidth="1.4" strokeDasharray="2 4" />
      <text x="36" y="226" fill={soft} fontFamily="var(--font-mono)" fontSize="10" letterSpacing="1.5">PRICE ↓</text>
      <text x="252" y="200" fill={ink} fontFamily="var(--font-mono)" fontSize="10" letterSpacing="1.5">COMMUNITY →</text>
    </>
  ),

  /* Participation loop */
  loop: (
    <>
      <path
        d="M120 70 H 280 A 50 50 0 0 1 280 170 H 120 A 50 50 0 0 1 120 70 Z"
        stroke={ink}
        strokeWidth="1.8"
      />
      <path d="M280 70 l 12 -8 M280 70 l 12 8" stroke={ink} strokeWidth="1.8" />
      <path d="M120 170 l -12 -8 M120 170 l -12 8" stroke={ink} strokeWidth="1.8" />
      <text x="146" y="52" fill={soft} fontFamily="var(--font-mono)" fontSize="10" letterSpacing="1.5">BRAND STARTS IT</text>
      <text x="132" y="198" fill={soft} fontFamily="var(--font-mono)" fontSize="10" letterSpacing="1.5">AUDIENCE FINISHES IT</text>
      <circle cx="200" cy="120" r="4" fill={accent} />
      <text x="212" y="124" fill={accent} fontFamily="var(--font-mono)" fontSize="10" letterSpacing="1.5">THE GAP</text>
    </>
  ),
};
