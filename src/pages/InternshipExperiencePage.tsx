import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import {
  Annotation,
  SectionLabel,
  SketchArrow,
  SparkBurst,
  SOCIAL_SHEET,
  useBoardScale,
} from '../components/internship/aadiyaMarks';
import { AiCollage, ContentCalendar, PhoneMockups } from '../components/internship/aadiyaProcess';
import { AnalyticsLaptop, PostCarousel, SocialGrid } from '../components/internship/aadiyaResults';

/**
 * INTERNSHIP — AADIYA JEWELS, PAGE ONE.
 *
 * A single landscape board, 1600 by 900, scaled to the window as one object.
 * It is not a scrolling page and it is not a dashboard. Everything on it is
 * positioned in stage pixels against a fixed sheet, because the composition it
 * is built from is a portfolio spread: a title and a measure of copy in the top
 * left, six pieces of work hung on a grid across the rest of it, and the whole
 * thing sitting on pink paper with a few brush marks and three handwritten
 * notes on top.
 *
 * IT IS THE FIRST OF TWO BOARDS. The second covers the same internship's
 * e-commerce and website management work and lives at its own route, so each
 * board keeps a whole screen to itself and neither is half a scroll. The link
 * to the next one is below the board rather than on it, because this board's
 * brief asks for no extra text and a link is extra text.
 *
 * What replaced it was a long scroll: a full-bleed cover, a credits strip, a
 * social section, an e-commerce section and a learnings band. That was four
 * pages of website pretending to be one case study. This is the case study.
 *
 * THE READING ORDER IS LEFT TO RIGHT AND TOP TO BOTTOM, and the grid is the
 * reason for that. The three objects along the top are the process — planned,
 * generated, published. The three along the bottom are the evidence — the feed
 * as it shipped, the posts as they were designed, and the numbers they moved.
 * The title and the copy sit in the space the process does not need, which is
 * why they are at the far left and nothing else is above them.
 */

/* ————————————————————————————————————————————————————————————
   THE PAPER.

   Four washes, laid down before anything else and blurred well past the point
   where an edge could be found. Three are the pale yellow from the palette and
   one is a larger pink across the top right. They are set with an inline radius
   rather than a class because a four-value percentage radius is not something
   worth fighting the scanner over, and an organic blob needs eight numbers.

   The grain is a single fractal-noise tile over the whole sheet at low opacity.
   It is underneath the content rather than on top of it, so nothing in the
   artwork is ever dulled by it.
   ———————————————————————————————————————————————————————————— */

const WASHES = [
  { left: -70, top: -60, w: 560, h: 320, colour: '#F7E8A8', opacity: 0.7, rotate: -8 },
  { left: -90, top: 330, w: 420, h: 300, colour: '#F7E8A8', opacity: 0.65, rotate: 14 },
  { left: 880, top: -140, w: 760, h: 480, colour: '#F4BFD0', opacity: 0.45, rotate: -6 },
  { left: 1060, top: 590, w: 660, h: 440, colour: '#F7E8A8', opacity: 0.8, rotate: 10 },
] as const;

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='900'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='1600' height='900' filter='url(%23n)'/%3E%3C/svg%3E\")";

const Board: React.FC = () => (
  <>
    {WASHES.map((wash, index) => (
      <div
        key={index}
        className="pointer-events-none absolute"
        style={{
          left: wash.left,
          top: wash.top,
          width: wash.w,
          height: wash.h,
          background: wash.colour,
          opacity: wash.opacity,
          transform: `rotate(${wash.rotate}deg)`,
          borderRadius: '42% 58% 55% 45% / 48% 40% 62% 52%',
          filter: 'blur(48px)',
        }}
      />
    ))}
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-multiply"
      style={{ backgroundImage: GRAIN, backgroundSize: '600px 600px' }}
    />
  </>
);

const SocialBoard: React.FC = () => {
  const { frameRef, scale } = useBoardScale(SOCIAL_SHEET.width, SOCIAL_SHEET.height);

  return (
    <div
      ref={frameRef}
      className="w-full h-svh flex items-center justify-center overflow-hidden bg-[#10090B]"
    >
      <div
        style={{
          width: SOCIAL_SHEET.width,
          height: SOCIAL_SHEET.height,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
        }}
        className="relative shrink-0 overflow-hidden bg-[#F8DDE5] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]"
      >
        <Board />

        {/* ————— HEADER ————— */}
        <div className="absolute inset-x-[48px] top-[40px] flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="font-body text-[11px] uppercase tracking-[4px] text-[#071326]">
              INTERNSHIP EXPERIENCE
            </span>
            <span className="h-px w-[350px] bg-[#5F6871]" />
          </div>
          <div className="flex items-center gap-5">
            <span className="font-body text-[10px] uppercase tracking-[4px] text-[#071326]">
              AADIYA JEWELS
            </span>
            <span className="h-px w-[60px] bg-[#5F6871]" />
          </div>
        </div>

        {/* ————— TITLE AND COPY ————— */}
        {/* The title's size, leading and tracking are set inline rather than
            through classes. They are the single most specific numbers on the
            whole board and they are the numbers most likely to be argued with
            later; inline styles put them next to the copy rather than in a
            stylesheet, so an edit to the board is one edit. */}
        <h1
          className="font-serif-display absolute text-[#071326]"
          style={{
            left: 48,
            top: 110,
            fontSize: '72px',
            lineHeight: 0.88,
            letterSpacing: '-0.5px',
            fontWeight: 400,
          }}
        >
          Social
          <br />
          Media
        </h1>

        <p
          className="font-body absolute text-[#394252]"
          style={{ left: 48, top: 333, width: 300, fontSize: '14px', lineHeight: 1.55 }}
        >
          Managed the end-to-end social media content process, from planning and shooting to
          editing, scheduling and publishing. Created engaging reels, posts and stories aligned
          with the brand's identity and product communication.
        </p>

        {/* ————— SECTION 01, THE CALENDAR ————— */}
        <SectionLabel style={{ position: 'absolute', left: 400, top: 118 }}>
          MAIN FEED CONTENT CALENDAR
        </SectionLabel>

        <Annotation
          size={18}
          style={{ position: 'absolute', left: 664, top: 92, transform: 'rotate(-8deg)' }}
        >
          {'planned\nwith purpose'}
        </Annotation>

        <SketchArrow
          viewBox="0 0 90 62"
          className="absolute"
          style={{ left: 636, top: 128, width: 90, height: 62 }}
          from={[80, 4]}
          to={[34, 54]}
          bow={[82, 36]}
          colour="#25232B"
        />

        <ContentCalendar style={{ left: 400, top: 146 }} />

        {/* ————— SECTION 02, THE MOODBOARD ————— */}
        <SectionLabel style={{ position: 'absolute', left: 850, top: 118 }}>
          AI CONTENT GENERATION
        </SectionLabel>

        <AiCollage style={{ left: 850, top: 146 }} />

        <span className="absolute" style={{ left: 830, top: 452 }}>
          <SparkBurst size={14} colour="#20232C" />
        </span>
        <Annotation
          size={15}
          colour="#2D2630"
          style={{ position: 'absolute', left: 852, top: 452, transform: 'rotate(-8deg)' }}
        >
          {'ideas\nto\nvisuals'}
        </Annotation>

        {/* ————— SECTION 03, THE PHONES ————— */}
        <SectionLabel style={{ position: 'absolute', left: 1200, top: 118 }}>
          REELS &amp; STORIES
        </SectionLabel>

        <PhoneMockups style={{ left: 1200, top: 146 }} />

        {/* ————— THE BOTTOM ROW, ALL THREE LABELS ON ONE LINE ————— */}
        <SectionLabel style={{ position: 'absolute', left: 48, top: 472 }}>
          SOCIAL MEDIA GRID
        </SectionLabel>
        <SectionLabel style={{ position: 'absolute', left: 470, top: 472 }}>
          CREATIVE POSTS &amp; CAROUSELS
        </SectionLabel>
        <SectionLabel style={{ position: 'absolute', left: 970, top: 472 }}>
          FINAL DASHBOARD
        </SectionLabel>

        <SocialGrid style={{ left: 48, top: 494 }} />
        <PostCarousel style={{ left: 470, top: 508 }} />
        <AnalyticsLaptop style={{ left: 970, top: 500 }} />

        {/* ————— THE LAST ANNOTATION —————
            It sits above the laptop's top right corner rather than beside its
            middle, because beside the middle there is no room: the laptop runs
            to 1454 and the board ends at 1600, which is 146px, and a
            three-line note in the script face wants closer to a hundred. The
            arrow therefore comes down from it and lands just above the lid
            rather than crossing the screen to point at it. */}
        <Annotation
          size={17}
          colour="#B64F73"
          style={{ position: 'absolute', left: 1452, top: 386, transform: 'rotate(-7deg)' }}
        >
          {'growth\nin every\npost'}
        </Annotation>

        <SketchArrow
          viewBox="0 0 96 92"
          className="absolute"
          style={{ left: 1360, top: 400, width: 96, height: 92 }}
          from={[90, 40]}
          to={[28, 84]}
          bow={[88, 58]}
          colour="#B64F73"
        />
      </div>
    </div>
  );
};

/**
 * The route's outermost piece. The board is exactly one screen tall, so the
 * onward link needs a strip of its own below it rather than a corner of the
 * board itself — a link sitting on the artwork would be a seventh thing on a
 * sheet that was specified as six.
 *
 * The strip carries the next board's own subject rather than the word "next",
 * because a reader who is deciding whether to scroll wants to know what is
 * below rather than that something is.
 */
export const InternshipExperiencePage: React.FC = () => (
  <div className="min-h-screen bg-[#10090B]">
    <SocialBoard />

    <div className="px-5 sm:px-5 lg:px-6 pb-16 lg:pb-24">
      <div className="flex justify-end">
        <Link
          to="/internship/ecommerce"
          className="inline-flex items-center gap-3 eyebrow text-[#F8DDE5] editorial-link"
        >
          <span>Read: E-commerce &amp; Website Management</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  </div>
);
