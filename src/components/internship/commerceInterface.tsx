import React from 'react';
import { BoardPhoto } from './aadiyaMarks';

/**
 * THE HERO — ONE LAPTOP, ONE PHONE, BOTH SHOWING THE REAL SITE.
 *
 * The laptop is a photograph of a real MacBook Pro 16 with the desktop
 * homepage on its screen, and the phone is a drawn frame with the mobile
 * Shop by Category screen on its. The frames are structures; the screens
 * are the thing itself. Neither screen is drawn any more, so this file holds
 * no mock-ups — just the two devices, the real frame PNG, and the comments
 * explaining why each one is the size it is.
 */

/* ————————————————————————————————————————————————————————————
   SECTION 01, PART ONE — THE DESKTOP WEBSITE, ON A REAL LAPTOP.

   The device is a photograph of a real MacBook Pro 16, not a drawing of one —
   `macbook-pro-16.png`, the frame used by the internship page this section's
   interface was rebuilt in, brought over byte for byte. A drawn laptop is the
   one thing a portfolio cannot get away with on the object it is putting front
   and centre, because a laptop is a shape everybody already knows: the drawn one
   had a bezel width, a base thickness and a brand name on the chin that no
   machine in the world has, and all three are the details the eye checks first.

   The frame is an 800 by 489 PNG with the panel cut into it, and the cutout is
   the transparency punched into that PNG, measured off its alpha channel
   rather than taken on trust: 9.25% in from each side, 3.68% from the top
   and 10.02% from the bottom. An earlier revision used the reference
   project's own 11.8 / 4.5 / 15.5, which left the screen floating inside
   the display with padding on three sides — measured against this file,
   those numbers are simply smaller than the hole cut in it.

   THE FRAME IS AUTHORED AT 654 BY 390 rather than filling its column — the
   reference project's own size for this device, kept because the phone is
   seated against it. At that size the cutout comes out at 533.01 by 336.57.
   The desktop homepage screenshot is 1600 by 1000, a ratio of 1.6 against
   the cutout's 1.5837, so it covers the panel with about one percent cropped
   off the sides — edge pixels of a full-page screenshot, and no headline
   falls off an edge. The whole assembly is scaled afterwards, as one object,
   by the fit in `CommerceBoard`.

   Two things went with the drawn lid and are worth naming. The brand's name was
   written across the laptop's chin, which is not something a real machine
   carries and had no bezel left to sit in. And the hand-tuned two-layer cast
   shadow is replaced by the reference's own device shadow, a single 18/24 drop
   at 30% — one value instead of four, and it follows the PNG's silhouette,
   which a shadow on a rectangle could never do.
   ———————————————————————————————————————————————————————————— */

export const WebsiteLaptop: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <div style={style} className="absolute">
    {/* The device's own shadow, not a box-shadow: the PNG has an alpha
        silhouette, so a drop-shadow follows the shape of the machine — the
        hinge, the base, the corners — and a rectangle behind it never could. */}
    <div className="drop-shadow-[0_18px_24px_rgba(60,63,58,0.3)]">
      <div className="relative h-[390px] w-[654px]">
        <div className="absolute inset-x-[9.25%] top-[3.68%] bottom-[10.02%] overflow-hidden rounded-[4px] bg-[#FDFCF8]">
          {/* The desktop homepage, 1600 by 1000 in a cutout of ratio 1.5837 —
              about one percent cropped off the sides, which is edge pixels of
              a full-page screenshot. The frame is the machine; this is the
              site. */}
          <BoardPhoto
            src="/portfolio-assets/website-laptop-screen.jpeg"
            alt="Screenshot of the Aadiya Jewels desktop homepage, with the navigation, an Everyday Gold Jewellery hero and a model wearing emerald jewellery"
            width={1600}
            height={1000}
            plate="#FDFCF8"
            className="h-full"
            loading="eager"
          />
        </div>
        <img
          src="/portfolio-assets/macbook-pro-16.png"
          alt=""
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute inset-0 h-full w-full"
        />
      </div>
    </div>
  </div>
);

/* ————————————————————————————————————————————————————————————
   SECTION 01, PART TWO — THE SAME SITE ON A PHONE.

   Overlapping the laptop's lower right is the one place this board uses a
   literal overlap rather than an implied one, and it is worth saying why: the
   same site at two widths is the single clearest statement that the work was
   responsive, and the only way to make that claim in one glance is to put the
   two widths next to each other on purpose.

   The frame is drawn and the screen is not: buttons, gloss and hole punch are
   structures, while the Shop by Category screen inside them is the thing
   itself, shown from the real file.
   ———————————————————————————————————————————————————————————— */

export const WebsitePhone: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <div style={style} className="absolute">
    {/* SIDE BUTTONS */}
    <span className="absolute top-[58px] -left-[2px] h-[20px] w-[2px] rounded-full bg-[#24262B]" />
    <span className="absolute top-[92px] -left-[2px] h-[32px] w-[2px] rounded-full bg-[#24262B]" />
    <span className="absolute top-[74px] -right-[2px] h-[42px] w-[2px] rounded-full bg-[#24262B]" />

    <div
      className="relative w-[116px] h-[236px] rounded-[15px] bg-[#101114] p-[3px]"
      style={{ boxShadow: '0 22px 32px -16px rgba(40,20,26,0.6)' }}
    >
      {/* GLOSS */}
      <span className="pointer-events-none absolute inset-[3px] z-20 rounded-[12px] bg-gradient-to-br from-white/12 via-transparent to-white/5" />

      <div className="relative h-full w-full overflow-hidden rounded-[12px] bg-[#FDFCF8]">
        {/* The screen is the real file, not a drawing of it. The frame around
            it — buttons, gloss, hole punch — is still drawn, because a frame
            is a structure and the screen is the thing itself. */}
        <BoardPhoto
          src="/portfolio-assets/website-phone-screen.jpeg"
          alt="Screenshot of the Aadiya Jewels mobile site's Shop by Category screen, with Earrings, Bracelets, Rings and Pendants tiles"
          width={640}
          height={1280}
          plate="#FDFCF8"
          className="h-full"
          loading="eager"
        />
      </div>

      {/* HOLE PUNCH */}
      <span className="absolute left-1/2 top-[7px] z-30 h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-[#05060A] ring-1 ring-white/10" />
    </div>
  </div>
);
