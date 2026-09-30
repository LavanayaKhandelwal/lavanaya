import React from 'react';
import { SlidePhoto } from '../SlidePhoto';

/**
 * PROJECT 04 — SHARED SCRAPBOOK FURNITURE
 *
 * The drawn marks, painted strokes and paper furniture that both Hunkemöller
 * boards are assembled from. Kept in one place so the wordmark, the infinity
 * mark, the hearts and the printed-photo treatment are literally the same
 * objects on the event board and on the reflection board — a scrapbook where
 * the same pen was used twice.
 *
 * COLOUR. Hunkemöller's identity is a hot dusty pink on near-black. The site's
 * light palette already carries that pink, so the identity is mapped onto it
 * rather than imported as new hues:
 *
 *   canvas pink     #F8E5E6  →  blush      #FADBD9
 *   hot dusty pink  #E96F88  →  terracotta #D69589
 *   deep pink       #C83F61  →  wine       #7A2A2E
 *   near black      #181414  →  ink        #3E2723
 *   white           #FFFFFF  →  cream      #F9F8F2
 *
 * Every mark is inline SVG with fixed geometry. Nothing here is randomised —
 * a hand-drawn quality comes from the drawn paths, not from jitter at runtime,
 * because a layout that reshuffles on every render is not a scrapbook, it is a
 * bug report.
 */

export const CATEGORY = 'CUSTOMER EXPERIENCE ACTIVATION';

export const PINK = '#D69589';
export const WINE = '#7A2A2E';
export const INK = '#3E2723';

/**
 * The client lockup, as one supplied asset.
 *
 * This replaces a drawn wordmark-plus-infinity-symbol pair: the name used to
 * be set in an editorial serif with a hand-drawn infinity SVG tucked beneath
 * it. The supplied file already carries both the symbol and the name, so both
 * are gone — there is no text and no vector mark left in the DOM.
 *
 * SIZE. The source is 1916x303 — a 6.32:1 horizontal lockup, not the old
 * 165x88 stacked block. The old wordmark line alone was 28px tall and about
 * 165px wide, so a 176px default reproduces that line's footprint almost
 * exactly and the symbol now sits inside the same lockup rather than below it.
 * The title block therefore gets shorter, which is the correct consequence of
 * the new asset's proportions, not a spacing change.
 *
 * `size` overrides that default and takes a width utility as a literal string.
 * It has to be a literal: the class is interpolated into the img's className,
 * so Tailwind resolves it by scanning source text at build time and a value
 * computed at runtime would emit no CSS at all. The default is unchanged, so
 * page two keeps the original footprint.
 *
 * The file was trimmed to its alpha bounds before use. As supplied it was
 * 1967x799, of which 63% was fully transparent padding, so any box sized from
 * the file's own ratio would have reserved roughly 2.5x the height the artwork
 * actually needs. The box below is therefore `aspect-[1916/303]`, the trimmed
 * file's exact ratio, which makes `object-contain` fill it edge to edge and
 * leaves no dead space in the layout.
 */
export const BrandMark: React.FC<{
  className?: string;
  align?: 'center' | 'left';
  /** Width utility for the lockup, as a source literal. Defaults to 176px. */
  size?: string;
}> = ({ className = '', align = 'center', size = 'w-44' }) => (
  <div className={`flex ${align === 'center' ? 'justify-center' : 'justify-start'} ${className}`}>
    <img
      src="/portfolio-assets/04_hunkemoller_logo.png"
      alt="Hunkemöller"
      width={1916}
      height={303}
      className={`h-auto ${size} aspect-[1916/303] object-contain`}
    />
  </div>
);

/** Hand-drawn heart outline. `size` in px. */
export const HeartOutline: React.FC<{ className?: string; size?: number; stroke?: number }> = ({
  className = '',
  size = 28,
  stroke = 2,
}) => (
  <svg
    viewBox="0 0 30 27"
    width={size}
    height={size * 0.9}
    className={className}
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M15 23.6C15 23.6 3.6 16.5 3.6 9.2 3.6 5.7 6.3 3.2 9.4 3.2c2.1 0 4.1 1.2 5.6 3.1 1.5-1.9 3.5-3.1 5.6-3.1 3.1 0 5.8 2.5 5.8 6 0 7.3-11.4 14.4-11.4 14.4Z"
      stroke={WINE}
      strokeWidth={stroke}
      strokeLinejoin="round"
    />
  </svg>
);

/** Tiny hand-drawn four-point star. */
export const StarMark: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 12 }) => (
  <svg viewBox="0 0 20 20" width={size} height={size} className={className} fill="none" aria-hidden="true">
    <path
      d="M10 1.5c.6 5 2 6.4 7 7-5 .6-6.4 2-7 7-.6-5-2-6.4-7-7 5-.6 6.4-2 7-7Z"
      stroke={WINE}
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * A four-point sparkle, drawn with concave sides. Where `StarMark` is a quick
 * pen tick beside a note, this is the cleaner engraved version used inside the
 * learning rows' icon discs.
 */
export const SparkleMark: React.FC<{ className?: string; size?: number; stroke?: number }> = ({
  className = '',
  size = 28,
  stroke = 1.6,
}) => (
  <svg viewBox="0 0 32 32" width={size} height={size} className={className} fill="none" aria-hidden="true">
    <path
      d="M16 1.5c.9 8 1.9 9 9.5 14.5C17.9 21.5 16.9 22.5 16 30.5 15.1 22.5 14.1 21.5 6.5 16 14.1 10.5 15.1 9.5 16 1.5Z"
      stroke={WINE}
      strokeWidth={stroke}
      strokeLinejoin="round"
    />
  </svg>
);

/** A minimal outlined group of three people — the icon for 01 and 03. */
export const PeopleMark: React.FC<{ className?: string; size?: number; stroke?: number }> = ({
  className = '',
  size = 30,
  stroke = 1.6,
}) => (
  <svg viewBox="0 0 36 28" width={size} height={size * 0.78} className={className} fill="none" aria-hidden="true">
    <circle cx="18" cy="7.5" r="4.2" stroke={WINE} strokeWidth={stroke} />
    <path d="M9.6 24.5c.4-5.4 3.9-8.6 8.4-8.6s8 3.2 8.4 8.6" stroke={WINE} strokeWidth={stroke} strokeLinecap="round" />
    <circle cx="5.4" cy="11.4" r="3.2" stroke={WINE} strokeWidth={stroke} />
    <path d="M.8 24.5c.3-4.2 2.3-6.6 5.4-6.6" stroke={WINE} strokeWidth={stroke} strokeLinecap="round" />
    <circle cx="30.6" cy="11.4" r="3.2" stroke={WINE} strokeWidth={stroke} />
    <path d="M29.8 17.9c3.1 0 5.1 2.4 5.4 6.6" stroke={WINE} strokeWidth={stroke} strokeLinecap="round" />
  </svg>
);

/** Small hand-drawn ribbon bow. */
export const BowMark: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 34 }) => (
  <svg viewBox="0 0 48 30" width={size} height={size * 0.62} className={className} fill="none" aria-hidden="true">
    <path
      d="M24 15C17 6 8 5 5 9.5c-2.6 3.9 3 9 11 8.4-7 2-10.4 6.2-8 9.2 2.2 2.8 9.6 1.2 16-6.6Z"
      stroke={WINE}
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M24 15c7-9 16-10 19-5.5 2.6 3.9-3 9-11 8.4 7 2 10.4 6.2 8 9.2-2.2 2.8-9.6 1.2-16-6.6Z"
      stroke={WINE}
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path d="M24 15c-1.6 3.4-1.6 8.6 0 12" stroke={WINE} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

/** Hand-drawn instant camera. */
export const CameraMark: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 30 }) => (
  <svg viewBox="0 0 44 34" width={size} height={size * 0.77} className={className} fill="none" aria-hidden="true">
    <rect x="2.5" y="7.5" width="39" height="24" rx="2.5" stroke={WINE} strokeWidth="1.9" />
    <path d="M12 7.5 15 3h13l3 4.5" stroke={WINE} strokeWidth="1.9" strokeLinejoin="round" />
    <rect x="7" y="12" width="18" height="15" rx="1.5" stroke={WINE} strokeWidth="1.7" />
    <circle cx="35" cy="14" r="3" stroke={WINE} strokeWidth="1.7" />
  </svg>
);

/** Minimal cocktail glass. */
export const CocktailMark: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 26 }) => (
  <svg viewBox="0 0 30 34" width={size} height={size * 1.13} className={className} fill="none" aria-hidden="true">
    <path d="M5 5h20l-7.4 11.2v10.3h5.2" stroke={WINE} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.6 8.2h12.8" stroke={WINE} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    <path d="M13 16.2h4" stroke={WINE} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
  </svg>
);

/**
 * A rough painted acrylic stroke. Filled rather than stroked, because a stroked
 * path has a uniform edge and a brush mark does not — the outline wobbles.
 */
export const BrushMark: React.FC<{ className?: string; flip?: boolean }> = ({ className = '', flip = false }) => (
  <svg
    viewBox="0 0 300 60"
    className={className}
    fill="none"
    aria-hidden="true"
    preserveAspectRatio="none"
    style={flip ? { transform: 'scaleX(-1)' } : undefined}
  >
    <path
      d="M12 40C40 26 74 16 122 15c58-1 118 5 166 15 8 1.8 10 6.4 4 9-58 22-176 26-256 11-12-2.2-31-6.4-24-10Z"
      fill={PINK}
      opacity="0.72"
    />
    <path
      d="M40 46c62 10 168 8 224-6 6-1.6 7-5 1-6.6-56-14-160-15-214-3-8 1.8-19 12.6-11 15.6Z"
      fill={PINK}
      opacity="0.42"
    />
  </svg>
);

/** Loose hand-drawn curved arrow. */
export const InkArrow: React.FC<{ className?: string; flip?: boolean }> = ({ className = '', flip = false }) => (
  <svg
    viewBox="0 0 70 40"
    className={className}
    fill="none"
    aria-hidden="true"
    style={flip ? { transform: 'scaleX(-1)' } : undefined}
  >
    <path d="M64 6C44 4 20 12 11 24" stroke={WINE} strokeWidth="2" strokeLinecap="round" />
    <path
      d="M6 15.5c-1.4 4-1.2 8.2 1.2 11.4M4 26.5c4.3.6 8.3-.7 10.6-4"
      stroke={WINE}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** Semi-transparent pink and cream masking tape. */
export const PinkTape: React.FC<{ className?: string; rotate?: number; cream?: boolean }> = ({
  className = '',
  rotate = 0,
  cream = false,
}) => (
  <span
    aria-hidden="true"
    className={`pointer-events-none absolute block h-5 w-16 ${
      cream ? 'bg-[#F9F8F2]/70' : 'bg-[#D69589]/45'
    } ${className}`}
    style={{ transform: `rotate(${rotate}deg)`, boxShadow: 'inset 0 0 0 1px rgba(62,39,35,0.06)' }}
  />
);

/**
 * A printed photograph on paper: warm-white border, soft shadow, slight tilt.
 *
 * `padless` drops the border entirely, for a photograph the specification
 * mounts with no frame at all — it runs to its own edge and only the shadow
 * says it is lying on the page.
 *
 * `paper` adds the cream mat the specification calls for behind selected
 * photographs: a slightly larger sheet underneath, offset so a few millimetres
 * of paper show on every side, carrying the soft physical shadow. The border
 * width is `pad` (3–7px in the spec's range), not a fixed guess.
 *
 * `radius` is passed through to the empty plate so a board that wants hard
 * photographic corners (`rounded-none`) can have them.
 */
export const Print: React.FC<{
  children: React.ReactNode;
  className?: string;
  rotate?: number;
  tape?: { className?: string; rotate?: number };
  label: string;
  padless?: boolean;
  paper?: boolean;
  pad?: number;
}> = ({ children, className = '', rotate = 0, tape, label, padless = false, paper = false, pad = 4 }) => (
  <figure
    className={`relative ${
      padless
        ? 'bg-[#FDFCF8] shadow-[6px_8px_18px_rgba(60,30,30,0.10)]'
        : `bg-[#FDFCF8] shadow-[6px_8px_18px_rgba(60,30,30,${paper ? '0.07' : '0.10'})]`
    } ${className}`}
    style={{ transform: `rotate(${rotate}deg)`, padding: padless ? undefined : `${pad}px` }}
    aria-label={label}
  >
    {paper && (
      <span
        aria-hidden="true"
        className="absolute -inset-1.5 bg-[#FDFCF8] shadow-[6px_8px_18px_rgba(60,30,30,0.10)]"
      />
    )}
    {/* Positioned, so it paints above the mat behind it rather than under it. */}
    <span className="relative block h-full">{children}</span>
    {tape && <PinkTape className={tape.className} rotate={tape.rotate} />}
  </figure>
);

/**
 * A wordless photo plate.
 *
 * `position` is the crop lever: it lands on `objectPosition`, so with the
 * default `object-cover` a plate whose art is taller than the ratio it is given
 * can keep its top and give up its bottom (`position="top"`), or the reverse.
 * Same mechanism as the local Slot in EverydayAthleisurePageOne.
 */
export const Slot: React.FC<{
  src: string;
  alt: string;
  label: string;
  className?: string;
  radius?: string;
  position?: string;
}> = ({ src, alt, label, className = '', radius = 'rounded-[3px]', position }) => (
  <div className={`overflow-hidden hover-zoom ${className}`}>
    <SlidePhoto
      src={src}
      alt={alt}
      label={label}
      className="w-full h-full object-cover"
      style={position ? { objectPosition: position } : undefined}
      frameRadius={radius}
    />
  </div>
);

/** A torn paper scrap — collage filler, no image, no text. */
export const Scrap: React.FC<{ className?: string; rotate?: number; tone?: 'blush' | 'cream' | 'deep' }> = ({
  className = '',
  rotate = 0,
  tone = 'cream',
}) => {
  const fill = tone === 'blush' ? '#FADBD9' : tone === 'deep' ? '#D69589' : '#FDFCF8';
  return (
    <svg
      viewBox="0 0 120 90"
      className={`pointer-events-none absolute ${className}`}
      fill="none"
      aria-hidden="true"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <path
        d="M6 12 38 3l30 5 26-4 20 9-4 26 5 24-11 21-34 3-30-6-28 2-5-24 3-22Z"
        fill={fill}
        stroke="rgba(62,39,35,0.14)"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
};
