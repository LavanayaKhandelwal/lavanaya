/**
 * THE PHOTOGRAPH POOL FOR THE AADIYA JEWELS SOCIAL BOARD.
 *
 * One list, and nothing is declared here without something pointing at it. The
 * e-commerce board used to share it, and stopped: its objects are exports of
 * finished web work at seven different shapes rather than frames from the brand
 * shoot, and the note further down says where they went instead.
 *
 * The names are the job each picture does, not what is believed to be in it.
 * That is deliberate. The version of the internship page this replaced carried
 * alt text naming subjects — a gold earring, a hand wearing a ring — written
 * against files nobody ever opened to check, and those descriptions were
 * inventions. Every name here is something actually known about the picture.
 *
 * To change what is in a frame, replace the string on the relevant line and
 * nothing else. To add a picture, add a line and point something at it.
 */

/** The social media board. */
const SOCIAL = {
  /* THE CONTENT CALENDAR — a photograph of the real planning sheet rather than
     a drawn one, for the same reason as the dashboard below it. */
  calendar: 'main-feed-calendar.jpeg',

  /* THE MOODBOARD — the AI generated pieces, shown as two prints side by side. */
  aiContent1: 'ai-content-1.jpeg',
  aiContent2: 'ai-content-2.jpeg',

  /* THE FINISHED GRID — the whole feed in one picture rather than nine cells
     assembled here, because the grid is the deliverable and a screenshot of it
     is the honest way to show a deliverable. */
  feedGrid: 'social-media-grid.jpeg',

  /* THE DESIGNED POSTS — the seven designed pieces, laid out four over three.
     Six are portrait and one is square; all are cropped to the same cell so the
     grid keeps one clean edge. */
  post1: 'post-1.jpeg',
  post2: 'post-2.jpeg',
  post3: 'post-3.jpeg',
  post4: 'post-4.jpeg',
  post5: 'post-5.jpeg',
  post6: 'post-6.jpeg',
  post7: 'post-7.jpeg',

  /* THE FINAL DASHBOARD — a photograph of the real reporting view rather than a
     drawn one. It is the only object on this board that is not built, because
     it is the one thing that is evidence rather than illustration. */
  dashboard: 'final-dashboard.jpeg',
} as const;

/* THE E-COMMERCE HALF OF THIS POOL IS GONE, and the pool's own rule is why: the
   seven files in it were read by the two drawn pages in the fourth card of the
   e-commerce board, and by nothing else once those pages went. Every other
   object on that board is a real export of finished web work, and exports of
   web work are not 1600 square — they are seven different shapes — so they are
   named for what they are and served directly from `commerceShots` rather than
   squeezed into a one-size table or lied about. The files themselves are still
   in `public/portfolio-assets`; this is the table of what the site points at,
   not the folder.

   The e-commerce board's own rule is recorded where it lives, on each of its
   objects: a drawn object is a claim about what something looks like, a
   photograph is the thing, and where a real export exists the export is what
   belongs in the card. */

export const FILES = { ...SOCIAL };

export type PhotoKey = keyof typeof FILES;

const DIR = '/portfolio-assets/';

/** Resolves a pool key to the public path the image is served from. */
export const photo = (key: PhotoKey): string => `${DIR}${FILES[key]}`;

/**
 * Intrinsic dimensions. None of the twelve files in this pool is square: they
 * are 1280 tall, or 1206 by 670 for the calendar. `BoardPhoto` falls back to
 * this number for anything that does not state its own, so on this side it
 * describes a shape those files do not have. Nothing visible depends on it —
 * the frames are sized in CSS and the images are `object-cover` — but it is a
 * named constant rather than an inlined 1600 precisely so that the
 * approximation is in one place and is obvious when it is read.
 *
 * It used to be exact for the e-commerce half of the pool, which really was
 * eleven files that are 1600 square. That half is gone, and this number with
 * its claim to be two-for-one is now an approximation across the whole pool.
 * The e-commerce board passes each of its own real dimensions, so nothing there
 * reads this.
 */
export const PHOTO_EDGE = 1600;
