import React from 'react';
import {
  BowMark,
  BrandMark,
  BrushMark,
  CameraMark,
  CATEGORY,
  CocktailMark,
  HeartOutline,
  InkArrow,
  PinkTape,
  Print,
  Scrap,
  Slot,
  StarMark,
} from './hunkyScrapbook';

/**
 * PROJECT 04, PAGE 01 — HUNKY HIDEAWAY
 *
 * Rebuilt from the "Hunky Hideaway" specification: one landscape board in a
 * pink scrapbook idiom. Upper left the editorial title block, upper right the
 * large event photograph, then three columns — each a photographic activation
 * module with the written experience directly beneath it. The reflection board
 * that follows it is WhatITookAwayPage, and the drawn marks both pages share
 * are in hunkyScrapbook.
 *
 * COLOUR. Hunkemöller's identity is a hot dusty pink on near-black, and the
 * specification is emphatic that the pink carries the whole page. The site's
 * light palette already contains that pink in blush, terracotta and wine, so
 * the identity is mapped onto it rather than imported as new hues:
 *
 *   canvas pink     #F8E5E6  →  blush      #FADBD9   (the ground)
 *   hot dusty pink  #E96F88  →  terracotta #D69589   (every brush mark)
 *   deep pink       #C83F61  →  wine       #7A2A2E   (accent italic, hand)
 *   near black      #181414  →  ink        #3E2723
 *   white           #FFFFFF  →  cream      #F9F8F2   (photo paper, tape)
 *
 * The ground is blush rather than cream, which is what keeps this page from
 * reading as Project 3 in a different colour — here the paper is the accent
 * and the cream is the exception.
 *
 * PLATES. Every photograph is a wordless hairline plate until its file lands
 * in /public/portfolio-assets. Nothing is invented to fill a missing image.
 */

const PROJECT_NAME = 'Hunky Hideaway';
const HEADING = ['PLAY.', 'PERSONALISE.', 'EXPERIENCE.'] as const;
const RIGHT_NOTE = ['Good', 'Vibes', 'Pretty', 'Things'] as const;

const ACTIVATIONS = [
  {
    number: '01',
    title: 'BEDAZZLING STATION',
    tagline: 'Pick it. Place it. Make it yours.',
    description: 'Personalise your lingerie, hair or face with decorative stickers.',
  },
  {
    number: '02',
    title: 'POLAROID PHOTO CORNER',
    tagline: 'Capture it. Create it. Take it home.',
    description:
      'Take a Polaroid and decorate your own frame using Hunkemöller waste fabric/materials.',
  },
  {
    number: '03',
    title: 'NICE VS NAUGHTY',
    tagline: 'Discover your vibe.',
    description: 'Take a personality quiz and get a customised Bacardi drink based on your result.',
    partnership: 'HUNKEMÖLLER  ×  BACARDI',
  },
] as const;

/* ——— The page ——————————————————————————————————————————————————— */

export const HunkyHideawayPage: React.FC = () => {
  return (
    <div className="paper-grain-light bg-[#FADBD9]">
      {/* ——— Band 1 — the title block and the event ——————————— */}
      <section className="relative overflow-hidden px-5 sm:px-5 lg:px-6 pt-12 pb-14 lg:pt-16 lg:pb-20">
        {/* Background paint marks */}
        <BrushMark className="pointer-events-none absolute -top-10 -right-16 w-[60%] h-[180px] opacity-70" />
        <Scrap className="pointer-events-none absolute left-[38%] top-6 w-24 opacity-60" rotate={-8} tone="cream" />
        <Scrap className="pointer-events-none absolute left-[41%] top-20 w-16 opacity-50" rotate={12} tone="deep" />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-x-10 lg:gap-x-8 items-start">
          {/* Title block */}
          <div className="lg:col-span-4">
            <BrandMark />

            <h1 className="mt-10 font-display text-[clamp(2.75rem,5.4vw,4.25rem)] leading-[0.9] tracking-[-0.02em] text-[#3E2723]">
              {HEADING.slice(0, 2).map((line) => (
                <React.Fragment key={line}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
              <span className="font-editorial italic text-[#7A2A2E]">{HEADING[2]}</span>
            </h1>

            <HeartOutline className="ml-auto -mt-4" size={44} />

            {/* The project name, sitting on a painted stroke */}
            <div className="relative mt-8 inline-block">
              <BrushMark className="pointer-events-none absolute inset-x-[-6%] top-1/2 h-[3.75rem] -translate-y-1/2 w-[112%]" />
              <p className="relative font-script text-[2.25rem] sm:text-[2.75rem] leading-none text-[#3E2723] -rotate-[3deg]">
                {PROJECT_NAME}
              </p>
            </div>

            <p className="mt-9 eyebrow text-[#3E2723] tracking-[0.34em]">{CATEGORY}</p>

            <div className="mt-8 flex items-center gap-3">
              <StarMark size={13} />
              <span className="block h-px w-14 bg-[#7A2A2E]/40" aria-hidden="true" />
              <StarMark size={10} />
            </div>
          </div>

          {/* The event photograph */}
          <div className="lg:col-span-8">
            <div className="relative">
              <Print
                label="The Hunky Hideaway event space — mannequin, campaign screen and the drinks table"
                rotate={-0.8}
                className="w-full"
                tape={{ className: '-top-3 left-10 w-20', rotate: -7 }}
              >
                <Slot
                  src="/portfolio-assets/04_hunky_hideaway_event.jpg"
                  alt="Inside the Hunky Hideaway event space — a black fashion mannequin in a pink and black lingerie outfit, a wall-mounted screen showing a Hunkemöller campaign, and a long table with a pink cloth, cocktail glasses, bottles, flowers and craft materials"
                  label="The event space"
                  className="aspect-[16/9]"
                />
              </Print>

              {/* The handwritten note, over the photograph's upper right */}
              <div className="absolute -top-4 right-2 sm:right-6 flex items-start gap-2">
                <p className="font-script text-[1.5rem] sm:text-[1.875rem] leading-[1.05] text-[#7A2A2E] -rotate-[4deg] origin-bottom-right text-right">
                  {RIGHT_NOTE.map((line) => (
                    <React.Fragment key={line}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
                <HeartOutline size={22} className="mt-1" />
              </div>

              <BowMark className="pointer-events-none absolute -left-3 bottom-10 opacity-80" size={40} />
            </div>
          </div>
        </div>
      </section>

      {/* ——— Band 2 — three photographic activation modules ————— */}
      <section className="relative overflow-hidden rule-t-light px-5 sm:px-5 lg:px-6 pt-14 pb-20 lg:pt-20 lg:pb-28">
        <BrushMark
          className="pointer-events-none absolute -bottom-6 -left-20 w-[55%] h-[150px] opacity-50"
          flip
        />
        <Scrap className="pointer-events-none absolute right-4 top-4 w-20 opacity-50" rotate={6} tone="cream" />

        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-x-10 lg:gap-x-8 gap-y-20 items-start">
          {/* 01 — BEDAZZLING STATION */}
          <div className="relative">
            <Print
              label="The Bedazzling Station — glasses on the table, the easel sign, and the embellishments"
              rotate={-1}
              className="w-full"
              tape={{ className: '-top-3 right-8 w-16', rotate: 6 }}
            >
              <Slot
                src="/portfolio-assets/04_bedazzling_station.jpg"
                alt="The Bedazzling Station — small glasses across a table, a pink handwritten sign on a wooden easel, and containers of beads and embellishments"
                label="The Bedazzling Station"
                className="aspect-[4/3]"
              />
            </Print>

            <InkArrow className="pointer-events-none absolute -left-4 -top-6 w-10 h-6 rotate-[160deg]" />
            <StarMark className="pointer-events-none absolute -left-6 top-14" size={11} />
            <StarMark className="pointer-events-none absolute left-1/3 -bottom-5" size={9} />
            <HeartOutline className="pointer-events-none absolute -right-3 top-8" size={22} />

            <Activation number="01" block={ACTIVATIONS[0]} />
          </div>

          {/* 02 — POLAROID PHOTO CORNER */}
          <div className="relative">
            {/* The collage sits on a cream sheet rather than the spec's deeper
                pink: the page ground is already blush, so a blush backing would
                make the panel disappear. Cream plus the black polaroid borders
                is what actually reads as a mounted collage. */}
            <div className="relative bg-[#F9F8F2] p-4 rotate-[1.2deg] shadow-[0_14px_30px_-18px_rgba(62,39,35,0.34)]">
              <div className="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <figure
                    key={i}
                    className="relative bg-[#FDFCF8] border border-[#3E2723]/25 p-1.5"
                    style={{ transform: `rotate(${(i - 2.5) * 2.2}deg)` }}
                  >
                    <Slot
                      src={`/portfolio-assets/04_polaroid_${i}.jpg`}
                      alt={`Hunky Hideaway attendee photograph ${i}`}
                      label={`Attendee photograph ${i}`}
                      className="aspect-square"
                    />
                  </figure>
                ))}
              </div>

              <BowMark className="pointer-events-none absolute -left-4 top-1/2 -translate-y-1/2 opacity-90" size={36} />
              <HeartOutline className="pointer-events-none absolute -right-3 -top-3" size={20} />
              <CameraMark className="pointer-events-none absolute -right-5 bottom-6" size={30} />
              <InkArrow className="pointer-events-none absolute -left-5 -bottom-5 w-10 h-6 rotate-[18deg]" />
              <PinkTape className="-top-3 left-1/3 w-16" rotate={-8} />
            </div>

            <Activation number="02" block={ACTIVATIONS[1]} />
          </div>

          {/* 03 — NICE VS NAUGHTY */}
          <div className="relative">
            <Print
              label="The Nice vs Naughty table — the sign, flowers, fabric baskets, an instant camera and pink drinks"
              rotate={2}
              className="w-full"
              tape={{ className: '-top-3 left-1/2 -translate-x-1/2 w-20', rotate: -5 }}
            >
              <Slot
                src="/portfolio-assets/04_nice_vs_naughty.jpg"
                alt="The Nice vs Naughty table — a pink sign, a flower arrangement, decorative fabric baskets, a small instant camera and pink cocktail drinks"
                label="The Nice vs Naughty table"
                className="aspect-[4/3]"
              />
            </Print>

            <HeartOutline className="pointer-events-none absolute -left-4 -top-7" size={34} />
            <InkArrow className="pointer-events-none absolute -right-4 top-6 w-9 h-5 rotate-[200deg]" />
            <CocktailMark className="pointer-events-none absolute -right-2 -bottom-6" size={28} />

            <Activation number="03" block={ACTIVATIONS[2]} />
          </div>
        </div>
      </section>

      {/* Page mark — the onward link lives in ProjectFourPage, below page two */}
      <div className="px-5 sm:px-5 lg:px-6">
        <div className="rule-t-light pt-6 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <HeartOutline size={18} />
            <span className="eyebrow text-[#705955]">{CATEGORY}</span>
            <span className="block h-px w-10 lg:w-16 bg-[#705955]/30" aria-hidden="true" />
          </div>

          <span className="eyebrow text-[#705955]">PROJECT 04</span>
        </div>

      </div>
    </div>
  );
};

/* ——— One activation block ————————————————————————————————————— */

/**
 * The number sits on a painted stroke, the title is the uppercase label, the
 * tagline is the italic serif line and the description closes it. Nothing else
 * — the specification's rule is that the page must not be crowded with copy.
 */
const Activation: React.FC<{ number: string; block: (typeof ACTIVATIONS)[number] }> = ({
  number,
  block,
}) => (
  <div className="relative mt-9">
    <div className="relative inline-block pl-1">
      <BrushMark className="pointer-events-none absolute inset-x-[-4%] top-1/2 h-12 w-[112%] -translate-y-1/2" />
      <p className="relative font-editorial italic text-[2.125rem] leading-none text-[#3E2723]">
        {number}
      </p>
    </div>

    <h2 className="mt-6 eyebrow text-[#3E2723] tracking-[0.28em]">{block.title}</h2>

    <p className="mt-4 font-editorial italic text-[1.0625rem] leading-snug text-[#3E2723]">
      {block.tagline}
    </p>

    <p className="mt-3 font-body text-sm leading-[1.5] text-[#3E2723]/80">{block.description}</p>

    {'partnership' in block && (
      <p className="mt-5 eyebrow text-[#7A2A2E] tracking-[0.28em]">{block.partnership}</p>
    )}
  </div>
);
