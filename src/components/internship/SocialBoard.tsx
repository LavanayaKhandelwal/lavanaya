import React from 'react';
import { SectionLabel, useBoardScale } from './aadiyaMarks';
import { AiCollage, ContentCalendar, PhoneMockups } from './aadiyaProcess';
import { AnalyticsLaptop, PostCarousel, SocialGrid } from './aadiyaResults';

/**
 * INTERNSHIP — AADIYA JEWELS, SECTION ONE: SOCIAL MEDIA.
 *
 * THREE SHEETS, NOT ONE. This was a single 1600 by 900 board carrying a title,
 * a measure of copy and six pieces of work, and the six were hung on three
 * bands inside it. It is now three sheets of 1600 wide, stacked, one per band.
 *
 * The reason is arithmetic rather than taste. Three bands inside 900 pixels left
 * each print 176 pixels tall — half the size it was drawn at — and the only way
 * to keep the images readable was to spread two of them across a 1504-pixel
 * measure with nothing to fill the gap between. A band with a 1050-pixel hole
 * in it is not a layout, it is a compromise that got committed to. Split the
 * sheet and the constraint disappears: every print goes to 440 or 520 tall, two
 * and a half to three times what it was, and the widest gap anywhere on the
 * three sheets is 380 pixels, most of them under 180.
 *
 * THE THREE SHEETS ARE:
 *   one   the introduction — the title, the copy, and the calendar the month
 *         was planned on
 *   two   the production run — the AI pieces, the vertical video, and the feed
 *         they went out on
 *   three the work and the return — the designed posts, and the reporting
 *
 * They are the same width and scaled by the same factor, so they are the same
 * size on screen and the labels line up down the page. Sheets one and three are
 * 680 tall and sheet two is 600, and that difference is not a preference: sheet
 * two is the only one carrying three objects across the measure, and at 520 tall
 * the three of them ask for 1474 of the 1504 pixels available, which leaves no
 * gap at all. 440 is the largest height that still leaves that row a real gap.
 *
 * THE RUNNING HEAD IS ON THE FIRST SHEET ONLY. It is a running head, not a
 * title repeated three times, and repeating it would put three of the same line
 * on a page that is meant to read as three distinct compositions.
 *
 * IT IS THE FIRST OF TWO BOARDS ON ONE PAGE. The second covers the same
 * internship's e-commerce and website management work, and it is a section
 * further down the scroll rather than a route of its own, because the two
 * halves are one job. The divider that separates them lives on the dark
 * surround between the two sheets, not on either sheet, because this board's
 * brief asks for no extra text and anything added across its foot would be a
 * seventh thing on a spread that was specified as six.
 *
 * What replaced all of it was a long scroll: a full-bleed cover, a credits
 * strip, a social section, an e-commerce section and a learnings band. That was
 * four pages of website pretending to be one case study. This is the case study.
 */

/* ————————————————————————————————————————————————————————————
   THE SHEETS.

   The page is divided once, here, and everything below reads off these numbers.
   Nothing downstream is allowed to invent a coordinate.
   ———————————————————————————————————————————————————————————— */

/** Every sheet is this wide. The two e-commerce sheets are 1536 and 1600, which
 *  was always a near-miss; at least the three social ones are now one width and
 *  scale to one size, so the labels on all three line up down the page. */
const SHEET_W = 1600;

const MARGIN = 48;
const LABEL_GAP = 28;

/** Where the band starts on every sheet, so the labels sit on one line down the
 *  page. It is far enough below the running head on the first sheet for the head
 *  to read as a head rather than as another label. */
const BAND_TOP = 84;

const BAND_W = SHEET_W - MARGIN * 2;

const SHEET_1_H = 680;
const SHEET_2_H = 600;
const SHEET_3_H = 680;

/** How tall the prints are set on each sheet. */
const H1 = 520;
const H2 = 440;
const H3 = 520;

/* ————————————————————————————————————————————————————————————
   THE PAPER.

   Four washes per sheet, laid down before anything else and blurred well past
   the point where an edge could be found. Three are the pale yellow from the
   palette and one is a larger pink across the top right. The two that sit low
   are hung off the foot of the sheet rather than given a top, so the same four
   marks land in the same places on a 600-tall sheet as on a 680-tall one.

   They are set with an inline radius rather than a class because a four-value
   percentage radius is not something worth fighting the scanner over, and an
   organic blob needs eight numbers.

   The grain is a single fractal-noise tile over the whole sheet at low opacity.
   It is underneath the content rather than on top of it, so nothing in the
   artwork is ever dulled by it.
   ———————————————————————————————————————————————————————————— */

const washes = (h: number) =>
  [
    { left: -70, top: -60, w: 560, h: 320, colour: '#F7E8A8', opacity: 0.7, rotate: -8 },
    { left: -90, top: h - 370, w: 420, h: 300, colour: '#F7E8A8', opacity: 0.65, rotate: 14 },
    { left: 880, top: -140, w: 760, h: 480, colour: '#F4BFD0', opacity: 0.45, rotate: -6 },
    { left: 1060, top: h - 270, w: 660, h: 440, colour: '#F7E8A8', opacity: 0.8, rotate: 10 },
  ] as const;

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='900'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='1600' height='900' filter='url(%23n)'/%3E%3C/svg%3E\")";

const Paper: React.FC<{ h: number }> = ({ h }) => (
  <>
    {washes(h).map((wash, index) => (
      <div
        key={index}
        className="pointer-events-none absolute"
        style={{
          left: wash.left,
          top: wash.top,
          width: wash.w,
          height: wash.h,
          background: wash.colour,
          opacity: wash.opacity,
          transform: `rotate(${wash.rotate}deg)`,
          borderRadius: '42% 58% 55% 45% / 48% 40% 62% 52%',
          filter: 'blur(48px)',
        }}
      />
    ))}
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-multiply"
      style={{ backgroundImage: GRAIN, backgroundSize: '600px 600px' }}
    />
  </>
);

/* ————————————————————————————————————————————————————————————
   PLACING AN OBJECT.

   Six objects, one scale rule: every object is described by the size it was
   drawn at, the top-left of its visible box in its own coordinates, and the
   height its sheet sets it at. Width follows the height, so a print is never
   stretched to fit, and the scale lives in one place per object rather than
   being spread across six different pixel values that have to be kept in step
   by hand.

   A sheet's objects are then spaced by flexbox across the measure rather than by
   written-in left offsets. That is deliberate: a label is wider than the object
   under it in two of the six cases — "SOCIAL MEDIA GRID" runs to 188 pixels over
   a print 102 wide — and hand-placed offsets are how that one ends up hanging
   off the edge of the paper. Letting the row measure its own labels means the
   sheet always fits, and always ends on the margin.
   ———————————————————————————————————————————————————————————— */

type Placed = {
  /** The size the object is drawn at, in the units it was authored in. */
  w: number;
  h: number;
  /** Top-left of the object's visible box when that is not the top-left of its
   *  own box. The phones are drawn rotated and offset, so theirs floats. */
  ox?: number;
  oy?: number;
  node: React.ReactNode;
};

/** The inner box is the natural size and carries the scale; the outer reserves
 *  the slot the object will actually fill, so the row above it is laid out
 *  against the printed size rather than the authored one. */
const Mount: React.FC<{ obj: Placed; height: number }> = ({ obj, height }) => {
  const scale = height / obj.h;
  return (
    <div style={{ position: 'relative', width: obj.w * scale, height }}>
      <div
        style={{
          position: 'absolute',
          left: -(obj.ox ?? 0) * scale,
          top: -(obj.oy ?? 0) * scale,
          width: obj.w,
          height: obj.h,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {obj.node}
      </div>
    </div>
  );
};

/** A label and the object it names, stacked and left-aligned, which is the
 *  order and the alignment the label component was written for. */
const Item: React.FC<{ label: string; obj: Placed; height: number }> = ({ label, obj, height }) => (
  <div className="flex flex-col items-start">
    <SectionLabel>{label}</SectionLabel>
    <div style={{ marginTop: LABEL_GAP }}>
      <Mount obj={obj} height={height} />
    </div>
  </div>
);

/** A band that runs the full measure and spreads its objects evenly across it. */
const Band: React.FC<{ height: number; children: React.ReactNode }> = ({ height, children }) => (
  <div
    className="absolute flex items-start justify-between"
    style={{ top: BAND_TOP, left: MARGIN, right: MARGIN, height }}
  >
    {children}
  </div>
);

/** The gap between the copy column and the calendar on the first sheet. Wide
 *  enough that the two read as two things rather than as one block with a
 *  picture on the end of it. */
const COL_GAP = 90;

/** Display size for the masthead. It is the largest type on the page and it is
 *  on the first sheet because that sheet is the one that introduces the job. */
const TITLE_PX = 120;
const PARA_PX = 20;

const flush: React.CSSProperties = { left: 0, top: 0 };

const CALENDAR: Placed = {
  w: 410,
  h: 228,
  node: <ContentCalendar style={flush} />,
};

const AI: Placed = {
  w: 342,
  h: 288,
  node: <AiCollage style={flush} />,
};

/* The two phones are 112 by 228 in a 252-wide box, then rotated four and seven
 * degrees and pushed six and eight pixels off the line. Rotating a box grows
 * it: the visible result is 273 by 256 with its top-left 8 across and 14 above
 * the element's own. The numbers here are that visible box, so the object can
 * be set by height alongside the other five. */
const PHONES: Placed = {
  w: 273,
  h: 256,
  ox: -8,
  oy: -14,
  node: <PhoneMockups style={flush} />,
};

const GRID: Placed = {
  w: 204,
  h: 352,
  node: <SocialGrid style={flush} />,
};

const POSTS: Placed = {
  w: 556,
  h: 344,
  node: <PostCarousel style={flush} />,
};

const DASHBOARD: Placed = {
  w: 330,
  h: 352,
  node: <AnalyticsLaptop style={flush} />,
};

/** One sheet of pink paper, its washes, and whatever is hung on it. The outer
 *  box reserves the sheet's scaled size and the inner one carries the sheet at
 *  full size with the transform on it, so the section hugs the artwork. */
const Sheet: React.FC<{ h: number; scale: number; children: React.ReactNode }> = ({
  h,
  scale,
  children,
}) => (
  <div style={{ width: SHEET_W * scale, height: h * scale }} className="relative shrink-0">
    <div
      style={{
        width: SHEET_W,
        height: h,
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
      }}
      className="absolute left-0 top-0 overflow-hidden bg-[#F8DDE5] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]"
    >
      <Paper h={h} />
      {children}
    </div>
  </div>
);

export const SocialBoard: React.FC = () => {
  /* One scale for all three sheets, and deliberately not one scale per sheet.
     The hook fits a sheet to the frame it is measured against, and the frame
     here is the whole stack — so the height of a third of a 680-pixel sheet can
     never be the binding constraint and the width decides. Every sheet comes
     out the same size on screen, which is the point of them being a set. */
  const { frameRef, scale } = useBoardScale(SHEET_W, SHEET_1_H);

  return (
    <div
      ref={frameRef}
      className="w-full flex flex-col items-center gap-8 bg-[#10090B] py-10 lg:gap-10 lg:py-14"
    >
      {/* ————— SHEET ONE, THE INTRODUCTION ————— */}
      <Sheet h={SHEET_1_H} scale={scale}>
        {/* The running head. The first sheet only. */}
        <div className="absolute inset-x-[48px] top-[40px] flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="font-body text-[11px] uppercase tracking-[4px] text-[#071326]">
              INTERNSHIP EXPERIENCE
            </span>
            <span className="h-px w-[350px] bg-[#5F6871]" />
          </div>
          <div className="flex items-center gap-5">
            <span className="font-body text-[10px] uppercase tracking-[4px] text-[#071326]">
              AADIYA JEWELS
            </span>
            <span className="h-px w-[60px] bg-[#5F6871]" />
          </div>
        </div>

        {/* The title's size, leading and tracking are set inline rather than
            through classes. They are the single most specific numbers on the
            whole page and they are the numbers most likely to be argued with
            later; inline styles put them next to the copy rather than in a
            stylesheet, so an edit to the sheet is one edit. */}
        <div
          className="absolute flex items-center"
          style={{ top: BAND_TOP, left: MARGIN, right: MARGIN, height: H1 + LABEL_GAP }}
        >
          <div style={{ width: BAND_W - (CALENDAR.w * (H1 / CALENDAR.h)) - COL_GAP }}>
            <h1
              className="font-serif-display text-[#071326]"
              style={{
                fontSize: `${TITLE_PX}px`,
                lineHeight: 0.88,
                letterSpacing: '-0.5px',
                fontWeight: 400,
              }}
            >
              Social
              <br />
              Media
            </h1>

            <p
              className="font-body text-[#394252]"
              style={{ marginTop: 28, fontSize: `${PARA_PX}px`, lineHeight: 1.55 }}
            >
              Managed the end-to-end social media content process, from planning and shooting to
              editing, scheduling and publishing. Created engaging reels, posts and stories aligned
              with the brand's identity and product communication.
            </p>
          </div>

          <div style={{ marginLeft: COL_GAP }}>
            <Item label="MAIN FEED CONTENT CALENDAR" obj={CALENDAR} height={H1} />
          </div>
        </div>
      </Sheet>

      {/* ————— SHEET TWO, THE PRODUCTION RUN ————— */}
      <Sheet h={SHEET_2_H} scale={scale}>
        <Band height={H2 + LABEL_GAP}>
          <Item label="AI CONTENT GENERATION" obj={AI} height={H2} />
          <Item label="REELS &amp; STORIES" obj={PHONES} height={H2} />
          <Item label="SOCIAL MEDIA GRID" obj={GRID} height={H2} />
        </Band>
      </Sheet>

      {/* ————— SHEET THREE, THE WORK AND THE RETURN ————— */}
      <Sheet h={SHEET_3_H} scale={scale}>
        <Band height={H3 + LABEL_GAP}>
          <Item label="CREATIVE POSTS &amp; CAROUSELS" obj={POSTS} height={H3} />
          <Item label="FINAL DASHBOARD" obj={DASHBOARD} height={H3} />
        </Band>
      </Sheet>
    </div>
  );
};
