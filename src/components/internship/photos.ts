/**
 * THE PHOTOGRAPH POOL FOR BOTH AADIYA JEWELS BOARDS.
 *
 * One list, shared by the social media board and the e-commerce board, because
 * they are the same brand shoot and the same folder. Nothing is duplicated
 * between the two files and nothing is declared here without something
 * pointing at it.
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

/** The e-commerce board, which reaches further down the same folder. */
const COMMERCE = {
  /* THE WEBSITE — the hero on the desktop screen and the one on the phone. */
  siteHero: 'f54639f8-2182-461e-bc6b-63ce3787f763.jpg',
  siteHeroAlt: 'WhatsApp Image 2026-09-13 at 19.42.18 (1).jpeg',

  /* THE CATEGORY TILES under the hero, and again on the collection page. */
  tileNecklace: 'IMG_1559.PNG',
  tileEarring: 'IMG_1560.PNG',
  tileRing: '60C4A694-F307-473A-836F-9FF76655E7D8.png',
  tileBracelet: '56E0EFE3-289B-4EA1-95F0-C3DB7266DDFD.png',

  /* THE PRODUCT PAGE — the one large image, then the two gallery thumbs. */
  product: 'ab8c971a-1e07-45cd-947a-d32f6efd5760.jpg',
  productAlt: 'IMG_2187.jpg',
  productAlt2: 'IMG_4453.jpg',

  /* THE BANNERS — wide, mobile, and the pop-up behind them. */
  bannerWide: '7eee7676-2ce8-4667-9ef7-abf624ba1833.jpg',
  bannerMobile: 'B7E707CC-CED2-43AE-A2AD-C2B28D50CD10.jpg',
  bannerPopup: '1e36b3dd-85f2-438b-b90a-e7143dbd03cd.jpg',

  /* THE BESTSELLERS on the phone, which double as two of the catalogue's
     thumbnails and two of the folder's — the same product, shot once, appearing
     wherever a product needs to be seen small. */
  bestsellerA: 'DD05B299-B533-4126-B54A-3B48CD3AA413.jpg',
  bestsellerB: 'f72aff62-4ccf-4668-9ba7-1a88dc9a9eab.jpg',
} as const;

export const FILES = { ...SOCIAL, ...COMMERCE };

export type PhotoKey = keyof typeof FILES;

const DIR = '/portfolio-assets/';

/** Resolves a pool key to the public path the image is served from. */
export const photo = (key: PhotoKey): string => `${DIR}${FILES[key]}`;

/**
 * Intrinsic dimensions. Every photograph in the pool is 1600x1600, so one pair
 * of numbers describes all of them and no per-image table is needed.
 */
export const PHOTO_EDGE = 1600;
