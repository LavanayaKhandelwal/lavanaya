import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { FlowerMark, WashiTape } from '../components/CustomDoodles';
import { portfolioData } from '../data/portfolioData';

export const SkillsPage: React.FC = () => {
  const { skills } = portfolioData;

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb */}
        <div className="flex items-center justify-between font-mono-code text-xs text-[#F8E5D7]/50 pb-4 border-b border-[#A38D89]/10 mb-12">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-[#F8E5D7]">HOME</Link>
            <span>/</span>
            <span className="text-[#F8E5D7] font-semibold">SKILLS MATRIX</span>
          </div>
          <span>PRACTICAL & STRATEGIC COMPETENCIES</span>
        </div>

        {/* Hero Title */}
        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F8E5D7] border border-[#A38D89] rounded-full text-xs font-mono-code uppercase tracking-widest text-[#F8E5D7] mb-4 paper-shadow-sm">
            <FlowerMark size={14} />
            <span>DISCIPLINARY PROFICIENCIES</span>
          </div>

          <h1 className="font-serif-display text-4xl sm:text-6xl text-[#F8E5D7] leading-[1.05] tracking-tight mb-4">
            Skills & Applied Disciplines
          </h1>

          <p className="font-body text-base text-[#F8E5D7]/85 leading-relaxed max-w-3xl mb-8">
            A skill set built across digital content and e-commerce at Aadiya Jewels, marketing strategy for UNIQLO, visual merchandising for Cover Story, and consumer research for an everyday athleisure start-up.
          </p>
        </div>

        {/* SKILL GROUPS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skills.categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#F8E5D7] border-[1.5px] border-[#A38D89] rounded-3xl p-6 sm:p-8 paper-shadow-lg relative"
            >
              <div className="absolute -top-3 right-8">
                <WashiTape color={cat.color} width="w-24" />
              </div>

              <div className="flex items-center justify-between font-mono-code text-xs text-[#F8E5D7]/50 mb-3 pb-2 border-b border-[#A38D89]/10">
                <span className="font-bold text-[#F8E5D7]">DISCIPLINE 0{idx + 1}</span>
                <span className="bg-[#F8E5D7] px-2 py-0.5 rounded border border-[#A38D89]/20">{cat.tag}</span>
              </div>

              <h2 className="font-serif-display text-2xl text-[#F8E5D7] mb-3">
                {cat.name}
              </h2>

              <p className="font-body text-sm text-[#F8E5D7]/75 leading-relaxed mb-6">
                {cat.note}
              </p>

              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3.5 py-2 bg-[#F8E5D7] rounded-xl border border-[#A38D89]/15 font-mono-code text-xs font-bold text-[#F8E5D7]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-8 bg-[#F8E5D7] border-[1.5px] border-[#A38D89] rounded-2xl gap-4">
          <div>
            <div className="font-mono-code text-xs uppercase text-[#F8E5D7]/60">NEXT STEP</div>
            <div className="font-serif-display text-2xl text-[#F8E5D7]">Inquire for Commissions or Roles</div>
          </div>
          <Link
            to="/contact"
            className="flex items-center gap-2 px-6 py-3 bg-[#3E2723] text-[#F8E5D7] rounded-xl font-mono-code text-xs uppercase tracking-wider hover:bg-[#A38D89] transition-colors"
          >
            <span>Proceed to Contact</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
