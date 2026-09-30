import React from 'react';
import {
  Box,
  Check,
  ClipboardList,
  Lightbulb,
  Layers,
  Pencil,
  Search,
  Settings,
  ShoppingBag,
  TriangleAlert,
  Users,
} from 'lucide-react';
import { SlidePhoto } from '../SlidePhoto';

/**
 * PROJECT 3 — PAGE 02 · BUILD IT. TEST IT. LET USERS SHAPE IT.
 *
 * Rebuilt from the second "Everyday Athleisure" specification: a dense
 * editorial collage carrying the whole BUILD → TEST → LISTEN → ITERATE
 * argument. Four bands, top to bottom —
 *
 *   A  the title, the FROM IDEA TO MVP blush panel, and the three process
>      plates that photograph three of those six steps
 *   B  THEN I TESTED ONE THING / SURVEY INSIGHTS
 *   B2 SKILLS APPLIED, a full-width band
 *   C  SO I ITERATED
 *   D  WHAT I TAKE FORWARD, the page's closing statement
 *
 * COLOUR. The specification is built on an olive-green identity; the site's
 * light palette is the cream / ink / taupe / terracotta / blush set, so every
 * green is mapped onto it rather than introduced as a new hue:
 *
 *   dark green     #193E35  →  ink        #3E2723
 *   charcoal       #27312E  →  ink        #3E2723
 *   sage           #718276  →  taupe      #705955
 *   light sage     #DCE1D4  →  blush      #FADBD9
 *   muted green    #AAB6A6  →  blush      #FADBD9
 *   soft blush     #EEDAD5  →  blush      #FADBD9
 *   dusty pink     #E8CECA  →  blush      #FADBD9/60
 *   pink panel     #EBD6D1  →  blush      #FADBD9
 *   ivory / paper  #F4F1E7  →  cream      #F9F8F2  /  plate #FDFCF8
 *
 *   Wine #7A2A2E is the single emphasis, on IDEA → EVIDENCE → ITERATION.
 *   Terracotta #D69589 is the only accent, on connectors and check marks.
 *
 * PLATES. Every photograph, sketch and textile sample is a wordless hairline
 * plate until its file lands in /public/portfolio-assets. Nothing is invented
 * to fill a missing image.
 *
 * DATA. The two charts are drawn from the specification's own figures — a pie
 * at 82 / 18 and bars at 88 / 72 / 68 / 54. They are SVG, not images, so the
 * numbers are always legible and always true.
 */

const BRAND = 'EVERYDAY ATHLEISURE';
const PAGE_COUNTER = '02 / 02';

const TITLE_LINES = ['BUILD IT. TEST IT. LET USERS SHAPE IT.'] as const;

const PROCESS = [
  { label: 'Sketch', icon: 'pencil' },
  { label: 'Fabric', icon: 'fabric' },
  { label: 'Sourcing', icon: 'bag' },
  { label: 'Tailoring', icon: 'machine' },
  { label: 'Fitting', icon: 'model' },
  { label: 'Prototype', icon: 'cube' },
] as const;

const MVP_DESCRIPTION =
  'I developed a physical co-ord to test whether the concept could work beyond the idea stage.';

const RESEARCH_TOPICS = ['Comfort', 'Fit', 'Style', 'Versatility', 'Purchase Intent'];

const WORKED_POINTS = [
  'Multi-use appeal',
  'Comfort mattered',
  'Minimal + modest styling resonated',
  'Strong purchase interest',
];

const NEEDS_WORK_POINTS = ['Fabric → Too thick for summer', 'Styles → More variety wanted'];

const ITERATION_ROWS = [
  { problem: 'Thick fabric', decision: ['Lighter + breathable'] },
  { problem: 'Limited styles', decision: ['More silhouettes +', 'sleeve options'] },
  { problem: 'Price sensitivity', decision: ['Stronger value proposition'] },
];

const ITERATION_FOOTER =
  'I chose to persevere with the core idea and refine the product around user feedback.';

/** The handwritten note under the cut-out sticker, one line per array entry. */
const STICKER_NOTE = ['Bottom fabric', 'too thick'];

const SKILLS = [
  {
    title: 'Research & Analysis',
    icon: 'search',
    items: ['Consumer research', 'Survey design', 'Qualitative research'],
  },
  {
    title: 'Business Thinking',
    icon: 'bulb',
    items: ['Market-gap identification', 'Trend analysis', 'Concept development'],
  },
  {
    title: 'Product Thinking',
    icon: 'gear',
    items: ['Fabric sourcing', 'MVP development', 'User testing', 'Iteration'],
  },
  {
    title: 'Working Style',
    icon: 'people',
    items: ['Problem solving', 'Collaboration', 'Decision making', 'Adaptability'],
  },
];

/**
 * The three process stages, each with its own image slot. The aspect ratio on
 * each is the source file's own, so nothing is cropped: 406x655, 1312x1199,
 * 847x1280. They sit directly under FROM IDEA TO MVP — the step list above,
 * the photographs of three of those steps below.
 *
 * The row is items-end, so the two portrait plates share a caption baseline.
 * Material is the odd one out — 1312x1199 is landscape, so it is far shorter
 * than its neighbours and would otherwise hang off the bottom edge — and
 * carries `align` to opt itself back to the vertical centre of the row.
 *
 * Typed rather than left to `as const`, because an inferred literal union
 * would only carry `align` on the one member that has it, and reading it off
 * the other two fails to compile.
 */
type ProcessSlot = {
  label: string;
  src: string;
  alt: string;
  frame: string;
  tapeRotate: number;
  align?: string;
};

const PROCESS_SLOTS: ProcessSlot[] = [
  {
    label: 'Sketches',
    src: '/portfolio-assets/03_process_sketches.jpg',
    alt: 'Fashion technical sketches of the co-ord',
    frame: 'aspect-[406/655]',
    tapeRotate: -5,
  },
  {
    label: 'Material',
    src: '/portfolio-assets/03_process_material.jpg',
    alt: 'The chosen fabric',
    frame: 'aspect-[1312/1199]',
    tapeRotate: 4,
    align: 'self-center',
  },
  {
    label: 'Physical MVP',
    src: '/portfolio-assets/03_process_mvp.jpg',
    alt: 'The first physical prototype of the co-ord',
    frame: 'aspect-[847/1280]',
    tapeRotate: -3,
  },
];

/* ——— Icons with no lucide equivalent ————————————————————————————— */

const SewingMachineIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-[18px] h-[18px]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 8h13.5a2.5 2.5 0 0 1 0 5H16" />
    <path d="M7 13v3.5M16.5 13a2.5 2.5 0 0 1 0 5H9" />
    <path d="M16.5 18H9a3 3 0 0 1 0-6" opacity="0.55" />
    <path d="M19 5.5v9M17.6 6.6 19 5.2l1.4 1.4" />
    <path d="M6 6.5 7.4 5l1.5 1.5" />
  </svg>
);

const ModelIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-[18px] h-[18px]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="4.4" r="2" />
    <path d="M12 7c-2.4 0-3.8 1.2-4.3 2.8L6.6 15c-.2.8.3 1.5 1 1.7" />
    <path d="M12 7c2.4 0 3.8 1.2 4.3 2.8l1.1 5.2c.2.8-.3 1.5-1 1.7" />
    <path d="M9.7 9.1 12 11.3l2.3-2.2M12 11.3V21" />
  </svg>
);

/* ——— Hand-drawn furniture ————————————————————————————————————— */

const Tape: React.FC<{ className?: string; rotate?: number }> = ({ className = '', rotate = 0 }) => (
  <span
    aria-hidden="true"
    className={`pointer-events-none absolute block h-5 w-16 bg-[#E8DFC8]/70 ${className}`}
    style={{ transform: `rotate(${rotate}deg)`, boxShadow: 'inset 0 0 0 1px rgba(62,39,35,0.06)' }}
  />
);

/** A short rough hand-drawn rule for the collage annotations. */
const RoughRule: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 190 12"
    className={`h-2.5 w-[150px] ${className}`}
    fill="none"
    aria-hidden="true"
    preserveAspectRatio="none"
  >
    <path
      d="M4 8C52 3 118 2 186 6"
      stroke="#3E2723"
      strokeWidth="2.2"
      strokeLinecap="round"
      opacity="0.8"
    />
  </svg>
);

/**
 * Curved hand-drawn arrow, pointing left by default. Identical to the one on
 * page one — the two pages each carry their own copy of the small furniture
 * (Tape, Slot, IconDisc) rather than sharing a module, so this follows suit.
 */
const HandArrow: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 70 40" className={className} fill="none" aria-hidden="true">
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

/* ——— Small parts ——————————————————————————————————————————————— */

/**
 * A wordless photo plate at an explicit size, for collage placement.
 *
 * `fit="contain"` makes cropping structurally impossible: the whole file is
 * always visible, and if the frame's ratio ever drifts from the source the
 * image letterboxes into the spare space instead of losing its edges. The two
 * fit keywords are written out literally rather than interpolated, because
 * Tailwind's scanner only sees class names that appear in the source text.
 */
const Slot: React.FC<{
  src: string;
  alt: string;
  label: string;
  className?: string;
  fit?: 'cover' | 'contain';
}> = ({ src, alt, label, className = '', fit = 'cover' }) => (
  <div className={`overflow-hidden ${className}`}>
    <SlidePhoto
      src={src}
      alt={alt}
      label={label}
      className={`w-full h-full ${fit === 'contain' ? 'object-contain' : 'object-cover'}`}
    />
  </div>
);

/** Icon in a tinted disc with a caption beneath. */
const IconDisc: React.FC<{
  children: React.ReactNode;
  label: string;
  className?: string;
  discClassName?: string;
}> = ({ children, label, className = '', discClassName = '' }) => (
  <div className={`flex flex-col items-center gap-2 text-center ${className}`}>
    <span
      className={`flex items-center justify-center rounded-full text-[#3E2723] flex-shrink-0 ${discClassName}`}
    >
      {children}
    </span>
    <span className="eyebrow leading-[1.35] text-[0.625rem] tracking-[0.14em] text-[#3E2723]/80">
      {label}
    </span>
  </div>
);

/** Handwritten note, optionally with a rough rule under it. */
const Note: React.FC<{
  lines: readonly string[];
  className?: string;
  rotate?: number;
  rule?: boolean;
}> = ({ lines, className = '', rotate = -4, rule = false }) => (
  <div className={`inline-block ${className}`} style={{ transform: `rotate(${rotate}deg)` }}>
    <p className="font-hand text-[1.375rem] sm:text-[1.5rem] leading-[1.2] text-[#3E2723]">
      {lines.map((line) => (
        <React.Fragment key={line}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </p>
    {rule && <RoughRule className="mt-1" />}
  </div>
);

const PROCESS_ICON: Record<string, React.ReactNode> = {
  pencil: <Pencil className="w-[18px] h-[18px]" strokeWidth={1.5} />,
  fabric: <Layers className="w-[18px] h-[18px]" strokeWidth={1.5} />,
  bag: <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.5} />,
  machine: <SewingMachineIcon />,
  model: <ModelIcon />,
  cube: <Box className="w-[18px] h-[18px]" strokeWidth={1.5} />,
};

const SKILL_ICON: Record<string, React.ReactNode> = {
  search: <Search className="w-[18px] h-[18px]" strokeWidth={1.5} />,
  bulb: <Lightbulb className="w-[18px] h-[18px]" strokeWidth={1.5} />,
  gear: <Settings className="w-[18px] h-[18px]" strokeWidth={1.5} />,
  people: <Users className="w-[18px] h-[18px]" strokeWidth={1.5} />,
};

/* ——— The page ——————————————————————————————————————————————————— */

export const EverydayAthleisurePageTwo: React.FC = () => {
  return (
    <div className="paper-grain-light">
      {/* ——— Running head ————————————————————————————————————— */}
      <div className="rule-b-light flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-4">
        <span className="eyebrow text-[#3E2723]">{BRAND}</span>
        <span className="eyebrow text-[#705955]">{PAGE_COUNTER}</span>
      </div>

      {/* ——— Band A — the title, and the FROM IDEA TO MVP panel ————— */}
      <section className="relative rule-t-light pt-12 pb-14 lg:pt-16 lg:pb-20">
        <div className="relative">
          {/* Title. The "PROJECT" eyebrow and its hairline used to sit above
              this; only the rule and the word are gone, the heading stays. */}
          <div className="text-center reveal">
            {/* The site selection highlight, inverted and made permanent: an
                espresso block behind pink type. inline-block so the block
                spans the words rather than the full column, and
                box-decoration-break so a wrapped line gets its own block
                instead of one tall rect spanning both. */}
            <h1 className="inline-block bg-[#3E2723] px-3 py-1 font-display text-[clamp(2rem,3.9vw,3rem)] leading-[1.05] tracking-[-0.01em] text-[#FADBD9] [box-decoration-break:clone]">
              {TITLE_LINES[0]}
            </h1>
          </div>

          {/* FROM IDEA TO MVP — blush wash panel, built on the THE OPPORTUNITY
               treatment: organic radius, slight tilt, label left and the six
               steps as a pill row on the right, description closing underneath. */}
          <div className="mt-10 lg:mt-14 relative p-8 lg:p-12 bg-[#FADBD9]/50 rounded-[44px_24px_40px_28px] lg:rotate-[0.4deg] reveal reveal-d1">
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-7 lg:gap-14 items-center">
              <p className="eyebrow text-[#3E2723]">FROM IDEA TO MVP</p>

              <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-3">
                {PROCESS.map((step, i) => (
                  <React.Fragment key={step.label}>
                    <span className="inline-flex items-center gap-2.5 rounded-full bg-[#FDFCF8] pl-3 pr-4 py-2 eyebrow text-[#3E2723] whitespace-nowrap">
                      {PROCESS_ICON[step.icon]}
                      {step.label}
                    </span>
                    {i < PROCESS.length - 1 && (
                      <span className="eyebrow text-[#D69589] leading-none" aria-hidden="true">
                        &#8594;
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <p className="mt-7 text-center font-body text-sm tracking-[0.06em] text-[#3E2723] max-w-[52ch] mx-auto">
              {MVP_DESCRIPTION}
            </p>
          </div>

          {/* PROCESS — three image slots, no heading. Separate files on purpose,
               so these never resolve to the photos used above. Each frame is on
               its source ratio and the row is items-end, so the captions sit on
               one baseline across three different heights. The › separators
               match the GYM › CAFÉ › TRAVEL row on page one; self-center
               overrides items-end so they centre on the plates rather than
               riding the caption baseline. */}
          <div className="relative mt-9 lg:mt-12 p-8 lg:p-12 bg-[#FDFCF8] rounded-[3px] reveal reveal-d2">
            <div className="grid grid-cols-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] items-end gap-4 sm:gap-x-6 lg:gap-x-8">
              {PROCESS_SLOTS.map((slot, i) => (
                <React.Fragment key={slot.label}>
                  <figure
                    className={`relative bg-[#FDFCF8] p-2.5 shadow-[0_10px_26px_-14px_rgba(62,39,35,0.3)] hover-lift ${slot.align ?? ''}`}
                  >
                    <Slot
                      src={slot.src}
                      alt={slot.alt}
                      label={`${slot.label} — process`}
                      className={slot.frame}
                    />
                    <figcaption className="absolute inset-x-0 bottom-2 text-center font-hand text-[1.0625rem] leading-none text-[#3E2723]">
                      {slot.label}
                    </figcaption>
                    <Tape
                      className="-top-2.5 left-1/2 -translate-x-1/2 w-14 h-5"
                      rotate={slot.tapeRotate}
                    />
                  </figure>

                  {i < PROCESS_SLOTS.length - 1 && (
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
        </div>
      </section>

      {/* ——— Band B — test it, read the data, name the skills ————— */}
      <section className="rule-t-light pt-14 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 lg:gap-x-8 gap-y-16 items-start">
          {/* THEN I TESTED ONE THING */}
          <div className="lg:col-span-6 reveal">
            <p className="eyebrow text-[#3E2723]">THEN I TESTED ONE THING</p>

            <h2 className="mt-4 font-display text-[1.875rem] lg:text-[2.125rem] leading-[1] tracking-tight text-[#3E2723]">
              WOULD PEOPLE ACTUALLY
              <br />
              WEAR IT?
            </h2>

            {/* Who, and how */}
            <div className="mt-8 grid grid-cols-2 gap-5">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#FADBD9] text-[#3E2723] shrink-0">
                  <Users className="w-[18px] h-[18px]" strokeWidth={1.5} />
                </span>
                <span className="eyebrow text-[0.625rem] leading-[1.4] tracking-[0.14em] text-[#3E2723] pt-1.5">
                  Women 18–30
                </span>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#FADBD9] text-[#3E2723] shrink-0">
                  <ClipboardList className="w-[18px] h-[18px]" strokeWidth={1.5} />
                </span>
                <span className="eyebrow text-[0.625rem] leading-[1.4] tracking-[0.14em] text-[#3E2723] pt-1.5">
                  Online Survey +
                  <br />
                  Interview + Focus Group
                </span>
              </div>
            </div>

            {/* I looked at */}
            <div className="mt-8">
              <p className="eyebrow text-[0.625rem] tracking-[0.14em] text-[#3E2723]/70">
                I looked at:
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {RESEARCH_TOPICS.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full bg-[#FADBD9]/60 px-3.5 py-1.5 eyebrow text-[0.625rem] tracking-[0.12em] text-[#3E2723]"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* What they said */}
            <div className="relative mt-10 bg-[#FADBD9] rounded-[28px_18px_30px_16px] p-7 lg:p-8">
              <p className="eyebrow text-[#3E2723]">WHAT I LEARNED FROM USERS</p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-7">
                <div>
                  <h3 className="eyebrow text-[0.6875rem] leading-[1.4] tracking-[0.14em] text-[#3E2723]">
                    THE CONCEPT WORKED
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {WORKED_POINTS.map((point) => (
                      <li key={point} className="flex gap-2.5">
                        <Check className="w-4 h-4 text-[#D69589] shrink-0 mt-0.5" strokeWidth={2} />
                        <span className="font-body text-xs leading-[1.45] text-[#3E2723]/85">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="eyebrow text-[0.6875rem] leading-[1.4] tracking-[0.14em] text-[#3E2723]">
                    BUT THE PRODUCT
                    <br />
                    NEEDED WORK
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {NEEDS_WORK_POINTS.map((point) => (
                      <li key={point} className="flex gap-2.5">
                        <TriangleAlert
                          className="w-4 h-4 text-[#705955] shrink-0 mt-0.5"
                          strokeWidth={1.8}
                        />
                        <span className="font-body text-xs leading-[1.45] text-[#3E2723]/85">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* SURVEY INSIGHTS — cols 7–12. Two plates side by side, each on its
              own source ratio: 494x863 and 1024x1536, both portrait. The grid
              is items-center so the shorter plate sits against the middle of
              the taller one rather than a shared edge. Both are width-driven
              and use fit="contain", so nothing is ever cropped. */}
          <div className="lg:col-start-7 lg:col-span-6 w-full reveal reveal-d1">
            <div className="grid grid-cols-[1.1fr_1.15fr] items-center gap-4 sm:gap-5">
              {/* SURVEY INSIGHTS, overlaid on the plate rather than sat above
                  it. No fill behind it — the type sits straight on the photo.
                  The pt clears the Tape, which hangs over the top 10px of the
                  figure. */}
              <figure className="relative translate-x-2 bg-[#FDFCF8] p-2.5 shadow-[0_14px_32px_-18px_rgba(62,39,35,0.34)]">
                <Slot
                  src="/portfolio-assets/03_survey_insights.jpg"
                  alt="The refined olive athleisure co-ord after the feedback round"
                  label="Survey insights — the refined co-ord"
                  className="aspect-[494/863]"
                  fit="contain"
                />
                <Tape className="-top-2.5 left-1/2 -translate-x-1/2 w-16" rotate={-5} />

                {/* One line, in the same hand as the sticker note below, so the
                    two read as a matched pair. nowrap keeps it on one line; the
                    size is held down because the hand face runs narrow and the
                    plate is only ~245px wide inside its padding. */}
                <h2 className="absolute inset-x-0 top-0 whitespace-nowrap px-4 pt-16 text-center font-hand text-[1.375rem] leading-[1.05] tracking-[-0.01em] text-[#3E2723] lg:text-[1.75rem]">
                  SURVEY INSIGHTS
                </h2>
              </figure>

              {/* A deliberate sticker, not a plate. The source is a cut-out
                  with a real alpha channel, so it needs no card behind it —
                  the transparent areas show the page cream, and the white
                  die-cut border is built from eight offset drop-shadows in
                  the transparent colour. Those come first so they stack into
                  the border; the soft grey shadow comes last so it casts from
                  the finished white-bordered shape rather than the bare image. */}
              <div className="flex flex-col items-end">
                <figure className="relative rotate-[1.2deg] [filter:drop-shadow(-2px_0_0_#fff)_drop-shadow(2px_0_0_#fff)_drop-shadow(0_-2px_0_#fff)_drop-shadow(0_2px_0_#fff)_drop-shadow(-2px_-2px_0_#fff)_drop-shadow(2px_2px_0_#fff)_drop-shadow(-2px_2px_0_#fff)_drop-shadow(2px_-2px_0_#fff)_drop-shadow(0_8px_12px_rgba(62,39,35,0.28))]">
                  <Slot
                    src="/portfolio-assets/03_after_survey_insights.png"
                    alt="The co-ord after the survey feedback round"
                    label="After the feedback round"
                    className="aspect-[1024/1536]"
                    fit="contain"
                  />
                </figure>

                {/* The note that earned the cut-out, pinned to the bottom
                    right of the sticker. rotate-90 turns the default
                    left-pointing arrow to point up, so its head sits against
                    the sticker and the tail runs down to the words. */}
                <div className="-mt-8 flex flex-col items-end gap-1.5">
                  <HandArrow className="-translate-x-16 w-9 h-5 rotate-90 shrink-0" />

                  {/* The site's own ::selection pair — #FADBD9 behind #3E2723,
                      straight out of index.css — held permanently instead of
                      only while the cursor is over it. One inline-block per
                      line, so each line carries its own mark sized to its own
                      text rather than one slab spanning both; the p's leading
                      is what opens the gap between the two marks. */}
                  <p className="font-hand text-[1.25rem] leading-[1.5] text-[#3E2723] -rotate-[2deg] origin-bottom-right text-right">
                    {STICKER_NOTE.map((line) => (
                      <React.Fragment key={line}>
                        <span className="inline-block bg-[#FADBD9] px-2 text-[#3E2723]">
                          {line}
                        </span>
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Band B2 — skills applied — full width ——————————————— */}
      <section className="rule-t-light pt-10 pb-8 lg:pt-14 lg:pb-10">
        <div className="relative bg-[#FADBD9]/50 rounded-[24px_36px_20px_34px] p-8 lg:p-14 reveal">
          <p className="eyebrow leading-[1.5] text-[#3E2723]">
            WHAT I BUILT BEYOND
            <br />
            THE PRODUCT
          </p>

          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1] text-[#3E2723]">
            SKILLS APPLIED
          </h2>

          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {SKILLS.map((skill) => (
              <div key={skill.title} className="rounded-[18px] bg-[#FDFCF8] p-6 lg:p-7 hover-lift">
                <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[#705955] text-[#F9F8F2]">
                  {SKILL_ICON[skill.icon]}
                </span>
                <h3 className="mt-5 font-editorial text-[1.1875rem] leading-tight text-[#3E2723]">
                  {skill.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="font-body text-[0.75rem] leading-[1.55] text-[#3E2723]/75"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Band C — iterate ————————————————————————————————————— */}
      <section className="rule-t-light pt-10 pb-8 lg:pt-14 lg:pb-10">
        <div>
          {/* SO I ITERATED */}
          <div>
            <p className="eyebrow text-[#3E2723]">SO I ITERATED</p>
            <p className="eyebrow mt-2 text-[0.625rem] tracking-[0.12em] text-[#3E2723]/70">
              USER FEEDBACK &#8594; PRODUCT DECISION
            </p>

            {/* The three feedback → decision pairs now read left to right as
                three parallel columns instead of stacking downward, so the
                iteration lands as one horizontal sweep. Nothing added — the
                same ITERATION_ROWS, same labels, same footer below. */}
            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
              {ITERATION_ROWS.map((row) => (
                <div key={row.problem} className="flex flex-col gap-2.5">
                  <span className="rounded-2xl bg-[#FADBD9] px-4 py-2 eyebrow text-[0.625rem] tracking-[0.12em] text-[#3E2723]">
                    {row.problem}
                  </span>

                  {/* The same → glyph used across the page, turned a quarter
                      turn. The pair stacks now rather than running left to
                      right, so the connector has to point down to still carry
                      the reading from feedback to decision. */}
                  <span
                    className="self-start eyebrow text-[#D69589] leading-none rotate-90"
                    aria-hidden="true"
                  >
                    &#8594;
                  </span>

                  <span className="rounded-2xl bg-[#FDFCF8] border border-[#705955]/28 px-4 py-2 eyebrow text-[0.625rem] tracking-[0.12em] text-[#3E2723]">
                    {row.decision.map((line) => (
                      <React.Fragment key={line}>
                        {line}
                        {line !== row.decision[row.decision.length - 1] && <br />}
                      </React.Fragment>
                    ))}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-5 whitespace-nowrap font-body text-xs leading-[1.5] text-[#3E2723]/70">
              {ITERATION_FOOTER}
            </p>
          </div>
        </div>
      </section>

      {/* ——— Band D — what I take forward ————————————————————— */}
      <section className="rule-t-light pt-10 pb-2 lg:pt-14 lg:pb-4">
        <div className="relative bg-[#FADBD9] rounded-[20px_36px_18px_32px] p-8 lg:p-14 reveal">
          <p className="eyebrow text-[#3E2723]">WHAT I TAKE FORWARD</p>

          {/* No column grid here. It was a 12-col wrapper holding one 7-col
              child, so five tracks — ~460px of empty panel at desktop — sat
              to the right of the content doing nothing. The heading now spans
              the panel's own measure, which is also wide enough to hold it on a
              single line; the paragraph keeps its 46ch cap, so the reading
              measure is unchanged. */}
          <div className="mt-6">
            <h2 className="font-display text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.05] text-[#7A2A2E]">
              IDEA &#8594; EVIDENCE &#8594; ITERATION
            </h2>
            <p className="mt-6 font-body text-sm leading-[1.5] text-[#3E2723]/80 max-w-[46ch]">
              Don’t just build what sounds good.
              <br />
              Build &#8594; test &#8594; listen &#8594; improve.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
