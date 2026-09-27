import React from 'react';
import { Link } from 'react-router-dom';
import { OvalPhoto } from '../OvalPhoto';

interface LearningCard {
  num: string;
  title: string;
  body: string;
  src: string;
  alt: string;
  label: string;
}

const cards: LearningCard[] = [
  {
    num: '01',
    title: 'MARKET RESEARCH',
    body: 'Learned how to research market trends, industry growth and competitors to understand the opportunity for a new product.',
    src: '/portfolio-assets/05_market_research.jpg',
    alt: 'Top-down research desk with a black magnifying glass lying across printed market charts and documents',
    label: 'Market Research',
  },
  {
    num: '02',
    title: 'STRATEGIC BRAND\nEXTENSION',
    body: 'Learned how to evaluate whether a new product category fits an existing brand identity and positioning.',
    src: '/portfolio-assets/05_brand_extension.jpg',
    alt: 'Close-up of cream fabric with the red Uniqlo logo card placed on the textile',
    label: 'Brand Extension',
  },
  {
    num: '03',
    title: 'CONSUMER ANALYSIS',
    body: 'Learned how to understand target consumers, their preferences and usage needs while developing a product concept.',
    src: '/portfolio-assets/05_consumer_analysis.jpg',
    alt: 'One central figure surrounded by softly blurred people, a target consumer inside a wider audience',
    label: 'Consumer Analysis',
  },
  {
    num: '04',
    title: 'PRODUCT LAUNCH\nPLANNING',
    body: 'Learned how different elements like pricing, distribution, promotion and rollout come together to plan a product launch.',
    src: '/portfolio-assets/05_product_launch.jpg',
    alt: 'Minimal fragrance still life of a clear rectangular bottle on a pale stone block with a muted green branch',
    label: 'Product Launch',
  },
];

/**
 * PAGE 05 — What the Project Taught Me.
 *
 * Four tinted cards, each with an oval photograph breaking the top edge, in the
 * learning areas the project covered. The oval slots are pending files: drop
 * each photo into /public/portfolio-assets under the filename above and it
 * fills in on its own.
 */
export const ProjectLearnedSection: React.FC = () => {
  return (
    <section className="paper-grain-light">
      {/* Header — section marker, title, standing statement */}
      <div className="mb-14 lg:mb-20">
        <div className="flex items-center gap-4 mb-8">
          <span className="eyebrow text-[#3E2723]">05</span>
          <span className="block h-px w-8 lg:w-12 bg-[#705955]/30" aria-hidden="true" />
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.98] tracking-tight text-[#3E2723]">
            What the Project
            <br />
            <span className="font-editorial italic">Taught Me</span>
          </h2>

          <div className="flex items-start gap-5 lg:pt-3">
            <p className="eyebrow text-xs text-[#705955] leading-[1.6]">
              NEW PERSPECTIVES
              <br />
              BETTER QUESTIONS.
              <br />
              BIGGER THINKING.
            </p>
            <span className="mt-2 block h-px w-10 lg:w-14 bg-[#705955]/30" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Four learning cards, ovals breaking the top edge */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-5 lg:gap-x-6 gap-y-16 lg:gap-y-20">
        {cards.map((card) => (
          <article
            key={card.num}
            className="relative rounded-[14px] bg-[#FADBD9]/50 px-5 sm:px-6 lg:px-7 pt-28 sm:pt-40 lg:pt-48 pb-6 sm:pb-7 flex flex-col justify-between gap-6 min-h-[26rem] sm:min-h-[30rem] lg:min-h-[34rem]"
          >
            {/* Organic oval breaks the top edge — about a quarter of it hangs above the card */}
            <div className="absolute left-1/2 -top-8 sm:-top-11 lg:-top-14 w-36 h-32 sm:w-52 sm:h-44 lg:w-68 lg:h-56 -translate-x-1/2">
              <OvalPhoto src={card.src} alt={card.alt} label={card.label} />
            </div>

            <div className="flex items-center gap-3">
              <span className="index-figure text-4xl lg:text-5xl text-[#3E2723]/80">{card.num}</span>
              <span className="block h-px flex-1 bg-[#705955]/30" aria-hidden="true" />
            </div>

            <h3 className="font-body text-lg sm:text-xl lg:text-2xl font-medium uppercase tracking-[0.1em] sm:tracking-[0.12em] leading-[1.25] text-[#3E2723] whitespace-pre-line">
              {card.title}
            </h3>

            <p className="font-body text-[0.875rem] sm:text-[0.9375rem] leading-[1.65] text-[#3E2723]/75">
              {card.body}
            </p>
          </article>
        ))}
      </div>

      {/* Footer — project marks, then the onward link */}
      <div className="rule-t-light mt-16 lg:mt-24 pt-6 flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <span className="eyebrow text-[#705955]">MARKETING MANAGEMENT</span>
          <span className="block h-px w-10 lg:w-16 bg-[#705955]/30" aria-hidden="true" />
        </div>

        <span className="eyebrow text-[#705955]">PROJECT 01</span>
      </div>

      <div className="mt-8 flex justify-end">
        <Link
          to="/projects/visual-merchandising"
          className="inline-flex items-center gap-3 eyebrow text-[#3E2723] editorial-link"
        >
          <span>Next Project: Cover Story →</span>
        </Link>
      </div>
    </section>
  );
};
