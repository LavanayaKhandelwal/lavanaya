import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ProjectMarketingPage: React.FC = () => {
  const { projectMarketing: pm } = portfolioData;

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Folio rule */}
        <div className="flex items-center justify-between eyebrow text-[#A38D89] pb-4 rule-b mb-14">
          <div className="flex items-center gap-2">
            <Link to="/projects" className="hover:text-[#F8E5D7] flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>PROJECTS</span>
            </Link>
            <span>/</span>
            <span className="text-[#F8E5D7] font-semibold">PROJECT 1 — MARKETING MANAGEMENT</span>
          </div>
          <span>UNIQLO X FRAGNANCES</span>
        </div>

        {/* COVER */}
        <section className="mb-24 lg:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <p className="eyebrow text-[#D69589] border-l-2 border-[#D69589] pl-4">
                PROJECT 1 (MARKETING MANAGEMENT) // PAGE 1 &amp; PAGE 2
              </p>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#F8E5D7] leading-[1] tracking-tight">
                {pm.cover.title}
              </h1>

              <p className="font-serif-display text-2xl sm:text-3xl text-[#F4C9D6] italic leading-snug">
                {pm.cover.subtitle}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-6 pt-8 rule-t font-mono-code text-xs">
                <div>
                  <span className="text-[#A38D89] block text-[10px] uppercase tracking-widest mb-1">BRAND / CLIENT:</span>
                  <span className="font-bold text-[#F8E5D7]">{pm.cover.brand}</span>
                </div>
                <div>
                  <span className="text-[#A38D89] block text-[10px] uppercase tracking-widest mb-1">DISCIPLINE:</span>
                  <span className="font-bold text-[#F8E5D7]">{pm.cover.discipline}</span>
                </div>
                <div>
                  <span className="text-[#A38D89] block text-[10px] uppercase tracking-widest mb-1">TIMELINE:</span>
                  <span className="font-bold text-[#F8E5D7]">{pm.cover.timeline}</span>
                </div>
              </div>
            </div>

            {/* Fragrance hero */}
            <div className="lg:col-span-4 lg:col-start-9 lg:pt-20">
              <div className="plate p-2">
                <img
                  src="/portfolio-assets/01_UNIQLO_main.jpg"
                  alt="UNIQLO Fragrance Hero Concept"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="plate-caption text-center mt-3">
                UNIQLO LifeWear Fragrance Product Mockup &amp; Identity
              </p>
            </div>
          </div>
        </section>

        {/* PAGE 1 & PAGE 2 */}
        <section className="mb-24 lg:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            <div className="rule-t pt-8">
              <p className="eyebrow text-[#D69589] mb-6">PAGE 1 — CONTEXT &amp; OPPORTUNITY</p>
              <div className="rule-l border-[#D69589] pl-6 font-body text-sm sm:text-base text-[#F8E5D7]/85 leading-loose mb-10 whitespace-pre-line">
                {pm.page1And2.context}
              </div>

              <div className="plate">
                <img
                  src="/portfolio-assets/02_market_trends.jpg"
                  alt="Market Trends Analysis"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="plate-caption text-center mt-3">
                Market Analysis &amp; Accessible Fragrance Opportunity Gap
              </p>
            </div>

            <div className="rule-t pt-8 flex flex-col justify-between md:mt-20 lg:mt-28">
              <div>
                <p className="eyebrow text-[#D69589] mb-6">PAGE 2 — THE STRATEGIC BRIEF</p>
                <p className="rule-l border-[#D69589] pl-6 font-body text-base text-[#F8E5D7]/85 leading-loose">
                  {pm.page1And2.brief}
                </p>
              </div>
              <div className="rule-t mt-10 pt-4 font-mono-code text-xs text-[#A38D89] font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D69589]" />
                <span>Aligned with UNIQLO LifeWear core philosophy &amp; global store architecture</span>
              </div>
            </div>
          </div>
        </section>

        {/* DESIGN DECISIONS */}
        <section className="mb-24 lg:mb-32">
          <div className="rule-b pb-6 mb-14 max-w-4xl">
            <p className="eyebrow text-[#D69589] mb-3">PAGE 3 — THE ESSENCE OF JAPANESE SIMPLICITY</p>
            <h2 className="font-display text-4xl sm:text-5xl text-[#F8E5D7] tracking-tight mb-4">
              The Essence of Japanese Simplicity
            </h2>
            <p className="font-body text-base text-[#F8E5D7]/80 leading-loose">
              The idea evolved into a fragrance collection designed to feel minimal, subtle and effortless — much like Uniqlo itself.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-2">
              {pm.page3DesignDecisions.map((item) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="rule-t py-5 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-baseline"
                >
                  <span className="index-figure text-3xl text-[#D69589] sm:col-span-1">
                    {item.number}.
                  </span>
                  <h3 className="font-serif-display text-2xl text-[#F8E5D7] sm:col-span-4">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-[#F8E5D7]/80 sm:col-span-7 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
              <div className="rule-b" />
            </div>

            <div className="lg:col-span-4 lg:col-start-9 lg:sticky lg:top-24">
              <div className="plate p-2">
                <img
                  src="/portfolio-assets/Screenshot 2026-09-15 at 7.50.52 PM.png"
                  alt="4 Variants Minimalist Bottle Packaging"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="font-mono-code text-xs font-bold text-[#F8E5D7] text-center mt-3">
                HANA · KAZE · MIZU · SORA
              </p>
              <p className="plate-caption text-center">Flower · Wind · Water · Sky</p>
            </div>
          </div>
        </section>

        {/* STRATEGY */}
        <section className="mb-24 lg:mb-32">
          <div className="rule-b pb-6 mb-14 max-w-4xl">
            <p className="eyebrow text-[#D69589] mb-3">PAGE 4 — BRINGING THE CONCEPT TO LIFE</p>
            <h2 className="font-display text-4xl sm:text-5xl text-[#F8E5D7] tracking-tight mb-4">
              Bringing the Concept to Life
            </h2>
            <p className="font-body text-base text-[#F8E5D7]/80 leading-loose">
              We presented the fragrance concept, explained the product and invited students to experience the fragrances themselves.
            </p>
          </div>

          <div className="space-y-12">
            <div className="rule-t pt-8 max-w-3xl">
              <p className="eyebrow text-[#D69589] mb-4">THE PRODUCT PITCH</p>
              <p className="rule-l border-[#D69589] pl-6 font-body text-sm text-[#F8E5D7]/85 leading-loose">
                {pm.page4Strategy.stp}
              </p>
            </div>

            <div className="rule-t pt-8">
              <div className="flex flex-wrap items-baseline justify-between gap-3 mb-6">
                <p className="eyebrow text-[#D69589]">PRODUCT PITCH &amp; AUDIENCE INTERACTION</p>
                <p className="plate-caption">COLLEGE PRODUCT-PITCH ACTIVITY</p>
              </div>
              <div className="plate max-w-3xl">
                <img
                  src="/portfolio-assets/Screenshot 2026-09-15 at 8.11.17 PM.png"
                  alt="Strategic 7Ps and Matrix Mapping"
                  className="w-full h-auto object-contain max-h-72 mx-auto"
                />
              </div>
            </div>

            <div className="rule-t pt-8 max-w-3xl">
              <p className="eyebrow text-[#D69589] mb-4">FEEDBACK &amp; REFINEMENT</p>
              <p className="rule-l border-[#D69589] pl-6 font-body text-sm text-[#F8E5D7]/85 leading-loose whitespace-pre-line">
                {pm.page4Strategy.sevenPs}
              </p>
            </div>

            <div className="rule-t pt-8 max-w-3xl">
              <p className="eyebrow text-[#D69589] mb-4">REVIEWS &amp; IMPACT</p>
              <p className="rule-l border-[#D69589] pl-6 font-body text-sm text-[#F8E5D7]/85 leading-loose">
                {pm.page4Strategy.bcg}
              </p>
            </div>
          </div>
        </section>

        {/* IDEA TO IMPACT */}
        <section>
          <div className="rule-b pb-6 mb-14 max-w-4xl">
            <p className="eyebrow text-[#D69589] mb-3">PAGE 05 — WHAT THE PROJECT TAUGHT ME</p>
            <h2 className="font-display text-4xl sm:text-5xl text-[#F8E5D7] tracking-tight mb-3">
              {pm.page5IdeaToImpact.headline}
            </h2>
            <p className="plate-caption">{pm.page5IdeaToImpact.subheadline}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12 mb-16">
            {pm.page5IdeaToImpact.learnings.map((item) => (
              <div key={item.num} className="rule-t pt-6">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="index-figure text-4xl text-[#D69589]">{item.num}</span>
                  <span className="eyebrow text-[#A38D89]">{item.name}</span>
                </div>
                <p className="font-body text-sm text-[#F8E5D7]/85 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="rule-t pt-8 mb-16">
            <p className="eyebrow text-[#D69589] mb-5">SKILLS DEVELOPED</p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              {pm.page5IdeaToImpact.skillsDeveloped.map((skill, sIdx) => (
                <span key={sIdx} className="plate-caption text-[#F8E5D7] inline-flex items-center gap-3">
                  <span className="text-[#D69589]">●</span>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rule-t pt-10 flex justify-end">
            <Link
              to="/projects/visual-merchandising"
              className="inline-flex items-center gap-3 eyebrow text-[#F8E5D7] editorial-link"
            >
              <span>Next Project: Cover Story →</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};