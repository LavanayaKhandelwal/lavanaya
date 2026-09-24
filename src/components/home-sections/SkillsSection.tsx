import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 lg:py-32 bg-[#F4C9D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="rule-b pb-6 mb-16 lg:mb-24 flex flex-col sm:flex-row sm:items-end justify-between gap-4" style={{ borderColor: 'rgba(112, 89, 85, 0.35)' }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="eyebrow text-[#705955] mb-3">SKILLS</p>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1] tracking-tight text-[#3E2723]">
              Skills &{' '}
              <span className="font-serif-display italic font-normal text-[#D69589]">
                Applied Disciplines
              </span>
            </h2>
          </motion.div>
          <p className="eyebrow text-[#705955]">Sections 01 — 04</p>
        </div>

        {/* SKILL GROUPS */}
        <div>
          {skills.categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`py-14 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start ${idx !== 0 ? 'rule-t' : ''}`}
              style={idx !== 0 ? { borderColor: 'rgba(112, 89, 85, 0.35)' } : undefined}
            >
              {/* Meta column */}
              <div className="lg:col-span-4 lg:pt-4">
                <div className="flex items-baseline gap-8 mb-6">
                  <span className="index-figure text-8xl text-[#705955]/40 leading-none">
                    0{idx + 1}
                  </span>
                  <span className="eyebrow text-[#D69589]">{cat.tag}</span>
                </div>

                <h3 className="font-serif-display text-3xl sm:text-4xl text-[#3E2723] mb-5 leading-tight">
                  {cat.name}
                </h3>

                <p className="font-body text-sm text-[#705955] leading-relaxed">
                  {cat.note}
                </p>
              </div>

              {/* Skills index */}
              <div className="lg:col-span-8">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="rule-t flex items-baseline gap-6 py-3.5 group" style={{ borderColor: 'rgba(112, 89, 85, 0.3)' }}>
                    <span className="font-mono-code text-xs text-[#D69589] w-4 shrink-0">
                      {String(sIdx + 1).padStart(2, '0')}
                    </span>
                    <span className="font-mono-code text-xs sm:text-sm text-[#3E2723] uppercase tracking-wider group-hover:text-[#D69589] transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
                <div className="rule-b" style={{ borderColor: 'rgba(112, 89, 85, 0.35)' }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};