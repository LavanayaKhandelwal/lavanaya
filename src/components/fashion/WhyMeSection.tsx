import { useState } from 'react';

/**
 * Section 2 — "Why me!" bio plate on deep burgundy (#781A1C).
 * Three-column composition: two bio paragraphs left, central portrait
 * (drop-in slot /portfolio-assets/IMG_2187.jpg, feathered so no rectangular
 * frame is visible), two paragraphs right, with dotted hand-drawn arrows
 * pointing into the portrait.
 */

const PARAGRAPHS = [
  'I am a fashion design student who is drawn to silhouette, proportion, texture, and the quiet details that make a garment feel considered.',
  'My work moves between softness and structure, intuition and precision, while staying grounded in wearability and feeling.',
  'I approach design as something emotional as much as visual, and I am especially interested in creating clothing that feels intentional rather than performative.',
  'This internship is an opportunity to translate that sensibility into imagery, styling, and a visual language that can live beyond the page.',
];

function DottedArrow({ className = '', flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 120 90"
      fill="none"
      aria-hidden
      className={className}
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
    >
      <path
        d="M6 12 C 44 4, 84 18, 100 58"
        stroke="#F8E5D7"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="0.1 9"
      />
      <path
        d="M90 52 L101 62 L109 48"
        stroke="#F8E5D7"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function Portrait() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <div className="relative mx-auto h-[320px] w-[240px] md:h-[380px] md:w-[280px]">
      {/* Graceful fallback — abstract figure in deeper burgundy tones */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 top-4 flex flex-col items-center justify-end">
        <div className="h-24 w-20 rounded-[48%] bg-[#5C1416]" />
        <div className="-mt-3 h-52 w-60 rounded-t-[120px] bg-[#4A0F11]" />
      </div>

      {imgOk && (
        <img
          src="/portfolio-assets/IMG_2187.jpg"
          alt="Portrait of Lavanaya Khandelwal"
          className="absolute inset-0 h-full w-full object-cover object-top"
          style={{
            // Feathered cutout treatment — no visible rectangular frame
            maskImage: 'radial-gradient(ellipse 78% 88% at 50% 42%, black 55%, transparent 78%)',
            WebkitMaskImage: 'radial-gradient(ellipse 78% 88% at 50% 42%, black 55%, transparent 78%)',
          }}
          onError={() => setImgOk(false)}
        />
      )}

      {/* Hand-drawn dotted arrows pointing into the portrait */}
      <DottedArrow className="absolute -left-24 top-4 hidden h-20 w-24 md:block" />
      <DottedArrow flip className="absolute -right-24 top-10 hidden h-20 w-24 md:block" />
    </div>
  );
}

export function WhyMeSection() {
  return (
    <section className="relative overflow-hidden bg-[#781A1C] px-6 py-14 md:h-[700px] md:px-12" aria-label="Why me">
      <h2 className="font-serif-display text-5xl text-[#F8E5D7] md:text-6xl">
        Why <em className="italic">me!</em>
      </h2>

      <div className="mt-12 grid items-center gap-12 md:mt-2 md:grid-cols-[1fr_auto_1fr] md:gap-10">
        {/* Left column — paragraphs 1 & 2 */}
        <div className="space-y-6 md:justify-self-end md:pt-20 md:text-right">
          {PARAGRAPHS.slice(0, 2).map((copy) => (
            <p key={copy.slice(0, 24)} className="max-w-[32ch] font-body text-[15px] leading-relaxed text-[#F3DDD2] md:ml-auto">
              {copy}
            </p>
          ))}
        </div>

        <Portrait />

        {/* Right column — paragraphs 3 & 4 */}
        <div className="space-y-6 md:pt-20">
          {PARAGRAPHS.slice(2).map((copy) => (
            <p key={copy.slice(0, 24)} className="max-w-[32ch] font-body text-[15px] leading-relaxed text-[#F3DDD2]">
              {copy}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
