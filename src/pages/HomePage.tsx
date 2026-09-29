import React from 'react';
import { Link } from 'react-router-dom';
import { motion, MotionConfig } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ProjectCardMedia } from '../components/ProjectCardMedia';
import { TypewriterEyebrow, RevealWords } from '../components/TypewriterEyebrow';
import { SkillsSection } from '../components/home-sections/SkillsSection';
import { ContactSection } from '../components/home-sections/ContactSection';
import { portfolioData } from '../data/portfolioData';

interface HomePageProps {
  onOpenInquiry: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenInquiry }) => {
  const { selectedProjects, internship } = portfolioData;

  const homeProjectTitles: Record<string, string> = {
    'proj-1': 'Uniqlo X Fragnances',
    'proj-2': 'A Future in Bloom',
    'proj-3': 'Athera – Athleisure Wear Brand',
    'proj-4': 'Customer Experience Activation'
  };

  const homeProjectCategories: Record<string, string> = {
    'proj-1': 'New Category Introduction',
    'proj-2': 'Window Display & In-Store Experience',
    'proj-3': 'Brand Concept & Development',
    'proj-4': 'An Experience by Hunkemöller'
  };

  /* Four-up editorial row — all cards aligned top so the four projects read
     as a single index spread. */
  const projectColumns = ['', '', '', ''];

  return (
    <MotionConfig reducedMotion="user">
    <div>
      {/* 1. INTERNSHIP FEATURE CALLOUT */}
      <section className="bg-[#F9F8F2] pt-12 lg:pt-16 pb-12 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-6 pb-8 lg:pt-8 lg:pb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-8 space-y-6"
              >
                <TypewriterEyebrow
                  text="TURNING LEARNING INTO EXPERIENCE"
                  className="eyebrow text-[#705955]"
                />
                <RevealWords
                  words={[
                    { text: internship.company },
                    { text: 'Internship', italic: true },
                  ]}
                  className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1] tracking-tight text-[#3E2723]"
                />
                {/* inline color: .plate-caption is unlayered CSS, so it outranks
                    Tailwind's text-* utilities */}
                <p className="plate-caption tracking-[0.22em]" style={{ color: '#705955' }}>
                  {internship.role}
                </p>
                <p className="font-body text-base leading-loose max-w-2xl" style={{ color: 'rgba(62, 39, 35, 0.8)' }}>
                  {internship.overview}
                </p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-2">
                  {internship.homepageHighlights.map((sk, i) => (
                    <span key={i} className="plate-caption inline-flex items-center gap-3 transition-all duration-200 hover:-translate-y-0.5 cursor-default" style={{ color: '#3E2723' }}>
                      <span className="text-[#D69589]">●</span>
                      {sk}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="lg:col-span-4 flex items-center justify-start lg:justify-end"
              >
                <Link
                  to="/internship/experience"
                  aria-label="View internship experience"
                  className="group flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#F9F8F2] text-[#3E2723] border-[1.5px] border-[#3E2723] hover:bg-[#3E2723] hover:text-[#F9F8F2] transition-all duration-300 hover:-translate-y-1 hover:rotate-6 hover:shadow-[4px_4px_0px_rgba(214,149,137,0.5)]"
                >
                  <ArrowRight className="w-10 h-10 sm:w-12 sm:h-12 group-hover:translate-x-1.5 transition-transform duration-300" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED PROJECTS — EDITORIAL INDEX */}
      <section className="pt-12 lg:pt-16 pb-24 lg:pb-32 bg-[#3E2723]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 lg:mb-14">
            <RevealWords
              words={[{ text: 'Selected' }, { text: 'Projects', italic: true }]}
              className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1] tracking-tight text-[#F8E5D7]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-8 gap-y-14 items-stretch">
            {selectedProjects.map((proj, col) => (
              <motion.article
                key={proj.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: col * 0.06 }}
                className={`rule-t pt-8 group flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:border-[#D69589]/50 ${projectColumns[col] ?? ''}`}
                style={{ borderColor: 'rgba(163, 141, 137, 0.3)' }}
              >
                {/* 01 — Number row: fixed height so 01/02/03/04 sit on one line */}
                <div className="flex items-center justify-between gap-x-3 mb-6 min-h-[4rem] shrink-0">
                  <span className="index-figure text-6xl text-[#A38D89]/40 leading-none transition-colors duration-300 group-hover:text-[#D69589]/70">
                    {proj.number}
                  </span>
                  <span className="eyebrow text-[#D69589] shrink-0">PROJECT {proj.number}</span>
                </div>

                {/* 02 — Category + Title: reserved heights so shorter text gets
                    padded to match the tallest card, keeping images aligned */}
                <div className="mb-6 shrink-0">
                  <p className="plate-caption mb-2 min-h-[2.1rem] flex items-end leading-[1.5]">
                    {homeProjectCategories[proj.id] ?? proj.category}
                  </p>
                  <h3 className="font-serif-display text-2xl xl:text-3xl text-[#F8E5D7] leading-tight min-h-[3.75rem] xl:min-h-[4.75rem] flex items-start text-balance">
                    {homeProjectTitles[proj.id] ?? proj.title}
                  </h3>
                </div>

                <ProjectCardMedia
                  image={proj.image}
                  alt={proj.title}
                  label={`Project ${proj.number} — ${homeProjectTitles[proj.id] ?? proj.title}`}
                />

                <div className="mt-6 space-y-5">
                  <div className="rule-t pt-4 transition-colors duration-300 group-hover:border-[#D69589]/40" style={{ borderColor: 'rgba(163, 141, 137, 0.3)' }}>
                    <span className="eyebrow text-[#D69589] block mb-2">Brief</span>
                    <p className="font-body text-sm text-[#F8E5D7]/80 leading-relaxed whitespace-pre-line">
                      {proj.brief}
                    </p>
                  </div>
                  <div className="rule-t pt-4 transition-colors duration-300 group-hover:border-[#D69589]/40" style={{ borderColor: 'rgba(163, 141, 137, 0.3)' }}>
                    <span className="eyebrow text-[#D69589] block mb-2">Research</span>
                    <p className="font-body text-sm text-[#F8E5D7]/80 leading-relaxed whitespace-pre-line">
                      {proj.research}
                    </p>
                  </div>
                  <div className="rule-t pt-4 transition-colors duration-300 group-hover:border-[#D69589]/40" style={{ borderColor: 'rgba(163, 141, 137, 0.3)' }}>
                    <span className="eyebrow text-[#D69589] block mb-2">Contribution</span>
                    <p className="font-body text-sm text-[#F8E5D7]/80 leading-relaxed whitespace-pre-line">
                      {proj.contribution}
                    </p>
                  </div>
                  <div className="rule-t pt-4 transition-colors duration-300 group-hover:border-[#D69589]/40" style={{ borderColor: 'rgba(163, 141, 137, 0.3)' }}>
                    <span className="eyebrow text-[#D69589] block mb-2">Learning</span>
                    <p className="font-body text-sm text-[#F8E5D7]/80 leading-relaxed whitespace-pre-line">
                      {proj.keyLearnings}
                    </p>
                  </div>
                </div>

                <div className="mt-auto pt-8 shrink-0">
                  <Link
                    to={`/projects/${proj.slug}`}
                    className="inline-flex items-center gap-3 eyebrow text-[#F8E5D7] editorial-link group-hover:text-[#D69589] transition-colors duration-300"
                  >
                    <span>Read Complete Project</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SKILLS SECTION */}
      <SkillsSection />

      {/* 4. CONTACT ME SECTION */}
      <ContactSection />
    </div>
    </MotionConfig>
  );
};