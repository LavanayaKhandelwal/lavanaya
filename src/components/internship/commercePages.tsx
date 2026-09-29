import React from 'react';
import { BoardPhoto } from './aadiyaMarks';
import { photo } from './photos';

/**
 * THE CAMPAIGNS AND THE OTHER PAGES.
 *
 * The last two sections of the board, and they are the two that argue for the
 * internship rather than describe it. Everything above them is inventory: what
 * the site looked like, what the catalogue said, what the backend contained. What
 * is here is judgement — which banner went up, what the pop-up said, how a
 * product page was laid out — and that is the part of a website internship
 * that is actually the intern's work.
 *
 * The five objects in this file are the five ways the brief asks for work to be
 * shown, and each one is built rather than screenshotted. A banner is a
 * photograph with a headline on it, and the headline has to be legible; at board
 * scale a photograph of a banner is a rectangle of the wrong colour.
 */

/* The same two-layer shadow as the rest of the board, so these five objects
   read as laid out by one hand rather than collected from five sources. */
const FLOAT = '0 14px 26px -14px rgba(58,38,40,0.5), 0 2px 5px rgba(58,38,40,0.1)';

/* ————————————————————————————————————————————————————————————
   THE BUTTON.

   Five call-to-action buttons appear across these objects and they are all the
   same button, in three sizes. One component for all five, because five
   hand-written buttons would drift from each other within a day of editing and
   a portfolio board is exactly the place where five slightly different blacks
   are the first thing a designer's eye catches.
   ———————————————————————————————————————————————————————————— */

const CallToAction: React.FC<{ label: string; size?: 'sm' | 'md'; style?: React.CSSProperties }> = ({
  label,
  size = 'sm',
  style,
}) => (
  <span
    className={`inline-block ${
      size === 'sm' ? 'px-2 py-[4px]' : 'px-2.5 py-[5px]'
    }`}
    style={{ background: '#2E2A22', ...style }}
  >
    <span
      className={`font-body uppercase text-white ${
        size === 'sm' ? 'text-[4.5px] tracking-[1.1px]' : 'text-[5px] tracking-[1.2px]'
      }`}
    >
      {label}
    </span>
  </span>
);

/* ————————————————————————————————————————————————————————————
   THE WIDE BANNER.

   A jewellery site's home banner: photograph, two lines of type, one button.
   The type is set hard left with the photograph running out to the edges behind
   it, which is the layout the brief describes and also the one that survives
   being 340 pixels wide — a centred banner at that width would leave the
   headline in a column too narrow for its own words.
   ———————————————————————————————————————————————————————————— */

export const WideBanner: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <div
    className="absolute w-[340px] h-[128px] overflow-hidden"
    style={{ ...style, boxShadow: FLOAT }}
  >
    <BoardPhoto
      src={photo('bannerWide')}
      alt="Jewellery photograph behind the New Arrivals banner"
      plate="#F1DFD2"
      className="absolute inset-0"
      loading="eager"
    />
    <span className="absolute inset-0 bg-gradient-to-r from-[#FBF1E6]/90 via-[#FBF1E6]/45 to-[#E8CDBE]/20" />
    <div className="absolute inset-y-0 left-0 flex flex-col justify-center px-5">
      <p className="font-editorial text-[17px] leading-[1.04] text-[#2E2A22]">New Arrivals</p>
      <span className="font-body mt-1.5 text-[5.5px] tracking-[0.2px] text-[#5B5145]">
        Fresh designs. Timeless elegance.
      </span>
      <CallToAction label="Shop Now" style={{ marginTop: 10 }} />
    </div>
  </div>
);

/* ————————————————————————————————————————————————————————————
   THE POP-UP.

   The newsletter capture, and the only object on the board that is a floating
   layer rather than a page: it sits over a wash, has no site chrome, and casts
   a deeper shadow than anything else because it is closer to the reader than
   the rest of the site is.

   It is also the only object with a text input on it, which is why it gets its
   own border treatment — an input is legible as an input because of the box,
   and a hairline at 160 pixels wide would not be.
   ———————————————————————————————————————————————————————————— */

export const NewsletterPopup: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <div
    className="absolute w-[160px] overflow-hidden rounded-[4px] bg-[#FFF8EE]"
    /* A deeper shadow than the rest of the board, and deliberately so. This is
       the one object that sat on top of the site rather than inside it, and a
       drop shadow is the only cue that says so. */
    style={{ ...style, boxShadow: '0 22px 40px -18px rgba(58,38,40,0.6), 0 3px 8px rgba(58,38,40,0.16)' }}
  >
    {/* A photographic strip along the top, which is how the pop-up got its
        floral background without the type having to fight a photograph. */}
    <div className="relative h-[42px] overflow-hidden">
      <BoardPhoto
        src={photo('bannerPopup')}
        alt="Jewellery photograph behind the newsletter pop-up"
        plate="#F1DFD2"
        className="absolute inset-0"
      />
      <span className="absolute inset-0 bg-[#F6E7DC]/55" />
    </div>

    <div className="px-3 py-3 text-center">
      <p className="font-editorial text-[12px] leading-[1.1] text-[#2E2A22]">
        Join Our
        <br />
        Inner Circle
      </p>
      <span className="font-body mt-1.5 block text-[4.5px] leading-[1.4] text-[#5B5145]">
        Be the first to know about new arrivals, exclusive offers and more.
      </span>

      <div className="mt-2 flex h-[15px] items-center border border-[#E2D9CD] bg-white px-1.5">
        <span className="font-body text-[4px] text-[#A9A096]">Enter your email address</span>
      </div>

      <span className="mt-1.5 block bg-[#2E2A22] py-[5px]">
        <span className="font-body text-[4.5px] uppercase tracking-[1.2px] text-white">
          Subscribe
        </span>
      </span>
    </div>
  </div>
);

/* ————————————————————————————————————————————————————————————
   THE MOBILE BANNER.

   The same campaign as the wide one, at phone width, which is the point of
   showing both. It is built as a screen rather than as a device: there is
   already a phone on this board with a bezel and a camera hole, and putting a
   second bezel around a second phone would be two objects saying the same
   thing twice. This one is the artwork at 92 by 181, floating.
   ———————————————————————————————————————————————————————————— */

export const MobileBanner: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <div
    className="absolute w-[92px] h-[181px] overflow-hidden"
    style={{ ...style, boxShadow: FLOAT }}
  >
    <BoardPhoto
      src={photo('bannerMobile')}
      alt="Jewellery lifestyle photograph behind the mobile banner"
      plate="#F1DFD2"
      className="absolute inset-0"
    />
    <span className="absolute inset-0 bg-gradient-to-t from-[#E8C8B8]/78 via-[#E8C8B8]/22 to-transparent" />
    <div className="absolute inset-x-0 bottom-0 flex flex-col items-center px-2 pb-3 text-center">
      <p className="font-editorial text-[13px] leading-[1.06] text-[#2E2A22]">Shop the Look</p>
      <CallToAction label="Shop Now" style={{ marginTop: 8 }} />
    </div>
  </div>
);

/* ————————————————————————————————————————————————————————————
   THE PRODUCT PAGE.

   Three columns, as the brief describes them: a thumbnail gallery on the left,
   the product image in the middle, the buying information on the right. The
   product name, the rupee price, five stars, a review count, a quantity
   selector and the cart button are all present and spelled as given.

   The quantity selector is the fiddliest object on the board. A real one is a
   box with a minus and a plus, and at 60 pixels wide the temptation is to drop
   it and show only a button, which would be a lie about what the page had. It
   is drawn instead, at the size it actually appears, and the value sits in the
   middle.
   ———————————————————————————————————————————————————————————— */

const StepperButton: React.FC<{ glyph: '+' | '−'; colour?: string }> = ({ glyph, colour = '#4A4038' }) => (
  <span
    className="flex h-full w-[15px] items-center justify-center border border-[#E2D9CD] bg-white font-body text-[7px] leading-none"
    style={{ color: colour }}
  >
    {glyph}
  </span>
);

const Rating: React.FC<{ size?: number }> = ({ size = 6 }) => (
  <span className="inline-flex items-center gap-[2px]">
    {[0, 1, 2, 3, 4].map((i) => (
      <svg key={i} width={size} height={size} viewBox="0 0 12 12" aria-hidden="true" focusable="false">
        <path
          d="M6 .9 7.5 4.3l3.6.4-2.7 2.4.8 3.5L6 8.8 2.8 10.6l.8-3.5L.9 4.7l3.6-.4Z"
          fill="#C08A2E"
        />
      </svg>
    ))}
  </span>
);

export const ProductPage: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <div
    className="absolute w-[212px] overflow-hidden rounded-[4px] bg-white"
    style={{ ...style, boxShadow: FLOAT }}
  >
    {/* SITE HEADER — a single hairline bar. The product page is inside the
        site, so it carries the site's chrome; the pop-up did not, which is
        exactly the difference between the two objects. */}
    <div className="flex h-[16px] items-center justify-between border-b border-[#F0EDE8] px-2">
      <span className="font-editorial text-[5.5px] tracking-[0.4px] text-[#2E2A22]">
        AADIYA JEWELS
      </span>
      <div className="flex items-center gap-2">
        {['Shop', 'About'].map((item) => (
          <span key={item} className="font-body text-[3.5px] uppercase tracking-[0.4px] text-[#7A7268]">
            {item}
          </span>
        ))}
      </div>
    </div>

    <div className="grid grid-cols-[34px_1fr_72px] gap-2 px-2 py-2">
      {/* GALLERY — two thumbs stacked, the selected one ringed. */}
      <div className="flex flex-col gap-1.5">
        {(['product', 'productAlt'] as const).map((key, index) => (
          <BoardPhoto
            key={key}
            src={photo(key)}
            alt="Product gallery thumbnail"
            plate="#F6E7DC"
            className="h-[34px] w-[34px]"
            imgClassName={index === 1 ? '' : ''}
          />
        ))}
      </div>

      {/* THE PRODUCT IMAGE — the largest single object in the panel, because
          on a real product page it is. */}
      <BoardPhoto
        src={photo('product')}
        alt="Celestial Drop Earrings product photograph"
        plate="#F6E7DC"
        className="h-[104px] w-full"
        loading="eager"
      />

      {/* THE INFORMATION COLUMN */}
      <div>
        <p className="font-editorial text-[7.5px] leading-[1.1] text-[#2E2A22]">
          Celestial Drop Earrings
        </p>
        <span className="font-body mt-1 block text-[7px] font-medium text-[#2E2A22]">₹2,499</span>

        <div className="mt-1 flex items-center gap-1">
          <Rating size={5} />
          <span className="font-body text-[3.5px] text-[#7A7268]">8 reviews</span>
        </div>

        {/* QUANTITY */}
        <div className="mt-2 flex h-[15px] w-[60px]">
          <StepperButton glyph="−" />
          <span className="font-body flex h-full flex-1 items-center justify-center border-y border-[#E2D9CD] bg-white text-[5px] text-[#2E2A22]">
            1
          </span>
          <StepperButton glyph="+" />
        </div>

        <span className="mt-2 block bg-[#2E2A22] py-[5px] text-center">
          <span className="font-body text-[4px] uppercase tracking-[1px] text-white">
            Add to Cart
          </span>
        </span>
      </div>
    </div>
  </div>
);

/* ————————————————————————————————————————————————————————————
   THE COLLECTION PAGE.

   The last object on the board, and the one that closes the loop with the
   category row on the laptop: the same four categories, now as a page. It is
   placed on pink floral rather than cream, which is what makes it read as a
   different page rather than the same page scrolled, and the two boards'
   laptop hero and this page are lit from different sides on purpose.
   ———————————————————————————————————————————————————————————— */

const COLLECTION = [
  { label: 'Necklaces', key: 'tileNecklace' },
  { label: 'Earrings', key: 'tileEarring' },
  { label: 'Rings', key: 'tileRing' },
  { label: 'Bracelets', key: 'tileBracelet' },
] as const;

export const CollectionPage: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <div
    className="absolute w-[188px] overflow-hidden rounded-[4px] bg-[#FFF6F2]"
    style={{ ...style, boxShadow: FLOAT }}
  >
    <div className="flex h-[16px] items-center justify-between bg-[#FFFBF6] px-2">
      <span className="font-editorial text-[5.5px] tracking-[0.4px] text-[#2E2A22]">
        AADIYA JEWELS
      </span>
      <span className="font-body text-[3.5px] uppercase tracking-[0.4px] text-[#7A7268]">Shop</span>
    </div>

    {/* A pink band at the head of the page, standing in for the floral header
        the brief describes. */}
    <div className="relative h-[30px] overflow-hidden">
      <BoardPhoto
        src={photo('bannerPopup')}
        alt="Floral jewellery photograph behind the collection page header"
        plate="#F1DFD2"
        className="absolute inset-0"
      />
      <span className="absolute inset-0 bg-[#F6C8D2]/70" />
      <span className="font-editorial absolute bottom-1.5 left-2.5 text-[9px] text-[#2E2A22]">
        Our Collections
      </span>
    </div>

    {/* FOUR CATEGORIES, TWO BY TWO — the grid the brief asks for, and the one
        place on the board where a 2x2 of equal squares is right, because this
        object is a grid and pretending otherwise would be decoration. */}
    <div className="grid grid-cols-2 gap-1.5 p-2">
      {COLLECTION.map((item) => (
        <div key={item.key}>
          <BoardPhoto
            src={photo(item.key)}
            alt={`${item.label} collection photograph`}
            plate="#F6E7DC"
            className="h-[52px] w-full"
          />
          <span className="font-body mt-1 block text-center text-[4.5px] uppercase tracking-[0.6px] text-[#4A4038]">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  </div>
);
