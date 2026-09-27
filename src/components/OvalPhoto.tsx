import React, { useState } from 'react';

interface OvalPhotoProps {
  /** Asset path under /portfolio-assets. May not exist yet. */
  src: string;
  alt: string;
  /** Short caption shown inside the oval placeholder. */
  label: string;
  /** Classes applied to the <img>. */
  className?: string;
}

/**
 * Oval image slot with an empty mount as its fallback.
 *
 * The slot is an organic closed figure — an asymmetric ellipse, not a circle —
 * so it can break the top edge of a card without reading as a badge. Same
 * contract and same Project 1 plate treatment as <SlidePhoto>: the `#FDFCF8`
 * fill and taupe hairline of `.plate-light`, wordless. Drop the real file into
 * /public/portfolio-assets under the same filename and the photo fills the same
 * shape automatically.
 */
export const OvalPhoto: React.FC<OvalPhotoProps> = ({ src, alt, label, className = '' }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`oval-frame w-full h-full min-h-[9rem] bg-[#FDFCF8] border border-[#705955]/28 ${className}`}
        role="img"
        aria-label={`${label} — image slot empty`}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`oval-frame w-full h-full object-cover ${className}`}
      onError={() => setFailed(true)}
    />
  );
};
