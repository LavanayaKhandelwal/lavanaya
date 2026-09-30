import React from 'react';
import { BoardPhoto } from './aadiyaMarks';

/**
 * THE FOUR CARDS THAT SHOW THE WORK RATHER THAN A DIAGRAM OF IT.
 *
 * What is still drawn on this section — the frame around the phone's screen —
 * is drawn because it is an object a reader recognises by its structure, and a
 * structure can be rebuilt at any size. A backend table, a catalogue workbook
 * and a campaign banner are a different thing. They are finished artefacts, they
 * were made once, and a plausible-looking reconstruction of one is not a weaker
 * version of the evidence — it is a substitute for it. So those three cards
 * show the actual files.
 *
 * The fourth card is where both halves of that argument met, and it has been
 * resolved in the direction the rule points. It held a real mobile page beside
 * two drawn desktop pages, and a card that puts an export next to two
 * reconstructions of the same subject invites a reader to prefer the
 * reconstructions, because those are the ones that look crisp at thumbnail size
 * — which is the whole reason this section stopped drawing finished work. So
 * the two drawings went, `commercePages` went with them, and the card is one
 * real page.
 *
 * That is the whole argument for photographs here, and it is worth being precise
 * about the limit of it, because the section is not photographs all the way
 * down. One object on it is still drawn — the frame around the phone's screen —
 * and a drawing is the right answer for it. A drawn object is a claim about
 * what something looks like; a photograph is the thing. Where the claim would
 * be doing work that only the original can do, the original is what belongs in
 * the card.
 *
 * None of these seven is in the photograph pool, and that is deliberate rather
 * than an omission. Every file left in the pool is a frame from the brand shoot
 * or a report of it, and they are 1280 tall or 1206 by 670. These are exports
 * of finished web work at seven different shapes, and putting them in would
 * have meant either breaking that one-size table or lying about them. They are
 * named for what they are and served directly.
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
        plate="#FDFCF8"
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
        plate="#FDFCF8"
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
   authored at 340 — the backend pair, the catalogue pair, this pair, and the
   single page in the last card. One authored width for all four is what makes
   them one magnification rather than four: the fit shrinks each by the same
   factor to fit its column, so their heights keep one fixed order at every
   width instead of only at the width they were measured at.

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
        plate="#FDFCF8"
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
        plate="#FDFCF8"
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
        plate="#FDFCF8"
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
        plate="#FDFCF8"
        className="h-full"
        loading="eager"
      />
    </div>
  </div>
);

/* ————————————————————————————————————————————————————————————
   THE MOBILE PAGE.

   The whole of the last card now, and the only photograph in the section of a
   page rather than of a finished artefact. It arrived as an export — a
   full-page capture, 648 by 1280, in mobile proportions — and the section's own
   rule settles what happens to it. A page is a structure, so the rule would
   have licensed drawing this one exactly as it licensed drawing the two
   desktop pages that used to sit beside it. A file settles it the other way:
   where a real export exists, a drawing is not a smaller claim about the work,
   it is a substitute for the work.

   THOSE TWO DESKTOP PAGES ARE GONE, and the rule is why rather than a change of
   taste. A card holding a real page beside two invented ones invites a reader to
   prefer the invented ones, because those are the ones that stay crisp at
   thumbnail size — which is the whole reason this section stopped drawing
   finished things in the first place. So the two drawings went,
   `commercePages` went with them, and the seven pool photographs that only they
   read went with those. What the card now shows is one fewer object than the
   card's sentence describes; that is a question about the copy, and the copy
   was not touched.

   WHAT IS IN IT, read off the pixels rather than the filename: a site header,
   a two-up pair of campaign images, a two-column text section, and then two
   large image tiles with a product in each. A full-page capture rather than a
   single screen, which is why the file is a tall rectangle.

   162 BY 320 IS THE FILE'S OWN RATIO EXACTLY. 648 by 1280 reduces to 81 by
   160, and that is 81 by 160 at twice, so nothing is cropped and nothing is
   letterboxed and `object-contain` is belt and braces rather than a necessity.
   It is spelled with the v4 important modifier because `BoardPhoto` puts
   `object-cover` on every photograph it wraps, the two utilities share a
   specificity, and which one applies is decided by their order in the
   stylesheet — where `object-cover` is the later of the two.

   320 IS THE HEIGHT BUDGET, and it is the number that matters most here,
   because a portrait file in a fluid column is a trap: the fit scales by width,
   so any cluster holding one of these renders at available-width over 0.50625
   however narrow the cluster is, and one that simply filled this card's
   255-pixel column would come out 504 tall. The page is therefore authored
   inside this card's usual 340-wide cluster rather than filling it — the same
   authored width as the other three, which is what puts all four cards at one
   magnification and keeps their heights in one fixed order at every breakpoint
   rather than only at the width it was measured at.

   The ceiling on the height is 322.65, and it comes from the card this one
   replaces rather than from the row. The old three-object card was a 338-wide
   cluster holding a column of two drawn pages, and summing its fixed pixel
   heights — 119.25 for the product page, 193.50 for the collection page, and
   the 8 between them — makes it 320.75 tall, so a 340-wide cluster may be
   322.65 tall before this card is any bigger than the one it replaced. 320 is
   the largest whole multiple of 81 by 160 that fits under that. (The note this
   replaces said 336, and was 15 out; the drawings are gone, so the number was
   measured off the file in the revision that had them rather than trusted.)

   Under that ceiling nothing on the section moves. At four across, where the row
   is as tall as the backend card at 455 rendered pixels, this card comes to 407
   and the row is what it was — and it would be what it was for any height up
   to 384, so at that layout the section height does not really depend on this
   number at all. At two across and one across this card shares a row with one
   shorter card or with nothing, so its own height is its row's height; holding
   it under what the old card was is what keeps those two layouts from growing,
   and removing two objects from a card without that ceiling would have been the
   one way this change made the section taller. Swept from 360 to 1600 the grid
   is the same height to the pixel at two and four across and a shade under a
   pixel and a half shorter at one across, and the closest this card comes to
   being the tallest card in a row it shares is 12.5 pixels, at a viewport 812
   wide. The next exact frame up, 169.29 by 334.4, loses that at every width
   from 812 to 872.
   ———————————————————————————————————————————————————————————— */

export const OtherPage: React.FC = () => (
  <div className="absolute flex w-[340px] items-center justify-center">
    <div
      className="h-[320px] w-[162px] shrink-0 overflow-hidden rounded-[4px]"
      style={{ boxShadow: FLOAT }}
    >
      <BoardPhoto
        src="/portfolio-assets/website-other-page.jpeg"
        alt="Full-page screenshot of a further Aadiya Jewels website page in mobile proportions, with a site header, two campaign images side by side, a two-column text section and two large product tiles below"
        width={648}
        height={1280}
        plate="#FDFCF8"
        className="h-full"
        loading="eager"
        imgClassName="object-contain!"
      />
    </div>
  </div>
);
