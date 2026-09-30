import React from 'react';
import { BoardPhoto } from './aadiyaMarks';

/**
 * THE TWO CARDS THAT SHOW THE WORK RATHER THAN A DIAGRAM OF IT.
 *
 * Everything else on this section is built out of divs at absolute pixel
 * positions, and that is the right way to draw a Shopify admin panel or a product
 * page: those are objects a reader recognises by their structure, and a structure
 * can be rebuilt at any size. A campaign banner and a product catalogue are a
 * different thing. They are finished artefacts, they were made once, and a
 * plausible-looking reconstruction of one is not a weaker version of the evidence
 * — it is a substitute for it. So these two cards show the actual files.
 *
 * That is the whole argument for photographs here, and it is worth being precise
 * about the limit of it, because the section still draws most of itself. A drawn
 * object is a claim about what something looks like; a photograph is the thing.
 * Where the claim would be doing work that only the original can do, the original
 * is what belongs in the card.
 *
 * None of these three is in the photograph pool, and that is deliberate rather
 * than an omission. The e-commerce half of the pool is eleven files that really
 * are 1600 square, which is what lets `BoardPhoto` declare one pair of numbers
 * for all of them. These are 1206 by 481, 1206 by 585 and 1206 by 660, and
 * putting them in would have meant either breaking that one-size table or lying
 * about them. They are exports of finished web work rather than frames from the
 * brand shoot, and they are named for what they are.
 *
 * The plate colour is the same warm neutral the drawn banners used, so the frame
 * a card shows while a file is in flight is the colour it used to flash.
 */

/* The same two-layer shadow as the rest of the section, so these read as laid out
   by one hand rather than collected from somewhere else. */
const FLOAT = '0 14px 26px -14px rgba(58,38,40,0.5), 0 2px 5px rgba(58,38,40,0.1)';

/* ————————————————————————————————————————————————————————————
   THE PRODUCT CATALOGUE.

   One file, 1206 by 481, which is 2.5073 — the proportions of a wide admin table
   rather than of a card. At 340 wide it is 136 tall, and 136 is within three
   tenths of a percent of the true ratio, so `object-cover` clips rather than
   crops and no column of the table goes missing at an edge.

   It is a single object where the drawn card held three, and that is the honest
   arrangement: the file is one screenshot of one screen. The card used to carry
   a drawn catalogue with a content tracker and an image folder beneath it, and
   the two beneath were not more of the catalogue — they were a posting schedule
   and a folder of thumbnails, filled in with invented SKUs, invented prices and
   invented dates. One real screen replaces all three.
   ———————————————————————————————————————————————————————————— */

export const CatalogueShot: React.FC = () => (
  <div className="absolute h-[136px] w-[340px] overflow-hidden" style={{ boxShadow: FLOAT }}>
    <BoardPhoto
      src="/portfolio-assets/product-catalogue-management.jpeg"
      alt="Screenshot of the product catalogue in the Shopify admin, showing product rows with names, prices and stock"
      width={1206}
      height={481}
      plate="#F1DFD2"
      className="h-full"
      loading="eager"
    />
  </div>
);

/* ————————————————————————————————————————————————————————————
   THE TWO BANNER DESIGNS.

   The files are 1206 by 585 and 1206 by 660, which are 2.0615 and 1.8273, and
   they are not the same shape — which is the point of showing both. A banner set
   for one campaign is not one banner at two crops; the second is a different
   composition at a different proportion, and that difference is the work.

   Stacked, one above the other, at one width. At 340 wide their own ratios come
   out as 165 and 186, each within four hundredths of a percent of the truth, so
   nothing measurable is cropped from either.

   The width is 340, and not the 255 this card's artwork column actually
   measures at the large breakpoint. The other card in the row holding more than
   one object is 338 wide — a 212-pixel product page with a 188-pixel collection
   page laid 150 across — so 340 puts the three multi-object cards within two
   pixels of a single scale. The fit then shrinks every one of them by the same
   factor to fit its column, and four cards read as four cards at one
   magnification rather than at four.

   It is the only object on the section that is a stack rather than a positioned
   cluster, so it takes no offset from its card and has no `style` prop to be
   given one.
   ———————————————————————————————————————————————————————————— */

export const BannerPair: React.FC = () => (
  <div className="absolute flex w-[340px] flex-col gap-3">
    <div className="h-[165px] overflow-hidden" style={{ boxShadow: FLOAT }}>
      <BoardPhoto
        src="/portfolio-assets/website-banner-1.jpeg"
        alt="First website banner design, a wide campaign image for the homepage"
        width={1206}
        height={585}
        plate="#F1DFD2"
        className="h-full"
        loading="eager"
      />
    </div>
    <div className="h-[186px] overflow-hidden" style={{ boxShadow: FLOAT }}>
      <BoardPhoto
        src="/portfolio-assets/website-banner-2.jpeg"
        alt="Second website banner design, a second campaign image at a different proportion to the first"
        width={1206}
        height={660}
        plate="#F1DFD2"
        className="h-full"
        loading="eager"
      />
    </div>
  </div>
);
