import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { WashiTape } from '../components/CustomDoodles';
import { ProjectCardMedia } from '../components/ProjectCardMedia';
import { SkillsSection } from '../components/home-sections/SkillsSection';
import { ContactSection } from '../components/home-sections/ContactSection';
import { portfolioData } from '../data/portfolioData';

interface HomePageProps {
  onOpenInquiry: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenInquiry }) => {
  const { selectedProjects, internship } = portfolioData;

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

  return (
    <div>
      {/* 1. HERO / ABOUT SECTION */}
      <section
        id="about"
        className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden bg-graph-paper border-b border-[#A38D89]/15"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Combined Hero + About: Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 text-center lg:text-left flex flex-col relative z-10">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-serif-display text-5xl sm:text-7xl lg:text-[76px] leading-[1.05] tracking-tight text-[#F8E5D7] max-w-4xl mb-6"
              >
                {portfolioData.student.name}&apos;s{' '}
                <span className="relative inline-block whitespace-nowrap">
                  <span className="absolute inset-0 -inset-x-2 bottom-1 bg-[#D69589] -rotate-1 rounded-sm -z-10 opacity-90 border-b-2 border-[#A38D89]/20" />
                  <span className="relative z-10 italic font-serif-display font-normal">
                    Portfolio
                  </span>
                </span>
              </motion.h1>

              {/* SAVED FOR LATER USE — Explore Selected Works CTA (hidden for now) */}
              {false && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6"
                >
                  <Link
                    to="/projects"
                    className="flex items-center gap-2 bg-[#D69589] text-[#F8E5D7] border-[1.5px] border-[#A38D89] px-7 py-3 rounded-full text-sm uppercase tracking-wider font-bold paper-shadow hover:translate-y-[-2px] hover:paper-shadow-lg transition-all cursor-pointer group"
                  >
                    <Sparkles className="w-4 h-4 text-[#F8E5D7] group-hover:rotate-12 transition-transform" />
                    <span>Explore Selected Works</span>
                  </Link>
                </motion.div>
              )}

              {/* About Biography */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-3 space-y-5"
              >
                <div className="space-y-4 font-body text-base text-[#F8E5D7]/85 leading-relaxed">
                  <p>
                    From business thinking to fashion, creativity and visual storytelling.
                  </p>
                  <p>
My journey began with a background in Business Administration, where I developed an understanding of businesses and consumers. I then explored Digital Marketing, which introduced me to the creative side of business. My growing interest in fashion eventually led me to pursue a Master’s in Fashion &amp; Lifestyle Business Management at Pearl Academy.
                    </p>
                    <p>
                      Today, I’m drawn to the creative, visual and marketing side of fashion — where creativity meets consumer understanding and brand experience.
                    </p>
                </div>

                <p className="font-serif-display text-2xl sm:text-2xl text-[#F8E5D7] italic leading-snug pt-1">
                  Curious by nature, creative by instinct.
                </p>

                <div className="flex flex-wrap gap-2">
                  {heroSpecializations.map((spec, i) => (
                    <span key={i} className="font-mono-code text-xs px-3 py-1 bg-[#F4C9D6] border border-[#A38D89]/30 rounded-lg text-[#F8E5D7]">
                      ✦ {spec}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="relative">
                <div className="absolute -top-3 left-10 z-10">
                  <WashiTape color="#D69589" width="w-24" />
                </div>

                <div className="bg-[#F8E5D7] border-[1.5px] border-[#A38D89] rounded-3xl p-3 paper-shadow-lg">
                  <img
                    src="/portfolio-assets/IMG_2187.jpg"
                    alt="Portrait — curated creative exploration"
                    className="w-full h-[420px] lg:h-[560px] object-cover rounded-2xl"
                  />
                </div>

                <span className="absolute -bottom-3 right-8 bg-[#3E2723] text-[#F8E5D7] font-mono-code text-xs px-3 py-1.5 rounded-full paper-shadow-sm uppercase tracking-wider">
                  Fashion Marketing & Visual Merchandising
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. THREE FEATURED PROJECTS PREVIEW */}
      <section className="py-20 bg-[#F8E5D7] border-b border-[#A38D89]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-4 border-b border-[#A38D89]/10">
            <div>
              <h2 className="relative z-10 font-serif-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#F8E5D7]">
                Selected{' '}
                <span className="relative inline-block whitespace-nowrap">
                  <span className="absolute inset-0 -inset-x-2 bottom-1 bg-[#D69589] -rotate-1 rounded-sm -z-10 opacity-90 border-b-2 border-[#A38D89]/20" />
                  <span className="relative z-10 italic font-serif-display font-normal">
                    Projects
                  </span>
                </span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {selectedProjects.map((proj) => (
              <div
                key={proj.id}
                className={`bg-[#F8E5D7] border-[1.5px] border-[#A38D89] rounded-2xl p-6 paper-shadow hover:translate-y-[-4px] hover:paper-shadow-lg transition-all flex flex-col justify-between relative group ${proj.rotation}`}
              >
                <div className="absolute -top-3 right-8">
                  <WashiTape color={proj.accentColor} width="w-20" />
                </div>

                <ProjectCardMedia image={proj.image} alt={proj.title} />

                <div>
                  <div className="text-xs text-[#F8E5D7]/60 mb-4 pb-2 border-b border-[#A38D89]/15">
                    <span className="font-bold text-[#F8E5D7]">PROJECT {proj.number}</span>
                  </div>

                  <span className="text-xs uppercase px-2.5 py-0.5 rounded-full border border-[#A38D89]/30 inline-block mb-3 bg-[#F4C9D6]">
                    {homeProjectCategories[proj.id] ?? proj.category}
                  </span>

                  <h3 className="font-serif-display text-2xl text-[#F8E5D7] mb-3 leading-snug group-hover:underline decoration-[#3E2723] underline-offset-4">
                    {homeProjectTitles[proj.id] ?? proj.title}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="text-[10px] font-mono-code uppercase tracking-wider text-[#F8E5D7]/50 font-bold block mb-1">
                        Brief
                      </span>
                      <p className="text-sm text-[#F8E5D7]/80 leading-relaxed whitespace-pre-line">
                        {proj.brief}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono-code uppercase tracking-wider text-[#F8E5D7]/50 font-bold block mb-1">
                        Research
                      </span>
                      <p className="text-sm text-[#F8E5D7]/80 leading-relaxed whitespace-pre-line">
                        {proj.research}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono-code uppercase tracking-wider text-[#F8E5D7]/50 font-bold block mb-1">
                        Contribution
                      </span>
                      <p className="text-sm text-[#F8E5D7]/80 leading-relaxed whitespace-pre-line">
                        {proj.contribution}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono-code uppercase tracking-wider text-[#F8E5D7]/50 font-bold block mb-1">
                        Learning
                      </span>
                      <p className="text-sm text-[#F8E5D7]/80 leading-relaxed whitespace-pre-line">
                        {proj.keyLearnings}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <Link
                    to={`/projects/${proj.slug}`}
                    className="w-full flex items-center justify-between py-2.5 px-4 bg-[#F4C9D6] border border-[#A38D89] rounded-xl text-xs uppercase tracking-wider text-[#F8E5D7] font-bold group-hover:bg-[#3E2723] group-hover:text-[#F8E5D7] transition-colors"
                  >
                    <span>Read Complete Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTERNSHIP FEATURE CALLOUT */}
      <section className="py-20 bg-[#F4C9D6] border-b border-[#A38D89]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8E5D7] border-[1.5px] border-[#A38D89] rounded-3xl p-8 sm:p-12 paper-shadow-lg relative">
            <div className="absolute -top-3 left-12">
              <WashiTape color="#D69589" width="w-28" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-sm uppercase font-bold text-[#F8E5D7]/60 block tracking-wider">
                  Turning Learning Into Experience
                </span>
                <h2 className="relative z-10 font-serif-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#F8E5D7]">
                  {internship.company}{' '}
                  <span className="relative inline-block whitespace-nowrap">
                    <span className="absolute inset-0 -inset-x-2 bottom-1 bg-[#D69589] -rotate-1 rounded-sm -z-10 opacity-90 border-b-2 border-[#A38D89]/20" />
                    <span className="relative z-10 italic font-serif-display font-normal">
                      Internship
                    </span>
                  </span>
                </h2>
                <p className="font-mono-code text-xs uppercase tracking-widest text-[#F8E5D7]/60">
                  {internship.role}
                </p>
                <p className="text-base text-[#F8E5D7]/85 leading-relaxed max-w-2xl">
                  {internship.overview}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {internship.page1SocialMedia.skillsApplied.slice(0, 5).map((sk, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-[#F4C9D6] border border-[#A38D89]/25 rounded-md text-[#F8E5D7]">
                      ✦ {sk}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex items-center justify-center">
                <Link
                  to="/internship/experience"
                  aria-label="View internship experience"
                  className="group flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#D69589] text-[#F8E5D7] border-[1.5px] border-[#A38D89] hover:bg-[#3E2723] hover:text-[#D69589] transition-colors"
                >
                  <ArrowRight className="w-10 h-10 sm:w-12 sm:h-12 group-hover:translate-x-1.5 transition-transform" />
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
