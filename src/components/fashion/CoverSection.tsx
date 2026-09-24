/**
 * Section 1 — Cover plate.
 * Near-black tartan plaid ground (#10090B) with the "PoRtfolio" masthead:
 * high-contrast serif "PoRt" overlapped by a handwritten script "folio",
 * warm italic byline, and a bold sans "2026" anchored bottom-right.
 * Hard top/bottom edges — no fades, no gradients outside the plaid weave.
 */
export function CoverSection() {
  return (
    <section
      className="relative flex min-h-[540px] items-center justify-center overflow-hidden bg-[#10090B] md:h-[620px]"
      aria-label="Portfolio cover"
    >
      {/* Tartan plaid weave — near-black with burgundy + neutral threads */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: [
            'repeating-linear-gradient(0deg, rgba(120,26,28,0.30) 0px, rgba(120,26,28,0.30) 2px, transparent 2px, transparent 46px)',
            'repeating-linear-gradient(0deg, rgba(74,42,46,0.38) 0px, rgba(74,42,46,0.38) 8px, transparent 8px, transparent 92px)',
            'repeating-linear-gradient(90deg, rgba(120,26,28,0.30) 0px, rgba(120,26,28,0.30) 2px, transparent 2px, transparent 52px)',
            'repeating-linear-gradient(90deg, rgba(74,42,46,0.38) 0px, rgba(74,42,46,0.38) 8px, transparent 8px, transparent 96px)',
            'repeating-linear-gradient(90deg, rgba(248,229,215,0.045) 0px, rgba(248,229,215,0.045) 1px, transparent 1px, transparent 118px)',
            'repeating-linear-gradient(0deg, rgba(248,229,215,0.045) 0px, rgba(248,229,215,0.045) 1px, transparent 1px, transparent 132px)',
          ].join(', '),
        }}
      />
      {/* Slight diagonal threads to keep the weave tactile */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, rgba(214,149,137,0.05) 0px, rgba(214,149,137,0.05) 1px, transparent 1px, transparent 160px)',
        }}
      />

      {/* Corner registration ticks */}
      <span aria-hidden className="absolute left-5 top-4 font-body text-lg font-light text-[#F8E5D7]/40">+</span>
      <span aria-hidden className="absolute bottom-4 left-5 font-body text-lg font-light text-[#F8E5D7]/40">+</span>

      {/* Masthead */}
      <div className="relative px-6 text-center">
        <h1 className="leading-none">
          <span className="font-serif-display text-[96px] tracking-tight text-[#F8E5D7] md:text-[176px]">
            PoRt
          </span>
          <span
            className="relative -top-2 -ml-5 font-body text-[86px] italic font-bold text-[#F4C9D6] md:-top-4 md:-ml-9 md:text-[150px]"
            style={{ fontFamily: "'Caveat', cursive", fontWeight: 700 }}
          >
            folio
          </span>
        </h1>
        <p
          className="mt-6 text-2xl text-[#D6B9AC] md:mt-8 md:text-3xl"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          by lavanaya Khandelwal
        </p>
      </div>

      {/* Year anchor */}
      <span className="absolute bottom-6 right-8 font-body text-xl font-extrabold tracking-[0.18em] text-[#F8E5D7] md:text-2xl">
        2026
      </span>
    </section>
  );
}
