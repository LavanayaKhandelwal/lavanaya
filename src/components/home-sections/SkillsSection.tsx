import React from 'react';
import { motion } from 'motion/react';
import { RevealWords } from '../TypewriterEyebrow';
import { portfolioData } from '../../data/portfolioData';

/**
 * Skills section.
 *
 * Structure is mirrored from the curio skills section: one heading over a
 * single rule, then one block per skill group split across a 12-column grid
 * (4-col meta / 8-col skill chips), with every skill rendered as a chip that
 * sticker-lifts on hover.
 *
 * Colour, typefaces and copy stay Lavanaya's: blush band, ivory chip paper,
 * espresso ink and umber hairlines.
 */
export const SkillsSection: React.FC = () => {
  const { skills } = portfolioData;

  return (
    <section
      id="skills"
      className="pt-12 lg:pt-16 pb-20 lg:pb-28 bg-[#FADBD9] border-b border-[#705955]/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER — heading over a single hairline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 pb-4 border-b border-[#705955]/15"
        >
          <RevealWords
            words={[{ text: 'Skills &' }, { text: 'Certifications', italic: true }]}
            className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#3E2723]"
          />
        </motion.div>

        {/* SKILL GROUPS — the header hairline rules the first block, so only
            the blocks after it draw a top rule of their own */}
        <div className="grid grid-cols-1 gap-10">
          {skills.categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`relative ${idx !== 0 ? 'border-t border-[#705955]/20 pt-8' : ''}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Meta column */}
                <div className="lg:col-span-4">
                  <span className="index-figure text-2xl text-[#705955]/40 leading-none block text-left lg:text-right mb-3">
                    0{idx + 1}
                  </span>

                  <h3 className="font-serif-display text-3xl sm:text-4xl text-[#3E2723] mb-4 leading-tight">
                    {cat.name}
                  </h3>

                  <p className="font-body text-sm text-[#705955] leading-relaxed">
                    {cat.note}
                  </p>
                </div>

                {/* Skill chips — max-w-full only caps the longest names on
                    narrow screens so they wrap inside the box instead of
                    overflowing; short chips keep their natural size */}
                <div className="lg:col-span-8 flex flex-wrap gap-3">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="max-w-full px-4 py-2.5 bg-[#F9F8F2] rounded-xl border border-[#705955]/20 font-body text-xs sm:text-sm font-semibold uppercase tracking-wide text-[#3E2723] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#705955]/60 hover:shadow-[2px_2px_0px_rgba(112,89,85,0.25)] cursor-default"
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

