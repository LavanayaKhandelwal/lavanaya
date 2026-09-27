import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { ProjectHero } from '../components/ProjectHero';
import { ProjectSectionHeader } from '../components/ProjectSectionHeader';
import { portfolioData } from '../data/portfolioData';

/**
 * INTERNSHIP — KEY LEARNINGS
 *
 * The synthesis page for the Aadiya Jewels internship, on the same light
 * system as the internship overview and the project pages.
 */
export const InternshipLearningsPage: React.FC = () => {
  const { internship } = portfolioData;

  return (
    <div className="min-h-screen pb-16 lg:pb-24 bg-[#F9F8F2]">
      {/* COVER — full-bleed hero, image spans the entire viewport width */}
      <ProjectHero
        image="/portfolio-assets/f54639f8-2182-461e-bc6b-63ce3787f763.jpg"
        alt="Aadiya Jewels reel still — jewellery styled and shot for social content"
        eyebrow="INTERNSHIP SYNTHESIS"
        pageLabel="PAGE 2"
        title="Key Learnings"
        intro="Create, plan, present and execute — the four working principles I carried out of my digital content and e-commerce internship at Aadiya Jewels."
      />

      <div className="px-5 sm:px-8 lg:px-12">
        <div className="rule-b-light py-6 mb-20 lg:mb-28 flex flex-wrap items-center justify-between gap-6 font-mono-code text-xs">
          <div className="flex items-center gap-2">
            <Link to="/internship/experience" className="inline-flex items-center gap-2 eyebrow text-[#705955] hover:text-[#3E2723]">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>BACK TO INTERNSHIP</span>
            </Link>
          </div>
          <span className="eyebrow text-[#705955]">AADIYA JEWELS // 4 LEARNING OUTCOMES</span>
        </div>

        {/* 4 LEARNING OUTCOMES */}
        <section className="mb-24 lg:mb-32">
          <ProjectSectionHeader eyebrow="THE FOUR LEARNING OUTCOMES" title="What I Carried Forward" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {internship.learningOutcomes.map((lo, idx) => (
              <motion.div
                key={lo.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (idx % 2) * 0.06 }}
                className="rule-t-light pt-10"
              >
                <div className="flex items-baseline justify-between mb-6">
                  <span className="index-figure text-6xl text-[#705955]/50">{lo.number}</span>
                  <span className="plate-caption-light">AADIYA JEWELS</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl text-[#3E2723] mb-4">
                  {lo.title}
                </h2>

                <p className="font-body text-base text-[#3E2723]/80 leading-loose">
                  {lo.desc}
                </p>

                <div className="rule-t-light mt-8 pt-4 font-mono-code text-xs text-[#705955] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D69589] flex-shrink-0" />
                  <span>Verified in production &amp; store management</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Bottom pagination */}
        <div className="rule-t-light pt-6 flex flex-wrap items-center justify-between gap-6">
          <Link
            to="/internship/experience"
            className="inline-flex items-center gap-2 eyebrow text-[#3E2723] editorial-link"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Internship Experience</span>
          </Link>

          <Link
            to="/projects/marketing"
            className="inline-flex items-center gap-3 eyebrow text-[#3E2723] editorial-link"
          >
            <span>Proceed to Project 1 (Marketing Management)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
