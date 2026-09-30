import { portfolioData } from '../../data/portfolioData';

/**
 * Section 1 — Cover plate.
 * Pink gingham plaid photograph (rotated landscape, full opacity) over a
 * near-black ground (#10090B), with the "PoRtfolio" masthead built from three
 * faces — Times New Roman "PoR", Canva Sans "t", and a Moontime-style script
 * "folio" — over an Inter byline locked to the wordmark's width, and the
 * qualification anchored as a base plate along the bottom edge.
 */
export function CoverSection() {
  const { student } = portfolioData;

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#10090B]"
      aria-label="Portfolio cover"
    >
      {/* Pink gingham plaid photograph — rotated to landscape, full opacity */}
      <img
        src="/portfolio-assets/plaid-cover.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Corner registration tick */}
      <span aria-hidden className="absolute left-5 top-4 font-body text-lg font-light text-[#3E2723]/60">+</span>

      {/* Masthead — the byline row is locked to the exact width of the
          "PoRtfolio" wordmark: name flush left, year flush right, neither
          extending past the word itself. Whole lockup sits a touch above
          optical centre. */}
      <div className="relative -translate-y-8 px-2 sm:px-6 md:-translate-y-12">
        <div className="inline-block text-center">
          <h1 className="whitespace-nowrap leading-none font-wordmark-serif text-[#3E2723] reveal">
            {/* letter-spacing also lands after the "R", so marginRight of the
                same value neutralises it and the join can be tuned on its own */}
            <span style={{ fontSize: 'clamp(88px, 27vw, 470px)', letterSpacing: '-0.12em', marginRight: '0.12em' }}>PoR</span>
            <span className="font-wordmark-sans" style={{ fontSize: 'clamp(68px, 21.5vw, 360px)', marginLeft: '-0.02em' }}>t</span>
            <span
              className="font-wordmark-script italic"
              style={{ fontSize: 'clamp(84px, 25.5vw, 450px)', marginLeft: '-0.08em' }}
            >
              folio
            </span>
          </h1>

          {/* Byline — name left, year right, spanning the wordmark width */}
          <div className="-mt-16 flex w-full items-baseline justify-between gap-x-4 md:-mt-20 reveal reveal-d1">
            <span
              className="font-inter text-[#3E2723]"
              style={{ fontSize: 'clamp(14px, 1.6vw, 26px)', fontWeight: 400, letterSpacing: '0.02em' }}
            >
              by lavanaya Khandelwal
            </span>
            <span
              className="font-inter text-[#3E2723]"
              style={{ fontSize: 'clamp(14px, 1.6vw, 26px)', fontWeight: 600, letterSpacing: '0.16em' }}
            >
              2026
            </span>
          </div>
        </div>
      </div>

      {/* Base plate — qualification anchored to the bottom edge of the cover */}
      <div className="absolute bottom-6 left-6 right-6 md:bottom-9 md:left-10 md:right-10 reveal reveal-d2">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-[#3E2723]/30 pt-3">
          <span
            className="font-inter text-[#3E2723]"
            style={{ fontSize: 'clamp(10px, 1.05vw, 15px)', fontWeight: 400, letterSpacing: '0.06em' }}
          >
            {student.degree}
          </span>
          <span
            className="font-inter text-[#3E2723]/70"
            style={{ fontSize: 'clamp(10px, 1.05vw, 15px)', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase' }}
          >
            {student.institution}
          </span>
        </div>
      </div>
    </section>
  );
}
