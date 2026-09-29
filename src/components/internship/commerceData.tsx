import React from 'react';
import { BoardPhoto } from './aadiyaMarks';
import { photo, type PhotoKey } from './photos';

/**
 * THE THREE DOCUMENTS.
 *
 * A catalogue, a tracker, and a folder of thumbnails. All three are what the
 * data half of the internship actually consisted of, and all three are built as
 * tables with rules in them rather than screenshotted, for the reason the rest
 * of the board is built: the brief names six column headings and five product
 * names, and none of those survive a photograph at this size.
 *
 * The three share a header — a mark, a title, and a thin rule — and differ in
 * everything else. The catalogue is a spreadsheet, so its mark is green. The
 * tracker is a smaller spreadsheet and keeps it. The folder is not a document
 * at all, it is a file browser, so it gets a grid glyph instead and a neutral
 * mark; giving it the spreadsheet mark would say it was a sheet, and the whole
 * point of putting it on the board is that it was not.
 */

/* The shadow is shared across the three documents so they read as one hand's
   work laid out together rather than three separate mock-ups. */
const FLOAT = '0 14px 26px -14px rgba(58,38,40,0.5), 0 2px 5px rgba(58,38,40,0.1)';

const SheetsMark: React.FC<{ size?: number }> = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
    <path d="M2 1h12v14H2z" fill="#0F9D58" opacity="0.16" />
    <path d="M2 1h12v14H2z" fill="none" stroke="#0F9D58" strokeWidth="1.1" strokeLinejoin="round" />
    <path d="M2 6h12M2 10.5h12M6.6 1v14M10.4 1v14" stroke="#0F9D58" strokeWidth="0.9" />
  </svg>
);

const FolderMark: React.FC<{ size?: number; colour?: string }> = ({
  size = 13,
  colour = '#9A9186',
}) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
    <path
      d="M1.5 4.2A1.2 1.2 0 0 1 2.7 3h3.1l1.4 1.6h5.1a1.2 1.2 0 0 1 1.2 1.2v6.4a1.2 1.2 0 0 1-1.2 1.2H2.7a1.2 1.2 0 0 1-1.2-1.2Z"
      stroke={colour}
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
  </svg>
);

/* ————————————————————————————————————————————————————————————
   THE MAIN SHEET — PRODUCT CATALOGUE.

   Six columns across 340 pixels is a little under 57 each, which is why every
   number here is right-aligned and every string is 4.5 pixels: a catalogue is
   scanned by column position far more than by reading it, so the columns have
   to land in the same places each row down rather than being left to justify
   themselves.

   The thumbnail column is last because the brief puts it last, and it is the
   one column that earns its width by being a picture.
   ———————————————————————————————————————————————————————————— */

const CATALOGUE_COLUMNS = ['Product Name', 'SKU', 'Category', 'Price', 'Stock', 'Image Link'] as const;

/** Column widths as fractions, tuned so the numeric columns sit tight. */
const CATALOGUE_WIDTHS = ['3.5fr', '0.9fr', '1.7fr', '1.1fr', '1.4fr', '1.1fr'] as const;

const CATALOGUE_ROWS: ReadonlyArray<{
  name: string;
  sku: string;
  category: string;
  price: string;
  stock: string;
  thumb: PhotoKey;
}> = [
  {
    name: 'Celestial Drop Earrings',
    sku: 'AE001',
    category: 'Earrings',
    price: '2,499',
    stock: 'In Stock',
    thumb: 'product',
  },
  {
    name: 'Pearl Hoop Earrings',
    sku: 'AE002',
    category: 'Earrings',
    price: '2,799',
    stock: 'In Stock',
    thumb: 'productAlt',
  },
  {
    name: 'Golden Aura Necklace',
    sku: 'AE003',
    category: 'Necklaces',
    price: '3,299',
    stock: 'In Stock',
    thumb: 'productAlt2',
  },
  {
    name: 'Minimal Ring',
    sku: 'AE004',
    category: 'Rings',
    price: '1,999',
    stock: 'In Stock',
    thumb: 'bestsellerA',
  },
  {
    name: 'Floral Studs',
    sku: 'AE005',
    category: 'Earrings',
    price: '2,299',
    stock: 'In Stock',
    thumb: 'bestsellerB',
  },
];

/** One catalogue row. The thumbnail is last, as the brief orders it. */
const CatalogueRow: React.FC<{ row: (typeof CATALOGUE_ROWS)[number] }> = ({ row }) => (
  <>
    <span className="font-body truncate text-[4.5px] text-[#1A1D22]">{row.name}</span>
    <span className="font-mono-code text-[4.5px] text-[#5A616A]">{row.sku}</span>
    <span className="font-body truncate text-[4.5px] text-[#5A616A]">{row.category}</span>
    <span className="font-mono-code text-right text-[4.5px] text-[#1A1D22]">{row.price}</span>
    <span className="font-body text-[4.5px] text-[#3E7A57]">{row.stock}</span>
    <span className="flex justify-end">
      <BoardPhoto
        src={photo(row.thumb)}
        alt={`${row.name} catalogue thumbnail`}
        plate="#F1E5DA"
        className="h-[14px] w-[14px]"
      />
    </span>
  </>
);

export const ProductCatalogue: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <div
    className="absolute w-[340px] overflow-hidden rounded-[5px] bg-white"
    style={{ ...style, boxShadow: FLOAT }}
  >
    {/* HEADER — the mark, the file name, and a rule underneath. */}
    <div className="flex items-center gap-1.5 border-b border-[#E8E4DE] px-2.5 py-2">
      <SheetsMark size={13} />
      <span className="font-body text-[6.5px] font-semibold text-[#1A1D22]">Product Catalogue</span>
      {/* The three dots are a real affordance on a real document, and they cost
          three elements to say "this was a file someone worked in". */}
      <span className="ml-auto flex gap-[2.5px]">
        {['#C9C2B8', '#C9C2B8', '#C9C2B8'].map((colour, i) => (
          <span
            key={i}
            className="block h-[2.5px] w-[2.5px] rounded-full"
            style={{ background: colour }}
          />
        ))}
      </span>
    </div>

    {/* COLUMN HEADINGS — green text, because that is what a spreadsheet does
        with them and the colour is half of what makes the object legible as a
        spreadsheet rather than as a table. */}
    <div
      className="grid items-center gap-1 border-b border-[#E8E4DE] bg-[#F7FAF8] px-2.5 py-[5px]"
      style={{ gridTemplateColumns: CATALOGUE_WIDTHS.join(' ') }}
    >
      {CATALOGUE_COLUMNS.map((column) => (
        <span
          key={column}
          className="font-body truncate text-[4px] font-medium uppercase tracking-[0.3px] text-[#3E7A57]"
        >
          {column}
        </span>
      ))}
    </div>

    {/* THE ROWS */}
    {CATALOGUE_ROWS.map((row) => (
      <div
        key={row.sku}
        className="grid items-center gap-1 border-b border-[#F0EDE8] px-2.5 py-[5px] last:border-b-0"
        style={{ gridTemplateColumns: CATALOGUE_WIDTHS.join(' ') }}
      >
        <CatalogueRow row={row} />
      </div>
    ))}
  </div>
);

/* ————————————————————————————————————————————————————————————
   THE TRACKER.

   Four columns, four rows, and a different job from the catalogue: the
   catalogue holds facts about products, the tracker holds what was published
   and when. It gets a different status treatment for exactly that reason —
   scheduled is a warning colour and published is the green, so a reader can
   see at a glance which half of the month is still in the future.
   ———————————————————————————————————————————————————————————— */

const TRACKER_COLUMNS = ['Post Type', 'Product', 'Date', 'Status'] as const;

const TRACKER_ROWS = [
  { type: 'Reel', product: 'Necklace', date: '12 Apr', status: 'Scheduled' },
  { type: 'Post', product: 'Earrings', date: '15 Apr', status: 'Published' },
  { type: 'Story', product: 'Ring', date: '18 Apr', status: 'Scheduled' },
  { type: 'Reel', product: 'Bracelet', date: '21 Apr', status: 'Published' },
] as const;

const TrackerStatus: React.FC<{ label: string }> = ({ label }) => {
  const published = label === 'Published';
  return (
    <span
      className="inline-block rounded-full px-[4px] py-[1.5px]"
      style={{
        background: published ? '#E4F4EA' : '#FDF0DC',
        color: published ? '#2E6B48' : '#8A5A22',
      }}
    >
      <span className="font-body text-[3.5px] font-medium">{label}</span>
    </span>
  );
};

export const ContentTracker: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <div
    className="absolute w-[165px] overflow-hidden rounded-[4px] bg-white"
    style={{ ...style, boxShadow: FLOAT }}
  >
    <div className="flex items-center gap-1 border-b border-[#E8E4DE] px-1.5 py-[6px]">
      <SheetsMark size={9} />
      <span className="font-body text-[5px] font-semibold text-[#1A1D22]">Content Tracker</span>
    </div>

    <div
      className="grid gap-1 border-b border-[#E8E4DE] bg-[#F7FAF8] px-1.5 py-[3.5px]"
      style={{ gridTemplateColumns: '1.1fr 1.1fr 0.9fr 1.2fr' }}
    >
      {TRACKER_COLUMNS.map((column) => (
        <span
          key={column}
          className="font-body truncate text-[3.5px] font-medium uppercase tracking-[0.2px] text-[#3E7A57]"
        >
          {column}
        </span>
      ))}
    </div>

    {TRACKER_ROWS.map((row) => (
      <div
        key={`${row.type}-${row.date}`}
        className="grid items-center gap-1 border-b border-[#F0EDE8] px-1.5 py-[4px] last:border-b-0"
        style={{ gridTemplateColumns: '1.1fr 1.1fr 0.9fr 1.2fr' }}
      >
        <span className="font-body truncate text-[3.5px] text-[#1A1D22]">{row.type}</span>
        <span className="font-body truncate text-[3.5px] text-[#5A616A]">{row.product}</span>
        <span className="font-body text-[3.5px] text-[#5A616A]">{row.date}</span>
        <TrackerStatus label={row.status} />
      </div>
    ))}
  </div>
);

/* ————————————————————————————————————————————————————————————
   THE FOLDER.

   Eight thumbnails, four by two, and nothing else — no columns, no rules, no
   status. It is included on the board precisely because it is the least
   designed object in the whole internship: a folder of renamed files. The
   point of showing it next to the catalogue is the contrast between the tidy
   table and the pile it was built from.
   ———————————————————————————————————————————————————————————— */

/** Eight keys, walking the pool so the eight thumbnails are not eight of one. */
const FOLDER_THUMBS: readonly PhotoKey[] = [
  'product',
  'productAlt',
  'productAlt2',
  'bestsellerA',
  'bestsellerB',
  'tileNecklace',
  'tileEarring',
  'tileRing',
];

export const ImageFolder: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <div
    className="absolute w-[165px] overflow-hidden rounded-[4px] bg-white"
    style={{ ...style, boxShadow: FLOAT }}
  >
    <div className="flex items-center gap-1 border-b border-[#E8E4DE] px-1.5 py-[6px]">
      <FolderMark size={9} />
      <span className="font-body text-[5px] font-semibold text-[#1A1D22]">Image Folder</span>
      {/* A count, because a folder panel on a real machine has one and eight
          thumbnails with no count reads as a gallery. */}
      <span className="font-body ml-auto text-[3.5px] text-[#A5A096]">8 items</span>
    </div>

    <div className="grid grid-cols-4 gap-[3px] p-[5px]">
      {FOLDER_THUMBS.map((key, index) => (
        <BoardPhoto
          key={`${key}-${index}`}
          src={photo(key)}
          alt="Jewellery product photograph in the image folder"
          plate="#F1E5DA"
          className="h-[38px] w-full"
        />
      ))}
    </div>
  </div>
);
