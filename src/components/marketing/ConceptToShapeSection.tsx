import React from 'react';
import { SlidePhoto } from '../SlidePhoto';
import { portfolioData } from '../../data/portfolioData';

/**
 * PROJECT 2 — PAGE 02, "WHERE THE CONCEPT TOOK SHAPE"
 *
 * A two-column editorial page: the five-stage concept evolution on the left,
 * three horizontal frames running the full height of the section on the right.
 *
 * No card, but the ground is no longer the cream of the rest of the case study
 * either — this page is the palette's pink, run edge to edge. The negative
 * margins cancel the page padding and the inner wrapper puts it back, so the
 * band is full-bleed while the content still lines up with its neighbours.
 * Whatever used to be a blush tint on cream is now the plate white, so it
 * still reads against the pink.
 *
 * Every line of copy is the project's own record — the page title and subtitle
 * are `page2Brief.briefTitle` / `briefText`, the first three stages are the
 * `whatIInvestigated` pillars, the fourth is `designInsight`, the fifth is
 * `conceptSummary`, and the five stage names are `howIReachedTheConcept`.
 *
 * Colour is the home page's light palette on the palette's pink ground, not the
 * spec's own hex values. No gradients, no shadows, no blur.
 */

interface StagePhoto {
  src: string;
  alt: string;
  position?: string;
}

/**
 * One circular icon per stage of the timeline, in order.
 *
 * These are purpose-shot near-square frames, one per stage, so the disc crops
 * them almost square-on and the position barely moves the crop — it is centred
 * throughout. The three big frames in the right column are separate files; a
 * photograph never appears in both.
 */
const TIMELINE_PHOTOS: StagePhoto[] = [
  {
    src: '/portfolio-assets/project2-circle-1.jpg',
    alt: 'Cover Story — the brand the concept grew out of',
    position: '50% 50%',
  },
  {
    src: '/portfolio-assets/project2-circle-2.jpg',
    alt: 'Spring / Summer direction for the season',
    position: '50% 50%',
  },
  {
    src: '/portfolio-assets/project2-circle-3.jpg',
    alt: 'Floral form and reference material',
    position: '50% 50%',
  },
  {
    src: '/portfolio-assets/project2-circle-4.jpg',
    alt: 'Florals reimagined in holographic material',
    position: '50% 50%',
  },
  {
    src: '/portfolio-assets/project2-circle-5.jpg',
    alt: 'Future Florals — the finished concept',
    position: '50% 50%',
  },
];

/**
 * The page's right column: three horizontal frames, one above the other,
 * running the full height of the section.
 *
 * They replace the old seven-frame collage. The column keeps the box it always
 * had — same width, same `h-[78vw] / sm:h-[58vw] / lg:h-[660px] / xl:h-[740px]`
 * height ladder — and the three frames simply divide that box evenly, so the
 * section's proportions are untouched. Only the contents of the box changed.
 *
 * The three frames are the project's own boards — trend, mood, colour — each
 * centred, since all three are wide and near-square in proportion and the frame
 * is far wider still.
 */
const STAGE_FRAMES: StagePhoto[] = [
  {
    src: '/portfolio-assets/project2-trend-board.jpg',
    alt: 'Trend board — future floral direction and reference imagery for the season',
    position: '50% 50%',
  },
  {
    src: '/portfolio-assets/project2-mood-board.jpg',
    alt: 'Mood board — feminine, dreamy and soft with a futuristic edge',
    position: '50% 50%',
  },
  {
    src: '/portfolio-assets/project2-colour-board.jpg',
    alt: 'Colour board — blush, lavender and sky blue swatch matrix',
    position: '50% 50%',
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
    /* The negative margins cancel the page's side padding so the pink runs
       edge to edge, and the inner wrapper puts that padding back. */
    <section className="paper-grain-light relative -mx-5 sm:-mx-8 lg:-mx-12 bg-[#FADBD9] mb-24 lg:mb-32">
      {/* No ink rule on this band. Project 1 opens a page with the full-bleed
          ink bar — see ConceptToLifeSection — but it only ever sits on the cream
          ground with margin above and below it. Here the band begins the
          instant the cover photograph ends, so the same bar would land flush
          under the image and read as a dark seam between the hero and the pink.
          The colour break is the opening instead, exactly as it is on Project 1's
          own blush band. */}
      <div className="px-5 sm:px-8 lg:px-12 pt-8 pb-12 lg:pt-10 lg:pb-16">
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
                  {/* Circle + connector — the photo fills the disc edge to edge.
                      There is no plate mount around it: the white ring that used
                      to sit behind these icons cropped the photograph back to
                      the inner circle, so now the disc is the photograph itself.
                      Its diameter is the mount's old 68/70px, which keeps the
                      connector column and the vertical rhythm exactly as they
                      were. `frameRadius` still rounds the fallback frame, so an
                      empty slot is a circle rather than a clipped square. */}
                  <div className="flex flex-col items-center">
                    <div className="w-[4.25rem] h-[4.25rem] lg:w-[4.375rem] lg:h-[4.375rem] rounded-full overflow-hidden flex-shrink-0">
                      <SlidePhoto
                        src={TIMELINE_PHOTOS[i].src}
                        alt={TIMELINE_PHOTOS[i].alt}
                        label={stage.heading}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: TIMELINE_PHOTOS[i].position }}
                        frameRadius="rounded-full"
                      />
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
                    <h3 className="eyebrow font-bold text-[#3E2723]">{stage.heading}</h3>
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

          {/* ——— Right column: three horizontal frames, spread the full
                   height of the section ——— */}
          <div className="flex items-stretch gap-3 lg:gap-5">
            <div className="flex-1 min-w-0 flex flex-col gap-1.5 lg:gap-2 h-[78vw] min-h-[420px] sm:h-[58vw] lg:h-[660px] xl:h-[740px]">
              {STAGE_FRAMES.map((frame) => (
                <div key={frame.src} className="flex-1 min-h-0 overflow-hidden">
                  <SlidePhoto
                    src={frame.src}
                    alt={frame.alt}
                    label={frame.alt}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: frame.position }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
