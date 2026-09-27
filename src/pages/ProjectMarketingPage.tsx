import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { MappingOpportunitySection } from '../components/marketing/MappingOpportunitySection';
import { ConceptToLifeSection } from '../components/marketing/ConceptToLifeSection';
import { ProjectLearnedSection } from '../components/marketing/ProjectLearnedSection';
import { portfolioData } from '../data/portfolioData';

export const ProjectMarketingPage: React.FC = () => {
  const { projectMarketing: pm } = portfolioData;

  return (
    <div className="min-h-screen pt-0 pb-16 lg:pb-24 bg-[#F9F8F2]">
      {/* COVER — full-bleed hero, image spans the entire viewport width */}
      <section className="mb-14 lg:mb-20">
        <div className="relative flex h-[75svh] min-h-[560px] max-h-[1100px] items-end overflow-hidden sm:min-h-[620px] lg:h-[100svh] lg:min-h-[640px] lg:items-center">
          <img
            src="/portfolio-assets/project-marketing-hero.jpg"
            alt="UNIQLO LifeWear fragrance product family staged against Japanese store architecture"
            className="absolute inset-0 h-full w-full object-cover object-[52%_45%] lg:object-center"
            loading="eager"
            fetchPriority="high"
          />
          {/* Scrims: cream wash so the headline reads as brown ink on light, product family stays clear on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F9F8F2]/95 via-[#F9F8F2]/78 to-[#F9F8F2]/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F9F8F2] via-[#F9F8F2]/45 to-transparent lg:bg-gradient-to-t lg:from-[#F9F8F2]/70 lg:via-transparent lg:to-transparent" />

          {/* Home button — overlaid on the hero background */}
          <div className="absolute inset-x-0 top-0 z-10 bg-gradient-to-b from-[#F9F8F2]/85 to-transparent px-4 pt-5 pb-6 sm:px-6 lg:px-8">
            <Link to="/" className="inline-flex items-center gap-2 eyebrow text-[#705955] hover:text-[#3E2723]">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>HOME</span>
            </Link>
          </div>

          <div className="relative w-full px-4 pb-12 pt-14 sm:px-6 lg:px-8 lg:py-16">
            <div className="max-w-xl space-y-5 lg:max-w-[44ch]">
              <p className="eyebrow text-[#705955] border-l-2 border-[#D69589] pl-4">
                MARKETING MANAGEMENT PROJECT
              </p>

              <p className="eyebrow text-[#705955] border-l-2 border-[#D69589] pl-4">
                PAGE 1
              </p>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#3E2723] leading-[1] tracking-tight drop-shadow-[0_2px_16px_rgba(249,248,242,0.9)]">
                A NEW DIMENSION OF LIFEWEAR
              </h1>

              <p className="font-body text-sm sm:text-base text-[#3E2723]/80 leading-loose">
                The project focused on taking an established fashion brand into a new product category. We chose Uniqlo and explored how its LifeWear philosophy could be extended beyond apparel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 2 — MAPPING THE OPPORTUNITY */}
      <div className="px-5 sm:px-8 lg:px-12">
        <MappingOpportunitySection />

        {/* DESIGN DECISIONS — blush band, mirroring the home page's section rhythm */}
        <section className="bg-[#FADBD9] -mx-5 sm:-mx-8 lg:-mx-12 px-5 sm:px-8 lg:px-12 py-16 lg:py-20 mb-16 lg:mb-20">
          <div className="rule-b-light pb-6 mb-14 max-w-4xl">
            <p className="eyebrow text-[#705955] mb-3">PAGE 3 — THE ESSENCE OF JAPANESE SIMPLICITY</p>
            <h2 className="font-display text-4xl sm:text-5xl text-[#3E2723] tracking-tight mb-4">
              The Essence of Japanese Simplicity
            </h2>
            <p className="font-body text-base text-[#3E2723]/80 leading-loose">
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
                  className="rule-t-light py-5 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-baseline"
                >
                  <span className="index-figure text-3xl text-[#705955]/60 sm:col-span-1">
                    {item.number}.
                  </span>
                  <h3 className="font-serif-display text-2xl text-[#3E2723] sm:col-span-4">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-[#3E2723]/80 sm:col-span-7 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
              <div className="rule-b-light" />
            </div>

            <div className="lg:col-span-4 lg:col-start-9 lg:sticky lg:top-24">
              <div className="plate-light p-2">
                <img
                  src="/portfolio-assets/Screenshot 2026-09-15 at 7.50.52 PM.png"
                  alt="4 Variants Minimalist Bottle Packaging"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="font-mono-code text-xs font-bold text-[#3E2723] text-center mt-3">
                HANA · KAZE · MIZU · SORA
              </p>
              <p className="plate-caption-light text-center">Flower · Wind · Water · Sky</p>
            </div>
          </div>
        </section>

        {/* PAGE 4 — BRINGING THE CONCEPT TO LIFE */}
        <section className="mb-24 lg:mb-32">
          <ConceptToLifeSection />
        </section>

        {/* PAGE 05 — WHAT THE PROJECT TAUGHT ME */}
        <ProjectLearnedSection />
      </div>
    </div>
  );
};
