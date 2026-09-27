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
 * Oval image slot with a typeset "image pending" fallback.
 *
 * The slot is an organic closed figure — an asymmetric ellipse, not a circle —
 * so it can break the top edge of a card without reading as a badge. Same
 * contract as <SlidePhoto>: drop the real file into /public/portfolio-assets
 * under the same filename and the photo fills the same shape automatically.
 */
export const OvalPhoto: React.FC<OvalPhotoProps> = ({ src, alt, label, className = '' }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`oval-frame w-full h-full overflow-hidden bg-[#FADBD9]/70 ring-1 ring-[#705955]/25 flex items-center justify-center ${className}`}
        role="img"
        aria-label={`${label} — image pending`}
      >
        <div className="flex flex-col items-center gap-2.5 px-6 text-center">
          <span className="font-mono-code text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#705955] leading-tight">
            {label}
          </span>
          <span className="block h-px w-8 bg-[#D69589]" aria-hidden="true" />
          <span className="font-mono-code text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-[#9A8783]">
            Image pending
          </span>
        </div>
      </div>
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
