import React from 'react';
import { BoardPhoto } from './aadiyaMarks';
import { photo, type PhotoKey } from './photos';

/**
 * THE WEBSITE, BUILT TWICE.
 *
 * Two sections of the e-commerce board are the same website seen on two
 * devices, and both are constructed rather than screenshotted. That is a
 * deliberate reversal of what a portfolio board normally does, where a
 * mock-up is an image.
 *
 * The reason is fidelity to the work. A screenshot of the real store would be
 * more truthful about the finished site and less truthful about the
 * internship, because the specification this board is built from lists exactly
 * what the header, the hero and the category row said, and a screenshot cannot
 * be edited to say it. The brief also asks for the interface to be legible, and
 * a photograph of a screen at this size is a grey rectangle. Type set in the
 * page's own faces stays sharp at any scale, which matters on a board that is
 * about to be scaled down to fit a window.
 *
 * Every real string the brief specifies is present and spelled as given. The
 * only invention is the photography behind the type, which is drawn from the
 * shared pool, and the alt text for each of those says what the picture is
 * doing rather than what is in it, for the same reason the other board's does.
 */

/* ————————————————————————————————————————————————————————————
   PIECES SMALL ENOUGH TO NEED THEIR OWN NAMES.

   A shopping bag, a magnifier, a star. Three glyphs that appear inside the
   mock-ups at four to seven pixels across, which is too small for an icon
   library's stroke weight and far too small for its viewBox snapping. Drawn
   here at the size they are actually used, they stay crisp and they inherit the
   board's ink rather than a library's defaults.
   ———————————————————————————————————————————————————————————— */

const Bag: React.FC<{ size?: number; colour?: string }> = ({ size = 9, colour = '#3A3428' }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none" aria-hidden="true" focusable="false">
    <path
      d="M2.4 4.2h7.2l-.6 6.2H3z"
      stroke={colour}
      strokeWidth="0.9"
      strokeLinejoin="round"
    />
    <path
      d="M4.3 4.2V3a1.7 1.7 0 0 1 3.4 0v1.2"
      stroke={colour}
      strokeWidth="0.9"
      strokeLinecap="round"
    />
  </svg>
);

const Lens: React.FC<{ size?: number; colour?: string }> = ({ size = 9, colour = '#3A3428' }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none" aria-hidden="true" focusable="false">
    <circle cx="5.1" cy="5.1" r="3.1" stroke={colour} strokeWidth="0.9" />
    <path d="M7.4 7.4 10 10" stroke={colour} strokeWidth="0.9" strokeLinecap="round" />
  </svg>
);

const Star: React.FC<{ size?: number; colour?: string }> = ({ size = 7, colour = '#C08A2E' }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" aria-hidden="true" focusable="false">
    <path d="M6 .9 7.5 4.3l3.6.4-2.7 2.4.8 3.5L6 8.8 2.8 10.6l.8-3.5L.9 4.7l3.6-.4Z" fill={colour} />
  </svg>
);

/* ————————————————————————————————————————————————————————————
   THE GOOGLE SHEETS MARK.

   Section 03's main visual is a spreadsheet, and a spreadsheet without its
   document mark reads as a table. The mark is the one recognisable piece of
   third-party branding in the whole board — it is there because the brief names
   Google Sheets explicitly, and it is drawn rather than downloaded so it stays
   sharp and costs nothing.
   ———————————————————————————————————————————————————————————— */

const SheetsMark: React.FC<{ size?: number }> = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
    <path d="M2 1h12v14H2z" fill="#0F9D58" opacity="0.18" />
    <path
      d="M2 1h12v14H2z"
      fill="none"
      stroke="#0F9D58"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <path d="M2 6h12M2 10.5h12M6.6 1v14M10.4 1v14" stroke="#0F9D58" strokeWidth="0.9" />
  </svg>
);

/* ————————————————————————————————————————————————————————————
   A FROSTED WINDOW.

   Every screenshot on this board is a document or an interface sitting on top
   of another, and all of them need a soft drop shadow to stop them reading as
   flat diagrams. This one class supplies it, and the reason the shadow is so
   tight and so far down is that the objects are meant to be lying on pink paper
   under soft studio light — a shadow that spread or lifted would put them in
   mid-air.
   ———————————————————————————————————————————————————————————— */

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
   11.8% in from each side, 4.5% from the top and 15.5% from the bottom — the
   proportions the reference project's own frame uses, which is what makes this
   the same device rather than an approximation of it.

   THE FRAME IS AUTHORED AT 654 BY 390 rather than filling its column, and that
   number is not a preference. The website inside it is laid out in absolute
   pixels — a 30-pixel header, a 132-pixel hero, 74-pixel category tiles — so it
   only looks like itself at roughly 500 by 312, the size it was drawn at. A
   frame that filled its column would stretch that fixed layout to whatever width
   the column happened to be, and the header would stop being a header. So the
   frame is sized so the cutout comes out at 500 by 312: 500 over 0.764 is 654
   wide, 312 over 0.80 is 390 tall, and the site then renders at its authored
   size inside a real machine. The whole assembly is scaled afterwards, as one
   object, by the fit in `CommerceBoard`.

   Two things went with the drawn lid and are worth naming. The brand's name was
   written across the laptop's chin, which is not something a real machine
   carries and had no bezel left to sit in. And the hand-tuned two-layer cast
   shadow is replaced by the reference's own device shadow, a single 18/24 drop
   at 30% — one value instead of four, and it follows the PNG's silhouette,
   which a shadow on a rectangle could never do.
   ———————————————————————————————————————————————————————————— */

const NAV = ['Shop', 'Collections', 'About', 'Journal'] as const;

const CATEGORIES = [
  { label: 'Necklaces', key: 'tileNecklace' },
  { label: 'Earrings', key: 'tileEarring' },
  { label: 'Rings', key: 'tileRing' },
  { label: 'Bracelets', key: 'tileBracelet' },
] as const satisfies ReadonlyArray<{ label: string; key: PhotoKey }>;

/**
 * THE WEBSITE ITSELF — everything that is the site rather than the machine.
 *
 * Top to bottom: a cream header with the wordmark, four navigation items and two
 * icons; a hero carrying a headline and one call to action over a photograph;
 * and a row of four category tiles. Nothing else. A jewellery home page is mostly
 * whitespace, and reproducing that whitespace at this scale is the difference
 * between a screenshot of a site and a diagram of one.
 *
 * Drawn, not screenshotted, and every number in it is absolute — which is the
 * one constraint the frame above has to respect, and the reason the frame is a
 * fixed size rather than a fluid one.
 */
const WebsiteScreen: React.FC = () => (
  <div className="h-full w-full overflow-hidden bg-[#FFFBF6]">
    {/* HEADER — cream, as the brief specifies, with the wordmark at the left
        and the two icons hard against the right edge. */}
    <div className="flex h-[30px] items-center justify-between bg-[#FFF9F1] px-3">
      <span className="font-editorial text-[8.5px] tracking-[0.6px] text-[#2E2A22]">
        AADIYA JEWELS
      </span>
      <div className="flex items-center gap-4">
        {NAV.map((item) => (
          <span
            key={item}
            className="font-body text-[5.5px] uppercase tracking-[0.6px] text-[#5B5145]"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-2.5">
        <Lens />
        <Bag />
      </div>
    </div>

    {/* HERO — a photograph under a warm wash, the headline at the left in the
        same high-contrast serif the board's own title uses, and one button. */}
    <div className="relative h-[132px] overflow-hidden">
      <BoardPhoto
        src={photo('siteHero')}
        alt="Jewellery lifestyle photograph used as the website hero"
        plate="#EFE0D2"
        className="absolute inset-0"
        loading="eager"
      />
      <span className="absolute inset-0 bg-gradient-to-r from-[#F3E2D3]/88 via-[#F3E2D3]/40 to-[#E9D3C4]/25" />
      <div className="absolute inset-y-0 left-0 flex flex-col justify-center px-5">
        <p className="font-editorial text-[20px] leading-[1.02] text-[#2E2A22]">
          Timeless
          <br />
          Elegance
        </p>
        <span className="mt-2.5 w-fit bg-[#2E2A22] px-2.5 py-[5px]">
          <span className="font-body text-[5px] uppercase tracking-[1.2px] text-[#FFFBF6]">
            Shop Now
          </span>
        </span>
      </div>
    </div>

    {/* CATEGORY ROW — four tiles, and this is the only part of the site the
        brief names twice: it is the row that also becomes the collection page
        further along the board. */}
    <div className="grid grid-cols-4 gap-2.5 px-3 pt-3">
      {CATEGORIES.map((category) => (
        <div key={category.key} style={{ height: 74 }}>
          <BoardPhoto
            src={photo(category.key)}
            alt={`${category.label} category photograph`}
            plate="#F6E7DC"
            className="h-[58px] w-full"
          />
          <span className="font-body mt-1 block text-center text-[5.5px] uppercase tracking-[0.7px] text-[#4A4038]">
            {category.label}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export const WebsiteLaptop: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <div style={style} className="absolute">
    {/* The device's own shadow, not a box-shadow: the PNG has an alpha
        silhouette, so a drop-shadow follows the shape of the machine — the
        hinge, the base, the corners — and a rectangle behind it never could. */}
    <div className="drop-shadow-[0_18px_24px_rgba(60,63,58,0.3)]">
      <div className="relative h-[390px] w-[654px]">
        <div className="absolute inset-x-[11.8%] top-[4.5%] bottom-[15.5%] overflow-hidden rounded-[4px] bg-[#FFFBF6]">
          <WebsiteScreen />
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

      <div className="relative h-full w-full overflow-hidden rounded-[12px] bg-[#FFFBF6]">
        {/* STATUS BAR — the time and two indicators, so the screen has a top
            edge rather than starting flush. */}
        <div className="flex h-[11px] items-center justify-between px-2.5 pt-0.5">
          <span className="font-body text-[5px] font-medium text-[#2E2A22]">9:41</span>
          <div className="flex items-center gap-[3px]">
            <span className="h-[3px] w-[7px] rounded-[1px] bg-[#2E2A22]" />
            <span className="h-[3px] w-[4px] rounded-[1px] bg-[#2E2A22]" />
            <span className="h-[4px] w-[6px] rounded-[1px] border border-[#2E2A22]" />
          </div>
        </div>

        {/* HERO */}
        <div className="relative h-[86px] overflow-hidden">
          <BoardPhoto
            src={photo('siteHeroAlt')}
            alt="Jewellery lifestyle photograph used as the mobile hero"
            plate="#EFE0D2"
            className="absolute inset-0"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-[#F3E2D3]/85 to-[#F3E2D3]/20" />
          <p className="font-editorial absolute bottom-2 left-2.5 text-[13px] leading-[1.04] text-[#2E2A22]">
            Everyday
            <br />
            Elegance
          </p>
        </div>

        <div className="px-2.5 pt-1.5">
          <span className="block w-fit bg-[#2E2A22] px-2 py-[4px]">
            <span className="font-body text-[4.5px] uppercase tracking-[1.1px] text-[#FFFBF6]">
              Shop Now
            </span>
          </span>
        </div>

        {/* BESTSELLERS — two product cards, which is what the brief asks for and
            also the smallest place on the board where a product photograph has
            to survive being 43 pixels wide. */}
        <div className="px-2.5 pt-2.5">
          <span className="font-body block text-[5.5px] uppercase tracking-[0.9px] text-[#4A4038]">
            Our Bestsellers
          </span>
          <div className="mt-1.5 grid grid-cols-2 gap-1.5">
            <div>
              <BoardPhoto
                src={photo('bestsellerA')}
                alt="Gold hoop earrings product photograph"
                plate="#F6E7DC"
                className="h-[38px] w-full"
              />
              <span className="font-body mt-[3px] block text-[4px] leading-[1.2] text-[#6B6155]">
                Gold hoop earrings
              </span>
            </div>
            <div>
              <BoardPhoto
                src={photo('bestsellerB')}
                alt="Pearl necklace product photograph"
                plate="#F6E7DC"
                className="h-[38px] w-full"
              />
              <span className="font-body mt-[3px] block text-[4px] leading-[1.2] text-[#6B6155]">
                Pearl necklace
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* HOLE PUNCH */}
      <span className="absolute left-1/2 top-[7px] z-30 h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-[#05060A] ring-1 ring-white/10" />
    </div>
  </div>
);
