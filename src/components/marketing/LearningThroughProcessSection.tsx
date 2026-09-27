import React from 'react';
import { SlidePhoto } from '../SlidePhoto';

/**
 * PROJECT 2 — PAGE 04, "LEARNING THROUGH THE PROCESS"
 *
 * The closing page. Four learning points and the skills list on the left, a
 * full-height retail photograph bleeding off the right edge with the closing
 * line floating in its negative space.
 *
 * No card. Like PAGES 02 and 03 the page is a continuous run of the cream
 * ground — no border, no plate fill, no inset box.
 *
 * Copy is explicit as provided.
 *
 * Colour is the home page's light palette, not the spec's own hex values.
 * No gradients, no shadows, no blur.
 */

/* ——— Copy (per instruction) ——— */
const HEADING_LEAD = 'LEARNING THROUGH';
const HEADING_TAIL = 'THE PROCESS';

const LEARNING_ITEMS = [
  {
    number: '01',
    heading: 'Understanding the Brand',
    body: 'Translating brand identity into a clear visual direction.',
    src: '/portfolio-assets/1e36b3dd-85f2-438b-b90a-e7143dbd03cd.jpg',
    alt: 'Translucent holographic petal detail',
    position: '50% 45%',
  },
  {
    number: '02',
    heading: 'Developing the Concept',
    body: 'Connecting seasonal direction, colour, materials and visual storytelling.',
    src: '/portfolio-assets/7eee7676-2ce8-4667-9ef7-abf624ba1833.jpg',
    alt: 'Organza softening the floral form',
    position: '50% 45%',
  },
  {
    number: '03',
    heading: 'Shaping the Space',
    body: 'Applying balance, proportion, scale, rhythm and focal point to create visual harmony.',
    src: '/portfolio-assets/project-visual-merchandising-hero.png',
    alt: 'The Cover Story storefront as a display environment',
    position: '50% 45%',
  },
  {
    number: '04',
    heading: 'Bringing Ideas to Life',
    body: 'Turning the concept into a physical display through styling, construction and installation.',
    src: '/portfolio-assets/6fa49fa5-d790-4c76-9f00-69ca01bfcdc2.jpg',
    alt: 'Wire and foam florals being assembled',
    position: '50% 50%',
  },
];

const SKILLS_HEADING = 'SKILLS APPLIED';
const SKILLS = [
  'Concept Development',
  'Trend Research',
  'Colour Theory',
  'Spatial Styling',
  'Material Exploration',
  'Creative Execution',
  'Team Collaboration',
];

const QUOTE_LINES = ['From', 'concept', 'to', 'creation'];

export const LearningThroughProcessSection: React.FC = () => {
  return (
    <section className="paper-grain-light pt-8 pb-10 mb-24 lg:pt-12 lg:pb-14 lg:mb-32">
      {/* ——— Top metadata, closed with Project 1's header rule ——— */}
      <div className="flex items-center gap-6 lg:gap-11">
        <span className="eyebrow text-[#3E2723]">04 / 04</span>
        <span className="block h-px w-8 lg:w-12 bg-[#705955]/30" aria-hidden="true" />
        <span className="eyebrow text-[#705955]">VISUAL MERCHANDISING</span>
      </div>
      <div className="rule-b-light mt-5" aria-hidden="true" />

      <div className="mt-8 lg:mt-10 grid grid-cols-1 lg:grid-cols-[52fr_48fr] items-stretch">
        {/* ——— Left panel ——— */}
        <div className="lg:pr-9 xl:pr-12">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.98] tracking-tight text-[#3E2723] uppercase">
            {HEADING_LEAD}
            <br />
            <span className="font-editorial italic">{HEADING_TAIL}</span>
          </h2>

          <ol className="mt-8 lg:mt-10 space-y-7 lg:space-y-8">
            {LEARNING_ITEMS.map((item) => (
              <li key={item.number} className="grid grid-cols-[auto_1fr] gap-4 lg:gap-5 items-start">
                {/* Photo in a blush mount — the tinted disc Project 1 uses */}
                <div className="rounded-full bg-[#FADBD9]/40 p-1.5 flex-shrink-0">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden">
                    <SlidePhoto
                      src={item.src}
                      alt={item.alt}
                      label={item.heading}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: item.position }}
                      frameRadius="rounded-full"
                    />
                  </div>
                </div>

                <div className="pt-0.5">
                  {/* Project 1's index figure: big serif numeral, hairline running to the edge */}
                  <div className="flex items-center gap-3">
                    <span className="index-figure text-3xl text-[#3E2723]/80">{item.number}</span>
                    <span className="block h-px flex-1 bg-[#705955]/30" aria-hidden="true" />
                  </div>

                  <h3 className="mt-2.5 font-body text-base lg:text-lg font-medium text-[#3E2723]">
                    {item.heading}
                  </h3>
                  <p className="mt-1.5 max-w-[46ch] font-body text-sm text-[#3E2723]/80 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="rule-t-light mt-9 pt-7 lg:mt-11">
            {/* Full blush block — Project 1's insight-panel ground */}
            <div className="bg-[#FADBD9] p-4 sm:p-5">
              <p className="eyebrow text-[#3E2723]">{SKILLS_HEADING}</p>
              <p className="mt-3 max-w-[54ch] font-body text-sm text-[#3E2723]/80 leading-[1.75]">
                {SKILLS.join('  ·  ')}
              </p>
            </div>
          </div>
        </div>

        {/* ——— Right: photograph bleeding off the right edge ——— */}
        <div className="relative mt-12 lg:mt-0 lg:-mr-5 xl:-mr-8 2xl:-mr-12">
          <div className="aspect-[4/5] lg:aspect-auto lg:h-full">
            <SlidePhoto
              src="/portfolio-assets/DD05B299-B533-4126-B54A-3B48CD3AA413.jpg"
              alt="The finished Future Florals display in the Cover Story store"
              label="Future Florals, retail installation"
              className="w-full h-full object-cover"
              style={{ objectPosition: '50% 45%' }}
              frameInset="inset-0"
            />
          </div>

          {/* Closing line, floating in the photograph's negative space. The
              terracotta left rule is Project 1's hero-subtitle treatment. */}
          <blockquote className="absolute left-[6%] sm:left-[9%] top-1/2 -translate-y-1/2 w-[48%] sm:w-[42%] border-l-2 border-[#D69589] pl-4 sm:pl-5 pointer-events-none select-none">
            {QUOTE_LINES.map((line) => (
              <span
                key={line}
                className="block font-editorial italic text-[1.625rem] sm:text-[2rem] lg:text-[2.375rem] leading-[1.06] text-[#3E2723]"
              >
                {line}
              </span>
            ))}
          </blockquote>
        </div>
      </div>
    </section>
  );
};
