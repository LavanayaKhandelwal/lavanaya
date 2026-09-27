import React from 'react';
import { SlidePhoto } from '../SlidePhoto';
import { portfolioData } from '../../data/portfolioData';

/**
 * PROJECT 2 — PAGE 02, "WHERE THE CONCEPT TOOK SHAPE"
 *
 * A two-column editorial page: the five-stage concept evolution on the left,
 * an art-directed moodboard plus the colour palette on the right.
 *
 * No card. The page is a continuous run of the cream ground — no border, no
 * plate fill, no inset box — so it reads as one page with the rest of the case
 * study rather than a panel floating on it.
 *
 * Every line of copy is the project's own record — the page title and subtitle
 * are `page2Brief.briefTitle` / `briefText`, the first three stages are the
 * `whatIInvestigated` pillars, the fourth is `designInsight`, the fifth is
 * `conceptSummary`, and the five stage names are `howIReachedTheConcept`.
 *
 * Colour is the home page's light palette, not the spec's own hex values:
 * cream and plate grounds, brown ink, taupe hairlines, terracotta accents.
 * No gradients, no shadows, no blur.
 */

interface StagePhoto {
  src: string;
  alt: string;
  /** Crops the same file differently when a photo appears twice. */
  position?: string;
}

const TIMELINE_PHOTOS: StagePhoto[] = [
  {
    src: '/portfolio-assets/project-coverstory-bloom.png',
    alt: 'Cover Story — the brand the concept grew out of',
    position: '50% 40%',
  },
  {
    src: '/portfolio-assets/BRAND BOOK  - 16.png',
    alt: 'Spring / Summer mood board collage',
    position: '50% 30%',
  },
  {
    src: '/portfolio-assets/BRAND BOOK  - 1.png',
    alt: 'Cover Story brand dossier',
    position: '50% 35%',
  },
  {
    src: '/portfolio-assets/1e36b3dd-85f2-438b-b90a-e7143dbd03cd.jpg',
    alt: 'Holographic sheets cut into layered petals',
    position: '50% 45%',
  },
  {
    src: '/portfolio-assets/DD05B299-B533-4126-B54A-3B48CD3AA413.jpg',
    alt: 'The mannequin framed by florals, texture and light',
    position: '50% 40%',
  },
];

interface Frame {
  /** Flex weight — the only thing that sets a frame's height, so unequal
        weights are what make the collage read as art-directed. */
  grow: string;
  photo: StagePhoto;
}

/**
 * The moodboard: three columns of unequal width, each with its own top and
 * bottom inset so no two columns start or end on the same line, and each
 * holding a different number of frames at different heights.
 *
 * The arrangement is fixed on purpose — a randomised layout would reshuffle on
 * every render. The irregularity is designed, not generated: widths, insets
 * and weights all differ per column and per frame.
 */
const COLLAGE: { width: string; inset: string; frames: Frame[] }[] = [
  {
    width: '1.2fr',
    inset: '',
    frames: [
      {
        grow: 'flex-[1.55]',
        photo: {
          src: '/portfolio-assets/project-visual-merchandising-hero.png',
          alt: 'Cover Story storefront window display',
          position: '50% 45%',
        },
      },
      {
        grow: 'flex-1',
        photo: {
          src: '/portfolio-assets/6fa49fa5-d790-4c76-9f00-69ca01bfcdc2.jpg',
          alt: 'Wire and foam armature giving the florals dimension',
          position: '50% 50%',
        },
      },
      {
        grow: 'flex-[0.8]',
        photo: {
          src: '/portfolio-assets/97e20f9d-778d-44a3-bc5f-d32b6c39b7a3.jpg',
          alt: 'Lighting enhancing the reflective surfaces',
          position: '35% 60%',
        },
      },
    ],
  },
  {
    width: '0.78fr',
    inset: 'pt-9 pb-20 lg:pt-14 lg:pb-28',
    frames: [
      {
        grow: 'flex-[1.7]',
        photo: {
          src: '/portfolio-assets/7eee7676-2ce8-4667-9ef7-abf624ba1833.jpg',
          alt: 'Organza adding softness to the display',
          position: '50% 45%',
        },
      },
      {
        grow: 'flex-[0.9]',
        photo: {
          src: '/portfolio-assets/BRAND BOOK  - 18.png',
          alt: 'Spring / Summer colour harmony board',
          position: '50% 50%',
        },
      },
    ],
  },
  {
    width: '1fr',
    inset: 'pt-16 pb-7 lg:pt-24 lg:pb-11',
    frames: [
      {
        grow: 'flex-[0.85]',
        photo: {
          src: '/portfolio-assets/1e36b3dd-85f2-438b-b90a-e7143dbd03cd.jpg',
          alt: 'Layered holographic petals, close crop',
          position: '70% 40%',
        },
      },
      {
        grow: 'flex-[1.6]',
        photo: {
          src: '/portfolio-assets/project-coverstory-bloom.png',
          alt: 'Future Florals, close crop',
          position: '30% 60%',
        },
      },
    ],
  },
];

export const ConceptToShapeSection: React.FC = () => {
  const { projectVM: vm } = portfolioData;
  const {
    briefTitle,
    briefText,
    whatIInvestigated,
    howIReachedTheConcept,
    designInsight,
    conceptSummary,
  } = vm.page2Brief;

  /* The page breaks "Where the Concept Took Shape" after the concept, so the
     second line can carry the italic. Split on the last two words. */
  const titleWords = briefTitle.split(' ');
  const titleLead = titleWords.slice(0, -2).join(' ');
  const titleTail = titleWords.slice(-2).join(' ');

  const stages = [
    { heading: whatIInvestigated[0].pillar, body: whatIInvestigated[0].points[0] },
    { heading: whatIInvestigated[1].pillar, body: whatIInvestigated[1].points[0] },
    { heading: whatIInvestigated[2].pillar, body: whatIInvestigated[2].points[0] },
    { heading: howIReachedTheConcept[3], body: designInsight },
    { heading: 'AND THAT BECAME', body: conceptSummary },
  ];

  return (
    <section className="paper-grain-light pb-10 mb-24 lg:pb-14 lg:mb-32">
      {/* ——— Solid ink bar, full-bleed — Project 1's page opener ——— */}
      <div className="-mx-5 sm:-mx-8 lg:-mx-12 mb-8 lg:mb-10 h-3.5 bg-[#3E2723]" aria-hidden="true" />

      {/* ——— Top metadata, closed with Project 1's header rule ——— */}
      <div className="flex items-center gap-6 lg:gap-11">
        <span className="eyebrow text-[#3E2723]">02 / 04</span>
        <span className="block h-px w-8 lg:w-12 bg-[#705955]/30" aria-hidden="true" />
        <span className="eyebrow text-[#705955]">VISUAL MERCHANDISING</span>
      </div>
      <div className="rule-b-light mt-5" aria-hidden="true" />

      <div className="mt-8 lg:mt-10 grid grid-cols-1 lg:grid-cols-[56fr_44fr] gap-x-10 gap-y-12 lg:gap-x-12">
        {/* ——— Left column: title, subtitle, five-stage timeline ——— */}
        <div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.98] tracking-tight text-[#3E2723] uppercase">
            {titleLead}
            <br />
            <span className="font-editorial italic">{titleTail}</span>
          </h2>

          <p className="mt-4 max-w-[46ch] font-body text-base text-[#3E2723]/80 leading-loose">
            {briefText}
          </p>

          <ol className="rule-t-light mt-8 lg:mt-10 pt-7">
            {stages.map((stage, i) => (
              <li key={stage.heading} className="grid grid-cols-[auto_1fr] gap-4 lg:gap-5 items-stretch">
                {/* Circle + connector — the photo sits in a blush mount, the
                    tinted-disc device Project 1 uses behind its own imagery */}
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-[#FADBD9]/40 p-1.5 flex-shrink-0">
                    <div className="w-14 h-14 lg:w-[3.625rem] lg:h-[3.625rem] rounded-full overflow-hidden">
                      <SlidePhoto
                        src={TIMELINE_PHOTOS[i].src}
                        alt={TIMELINE_PHOTOS[i].alt}
                        label={stage.heading}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: TIMELINE_PHOTOS[i].position }}
                        frameRadius="rounded-full"
                      />
                    </div>
                  </div>
                  {i < stages.length - 1 ? (
                    <span className="w-px flex-1 mt-2.5 mb-2.5 bg-[#705955]/30" aria-hidden="true" />
                  ) : (
                    /* keeps the last label on the same baseline as the rest */
                    <span className="w-px flex-1 mt-2.5" aria-hidden="true" />
                  )}
                </div>

                {/* Copy */}
                <div className="pb-7 lg:pb-9 last:pb-0">
                  <h3 className="eyebrow text-[#3E2723]">{stage.heading}</h3>
                  <p className="mt-2 max-w-[48ch] font-body text-sm text-[#3E2723]/80 leading-relaxed">
                    {stage.body}
                  </p>

                  {i === stages.length - 1 && (
                    <p className="mt-3 font-editorial italic text-2xl lg:text-[1.75rem] leading-none text-[#3E2723]">
                      {howIReachedTheConcept[4]}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* ——— Right column: moodboard + palette ——— */}
        <div className="flex items-stretch gap-3 lg:gap-5">
          <div
            className="flex-1 min-w-0 grid gap-1.5 lg:gap-2 h-[78vw] min-h-[420px] sm:h-[58vw] lg:h-[660px] xl:h-[740px]"
            style={{ gridTemplateColumns: COLLAGE.map((col) => col.width).join(' ') }}
          >
            {COLLAGE.map((col) => (
              <div
                key={col.width}
                className={`flex flex-col gap-1.5 lg:gap-2 min-h-0 ${col.inset}`}
              >
                {col.frames.map((frame) => (
                  <div key={frame.photo.src + frame.grow} className={`${frame.grow} min-h-0 overflow-hidden`}>
                    <SlidePhoto
                      src={frame.photo.src}
                      alt={frame.photo.alt}
                      label={frame.photo.alt}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: frame.photo.position }}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Five swatches from the project's own colour board, on a blush band */}
          <ul className="flex flex-col justify-center gap-2.5 lg:gap-3 shrink-0 self-stretch bg-[#FADBD9]/40 px-2.5 lg:px-3 py-4">
            {vm.page3Boards.colourBoard.palette.map((colour) => (
              <li
                key={colour.name}
                className="w-4 h-4 lg:w-[1.125rem] lg:h-[1.125rem] rounded-full ring-1 ring-[#705955]/28"
                style={{ backgroundColor: colour.hex }}
                title={colour.name}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
