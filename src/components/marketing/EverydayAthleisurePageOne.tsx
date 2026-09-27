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
  Sun,
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
const HERO_QUESTION = ['What if activewear could move', 'with you your entire day?'];
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

const FIRST_PRODUCT_LABEL = 'THE FIRST PRODUCT';
const FIRST_PRODUCT_TITLE = ['Structured full-sleeve', 'crop top + relaxed jogger'];
const FIRST_PRODUCT_CAPTION = 'My first physical MVP.';

const WORKED_WITH_HEADING = 'WHAT I WORKED WITH';

const BOARD_ANNOTATION = ['Same energy.', 'Different settings.'];

/* ——— Image slots ——————————————————————————————————————————————— */

const HERO_PHOTO = {
  src: '/portfolio-assets/project-athleisure-hero.png',
  alt: 'Young woman in a muted olive-green athleisure co-ord — structured long-sleeve crop top and relaxed joggers — seated against a pale concrete wall',
  label: 'Hero — everyday athleisure',
  position: '50% 45%',
};

const POLAROIDS = [
  { label: 'GYM', rotation: '-3deg', src: '/portfolio-assets/03_athleisure_gym.jpg', alt: 'In the olive athleisure co-ord beside gym equipment' },
  { label: 'CAFÉ', rotation: '2deg', src: '/portfolio-assets/03_athleisure_cafe.jpg', alt: 'In the olive athleisure co-ord seated at a café with a coffee' },
  { label: 'TRAVEL', rotation: '-2deg', src: '/portfolio-assets/03_athleisure_travel.jpg', alt: 'In the olive athleisure co-ord walking through an airport with luggage' },
  { label: 'EVERYDAY', rotation: '4deg', src: '/portfolio-assets/03_athleisure_everyday.jpg', alt: 'In the olive athleisure co-ord walking outdoors in an urban setting' },
];

const MOMENTS = [
  { label: 'GYM', icon: Dumbbell },
  { label: 'CAFÉ', icon: Coffee },
  { label: 'TRAVEL', icon: Plane },
  { label: 'EVERYDAY', icon: Sun },
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

/** Freehand underline beneath the hero question. */
const HandUnderline: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 220 16" className={className} fill="none" aria-hidden="true" preserveAspectRatio="none">
    <path
      d="M3 11.5C42 6.5 96 3.5 217 6"
      stroke="#3E2723"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.85"
    />
  </svg>
);

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

/** Hand-drawn underline for the first-product caption. */
const ShortUnderline: React.FC = () => (
  <svg viewBox="0 0 170 14" className="w-[150px] lg:w-[190px] h-3" fill="none" aria-hidden="true" preserveAspectRatio="none">
    <path d="M4 9.5C48 4 108 2.5 166 6.5" stroke="#3E2723" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
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

/**
 * Large hand-drawn botanical line illustration bleeding off the left edge.
 * Thin, organic, taupe — the spec's sage line work re-pointed at the palette.
 */
const BotanicalLine: React.FC = () => (
  <svg
    viewBox="0 0 200 520"
    className="pointer-events-none absolute -left-16 lg:-left-24 top-0 h-full w-auto"
    fill="none"
    aria-hidden="true"
    style={{ opacity: 0.8 }}
  >
    <path d="M96 8C70 74 112 128 84 196c-22 54 8 96-10 152-14 44-46 74-52 158" stroke="#705955" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M92 66c22 6 40-4 52-24M86 132c-24 2-40-12-48-34M84 200c24 4 44-8 56-30M80 274c-26 0-42-16-48-40M76 344c26 6 46-8 58-32M70 412c-24 2-40-12-48-34" stroke="#705955" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M144 42c-16-8-24-22-22-38 16 2 26 16 22 38ZM38 98c-4-18 4-34 20-42 8 16 0 34-20 42ZM140 170c-18-6-28-20-28-38 18 0 30 14 28 38ZM32 234c-6-18 2-34 18-44 10 16 2 36-18 44ZM134 312c-18-8-26-24-24-42 18 2 28 18 24 42ZM34 378c-4-18 4-34 20-44 8 18 0 36-20 44Z" stroke="#705955" strokeWidth="1.3" strokeLinejoin="round" />
    <path d="M40 500c-14-10-18-28-10-44 16 6 22 26 10 44ZM120 470c16-6 30 0 40 14-12 12-30 8-40-14Z" stroke="#705955" strokeWidth="1.3" strokeLinejoin="round" />
  </svg>
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

          <BotanicalLine />

          <div className="relative w-full px-5 py-12 sm:px-5 sm:py-14 lg:px-6 lg:py-16">
            <div className="max-w-xl lg:max-w-[46ch]">
              <div className="flex items-center gap-4">
                <span className="eyebrow text-[#3E2723]">PROJECT</span>
                <span className="block h-px w-10 bg-[#A38D89]" aria-hidden="true" />
              </div>

              <h1 className="mt-6 font-display text-[clamp(2.5rem,5.4vw,4.75rem)] leading-[0.9] tracking-[-0.02em] text-[#3E2723]">
                {TITLE_LINES.map((line) => (
                  <React.Fragment key={line}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h1>

              <p className="mt-6 font-body text-sm tracking-[0.02em] text-[#3E2723]">
                {HERO_DESCRIPTION}
              </p>

              <p className="mt-5 font-hand text-[1.75rem] sm:text-[2.125rem] leading-[1.15] text-[#3E2723] -rotate-3 origin-left">
                {HERO_QUESTION.map((line) => (
                  <React.Fragment key={line}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>

              <HandUnderline className="mt-2 ml-1 h-3.5 w-[200px] -rotate-[5deg]" />
            </div>
          </div>

          {/* The handwritten note, upper-right of the photograph */}
          <div className="pointer-events-none absolute right-5 top-20 flex flex-col items-center gap-1 sm:right-5 sm:top-24 lg:right-6 lg:top-28">
            <p className="font-hand text-[1.375rem] sm:text-[1.625rem] leading-[1.1] text-[#3E2723] -rotate-[8deg] origin-bottom-right">
              {HERO_ANNOTATION.map((line) => (
                <React.Fragment key={line}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
            <HeartMark />
          </div>

          <Tape className="-left-3 top-14 lg:left-3" />
          <Tape className="-right-3 bottom-24 lg:right-3" rotate={-5} />
        </div>
      </section>

      {/* ——— Lifestyle polaroids — their own full-width row ———————— */}
      <section className="rule-t-light pt-14 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {POLAROIDS.map((shot, i) => (
            <figure
              key={shot.label}
              className="relative bg-[#FDFCF8] p-2.5 pb-9 shadow-[0_10px_26px_-14px_rgba(62,39,35,0.3)]"
              style={{
                transform: `rotate(${shot.rotation})`,
                marginTop: i % 2 === 0 ? '0' : '0.75rem',
              }}
            >
              <Slot
                src={shot.src}
                alt={shot.alt}
                label={shot.label}
                className="aspect-[4/5]"
              />
              <figcaption className="absolute inset-x-0 bottom-2 text-center font-hand text-[1.0625rem] leading-none text-[#3E2723]">
                {shot.label}
              </figcaption>
              <Tape
                className="-top-2.5 left-1/2 -translate-x-1/2 w-14 h-5"
                rotate={i % 2 === 0 ? -4 : 5}
              />
            </figure>
          ))}
        </div>
      </section>

      {/* ——— Mid ———————————————————————————————————————————— */}
      <section className="rule-t-light pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="space-y-10 lg:space-y-14">
          {/* WHAT I NOTICED — cream paper brush. Copy left, the four complaints right. */}
          <div className="relative p-8 lg:p-12 bg-[#FDFCF8] rounded-[44px_28px_40px_24px] lg:-rotate-[0.4deg]">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-9 lg:gap-16 items-center">
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
              </div>

              <div className="grid grid-cols-4 gap-4 sm:gap-6 lg:gap-9">
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
          </div>

          {/* THE OPPORTUNITY — pale sage brush, mapped to blush. Heading left, the bridge right. */}
          <div className="relative p-8 lg:p-12 bg-[#FADBD9]/50 rounded-[24px_44px_28px_40px] lg:rotate-[0.4deg]">
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
          <div className="relative p-8 lg:p-12 bg-[#FDFCF8] rounded-[3px]">
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
                  src="/portfolio-assets/03_tech_sketch_coord.png"
                  alt="Fashion technical illustration — front view of the structured long-sleeve cropped top with relaxed wide-leg jogger trousers"
                  label="Technical sketch — crop top & jogger"
                  className="w-[190px] lg:w-[260px] h-[265px] lg:h-[360px]"
                />

                <div className="space-y-8 pt-3">
                  <div className="relative">
                    <p className="font-hand text-[1.5rem] leading-[1.15] text-[#3E2723] rotate-[-2deg] origin-left">
                      Structured top
                      <br />
                      for shape + style
                    </p>
                    <HandArrow className="absolute -left-14 top-0 w-12 h-7 rotate-[150deg]" />
                  </div>

                  <div className="relative">
                    <p className="font-hand text-[1.5rem] leading-[1.15] text-[#3E2723] rotate-[-2deg] origin-left">
                      Relaxed bottoms
                      <br />
                      for movement +
                      <br />
                      comfort
                    </p>
                    <HandArrow className="absolute -left-14 top-1 w-12 h-7 rotate-[150deg]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Bottom ————————————————————————————————————————— */}
      <section className="rule-t-light pt-16 pb-8 lg:pt-24 lg:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[38fr_24fr_35fr] gap-10 lg:gap-8 items-start">
          {/* Concept board — overlapping paper, sketch, swatches, detail, flower */}
          <div className="relative">
            <div className="absolute -left-2 -top-2 h-24 w-32 bg-[#FADBD9]/40 rotate-[-4deg]" aria-hidden="true" />
            <div className="absolute right-4 -top-1 h-16 w-24 bg-[#FDFCF8] rotate-[3deg] shadow-[0_8px_20px_-14px_rgba(62,39,35,0.3)]" aria-hidden="true" />

            <Slot
              src="/portfolio-assets/03_design_flat_front_back.png"
              alt="Hand-drawn fashion technical flats — front and back views of the athleisure co-ord"
              label="Fashion flats — front & back"
              className="relative w-[42%] h-[210px] lg:h-[260px]"
            />

            <Slot
              src="/portfolio-assets/03_fabric_swatches.jpg"
              alt="Fabric swatches in olive green, sage, cream and grey-green"
              label="Fabric swatches"
              className="absolute left-[36%] bottom-0 w-[34%] h-[86px] lg:h-[104px]"
            />

            <Slot
              src="/portfolio-assets/03_product_detail.jpg"
              alt="Close crop of the olive-green cropped top meeting the relaxed jogger waistband"
              label="Product detail — crop top & waistband"
              className="absolute right-0 top-2 w-[40%] h-[150px] lg:h-[186px] shadow-[0_10px_24px_-14px_rgba(62,39,35,0.3)]"
            />

            <Slot
              src="/portfolio-assets/03_white_flower.jpg"
              alt="A single delicate white flower in the foreground"
              label="White flower"
              className="absolute left-[42%] bottom-6 w-[20%] h-[70px] lg:h-[86px]"
            />

            <p className="relative mt-6 font-hand text-[1.5rem] leading-[1.1] text-[#3E2723] -rotate-[8deg] origin-left inline-block">
              {BOARD_ANNOTATION.map((line) => (
                <React.Fragment key={line}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>

            <Tape className="left-[6%] top-1" rotate={-4} />
            <Tape className="left-[30%] bottom-16 w-16" rotate={5} />
            <Tape className="right-[6%] top-0" rotate={-7} />
          </div>

          {/* The first product */}
          <div className="relative">
            <Slot
              src="/portfolio-assets/03_first_product_mvp.jpg"
              alt="Torso and waist crop of the structured olive-green crop top with the relaxed joggers"
              label="The first product — physical MVP"
              className="h-[210px] lg:h-[260px] shadow-[0_10px_24px_-14px_rgba(62,39,35,0.3)]"
            />

            <p className="eyebrow mt-5 block text-[#3E2723]">{FIRST_PRODUCT_LABEL}</p>
            <h3 className="mt-3 font-display text-[1.125rem] sm:text-[1.25rem] leading-[1.2] text-[#3E2723]">
              {FIRST_PRODUCT_TITLE.map((line) => (
                <React.Fragment key={line}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </h3>

            <p className="mt-4 font-hand text-[1.375rem] leading-none text-[#3E2723] -rotate-3 origin-left inline-block">
              {FIRST_PRODUCT_CAPTION}
            </p>
            <ShortUnderline />
          </div>

          {/* WHAT I WORKED WITH — soft blush panel, 40px radius */}
          <div className="bg-[#FADBD9] rounded-[40px] p-7 lg:p-9">
            <h2 className="eyebrow text-center text-[#3E2723]">{WORKED_WITH_HEADING}</h2>

            <div className="mt-7 grid grid-cols-5 gap-2">
              {METHOD.map((item) => (
                <IconDisc
                  key={item.label.join('-')}
                  label={item.label}
                  discClassName="w-12 h-12 lg:w-[3.125rem] lg:h-[3.125rem] bg-[#FDFCF8] border border-[#A38D89]"
                  iconClassName="text-[0.5625rem] lg:text-[0.625rem] tracking-[0.1em] leading-[1.2]"
                >
                  <item.icon className="w-[18px] h-[18px] lg:w-5 lg:h-5" strokeWidth={1.5} />
                </IconDisc>
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
