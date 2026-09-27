import React from 'react';
import {
  BrandMark,
  PeopleMark,
  SparkleMark,
  Print,
  Slot,
} from './hunkyScrapbook';

/**
 * PROJECT 04, PAGE 02 — WHAT I TOOK AWAY
 *
 * Rebuilt to a much stricter specification than the first pass. Two zones that
 * are meant to feel deliberately unlike each other: the left is a hand-placed
 * photographic collage, energetic and layered; the right is a calm editorial
 * panel with three stacked learnings and the result. Nothing is a grid.
 *
 * THE COLLAGE IS THE POINT. Each of the six photographs is an independent
 * absolutely-positioned element carrying the specification's own x, y, w and h
 * percentages, its own rotation, its own border width and its own z-index —
 * eight different depths, so the prints sit on different planes rather than in
 * one flat rank. No shared container, no equal columns, no uniform gaps, no
 * masonry. The boxes are the specified percentages and the photographs fill
 * them with `object-cover`, exactly as the placeholder behaviour section asks.
 *
 * COORDINATES. The percentages are of the left zone, which is a square on
 * desktop — so x 39% / w 61% is the upper-right of the collage and the title's
 * negative space is the strip to its left. On a phone the title and
 * introduction sit in normal flow above the collage instead of beside it, so
 * the same six prints get a second, tighter set of offsets (`m`) that tiles a
 * square frame without colliding with the text.
 *
 * COLOUR. The same mapping as the event board, inverted in emphasis: the event
 * board is a blush ground with cream paper, this one puts the paper back on a
 * cream ground and lets blush appear only where the specification asks for it
 * — the icon discs and the winner callout. No new hues:
 *
 *   warm white print  #FFF9F5  →  plate  #FDFCF8   (every photograph's border)
 *   canvas            #F7EEEC  →  cream  #F9F8F2   (the ground)
 *   icon disc, callout #E8D0D0 → blush  #FADBD9
 *   burgundy          #641720  →  wine   #7A2A2E   (headline, WINNER)
 *   text              #4A4141  →  ink    #3E2723
 *
 * The learning numerals are ink, not burgundy — the specification asks for
 * near-black there, and reserving the burgundy for the headline and the result
 * is what keeps the panel calm.
 *
 * PLACEHOLDERS. Every photograph is a wordless plate until its file lands in
 * /public/portfolio-assets, matching the specification's own rule that a
 * missing asset shows no text, no icon and no grey box. It keeps the site's
 * single `PhotoPlate` so one frame design covers every empty slot on the site;
 * the warm-white border that carries most of the look comes from `Print`.
 */

const HEADING = ['What I', 'Took Away'] as const;

const INTRO =
  'The experience taught me how meaningful customer interactions can turn a brand activation into a memorable experience.';

const LEARNINGS = [
  {
    number: '01',
    icon: 'people',
    title: ['CUSTOMER INTERACTION'],
    description:
      'Learned to approach customers confidently, start conversations and make them comfortable participating.',
    divider: true,
  },
  {
    number: '02',
    icon: 'sparkle',
    title: ['CREATING MEMORABLE', 'EXPERIENCES'],
    description:
      'Learned how small details and personalised interactions can make a brand experience more memorable.',
    divider: true,
  },
  {
    number: '03',
    icon: 'people',
    title: ['TEAMWORK & EXECUTION'],
    description:
      'Learned to coordinate with my team while managing a live customer-facing activation.',
    divider: false,
  },
] as const;

const ACHIEVEMENT = {
  label: 'HUNKEMÖLLER × BACARDI',
  headline: 'WINNER',
  subheadline: '1 OF 4 GROUPS',
  description: 'Our team won among 4 participating groups.',
} as const;

/**
 * The six photographs.
 *
 * `pos` / `m`     x, y, w, h as percentages of the collage frame
 * `z`             the specified stacking order — eight distinct planes
 * `pad`           the photograph's own paper border, 3–7px
 * `paper`         mount it on a cream mat, so paper shows around the print
 * `padless`       the specification mounts image 04 with no frame at all
 */
const PHOTOS = [
  {
    id: 'image_01',
    src: '/portfolio-assets/04_takeaway_hero_interaction.jpg',
    alt: 'Three young women at a Hunkemöller personalisation activity — the woman in front wears a white lace top, two women stand beside her and a woman with pink hair is visible behind, over a table of craft materials',
    label: 'Guests personalising at the event table',
    pos: 'left-[39%] top-0 w-[61%] h-[46%]',
    m: 'left-0 top-0 w-full h-[42%]',
    z: 'z-[2]',
    rotate: 0,
    pad: 6,
    paper: true,
  },
  {
    id: 'image_02',
    src: '/portfolio-assets/04_takeaway_bedazzling.jpg',
    alt: 'The Bedazzling Station — glasses of pink drinks filling the table, a small pink sign on a wooden easel, and bowls of colourful beads and craft materials',
    label: 'The Bedazzling Station',
    pos: 'left-0 top-[43%] w-[50%] h-[31%]',
    m: 'left-0 top-[38%] w-[56%] h-[30%]',
    z: 'z-[4]',
    rotate: -1.5,
    pad: 5,
    paper: false,
  },
  {
    id: 'image_03',
    src: '/portfolio-assets/04_takeaway_polaroid_corner.jpg',
    alt: 'The Polaroid photo corner — decorated framed photographs dressed with pink ribbons, lace, hearts and Hunkemöller branding',
    label: 'The Polaroid photo corner',
    pos: 'left-[39%] top-[46%] w-[48%] h-[34%]',
    m: 'left-[44%] top-[44%] w-[56%] h-[30%]',
    z: 'z-[5]',
    rotate: 1,
    pad: 5,
    paper: true,
  },
  {
    id: 'image_04',
    src: '/portfolio-assets/04_takeaway_installation.jpg',
    alt: 'The event installation — a dark grey wall of pink Hunkemöller posters and campaign imagery, a mannequin in a pink lingerie set, and a screen playing campaign content',
    label: 'The event installation wall',
    pos: 'left-0 top-[70%] w-[58%] h-[30%]',
    m: 'left-0 top-[64%] w-[64%] h-[36%]',
    z: 'z-[1]',
    rotate: 0,
    pad: 0,
    paper: false,
    padless: true,
  },
  {
    id: 'image_05',
    src: '/portfolio-assets/04_takeaway_customer_interaction.jpg',
    alt: 'Two women interacting during the activation — one in white helping to decorate another in pink, both smiling naturally',
    label: 'A guest helping another to personalise',
    pos: 'left-[42%] top-[73%] w-[28%] h-[27%]',
    m: 'left-[50%] top-[66%] w-[46%] h-[34%]',
    z: 'z-[7]',
    rotate: 1.2,
    pad: 5,
    paper: true,
  },
  {
    id: 'image_06',
    src: '/portfolio-assets/04_takeaway_branding_detail.jpg',
    alt: 'Hunkemöller event branding and decorative installation details',
    label: 'Event branding detail',
    pos: 'left-[7%] top-[67%] w-[23%] h-[17%]',
    m: 'left-[4%] top-[26%] w-[30%] h-[18%]',
    z: 'z-[6]',
    rotate: -1,
    pad: 4,
    paper: false,
  },
] as const;

export const WhatITookAwayPage: React.FC = () => {
  return (
    <div className="paper-grain-light bg-[#F9F8F2]">
      <div className="px-5 sm:px-5 lg:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 lg:gap-x-8">
          {/* ——— LEFT 67%: the collage ————————————————————— */}
          <div className="lg:col-span-8 relative flex flex-col">
            {/*
              The introduction. In normal flow on a phone, above the collage;
              lifted out of the flow on desktop so the collage frame can own the
              full height of the zone and the title can sit in the negative
              space the specification leaves beside the dominant photograph.
            */}
            <div className="lg:contents">
              <BrandMark align="left" className="lg:absolute lg:left-[7%] lg:top-[5%] z-10" />

              <h1 className="mt-9 lg:absolute lg:left-[7%] lg:top-[13.5%] lg:mt-0 z-10 font-editorial text-[clamp(2.5rem,4.6vw,3.1875rem)] leading-[0.91] tracking-[-0.01em] text-[#7A2A2E]">
                {HEADING[0]}
                <br />
                <span className="italic">{HEADING[1]}</span>
              </h1>

              <span
                className="block h-px w-[130px] bg-[#705955]/55 mt-6 lg:absolute lg:left-[7%] lg:top-[25.5%] lg:mt-0"
                aria-hidden="true"
              />

              <p className="mt-6 lg:absolute lg:left-[7%] lg:top-[35%] lg:mt-0 lg:w-[270px] w-full max-w-[270px] font-body text-sm leading-[1.5] text-[#3E2723]/85">
                {INTRO}
              </p>
            </div>

            {/* The collage frame. Square, so the specified percentages hold. */}
            <div className="relative mt-10 lg:mt-0 w-full aspect-square overflow-hidden">
              {PHOTOS.map((shot) => (
                <Print
                  key={shot.id}
                  label={shot.label}
                  rotate={shot.rotate}
                  pad={shot.pad}
                  padless={'padless' in shot ? shot.padless : false}
                  paper={shot.paper}
                  className={`absolute ${shot.pos} ${shot.m} ${shot.z}`}
                >
                  <Slot
                    src={shot.src}
                    alt={shot.alt}
                    label={shot.label}
                    className="h-full w-full"
                    radius="rounded-none"
                  />
                </Print>
              ))}
            </div>
          </div>

          {/* ——— RIGHT 33%: the calm panel ————————————————— */}
          <div className="lg:col-span-4 flex flex-col justify-between lg:py-[4.375rem] lg:pr-[3.4375rem] lg:pl-[4.0625rem] mt-14 lg:mt-0">
            <div>
              {LEARNINGS.map((item, i) => (
                <Learning key={item.number} item={item} first={i === 0} />
              ))}
            </div>

            <div className="mt-[2.375rem]">
              <Achievement />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ——— One learning section ————————————————————————————————— */

/**
 * A blush disc, the numeral to its right, and a hairline running from after the
 * numeral out to the panel edge on the same baseline — then the uppercase
 * title and the sentence beneath. The rule is what separates these three from
 * cards: no boxes, no fills, no rounded anything.
 */
const Learning: React.FC<{ item: (typeof LEARNINGS)[number]; first: boolean }> = ({ item, first }) => (
  <div className={item.divider ? 'rule-t-light pt-[2.1875rem]' : 'pt-[2.1875rem]'}>
    {!first && <div className="h-[0.625rem]" aria-hidden="true" />}

    <div className="flex items-center gap-5">
      <div className="shrink-0 grid h-[4.25rem] w-[4.25rem] place-items-center rounded-full bg-[#FADBD9]">
        {item.icon === 'sparkle' ? <SparkleMark size={31} /> : <PeopleMark size={33} />}
      </div>

      <p className="font-editorial text-[2.125rem] leading-none text-[#3E2723] shrink-0">{item.number}</p>

      <span className="block h-px flex-1 bg-[#705955]/45" aria-hidden="true" />
    </div>

    <h2 className="mt-6 eyebrow text-[0.75rem] tracking-[0.25em] text-[#3E2723]">
      {item.title.map((line, k) => (
        <React.Fragment key={line}>
          {line}
          {k < item.title.length - 1 && <br />}
        </React.Fragment>
      ))}
    </h2>

    <p className="mt-3 font-body text-sm leading-[1.5] text-[#3E2723]/85">{item.description}</p>
  </div>
);

/* ——— The result ————————————————————————————————————————————— */

/**
 * The team outcome, centred in a blush field. The box holds the label, rule,
 * WINNER and 1 OF 4 GROUPS and stops there — the specification caps it at 142px,
 * which the closing sentence would not fit inside, so it sits below, as in the
 * first pass.
 */
const Achievement: React.FC = () => (
  <div>
    <div className="bg-[#FADBD9] px-5 py-[1.125rem] text-center">
      <p className="eyebrow text-[0.5625rem] tracking-[0.44em] text-[#3E2723]/85">{ACHIEVEMENT.label}</p>

      <span className="block h-px w-[7.5rem] bg-[#705955]/50 mx-auto my-3.5" aria-hidden="true" />

      <p className="font-editorial text-[1.8125rem] leading-none text-[#7A2A2E]">{ACHIEVEMENT.headline}</p>
      <p className="mt-1 font-editorial italic text-[1.5rem] leading-none text-[#7A2A2E]">
        {ACHIEVEMENT.subheadline}
      </p>
    </div>

    <p className="mt-4 text-center font-body text-xs leading-[1.45] text-[#3E2723]/80">
      {ACHIEVEMENT.description}
    </p>
  </div>
);
