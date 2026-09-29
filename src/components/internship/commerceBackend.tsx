import React from 'react';
import { BoardPhoto } from './aadiyaMarks';
import { photo } from './photos';

/**
 * THE BACK OFFICE, THE SHEETS, AND THE PAGES BEHIND THEM.
 *
 * Three sections of the e-commerce board, and all three are built rather than
 * screenshotted, for the same reason the website is: the brief specifies the
 * exact strings each one carries — five product names, six column headings,
 * four categories, a rupee price and a review count — and none of those can be
 * made legible inside a photograph of a screen at board scale.
 *
 * What these three have in common with the website is that they are the invisible
 * half of the internship. Nobody puts an admin sidebar on a portfolio; it is
 * here because the work was real and the board is meant to be evidence rather
 * than a mood. That is also why the Shopify panel is the largest object on the
 * sheet after the laptop, and why it is given the only green on the board.
 */

/* ————————————————————————————————————————————————————————————
   THE GREEN.

   The palette this board is built from has no green in it, and the brief adds
   one, for status pills and for the spreadsheet's document mark. That is a
   deliberate exception rather than an oversight: an interface is recognisable by
   its own colours, and a Shopify panel where the live badges are pink reads as
   a drawing of Shopify rather than as Shopify. The green is therefore used in
   exactly two places and nowhere else on the sheet.
   ———————————————————————————————————————————————————————————— */

const STATUS_GREEN = '#8BC9A1';
const STATUS_INK = '#1F4A34';

/* Every document and panel on this board lies on pink paper under soft studio
   light. A shadow that spreads or lifts would put them in mid-air, so both
   layers are tight and the second is barely there — it is there only to stop
   the object looking pasted. */
const FLOAT = '0 16px 30px -16px rgba(58,38,40,0.5), 0 2px 5px rgba(58,38,40,0.12)';

/* ————————————————————————————————————————————————————————————
   A TINY GLYPH SET FOR THE ADMIN PANEL.

   Drawn at the size they are used rather than scaled down from a library, for
   the reason the website's bag and lens are: at nine pixels an imported icon's
   strokes turn to mush, and eleven menu rows times ten glyphs is a hundred and
   ten shapes that all have to survive being read.
   ———————————————————————————————————————————————————————————— */

const Glyph: React.FC<{ d: string; colour: string; fill?: boolean }> = ({
  d,
  colour,
  fill,
}) => (
  <svg width="9" height="9" viewBox="0 0 12 12" fill="none" aria-hidden="true" focusable="false">
    <path
      d={d}
      stroke={colour}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={fill ? colour : 'none'}
    />
  </svg>
);

const MENU: ReadonlyArray<{ label: string; d: string; selected?: boolean }> = [
  { label: 'Home', d: 'M2 6.5 6 2.6l4 3.9V10H2z' },
  { label: 'Orders', d: 'M2.4 3h7.2v6.4H2.4z M2.4 4.8h7.2' },
  { label: 'Products', d: 'M2.4 3.4h7.2v6H2.4z M2.4 6.2h7.2', selected: true },
  { label: 'Collections', d: 'M2.4 3.2h7.2v6.2H2.4z M4.4 3.2v6.2' },
  { label: 'Inventory', d: 'M2 4.4h8v5.2H2z M2 4.4 6 2l4 2.4' },
  { label: 'Customers', d: 'M6 5.6a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Z M2.6 10c.4-1.7 1.7-2.6 3.4-2.6S9 8.3 9.4 10' },
  { label: 'Analytics', d: 'M2.4 9.6V6.2M6 9.6V3.2M9.6 9.6v-2' },
  { label: 'Marketing', d: 'M2.6 8.4 9.4 4.2v5.2z M2.6 8.4v-1.6l6.8-4.2' },
  { label: 'Discounts', d: 'M2.6 6.4 6 3l3 3L5.6 9.4z' },
  { label: 'Apps', d: 'M3 3h2.6v2.6H3zM6.6 3h2.4v2.4H6.6zM3 6.6h2.6v2.4H3zM6.6 6.6h2.4v2.4H6.6z' },
];

const PRODUCTS = [
  { name: 'Celestial Drop Earrings', status: 'Active', inventory: 'In stock' },
  { name: 'Pearl Hoop Earrings', status: 'Active', inventory: 'In stock' },
  { name: 'Golden Aura Necklace', status: 'Active', inventory: 'In stock' },
  { name: 'Minimal Ring', status: 'Active', inventory: 'In stock' },
  { name: 'Floral Studs', status: 'Active', inventory: 'In stock' },
] as const;

const TABS = ['All', 'Active', 'Draft', 'Archived'] as const;

/**
 * The status pill. One component for all five rows rather than a column of
 * duplicated markup, because five identical pills that disagree by a pixel are
 * the thing a reader notices first in a panel whose entire job is to look
 * consistent.
 */
const StatusPill: React.FC<{ label: string }> = ({ label }) => (
  <span
    className="inline-flex items-center gap-1 rounded-full px-[5px] py-[2px]"
    style={{ background: STATUS_GREEN }}
  >
    <span className="block h-[3px] w-[3px] rounded-full" style={{ background: STATUS_INK }} />
    <span
      className="font-body text-[5px] font-medium"
      style={{ color: STATUS_INK, letterSpacing: '0.2px' }}
    >
      {label}
    </span>
  </span>
);

export const ShopifyPanel: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <div
    className="absolute flex overflow-hidden rounded-[6px] bg-white"
    /* The position comes in as a prop and the shadow is added here, so the two
       cannot collide on the same key. The shadow is a value rather than a class
       because it is a two-layer comma-separated pair, and writing it as class
       text would mean escaping four brackets inside a Tailwind arbitrary
       value for no gain. */
    style={{ ...style, boxShadow: FLOAT }}
  >
    {/* THE SIDEBAR — dark, eleven items deep, with the selected one marked by a
        fill behind it rather than by a colour change on the text. Shopify marks
        the current section with a tinted plate, and a tinted plate survives
        being 13 pixels tall better than a colour does. */}
    <div className="w-[112px] shrink-0 bg-[#20262C] py-2">
      <div className="flex items-center gap-1.5 px-2.5 pb-2.5">
        <svg width="10" height="10" viewBox="0 0 12 12" aria-hidden="true" focusable="false">
          <path
            d="M6 .8 1.4 4.3 6 11.2l4.6-6.9z"
            fill="#8BD48B"
            stroke="#5FAE5F"
            strokeWidth="0.6"
            strokeLinejoin="round"
          />
        </svg>
        <span className="font-body text-[6.5px] font-semibold text-white">Shopify</span>
      </div>

      {MENU.map((item) => {
        const isSelected = Boolean(item.selected);
        return (
          <div
            key={item.label}
            className="flex items-center gap-2 py-[3.5px] pl-2.5 pr-2"
            style={isSelected ? { background: '#39424C' } : undefined}
          >
            <Glyph d={item.d} colour={isSelected ? '#9FE0A8' : '#8E979F'} />
            <span
              className="font-body text-[5.5px]"
              style={{ color: isSelected ? '#FFFFFF' : '#B9C0C6' }}
            >
              {item.label}
            </span>
          </div>
        );
      })}
    </div>

    {/* THE MAIN PANEL */}
    <div className="w-[376px] bg-white px-3.5 pb-3 pt-3">
      <div className="flex items-baseline justify-between">
        <span className="font-body text-[10px] font-semibold text-[#1A1D22]">Products</span>
        <span className="rounded-[3px] bg-[#20262C] px-2 py-[3.5px]">
          <span className="font-body text-[5px] font-medium text-white">Add product</span>
        </span>
      </div>

      {/* TABS — "All" is the one being viewed, so it is the one with an
          underline and the others have nothing at all. */}
      <div className="mt-2.5 flex gap-3.5 border-b border-[#ECEEF0]">
        {TABS.map((tab) => (
          <span
            key={tab}
            className="font-body pb-1.5 text-[5.5px]"
            style={{
              color: tab === 'All' ? '#1A1D22' : '#8A9099',
              borderBottom: tab === 'All' ? '1px solid #20262C' : '1px solid transparent',
            }}
          >
            {tab}
          </span>
        ))}
      </div>

      {/* SEARCH */}
      <div className="mt-2 flex items-center gap-1.5 rounded-[3px] border border-[#E3E6E9] px-2 py-[4px]">
        <svg width="7" height="7" viewBox="0 0 12 12" fill="none" aria-hidden="true" focusable="false">
          <circle cx="5.1" cy="5.1" r="3.1" stroke="#8A9099" strokeWidth="1.1" />
          <path d="M7.4 7.4 10 10" stroke="#8A9099" strokeWidth="1.1" strokeLinecap="round" />
        </svg>
        <span className="font-body text-[5.5px] text-[#A5ABB3]">Search products</span>
      </div>

      {/* THE TABLE — three columns, five rows. Each row has a thumbnail, a
          name, a green pill and a stock line, and the row rules are a single
          hairline rather than a grid, because a grid would make this read as a
          spreadsheet and it is not one. */}
      <div className="mt-2">
        <div className="grid grid-cols-[1fr_52px_56px] pb-[5px] text-[#A5ABB3]">
          <span className="font-body text-[5px] uppercase tracking-[0.5px]">Product</span>
          <span className="font-body text-[5px] uppercase tracking-[0.5px]">Status</span>
          <span className="font-body text-[5px] uppercase tracking-[0.5px]">Inventory</span>
        </div>

        {PRODUCTS.map((row, index) => (
          <div
            key={row.name}
            className="grid grid-cols-[1fr_52px_56px] items-center border-t border-[#F0F1F3] py-[6px]"
          >
            <div className="flex items-center gap-1.5">
              {/* Thumbnails cycle through the pool so the column does not read as
                  five copies of one picture. */}
              <BoardPhoto
                src={photo(
                  index % 2 === 0 ? 'product' : 'productAlt',
                )}
                alt={`${row.name} product photograph`}
                plate="#F6E7DC"
                className="h-[18px] w-[18px] shrink-0"
              />
              <span className="font-body truncate text-[5.5px] text-[#1A1D22]">{row.name}</span>
            </div>
            <StatusPill label={row.status} />
            <span className="font-body text-[5.5px] text-[#5A616A]">{row.inventory}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);
