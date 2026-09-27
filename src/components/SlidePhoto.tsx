import React, { useState } from 'react';

interface SlidePhotoProps {
  /** Asset path under /portfolio-assets. May not exist yet. */
  src: string;
  alt: string;
  /** Short caption shown on the placeholder plate. */
  label: string;
  /** Classes applied to both the <img> and the placeholder. */
  className?: string;
}

/**
 * Slide image with an on-brand "image pending" plate.
 *
 * The deck references photographs that are not in the repository yet, so a
 * 404 swaps the <img> for a quiet, typeset placeholder instead of leaving a
 * broken-image box. Drop the real file into /public/portfolio-assets using the
 * same filename and the photo renders automatically — no code change needed.
 */
export const SlidePhoto: React.FC<SlidePhotoProps> = ({ src, alt, label, className = '' }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`w-full h-full flex flex-col items-center justify-center gap-1.5 bg-[#FADBD9]/40 ${className}`}
        role="img"
        aria-label={`${label} — image pending`}
      >
        <svg
          viewBox="0 0 24 24"
          className="w-4 h-4 sm:w-5 sm:h-5 text-[#A08D88]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="14" rx="1" />
          <circle cx="8.5" cy="10" r="1.5" />
          <path d="M4 17.5l5-4.5 3.5 3 3-2.5L20 18" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-mono-code text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-[#705955] text-center px-2 leading-tight">
          {label}
        </span>
        <span className="font-mono-code text-[7px] sm:text-[8px] uppercase tracking-[0.2em] text-[#9A8783]">
          Image pending
        </span>
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />;
};
