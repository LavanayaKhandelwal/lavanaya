import React, { useState } from 'react';

interface OvalPhotoProps {
  /** Asset path under /portfolio-assets. May not exist yet. */
  src: string;
  alt: string;
  /** Short caption shown inside the oval placeholder. */
  label: string;
  /** Classes applied to the <img>. */
  className?: string;
  /** Scales the photo down inside its oval, leaving the frame where it is. 1 = flush. */
  scale?: number;
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
 *
 * The frame lives on the wrapper and the photo on the <img> inside it, kept
 * separate so `scale` can pull the photo back without dragging the oval's
 * border-radius, hairline and footprint along with it. A scaled photo sits
 * centred on the plate fill, which reads as a mounted print inside the mount.
 */
export const OvalPhoto: React.FC<OvalPhotoProps> = ({
  src,
  alt,
  label,
  className = '',
  scale = 1,
}) => {
  const [failed, setFailed] = useState(false);

  const frame = 'oval-frame w-full h-full min-h-[9rem] bg-[#FDFCF8] border border-[#705955]/28';

  if (failed) {
    return (
      <div
        className={`${frame} ${className}`}
        role="img"
        aria-label={`${label} — image slot empty`}
      />
    );
  }

  const style: React.CSSProperties = {};
  if (scale !== 1) style.transform = `scale(${scale})`;

  return (
    <div className={`${frame} overflow-hidden`}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
        style={Object.keys(style).length > 0 ? style : undefined}
        onError={() => setFailed(true)}
      />
    </div>
  );
};
