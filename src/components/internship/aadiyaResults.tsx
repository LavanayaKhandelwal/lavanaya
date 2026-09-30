import React from 'react';
import { photo, type PhotoKey } from './photos';

/**
 * THE THREE PIECES OF EVIDENCE.
 *
 * What the feed looked like, what the posts looked like, and what the numbers
 * did. They sit along the bottom of the board in that order, which is the order
 * a reader arrives at them in: the output, then the output as designed pieces,
 * then the return on it.
 *
 * Everything in this file is built, not photographed. The grid is nine cells,
 * the carousel is six cards and two chevrons, the dashboard is a table, three
 * figures, a line and three bars. A photograph of any of those would have
 * arrived at whatever resolution and whatever crop the photographer happened to
 * use, and would have been unreadable at the size the board gives them.
 */

/* ————————————————————————————————————————————————————————————
   SECTION 04 — THE FINISHED GRID.

   Three by three, four pixels apart, 370 square. Two of the nine cells are
   type: the brand card in the top left and a line of copy in the middle. The
   other seven are photographs, cropped square by the browser.
   ———————————————————————————————————————————————————————————— */

/* ————————————————————————————————————————————————————————————
   SECTION 04 — THE FINISHED GRID.

   One picture of the whole feed, framed as a print laid on the paper.

   This was nine cells assembled here — seven photographs, one brand card and one
   type card — which described the shape of a grid rather than showing the grid.
   The feed is the deliverable, so it is shown as the feed actually looks. The
   file is 740 by 1280, portrait, and is set by height with the width following.

   The two type cards went with it. They were the invented part: the brand card
   and "Elegance in every detail" were written to fill cells, not lifted off the
   work, and keeping them alongside a real screenshot would have put fiction next
   to evidence.
   ———————————————————————————————————————————————————————————— */

export const SocialGrid: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <div style={style} className="absolute h-[352px] w-[204px]">
    <img
      src={photo('feedGrid')}
      alt="The Aadiya Jewels Instagram grid as it shipped, nine posts laid out in three rows"
      className="h-full w-full border border-[#705955]/25 object-cover shadow-[0_16px_30px_-18px_rgba(112,89,85,0.45)]"
    />
  </div>
);

/* ————————————————————————————————————————————————————————————
   SECTION 05 — THE DESIGNED POSTS.

   Seven designed pieces, four over three. Six of the files are portrait and one
   is square, and all seven are cropped to the same cell so the block keeps one
   clean left edge and one clean bottom edge.

   This was six cards, three of them designed in the browser with type on them —
   "Modern Jewellery for Every Moment", "New Arrivals", "Layer It Up" — and three
   photographs, plus a pair of chevrons and four dots pretending to be a
   carousel. Every word on it was invented. The posts are the work, so they are
   shown instead of described, and the navigation furniture went with the fiction.

   The cells are 130 by 166, which is the largest size that fits four across the
   space between this column and the dashboard without crowding either.
   ———————————————————————————————————————————————————————————— */

/** Four on the first row, three on the second. The rows are separate so the
    second can centre under the first rather than trail off one cell short. */
const POST_ROWS: readonly (readonly PhotoKey[])[] = [
  ['post1', 'post4', 'post2', 'post3'],
  ['post5', 'post6', 'post7'],
];

export const PostCarousel: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <div style={style} className="absolute flex flex-col gap-3">
    {POST_ROWS.map((row, rowIndex) => (
      <div key={rowIndex} className="flex justify-center gap-3">
        {row.map((key) => (
          <img
            key={key}
            src={photo(key)}
            alt="Aadiya Jewels designed social media post"
            className="h-[166px] w-[130px] border border-[#705955]/25 object-cover shadow-[0_12px_24px_-16px_rgba(112,89,85,0.45)]"
          />
        ))}
      </div>
    ))}
  </div>
);

/* ————————————————————————————————————————————————————————————
   SECTION 06 — THE FINAL DASHBOARD.

   A photograph of the real reporting view, framed as a print laid on the paper.

   This was the one object on the board that was drawn rather than shown, and
   drawing it was the wrong call. Everything beside it is either a photograph of
   the work or an object that exists in the studio, but this is the result — the
   numbers the month actually produced — and a hand-built chart is a claim about
   those numbers rather than evidence of them. The file is 1199 by 1280, so it
   is set by height and the width follows.

   There is no device around it. The laptop was a way of saying "this was on a
   screen", and a screen is not a fact anybody doubted; the picture is the
   evidence and the frame is only there so it sits on the paper rather than
   floating above it.
   ———————————————————————————————————————————————————————————— */

export const AnalyticsLaptop: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <div style={style} className="absolute h-[352px] w-[330px]">
    <img
      src={photo('dashboard')}
      alt="Instagram insights for Aadiya Jewels, 1 to 30 April 2025, showing reach, engagement and follower growth"
      className="h-full w-full border border-[#705955]/25 object-cover shadow-[0_16px_30px_-18px_rgba(62,39,35,0.45)]"
    />
  </div>
);
