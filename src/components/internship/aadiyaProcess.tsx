import React from 'react';
import { BoardPhoto, SketchArrow, SketchHeart, SparkBurst } from './aadiyaMarks';
import { photo, type PhotoKey } from './photos';

/**
 * THE THREE PIECES OF WORK THAT CAME FIRST.
 *
 * Planning, then generation, then publishing. They sit across the top of the
 * board in that order because the board is meant to be read left to right as a
 * process, and the three objects are the three physical things that process
 * produced: a printed plan, a moodboard, and two phones in a hand.
 *
 * Each one is a real object rather than a picture of an object. The calendar is
 * a table with rules in it, the collage is photographs laid edge to edge, the
 * phones are bezels with screens inside them. Nothing here is a flat image of
 * a calendar, which is what the earlier collage of this page was — six
 * absolutely-positioned files that only resolved into a collage once the files
 * were missing.
 */

/* ————————————————————————————————————————————————————————————
   SECTION 01 — THE CONTENT CALENDAR.

   A printed sheet, spiral bound on the left, turned two degrees anticlockwise
   on the desk. Everything about it is sized against the brief: 410 by 280, a
   one pixel warm grey edge, a soft paper shadow, eight metal loops.

   The schedule itself is invented in shape and honest in spirit — four content
   types across seven days, coloured where something was planned. The blocks are
   deterministic rather than random, so the same page renders the same calendar
   on every load; a calendar that reshuffles itself is not a calendar.
   ———————————————————————————————————————————————————————————— */

const DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'] as const;

/** One per content type. Zero is a day left empty on purpose. */
const ROWS = [
  { label: 'Product Posts', week: [0, 1, 0, 1, 1, 0, 1] },
  { label: 'Reels', week: [1, 0, 1, 0, 0, 1, 0] },
  { label: 'Stories', week: [1, 1, 0, 1, 0, 1, 1] },
  { label: 'Campaigns', week: [0, 0, 0, 1, 0, 0, 0] },
] as const;

const BLOCK_TINTS = ['#F2B5CA', '#F6E5A8', '#F8CDD9'] as const;

export const ContentCalendar: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <div
    style={style}
    className="absolute w-[410px] h-[280px] bg-[#FFF6EE] border border-[#E2D5CC] shadow-[0_18px_34px_-18px_rgba(112,66,80,0.45),0_2px_6px_rgba(112,66,80,0.10)]"
  >
    {/* The whole sheet sits two degrees off square on the desk. */}
    <div className="absolute inset-0" style={{ transform: 'rotate(-2deg)' }}>
      {/* SPIRAL BINDING — eight loops down a shaded strip, each one punched
          through a hole. The strip is a shade darker than the sheet because
          paper stacks where it is bound. */}
      <div className="absolute inset-y-0 left-0 w-[22px] bg-[#F1E7E0] border-r border-[#E4D8CF]">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute left-0 flex items-center"
            style={{ top: `${(i + 0.5) * (100 / 8)}%`, transform: 'translateY(-50%)' }}
          >
            <span className="block h-[4px] w-[15px] rounded-full border border-[#C5B7AF] bg-[#FBF7F4]" />
            <span className="block h-[1px] w-[7px] bg-[#DCCFC6]" />
          </div>
        ))}
      </div>

      {/* THE PRINTED PAGE */}
      <div className="absolute inset-y-0 left-[22px] right-0 flex flex-col px-4 pt-3 pb-3">
        <div className="flex items-baseline justify-between shrink-0">
          <span className="font-body text-[13px] font-medium text-[#2A2A32]">APRIL 2025</span>
          <span className="font-body text-[7px] uppercase tracking-[1.4px] text-[#9A8C84]">
            MAIN FEED
          </span>
        </div>

        {/* The table. The label column is 64px and the seven day columns split
            what is left, so the grid lines land on the same places whatever
            the day names happen to be. */}
        <div className="mt-2.5 flex-1 grid grid-rows-[11px_repeat(4,1fr)] border border-[#E6DED6] bg-[#FFF9F5]">
          <div className="grid grid-cols-[64px_repeat(7,1fr)] border-b border-[#E6DED6]">
            <span />
            {DAYS.map((day) => (
              <span
                key={day}
                className="border-l border-[#E6DED6] font-body text-[7px] font-medium tracking-[0.5px] text-[#9A8C84] flex items-center justify-center"
              >
                {day}
              </span>
            ))}
          </div>

          {ROWS.map((row, rowIndex) => (
            <div
              key={row.label}
              className="grid grid-cols-[64px_repeat(7,1fr)] border-b border-[#E6DED6] last:border-b-0"
            >
              <span className="font-body text-[7px] uppercase tracking-[0.4px] text-[#6E6058] flex items-center pr-1.5">
                {row.label}
              </span>
              {row.week.map((filled, dayIndex) => (
                <span key={dayIndex} className="border-l border-[#E6DED6] flex items-center justify-center p-[3px]">
                  {filled ? (
                    <span
                      className="block h-full w-full"
                      style={{ background: BLOCK_TINTS[(rowIndex + dayIndex) % BLOCK_TINTS.length] }}
                    />
                  ) : null}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/* ————————————————————————————————————————————————————————————
   SECTION 02 — THE MOODBOARD.

   One tall poster and four small portraits, tight enough to read as a single
   pasted-together thing. The poster carries the only long piece of type in the
   collage, set over the photograph rather than beside it, because the poster is
   the one image here that was designed rather than shot.
   ———————————————————————————————————————————————————————————— */

const MOODBOARD_SMALL: ReadonlyArray<{ key: PhotoKey; alt: string }> = [
  { key: 'moodboardA', alt: 'Aadiya Jewels social content photograph' },
  { key: 'moodboardB', alt: 'Aadiya Jewels social content photograph' },
  { key: 'moodboardC', alt: 'Aadiya Jewels social content photograph' },
  { key: 'moodboardD', alt: 'Aadiya Jewels social content photograph' },
];

export const AiCollage: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <div style={style} className="absolute flex items-start gap-2">
    {/* THE POSTER — 145 by 300, the tallest object in the collage. */}
    <div className="relative w-[145px] h-[300px] overflow-hidden bg-[#F3D3D8]">
      <BoardPhoto
        src={photo('moodboardPoster')}
        alt="Aadiya Jewels editorial poster photograph"
        className="absolute inset-0"
        loading="eager"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-[#F6DCD6]/92 via-[#F6DCD6]/35 to-transparent" />
      <p className="font-editorial absolute bottom-3 left-3 text-[15px] leading-[1.12] text-[#70404C]">
        Where
        <br />
        elegance
        <br />
        meets
        <br />
        everyday
      </p>
    </div>

    {/* THE FOUR PORTRAITS — two by two, gapped by four pixels, the same
        height as the poster so the collage has one clean bottom edge. */}
    <div className="grid grid-cols-2 gap-1">
      {MOODBOARD_SMALL.map((item) => (
        <BoardPhoto
          key={item.key}
          src={photo(item.key)}
          alt={item.alt}
          className="w-[68px] h-[148px]"
        />
      ))}
    </div>
  </div>
);

/* ————————————————————————————————————————————————————————————
   SECTION 03 — TWO PHONES.

   Drawn rather than photographed, because a photographed phone mockup always
   arrives with its own screen content already burned into it, and the point
   here is that the screen is ours. The body is a black rounded rectangle with
   a hole punch, a speaker slot, two side buttons and a shadow; the screen is
   the story frame — the photograph, a warm wash, a headline, a progress bar
   and the brand line at the foot.

   They lean against each other, one turned out and one turned in, which is the
   only thing on this board that is purely a decision about how it looks.
   ———————————————————————————————————————————————————————————— */

type PhoneProps = {
  rotation: number;
  offsetY: number;
  wash: string;
  headline: string;
  photoKey: PhotoKey;
  heart?: boolean;
};

const Phone: React.FC<PhoneProps> = ({ rotation, offsetY, wash, headline, photoKey, heart }) => (
  <div className="relative" style={{ transform: `translateY(${offsetY}px) rotate(${rotation}deg)` }}>
    {/* SIDE BUTTONS — drawn on the frame so the device has a thickness edge
        that is not just a border. */}
    <span className="absolute top-[74px] -left-[2px] h-[26px] w-[2px] rounded-full bg-[#24262B]" />
    <span className="absolute top-[118px] -left-[2px] h-[42px] w-[2px] rounded-full bg-[#24262B]" />
    <span className="absolute top-[96px] -right-[2px] h-[54px] w-[2px] rounded-full bg-[#24262B]" />

    <div className="relative w-[112px] h-[228px] rounded-[15px] bg-[#101114] p-[3px] shadow-[0_22px_34px_-16px_rgba(40,16,28,0.6)]">
      {/* GLOSS — a single soft diagonal sheen across the glass. */}
      <span className="pointer-events-none absolute inset-[3px] z-20 rounded-[12px] bg-gradient-to-br from-white/12 via-transparent to-white/5" />

      <div className="relative h-full w-full overflow-hidden rounded-[12px] bg-[#2A1C18]">
        <BoardPhoto
          src={photo(photoKey)}
          alt="Aadiya Jewels story frame photograph"
          className="absolute inset-0"
          imgClassName="opacity-90"
        />
        <span className="absolute inset-0" style={{ background: wash }} />

        {/* PROGRESS SEGMENTS — two stories in a row, the first nearly done. */}
        <div className="absolute top-[7px] left-[8px] right-[8px] flex gap-[3px]">
          <span className="h-[2px] flex-1 rounded-full bg-white/85" />
          <span className="h-[2px] flex-1 rounded-full bg-white/35" />
        </div>

        {/* HEADLINE — the line the story is actually about. */}
        <p className="font-editorial absolute left-[10px] top-[92px] text-[19px] leading-[1.06] text-[#FFF3D5]">
          {headline}
        </p>

        {heart ? (
          <span className="absolute right-[12px] bottom-[54px]">
            <SketchHeart size={13} colour="#FFF3D5" />
          </span>
        ) : null}

        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-[10px] py-[9px]">
          <span className="font-body text-[5.5px] uppercase tracking-[2.2px] text-[#FFF3D5]/90">
            AADIYA JEWELS
          </span>
          <span className="h-[9px] w-[9px] rounded-full border border-[#FFF3D5]/70" />
        </div>
      </div>

      {/* HOLE PUNCH */}
      <span className="absolute left-1/2 top-[9px] z-30 h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-[#05060A] ring-1 ring-white/10" />
    </div>
  </div>
);

export const PhoneMockups: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <div style={style} className="absolute flex items-start gap-7">
    <Phone
      rotation={-4}
      offsetY={6}
      wash="linear-gradient(180deg, rgba(74,44,28,0.62) 0%, rgba(52,30,20,0.50) 100%)"
      headline={'Timeless\nElegance'}
      photoKey="campaign"
    />
    <Phone
      rotation={7}
      offsetY={-8}
      wash="linear-gradient(180deg, rgba(96,74,58,0.50) 0%, rgba(66,44,36,0.62) 100%)"
      headline={'Small\ndetails\nBig\nstories'}
      photoKey="onSet"
      heart
    />

    {/* DRAWN MARKS AROUND THE DEVICES — the brief asks for rays and sparks
        scattered loosely, so they sit outside the two devices and never over
        a screen. */}
    <SketchArrow
      viewBox="0 0 70 70"
      className="absolute -left-[46px] top-[4px] h-[70px] w-[70px]"
      from={[62, 4]}
      to={[10, 40]}
      bow={[58, 34]}
      colour="#20232C"
    />
    <span className="absolute -top-[14px] left-[52px]">
      <SparkBurst size={22} colour="#20232C" />
    </span>
    <span className="absolute right-[16px] -top-[20px]">
      <SparkBurst size={15} colour="#20232C" />
    </span>
    <span className="absolute -right-[30px] top-[118px]">
      <SparkBurst size={18} colour="#20232C" />
    </span>
  </div>
);
