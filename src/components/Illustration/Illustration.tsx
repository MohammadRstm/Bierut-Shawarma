import type { ReactElement } from 'react';
import type { Accent, IllustrationKind } from '../../types';

interface IllustrationProps {
  kind: IllustrationKind;
  accent: Accent;
  className?: string;
}

const BLOB_BG: Record<Accent, string> = {
  red: 'var(--accent-red-bg)',
  blue: 'var(--accent-blue-bg)',
  green: 'var(--accent-green-bg)',
  yellow: 'var(--accent-yellow-bg)',
};

const STROKE = {
  stroke: 'var(--ink)',
  strokeWidth: 2.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  fill: 'none',
};

function WrapIcon() {
  return (
    <g transform="rotate(-14 80 80)">
      <rect x="34" y="58" width="98" height="44" rx="22" {...STROKE} />
      <line x1="56" y1="60" x2="50" y2="100" {...STROKE} strokeWidth={1.6} />
      <line x1="76" y1="59" x2="71" y2="101" {...STROKE} strokeWidth={1.6} />
      <line x1="96" y1="59" x2="92" y2="101" {...STROKE} strokeWidth={1.6} />
      <path d="M126 62 Q138 80 126 98" {...STROKE} />
    </g>
  );
}

function PlateIcon() {
  return (
    <g>
      <circle cx="80" cy="82" r="52" {...STROKE} />
      <circle cx="80" cy="82" r="38" {...STROKE} strokeWidth={1.4} strokeDasharray="1 7" />
      <line x1="58" y1="64" x2="102" y2="100" {...STROKE} strokeWidth={2} />
      <ellipse cx="64" cy="70" rx="7" ry="5" {...STROKE} strokeWidth={2} transform="rotate(-30 64 70)" />
      <ellipse cx="80" cy="82" rx="7" ry="5" {...STROKE} strokeWidth={2} transform="rotate(-30 80 82)" />
      <ellipse cx="96" cy="94" rx="7" ry="5" {...STROKE} strokeWidth={2} transform="rotate(-30 96 94)" />
      <path d="M52 100 Q64 112 40 108" {...STROKE} strokeWidth={1.6} />
    </g>
  );
}

function SaladIcon() {
  return (
    <g>
      <path d="M32 76 Q80 108 128 76 L120 100 Q80 118 40 100 Z" {...STROKE} />
      <path d="M60 68 Q66 54 58 44" {...STROKE} strokeWidth={1.8} />
      <path d="M80 64 Q86 48 78 38" {...STROKE} strokeWidth={1.8} />
      <path d="M100 68 Q108 54 100 44" {...STROKE} strokeWidth={1.8} />
      <circle cx="70" cy="82" r="5" {...STROKE} strokeWidth={1.6} />
      <circle cx="94" cy="86" r="4" {...STROKE} strokeWidth={1.6} />
    </g>
  );
}

function DipIcon() {
  return (
    <g>
      <ellipse cx="80" cy="88" rx="50" ry="28" {...STROKE} />
      <path
        d="M56 88 Q64 78 72 88 Q80 98 88 88 Q96 78 104 88"
        {...STROKE}
        strokeWidth={1.8}
      />
      <path d="M124 56 Q132 64 122 74" {...STROKE} strokeWidth={1.6} />
      <circle cx="134" cy="50" r="2.4" fill="var(--ink)" stroke="none" />
    </g>
  );
}

function FriesIcon() {
  return (
    <g transform="rotate(-4 80 80)">
      <path d="M52 66 L108 66 L100 118 L60 118 Z" {...STROKE} />
      <line x1="66" y1="30" x2="63" y2="66" {...STROKE} strokeWidth={2} />
      <line x1="78" y1="24" x2="77" y2="66" {...STROKE} strokeWidth={2} />
      <line x1="90" y1="30" x2="91" y2="66" {...STROKE} strokeWidth={2} />
      <line x1="100" y1="38" x2="97" y2="66" {...STROKE} strokeWidth={2} />
    </g>
  );
}

function DessertIcon() {
  return (
    <g>
      <rect x="46" y="46" width="46" height="46" {...STROKE} transform="rotate(45 69 69)" />
      <rect x="68" y="68" width="46" height="46" {...STROKE} transform="rotate(45 91 91)" />
      <line x1="58" y1="58" x2="80" y2="80" {...STROKE} strokeWidth={1.4} />
      <line x1="80" y1="58" x2="58" y2="80" {...STROKE} strokeWidth={1.4} />
      <circle cx="100" cy="70" r="2.4" fill="var(--ink)" stroke="none" />
      <circle cx="108" cy="80" r="2.4" fill="var(--ink)" stroke="none" />
    </g>
  );
}

function CanIcon() {
  return (
    <g transform="rotate(-6 80 80)">
      <rect x="58" y="40" width="44" height="88" rx="8" {...STROKE} />
      <ellipse cx="80" cy="40" rx="22" ry="6" {...STROKE} strokeWidth={1.8} />
      <path d="M70 40 Q80 34 90 40" {...STROKE} strokeWidth={1.6} />
      <line x1="58" y1="78" x2="102" y2="78" {...STROKE} strokeWidth={1.6} />
      <line x1="58" y1="92" x2="102" y2="92" {...STROKE} strokeWidth={1.6} />
    </g>
  );
}

function BottleIcon() {
  return (
    <g>
      <path
        d="M70 34 H90 V54 Q104 66 104 84 V118 Q104 128 94 128 H66 Q56 128 56 118 V84 Q56 66 70 54 Z"
        {...STROKE}
      />
      <rect x="68" y="30" width="24" height="10" rx="2" {...STROKE} strokeWidth={2} />
      <line x1="60" y1="92" x2="100" y2="92" {...STROKE} strokeWidth={1.6} />
      <line x1="60" y1="104" x2="100" y2="104" {...STROKE} strokeWidth={1.6} />
    </g>
  );
}

function GlassIcon() {
  return (
    <g>
      <path d="M56 46 H104 L96 122 H64 Z" {...STROKE} />
      <line x1="62" y1="70" x2="98" y2="70" {...STROKE} strokeWidth={1.6} />
      <line x1="94" y1="30" x2="80" y2="58" {...STROKE} strokeWidth={2} />
      <circle cx="74" cy="90" r="3" {...STROKE} strokeWidth={1.4} />
      <circle cx="86" cy="100" r="2.4" {...STROKE} strokeWidth={1.4} />
    </g>
  );
}

function CupIcon() {
  return (
    <g>
      <path d="M62 52 H98 L92 120 Q80 126 68 120 Z" {...STROKE} />
      <ellipse cx="80" cy="52" rx="20" ry="6" {...STROKE} strokeWidth={1.8} />
      <line x1="88" y1="46" x2="100" y2="20" {...STROKE} strokeWidth={2} />
    </g>
  );
}

const ICONS: Record<IllustrationKind, () => ReactElement> = {
  wrap: WrapIcon,
  plate: PlateIcon,
  salad: SaladIcon,
  dip: DipIcon,
  fries: FriesIcon,
  dessert: DessertIcon,
  can: CanIcon,
  bottle: BottleIcon,
  glass: GlassIcon,
  cup: CupIcon,
};

export function Illustration({ kind, accent, className }: IllustrationProps) {
  const Icon = ICONS[kind];
  return (
    <svg viewBox="0 0 160 160" className={className} aria-hidden="true">
      <circle cx="104" cy="52" r="46" fill={BLOB_BG[accent]} />
      <Icon />
    </svg>
  );
}
