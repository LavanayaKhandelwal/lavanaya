import React from 'react';
import { SlidePhoto } from '../SlidePhoto';

/**
 * PROJECT 2 — PAGE 03, "MAKING THE UNEXPECTED"
 *
 * How the Future Florals concept left the page and became a physical display.
 * Narrative on the left, three vertical process photographs on the right with
 * the process sequence beneath them, then the cost callout and a strip of
 * installation frames along the bottom.
 *
 * No card. Like PAGE 02 the page is a continuous run of the cream ground —
 * no border, no plate fill, no inset box.
 *
 * Copy is explicit as provided: heading, intro, two paragraphs, process,
 * cost line, and cost description.
 *
 * Colour is the home page's light palette, not the spec's own hex values.
 * No gradients, no shadows, no blur.
 */

/* ——— Copy (per instruction) ——— */
const HEADING_LEAD = 'MAKING THE';
const HEADING_TAIL = 'UNEXPECTED';
const INTRO = 'The concept moved from visual direction to physical execution.';
const PARA1 =
  'Holographic sheets were transformed into layered petals, while wire and foam provided structure and dimension. Organza added softness, and lighting enhanced the reflective surfaces.';
const PARA2 =
  'Each floral element was constructed, assembled and positioned to create the final display. The mannequin remained the focal point, framed by florals, texture and light.';
const PROCESS_STEPS = ['CONCEPT', 'MATERIAL', 'CONSTRUCTION', 'INSTALLATION'];
const COST_LINE = '₹8,847 — TOTAL PROJECT COST';
const COST_DESCRIPTION =
  'Future Florals translated nature into a contemporary, futuristic retail environment.';

/** Vertical cards across the upper right, one label each. */
const PROCESS_CARDS = [
  {
    label: 'MATERIALS',
    src: '/portfolio-assets/project2-materials.jpg',
    alt: 'Translucent holographic material, layered into petals',
    position: '50% 45%',
  },
  {
    label: 'CONSTRUCTION',
    src: '/portfolio-assets/project2-construction.jpg',
    alt: 'Wire and foam armature giving the florals structure',
    position: '50% 50%',
  },
  {
    label: 'INSTALLATION',
    src: '/portfolio-assets/project2-installation.jpg',
    alt: 'The finished display in the Cover Story storefront',
    position: '50% 45%',
  },
];

/**
 * Three frames documenting the finished installation, unequal widths.
 *
 * Shot portrait; the slots below are wide, so `object-cover` keeps a
 * horizontal band and the frames are centred on it.
 */
const INSTALLATION_STRIP = [
  {
    src: '/portfolio-assets/project2-bottom-1.jpg',
    alt: 'The finished Future Florals display in the Cover Story storefront',
    position: '50% 50%',
  },
  {
    src: '/portfolio-assets/project2-bottom-2.jpg',
    alt: 'The display photographed from a second angle',
    position: '50% 50%',
  },
  {
    src: '/portfolio-assets/project2-bottom-3.jpg',
    alt: 'Close detail of the reflective floral surfaces',
    position: '50% 50%',
  },
];

/**
 * A cropped translucent botanical illustration — flat fills at low opacity, a
 * thin stem, no gradients. It sits behind the cost callout and is clipped by
 * the viewport's left edge, so the bloom reads as part cut off by the page.
 */
const DecorativeBloom: React.FC = () => (
  <svg
    viewBox="0 0 220 300"
    className="h-full w-full"
    aria-hidden="true"
    focusable="false"
    preserveAspectRatio="xMidYMax meet"
  >
    {/* stem, sweeping in from the lower left */}
    <path
      d="M18 300 C 46 246 62 214 74 176"
      fill="none"
      stroke="#A38D89"
      strokeOpacity="0.4"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M40 268 C 54 246 62 232 68 214"
      fill="none"
      stroke="#A38D89"
      strokeOpacity="0.22"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* a small leaf */}
    <path d="M56 236 C 40 232 32 220 34 210 C 46 212 54 222 56 236 Z" fill="#A38D89" fillOpacity="0.2" />
    {/* outer petal ring */}
    {[0, 60, 120, 180, 240, 300].map((deg) => (
      <ellipse
        key={`outer-${deg}`}
        cx="104"
        cy="76"
        rx="17"
        ry="42"
        fill="#D69589"
        fillOpacity="0.24"
        transform={`rotate(${deg} 104 134)`}
      />
    ))}
    {/* inner petal ring, offset for a less mechanical flower */}
    {[30, 90, 150, 210, 270, 330].map((deg) => (
      <ellipse
        key={`inner-${deg}`}
        cx="104"
        cy="92"
        rx="12"
        ry="30"
        fill="#FADBD9"
        fillOpacity="0.62"
        transform={`rotate(${deg} 104 134)`}
      />
    ))}
    <circle cx="104" cy="134" r="13" fill="#D69589" fillOpacity="0.32" />
    <circle cx="104" cy="134" r="6" fill="#A38D89" fillOpacity="0.3" />
  </svg>
);

export const MakingTheUnexpectedSection: React.FC = () => {
  return (
    <section className="paper-grain-light relative pt-8 pb-10 lg:pt-12 lg:pb-14">
      {/* ——— Top metadata, closed with Project 1's header rule ——— */}
      <div className="reveal flex items-center gap-6 lg:gap-11">
        <span className="eyebrow text-[#3E2723]">03 / 04</span>
        <span className="block h-px w-8 lg:w-12 bg-[#705955]/30" aria-hidden="true" />
        <span className="eyebrow text-[#705955]">VISUAL MERCHANDISING</span>
      </div>
      <div className="rule-b-light mt-5" aria-hidden="true" />

      {/* ——— Upper: narrative left, process photographs right ——— */}
      <div className="mt-8 lg:mt-10 grid grid-cols-1 lg:grid-cols-[38fr_62fr] gap-x-10 lg:gap-x-12 items-start">
        <div className="relative">
          <h2 className="reveal reveal-d1 font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.98] tracking-tight text-[#3E2723] uppercase">
            {HEADING_LEAD}
            <br />
            {/* Set like the home page's project index figures — the same upright
                DM Serif Display `.index-figure` the 01/02/03/04 numerals use,
                in place of the italic editorial face. */}
            <span className="index-figure uppercase">{HEADING_TAIL}</span>
          </h2>

          <p className="reveal reveal-d2 mt-5 max-w-[42ch] font-body text-base text-[#3E2723]/80 leading-loose">
            {INTRO}
          </p>

          <div className="reveal mt-7 max-w-[46ch] space-y-4">
            <p className="font-body text-sm text-[#3E2723]/80 leading-relaxed">{PARA1}</p>
            <p className="font-body text-sm text-[#3E2723]/80 leading-relaxed">{PARA2}</p>
          </div>
        </div>

        {/* Three vertical cards, labels beneath, process sequence below them */}
        <div>
          <div className="grid grid-cols-3 gap-3 lg:gap-4">
            {PROCESS_CARDS.map((card, i) => (
              <figure
                key={card.label}
                className={`reveal ${i === 0 ? '' : i === 1 ? 'reveal-d1' : 'reveal-d2'} min-w-0`}
              >
                <div className="plate-light p-2 hover-zoom">
                  <div className="aspect-[3/4] overflow-hidden">
                    <SlidePhoto
                      src={card.src}
                      alt={card.alt}
                      label={card.label}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: card.position }}
                    />
                  </div>
                </div>
                <figcaption className="eyebrow mt-2.5 block bg-[#FADBD9] px-2 py-2.5 text-center text-[#3E2723]">
                  {card.label}
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Process sequence on a blush ground — Project 1's tinted flow panel */}
          <ol className="reveal mt-7 lg:mt-9 bg-[#FADBD9]/40 px-4 py-4 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-2 lg:gap-x-4">
            {PROCESS_STEPS.map((step) => (
              <li key={step} className="flex items-center gap-2.5 lg:gap-4">
                <span className="eyebrow text-[#3E2723]">{step}</span>
                {step !== PROCESS_STEPS[PROCESS_STEPS.length - 1] && (
                  <span aria-hidden="true" className="font-body text-sm leading-none text-[#D69589]">
                    &#8594;
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* ——— Lower: cost callout left, installation strip right ——— */}
      <div className="rule-t-light mt-12 pt-8 lg:mt-16 lg:pt-10 grid grid-cols-1 lg:grid-cols-[38fr_62fr] gap-x-10 lg:gap-x-12 items-end">
        <div className="relative">
          {/* cropped bloom, bleeding off the left edge of the viewport */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 lg:-left-32 -bottom-10 lg:-bottom-16 w-[220px] lg:w-[300px] opacity-75 select-none"
          >
            <DecorativeBloom />
          </div>

          {/* soft paint-stroke ground rather than a bordered card */}
          <div
            aria-hidden="true"
            className="absolute -inset-x-4 -inset-y-3 bg-[#FADBD9] rounded-[58%_42%_46%_54%/48%_56%_44%_52%] rotate-[-1.1deg] select-none"
          />

          <div className="relative py-4 lg:py-5">
            <p className="font-body text-sm text-[#3E2723]">{COST_LINE}</p>
            <p className="mt-3 max-w-[34ch] font-editorial italic text-xl sm:text-2xl text-[#7A2A2E] leading-snug">
              {COST_DESCRIPTION}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-[1.45fr_1fr_1fr] gap-2 lg:gap-3 h-[144px] lg:h-[188px]">
          {INSTALLATION_STRIP.map((frame, i) => (
            /* `h-full min-h-0` gives the chain below a definite height to
               resolve against. Without it the grid item is auto-height, every
               `h-full` underneath collapses to auto, and each frame falls back
               to its photograph's own aspect ratio — which would blow past the
               strip's declared height instead of cropping to it. */
            <div
              key={frame.src}
              className={`reveal ${i === 0 ? '' : i === 1 ? 'reveal-d1' : 'reveal-d2'} min-w-0 h-full min-h-0`}
            >
              <div className="plate-light p-2 h-full hover-zoom">
                <div className="h-full overflow-hidden">
                  <SlidePhoto
                    src={frame.src}
                    alt={frame.alt}
                    label={frame.alt}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: frame.position }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
