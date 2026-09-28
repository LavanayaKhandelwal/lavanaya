import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SlidePhoto } from '../SlidePhoto';

const marketPoints = [
  'Fragrance industry growing in India',
  '+5.6% annual growth',
  '₹16,000 Cr projected market by 2033',
];

const consumerPoints = [
  'Millennials & Gen Z',
  'Value simplicity & subtle elegance',
  'Fresh, minimal, everyday scents',
  'Professionals seeking office-friendly fragrances',
];

const lifewear = ['Comfort', 'Functionality', 'Simplicity'];

const feelwear = ['Sensory experience', 'Japanese minimalism', 'Everyday fragrance'];

const Bullets: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-2.5">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3 font-body text-sm text-[#3E2723]/80 leading-relaxed">
        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#D69589] flex-shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

/**
 * PAGE 2 — MAPPING THE OPPORTUNITY
 * Rebuilt from the old standalone 16:9 deck into the page's own editorial
 * system: dark ground, serif display headings, rule-t-light blocks, plate-light imagery.
 */
export const MappingOpportunitySection: React.FC = () => {
  return (
    <section className="mb-24 lg:mb-32">
      <div className="rule-b-light pb-6 mb-14 max-w-4xl">
        <p className="eyebrow text-[#705955] mb-3">PAGE 2 — MAPPING THE OPPORTUNITY</p>
        <h2 className="font-display text-4xl sm:text-5xl text-[#3E2723] tracking-tight mb-4">
          Mapping the Opportunity
        </h2>
        <p className="font-body text-base text-[#3E2723]/80 leading-loose">
          Exploring the market, consumer and competitive landscape to identify where Uniqlo could grow.
        </p>
      </div>

      {/* 01 Market · 02 Consumer · 03 Competitive */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-14 gap-y-16 mb-16">
        <div className="rule-t-light pt-8">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="index-figure text-3xl text-[#705955]/60">01</span>
            <h3 className="eyebrow text-[#3E2723]">MARKET POTENTIAL</h3>
          </div>
          <Bullets items={marketPoints} />

          <div className="rule-t-light pt-6 mt-8">
            <p className="font-display text-4xl sm:text-5xl text-[#3E2723] leading-none tracking-tight">
              ₹16,000 Cr
            </p>
            <p className="eyebrow text-[#705955] mt-3">PROJECTED MARKET BY 2033</p>
            <p className="font-mono-code text-xs text-[#D69589] mt-1.5">+5.6% CAGR</p>
          </div>

          <div className="plate-light p-2 mt-8">
            <SlidePhoto
              src="/portfolio-assets/02_market_potential.jpg"
              alt="Fragrance industry growth figures for the Indian market, presented as printed charts and market data"
              label="City Skyline"
              className="w-full h-auto object-cover aspect-[16/10]"
            />
          </div>
        </div>

        <div className="rule-t-light pt-8">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="index-figure text-3xl text-[#705955]/60">02</span>
            <h3 className="eyebrow text-[#3E2723]">CONSUMER</h3>
          </div>
          <Bullets items={consumerPoints} />

          <div className="plate-light p-2 mt-8">
            <SlidePhoto
              src="/portfolio-assets/02_consumer.jpg"
              alt="Target consumer profile for the fragrance concept, showing the millennial and Gen Z audience"
              label="Consumer Lifestyle"
              className="w-full h-auto object-cover aspect-[16/10]"
              style={{ objectPosition: '50% 0%' }}
            />
          </div>
        </div>

        <div className="rule-t-light pt-8">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="index-figure text-3xl text-[#705955]/60">03</span>
            <h3 className="eyebrow text-[#3E2723]">COMPETITIVE SPACE</h3>
          </div>

          <div className="space-y-4">
            <div className="rule-t-light pt-4 flex items-baseline justify-between gap-4">
              <span className="font-serif-display text-xl text-[#3E2723]">ZARA</span>
              <span className="font-mono-code text-xs text-[#705955]">→ FRAGRANCE</span>
            </div>
            <div className="rule-t-light pt-4 flex items-baseline justify-between gap-4">
              <span className="font-editorial text-xl italic text-[#3E2723]">H&amp;M</span>
              <span className="font-mono-code text-xs text-[#705955]">→ FRAGRANCE</span>
            </div>
            <div className="rule-t-light pt-4 flex items-baseline justify-between gap-4">
              <span className="flex items-baseline gap-2">
                <span className="w-6 h-6 bg-[#E01A1A] flex items-center justify-center">
                  <span className="font-bold text-white text-[10px] leading-none">UNI</span>
                </span>
                <span className="font-serif-display text-xl text-[#3E2723]">QLO</span>
              </span>
              <span className="flex items-baseline gap-2">
                <span className="font-mono-code text-xs text-[#705955]">→ APPAREL</span>
                <span className="font-serif-display text-xl text-[#D69589] leading-none">?</span>
              </span>
            </div>
          </div>

          <p className="font-editorial italic text-sm text-[#3E2723]/80 leading-relaxed mt-6">
            Opportunity for a distinctly Japanese, minimal scent.
          </p>

          <div className="plate-light p-2 mt-8">
            <SlidePhoto
              src="/portfolio-assets/02_competitive_space.jpg"
              alt="Competitive landscape showing where Zara and H&M sit in fragrance and where Uniqlo currently sits in apparel"
              label="Japanese Botanical"
              className="w-full h-auto object-cover aspect-[16/10]"
            />
          </div>
        </div>
      </div>

      {/* 04 Brand fit + the space we identified */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-14 gap-y-16">
        <div className="lg:col-span-8 rule-t-light pt-8">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="index-figure text-3xl text-[#705955]/60">04</span>
            <h3 className="eyebrow text-[#3E2723]">BRAND FIT</h3>
          </div>

          <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-6 lg:gap-10">
            <div className="rule-l-light border-[#D69589] pl-6">
              <p className="eyebrow text-[#3E2723] mb-4">LIFEWEAR</p>
              <Bullets items={lifewear} />
            </div>

            <ArrowRight className="w-6 h-6 text-[#D69589] mt-8 flex-shrink-0" />

            <div className="rule-l-light border-[#D69589] pl-6">
              <p className="eyebrow text-[#3E2723] mb-4">FEELWEAR</p>
              <Bullets items={feelwear} />
            </div>
          </div>

          <div className="plate-light p-2 mt-10">
            <SlidePhoto
              src="/portfolio-assets/02_brand_fit.jpg"
              alt="Brand fit between Uniqlo Lifewear values of comfort, functionality and simplicity and the proposed FEELWEAR fragrance line"
              label="Brand Fit Sunlight"
              className="w-full h-auto object-cover aspect-[16/9]"
            />
          </div>
        </div>

        <div className="lg:col-span-4 rule-t-light pt-8 lg:sticky lg:top-24 lg:self-start">
          <p className="eyebrow text-[#705955] mb-6">THE SPACE WE IDENTIFIED</p>
          <p className="font-editorial italic text-2xl sm:text-3xl text-[#7A2A2E] leading-snug">
            A minimalist, everyday fragrance category that feels distinctly Uniqlo.
          </p>
        </div>
      </div>
    </section>
  );
};
