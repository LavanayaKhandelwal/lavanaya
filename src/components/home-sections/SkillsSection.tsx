import React from 'react';
import { motion } from 'motion/react';
import { FlowerMark, WashiTape } from '../CustomDoodles';
import { portfolioData } from '../../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 lg:py-28 bg-[#F8E5D7] border-b border-[#3E2723]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-4 border-b border-[#3E2723]/10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#3E2723]/60 mb-2">
              <FlowerMark className="w-3.5 h-3.5 text-[#3E2723]" />
              <span>SKILLS</span>
            </div>
            <h2 className="relative z-10 font-serif-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#3E2723]">
              Skills &{' '}
              <span className="relative inline-block whitespace-nowrap">
                <span className="absolute inset-0 -inset-x-2 bottom-1 bg-[#A38D89] -rotate-1 rounded-sm -z-10 opacity-90 border-b-2 border-[#3E2723]/20" />
                <span className="relative z-10 italic font-serif-display font-normal">
                  Applied Disciplines
                </span>
              </span>
            </h2>
          </motion.div>
        </div>

        {/* SKILL GROUPS */}
        <div className="grid grid-cols-1 gap-8">
          {skills.categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-[#F4C9D6] border-[1.5px] border-[#3E2723] rounded-3xl p-6 sm:p-10 paper-shadow-lg relative"
            >
              <div className="absolute -top-3 right-8">
                <WashiTape color={cat.color} width="w-24" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-4">
                  <div className="mb-4 pb-2 border-b border-[#3E2723]/10">
                    <span className="bg-[#F8E5D7] px-2 py-0.5 rounded border border-[#3E2723]/20 font-mono-code text-xs font-bold text-[#3E2723]">{cat.tag}</span>
                  </div>

                  <h3 className="font-serif-display text-3xl sm:text-4xl text-[#3E2723] mb-4 leading-tight">
                    {cat.name}
                  </h3>

                  <p className="font-body text-sm text-[#3E2723]/75 leading-relaxed">
                    {cat.note}
                  </p>
                </div>

                <div className="lg:col-span-8 flex flex-wrap gap-3">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-4 py-2.5 bg-[#F8E5D7] rounded-xl border border-[#3E2723]/15 font-mono-code text-xs sm:text-sm font-bold text-[#3E2723]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};