import React from 'react';
import { SlidePhoto } from '../SlidePhoto';

/* ————— Process flow ————— */

const steps: { label: string; icon: React.ReactNode }[] = [
  {
    label: 'PITCH',
    icon: (
      <>
        <circle cx="8.5" cy="6.5" r="2.4" />
        <path d="M4.5 20v-1.6A3.9 3.9 0 0 1 8.4 14.5h.2a3.9 3.9 0 0 1 3.9 3.9V20" />
        <path d="M16 6h4.5M16 9.5h4.5M16 13h3" />
      </>
    ),
  },
  {
    label: 'TEST',
    icon: (
      <>
        <path d="M9.5 3.5h5" />
        <path d="M10.5 6h3l1.2 3v9.5a2 2 0 0 1-2 2h-1.4a2 2 0 0 1-2-2V9l1.2-3Z" />
        <path d="M9 13.5h6" />
      </>
    ),
  },
  {
    label: 'FEEDBACK',
    icon: (
      <>
        <path d="M6 3.5h7.5L18 8v12.5H6z" />
        <path d="M13.5 3.5V8H18" />
        <path d="M9 12h6M9 15.5h6M9 19h3.5" />
      </>
    ),
  },
  {
    label: 'ITERATE',
    icon: (
      <>
        <path d="M19 12a7 7 0 0 1-12.1 4.8" />
        <path d="M5 12A7 7 0 0 1 17.1 7.2" />
        <path d="M17.2 3.4v3.9h-3.9" />
        <path d="M6.8 20.6v-3.9h3.9" />
      </>
    ),
  },
];

const Arrow = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-4 h-4 text-[#705955]/70"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    aria-hidden="true"
  >
    <path d="M4 12h15" strokeLinecap="round" />
    <path d="M14.5 7.5 19 12l-4.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const footerNav = ['Product Pitch', 'Audience Interaction', 'Feedback Collection', 'Iteration'];

/**
 * PAGE 04 — BRINGING THE CONCEPT TO LIFE.
 *
 * Asymmetric editorial grid, packed tight: a text-led left column (heading,
 * marketing pitch, four-step process, one wide event photograph that grows to
 * meet the right column's baseline) against an image-led right column (two
 * event photographs, the reviews metric riding up over their lower edge, the
 * feedback-document photograph, and the two insight blocks). The photography
 * slots are pending files — drop each into /public/portfolio-assets under the
 * filename in the photo props below and it fills in on its own.
 */
export const ConceptToLifeSection: React.FC = () => {
  return (
    <section className="paper-grain-light">
      {/* Top bar — full-bleed, spans the viewport */}
      <div className="-mx-5 sm:-mx-8 lg:-mx-12 mb-8 lg:mb-10 h-3.5 bg-[#3E2723]" aria-hidden="true" />

      <div className="grid grid-cols-1 lg:grid-cols-[40fr_60fr] gap-8 lg:gap-6">
        {/* ——— Left column: narrative ——— */}
        <div className="flex flex-col">
          <div className="flex items-center gap-4 mb-5">
            <span className="font-body text-base text-[#3E2723]">04</span>
            <span className="block h-px w-10 lg:w-16 bg-[#705955]/30" aria-hidden="true" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[0.98] tracking-tight text-[#3E2723]">
            BRINGING THE
            <br />
            CONCEPT TO LIFE
          </h2>

          <div className="mt-5 lg:mt-6">
            <p className="font-body text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-[#3E2723] mb-3">
              THE MARKETING PITCH
            </p>
            <p className="font-body text-[0.8125rem] leading-[1.6] text-[#3E2723]/80 max-w-[46ch]">
              Once the product was developed, we took it into a college product-pitch activity. We presented the
              fragrance concept, explained the product and invited students to experience the fragrances themselves.
            </p>
          </div>

          {/* Process flow — pitch → test → feedback → iterate */}
          <div className="mt-5 lg:mt-6 bg-[#FADBD9]/40 border border-[#705955]/20 px-4 py-4 flex flex-wrap items-center gap-x-3 gap-y-4">
            {steps.map((step, idx) => (
              <React.Fragment key={step.label}>
                <div className="flex flex-col items-center gap-2">
                  <span className="w-11 h-11 rounded-full bg-[#FDFCF8] border border-[#705955]/25 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-[18px] h-[18px] text-[#3E2723]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      aria-hidden="true"
                    >
                      {step.icon}
                    </svg>
                  </span>
                  <span className="font-body text-[0.5625rem] sm:text-[0.625rem] uppercase tracking-[0.08em] text-[#3E2723]">
                    {step.label}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <span className="hidden sm:block -mt-5" aria-hidden="true">
                    <Arrow />
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Main event photograph — grows so both columns share a baseline. Held a
              little above centre so the top of the tall frame is not cut. */}
          <figure className="mt-5 lg:mt-6 flex-1 min-h-[13rem] lg:min-h-[16rem] rounded-[3px] overflow-hidden">
            <SlidePhoto
              src="/portfolio-assets/04_event_2.jpg"
              alt="College students gathered around a fragrance product presentation table, testing and smelling fragrance samples"
              label="Students Testing Fragrances"
              className="w-full h-full object-cover"
              style={{ objectPosition: '50% 25%' }}
            />
          </figure>
        </div>

        {/* ——— Right column: case-study grid ——— */}
        <div className="flex flex-col gap-5 lg:gap-6">
          {/* Event photographs — the first holds the left column and runs two rows
              down so its portrait frame reads whole, the other two split the top row
              beside it. The metric and feedback documents stack opposite, with the
              product display closing the left column. */}
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 lg:gap-6">
            {/* First event photograph — spans the two rows beneath its neighbours so
                the portrait shot reads whole. Top edge stays flush with the other
                two; object-contain keeps the full frame visible and the plate fill
                carries the slack. */}
            <figure className="col-start-1 row-start-1 row-span-2 h-48 sm:h-60 lg:h-auto rounded-[3px] overflow-hidden bg-[#FADBD9]/40">
              <SlidePhoto
                src="/portfolio-assets/04_event_1.jpg"
                alt="Students at the college fragrance pitch booth, smelling samples and engaging with the product concept"
                label="Presenter At Booth"
                className="w-full h-full object-contain"
              />
            </figure>
            <figure className="h-48 sm:h-60 lg:h-[22rem] rounded-[3px] overflow-hidden bg-[#FADBD9]/40">
              <SlidePhoto
                src="/portfolio-assets/04_students_interacting.png"
                alt="Students gathered around the fragrance display, smelling samples and discussing the product concept"
                label="Students Interacting"
                className="w-full h-full object-cover"
                style={{ objectPosition: '50% 25%' }}
              />
            </figure>
            <figure className="h-48 sm:h-60 lg:h-[22rem] rounded-[3px] overflow-hidden bg-[#FADBD9]/40">
              <SlidePhoto
                src="/portfolio-assets/04_students_at_booth.jpg"
                alt="Group of college students gathered at the fragrance product pitch booth during the college activation"
                style={{ objectPosition: '50% 25%' }}
                label="Students At Booth"
                className="w-full h-full object-cover"
              />
            </figure>

            {/* Product display — now the third row, beneath the extended first photograph */}
            <figure className="col-start-1 row-start-3 h-32 sm:h-44 lg:h-56 rounded-[3px] overflow-hidden bg-[#FADBD9]/40">
              <SlidePhoto
                src="/portfolio-assets/04_product_display.jpg"
                alt="Fragrance bottles and cream packaging arranged on the product display table at the pitch booth"
                label="Product Display"
                className="w-full h-full object-cover"
              />
            </figure>

            {/* Metric — right-aligned opposite the extended photograph */}
            <div className="col-start-2 col-span-2 row-start-2 flex flex-col justify-center text-right py-6">
              <p className="font-display text-5xl sm:text-6xl lg:text-7xl leading-none tracking-tight text-[#3E2723]">
                25–30+
              </p>
              <p className="font-body text-[0.625rem] sm:text-[0.6875rem] uppercase tracking-[0.28em] text-[#3E2723] mt-4">
                REVIEWS COLLECTED
              </p>
            </div>

            {/* Feedback documentation — beside the product display, beneath the metric */}
            <figure className="col-start-2 col-span-2 row-start-3 h-32 sm:h-44 lg:h-56 rounded-[3px] overflow-hidden bg-[#FADBD9]/40">
              <SlidePhoto
                src="/portfolio-assets/04_feedback_documents.jpg"
                alt="Printed Uniqlo fragrance feedback forms and review sheets arranged across a desk"
                label="Feedback Documents"
                className="w-full h-full object-cover"
                style={{ objectPosition: '50% 100%' }}
              />
            </figure>
          </div>

          {/* Insight blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-[55fr_45fr] gap-4 lg:gap-6">
            <div className="bg-[#FADBD9] p-4 sm:p-5">
              <p className="font-body text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-[#3E2723] mb-2.5">
                LISTEN. REFINE. REPEAT.
              </p>
              <p className="font-body text-[0.8125rem] leading-[1.55] text-[#3E2723]/80">
                The feedback helped us identify what could be improved and refine the product and packaging
                accordingly.
              </p>
            </div>

            <div className="bg-[#F9F8F2] border-l border-[#705955]/25 p-4 sm:p-5">
              <p className="font-body text-[0.625rem] font-medium uppercase tracking-[0.2em] text-[#3E2723] mb-2.5">
                MY ROLE
              </p>
              <p className="font-body text-[0.8125rem] leading-[1.55] text-[#3E2723]/80">
                I led the product presentation and audience interaction, explaining the concept and engaging with
                students throughout the activity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer navigation line */}
      <div className="rule-t-light mt-8 lg:mt-10 pt-4 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-5">
        {footerNav.map((item, idx) => (
          <React.Fragment key={item}>
            <span className="font-body text-[0.625rem] tracking-[0.04em] text-[#3E2723]/80">{item}</span>
            {idx < footerNav.length - 1 && (
              <span className="text-[0.625rem] text-[#705955]" aria-hidden="true">
                &bull;
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
