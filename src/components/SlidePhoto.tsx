import React, { useState } from 'react';

interface SlidePhotoProps {
  /** Asset path under /portfolio-assets. May not exist yet. */
  src: string;
  alt: string;
  /** Short caption shown on the placeholder plate. */
  label: string;
  /** Classes applied to both the <img> and the placeholder. */
  className?: string;
  /** Inline styles, used for object-position on full-bleed hero covers. */
  style?: React.CSSProperties;
  /** Native loading hint. Hero covers load eagerly. */
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
  /** Inset for the fallback frame. Full-bleed covers pull it in from the edges. */
  frameInset?: string;
  /** Shape of the fallback frame — rounded-full for circular slots. */
  frameRadius?: string;
}

/**
 * The placeholder frame — an empty mount, nothing inside it.
 *
 * Deliberately wordless: no icon, no caption, no printed label. The slot reads
 * as a considered empty frame rather than a warning about missing media. It
 * carries Project 1's own plate treatment — the `#FDFCF8` fill and the 1px
 * taupe border of `.plate-light` — so an empty slot is indistinguishable from a
 * mounted photograph waiting for its file. The label survives as an aria-label
 * so the slot is still identifiable to a screen reader without printing
 * anything on screen.
 *
 * `min-h` keeps the frame from collapsing to a single line inside auto-height
 * plates; inside a fixed-height or aspect-ratio box `h-full` still wins.
 *
 * Exported on its own so a slot can render the frame deliberately (a cover
 * photo that has not been shot yet) instead of duplicating the markup.
 */
export const PhotoPlate: React.FC<{
  label: string;
  className?: string;
  style?: React.CSSProperties;
  /** Pulls the hairline in from the slot's edges. Full-bleed covers use this so
      the line never lands on the viewport edge. */
  frameInset?: string;
  /** Shape of the hairline. Circular and oval slots pass rounded-full so the
      frame follows the crop instead of being clipped by it. */
  frameRadius?: string;
}> = ({ label, className = '', style, frameInset = 'inset-0', frameRadius = 'rounded-[3px]' }) => (
  <div
    className={`relative w-full h-full min-h-[9rem] bg-[#FDFCF8] ${className}`}
    style={style}
    role="img"
    aria-label={`${label} — image slot empty`}
  >
    <div
      className={`absolute ${frameInset} border border-[#705955]/28 ${frameRadius}`}
      aria-hidden="true"
    />
  </div>
);

/**
 * Slide image with an empty hairline frame as its fallback.
 *
 * The deck references photographs that are not in the repository yet, so a 404
 * swaps the <img> for a quiet frame instead of leaving a broken-image box. Drop
 * the real file into /public/portfolio-assets using the same filename and the
 * photo renders automatically — no code change needed.
 *
 * This is the site's single image slot: every photograph on every page goes
 * through it, so one frame design covers all placeholders.
 */
export const SlidePhoto: React.FC<SlidePhotoProps> = ({
  src,
  alt,
  label,
  className = '',
  style,
  loading,
  fetchPriority,
  frameInset,
  frameRadius,
}) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <PhotoPlate
        label={label}
        className={className}
        style={style}
        frameInset={frameInset}
        frameRadius={frameRadius}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading={loading}
      fetchPriority={fetchPriority}
      onError={() => setFailed(true)}
    />
  );
};
