import React from 'react';
import { motion } from 'motion/react';
import { ProjectHero } from '../components/ProjectHero';
import { MappingOpportunitySection } from '../components/marketing/MappingOpportunitySection';
import { ConceptToLifeSection } from '../components/marketing/ConceptToLifeSection';
import { ProjectLearnedSection } from '../components/marketing/ProjectLearnedSection';
import { SlidePhoto } from '../components/SlidePhoto';
import { portfolioData } from '../data/portfolioData';

export const ProjectMarketingPage: React.FC = () => {
  const { projectMarketing: pm } = portfolioData;

  return (
    <div className="min-h-screen pt-0 pb-16 lg:pb-24 bg-[#F9F8F2]">
      {/* COVER — full-bleed hero, image spans the entire viewport width */}
      <ProjectHero
        image="/portfolio-assets/project-marketing-hero.jpg"
        alt="UNIQLO LifeWear fragrance product family staged against Japanese store architecture"
        eyebrow="MARKETING MANAGEMENT PROJECT"
        pageLabel="PAGE 1"
        title={'A NEW DIMENSION\nOF LIFEWEAR'}
        subtitle="UNIQLO X FRAGRANCES"
        intro={pm.page1And2.context.split('\n\n')[0]}
        introClassName="text-justify"
        imageClassName="object-[52%_45%] lg:object-center"
      />

      {/* PAGE 2 — MAPPING THE OPPORTUNITY */}
      <div className="px-5 sm:px-8 lg:px-12">
        <MappingOpportunitySection />

        {/* PAGE 3 — THE ESSENCE OF JAPANESE SIMPLICITY */}
        <section className="bg-[#FADBD9] -mx-5 sm:-mx-8 lg:-mx-12 px-5 sm:px-8 lg:px-12 pt-16 lg:pt-20 pb-10 lg:pb-12">
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
                <SlidePhoto
                  src="/portfolio-assets/03_fragrance_variants.jpg"
                  alt="The four minimalist bottle variants — Hana, Kaze, Mizu and Sora"
                  label="Fragrance variants — Hana Kaze Mizu Sora"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="plate-light p-2 mt-8">
                <SlidePhoto
                  src="/portfolio-assets/03_fragrance_variants_detail.jpg"
                  alt="Close detail of the Hana, Kaze, Mizu and Sora fragrance bottle range"
                  label="Variant range — Hana Kaze Mizu Sora"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PAGE 04 — BRINGING THE CONCEPT TO LIFE */}
        <ConceptToLifeSection />

        {/* PAGE 05 — WHAT THE PROJECT TAUGHT ME */}
        <ProjectLearnedSection />
      </div>
    </div>
  );
};
