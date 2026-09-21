import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const InternshipLearningsPage: React.FC = () => {
  const { internship } = portfolioData;

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Folio rule */}
        <div className="flex items-center justify-between eyebrow text-[#A38D89] pb-4 rule-b mb-14">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-[#F8E5D7]">HOME</Link>
            <span>/</span>
            <Link to="/internship/experience" className="hover:text-[#F8E5D7]">INTERNSHIP</Link>
            <span>/</span>
            <span className="text-[#F8E5D7] font-semibold">LEARNINGS</span>
          </div>
          <span>AADIYA JEWELS // 4 LEARNING OUTCOMES</span>
        </div>

        {/* Intro */}
        <div className="max-w-4xl mb-20">
          <p className="eyebrow text-[#D69589] border-l-2 border-[#D69589] pl-4 mb-4">
            INTERNSHIP SYNTHESIS
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#F8E5D7] leading-[1] tracking-tight mb-6">
            Key Learnings
          </h1>
          <p className="font-body text-base text-[#F8E5D7]/85 leading-loose max-w-3xl mb-10">
            Create, plan, present and execute — the four working principles I carried out of my digital content and e-commerce internship at Aadiya Jewels.
          </p>
          <Link
            to="/internship/experience"
            className="inline-flex items-center gap-2 eyebrow text-[#F8E5D7] editorial-link"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>← Back to Page 1 &amp; Page 2 Overview</span>
          </Link>
        </div>

        {/* 4 LEARNING OUTCOMES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 mb-24">
          {internship.learningOutcomes.map((lo, idx) => (
            <motion.div
              key={lo.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 2) * 0.06 }}
              className={`rule-t pt-10`}
            >
              <div className="flex items-baseline justify-between mb-6">
                <span className="index-figure text-6xl text-[#A38D89]/35">{lo.number}</span>
                <span className="plate-caption">AADIYA JEWELS</span>
              </div>

              <h2 className="font-serif-display text-3xl sm:text-4xl text-[#F8E5D7] mb-4">
                {lo.title}
              </h2>

              <p className="font-body text-base text-[#F8E5D7]/85 leading-loose">
                {lo.desc}
              </p>

              <div className="rule-t mt-8 pt-4 font-mono-code text-xs text-[#A38D89] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D69589]" />
                <span>Verified in production &amp; store management</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom pagination */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 rule-t pt-10 items-end">
          <Link
            to="/internship/experience"
            className="inline-flex items-center gap-2 eyebrow text-[#F8E5D7] editorial-link"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Internship Experience</span>
          </Link>
          <div className="sm:text-right">
            <Link
              to="/projects/marketing"
              className="inline-flex items-center gap-3 eyebrow text-[#F8E5D7] editorial-link"
            >
              <span>Proceed to Project 1 (Marketing Management)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};