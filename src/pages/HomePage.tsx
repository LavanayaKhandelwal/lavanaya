import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ProjectCardMedia } from '../components/ProjectCardMedia';
import { SkillsSection } from '../components/home-sections/SkillsSection';
import { ContactSection } from '../components/home-sections/ContactSection';
import { portfolioData } from '../data/portfolioData';

interface HomePageProps {
  onOpenInquiry: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenInquiry }) => {
  const { selectedProjects, internship, student } = portfolioData;

  const heroSpecializations = [
    'Fashion Marketing',
    'Visual Merchandising',
    'Content Creation',
    'Photography'
  ];

  const homeProjectTitles: Record<string, string> = {
    'proj-1': 'A New Dimension of LifeWear',
    'proj-2': 'A Future in Bloom',
    'proj-3': 'Everyday Athleisure'
  };

  const homeProjectCategories: Record<string, string> = {
    'proj-3': 'Fashion Start-Up & MVP'
  };

  const projectColumns = ['lg:pt-10', 'lg:pt-24', 'lg:pt-40'];

  return (
    <div>
      {/* 1. MASTHEAD — ABOUT */}
      <section
        id="about"
        className="relative pt-16 pb-24 lg:pt-28 lg:pb-36 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Masthead rule */}
          <div className="rule-b pb-5 mb-14 lg:mb-20 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <p className="eyebrow text-[#A38D89]">
              {student.degree} — {student.institution}
            </p>
            <p className="eyebrow text-[#A38D89]">Folio · {student.year}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            {/* Text column */}
            <div className="lg:col-span-7 relative z-10">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-[13vw] sm:text-7xl lg:text-[92px] leading-[0.98] tracking-tight text-[#F8E5D7] max-w-4xl"
              >
                {student.name}&apos;s{' '}
                <span className="font-serif-display italic font-normal text-[#F4C9D6]">
                  Portfolio
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-10 max-w-xl space-y-5 font-body text-base text-[#F8E5D7]/85 leading-loose"
              >
                <p>
                  From business thinking to fashion, creativity and visual storytelling.
                </p>
                <p>
My journey began with a background in Business Administration, where I developed an understanding of businesses and consumers. I then explored Digital Marketing, which introduced me to the creative side of business. My growing interest in fashion eventually led me to pursue a Master’s in Fashion &amp; Lifestyle Business Management at Pearl Academy.
                </p>
                <p>
                  Today, I’m drawn to the creative, visual and marketing side of fashion — where creativity meets consumer understanding and brand experience.
                </p>
              </motion.div>

              <p className="font-serif-display text-3xl sm:text-4xl text-[#F8E5D7] italic leading-snug mt-12 border-l-2 border-[#D69589] pl-6">
                Curious by nature, creative by instinct.
              </p>

              {/* Specializations index */}
              <div className="mt-12 max-w-xl">
                <div className="eyebrow text-[#A38D89] mb-3">Selected Specializations</div>
                <div className="rule-b">
                  {heroSpecializations.map((spec, i) => (
                    <div key={i} className={`rule-t ${i === 0 ? '' : ''} flex items-baseline gap-4 py-2.5`}>
                      <span className="font-mono-code text-xs text-[#D69589] w-6 shrink-0">
                        0{i + 1}
                      </span>
                      <span className="font-mono-code text-xs sm:text-sm text-[#F8E5D7] uppercase tracking-wider">
                        {spec}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Portrait plate — deliberately offset */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 lg:col-start-8"
            >
              <div className="plate lg:-mt-8 lg:mr-[-1.5rem] xl:mr-[-3.5rem]">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src="/portfolio-assets/IMG_2187.jpg"
                    alt="Portrait — curated creative exploration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between gap-4">
                <span className="plate-caption">
                  Plate 01 — Portrait
                </span>
                <span className="plate-caption text-[#F8E5D7]">
                  Fashion Marketing &amp; Visual Merchandising
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED PROJECTS — EDITORIAL INDEX */}
      <section className="py-24 lg:py-32 bg-[#F4C9D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rule-b pb-6 mb-16 lg:mb-24 flex flex-col sm:flex-row sm:items-end justify-between gap-4" style={{ borderColor: 'rgba(112, 89, 85, 0.3)' }}>
            <div>
              <p className="eyebrow text-[#705955] mb-3">Selected Works</p>
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1] tracking-tight text-[#3E2723]">
                Selected{' '}
                <span className="font-serif-display italic font-normal text-[#D69589]">
                  Projects
                </span>
              </h2>
            </div>
            <p className="eyebrow text-[#705955]">FOLIO: 001–003 // CASE STUDIES</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 lg:gap-y-14">
            {selectedProjects.map((proj, col) => (
              <motion.article
                key={proj.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: col * 0.06 }}
                className={`rule-t pt-8 group ${projectColumns[col] ?? ''}`}
                style={{ borderColor: 'rgba(112, 89, 85, 0.3)' }}
              >
                <div className="flex items-baseline justify-between mb-6">
                  <span className="index-figure text-7xl text-[#705955]/40 leading-none">
                    {proj.number}
                  </span>
                  <span className="eyebrow text-[#D69589]">PROJECT {proj.number}</span>
                </div>

                <div className="mb-6">
                  <p className="plate-caption mb-2" style={{ color: '#705955' }}>
                    {homeProjectCategories[proj.id] ?? proj.category}
                  </p>
                  <h3 className="font-serif-display text-3xl text-[#3E2723] leading-tight">
                    {homeProjectTitles[proj.id] ?? proj.title}
                  </h3>
                </div>

                <ProjectCardMedia
                  image={proj.image}
                  alt={proj.title}
                  ratio="aspect-[4/5]"
                />

                <div className="mt-8 space-y-6">
                  <div className="rule-t pt-4" style={{ borderColor: 'rgba(112, 89, 85, 0.3)' }}>
                    <span className="eyebrow text-[#D69589] block mb-2">Brief</span>
                    <p className="font-body text-sm text-[#3E2723]/80 leading-relaxed whitespace-pre-line">
                      {proj.brief}
                    </p>
                  </div>
                  <div className="rule-t pt-4" style={{ borderColor: 'rgba(112, 89, 85, 0.3)' }}>
                    <span className="eyebrow text-[#D69589] block mb-2">Research</span>
                    <p className="font-body text-sm text-[#3E2723]/80 leading-relaxed whitespace-pre-line">
                      {proj.research}
                    </p>
                  </div>
                  <div className="rule-t pt-4" style={{ borderColor: 'rgba(112, 89, 85, 0.3)' }}>
                    <span className="eyebrow text-[#D69589] block mb-2">Contribution</span>
                    <p className="font-body text-sm text-[#3E2723]/80 leading-relaxed whitespace-pre-line">
                      {proj.contribution}
                    </p>
                  </div>
                  <div className="rule-t pt-4" style={{ borderColor: 'rgba(112, 89, 85, 0.3)' }}>
                    <span className="eyebrow text-[#D69589] block mb-2">Learning</span>
                    <p className="font-body text-sm text-[#3E2723]/80 leading-relaxed whitespace-pre-line">
                      {proj.keyLearnings}
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    to={`/projects/${proj.slug}`}
                    className="inline-flex items-center gap-3 eyebrow text-[#3E2723] editorial-link group-hover:text-[#D69589] transition-colors"
                  >
                    <span>Read Complete Project</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTERNSHIP FEATURE CALLOUT */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rule-b pt-12 pb-12 lg:pt-16 lg:pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-8 space-y-6">
                <p className="eyebrow text-[#D69589]">Turning Learning Into Experience</p>
                <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1] tracking-tight text-[#F8E5D7]">
                  {internship.company}{' '}
                  <span className="font-serif-display italic font-normal text-[#F4C9D6]">
                    Internship
                  </span>
                </h2>
                <p className="plate-caption text-[#F8E5D7] tracking-[0.22em]">
                  {internship.role}
                </p>
                <p className="font-body text-base text-[#F8E5D7]/80 leading-loose max-w-2xl">
                  {internship.overview}
                </p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-2">
                  {internship.page1SocialMedia.skillsApplied.slice(0, 5).map((sk, i) => (
                    <span key={i} className="plate-caption text-[#F8E5D7] inline-flex items-center gap-3">
                      <span className="text-[#D69589]">●</span>
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <Link
                  to="/internship/experience"
                  aria-label="View internship experience"
                  className="group inline-flex items-center gap-5 border-t-4 border-[#F4C9D6] pt-6"
                >
                  <ArrowRight className="w-10 h-10 text-[#F8E5D7] transition-transform group-hover:translate-x-1.5" />
                  <span className="index-figure text-6xl text-[#A38D89]/40">01</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SKILLS SECTION */}
      <SkillsSection />

      {/* 5. CONTACT ME SECTION */}
      <ContactSection />
    </div>
  );
};