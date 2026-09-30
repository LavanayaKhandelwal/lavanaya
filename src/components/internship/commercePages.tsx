import React from 'react';
import { BoardPhoto } from './aadiyaMarks';
import { photo } from './photos';

/**
 * THE OTHER PAGES.
 *
 * A product page and a collection page, and they are the two objects on the
 * section that argue for the internship rather than describe it. Everything above
 * them is inventory: what the site looked like, what the catalogue said, what the
 * backend contained. What is here is judgement — how a product page was laid out,
 * what a collection page led with — and that is the part of a website internship
 * that is actually the intern's work.
 *
 * Both are built rather than screenshotted, and the reason they still are is the
 * one the whole of this section is now arguing about. A page is a structure: a
 * thumbnail gallery beside an image beside a buy box, a header above a grid. A
 * reader recognises a page by its structure and a structure can be rebuilt at any
 * size, so drawing one loses nothing. Drawing a campaign banner loses the banner,
 * because a banner is a finished composition and not a structure — which is why
 * the banners and the catalogue are photographs now, in `commerceShots`.
 *
 * A third page joined them in this card and it is the one that settles the
 * argument for this file. A mobile page arrived as an export, and a page is a
 * structure, so the rule above would have licensed drawing that one exactly as it
 * licensed drawing these two. A file settles it the other way: where a real
 * export exists, a drawing is not a smaller claim about the work, it is a
 * substitute for it. These two stay drawn for the only reason that leaves — no
 * export of them exists to photograph. The card is two drawings and one
 * photograph, and that mix is the honest description of the work rather than a
 * compromise.
 *
 * THE TWO ARE IN FLOW RATHER THAN POSITIONED, which is the one change to this
 * file's own mechanics and the only one. They used to be absolutely placed
 * inside the card's fitted stage, a hundred and fifty across and thirty-five
 * down, because a positioned pair is how the two of them were made to overlap.
 * The mobile page needs a column of its own beside them, and a column cannot be
 * measured out of two absolutely placed children — their rects do not add up to
 * anything. So the pair is a flex column with the mobile page as a flex sibling
 * of it, which hands the one number this file no longer has to guess to the
 * browser: how tall the pair actually is. Neither page is a different size than
 * it was, and the cluster is still 338 wide, which is what keeps this card at
 * the same magnification as the other three.
 *
 * The banners used to be in this file, and the pop-up with them. All three went
 * when the real designs arrived.
 */

/* The same two-layer shadow as the rest of the section, so these two objects
   read as laid out by one hand rather than collected from two sources. */
const FLOAT = '0 14px 26px -14px rgba(58,38,40,0.5), 0 2px 5px rgba(58,38,40,0.1)';

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
    className="relative w-[212px] shrink-0 overflow-hidden rounded-[4px] bg-white"
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
    className="relative w-[188px] shrink-0 overflow-hidden rounded-[4px] bg-[#FFF6F2]"
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
        src={photo('collectionHeader')}
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
