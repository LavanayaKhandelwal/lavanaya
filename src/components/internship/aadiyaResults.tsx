import React from 'react';
import { BoardPhoto } from './aadiyaMarks';
import { photo, type PhotoKey } from './photos';

/**
 * THE THREE PIECES OF EVIDENCE.
 *
 * What the feed looked like, what the posts looked like, and what the numbers
 * did. They sit along the bottom of the board in that order, which is the order
 * a reader arrives at them in: the output, then the output as designed pieces,
 * then the return on it.
 *
 * Everything in this file is built, not photographed. The grid is nine cells,
 * the carousel is six cards and two chevrons, the dashboard is a table, three
 * figures, a line and three bars. A photograph of any of those would have
 * arrived at whatever resolution and whatever crop the photographer happened to
 * use, and would have been unreadable at the size the board gives them.
 */

/* ————————————————————————————————————————————————————————————
   SECTION 04 — THE FINISHED GRID.

   Three by three, four pixels apart, 370 square. Two of the nine cells are
   type: the brand card in the top left and a line of copy in the middle. The
   other seven are photographs, cropped square by the browser.
   ———————————————————————————————————————————————————————————— */

type GridCell =
  | { kind: 'brand' }
  | { kind: 'copy' }
  | { kind: 'shot'; key: PhotoKey };

/**
 * The order is fixed and the layout is explicit rather than flowed, because
 * nine cells in a three-column grid flow fine right up until one of them is a
 * fixed-height type card and the row heights stop agreeing.
 */
const GRID: readonly GridCell[] = [
  { kind: 'brand' },
  { kind: 'shot', key: 'feedF' },
  { kind: 'shot', key: 'feedG' },
  { kind: 'shot', key: 'feedH' },
  { kind: 'copy' },
  { kind: 'shot', key: 'feedI' },
  { kind: 'shot', key: 'feedJ' },
  { kind: 'shot', key: 'feedK' },
  { kind: 'shot', key: 'feedL' },
];

export const SocialGrid: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <div style={style} className="absolute grid grid-cols-3 grid-rows-3 gap-[4px] w-[370px] h-[370px]">
    {GRID.map((cell, index) => {
      if (cell.kind === 'brand') {
        return (
          <div
            key={index}
            className="flex items-center justify-center bg-[#E8AFC0]"
          >
            <p className="font-editorial text-center text-[15px] leading-[1.15] text-[#7A3E51]">
              AADIYA
              <br />
              JEWELS
            </p>
          </div>
        );
      }
      if (cell.kind === 'copy') {
        return (
          <div key={index} className="flex items-center justify-center bg-[#F6E8A7]">
            <p className="font-editorial text-center text-[14px] leading-[1.18] text-[#6C5360]">
              Elegance
              <br />
              in every
              <br />
              detail
            </p>
          </div>
        );
      }
      return (
        <BoardPhoto
          key={index}
          src={photo(cell.key)}
          alt="Aadiya Jewels feed photograph"
          className="h-full w-full"
        />
      );
    })}
  </div>
);

/* ————————————————————————————————————————————————————————————
   SECTION 05 — THE DESIGNED POSTS.

   Six cards in two rows of three, the second row peeking out below the first
   the way a carousel does when there is more to see. Three of the six are
   designed cards with type on them, three are photographs.

   The chevrons and the four dots are navigation furniture and they are drawn,
   not imported, so they inherit the board's stroke weight instead of arriving
   with their own.
   ———————————————————————————————————————————————————————————— */

type Card =
  | { kind: 'type'; ground: string; ink: string; lines: string[]; small?: string }
  | { kind: 'shot'; key: PhotoKey };

const TOP_ROW: readonly Card[] = [
  {
    kind: 'type',
    ground: '#F3C0D0',
    ink: '#754252',
    lines: ['Modern', 'Jewellery', 'for Every', 'Moment'],
    small: 'AADIYA JEWELS',
  },
  { kind: 'shot', key: 'postM' },
  { kind: 'type', ground: '#F6E5A8', ink: '#735764', lines: ['New', 'Arrivals'] },
];

const BOTTOM_ROW: readonly Card[] = [
  { kind: 'type', ground: '#F2B5CA', ink: '#754252', lines: ['Layer', 'It', 'Up'] },
  { kind: 'shot', key: 'postN' },
  { kind: 'shot', key: 'postO' },
];

const PostCard: React.FC<{ card: Card }> = ({ card }) => {
  if (card.kind === 'shot') {
    return (
      <BoardPhoto
        src={photo(card.key)}
        alt="Aadiya Jewels designed post photograph"
        className="h-[148px] w-[148px]"
      />
    );
  }

  return (
    <div
      className="relative flex h-[148px] w-[148px] flex-col justify-end overflow-hidden p-3"
      style={{ background: card.ground }}
    >
      {/* The pink announcement card carries a small flower and the others do
          not, which is the only difference between them beyond the words. */}
      {card.small ? <span className="absolute right-3 top-3 h-3 w-3 rounded-full bg-[#F2B5CA]" /> : null}
      <p className="font-editorial text-[14px] leading-[1.1]" style={{ color: card.ink }}>
        {card.lines.map((line) => (
          <React.Fragment key={line}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
      {card.small ? (
        <span className="font-body mt-1.5 text-[5.5px] uppercase tracking-[2px]" style={{ color: card.ink }}>
          {card.small}
        </span>
      ) : null}
      <span className="font-editorial absolute bottom-3 right-3 text-[13px]" style={{ color: card.ink }}>
        &rarr;
      </span>
    </div>
  );
};

const Chevrons: React.FC = () => (
  <>
    <svg viewBox="0 0 12 26" className="absolute -left-[26px] top-1/2 h-[26px] w-[12px] -translate-y-1/2" fill="none" aria-hidden="true" focusable="false">
      <path d="M9 3 L3 13 L9 23" stroke="#3E2723" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <svg viewBox="0 0 12 26" className="absolute -right-[26px] top-1/2 h-[26px] w-[12px] -translate-y-1/2" fill="none" aria-hidden="true" focusable="false">
      <path d="M3 3 L9 13 L3 23" stroke="#3E2723" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </>
);

export const PostCarousel: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <div style={style} className="absolute">
    <div className="relative">
      <Chevrons />
      <div className="flex gap-2">
        {TOP_ROW.map((card, index) => (
          <PostCard key={index} card={card} />
        ))}
      </div>
    </div>

    <div className="mt-2 flex gap-2">
      {BOTTOM_ROW.map((card, index) => (
        <PostCard key={index} card={card} />
      ))}
    </div>

    {/* Four dots, the second one active. There are four because the brief says
        four; nothing on this board is clickable and the row is furniture, so
        the active dot is styled and not wired to anything. */}
    <div className="mt-3 flex justify-center gap-[6px]">
      {[false, true, false, false].map((active, index) => (
        <span
          key={index}
          className="h-[5px] w-[5px] rounded-full"
          style={{ background: active ? '#8A5A6B' : '#E0B9C4' }}
        />
      ))}
    </div>
  </div>
);

/* ————————————————————————————————————————————————————————————
   SECTION 06 — THE DASHBOARD.

   A laptop, seen almost head on, with a silver body, a black bezel, a hinge
   and a shadow underneath. On its screen is the actual April figures: three
   metric cards, a reach line that generally climbs, and the split of reach by
   content type.

   The line is drawn as a path rather than described. A rising line with three
   dips in it is what a month of posting actually looks like, and a straight
   diagonal would read as a mock-up rather than a result. The x axis carries
   five dates because the month does.

   No colour outside the board's own palette is used for the positive changes.
   Green would be the obvious choice for a percentage increase and it is not in
   the palette, so the changes take the same pink as the annotation.
   ———————————————————————————————————————————————————————————— */

const METRICS = [
  { label: 'Accounts reached', value: '125.8K', change: '+42.5%' },
  { label: 'Content interactions', value: '8.6K', change: '+56.3%' },
  { label: 'Total followers', value: '12.4K', change: '+18.7%' },
] as const;

const REACH_X = ['1 Apr', '7 Apr', '14 Apr', '21 Apr', '28 Apr'] as const;

/** Reach across the month, low to high, with the dips a real month has. */
const REACH_SERIES = [9, 15, 12, 21, 19, 27, 24, 33, 30, 42] as const;

const TOP_CONTENT = [
  { label: 'Reels', pct: 48 },
  { label: 'Posts', pct: 36 },
  { label: 'Stories', pct: 20 },
] as const;

/* The chart is 150 units wide and 44 tall, with 2 units of headroom. */
const CHART_W = 150;
const CHART_H = 44;
const PEAK = 44;

const reachPoints = REACH_SERIES.map((value, index) => {
  const x = (index / (REACH_SERIES.length - 1)) * CHART_W;
  const y = CHART_H - (value / PEAK) * CHART_H;
  return `${x.toFixed(1)},${y.toFixed(1)}`;
}).join(' ');

const reachArea = `M 0,${CHART_H} L ${reachPoints.replace(/ /g, ' L ')} L ${CHART_W},${CHART_H} Z`;

export const AnalyticsLaptop: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <div style={style} className="absolute w-[470px]">
    {/* LID */}
    <div className="rounded-t-[10px] bg-[#C6C9CF] p-[7px] pb-[9px] shadow-[0_16px_30px_-20px_rgba(40,16,28,0.65)]">
      <div className="rounded-[3px] bg-[#0C0D10] p-[5px]">
        {/* THE SCREEN */}
        <div className="relative h-[252px] overflow-hidden bg-white px-4 py-3">
          {/* Header */}
          <div className="flex items-baseline justify-between">
            <span className="font-body text-[13px] font-semibold text-[#1B1D24]">Insights</span>
            <span className="font-body text-[7.5px] text-[#8B8F98]">1 Apr &ndash; 30 Apr 2025</span>
          </div>

          {/* Tabs — Overview is the one being looked at, so it is the only one
              with a rule under it. */}
          <div className="mt-1.5 flex gap-4 border-b border-[#ECECEF]">
            {['Overview', 'Content', 'Audience'].map((tab) => (
              <span
                key={tab}
                className="font-body pb-1 text-[7.5px]"
                style={{ color: tab === 'Overview' ? '#1B1D24' : '#A2A6AE' }}
              >
                {tab}
              </span>
            ))}
          </div>

          {/* METRIC CARDS */}
          <div className="mt-2.5 grid grid-cols-3 gap-2">
            {METRICS.map((metric) => (
              <div key={metric.label} className="border border-[#EFEFF2] px-2 py-1.5">
                <p className="font-body text-[6.5px] uppercase tracking-[0.6px] text-[#8B8F98]">
                  {metric.label}
                </p>
                <div className="mt-0.5 flex items-baseline justify-between">
                  <span className="font-body text-[14px] font-semibold text-[#1B1D24]">{metric.value}</span>
                  <span className="font-body text-[7px] font-medium text-[#B64F73]">{metric.change}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CHART AND BREAKDOWN */}
          <div className="mt-2.5 grid grid-cols-[1fr_104px] gap-4">
            <div>
              <p className="font-body text-[7.5px] font-medium text-[#1B1D24]">Reach</p>
              <svg
                viewBox={`0 0 ${CHART_W} ${CHART_H + 8}`}
                className="mt-1 h-[62px] w-full"
                preserveAspectRatio="none"
                aria-hidden="true"
                focusable="false"
              >
                <path d={reachArea} fill="#FCE4EC" />
                <polyline
                  points={reachPoints}
                  fill="none"
                  stroke="#E7AFC0"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              <div className="mt-0.5 flex justify-between">
                {REACH_X.map((tick) => (
                  <span key={tick} className="font-body text-[6px] text-[#A2A6AE]">
                    {tick}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="font-body text-[7.5px] font-medium text-[#1B1D24]">Top content</p>
              <div className="mt-2 space-y-[7px]">
                {TOP_CONTENT.map((row) => (
                  <div key={row.label}>
                    <div className="flex items-baseline justify-between">
                      <span className="font-body text-[6.5px] text-[#5C6068]">{row.label}</span>
                      <span className="font-body text-[6.5px] font-medium text-[#1B1D24]">{row.pct}%</span>
                    </div>
                    <span className="mt-[3px] block h-[4px] w-full bg-[#F3F4F6]">
                      <span className="block h-full bg-[#E7AFC0]" style={{ width: `${row.pct}%` }} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* BASE — a flatter slab than the lid, with the notch every laptop has
        where you would lift it, and a shadow underneath so it sits on the
        paper rather than floating over it. */}
    <div className="relative mx-[-14px] h-[11px] rounded-b-[7px] bg-[#B4B8BF] shadow-[0_14px_20px_-10px_rgba(40,16,28,0.5)]">
      <span className="absolute left-1/2 top-0 h-[4px] w-[64px] -translate-x-1/2 rounded-b-[4px] bg-[#A4A8AF]" />
    </div>
  </div>
);
