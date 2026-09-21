import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Layers, Tag, Eye } from 'lucide-react';
import { FlowerMark, HandDrawnStar, WashiTape } from '../components/CustomDoodles';
import { ProjectCardMedia } from '../components/ProjectCardMedia';
import { portfolioData } from '../data/portfolioData';

export const ProjectsOverviewPage: React.FC = () => {

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb */}
        <div className="flex items-center justify-between font-mono-code text-xs text-[#F8E5D7]/50 pb-4 border-b border-[#A38D89]/10 mb-12">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-[#F8E5D7]">HOME</Link>
            <span>/</span>
            <span className="text-[#F8E5D7] font-semibold">SELECTED PROJECTS</span>
          </div>
          <span>FOLIO: 001–003 // CASE STUDIES</span>
        </div>

        {/* Hero Title & Intro */}
        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F4C9D6] border border-[#A38D89] rounded-full text-xs font-mono-code uppercase tracking-widest text-[#3E2723] mb-4 paper-shadow-sm">
            <FlowerMark size={14} />
            <span>CURATED WORKS ARCHIVE</span>
          </div>

          <h1 className="font-serif-display text-4xl sm:text-6xl text-[#F8E5D7] leading-[1.05] tracking-tight mb-4">
            Selected Projects
          </h1>

          <p className="font-body text-base text-[#F8E5D7]/85 leading-relaxed max-w-3xl mb-8">
            Three projects across marketing management & brand extension (UNIQLO × fragrances), Spring/Summer visual merchandising (Cover Story × Future Florals), and founding an everyday athleisure startup from consumer research to a physical MVP.
          </p>
        </div>

        {/* Projects Display List */}
        <div className="space-y-12 mb-20">
          {portfolioData.selectedProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-[#3E2723] border-[1.5px] border-[#A38D89]/40 rounded-3xl p-8 sm:p-12 paper-shadow-lg relative overflow-hidden group hover:paper-shadow-xl transition-all"
            >
              <div className="absolute -top-3 right-12">
                <WashiTape color={proj.accentColor} width="w-28" />
              </div>

              <ProjectCardMedia image={proj.image} alt={proj.title} />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono-code text-xs font-bold text-[#F8E5D7]/60 uppercase">
                      CASE STUDY {proj.number}
                    </span>
                    <span className="text-xs font-mono-code px-2.5 py-0.5 rounded-full border border-[#A38D89]/30 bg-[#F8E5D7]">
                      {proj.category}
                    </span>
                  </div>

                  <h2 className="font-serif-display text-3xl sm:text-5xl text-[#F8E5D7] group-hover:underline decoration-[#F4C9D6] underline-offset-4">
                    {proj.title}
                  </h2>

                  <p className="font-mono-code text-xs text-[#F8E5D7]/60 font-semibold uppercase">
                    {proj.discipline}
                  </p>

                  <p className="font-body text-base text-[#F8E5D7]/85 leading-relaxed max-w-2xl">
                    {proj.summary}
                  </p>

                  {proj.brief && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                      {[
                        { label: "PROJECT BRIEF", text: proj.brief },
                        { label: "RESEARCH", text: proj.research },
                        { label: "MY CONTRIBUTION", text: proj.contribution },
                        { label: "KEY LEARNINGS", text: proj.keyLearnings }
                      ].map((b) => (
                        <div
                          key={b.label}
                          className="p-4 bg-[#3E2723] border border-[#A38D89]/20 rounded-xl"
                        >
                          <span className="font-mono-code text-[10px] font-bold text-[#F8E5D7]/60 uppercase tracking-wider block mb-1.5">
                            {b.label}
                          </span>
<p className="font-body text-xs text-[#F8E5D7]/80 leading-relaxed whitespace-pre-line">
                            {b.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 pt-2">
                    {proj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 bg-[#F4C9D6] border border-[#A38D89]/20 rounded-lg font-mono-code text-xs text-[#3E2723]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-between h-full pt-4 lg:pt-0">
                  <div className="p-6 bg-[#3E2723] border border-[#A38D89]/20 rounded-2xl mb-6">
                    <span className="font-mono-code text-xs font-bold text-[#F8E5D7] block mb-2">
                      CORE FOCUS
                    </span>
                    <p className="font-body text-xs text-[#F8E5D7]/80 leading-relaxed">
                      {proj.tagline}
                    </p>
                  </div>

                  <Link
                    to={`/projects/${proj.slug}`}
                    className="flex items-center justify-between w-full py-4 px-6 bg-[#3E2723] text-[#F8E5D7] hover:bg-[#A38D89] rounded-xl font-mono-code text-xs uppercase tracking-wider font-bold transition-all"
                  >
                    <span>Read Complete Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
