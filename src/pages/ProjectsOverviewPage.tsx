import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ProjectCardMedia } from '../components/ProjectCardMedia';
import { portfolioData } from '../data/portfolioData';

export const ProjectsOverviewPage: React.FC = () => {

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Folio rule */}
        <div className="flex items-center justify-between eyebrow text-[#A38D89] pb-4 rule-b mb-14">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-[#F8E5D7]">HOME</Link>
            <span>/</span>
            <span className="text-[#F8E5D7] font-semibold">SELECTED PROJECTS</span>
          </div>
          <span>FOLIO: 001–004 // CASE STUDIES</span>
        </div>

        {/* Intro */}
        <div className="max-w-4xl mb-20 lg:mb-28">
          <p className="eyebrow text-[#D69589] border-l-2 border-[#D69589] pl-4 mb-4">
            CURATED WORKS ARCHIVE
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#F8E5D7] leading-[1] tracking-tight mb-6">
            Selected Projects
          </h1>
          <p className="font-body text-base text-[#F8E5D7]/85 leading-loose max-w-3xl mb-8">
            Four projects across marketing management &amp; brand extension (UNIQLO × fragrances), Spring/Summer visual merchandising (Cover Story × Future Florals), and founding an everyday athleisure startup from consumer research to a physical MVP.
          </p>
        </div>

        {/* Projects index */}
        <div>
          {portfolioData.selectedProjects.map((proj, idx) => (
            <motion.article
              key={proj.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start ${idx !== 0 ? 'rule-t' : ''}`}
            >
              {/* Left column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-8">
                  <span className="index-figure text-8xl lg:text-9xl text-[#A38D89]/30 leading-none">
                    {proj.number}
                  </span>
                  <div>
                    <p className="eyebrow text-[#D69589] mb-1">CASE STUDY {proj.number}</p>
                    <p className="plate-caption">{proj.category}</p>
                  </div>
                </div>

                <h2 className="font-display text-3xl sm:text-5xl text-[#F8E5D7] leading-[1.05] tracking-tight">
                  {proj.title}
                </h2>

                <p className="eyebrow text-[#A38D89]">{proj.discipline}</p>

                <p className="font-body text-base text-[#F8E5D7]/85 leading-loose max-w-2xl">
                  {proj.summary}
                </p>

                {proj.brief && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 pt-4">
                    {[
                      { label: "PROJECT BRIEF", text: proj.brief },
                      { label: "RESEARCH", text: proj.research },
                      { label: "MY CONTRIBUTION", text: proj.contribution },
                      { label: "KEY LEARNINGS", text: proj.keyLearnings }
                    ].map((b) => (
                      <div key={b.label} className="rule-t pt-4">
                        <span className="eyebrow text-[#D69589] block mb-2">{b.label}</span>
                        <p className="font-body text-xs text-[#F8E5D7]/80 leading-relaxed whitespace-pre-line">
                          {b.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 pt-2">
                  {proj.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="plate-caption text-[#F8E5D7] inline-flex items-center gap-3">
                      <span className="text-[#D69589]">●</span>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right column */}
              <div className="lg:col-span-4 lg:col-start-9 space-y-10">
                <ProjectCardMedia image={proj.image} alt={proj.title} ratio="aspect-[4/5]" />

                <div className="rule-t pt-5">
                  <span className="eyebrow text-[#D69589] block mb-2">CORE FOCUS</span>
                  <p className="font-body text-xs text-[#F8E5D7]/80 leading-relaxed">
                    {proj.tagline}
                  </p>
                </div>

                <Link
                  to={`/projects/${proj.slug}`}
                  className="inline-flex items-center gap-3 eyebrow text-[#F8E5D7] editorial-link"
                >
                  <span>Read Complete Study</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};