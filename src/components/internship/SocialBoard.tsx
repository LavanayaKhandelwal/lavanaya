import React from 'react';
import { SectionLabel, SOCIAL_SHEET, useBoardScale } from './aadiyaMarks';
import { AiCollage, ContentCalendar, PhoneMockups } from './aadiyaProcess';
import { AnalyticsLaptop, PostCarousel, SocialGrid } from './aadiyaResults';

/**
 * INTERNSHIP — AADIYA JEWELS, SECTION ONE: SOCIAL MEDIA.
 *
 * A single landscape board, 1600 by 900, scaled to the window as one object.
 * It is not a scrolling page and it is not a dashboard. Everything on it is
 * positioned in stage pixels against a fixed sheet, because the composition it
 * is built from is a portfolio spread: a title and a measure of copy, six pieces
 * of work hung on three bands, and the whole thing sitting on pink paper with a
 * few brush marks on it.
 *
 * IT IS THE FIRST OF TWO BOARDS ON ONE PAGE. The second covers the same
 * internship's e-commerce and website management work, and it is a section
 * further down the scroll rather than a route of its own, because the two
 * halves are one job. The divider that separates them lives on the dark
 * surround between the two sheets, not on either sheet, because this board's
 * brief asks for no extra text and anything added across its foot would be a
 * seventh thing on a spread that was specified as six.
 *
 * What replaced it was a long scroll: a full-bleed cover, a credits strip, a
 * social section, an e-commerce section and a learnings band. That was four
 * pages of website pretending to be one case study. This is the case study.
 *
 * THE SHEET IS IN THREE BANDS, and the bands are the reading order. The first
 * is the introduction: the title, the copy and the calendar the month was
 * planned on. The second is the production run — the AI pieces, the vertical
 * video, and the feed they went out on. The third is the work itself: the
 * designed posts and the reporting the month returned.
 *
 * Every band is set to the same measure, so all three start on the left margin
 * and end on the right one, and the air between a band's objects is the same
 * across every band. That is the whole trick of the layout: nothing here is
 * freehand, the bands are laid out by the same two rules, and a band cannot
 * drift out of line with the one above it without something visibly moving.
 */

/* ————————————————————————————————————————————————————————————
   THE PAPER.

   Four washes, laid down before anything else and blurred well past the point
   where an edge could be found. Three are the pale yellow from the palette and
   one is a larger pink across the top right. They are set with an inline radius
   rather than a class because a four-value percentage radius is not something
   worth fighting the scanner over, and an organic blob needs eight numbers.

   The grain is a single fractal-noise tile over the whole sheet at low opacity.
   It is underneath the content rather than on top of it, so nothing in the
   artwork is ever dulled by it.
   ———————————————————————————————————————————————————————————— */

const WASHES = [
  {
    left: -70,
    top: -60,
    w: 560,
    h: 320,
    colour: '#F7E8A8',
    opacity: 0.7,
    rotate: -8,
  },
  {
    left: -90,
    top: 330,
    w: 420,
    h: 300,
    colour: '#F7E8A8',
    opacity: 0.65,
    rotate: 14,
  },
  {
    left: 880,
    top: -140,
    w: 760,
    h: 480,
    colour: '#F4BFD0',
    opacity: 0.45,
    rotate: -6,
  },
  {
    left: 1060,
    top: 590,
    w: 660,
    h: 440,
    colour: '#F7E8A8',
    opacity: 0.8,
    rotate: 10,
  },
] as const;

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='900'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='1600' height='900' filter='url(%23n)'/%3E%3C/svg%3E\")";

const Board: React.FC = () => (
  <>
    {WASHES.map((wash, index) => (
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
   THE THREE BANDS.

   The sheet is divided once, here, and everything below reads off these
   numbers. Nothing downstream is allowed to invent a coordinate.
   ———————————————————————————————————————————————————————————— */

/** The measure every band is set to. Both edges are the sheet's side margins,
 *  and they are also the width the third band's right-hand object ends on, which
 *  is the check that the bands have stayed in line with each other. */
const MARGIN = 48;

/** The gap from a label's baseline box to the top of the object it names. Fixed
 *  on both boards by the label component, and repeated here because the two
 *  are separate pieces of code agreeing on one number. */
const LABEL_GAP = 28;

/** The measure the copy is set in, and therefore the width of the first
 *  column. The calendar centres itself in what is left of the band. */
const TEXT_W = 300;

/** Band tops. The first is the title's own cap line, which the calendar's label
 *  shares, so the two start together; the other two are the same distance below
 *  the last thing above them. */
const BAND_1_TOP = 92;
const BAND_2_TOP = 416;
const BAND_3_TOP = 652;

/** What one band's objects are set at. The middle and bottom bands share a
 *  height so that the prints across them read as one set rather than as two,
 *  and so the band tops above can be spaced by eye rather than by arithmetic. */
const BAND_2_H = 176;
const BAND_3_H = 176;

/** The calendar runs taller than either. It is the one object with the whole of
 *  a band to itself beside the copy, and at this height its foot lands on the
 *  same line as the last line of the paragraph. */
const CALENDAR_H = 246;

/* ————————————————————————————————————————————————————————————
   PLACING AN OBJECT.

   Six objects, one scale rule: every object is described by the size it was
   drawn at, the top-left of its visible box in its own coordinates, and the
   height it is set at on the sheet. Width follows the height, so a print is
   never stretched to fit, and the scale lives in one place rather than being
   spread across six different pixel values that have to be kept in step by
   hand.

   A band's objects are then spaced by flexbox across the measure rather than by
   written-in left offsets. That is deliberate: a label is wider than the object
   under it in two of the six cases — "SOCIAL MEDIA GRID" runs to 188 pixels over
   a print 102 wide — and hand-placed offsets are how that one ends up hanging
   off the edge of the paper. Letting the row measure its own labels means the
   band always fits, and always ends on the margin.
   ———————————————————————————————————————————————————————————— */

type Placed = {
  /** The size the object is drawn at, in the units it was authored in. */
  w: number;
  h: number;
  /** Top-left of the object's visible box when that is not the top-left of its
   *  own box. The phones are drawn rotated and offset, so theirs floats. */
  ox?: number;
  oy?: number;
  /** Height it is set at on the sheet. */
  height: number;
  node: React.ReactNode;
};

/** The inner box is the natural size and carries the scale; the outer reserves
 *  the slot the object will actually fill, so the row above it is laid out
 *  against the printed size rather than the authored one. */
const Mount: React.FC<{ obj: Placed }> = ({ obj }) => {
  const scale = obj.height / obj.h;
  return (
    <div style={{ position: 'relative', width: obj.w * scale, height: obj.height }}>
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
const Item: React.FC<{ label: string; obj: Placed }> = ({ label, obj }) => (
  <div className="flex flex-col items-start">
    <SectionLabel>{label}</SectionLabel>
    <div style={{ marginTop: LABEL_GAP }}>
      <Mount obj={obj} />
    </div>
  </div>
);

/** A band that runs the full measure and spreads its objects evenly across it. */
const Band: React.FC<{ top: number; children: React.ReactNode }> = ({ top, children }) => (
  <div
    className="absolute flex items-start justify-between"
    style={{ top, left: MARGIN, right: MARGIN }}
  >
    {children}
  </div>
);

const flush: React.CSSProperties = { left: 0, top: 0 };

const CALENDAR: Placed = {
  w: 410,
  h: 228,
  height: CALENDAR_H,
  node: <ContentCalendar style={flush} />,
};

const AI: Placed = {
  w: 342,
  h: 288,
  height: BAND_2_H,
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
  height: BAND_2_H,
  node: <PhoneMockups style={flush} />,
};

const GRID: Placed = {
  w: 204,
  h: 352,
  height: BAND_2_H,
  node: <SocialGrid style={flush} />,
};

const POSTS: Placed = {
  w: 556,
  h: 344,
  height: BAND_3_H,
  node: <PostCarousel style={flush} />,
};

const DASHBOARD: Placed = {
  w: 330,
  h: 352,
  height: BAND_3_H,
  node: <AnalyticsLaptop style={flush} />,
};

export const SocialBoard: React.FC = () => {
  const { frameRef, scale } = useBoardScale(SOCIAL_SHEET.width, SOCIAL_SHEET.height);

  return (
    <div
      ref={frameRef}
      className="w-full flex items-center justify-center bg-[#10090B] py-8 lg:min-h-svh lg:py-0"
    >
      {/* The outer box reserves the board's SCALED size and the inner one
          carries the sheet at full size with the transform on it. Scaling a
          fixed-size element and centring it with flex would work too, but the
          element would still reserve its unscaled width and height, so the
          section could not hug and the whole point of the hug is that the
          section ends where the artwork does. */}
      <div
        style={{
          width: SOCIAL_SHEET.width * scale,
          height: SOCIAL_SHEET.height * scale,
        }}
        className="relative shrink-0"
      >
        <div
          style={{
            width: SOCIAL_SHEET.width,
            height: SOCIAL_SHEET.height,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
          className="absolute left-0 top-0 overflow-hidden bg-[#F8DDE5] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]"
        >
          <Board />

          {/* ————— HEADER ————— */}
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

          {/* ————— BAND ONE, THE INTRODUCTION ————— */}
          {/* Title and copy in the first column, calendar centred in the rest of
              the measure. The two sit on the same top line, and the calendar is
              set to a height that lands its foot on the last line of the
              paragraph, so this band closes on one edge rather than two. */}
          <div
            className="absolute flex items-start"
            style={{ top: BAND_1_TOP, left: MARGIN, right: MARGIN }}
          >
            <div className="shrink-0" style={{ width: TEXT_W }}>
              {/* The title's size, leading and tracking are set inline rather
                  than through classes. They are the single most specific numbers
                  on the whole board and they are the numbers most likely to be
                  argued with later; inline styles put them next to the copy
                  rather than in a stylesheet, so an edit to the board is one
                  edit. */}
              <h1
                className="font-serif-display text-[#071326]"
                style={{
                  fontSize: '72px',
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
                style={{ marginTop: 17, fontSize: '14px', lineHeight: 1.55 }}
              >
                Managed the end-to-end social media content process, from planning and shooting to
                editing, scheduling and publishing. Created engaging reels, posts and stories aligned
                with the brand's identity and product communication.
              </p>
            </div>

            <div className="flex flex-1 justify-center">
              <Item label="MAIN FEED CONTENT CALENDAR" obj={CALENDAR} />
            </div>
          </div>

          {/* ————— BAND TWO, THE PRODUCTION RUN ————— */}
          <Band top={BAND_2_TOP}>
            <Item label="AI CONTENT GENERATION" obj={AI} />
            <Item label="REELS &amp; STORIES" obj={PHONES} />
            <Item label="SOCIAL MEDIA GRID" obj={GRID} />
          </Band>

          {/* ————— BAND THREE, THE WORK AND THE RETURN ————— */}
          <Band top={BAND_3_TOP}>
            <Item label="CREATIVE POSTS &amp; CAROUSELS" obj={POSTS} />
            <Item label="FINAL DASHBOARD" obj={DASHBOARD} />
          </Band>
        </div>
      </div>
    </div>
  );
};
