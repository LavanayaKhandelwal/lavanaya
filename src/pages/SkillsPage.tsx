import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const SkillsPage: React.FC = () => {
  const { skills } = portfolioData;

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Folio rule */}
        <div className="flex items-center justify-between eyebrow text-[#A38D89] pb-4 rule-b mb-14">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-[#F8E5D7]">HOME</Link>
            <span>/</span>
            <span className="text-[#F8E5D7] font-semibold">SKILLS MATRIX</span>
          </div>
          <span>PRACTICAL &amp; STRATEGIC COMPETENCIES</span>
        </div>

        {/* Intro */}
        <div className="max-w-4xl mb-20 lg:mb-28">
          <p className="eyebrow text-[#D69589] border-l-2 border-[#D69589] pl-4 mb-4">
            DISCIPLINARY PROFICIENCIES
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#F8E5D7] leading-[1] tracking-tight mb-6">
            Skills &amp; Applied Disciplines
          </h1>
          <p className="font-body text-base text-[#F8E5D7]/85 leading-loose max-w-3xl mb-8">
            A skill set built across digital content and e-commerce at Aadiya Jewels, marketing strategy for UNIQLO, visual merchandising for Cover Story, and consumer research for an everyday athleisure start-up.
          </p>
        </div>

        {/* SKILL GROUPS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 mb-24">
          {skills.categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 2) * 0.06 }}
              className={`rule-t pt-8 ${idx > 1 ? 'md:mt-16 lg:mt-24' : ''}`}
            >
              <div className="flex items-baseline justify-between gap-6 mb-8">
                <span className="index-figure text-7xl text-[#A38D89]/30 leading-none">
                  0{idx + 1}
                </span>
                <span className="eyebrow text-[#D69589]">DISCIPLINE 0{idx + 1}</span>
              </div>

              <h2 className="font-serif-display text-3xl text-[#F8E5D7] mb-3 leading-tight">
                {cat.name}
              </h2>

              <p className="plate-caption mb-8">{cat.tag}</p>

              <p className="font-body text-sm text-[#F8E5D7]/75 leading-relaxed mb-8">
                {cat.note}
              </p>

              <div>
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="rule-t flex items-baseline gap-4 py-2.5">
                    <span className="font-mono-code text-[10px] text-[#D69589] w-4 shrink-0">
                      {String(sIdx + 1).padStart(2, '0')}
                    </span>
                    <span className="font-mono-code text-xs text-[#F8E5D7] uppercase tracking-wider">
                      {skill}
                    </span>
                  </div>
                ))}
                <div className="rule-b" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 rule-t pt-10 items-end">
          <div>
            <p className="eyebrow text-[#A38D89] mb-3">NEXT STEP</p>
            <p className="font-serif-display text-2xl sm:text-3xl text-[#F8E5D7]">Inquire for Commissions or Roles</p>
          </div>
          <div className="sm:text-right">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 eyebrow text-[#F8E5D7] editorial-link"
            >
              <span>Proceed to Contact</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};