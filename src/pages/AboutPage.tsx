import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';
import { FlowerMark, WashiTape } from '../components/CustomDoodles';
import { portfolioData } from '../data/portfolioData';

export const AboutPage: React.FC = () => {
  const { student } = portfolioData;

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb */}
        <div className="flex items-center justify-between font-mono-code text-xs text-[#A38D89] pb-4 border-b border-[#A38D89]/20 mb-12">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-[#F8E5D7]">HOME</Link>
            <span>/</span>
            <span className="text-[#F8E5D7] font-semibold">ABOUT ME</span>
          </div>
          <span>FOLIO ETHOS & BACKGROUND</span>
        </div>

        {/* Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F4C9D6] border border-[#A38D89] rounded-full text-xs font-mono-code uppercase tracking-widest text-[#3E2723] paper-shadow-sm">
              <FlowerMark size={14} />
              <span>ABOUT ME</span>
            </div>

            <h1 className="font-serif-display text-4xl sm:text-5xl text-[#F8E5D7] leading-[1.1] tracking-tight">
              {student.degree}
            </h1>

            <div className="font-mono-code text-xs sm:text-sm text-[#A38D89] flex flex-wrap items-center gap-3">
              <span className="bg-[#F4C9D6] text-[#3E2723] px-2.5 py-0.5 rounded border border-[#A38D89] font-bold">
                {student.institution} | {student.year}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {student.location}
              </span>
            </div>

            <p className="font-serif-display text-2xl sm:text-3xl text-[#F8E5D7] italic leading-snug pt-2">
              {student.statement}
            </p>

            <div className="space-y-4 font-body text-base text-[#F8E5D7]/85 leading-relaxed pt-2">
              <p>
                {student.secondaryStatement}
              </p>
              <p>
                Today, I&rsquo;m drawn to the creative, visual and marketing side of fashion — where creativity meets consumer understanding and brand experience.
              </p>
            </div>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <div className="font-mono-code text-xs font-bold text-[#F4C9D6] mb-2">
                  ✦ {student.interests.heading}
                </div>
                <p className="font-body text-xs text-[#F8E5D7]/70 leading-relaxed mb-3">
                  {student.interests.blurb}
                </p>
                <div className="flex flex-wrap gap-2">
                  {student.interests.chips.map((spec, i) => (
                    <span key={i} className="font-mono-code text-xs px-3 py-1 bg-[#F8E5D7] border border-[#A38D89]/30 rounded-lg text-[#3E2723] font-bold">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-mono-code text-xs font-bold text-[#F4C9D6] mb-2">
                  ◌ {student.exploring.heading}
                </div>
                <p className="font-body text-xs text-[#F8E5D7]/70 leading-relaxed mb-3">
                  {student.exploring.blurb}
                </p>
                <div className="flex flex-wrap gap-2">
                  {student.exploring.chips.map((spec, i) => (
                    <span key={i} className="font-mono-code text-xs px-3 py-1 bg-[#F8E5D7] border border-[#A38D89]/30 rounded-lg text-[#3E2723] font-bold">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#3E2723] border-[1.5px] border-[#A38D89]/40 rounded-3xl p-8 paper-shadow-lg relative">
              <div className="absolute -top-3 left-10">
                <WashiTape color="#F4C9D6" width="w-24" />
              </div>

              <div className="font-mono-code text-xs font-bold text-[#A38D89] mb-4">
                ♡ {student.approach.heading}
              </div>
              <p className="font-body text-sm text-[#F8E5D7]/85 leading-relaxed">
                {student.approach.text}
              </p>

              <div className="mt-8 pt-6 border-t border-[#A38D89]/20">
                <p className="font-serif-display text-2xl sm:text-3xl text-[#F8E5D7] italic leading-snug whitespace-pre-line">
                  "{student.handwritten}"
                </p>
                <div className="font-mono-code text-[10px] uppercase tracking-widest text-[#A38D89] mt-3">
                  Handwritten-style statement
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-8 bg-[#3E2723] border-[1.5px] border-[#A38D89]/40 rounded-2xl gap-4">
          <div>
            <div className="font-mono-code text-xs uppercase text-[#A38D89]">NEXT IN PORTFOLIO</div>
            <div className="font-serif-display text-2xl text-[#F8E5D7]">Explore Aadiya Jewels Internship</div>
          </div>
          <Link
            to="/internship/experience"
            className="flex items-center gap-2 px-6 py-3 bg-[#F4C9D6] text-[#3E2723] rounded-xl font-mono-code text-xs uppercase tracking-wider font-bold hover:bg-[#3E2723] hover:text-[#F8E5D7] transition-colors"
          >
            <span>View Internship</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
