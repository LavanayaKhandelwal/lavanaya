import React from 'react';
import {
  ArrowRight,
  Box,
  Coffee,
  Dumbbell,
  Lightbulb,
  Plane,
  Search,
  Shirt,
  Target,
  TrendingUp,
} from 'lucide-react';
import { SlidePhoto } from '../SlidePhoto';

/**
 * PROJECT 3 — PAGE 01 · EVERYDAY ATHLEISURE
 *
 * Rebuilt from the "Everyday Athleisure" page specification: a full-bleed cover
 * in which the lifestyle photograph IS the board and every line of type sits
 * over it, a full-width row of four lifestyle polaroids, then the mid band
 * stacked top to bottom (WHAT I NOTICED over THE OPPORTUNITY over THE CONCEPT),
 * a three-area bottom band (concept board, first product, methodology panel)
 * and a closing wave.
 *
 * COLOUR. The specification is built on a sage-green identity. The site's
 * light palette is the cream / ink / taupe / terracotta / blush set, so every
 * green is mapped onto it rather than introduced as a new hue:
 *
 *   primary green   #183D35  →  ink        #3E2723
 *   secondary green #60796E  →  wine       #7A2A2E   (the ONE emphasised heading)
 *   sage line       #718073  →  taupe      #705955
 *   soft sage       #D9DDD0  →  blush      #FADBD9
 *   pale sage pill  #DCE0D5  →  blush/50   #FADBD9/50
 *   deep pill       #60796E  →  ink        #3E2723  (white type inverted to cream)
 *   soft blush      #EBD9D5  →  blush      #FADBD9
 *   wave            #AAB2A4  →  blush      #FADBD9
 *   arrows          #607068  →  terracotta #D69589
 *   paper white     #F8F5EC  →  plate      #FDFCF8
 *   muted cream     #EAE5D8  →  cream      #F9F8F2
 *   canvas          #F4F0E6  →  cream      #F9F8F2
 *
 * TYPE. The spec's slide-scale type is scaled up for the web while keeping its
 * proportions and tracking. Secondary headings are the site's `eyebrow` (mono,
 * uppercase, wide tracking) which is the same idea as the spec's 9–11px
 * uppercase sans at 2–3px tracking. Handwriting is Caveat, which is already in
 * the font request — see `.font-hand` in index.css. The two icons lucide does
 * not ship (a fitted body, a clothes hanger) are drawn inline.
 *
 * IMAGERY. Eleven slots, all wordless hairline plates per the build decision —
 * drop the real file into /public/portfolio-assets under the same filename and
 * it fills the same frame. Nothing is invented in place of a missing photo.
 */

const TITLE_LINES = ['EVERYDAY', 'ATHLEISURE'] as const;
const HERO_DESCRIPTION = 'A startup concept built around one simple idea:';
const HERO_ANNOTATION = ['Comfort', 'meets', 'style'];

const NOTICED_HEADING = 'WHAT I NOTICED';
const NOTICED_BODY = [
  'Activewear was everywhere.',
  'But it wasn’t always made',
  'for everyday life.',
];

const OPPORTUNITY_LABEL = 'THE OPPORTUNITY';
const OPPORTUNITY_TITLE = 'BRIDGE THE GAP';

const CONCEPT_LABEL = 'THE CONCEPT';
const CONCEPT_TITLE = ['ONE OUTFIT.', 'MULTIPLE MOMENTS.'];
const CONCEPT_DESCRIPTION = 'A co-ord designed to transition across:';

const WORKED_WITH_HEADING = 'WHAT I WORKED WITH';

/* ——— Image slots ——————————————————————————————————————————————— */

const HERO_PHOTO = {
  src: '/portfolio-assets/project-athleisure-hero.png',
  alt: 'Young woman in a muted olive-green athleisure co-ord — structured long-sleeve crop top and relaxed joggers — seated against a pale concrete wall',
  label: 'Hero — everyday athleisure',
  position: '50% 45%',
};

const NOTICED_IMAGES = [
  {
    src: '/portfolio-assets/03_noticed_01.jpg',
    alt: 'Activewear fit sitting too tight on the body',
    label: 'What I noticed — 01',
    rotation: '-1.5deg',
    tapeRotate: -4,
  },
  {
    src: '/portfolio-assets/03_noticed_02.jpg',
    alt: 'Activewear cut too revealing to wear beyond the gym',
    label: 'What I noticed — 02',
    rotation: '1.5deg',
    tapeRotate: 5,
  },
  {
    src: '/portfolio-assets/03_noticed_03.jpg',
    alt: 'Activewear built for one setting only, not for moving between them',
    label: 'What I noticed — 03',
    rotation: '-1deg',
    tapeRotate: -6,
  },
];

const POLAROIDS = [
  { label: 'GYM', rotation: '-3deg', src: '/portfolio-assets/03_athleisure_gym.jpg', alt: 'In the olive athleisure co-ord beside gym equipment' },
  { label: 'CAFÉ', rotation: '2deg', src: '/portfolio-assets/03_athleisure_cafe.jpg', alt: 'In the olive athleisure co-ord seated at a café with a coffee' },
  { label: 'TRAVEL', rotation: '-2deg', src: '/portfolio-assets/03_athleisure_travel.jpg', alt: 'In the olive athleisure co-ord walking through an airport with luggage' },
];

const MOMENTS = [
  { label: 'GYM', icon: Dumbbell },
  { label: 'CAFÉ', icon: Coffee },
  { label: 'TRAVEL', icon: Plane },
];

const METHOD = [
  { label: ['Consumer', 'Research'], icon: Search },
  { label: ['Trend', 'Research'], icon: TrendingUp },
  { label: ['Market Gap', 'Analysis'], icon: Target },
  { label: ['Concept', 'Development'], icon: Lightbulb },
  { label: ['Product', 'Thinking'], icon: Box },
];

/* Two pain points have no lucide equivalent, so they are drawn. */
const FittedBodyIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="4.5" r="2" />
    <path d="M12 7c-2.6 0-4 1.3-4.4 3L6.6 15c-.2.8.3 1.5 1 1.7M12 7c2.6 0 4 1.3 4.4 3l1 5c.2.8-.3 1.5-1 1.7" />
    <path d="M9.6 9.2 12 11.4l2.4-2.2M12 11.4V21" />
  </svg>
);

const HangerIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 7.2a2 2 0 1 1 2-2" />
    <path d="M12 7.2 3.4 14.1c-.7.6-.2 1.7.7 1.7h15.8c.9 0 1.4-1.1.7-1.7L12 7.2Z" />
  </svg>
);

const PAIN_POINTS = [
  { label: ['Too tight'], icon: <FittedBodyIcon /> },
  { label: ['Too gym-', 'specific'], icon: <Dumbbell className="w-[18px] h-[18px]" strokeWidth={1.5} /> },
  { label: ['Too revealing'], icon: <HangerIcon /> },
  { label: ['Limited', 'versatility'], icon: <Shirt className="w-[18px] h-[18px]" strokeWidth={1.5} /> },
];

/* ——— Hand-drawn furniture ——————————————————————————————————————— */

/** Small hand-drawn heart under the hero annotation. */
const HeartMark: React.FC = () => (
  <svg viewBox="0 0 26 24" className="w-5 h-5" fill="none" aria-hidden="true">
    <path
      d="M13 20.5C13 20.5 3.2 14.6 3.2 8.4 3.2 5.4 5.5 3.3 8.2 3.3c1.8 0 3.5 1 4.8 2.6 1.3-1.6 3-2.6 4.8-2.6 2.7 0 5 2.1 5 5.1 0 6.2-9.8 12.1-9.8 12.1Z"
      stroke="#3E2723"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

/** Curved hand-drawn arrow, pointing left or right. */
const HandArrow: React.FC<{ className?: string; flip?: boolean }> = ({ className = '', flip = false }) => (
  <svg
    viewBox="0 0 70 40"
    className={className}
    fill="none"
    aria-hidden="true"
    style={flip ? { transform: 'scaleX(-1)' } : undefined}
  >
    <path
      d="M64 6C44 4 20 12 11 24"
      stroke="#D69589"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M6 15.5c-1.4 4-1.2 8.2 1.2 11.4M4 26.5c4.3.6 8.3-.7 10.6-4"
      stroke="#D69589"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** A strip of beige masking tape, rotated. */
const Tape: React.FC<{ className?: string; rotate?: number }> = ({ className = '', rotate = 0 }) => (
  <span
    aria-hidden="true"
    className={`pointer-events-none absolute block h-6 w-20 bg-[#E8DFC8]/70 ${className}`}
    style={{ transform: `rotate(${rotate}deg)`, boxShadow: 'inset 0 0 0 1px rgba(62,39,35,0.06)' }}
  />
);

/* ——— Small parts ——————————————————————————————————————————————— */

/** A wordless photo plate at an explicit aspect, for collage placement. */
const Slot: React.FC<{
  src: string;
  alt: string;
  label: string;
  className?: string;
  position?: string;
}> = ({ src, alt, label, className = '', position }) => (
  <div className={`overflow-hidden ${className}`}>
    <SlidePhoto
      src={src}
      alt={alt}
      label={label}
      className="w-full h-full object-cover"
      style={position ? { objectPosition: position } : undefined}
    />
  </div>
);

/** Icon in a tinted disc, with a caption underneath. */
const IconDisc: React.FC<{
  children: React.ReactNode;
  label: string[];
  className?: string;
  discClassName?: string;
  iconClassName?: string;
}> = ({ children, label, className = '', discClassName = '', iconClassName = '' }) => (
  <div className={`flex flex-col items-center gap-2 text-center ${className}`}>
    <span
      className={`flex items-center justify-center rounded-full text-[#3E2723] flex-shrink-0 ${discClassName}`}
    >
      {children}
    </span>
    <span className={`eyebrow leading-[1.35] text-[#3E2723]/80 ${iconClassName}`}>
      {label.map((line, i) => (
        <React.Fragment key={line}>
          {i > 0 && <br />}
          {line}
        </React.Fragment>
      ))}
    </span>
  </div>
);

/* ——— The page ——————————————————————————————————————————————————— */

export const EverydayAthleisurePageOne: React.FC = () => {
  return (
    <div className="paper-grain-light">
      {/* Cover — the photograph IS the board; every line of type sits over it */}
      <section className="relative -mx-5 sm:-mx-5 lg:-mx-6">
        <div className="relative flex min-h-[460px] items-end overflow-hidden sm:min-h-[560px] lg:h-[86svh] lg:min-h-[620px] lg:items-center">
          <SlidePhoto
            src={HERO_PHOTO.src}
            alt={HERO_PHOTO.alt}
            label={HERO_PHOTO.label}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: HERO_PHOTO.position }}
            loading="eager"
            fetchPriority="high"
          />

          {/* One wash, sized to the copy — the site's cover treatment. */}
          <div className="absolute inset-x-0 bottom-0 h-[82%] bg-gradient-to-t from-[#F9F8F2] via-[#F9F8F2]/78 to-transparent lg:inset-y-0 lg:left-0 lg:right-auto lg:top-0 lg:h-full lg:w-[56%] lg:bg-gradient-to-r lg:from-[#F9F8F2] lg:via-[#F9F8F2]/84 lg:to-transparent" />

          <div className="relative w-full px-5 py-12 sm:px-5 sm:py-14 lg:px-6 lg:py-16">
            <div className="max-w-xl lg:max-w-[46ch]">
              <div className="flex items-center gap-4">
                <span className="eyebrow text-[#3E2723]">PROJECT</span>
                <span className="block h-px w-10 bg-[#A38D89]" aria-hidden="true" />
              </div>

              <h1 className="mt-6 font-display text-[clamp(2.5rem,5.4vw,4.75rem)] leading-[0.9] tracking-[-0.02em] text-[#3E2723]">
                {TITLE_LINES.map((line, i) => (
                  <React.Fragment key={line}>
                    {line}
                    {i < TITLE_LINES.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h1>

              <p className="mt-6 font-body text-sm tracking-[0.02em] text-[#3E2723]">
                {HERO_DESCRIPTION}
              </p>

              {/* The handwritten note. It used to float over the photo's upper
                  right, detached from the copy — but it is the answer to the
                  sentence above, so it belongs in the stack under the heading. */}
              <p className="mt-2.5 flex items-center gap-2.5 font-hand text-[1.375rem] sm:text-[1.625rem] leading-[1.1] text-[#3E2723]">
                {HERO_ANNOTATION.join(' ')}
                <HeartMark />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Mid ———————————————————————————————————————————— */}
      <section className="rule-t-light pt-16 pb-8 lg:pt-24 lg:pb-10">
        <div className="space-y-10 lg:space-y-14">
          {/* WHAT I NOTICED — cream paper brush. Copy left, the four complaints right. */}
          <div className="relative p-8 lg:p-12 bg-[#FDFCF8] rounded-[44px_28px_40px_24px] lg:-rotate-[0.4deg] reveal">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-9 lg:gap-14 items-center">
              <div className="max-w-xl">
                <h2 className="eyebrow text-[#3E2723]">{NOTICED_HEADING}</h2>

                <p className="mt-5 font-body text-lg leading-[1.5] text-[#3E2723]">
                  {NOTICED_BODY.map((line) => (
                    <React.Fragment key={line}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>

                {/* The four complaints, under the copy */}
                <div className="mt-8 grid grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
                  {PAIN_POINTS.map((point) => (
                    <IconDisc
                      key={point.label.join('-')}
                      label={point.label}
                      discClassName="w-14 h-14 lg:w-[4.25rem] lg:h-[4.25rem] bg-[#FADBD9]"
                      iconClassName="text-[0.6875rem] tracking-[0.14em]"
                    >
                      {point.icon}
                    </IconDisc>
                  ))}
                </div>
              </div>

              {/* Three image slots, right column, side by side. Each wears a
                  hairline border so the plate reads as mounted rather than
                  floating. The column is 37rem so each plate comes out at the
                  same ~182px it was when two shared a 24rem column. */}
              <div className="grid grid-cols-3 gap-4 sm:gap-5 w-full lg:w-[37rem]">
                {NOTICED_IMAGES.map((shot) => (
                  <figure
                    key={shot.label}
                    className="relative bg-[#FDFCF8] p-2 pb-5 border border-[#705955]/35 shadow-[0_8px_20px_-14px_rgba(62,39,35,0.3)] hover-lift hover-warm"
                    style={{ transform: `rotate(${shot.rotation})` }}
                  >
                    <Slot
                      src={shot.src}
                      alt={shot.alt}
                      label={shot.label}
                      className="aspect-[3/4]"
                    />
                    <Tape
                      className="-top-2.5 left-1/2 -translate-x-1/2 w-11 h-4"
                      rotate={shot.tapeRotate}
                    />
                  </figure>
                ))}
              </div>
            </div>
          </div>

          {/* THE OPPORTUNITY — pale sage brush, mapped to blush. Heading left, the bridge right. */}
          <div className="relative p-8 lg:p-12 bg-[#FADBD9]/50 rounded-[24px_44px_28px_40px] lg:rotate-[0.4deg] reveal">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-9 lg:gap-16 items-center">
              <div>
                <p className="eyebrow text-[#3E2723]">{OPPORTUNITY_LABEL}</p>
                <h2 className="mt-3 font-display text-[clamp(2.25rem,4.4vw,3.5rem)] leading-[0.95] tracking-tight text-[#3E2723]">
                  {OPPORTUNITY_TITLE}
                </h2>
              </div>

              <div>
                {/* Performance ← EVERYDAY ATHLEISURE → Casual */}
                <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-4">
                  <span className="rounded-full bg-[#FDFCF8] px-4 py-2 eyebrow text-[#3E2723]">
                    Performance
                  </span>
                  <span className="font-body text-sm leading-none text-[#D69589]" aria-hidden="true">
                    &#8592;
                  </span>
                  <span className="rounded-full bg-[#3E2723] px-5 py-2.5 eyebrow text-[#F9F8F2] text-center leading-[1.35]">
                    EVERYDAY
                    <br />
                    ATHLEISURE
                  </span>
                  <span className="font-body text-sm leading-none text-[#D69589]" aria-hidden="true">
                    &#8594;
                  </span>
                  <span className="rounded-full bg-[#FDFCF8] px-4 py-2 eyebrow text-[#3E2723]">
                    Casual
                  </span>
                </div>

                <p className="mt-8 text-center font-body text-sm tracking-[0.06em] text-[#3E2723]">
                  Comfort&nbsp;&nbsp;+&nbsp;&nbsp;Style&nbsp;&nbsp;+&nbsp;&nbsp;Function&nbsp;&nbsp;+&nbsp;&nbsp;Versatility
                </p>
              </div>
            </div>
          </div>

          {/* THE CONCEPT — warm ivory, with the technical sketch at the right */}
          <div className="relative p-8 lg:p-12 bg-[#FDFCF8] rounded-[3px] reveal">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-9 lg:gap-16 items-start">
              <div>
                <p className="eyebrow text-[#3E2723]">{CONCEPT_LABEL}</p>
                <h2 className="mt-3 font-display text-[clamp(2.25rem,4.4vw,3.5rem)] leading-[1] text-[#7A2A2E]">
                  {CONCEPT_TITLE.map((line) => (
                    <React.Fragment key={line}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </h2>

                <p className="mt-5 font-body text-base leading-[1.6] text-[#3E2723]/80 max-w-lg">
                  {CONCEPT_DESCRIPTION}
                </p>

                <div className="mt-9 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-start gap-1">
                  {MOMENTS.map((moment, i) => (
                    <React.Fragment key={moment.label}>
                      <IconDisc
                        label={[moment.label]}
                        discClassName="w-14 h-14 lg:w-[3.75rem] lg:h-[3.75rem] bg-[#FADBD9]"
                        iconClassName="text-[0.6875rem] tracking-[0.14em]"
                      >
                        <moment.icon className="w-5 h-5 lg:w-[22px] lg:h-[22px]" strokeWidth={1.5} />
                      </IconDisc>
                      {i < MOMENTS.length - 1 && (
                        <span
                          className="self-center font-body text-xl leading-none text-[#D69589] pt-5"
                          aria-hidden="true"
                        >
                          &#8250;
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Technical fashion illustration + its two handwritten notes */}
              <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-8 items-start">
                <Slot
                  src="/portfolio-assets/03_tech_sketch_coord.jpg"
                  alt="Fashion technical illustration — front view of the structured long-sleeve cropped top with relaxed wide-leg jogger trousers"
                  label="Technical sketch — crop top & jogger"
                  className="w-[190px] lg:w-[260px] h-[265px] lg:h-[360px]"
                  position="top"
                />

                <div className="pt-3">
                  <div className="relative">
                    {/* Lifted with a transform, not a margin: a negative
                        margin-top here would collapse out of this wrapper and
                        drag the arrow up with it. A transform moves the text
                        only and leaves the wrapper — and the arrow anchored to
                        it — exactly where it is. */}
                    <p className="-translate-y-8 font-hand text-[1.5rem] leading-[1.15] text-[#3E2723] rotate-[-2deg] origin-left">
                      Structured top
                      <br />
                      for shape + style
                    </p>
                    <HandArrow className="absolute -left-14 top-0 w-12 h-7 rotate-[150deg]" />
                  </div>

                  <div className="relative mt-20">
                    <p className="mt-14 translate-x-2 font-hand text-[1.5rem] leading-[1.15] text-[#3E2723] rotate-[-2deg] origin-left">
                      Relaxed bottoms
                      <br />
                      for movement +
                      <br />
                      comfort
                    </p>
                    {/* Pivoted on the arrowhead rather than the element's
                        centre, so left/top place the tip itself rather than
                        the box. top-2.5 is mid-cap-height of the first line;
                        the x offsets track the note's own nudge so the two
                        stay put relative to each other. */}
                    <HandArrow className="absolute -left-2 top-2.5 w-12 h-7 rotate-[150deg] origin-[7%_52%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lifestyle polaroids — the three moments THE CONCEPT names above,
              shown. Placed here rather than near the cover so the photographs
              land directly beneath the GYM › CAFÉ › TRAVEL discs. */}
          <div className="grid grid-cols-2 sm:grid-cols-[1fr_auto_1fr_auto_1fr] items-start gap-4 sm:gap-x-6 lg:gap-x-8 reveal">
            {POLAROIDS.map((shot, i) => (
              <React.Fragment key={shot.label}>
                <figure
                  className="relative bg-[#FDFCF8] p-2.5 pb-9 shadow-[0_10px_26px_-14px_rgba(62,39,35,0.3)] hover-lift"
                  style={{ transform: `rotate(${shot.rotation})` }}
                >
                  <Slot
                    src={shot.src}
                    alt={shot.alt}
                    label={shot.label}
                    className="aspect-[4/5]"
                    position="top"
                  />
                  <figcaption className="absolute inset-x-0 bottom-2 text-center font-hand text-[1.0625rem] leading-none text-[#3E2723]">
                    {shot.label}
                  </figcaption>
                  <Tape
                    className="-top-2.5 left-1/2 -translate-x-1/2 w-14 h-5"
                    rotate={i % 2 === 0 ? -4 : 5}
                  />
                </figure>

                {/* The transition marker, matching the GYM › CAFÉ › TRAVEL
                    discs in THE CONCEPT directly above. Hidden on mobile,
                    where the plates run two-up and there is no gap to sit in. */}
                {i < POLAROIDS.length - 1 && (
                  <span
                    className="hidden sm:flex self-center font-body text-4xl lg:text-5xl leading-none text-[#D69589]"
                    aria-hidden="true"
                  >
                    &#8250;
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </section>

      {/* ——— WHAT I WORKED WITH — its own full-width band, built on the
           THE OPPORTUNITY treatment: blush wash, organic radius, slight tilt,
           label left and the five methods as a pill row on the right. ————— */}
      <section className="pt-2 pb-8 lg:pt-4 lg:pb-12">
        <div className="relative p-8 lg:p-12 bg-[#FADBD9]/50 rounded-[24px_44px_28px_40px] lg:-rotate-[0.4deg] reveal">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-9 lg:gap-16 items-center">
            <p className="eyebrow text-[#3E2723]">{WORKED_WITH_HEADING}</p>

            <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-4">
              {METHOD.map((item) => (
                <span
                  key={item.label.join('-')}
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#FDFCF8] pl-3 pr-4 py-2 eyebrow text-[#3E2723] whitespace-nowrap"
                >
                  <item.icon className="w-4 h-4 flex-shrink-0 text-[#A38D89]" strokeWidth={1.5} />
                  {item.label.join(' ')}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ——— Closing wave — full bleed, sits directly on the band above it ————— */}
      <div className="-mx-5 sm:-mx-5 lg:-mx-6" aria-hidden="true">
        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          className="block w-full h-[86px] lg:h-[140px]"
        >
          <path
            d="M0 78C150 58 250 104 400 100 560 96 600 34 760 30 920 26 980 92 1120 100 1260 108 1340 66 1440 58L1440 140 0 140Z"
            fill="#FADBD9"
          />
        </svg>
      </div>
    </div>
  );
};
