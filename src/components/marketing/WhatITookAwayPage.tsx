import React from 'react';
import { BrandMark, PeopleMark, SparkleMark } from './hunkyScrapbook';

/**
 * PROJECT 04, PAGE 02 — WHAT I TOOK AWAY
 *
 * Two columns. The left is the introduction — lockup, heading, rule, one
 * paragraph. The right is a calm editorial panel with three stacked learnings
 * and the result. Nothing is a grid in the content sense; the 12-column
 * container is only a way to hold the two widths apart.
 *
 * NO PHOTOGRAPHY ON THIS PAGE ANY MORE. The left column used to be a
 * hand-placed collage: six absolutely-positioned Print plates over a square
 * frame, each carrying the specification's own x, y, w and h percentages, its
 * own rotation, its own paper border and its own z-index, so the prints sat on
 * eight different planes. Every one of them pointed at a 04_takeaway_*.jpg file
 * that was never supplied, so all six were rendering as empty wordless plates
 * — a hand-built collage frame around six holes. They have been removed, along
 * with the square frame, the `m` mobile offsets, and the absolute positioning
 * that let the title sit in the negative space beside the largest print.
 *
 * The data went with them, and so did the `Print` and `Slot` imports, which
 * nothing else on this page uses. Git holds the removed strings — the six
 * labels, the alt text, and the coordinate tables — if any photograph is
 * supplied later and the collage is worth rebuilding.
 *
 * COLOUR. This page now sits on the blush ground, matching page 01 rather than
 * alternating against it, so the two boards read as one continuous piece of
 * pink paper rather than as a cream page following a pink one. No new hues —
 * the two stock colours simply changed places:
 *
 *   ground                 #FADBD9   blush
 *   icon disc              #F9F8F2   cream
 *   burgundy               #7A2A2E   wine   (the heading)
 *   text                   #3E2723   ink
 *
 * The icon discs had to swap with the ground. They were blush against a cream
 * page; left alone on a blush ground they would be invisible, which is the one
 * outcome worse than either colour being wrong. The winner callout has since
 * been removed from this page, so the disc is the only cream left here.
 *
 * The learning numerals are ink, not burgundy — the specification asks for
 * near-black there, and reserving the burgundy for the headline and the result
 * is what keeps the panel calm.
 */

const HEADING = ['What I', 'Took Away'] as const;

const INTRO =
  'The experience taught me how meaningful customer interactions can turn a brand activation into a memorable experience.';

const LEARNINGS = [
  {
    number: '01',
    icon: 'people',
    title: ['CUSTOMER INTERACTION'],
    description:
      'Learned to approach customers confidently, start conversations and make them comfortable participating.',
    divider: true,
  },
  {
    number: '02',
    icon: 'sparkle',
    title: ['CREATING MEMORABLE', 'EXPERIENCES'],
    description:
      'Learned how small details and personalised interactions can make a brand experience more memorable.',
    divider: true,
  },
  {
    number: '03',
    icon: 'people',
    title: ['TEAMWORK & EXECUTION'],
    description:
      'Learned to coordinate with my team while managing a live customer-facing activation.',
    divider: false,
  },
] as const;

/**
 * The six photographs, as a grid rather than a collage.
 *
 * The earlier version of this page scattered these six over a square frame as
 * absolutely-positioned prints, each on its own z-plane, at hand-chosen
 * coordinates. That arrangement only worked as a collage and read as one when
 * the files were missing; with real photographs in it, the overlap became the
 * subject. They are now a plain three-by-two grid, at their own ratios.
 *
 * SHOT 6 IS ROTATED, AND LEADS COLUMN TWO. The supplied file was 781x1280,
 * portrait, against 960x1280 for the other five. Rotating it 90 degrees to the
 * left turns it into a 1280x781 landscape at 1.639, where the others are 0.750.
 * The rotation is baked into the file rather than done with a CSS transform,
 * which is the cheaper and more honest way to do it: a transform rotates the
 * box but leaves the layout box at the original portrait size, so the image
 * would be laid out 781x1280 while painting a 1280x781 shape and hanging off
 * the row by the difference. Baking it means the intrinsic width and height
 * attributes describe what is actually on screen, so the reserved box is right
 * and there is no overflow to compensate for.
 *
 * Being the odd shape out, it is also the plate whose own height does not fill
 * its cell: at the width of a strip column it comes out a little over a third
 * as tall as the portraits beside it. That surplus is what `under` is for. The
 * WhatsApp crop is drawn flush against its bottom edge and takes the rest of
 * the cell, so the landscape and the crop together are exactly as tall as the
 * columns either side of them and no column is left short. See the notes on
 * each entry for why every plate in the strip carries a place.
 *
 * Alt text is deliberately generic. The earlier slots carried hand-written
 * descriptions of each scene, but those were written against files that were
 * never supplied, so they described photographs that did not exist. These are
 * named by their position instead of asserting a subject nobody has confirmed.
 */
/** One supplied file: where it lives, what shape it is, and what it shows. */
type Photo = {
  readonly id: string;
  readonly src: string;
  readonly w: number;
  readonly h: number;
  readonly alt: string;
  /** Set only where the displayed box must differ from the file's own ratio. */
  readonly box?: string;
};

/** A photo with a cell of its own to sit in. */
type Shot = Photo & {
  /** Explicit grid cell, so a shot can be pinned rather than auto-placed. */
  readonly place?: string;
  /**
   * Classes for the cell itself rather than for the plate inside it.
   *
   * Every cell in the strip carries one from lg up: a cell can be told what
   * shape it is, but a plate cannot be told to be the height of the cell it is
   * in. Below lg the strip is two columns of two, so the cells size themselves
   * from their own plates and this holds only the shape of the pair in column
   * two — CELL is the lg half of the same declaration.
   */
  readonly cell?: string;
  /**
   * A second photo drawn in the same cell, a gutter below this one.
   *
   * This is the one cell on the page that holds two photographs. It is what
   * makes the strip a set of columns rather than a set of plates: the plate
   * above keeps its own height, the plate under it takes whatever the cell has
   * left once the cell's own gutter is out of the way, and the two of them fill
   * the column from top to toe. Nothing is left between them but that gutter
   * and nothing is left under them.
   */
  readonly under?: Photo;
};

/**
 * The shape every cell in the strip takes from lg up: 232 wide to 367 tall.
 *
 * From lg the four cells sit side by side, and this is what makes them agree on
 * a height — each cell could otherwise be as tall as its own plate, which is
 * right below lg, where the strip is two columns of two and a cell is the only
 * thing in its row. Across the row, agreeing matters: the row has to end where
 * the last line of the learnings beside it ends, which is not a line any one
 * plate can find on its own.
 *
 * Written as a shape and not as a height because the strip is fluid. At 1512 a
 * column of it is 232px wide and the room between the strip's top and that last
 * line — "Learned to coordinate with my team while managing a live
 * customer-facing activation." — is 367px. Held as a ratio, every narrower
 * width keeps the same composition instead of inheriting an arbitrary pixel
 * height it did not earn.
 *
 * The literal has to appear as written for Tailwind v4 to compile it — see the
 * note on `Plate` — which is why this is a plain string and not a prefix.
 */
const CELL = 'lg:aspect-auto';

const SHOTS: readonly Shot[] = [
  { id: 'shot_1', src: '/portfolio-assets/04_takeaway_01.jpg', w: 960, h: 1280, alt: 'Photograph from the Hunkemöller activation, 1 of 6' },
  { id: 'shot_2', src: '/portfolio-assets/04_takeaway_02.jpg', w: 960, h: 1280, alt: 'Photograph from the Hunkemöller activation, 2 of 6' },

  /* COLUMN TWO: THE ROTATED LANDSCAPE, WITH THE WHATSAPP CROP UNDER IT.
   *
   * One cell, two photographs, and therefore one entry. `place` puts the pair
   * in column two, `under` stacks the crop below the landscape, and the cell's
   * own gap-2.5 holds the same 10px between the two of them that the strip
   * holds between its columns: one gutter, read the same way in both
   * directions.
   *
   * `cell` is what makes the pair work at all, and this is the cell the class
   * was written for: a cell can be told what shape it is, but a plate cannot be
   * told to be the height of the cell it is in. Left to measure itself, this
   * cell adds the two plates' heights together instead — and the lower plate's
   * file is a portrait, so the sum comes out at 462px where 368px was wanted,
   * which pushes the row down and leaves a 94px hole under the three columns
   * beside it. Pinning the cell at that shape takes the decision away from the
   * plates: the landscape keeps its own height, the crop takes what is left
   * after the gutter, and the two of them come to the height the other three
   * columns are. */
  {
    id: 'shot_6',
    src: '/portfolio-assets/04_takeaway_06.jpg',
    w: 1280,
    h: 781,
    alt: 'Photograph from the Hunkemöller activation, 6 of 6, shown rotated',
    place: 'sm:col-start-2 sm:row-start-1',
    cell: `gap-2.5 max-lg:aspect-[960/1280] ${CELL}`,

    /* THE WHATSAPP PHOTOGRAPH.
     *
     * The file is 960x1280, a portrait at 0.750, and the frame left for it is a
     * landscape one: a strip column wide and whatever height the landscape
     * above has not used. Nothing about that is aspect-ratio's work — a
     * portrait source in a landscape frame can only be filled by cropping, so
     * the box is flex-1 min-h-0 object-cover and the extra picture is cut away
     * rather than squeezed. The file's own width and height attributes are still
     * 960 and 1280, so the browser reserves the real shape and nothing lies
     * about what was supplied.
     *
     * That crop is worth stating plainly: covering a 0.750 source to the 1.08
     * box this cell leaves keeps about 70% of the frame's rows and cuts the
     * other 30% away, top and bottom. Nothing is stretched — the proportions
     * are honest — and most of the frame survives, but what is left is still a
     * horizontal band through the middle of a portrait. Handing the cell's
     * leftover height to this plate rather than to the landscape above it is
     * what keeps that band as deep as it can be: the taller the frame, the more
     * of the portrait is left in it, which is why the row growing taller to
     * reach the learnings beside it is good news for this plate in particular.
     *
     * min-h-0 is not decoration and not a duplicate of flex-1. An image's
     * automatic minimum height is its own content height, which here is the
     * 310px the file comes to at this width, so without it the plate refuses to
     * shrink to the 216px left for it and stands at its full height instead: it
     * runs 94px out of the bottom of its own cell and past the line the three
     * portraits beside it end on. Measured, not assumed. */
    under: {
      id: 'shot_3_replacement',
      src: '/portfolio-assets/04_takeaway_03_replacement.jpg',
      w: 960,
      h: 1280,
      alt: 'Photograph from the Hunkemöller activation, cropped to match the frame beneath the rotated shot',
      box: 'flex-1 min-h-0 lg:h-0 object-cover',
    },
  },

  /* COLUMNS THREE AND FOUR. One plate each, and neither needs a box of its
   * own: both files are 960x1280, a portrait at 0.750, and h-auto sizes the
   * box straight off that. What they do carry is CELL, the shape all four
   * columns agree on from lg up, which is what lets the row keep going down
   * past the height their own proportions would have ended at. */
  { id: 'shot_4', src: '/portfolio-assets/04_takeaway_04.jpg', w: 960, h: 1280, alt: 'Photograph from the Hunkemöller activation, 4 of 6', place: 'sm:col-start-3 sm:row-start-1', cell: CELL },
  { id: 'shot_5', src: '/portfolio-assets/04_takeaway_05.jpg', w: 960, h: 1280, alt: 'Photograph from the Hunkemöller activation, 5 of 6', place: 'sm:col-start-4 sm:row-start-1', cell: CELL },

  /* COLUMN ONE: THE ORIGINAL IMAGE 3.
   *
   * This is the photograph that was originally in slot 3. It opened the second
   * row of the strip, in column one, underneath a cell that held nothing: the
   * top of column one was empty, so this plate sat a full row and a gutter
   * below the introduction with 370px of blush between them. It now takes the
   * cell that was empty, which is what closes that hole — the plate starts
   * where the paragraph above it ends, and every column in the strip is filled
   * from its first row down.
   *
   * No box override, because below lg none is needed. The file is 960x1280, a
   * portrait at 0.750, and h-auto sizes its box straight off that at its own
   * proportions with no crop and no letterbox. At lg the cell is the taller
   * CELL shape instead, so the plate fills it with object-cover and about 8% of
   * the frame goes off each side — see the note on `Plate`. */
  { id: 'shot_3', src: '/portfolio-assets/04_takeaway_03.jpg', w: 960, h: 1280, alt: 'Photograph from the Hunkemöller activation, 3 of 6', place: 'sm:col-start-1 sm:row-start-1', cell: CELL },
] as const;

/**
 * The photographs are used in two places on this page, so the list is split
 * rather than duplicated. Nothing is duplicated and nothing is dropped — LEAD is
 * the first two entries in the list, REST is everything after them.
 *
 * There are seven photographs and six entries, because column two of the strip
 * draws two of them in one cell. The WhatsApp photograph is the `under` of shot
 * 6 rather than an entry of its own, so it travels with the plate it belongs
 * beneath and cannot drift away from it.
 *
 * The split exists because the introduction has a hole in it. The heading is two
 * lines and the intro is capped at 270px, which together fill barely half of a
 * col-span-8 column, leaving the right side of that column empty from the
 * heading all the way down to the strip. The two photographs go there rather
 * than being pulled up above the heading, because pulling them up leaves the
 * hole exactly where it was and only moves the pictures into the type.
 */
const LEAD_SHOTS = SHOTS.slice(0, 2);
const REST_SHOTS = SHOTS.slice(2);

/* ——— One photograph ————————————————————————————————————————— */

/**
 * A plate, drawn the way every photograph on this page is drawn: full column
 * width, its own proportions, and the same hairline.
 *
 * It takes a `Photo` rather than a `Shot`, so a plate that shares a cell can be
 * passed straight through — the nested one has no place of its own to be
 * pinned with, and no `place` in its class string either.
 *
 * `box` is optional and absent on most plates, so both entries fall back to
 * h-auto, which sizes the box straight off the file's own ratio. Where it is
 * set it is interpolated as a whole class name rather than built from a
 * prefix: Tailwind v4 scans raw source text for candidate class names, so a
 * `box-${...}` would compile to a rule that matches nothing and fail silently.
 * The full class names therefore have to appear literally somewhere, which is
 * why they live in the SHOTS entries and not in here.
 *
 * Eager is for the pair beside the heading, which is the first thing on the
 * page after the lockup; everything else in the section waits for the scroll.
 *
 * `fill` is for the cells that grew. From lg a cell in the strip is the CELL
 * shape, and a 0.750 portrait is not that shape: at 1512 the cell is 368px tall
 * where the portrait's own proportions come to 310px, so a plate left on h-auto
 * would sit in its cell at its own height and leave the other 58px as blush.
 * Filled, the plate takes the cell's whole height and object-cover trims the
 * surplus off the sides, which is the same bargain the WhatsApp crop makes, for
 * the same reason: the frame is the shape the layout needs and the picture
 * inside it is cropped rather than squeezed. Below lg the two classes are
 * switched off and every plate is back on its own proportions, because there a
 * cell is only as tall as its plate and there is nothing to fill.
 */
const Plate: React.FC<{ photo: Photo; loading?: 'eager' | 'lazy'; fill?: boolean }> = ({
  photo,
  loading = 'lazy',
  fill = false,
}) => (
  <img
    src={photo.src}
    alt={photo.alt}
    width={photo.w}
    height={photo.h}
    loading={loading}
    decoding="async"
    className={`block w-full border border-[#705955]/25 ${
      fill ? 'max-lg:h-auto lg:h-0 lg:flex-1 lg:min-h-0 lg:object-cover' : (photo.box ?? 'h-auto')
    }`}
  />
);

export const WhatITookAwayPage: React.FC = () => {
  return (
    <div className="paper-grain-light bg-[#FADBD9]">
      <div className="px-5 sm:px-5 lg:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 lg:gap-x-8">
          {/* ——— LEFT 67%: the introduction ———————————————————

              This column used to hold the six-photograph collage — a square
              frame with six Print plates absolutely positioned over it, and
              this whole block floated out of the flow so the title could sit
              in the negative space beside the largest photograph. All of that
              is gone.

              What replaces it is the same four things in normal flow: the
              lockup, the heading, the short rule and the intro. Nothing is
              positioned, so the percentages that anchored them to the collage —
              left-[7%], top-[5%], top-[13.5%], top-[25.5%], top-[35%] — have
              nothing to measure against and are removed rather than left to
              resolve against a box that is now only as tall as the type.

              The lg:contents wrapper went for the same reason. It existed to
              let these four children escape this column and share the grid
              with the collage frame; with one child instead of five there is
              nothing to share, and it was only adding a level of nesting.

              The column keeps col-span-8 and the right panel keeps col-span-4,
              so the two-column composition and the panel's own left padding
              are unchanged. The left column is simply short now — type at the
              top, cream below it — which is what a text-only introduction
              looks like beside a tall list. */}
          <div className="lg:col-span-8 flex flex-col lg:pb-[4.375rem]">
            <BrandMark align="left" />

            {/* The introduction and the two photographs sit side by side from lg
                up, so the photographs land in the empty right-hand side of this
                column instead of below the text. Below lg it is a single
                column and the photographs simply follow the intro, which is the
                only order that works on a phone.

                items-end puts both children on one baseline. The text block is
                about 220px tall — two heading lines, the rule, and a 270px
                intro of roughly four lines — and a pair of portraits at the
                width this column gives them is close to that again, so the
                two land on a shared floor. Top-aligning instead would leave a
                visible step where the photographs start above the heading.

                The split is 5/7, not 6/6, because the photographs are the part
                that was too small. Handing them seven of the twelve columns
                takes them from 172px to 246px wide at the far end of the
                range — 328px tall for a portrait, which reads as a photograph
                rather than a thumbnail — and costs the type 145px, which it
                does not need. At the lg breakpoint the same split gives the
                heading 253px and each photograph 165px; the heading's two hard
                lines are about 200px at that size, so it still fits without
                rewrapping, and the intro keeps its 270px cap either way.

                Going further than 5/7 stops being free. Below five columns the
                heading begins to crowd, and the only way to make the pictures
                materially bigger than this is to give the section back to one
                column and stack them — which puts the empty space back. */}
            <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-8 lg:items-end">
              <div className="lg:col-span-5">
                <h1 className="mt-9 font-editorial text-[clamp(2.5rem,4.6vw,3.1875rem)] leading-[0.91] tracking-[-0.01em] text-[#7A2A2E]">
                  {HEADING[0]}
                  <br />
                  <span className="italic">{HEADING[1]}</span>
                </h1>

                <span className="block h-px w-[130px] bg-[#705955]/55 mt-6" aria-hidden="true" />

                <p className="mt-6 w-full max-w-[270px] font-body text-sm leading-[1.5] text-[#3E2723]/85">
                  {INTRO}
                </p>
              </div>

              {/* The two photographs filling the gap to the right of the type.
                  Plate's own default: h-auto with no aspect class, so the
                  height comes from each file's own ratio and nothing is cropped
                  or letterboxed. Eager, because they are beside the heading and
                  therefore the first thing on the page after the lockup. */}
              <div className="mt-8 grid grid-cols-2 gap-x-6 items-start lg:col-span-7 lg:mt-0">
                {LEAD_SHOTS.map((shot) => (
                  <Plate key={shot.id} photo={shot} loading="eager" />
                ))}
              </div>
            </div>

            {/* The remaining photographs, as a strip under the introduction.

                Four across from sm up rather than three. With three, four
                photographs leave one stranded alone on the second row, and a
                lone photograph at the end of a strip reads as a mistake. Four
                across gives one clean row on desktop and a 2x2 on a phone,
                with no orphan in either case. h-auto again, so the rotated
                landscape sets its own height and is not distorted to match the
                portraits beside it.

                Two across was tried here and reverted. It doubled each
                photograph to 446px, which was more than the lead pair beside
                the heading — so the supporting four outranked the two that
                introduce the section, and the page ended up a stack of very
                large photographs with the opening idea buried under them.
                Four across keeps a strip cell at 232px and the pair at 261px, so
                the eye lands on the two beside the heading first and then
                reads the rest as supporting evidence. That ordering is the
                whole reason the strip is a strip.

                The strip is four columns in one row, and every column is
                filled from top to toe. Shot 3, the photograph the earlier
                layout left on a second row under a cell that held nothing, now
                opens column one directly under the introduction; shot 6 leads
                column two with the WhatsApp crop pinned flush beneath it;
                shots 4 and 5 keep columns three and four. All four cells are
                pinned by literal class names in SHOTS — every one of them on
                CELL — because one unpinned plate would let the browser reflow
                everything after it and pull the landscape out of its column.

                Nothing is left hanging in it. The gutters are 10px, small
                enough to read as the edge between two plates rather than as a
                band of blush, and they are the same 10px in every direction:
                across the four columns, down the two rows the strip becomes
                below sm, and between the two plates stacked in column two. One
                measurement read three ways, which is what makes the mosaic look
                like one grid instead of a pile of pictures.

                They are also the last 14px of width the plates were not using:
                a cell was 222px against a 24px gutter and is 232px against a
                10px one, which is most of the small increase in size and none
                of the repositioning, because the strip still starts and ends on
                the same two edges it did before.

                The row's height comes from CELL rather than from any one file.
                With all four cells on that shape the plates reach down to the
                last line of the learnings beside them — 368px at 1512, against
                the 295px their own proportions come to — so the section no
                longer ends with the pictures stopping short and a band of blush
                under them. The strip also carries no top margin from lg up: it
                starts on the line where the lead pair and the introduction
                end, which is what puts the plate in column one against the
                bottom of the paragraph above it, and what closes the 370px of
                empty column that used to sit between them. Below lg the two
                are stacked in a single column and the strip keeps its mt-12,
                because there it is a second block of pictures rather than the
                same row.

                Each cell is a column rather than a bare plate, which is what
                lets column two hold two photographs and still leave nothing
                behind: the landscape takes its own height at the top of the
                cell, the WhatsApp crop is flex-1 and fills what is left once
                the gutter is out of the way, and the two of them come to the
                height CELL gives the columns beside them. That slack lands
                inside the plate rather than under it, and the plate is better
                for it: a deeper landscape frame crops less of the portrait
                inside it than the shallow one the crop used to be given — 30%
                of the frame's rows now, against 46%. Nothing is stretched — the
                crop stays a crop. */}

            <div className="mt-12 grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:mt-0 lg:flex-1 lg:min-h-0 lg:max-h-[29rem]">
              {REST_SHOTS.map((shot) => (
                // One cell per column, and the cell is a flex column so that a
                // second plate can be hung under the first: stretched to the
                // row's own height, an `under` plate that is flex-1 takes up
                // the difference and the two fill the column. A cell with a
                // single plate is a flex column with one child, and from lg
                // that child is filled rather than sized by its own file — the
                // cell is the taller CELL shape, so there is a difference for
                // it to fill.
                //
                // self-stretch is written out rather than inherited from the
                // grid, where it is the default. It is the same value twice, so
                // it changes nothing today; what it buys is that an items-start
                // added to the grid later cannot quietly collapse the under
                // plate to zero height, which is how two plates would come out
                // as one.
                <div
                  key={shot.id}
                  className={`flex flex-col self-stretch ${shot.place ?? ''} ${
                    shot.cell ?? ''
                  }`}
                >
                  <Plate photo={shot} fill={!shot.under} />
                  {shot.under && <Plate photo={shot.under} />}
                </div>
              ))}
            </div>
          </div>

          {/* ——— RIGHT 33%: the calm panel —————————————————

              The winner callout used to sit under the three learnings — a cream
              box carrying HUNKEMÖLLER × BACARDI, a short rule, WINNER and
              1 OF 4 GROUPS, with the closing sentence below it. Both halves
              are gone: the box and the sentence with it.

              justify-between is now doing nothing, because the column has a
              single child. It is left in place rather than swapped for
              justify-start, which would be identical here and would be a second
              change to the same line. */}
          <div className="lg:col-span-4 flex flex-col justify-between lg:py-[4.375rem] lg:pr-[3.4375rem] lg:pl-[4.0625rem] mt-14 lg:mt-0">
            <div>
              {LEARNINGS.map((item, i) => (
                <Learning key={item.number} item={item} first={i === 0} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ——— One learning section ————————————————————————————————— */

/**
 * A blush disc, the numeral to its right, and a hairline running from after the
 * numeral out to the panel edge on the same baseline — then the uppercase
 * title and the sentence beneath. The rule is what separates these three from
 * cards: no boxes, no fills, no rounded anything.
 */
const Learning: React.FC<{ item: (typeof LEARNINGS)[number]; first: boolean }> = ({ item, first }) => (
  <div className={item.divider ? 'rule-t-light pt-[2.1875rem]' : 'pt-[2.1875rem]'}>
    {!first && <div className="h-[0.625rem]" aria-hidden="true" />}

    <div className="flex items-center gap-5">
      <div className="shrink-0 grid h-[4.25rem] w-[4.25rem] place-items-center rounded-full bg-[#F9F8F2]">
        {item.icon === 'sparkle' ? <SparkleMark size={31} /> : <PeopleMark size={33} />}
      </div>

      <p className="font-editorial text-[2.125rem] leading-none text-[#3E2723] shrink-0">{item.number}</p>

      <span className="block h-px flex-1 bg-[#705955]/45" aria-hidden="true" />
    </div>

    <h2 className="mt-6 eyebrow text-[0.75rem] tracking-[0.25em] text-[#3E2723]">
      {item.title.map((line, k) => (
        <React.Fragment key={line}>
          {line}
          {k < item.title.length - 1 && <br />}
        </React.Fragment>
      ))}
    </h2>

    <p className="mt-3 font-body text-sm leading-[1.5] text-[#3E2723]/85">{item.description}</p>
  </div>
);
