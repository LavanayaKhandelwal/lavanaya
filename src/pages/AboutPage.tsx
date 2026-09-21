import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const AboutPage: React.FC = () => {
  const { student } = portfolioData;

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Folio rule */}
        <div className="flex items-center justify-between eyebrow text-[#A38D89] pb-4 rule-b mb-14">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-[#F8E5D7]">HOME</Link>
            <span>/</span>
            <span className="text-[#F8E5D7] font-semibold">ABOUT ME</span>
          </div>
          <span>FOLIO ETHOS &amp; BACKGROUND</span>
        </div>

        {/* Profile spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start mb-24">
          <div className="lg:col-span-7 space-y-8">
            <p className="eyebrow text-[#D69589] border-l-2 border-[#D69589] pl-4">ABOUT ME</p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#F8E5D7] leading-[1.05] tracking-tight">
              {student.degree}
            </h1>

            <div className="flex flex-wrap items-center gap-3 eyebrow text-[#A38D89]">
              <span className="text-[#F8E5D7] font-bold">{student.institution} | {student.year}</span>
              <span className="text-[#D69589]">•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {student.location}
              </span>
            </div>

            <p className="font-serif-display text-2xl sm:text-3xl text-[#F8E5D7] italic leading-snug pt-2">
              {student.statement}
            </p>

            <div className="space-y-4 font-body text-base text-[#F8E5D7]/85 leading-loose pt-2">
              <p>
                {student.secondaryStatement}
              </p>
              <p>
                Today, I&rsquo;m drawn to the creative, visual and marketing side of fashion — where creativity meets consumer understanding and brand experience.
              </p>
            </div>

            {/* Interests & Exploring */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-8">
              <div className="rule-t pt-5">
                <p className="eyebrow text-[#D69589] mb-3">{student.interests.heading}</p>
                <p className="font-body text-xs text-[#F8E5D7]/70 leading-relaxed mb-5">
                  {student.interests.blurb}
                </p>
                <div>
                  {student.interests.chips.map((spec, i) => (
                    <div key={i} className="rule-t flex items-baseline gap-3 py-2">
                      <span className="font-mono-code text-[10px] text-[#D69589]">0{i + 1}</span>
                      <span className="font-mono-code text-xs text-[#F8E5D7] uppercase tracking-wider">{spec}</span>
                    </div>
                  ))}
                  <div className="rule-b" />
                </div>
              </div>

              <div className="rule-t pt-5">
                <p className="eyebrow text-[#D69589] mb-3">{student.exploring.heading}</p>
                <p className="font-body text-xs text-[#F8E5D7]/70 leading-relaxed mb-5">
                  {student.exploring.blurb}
                </p>
                <div>
                  {student.exploring.chips.map((spec, i) => (
                    <div key={i} className="rule-t flex items-baseline gap-3 py-2">
                      <span className="font-mono-code text-[10px] text-[#D69589]">0{i + 1}</span>
                      <span className="font-mono-code text-xs text-[#F8E5D7] uppercase tracking-wider">{spec}</span>
                    </div>
                  ))}
                  <div className="rule-b" />
                </div>
              </div>
            </div>
          </div>

          {/* Approach plate */}
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="plate p-8 lg:p-10 lg:mt-16">
              <p className="eyebrow text-[#D69589] mb-4">{student.approach.heading}</p>
              <p className="font-body text-sm text-[#F8E5D7]/85 leading-relaxed">
                {student.approach.text}
              </p>

              <div className="rule-t mt-10 pt-8">
                <p className="font-serif-display text-2xl sm:text-3xl text-[#F8E5D7] italic leading-snug whitespace-pre-line">
                  "{student.handwritten}"
                </p>
                <p className="plate-caption mt-3">Handwritten-style statement</p>
              </div>
            </div>
          </div>
        </div>

        {/* Next in portfolio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 rule-t pt-10 items-end">
          <div>
            <p className="eyebrow text-[#A38D89] mb-3">NEXT IN PORTFOLIO</p>
            <p className="font-serif-display text-2xl sm:text-3xl text-[#F8E5D7]">Explore Aadiya Jewels Internship</p>
          </div>
          <div className="sm:text-right">
            <Link
              to="/internship/experience"
              className="inline-flex items-center gap-3 eyebrow text-[#F8E5D7] editorial-link"
            >
              <span>View Internship</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};