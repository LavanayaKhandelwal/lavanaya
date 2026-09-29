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
interface FramePhoto extends StagePhoto {
  number: string;
  tag: string;
}

const STAGE_FRAMES: FramePhoto[] = [
  {
    src: '/portfolio-assets/project2-trend-board.jpg',
    alt: 'Trend board — future floral direction and reference imagery for the season',
    position: '50% 50%',
    number: '01',
    tag: 'TREND BOARD',
  },
  {
    src: '/portfolio-assets/project2-mood-board.jpg',
    alt: 'Mood board — feminine, dreamy and soft with a futuristic edge',
    position: '50% 50%',
    number: '02',
    tag: 'MOOD BOARD',
  },
  {
    src: '/portfolio-assets/project2-colour-board.jpg',
    alt: 'Colour board — blush, lavender and sky blue swatch matrix',
    position: '50% 50%',
    number: '03',
    tag: 'COLOUR BOARD',
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
  const { colourBoard } = vm.page3Boards;

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
    <section className="paper-grain-light relative -mx-5 sm:-mx-8 lg:-mx-12 bg-[#FADBD9]">
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

          {/* ——— Right column: three horizontal frames in designed border boxes with gaps ——— */}
          <div className="flex items-stretch">
            <div className="flex-1 min-w-0 flex flex-col gap-4 lg:gap-5 h-[84vw] min-h-[460px] sm:h-[62vw] lg:h-[700px] xl:h-[780px]">
              {STAGE_FRAMES.map((frame) => (
                <div
                  key={frame.src}
                  className="group relative flex-1 min-h-0 p-2 sm:p-2.5 bg-[#FDFCF8] border-[1.5px] border-[#705955]/35 rounded-lg shadow-[0_4px_16px_rgba(62,39,35,0.06)] hover:border-[#3E2723] hover:shadow-[0_8px_24px_rgba(62,39,35,0.12)] transition-all duration-300 flex flex-col"
                >
                  <div className="relative flex-1 min-h-0 w-full overflow-hidden rounded-md border border-[#705955]/20 bg-[#F8E5D7]/30">
                    <SlidePhoto
                      src={frame.src}
                      alt={frame.alt}
                      label={frame.alt}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                      style={{ objectPosition: frame.position }}
                    />
                    <div className="absolute top-2.5 left-2.5 z-10 px-2.5 py-1 bg-[#3E2723]/90 text-[#FDFCF8] font-body text-[10px] tracking-widest uppercase font-semibold rounded-xs shadow-xs pointer-events-none backdrop-blur-xs">
                      {frame.number} / {frame.tag}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ——— The palette, pulled out of the colour board and set as itself.
                 The colour board is one of the three frames above, but a board
                 is only ever a photograph of the decision; these five swatches
                 are the decision — the exact values, named, in the order they
                 were chosen. `page3Boards.colourBoard` had been sitting in the
                 data unrendered until this strip, which is why the board above
                 read as an anonymous image. ——— */}
        <div className="rule-t-light mt-10 lg:mt-14 pt-7 lg:pt-9">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <span className="eyebrow text-[#3E2723]">THE PALETTE</span>
            <span className="eyebrow text-[#705955]">
              {colourBoard.palette.length.toString().padStart(2, '0')} COLOURS
            </span>
          </div>

          <p className="mt-4 max-w-[62ch] font-body text-sm text-[#3E2723]/80 leading-relaxed">
            {colourBoard.content}
          </p>

          {/* Five swatches. The mounts are the same framed cards the boards
              directly above now use — white ground, taupe hairline, rounded,
              one soft shadow — so the strip reads as part of that column's
              language rather than a separate component. The mount also does
              real work here: the Soft Blush swatch is the pink of this band's
              own ground, and without it the swatch would dissolve into it. */}
          <ul className="mt-6 lg:mt-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
            {colourBoard.palette.map((swatch) => (
              <li key={swatch.hex}>
                <div className="p-2 bg-[#FDFCF8] border-[1.5px] border-[#705955]/35 rounded-lg shadow-[0_4px_16px_rgba(62,39,35,0.06)] hover:border-[#3E2723] hover:shadow-[0_8px_24px_rgba(62,39,35,0.12)] transition-all duration-300">
                  <div
                    className="h-20 lg:h-24 2xl:h-28 rounded-md border border-[#705955]/20"
                    style={{ backgroundColor: swatch.hex }}
                    role="img"
                    aria-label={`${swatch.name} swatch, ${swatch.hex}`}
                  />
                </div>
                <p className="mt-2.5 eyebrow text-[#3E2723]">{swatch.name}</p>
                <p className="mt-1 font-mono-code text-[0.6875rem] tracking-[0.08em] text-[#705955]">
                  {swatch.hex.toUpperCase()}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
