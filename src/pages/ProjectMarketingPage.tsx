import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, CheckCircle2, Target, Lightbulb, Compass, Award, Image as ImageIcon } from 'lucide-react';
import { FlowerMark, WashiTape } from '../components/CustomDoodles';
import { portfolioData } from '../data/portfolioData';

export const ProjectMarketingPage: React.FC = () => {
  const { projectMarketing: pm } = portfolioData;

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb */}
        <div className="flex items-center justify-between font-mono-code text-xs text-[#F8E5D7]/50 pb-4 border-b border-[#A38D89]/10 mb-12">
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

        {/* SECTION: COVER, CONTEXT & BRIEF */}
        <section className="space-y-12 mb-16">
            <div className="bg-[#3E2723] border-[1.5px] border-[#A38D89]/40 rounded-3xl p-8 sm:p-14 paper-shadow-lg relative overflow-hidden">
              <div className="absolute -top-3 right-12">
                <WashiTape color="#D69589" width="w-32" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F4C9D6] border border-[#A38D89] rounded-full text-xs font-mono-code uppercase tracking-widest text-[#3E2723] paper-shadow-sm">
                    <FlowerMark size={14} />
                    <span>PROJECT 1 (MARKETING MANAGEMENT) // PAGE 1 & PAGE 2</span>
                  </div>

                  <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl text-[#F8E5D7] leading-[1.02] tracking-tight">
                    {pm.cover.title}
                  </h1>

                  <p className="font-serif-display text-2xl sm:text-3xl text-[#F8E5D7]/80 italic leading-snug">
                    {pm.cover.subtitle}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#A38D89]/15 font-mono-code text-xs">
                    <div>
                      <span className="text-[#A38D89] block text-[10px] uppercase">BRAND / CLIENT:</span>
                      <span className="font-bold text-[#F8E5D7]">{pm.cover.brand}</span>
                    </div>
                    <div>
                      <span className="text-[#A38D89] block text-[10px] uppercase">DISCIPLINE:</span>
                      <span className="font-bold text-[#F8E5D7]">{pm.cover.discipline}</span>
                    </div>
                    <div>
                      <span className="text-[#A38D89] block text-[10px] uppercase">TIMELINE:</span>
                      <span className="font-bold text-[#F8E5D7]">{pm.cover.timeline}</span>
                    </div>
                  </div>
                </div>

                {/* Fragrance Concept Image Hero */}
                <div className="lg:col-span-5">
                  <div className="bg-[#3E2723] border-[1.5px] border-[#A38D89]/40 rounded-2xl p-4 paper-shadow">
                    <img
                      src="/portfolio-assets/01_UNIQLO_main.jpg"
                      alt="UNIQLO Fragrance Hero Concept"
                      className="w-full h-auto object-cover rounded-xl border border-[#A38D89]/15"
                    />
                    <div className="font-mono-code text-[11px] text-[#F8E5D7]/60 text-center mt-2">
                      UNIQLO LifeWear Fragrance Product Mockup & Identity
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-[#3E2723] border-[1.5px] border-[#A38D89]/40 rounded-3xl paper-shadow">
                <span className="font-mono-code text-xs font-bold uppercase text-[#A38D89] block mb-3">
                  PAGE 1 — CONTEXT & OPPORTUNITY
                </span>
                <p className="font-body text-base text-[#F8E5D7]/85 leading-relaxed mb-6 whitespace-pre-line">
                  {pm.page1And2.context}
                </p>

                {/* Market Trends Chart Image */}
                <div className="rounded-xl overflow-hidden border border-[#A38D89]/20 bg-[#3E2723] p-2">
                  <img
                    src="/portfolio-assets/02_market_trends.jpg"
                    alt="Market Trends Analysis"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  <span className="font-mono-code text-[11px] text-[#A38D89] block mt-2 text-center">
                    Market Analysis & Accessible Fragrance Opportunity Gap
                  </span>
                </div>
              </div>

              <div className="p-8 bg-[#3E2723] border-[1.5px] border-[#A38D89]/40 rounded-3xl paper-shadow flex flex-col justify-between">
                <div>
                  <span className="font-mono-code text-xs font-bold uppercase text-[#A38D89] block mb-3">
                    PAGE 2 — THE STRATEGIC BRIEF
                  </span>
                  <p className="font-body text-base text-[#F8E5D7]/85 leading-relaxed">
                    {pm.page1And2.brief}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#A38D89]/10 font-mono-code text-xs text-[#A38D89] font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D69589]" />
                  <span>Aligned with UNIQLO LifeWear core philosophy & global store architecture</span>
                </div>
              </div>
            </div>
        </section>

        {/* SECTION: DESIGN DECISIONS */}
        <div className="bg-[#3E2723] border-[1.5px] border-[#A38D89]/40 rounded-3xl p-8 sm:p-14 paper-shadow-lg relative mb-16">
            <div className="absolute -top-3 right-12">
              <WashiTape color="#D69589" width="w-28" />
            </div>

            <div className="max-w-4xl mb-8">
              <span className="font-mono-code text-xs font-bold text-[#A38D89] uppercase tracking-widest block mb-2">
                PAGE 3 — THE ESSENCE OF JAPANESE SIMPLICITY
              </span>
              <h2 className="font-serif-display text-3xl sm:text-5xl text-[#F8E5D7] mb-4">
                The Essence of Japanese Simplicity
              </h2>
              <p className="font-body text-base text-[#F8E5D7]/80">
                The idea evolved into a fragrance collection designed to feel minimal, subtle and effortless — much like Uniqlo itself.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
              <div className="lg:col-span-7 space-y-4">
                {pm.page3DesignDecisions.map((item) => (
                  <div
                    key={item.number}
                    className="p-5 bg-[#3E2723] border-[1.5px] border-[#A38D89]/40 rounded-2xl flex flex-col sm:flex-row sm:items-baseline justify-between gap-4"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono-code text-base font-bold text-[#3E2723] bg-[#D69589] w-8 h-8 rounded-full border border-[#A38D89] flex items-center justify-center shrink-0">
                        {item.number}
                      </span>
                      <h3 className="font-serif-display text-2xl text-[#F8E5D7]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="font-body text-sm text-[#F8E5D7]/85 max-w-sm sm:text-right">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* 4 Variants Bottle Packaging Graphic */}
              <div className="lg:col-span-5">
                <div className="bg-[#3E2723] border-[1.5px] border-[#A38D89]/40 rounded-2xl p-4 paper-shadow">
                  <div className="rounded-xl overflow-hidden border border-[#A38D89]/20 bg-[#3E2723] mb-2">
                    <img
                      src="/portfolio-assets/Screenshot 2026-09-15 at 7.50.52 PM.png"
                      alt="4 Variants Minimalist Bottle Packaging"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="font-mono-code text-xs font-bold text-[#F8E5D7] text-center pt-1">
                    HANA · KAZE · MIZU · SORA
                  </div>
                  <div className="font-mono-code text-[11px] text-[#A38D89] text-center">
                    Flower · Wind · Water · Sky
                  </div>
                </div>
              </div>
            </div>

          </div>

        {/* SECTION: STRATEGY & FRAMEWORKS */}
        <div className="bg-[#3E2723] border-[1.5px] border-[#A38D89]/40 rounded-3xl p-8 sm:p-14 paper-shadow-lg relative mb-16">
            <div className="absolute -top-3 right-12">
              <WashiTape color="#D69589" width="w-28" />
            </div>

            <div className="max-w-4xl mb-8">
              <span className="font-mono-code text-xs font-bold text-[#A38D89] uppercase tracking-widest block mb-2">
                PAGE 4 — BRINGING THE CONCEPT TO LIFE
              </span>
              <h2 className="font-serif-display text-3xl sm:text-5xl text-[#F8E5D7] mb-4">
                Bringing the Concept to Life
              </h2>
              <p className="font-body text-base text-[#F8E5D7]/80">
                We presented the fragrance concept, explained the product and invited students to experience the fragrances themselves.
              </p>
            </div>

            <div className="space-y-6 mb-10">
              <div className="p-6 bg-[#3E2723] border border-[#A38D89]/25 rounded-2xl">
                <div className="font-mono-code text-xs font-bold uppercase text-[#F8E5D7] mb-2 pb-1 border-b border-[#A38D89]/15">
                  THE PRODUCT PITCH
                </div>
                <p className="font-body text-sm text-[#F8E5D7]/85 leading-relaxed">
                  {pm.page4Strategy.stp}
                </p>
              </div>

              {/* Marketing Mix Diagram & Framework Visual */}
              <div className="p-6 bg-[#3E2723] border border-[#A38D89]/25 rounded-2xl">
                <div className="font-mono-code text-xs font-bold uppercase text-[#F8E5D7] mb-3 pb-1 border-b border-[#A38D89]/15 flex items-center justify-between">
                  <span>PRODUCT PITCH & AUDIENCE INTERACTION</span>
                  <span className="text-[11px] text-[#A38D89]">COLLEGE PRODUCT-PITCH ACTIVITY</span>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#A38D89]/20 bg-[#3E2723] mb-3">
                  <img
                    src="/portfolio-assets/Screenshot 2026-09-15 at 8.11.17 PM.png"
                    alt="Strategic 7Ps and Matrix Mapping"
                    className="w-full h-auto object-contain max-h-72 mx-auto"
                  />
                </div>
              </div>

              <div className="p-6 bg-[#3E2723] border border-[#A38D89]/25 rounded-2xl">
                <div className="font-mono-code text-xs font-bold uppercase text-[#F8E5D7] mb-2 pb-1 border-b border-[#A38D89]/15">
                  FEEDBACK & REFINEMENT
                </div>
                <p className="font-body text-sm text-[#F8E5D7]/85 leading-relaxed whitespace-pre-line">
                  {pm.page4Strategy.sevenPs}
                </p>
              </div>

              <div className="p-6 bg-[#3E2723] border border-[#A38D89]/25 rounded-2xl">
                <div className="font-mono-code text-xs font-bold uppercase text-[#F8E5D7] mb-2 pb-1 border-b border-[#A38D89]/15">
                  REVIEWS & IMPACT
                </div>
                <p className="font-body text-sm text-[#F8E5D7]/85 leading-relaxed">
                  {pm.page4Strategy.bcg}
                </p>
              </div>
            </div>

          </div>

        {/* SECTION: FROM IDEA TO IMPACT */}
        <div className="bg-[#3E2723] border-[1.5px] border-[#A38D89]/40 rounded-3xl p-8 sm:p-14 paper-shadow-lg relative">
            <div className="absolute -top-3 right-12">
              <WashiTape color="#A38D89" width="w-28" />
            </div>

            <div className="max-w-4xl mb-8">
              <span className="font-mono-code text-xs font-bold text-[#A38D89] uppercase tracking-widest block mb-2">
                PAGE 05 — WHAT THE PROJECT TAUGHT ME
              </span>
              <h2 className="font-serif-display text-3xl sm:text-5xl text-[#F8E5D7] mb-2">
                {pm.page5IdeaToImpact.headline}
              </h2>
              <p className="font-mono-code text-xs text-[#F8E5D7]/60">
                {pm.page5IdeaToImpact.subheadline}
              </p>
            </div>

            {/* 4 LEARNING PILLARS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {pm.page5IdeaToImpact.learnings.map((item) => (
                <div key={item.num} className="p-6 bg-[#3E2723] border border-[#A38D89]/20 rounded-2xl">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-mono-code text-xs font-bold text-[#A38D89]">
                      {item.num}.
                    </span>
                    <h3 className="font-mono-code text-xs font-bold text-[#A38D89] uppercase tracking-wider">
                      {item.name}
                    </h3>
                  </div>
                  <p className="font-body text-sm text-[#F8E5D7]/85 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* SKILLS DEVELOPED */}
            <div className="p-6 bg-[#3E2723] border-[1.5px] border-[#A38D89]/40 rounded-2xl mb-8">
              <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#F8E5D7] mb-3">
                SKILLS DEVELOPED
              </div>
              <div className="flex flex-wrap gap-2">
                {pm.page5IdeaToImpact.skillsDeveloped.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-4 py-2 bg-[#F4C9D6] border border-[#A38D89]/30 rounded-xl font-mono-code text-xs text-[#3E2723] flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D69589]" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-6 border-t border-[#A38D89]/15 font-mono-code text-xs">
              <Link
                to="/projects/visual-merchandising"
                className="bg-[#D69589] text-[#3E2723] px-5 py-2.5 rounded-xl font-bold hover:bg-[#A38D89] cursor-pointer flex items-center gap-1.5"
              >
                <span>Next Project: Cover Story →</span>
              </Link>
            </div>
          </div>
      </div>
    </div>
  );
};
