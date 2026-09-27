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
 *   A  the title, the sketch-to-sample collage, and FROM IDEA TO MVP
 *   B  THEN I TESTED ONE THING / SURVEY INSIGHTS / SKILLS APPLIED
 *   C  SO I ITERATED beside the worn-in-the-world photo collage
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

const TITLE_LINES = ['BUILD IT. TEST IT.', 'LET USERS SHAPE IT.'] as const;

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

const SURVEY_QUESTION = 'Would you wear this for everyday use?';
const SURVEY_METRIC = '82%';
const SURVEY_YES = 'Yes';
const SURVEY_OTHER = ['18%', 'Maybe / No'];

const PREFERENCES = [
  { label: 'Comfort', value: 88 },
  { label: 'Style', value: 72 },
  { label: 'Versatility', value: 68 },
  { label: 'Modesty', value: 54 },
];

const QUOTES = [
  ['Love the idea of', 'one outfit for', 'everything.'],
  ['It’s comfortable', 'and stylish.'],
  ['I’d definitely', 'buy this!'],
] as const;

const ITERATION_ROWS = [
  { problem: 'Thick fabric', decision: ['Lighter + breathable'] },
  { problem: 'Limited styles', decision: ['More silhouettes +', 'sleeve options'] },
  { problem: 'Price sensitivity', decision: ['Stronger value proposition'] },
];

const ITERATION_FOOTER =
  'I chose to persevere with the core idea and refine the product around user feedback.';

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

const TAKE_FORWARD_NOTE = [
  'I learned how to take a',
  'business idea from an',
  'assumption to a tangible',
  'product, then refine it',
  'through real user feedback.',
] as const;

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

const HeartMark: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 26 24" className={`w-4 h-4 ${className}`} fill="none" aria-hidden="true">
    <path
      d="M13 20.5C13 20.5 3.2 14.6 3.2 8.4 3.2 5.4 5.5 3.3 8.2 3.3c1.8 0 3.5 1 4.8 2.6 1.3-1.6 3-2.6 4.8-2.6 2.7 0 5 2.1 5 5.1 0 6.2-9.8 12.1-9.8 12.1Z"
      stroke="#3E2723"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
  </svg>
);

/** Curved hand-drawn arrow. `flip` points it the other way. */
const HandArrow: React.FC<{ className?: string; flip?: boolean }> = ({ className = '', flip = false }) => (
  <svg
    viewBox="0 0 70 40"
    className={className}
    fill="none"
    aria-hidden="true"
    style={flip ? { transform: 'scaleX(-1)' } : undefined}
  >
    <path d="M64 6C44 4 20 12 11 24" stroke="#3E2723" strokeWidth="1.7" strokeLinecap="round" />
    <path
      d="M6 15.5c-1.4 4-1.2 8.2 1.2 11.4M4 26.5c4.3.6 8.3-.7 10.6-4"
      stroke="#3E2723"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** Two loose sweeping brush strokes beneath the title. */
const BrushUnderline: React.FC = () => (
  <svg
    viewBox="0 0 420 30"
    className="w-[280px] lg:w-[400px] h-6 lg:h-7"
    fill="none"
    aria-hidden="true"
    preserveAspectRatio="none"
    style={{ transform: 'rotate(-5deg)' }}
  >
    <path
      d="M8 14C96 6 236 4 412 9"
      stroke="#705955"
      strokeWidth="7"
      strokeLinecap="round"
      opacity="0.62"
    />
    <path
      d="M22 23C120 17 258 15 396 19"
      stroke="#705955"
      strokeWidth="4"
      strokeLinecap="round"
      opacity="0.42"
    />
  </svg>
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

/** Olive sprig bleeding in from the left edge. */
const BotanicalLine: React.FC = () => (
  <svg
    viewBox="0 0 200 520"
    className="pointer-events-none absolute -left-16 lg:-left-20 top-0 h-full w-auto"
    fill="none"
    aria-hidden="true"
    style={{ opacity: 0.55 }}
  >
    <path
      d="M96 8C70 74 112 128 84 196c-22 54 8 96-10 152-14 44-46 74-52 158"
      stroke="#705955"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M92 66c22 6 40-4 52-24M86 132c-24 2-40-12-48-34M84 200c24 4 44-8 56-30M80 274c-26 0-42-16-48-40M76 344c26 6 46-8 58-32M70 412c-24 2-40-12-48-34"
      stroke="#705955"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M144 42c-16-8-24-22-22-38 16 2 26 16 22 38ZM38 98c-4-18 4-34 20-42 8 16 0 34-20 42ZM140 170c-18-6-28-20-28-38 18 0 30 14 28 38ZM32 234c-6-18 2-34 18-44 10 16 2 36-18 44ZM134 312c-18-8-26-24-24-42 18 2 28 18 24 42ZM34 378c-4-18 4-34 20-44 8 18 0 36-20 44Z"
      stroke="#705955"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
  </svg>
);

/** Small olive sprig at the right edge. */
const BotanicalSprig: React.FC = () => (
  <svg
    viewBox="0 0 120 200"
    className="pointer-events-none absolute -right-10 top-0 w-auto h-full"
    fill="none"
    aria-hidden="true"
    style={{ opacity: 0.5 }}
  >
    <path d="M60 6C44 40 76 66 58 104c-14 30 4 52 0 90" stroke="#705955" strokeWidth="1.5" strokeLinecap="round" />
    <path
      d="M56 34c18 4 30-4 38-20M52 66c-18 2-30-8-36-26M52 100c18 4 32-6 40-24M48 140c-18 0-30-12-34-30"
      stroke="#705955"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <path
      d="M92 18c-12-6-18-18-16-30 12 2 20 12 16 30ZM22 52c-4-14 2-26 14-32 6 12 0 26-14 32ZM90 88c-14-4-22-16-22-30 14 0 24 12 22 30ZM20 122c-4-14 2-26 14-32 6 14 0 28-14 32ZM88 154c-14-4-22-16-22-30 14 0 24 12 22 30Z"
      stroke="#705955"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>
);

/* ——— Small parts ——————————————————————————————————————————————— */

/** A wordless photo plate at an explicit size, for collage placement. */
const Slot: React.FC<{
  src: string;
  alt: string;
  label: string;
  className?: string;
}> = ({ src, alt, label, className = '' }) => (
  <div className={`overflow-hidden ${className}`}>
    <SlidePhoto src={src} alt={alt} label={label} className="w-full h-full object-cover" />
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

/* ——— Charts ————————————————————————————————————————————————————— */

/**
 * The specification's pie: 82% Yes against 18% Maybe / No.
 *
 * Drawn as two SVG sectors rather than a chart library, so the split is exact
 * — the 82% arc runs from twelve o'clock, 295.2° round, leaving an 18% wedge
 * at the top right.
 */
const SurveyPie: React.FC = () => (
  <svg viewBox="0 0 132 132" className="w-[132px] h-[132px] shrink-0" aria-hidden="true">
    {/* 18% Maybe / No */}
    <path d="M66 66 L66 21 A45 45 0 0 1 25.28 46.84 Z" fill="#FADBD9" />
    {/* 82% Yes */}
    <path
      d="M66 66 L25.28 46.84 A45 45 0 1 1 66 21 Z"
      fill="#705955"
    />
  </svg>
);

/** Four minimal rounded bars — 88 / 72 / 68 / 54. */
const PreferenceBars: React.FC = () => (
  <div className="space-y-2.5">
    {PREFERENCES.map((pref) => (
      <div key={pref.label} className="flex items-center gap-3">
        <span className="eyebrow w-[5.5rem] shrink-0 text-[0.625rem] tracking-[0.12em] text-[#3E2723]/80">
          {pref.label}
        </span>
        <span className="h-2.5 flex-1 rounded-full bg-[#FADBD9]/60 overflow-hidden">
          <span
            className="block h-full rounded-full bg-[#705955]"
            style={{ width: `${pref.value}%` }}
          />
        </span>
        <span className="eyebrow w-8 shrink-0 text-right text-[0.625rem] tracking-[0.1em] text-[#3E2723]">
          {pref.value}%
        </span>
      </div>
    ))}
  </div>
);

/* ——— The page ——————————————————————————————————————————————————— */

export const EverydayAthleisurePageTwo: React.FC = () => {
  return (
    <div className="paper-grain-light">
      {/* ——— Running head ————————————————————————————————————— */}
      <div className="rule-b-light flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-4">
        <span className="eyebrow text-[#3E2723]">{BRAND}</span>
        <span className="eyebrow text-[#705955]">{PAGE_COUNTER}</span>
      </div>

      {/* ——— Band A — the title, the collage, the process ——————— */}
      <section className="relative rule-t-light pt-12 pb-14 lg:pt-16 lg:pb-20">
        <BotanicalLine />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-x-10 lg:gap-x-8 gap-y-14 items-start">
          {/* Title */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <span className="eyebrow text-[#3E2723]">PROJECT</span>
              <span className="block h-px w-11 bg-[#A38D89]" aria-hidden="true" />
            </div>

            <h1 className="mt-6 font-display text-[clamp(2.25rem,4.6vw,3.5rem)] leading-[0.96] tracking-[-0.01em] text-[#3E2723]">
              {TITLE_LINES.map((line) => (
                <React.Fragment key={line}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </h1>

            <BrushUnderline />
          </div>

          {/* Sketch → fabric → machine */}
          <div className="lg:col-span-3">
            <div className="relative">
              {/* The technical sketch sheet, taped down at a tilt. */}
              <figure className="relative bg-[#FDFCF8] p-2.5 pb-8 -rotate-[5deg] shadow-[0_12px_28px_-16px_rgba(62,39,35,0.32)]">
                <Slot
                  src="/portfolio-assets/03_tech_sketch_coord.png"
                  alt="Fashion technical sketches of the athleisure co-ord — structured cropped long-sleeve top front and back, relaxed jogger trousers front and back"
                  label="Technical sketches — top & jogger, front and back"
                  className="aspect-[3/4]"
                />
                <figcaption className="absolute inset-x-0 bottom-2 text-center eyebrow text-[0.5625rem] tracking-[0.16em] text-[#3E2723]/70">
                  SKETCHES
                </figcaption>
                <Tape className="-top-2.5 left-1/2 -translate-x-1/2 w-16" rotate={-6} />
              </figure>

              {/* Five textile samples, overlapping the sketch sheet. */}
              <div className="absolute -bottom-7 -left-3 flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <figure
                    key={i}
                    className="relative -ml-1 first:ml-0 bg-[#FDFCF8] p-1 shadow-[0_6px_14px_-10px_rgba(62,39,35,0.34)]"
                    style={{ transform: `rotate(${(i - 2) * 4}deg)`, zIndex: 5 - i }}
                  >
                    <Slot
                      src={`/portfolio-assets/03_fabric_swatch_${i + 1}.jpg`}
                      alt={`Textile sample ${i + 1} — torn-edge fabric swatch`}
                      label={`Textile sample ${i + 1}`}
                      className="w-[38px] h-[46px]"
                    />
                  </figure>
                ))}
              </div>

              {/* Hands at the machine, tucked into the collage's upper right. */}
              <figure className="relative mt-10 ml-auto w-[78%] bg-[#FDFCF8] p-2 rotate-[3deg] shadow-[0_12px_28px_-16px_rgba(62,39,35,0.32)]">
                <Slot
                  src="/portfolio-assets/03_sewing_atelier.jpg"
                  alt="Close-up of hands operating a sewing machine while constructing the garment"
                  label="Hands at the sewing machine"
                  className="aspect-[4/3]"
                />
                <Tape className="-top-2.5 -left-3 w-14" rotate={8} />
              </figure>

              <div className="relative mt-5 flex items-start gap-3">
                <Note
                  lines={['From sketch to reality']}
                  rotate={-5}
                  rule
                  className="max-w-[16ch]"
                />
                <HandArrow className="w-10 h-6 mt-2 rotate-[18deg] shrink-0" />
              </div>
            </div>
          </div>

          {/* FROM IDEA TO MVP */}
          <div className="lg:col-span-4">
            <p className="eyebrow text-[#3E2723]">FROM IDEA TO MVP</p>

            <div className="mt-6 flex items-start gap-1.5">
              {PROCESS.map((step, i) => (
                <React.Fragment key={step.label}>
                  <IconDisc
                    label={step.label}
                    discClassName="w-12 h-12 lg:w-[3.25rem] lg:h-[3.25rem] bg-[#FADBD9]"
                  >
                    {PROCESS_ICON[step.icon]}
                  </IconDisc>
                  {i < PROCESS.length - 1 && (
                    <span className="self-center pt-5 eyebrow text-[#D69589] text-sm leading-none" aria-hidden="true">
                      &#8594;
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <p className="mt-7 font-body text-sm leading-[1.4] text-[#3E2723]/80 max-w-[38ch]">
              {MVP_DESCRIPTION}
            </p>

            <div className="relative mt-8">
              <figure className="relative bg-[#FDFCF8] p-2.5 rotate-[1.5deg] shadow-[0_14px_30px_-16px_rgba(62,39,35,0.34)]">
                <Slot
                  src="/portfolio-assets/03_first_product_mvp.jpg"
                  alt="The finished olive-green co-ord — structured long-sleeve cropped top with relaxed matching jogger trousers — displayed on an invisible mannequin"
                  label="The MVP — full garment"
                  className="aspect-[4/5]"
                />
                <Tape className="-top-2.5 right-6 w-16" rotate={5} />
              </figure>

              <div className="absolute -top-4 -left-3 flex items-center gap-2">
                <Note lines={['The MVP']} rotate={-6} className="shrink-0" />
                <HandArrow className="w-11 h-7 rotate-[12deg] shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Band B — test it, read the data, name the skills ————— */}
      <section className="rule-t-light pt-14 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 lg:gap-x-8 gap-y-16 items-start">
          {/* THEN I TESTED ONE THING */}
          <div className="lg:col-span-4">
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

          {/* SURVEY INSIGHTS */}
          <div className="lg:col-span-4">
            <p className="eyebrow text-[#3E2723]">SURVEY INSIGHTS</p>

            {/* The pie */}
            <figure className="relative mt-6 bg-[#FDFCF8] border border-[#705955]/28 rounded-[3px] p-6 -rotate-[1deg] shadow-[0_12px_28px_-18px_rgba(62,39,35,0.3)]">
              <p className="eyebrow text-[0.625rem] leading-[1.4] tracking-[0.14em] text-[#3E2723]/80">
                {SURVEY_QUESTION}
              </p>

              <div className="mt-5 flex items-center gap-6">
                <SurveyPie />

                <div className="min-w-0">
                  <p className="font-display text-[2.125rem] leading-none text-[#3E2723]">
                    {SURVEY_METRIC}
                  </p>
                  <p className="eyebrow mt-2 text-[#3E2723]">{SURVEY_YES}</p>
                  <p className="eyebrow mt-4 text-[0.625rem] leading-[1.5] tracking-[0.12em] text-[#3E2723]/70">
                    {SURVEY_OTHER.map((line) => (
                      <React.Fragment key={line}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            </figure>

            {/* The bars */}
            <div className="mt-9">
              <p className="eyebrow text-[0.625rem] tracking-[0.14em] text-[#3E2723]">
                Top Preferences
              </p>
              <div className="mt-4">
                <PreferenceBars />
              </div>
            </div>

            {/* What they actually said */}
            <div className="mt-10">
              <div className="grid grid-cols-3 gap-3">
                {QUOTES.map((quote, i) => (
                  <figure
                    key={quote[0]}
                    className="relative bg-[#FDFCF8] rounded-[2px] p-4 pt-7 shadow-[0_8px_20px_-14px_rgba(62,39,35,0.34)]"
                    style={{ transform: `rotate(${(i - 1) * 1.8}deg)` }}
                  >
                    <span
                      className="absolute left-3 top-1 font-hand text-[1.75rem] leading-none text-[#705955]"
                      aria-hidden="true"
                    >
                      &ldquo;
                    </span>
                    <blockquote className="font-body text-[0.6875rem] leading-[1.5] text-[#3E2723]/85">
                      {quote.map((line) => (
                        <React.Fragment key={line}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </blockquote>
                    <Tape className="-top-2.5 left-1/2 -translate-x-1/2 w-12 h-4" rotate={i % 2 ? 6 : -5} />
                  </figure>
                ))}
              </div>

              <div className="mt-5 flex justify-end">
                <HeartMark />
              </div>
            </div>

            {/* Detail strip */}
            <div className="relative mt-10">
              <div className="flex gap-3">
                {[
                  {
                    src: '/portfolio-assets/03_detail_top.jpg',
                    alt: 'Close crop of the olive cropped top',
                    label: 'Cropped top — close crop',
                  },
                  {
                    src: '/portfolio-assets/03_detail_jogger.jpg',
                    alt: 'Close crop of the relaxed jogger trousers',
                    label: 'Joggers — close crop',
                  },
                  {
                    src: '/portfolio-assets/03_detail_fabric.jpg',
                    alt: 'Close crop of the soft fabric texture',
                    label: 'Fabric texture — close crop',
                  },
                ].map((shot, i) => (
                  <figure
                    key={shot.label}
                    className="flex-1 bg-[#FDFCF8] p-1.5"
                    style={{ transform: `rotate(${(i - 1) * 1.6}deg)` }}
                  >
                    <Slot {...shot} className="aspect-[4/5]" />
                  </figure>
                ))}
              </div>

              <div className="mt-5 flex items-start gap-3">
                <Note lines={['Real feedback.', 'Real impact.']} rotate={-5} />
                <HandArrow className="w-10 h-6 mt-2 rotate-[20deg] shrink-0" />
              </div>
            </div>

            {/* Before / after */}
            <div className="relative mt-10 flex items-end gap-4">
              {[
                {
                  label: 'BEFORE',
                  src: '/portfolio-assets/03_before_fit.jpg',
                  alt: 'The original olive athleisure outfit on the body',
                },
                {
                  label: 'AFTER',
                  src: '/portfolio-assets/03_after_fit.jpg',
                  alt: 'The refined olive athleisure outfit with improved fit and proportions',
                },
              ].map((shot, i) => (
                <figure
                  key={shot.label}
                  className="relative bg-[#FDFCF8] p-2 pb-7 w-[46%]"
                  style={{ transform: `rotate(${i === 0 ? -2 : 2}deg)` }}
                >
                  <Slot {...shot} className="aspect-[3/4]" />
                  <figcaption className="absolute inset-x-0 bottom-2 text-center eyebrow text-[0.5625rem] tracking-[0.18em] text-[#3E2723]/70">
                    {shot.label}
                  </figcaption>
                  <Tape className="-top-2.5 left-1/2 -translate-x-1/2 w-12 h-4" rotate={i === 0 ? -6 : 5} />
                </figure>
              ))}

              <div className="pb-4 flex items-start gap-2">
                <Note lines={['Same idea.', 'Better fit.']} rotate={-6} />
                <HandArrow className="w-9 h-5 mt-2 rotate-[16deg] shrink-0" />
              </div>
            </div>
          </div>

          {/* SKILLS APPLIED */}
          <div className="lg:col-span-4">
            <div className="relative bg-[#FADBD9]/50 rounded-[24px_36px_20px_34px] p-7 lg:p-9">
              <p className="eyebrow leading-[1.5] text-[#3E2723]">
                WHAT I BUILT BEYOND
                <br />
                THE PRODUCT
              </p>

              <h2 className="mt-4 font-display text-[1.875rem] lg:text-[2.125rem] leading-[1] text-[#3E2723]">
                SKILLS APPLIED
              </h2>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SKILLS.map((skill) => (
                  <div key={skill.title} className="rounded-[18px] bg-[#FDFCF8] p-5">
                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#705955] text-[#F9F8F2]">
                      {SKILL_ICON[skill.icon]}
                    </span>
                    <h3 className="mt-4 font-editorial text-[1.0625rem] leading-tight text-[#3E2723]">
                      {skill.title}
                    </h3>
                    <ul className="mt-3 space-y-1.5">
                      {skill.items.map((item) => (
                        <li
                          key={item}
                          className="font-body text-[0.6875rem] leading-[1.5] text-[#3E2723]/75"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Band C — iterate, and the outfit in the world ——————— */}
      <section className="rule-t-light pt-14 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 lg:gap-x-8 gap-y-14 items-start">
          {/* SO I ITERATED */}
          <div className="lg:col-span-7">
            <p className="eyebrow text-[#3E2723]">SO I ITERATED</p>
            <p className="eyebrow mt-2 text-[0.625rem] tracking-[0.12em] text-[#3E2723]/70">
              USER FEEDBACK &#8594; PRODUCT DECISION
            </p>

            <div className="mt-8 space-y-4">
              {ITERATION_ROWS.map((row) => (
                <div key={row.problem} className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <span className="rounded-full bg-[#FADBD9] px-4 py-2 eyebrow text-[0.625rem] tracking-[0.12em] text-[#3E2723]">
                    {row.problem}
                  </span>
                  <span className="eyebrow text-[#D69589] leading-none" aria-hidden="true">
                    &#8594;
                  </span>
                  <span className="rounded-full bg-[#FDFCF8] border border-[#705955]/28 px-4 py-2 eyebrow text-[0.625rem] tracking-[0.12em] text-[#3E2723]">
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

            <p className="mt-8 font-body text-xs leading-[1.5] text-[#3E2723]/70 max-w-[54ch]">
              {ITERATION_FOOTER}
            </p>
          </div>

          {/* The outfit, worn */}
          <div className="lg:col-span-5">
            <div className="relative">
              <BotanicalSprig />

              <figure className="relative z-10 ml-auto w-[68%] bg-[#FDFCF8] p-2.5 -rotate-[1.5deg] shadow-[0_14px_32px_-18px_rgba(62,39,35,0.34)]">
                <Slot
                  src="/portfolio-assets/03_travel_airport.jpg"
                  alt="Woman in the olive athleisure co-ord photographed from behind, walking through an airport with a black shoulder bag"
                  label="The co-ord in the world — airport, from behind"
                  className="aspect-[2/3]"
                />
                <Tape className="-top-2.5 left-1/2 -translate-x-1/2 w-16" rotate={-5} />
              </figure>

              <div className="relative z-10 mt-6 ml-6 grid grid-cols-3 gap-3">
                {[
                  {
                    src: '/portfolio-assets/03_athleisure_travel.jpg',
                    alt: 'Woman in the athleisure outfit walking with luggage',
                    label: 'Walking with luggage',
                  },
                  {
                    src: '/portfolio-assets/03_athleisure_cafe.jpg',
                    alt: 'Woman wearing the athleisure outfit in a cafe',
                    label: 'In a cafe',
                  },
                  {
                    src: '/portfolio-assets/03_athleisure_everyday.jpg',
                    alt: 'Woman wearing the athleisure outfit in an everyday setting',
                    label: 'Everyday setting',
                  },
                ].map((shot, i) => (
                  <figure
                    key={shot.label}
                    className="relative bg-[#FDFCF8] p-1.5"
                    style={{ transform: `rotate(${(i - 1) * 2.4}deg)` }}
                  >
                    <Slot {...shot} className="aspect-[3/4]" />
                    <Tape className="-top-2 left-1/2 -translate-x-1/2 w-9 h-3.5" rotate={i % 2 ? 7 : -6} />
                  </figure>
                ))}
              </div>

              <div className="relative z-10 mt-6 flex items-start gap-3">
                <Note lines={['Real people.', 'Real solutions.']} rotate={-5} />
                <HeartMark className="mt-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Band D — what I take forward ————————————————————— */}
      <section className="rule-t-light pt-14 pb-20 lg:pt-20 lg:pb-28">
        <div className="relative bg-[#FADBD9] rounded-[20px_36px_18px_32px] p-8 lg:p-14">
          <p className="eyebrow text-[#3E2723]">WHAT I TAKE FORWARD</p>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-10 items-start">
            <div className="lg:col-span-7">
              <h2 className="font-display text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.05] text-[#7A2A2E]">
                IDEA &#8594; EVIDENCE &#8594; ITERATION
              </h2>
              <p className="mt-6 font-body text-sm leading-[1.5] text-[#3E2723]/80 max-w-[46ch]">
                Don’t just build what sounds good.
                <br />
                Build &#8594; test &#8594; listen &#8594; improve.
              </p>
            </div>

            <div className="lg:col-span-5">
              <Note lines={TAKE_FORWARD_NOTE} rotate={-4} rule />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
