import React from 'react';
import {
  BrandMark,
  BrushMark,
  CATEGORY,
  Print,
  Slot,
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
        {/* Background paint mark */}
        <BrushMark className="pointer-events-none absolute -top-10 -right-16 w-[60%] h-[180px] opacity-70" />

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

            {/* The project name, sitting on a painted stroke */}
            <div className="relative mt-8 inline-block">
              <BrushMark className="pointer-events-none absolute inset-x-[-6%] top-1/2 h-[3.75rem] -translate-y-1/2 w-[112%]" />
              <p className="relative font-script text-[2.25rem] sm:text-[2.75rem] leading-none text-[#3E2723] -rotate-[3deg]">
                {PROJECT_NAME}
              </p>
            </div>

            <p className="mt-9 eyebrow text-[#3E2723] tracking-[0.34em]">{CATEGORY}</p>
          </div>

          {/* The event photograph — the source is 1072x1280 portrait, so at a
              full-width col-span-8 it would run ~940px tall and stretch the
              band. The cap holds it near the ~440px it occupied at 16:9, which
              keeps the title block and the photograph roughly level. */}
          <div className="lg:col-span-8">
            <div className="relative mx-auto w-full max-w-[23rem]">
              <Print
                label="The Hunky Hideaway event space — mannequin, campaign screen and the drinks table"
                rotate={-0.8}
                className="w-full"
              >
                <Slot
                  src="/portfolio-assets/04_hunky_hideaway_event.jpg"
                  alt="Inside the Hunky Hideaway event space — a black fashion mannequin in a pink and black lingerie outfit, a wall-mounted screen showing a Hunkemöller campaign, and a long table with a pink cloth, cocktail glasses, bottles, flowers and craft materials"
                  label="The event space"
                  className="aspect-[1072/1280]"
                />
              </Print>
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

        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-x-10 lg:gap-x-8 gap-y-20 items-start">
          {/* 01 — BEDAZZLING STATION */}
          <div className="relative">
            <Print
              label="The Bedazzling Station — glasses on the table, the easel sign, and the embellishments"
              rotate={-1}
              className="mx-auto w-full max-w-[17rem]"
            >
              <Slot
                src="/portfolio-assets/04_bedazzling_station.jpg"
                alt="The Bedazzling Station — small glasses across a table, a pink handwritten sign on a wooden easel, and containers of beads and embellishments"
                label="The Bedazzling Station"
                className="aspect-[1206/1237]"
              />
            </Print>

            <Activation number="01" block={ACTIVATIONS[0]} />
          </div>

          {/* 02 — POLAROID PHOTO CORNER */}
          <div className="relative">
            <Print
              label="The Polaroid Photo Corner — the decorated frames and the display of attendee photographs"
              rotate={1.2}
              className="mx-auto w-full max-w-[17rem]"
            >
              <Slot
                src="/portfolio-assets/04_polaroid_corner.jpg"
                alt="The Polaroid Photo Corner — attendees decorating instant-photo frames with Hunkemöller offcuts, and the finished photographs displayed on a board"
                label="The Polaroid Photo Corner"
                className="aspect-[1200/1280]"
              />
            </Print>

            <Activation number="02" block={ACTIVATIONS[1]} />
          </div>

          {/* 03 — NICE VS NAUGHTY */}
          <div className="relative">
            <Print
              label="The Nice vs Naughty table — the sign, flowers, fabric baskets, an instant camera and pink drinks"
              rotate={2}
              className="mx-auto w-full max-w-[17rem]"
            >
              <Slot
                src="/portfolio-assets/04_nice_vs_naughty.jpg"
                alt="The Nice vs Naughty table — a pink sign, a flower arrangement, decorative fabric baskets, a small instant camera and pink cocktail drinks"
                label="The Nice vs Naughty table"
                className="aspect-[845/1280]"
              />
            </Print>

            <Activation number="03" block={ACTIVATIONS[2]} />
          </div>
        </div>
      </section>

      {/* Page mark — the onward link lives in ProjectFourPage, below page two */}
      <div className="px-5 sm:px-5 lg:px-6">
        <div className="rule-t-light pt-6 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
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
