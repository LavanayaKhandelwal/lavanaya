import React from 'react';
import { SketchArrow } from './aadiyaMarks';
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

   A photograph of the real planning sheet, framed as a print laid on the paper.

   This was previously drawn: a spiral-bound page with an invented schedule, four
   content types across seven days, deterministic so it would not reshuffle on
   every load. That was a mock-up of a calendar rather than the calendar, and
   the plan is the first thing the internship actually produced. The file is
   1206 by 670, so it is set by width and the height follows the aspect.

   There is no spiral binding and no two-degree rotation. The photograph already
   carries whatever the sheet physically looked like, and adding a desk tilt on
   top of that would be inventing a second surface.
   ———————————————————————————————————————————————————————————— */

export const ContentCalendar: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <div style={style} className="absolute w-[410px] h-[228px]">
    <img
      src={photo('calendar')}
      alt="Aadiya Jewels April 2025 content calendar for the main Instagram feed, showing the planned posts, reels, stories and campaigns for each day of the week"
      className="h-full w-full border border-[#705955]/25 object-cover shadow-[0_16px_30px_-18px_rgba(112,89,85,0.45)]"
    />
  </div>
);

/* ————————————————————————————————————————————————————————————
   SECTION 02 — THE MOODBOARD.

   Two AI generated pieces, printed and set side by side. That is the whole
   section: no poster, no supporting grid, no type laid over the photograph.

   The earlier version here was one tall poster with a gradient over its bottom
   third and four small portraits beside it, which described the work rather than
   showing it. Two pieces is also what the work produced, so the collage was one
   image too busy to read at the size the board gives this column.

   Both files are portrait and close to the same size — 728 by 1280 and 730 by
   1280 — so they are set by height and the widths land within two pixels of each
   other without either being cropped to fit.
   ———————————————————————————————————————————————————————————— */

const AI_CONTENT: ReadonlyArray<{ key: PhotoKey; alt: string }> = [
  {
    key: 'aiContent1',
    alt: 'AI generated Aadiya Jewels social content, styled product composition',
  },
  {
    key: 'aiContent2',
    alt: 'AI generated Aadiya Jewels social content, styled product composition',
  },
];

export const AiCollage: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <div style={style} className="absolute flex items-start gap-3">
    {AI_CONTENT.map((item) => (
      <img
        key={item.key}
        src={photo(item.key)}
        alt={item.alt}
        className="h-[288px] w-auto border border-[#705955]/25 object-contain shadow-[0_16px_30px_-18px_rgba(112,89,85,0.45)]"
      />
    ))}
  </div>
);

/* ————————————————————————————————————————————————————————————
   SECTION 03 — TWO PHONES.

   Drawn frames, real video inside. The bodies are black rounded rectangles with
   a hole punch, side buttons and a shadow; the screens carry the actual reel
   and the actual story rather than a still with a headline laid over it.

   The two files are portrait and not the same portrait: the reel is 720 by 976
   and the story is 1080 by 1920, which is 9 by 16. Both are asked to cover the
   screen rather than sit inside it, because letterboxing a vertical video in a
   taller frame would put black bars on the one object that is meant to prove the
   work was vertical. Muted, looping and inline so they play without a click and
   without handing the browser a speaker.
   ———————————————————————————————————————————————————————————— */

type PhoneProps = {
  rotation: number;
  offsetY: number;
  video: string;
  alt: string;
};

const VIDEO_DIR = '/portfolio-assets/';

const Phone: React.FC<PhoneProps> = ({ rotation, offsetY, video, alt }) => (
  <div className="relative" style={{ transform: `translateY(${offsetY}px) rotate(${rotation}deg)` }}>
    {/* SIDE BUTTONS — drawn on the frame so the device has a thickness edge
        that is not just a border. */}
    <span className="absolute top-[74px] -left-[2px] h-[26px] w-[2px] rounded-full bg-[#24262B]" />
    <span className="absolute top-[118px] -left-[2px] h-[42px] w-[2px] rounded-full bg-[#24262B]" />
    <span className="absolute top-[96px] -right-[2px] h-[54px] w-[2px] rounded-full bg-[#24262B]" />

    <div className="relative w-[112px] h-[228px] rounded-[15px] bg-[#101114] p-[3px] shadow-[0_22px_34px_-16px_rgba(40,16,28,0.6)]">
      {/* GLOSS — a single soft diagonal sheen across the glass. */}
      <span className="pointer-events-none absolute inset-[3px] z-20 rounded-[12px] bg-gradient-to-br from-white/12 via-transparent to-white/5" />

      <div className="relative h-full w-full overflow-hidden rounded-[12px] bg-[#FDFCF8]">
        <video
          src={`${VIDEO_DIR}${video}`}
          aria-label={alt}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        />
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
      video="reel.mp4"
      alt="Aadiya Jewels Instagram reel"
    />
    <Phone
      rotation={7}
      offsetY={-8}
      video="story.mp4"
      alt="Aadiya Jewels Instagram story"
    />
  </div>
);
