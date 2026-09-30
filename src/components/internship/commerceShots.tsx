import React from 'react';
import { BoardPhoto } from './aadiyaMarks';

/**
 * THE THREE CARDS THAT SHOW THE WORK RATHER THAN A DIAGRAM OF IT.
 *
 * What is still drawn on this section — the laptop, the phone, the two pages —
 * is drawn because those are objects a reader recognises by their structure,
 * and a structure can be rebuilt at any size. A backend table, a catalogue
 * workbook and a campaign banner are a different thing. They are finished
 * artefacts, they were made once, and a plausible-looking reconstruction of
 * one is not a weaker version of the evidence — it is a substitute for it.
 * So these three cards show the actual files.
 *
 * That is the whole argument for photographs here, and it is worth being precise
 * about the limit of it, because the section still draws four of its ten
 * objects. A drawn object is a claim about what something looks like; a
 * photograph is the thing. Where the claim would be doing work that only the
 * original can do, the original is what belongs in the card.
 *
 * None of these six is in the photograph pool, and that is deliberate rather
 * than an omission. The e-commerce half of the pool is eleven files that really
 * are 1600 square, which is what lets `BoardPhoto` declare one pair of numbers
 * for all of them. These are 1206 by 497, 1206 by 954, 1206 by 481, 1600 by
 * 681, 1206 by 585 and 1206 by 660, and putting them in would have meant either
 * breaking that one-size table or lying about them. They are exports of
 * finished web work rather than frames from the brand shoot, and they are named
 * for what they are.
 *
 * The plate colour is the same warm neutral the drawn banners used, so the frame
 * a card shows while a file is in flight is the colour it used to flash.
 */

/* The same two-layer shadow as the rest of the section, so these read as laid out
   by one hand rather than collected from somewhere else. */
const FLOAT = '0 14px 26px -14px rgba(58,38,40,0.5), 0 2px 5px rgba(58,38,40,0.1)';

/* ————————————————————————————————————————————————————————————
   THE PRODUCT CATALOGUE.

   Two sheets of the same catalogue workbook. The first is the silver sheet,
   1206 by 481, with its SKU, stone, vendor, design, dimension, weight and
   price columns. Below it is the gold pendant sheet, 1600 by 681, with
   product photographs beside SKUs, materials, colours, dimensions and
   weights. The catalogue is a workbook and these are two of its sheets, and
   that is the honest arrangement — it is also what the card has always said
   about itself: product details, images, pricing, organised for quick
   updates.

   At 340 wide their own ratios come out as 136 and 145, within three and
   two tenths of a percent of the truth, so `object-cover` clips rather than
   crops and no SKU column goes missing at an edge.
   ———————————————————————————————————————————————————————————— */

export const CataloguePair: React.FC = () => (
  <div className="absolute flex w-[340px] flex-col gap-3">
    <div className="h-[136px] overflow-hidden" style={{ boxShadow: FLOAT }}>
      <BoardPhoto
        src="/portfolio-assets/product-catalogue-management.jpeg"
        alt="Screenshot of the silver catalogue spreadsheet, with SKU, stone, vendor, design, dimension, weight and price columns"
        width={1206}
        height={481}
        plate="#F1DFD2"
        className="h-full"
        loading="eager"
      />
    </div>
    <div className="h-[145px] overflow-hidden" style={{ boxShadow: FLOAT }}>
      <BoardPhoto
        src="/portfolio-assets/product-catalogue-management-2.jpeg"
        alt="Screenshot of the gold pendant catalogue spreadsheet, with product photographs beside SKUs, materials, colours and weights"
        width={1600}
        height={681}
        plate="#F1DFD2"
        className="h-full"
        loading="eager"
      />
    </div>
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
   measures at the large breakpoint. Every multi-object card in the row is
   authored at 340 — the backend pair, the catalogue pair, this pair — except
   the pages card at 338, a 212-pixel product page with a 188-pixel collection
   page laid 150 across. So all four sit within two pixels of a single scale,
   the fit shrinks every one of them by the same factor to fit its column,
   and four cards read as four cards at one magnification rather than at
   four.

   Like the other two pairs, this is a stack rather than a positioned cluster,
   so it takes no offset from its card and has no `style` prop to be given
   one.
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

/* ————————————————————————————————————————————————————————————
   THE WEBSITE BACKEND.

   Two screens, and they are the two ends of the same job. Above is the
   products table, 1206 by 497: the sidebar, the columns, every row Active.
   Below is one row of that table opened, 1206 by 954 — the edit page for
   Green Onyx Baguette Drop Earrings, which sits in the table above, with
   its title, its description, its media grid, its category and its product
   organisation sidebar. The backend is the table and the row, and the pair
   shows bulk management and single-product care the way the work did them:
   together.

   At 340 wide their own ratios come out as 140 and 269, each within a tenth
   of a percent of the truth, so `object-cover` clips rather than crops and
   no column of the table goes missing at an edge.
   ———————————————————————————————————————————————————————————— */

export const BackendPair: React.FC = () => (
  <div className="absolute flex w-[340px] flex-col gap-3">
    <div className="h-[140px] overflow-hidden" style={{ boxShadow: FLOAT }}>
      <BoardPhoto
        src="/portfolio-assets/website-backend.jpeg"
        alt="Screenshot of the Shopify products table, with the sidebar and product rows showing status, inventory, category and vendor columns"
        width={1206}
        height={497}
        plate="#F1DFD2"
        className="h-full"
        loading="eager"
      />
    </div>
    <div className="h-[269px] overflow-hidden" style={{ boxShadow: FLOAT }}>
      <BoardPhoto
        src="/portfolio-assets/website-backend-2.jpeg"
        alt="Screenshot of the Shopify edit page for Green Onyx Baguette Drop Earrings, showing the title, description, media grid and product organisation sidebar"
        width={1206}
        height={954}
        plate="#F1DFD2"
        className="h-full"
        loading="eager"
      />
    </div>
  </div>
);
