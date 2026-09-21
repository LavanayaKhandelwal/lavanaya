import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, BarChart3, Scissors, Sparkles } from 'lucide-react';
import { FlowerMark, WashiTape } from '../components/CustomDoodles';
import { portfolioData } from '../data/portfolioData';

export const ProjectThreePage: React.FC = () => {
  const { projectThree: p3 } = portfolioData;

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb */}
        <div className="flex items-center justify-between font-mono-code text-xs text-[#F8E5D7]/50 pb-4 border-b border-[#A38D89]/10 mb-12">
          <div className="flex items-center gap-2">
            <Link to="/projects" className="hover:text-[#F8E5D7] flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>PROJECTS</span>
            </Link>
            <span>/</span>
            <span className="text-[#F8E5D7] font-semibold">PROJECT 03 — EVERYDAY ATHLEISURE</span>
          </div>
          <span>EVERYDAY ATHLEISURE // ONE OUTFIT. MULTIPLE MOMENTS.</span>
        </div>

        {/* SECTION: COVER PAGE */}
        <section className="space-y-12 mb-16">
            <div className="bg-[#F8E5D7] border-[1.5px] border-[#A38D89] rounded-3xl p-8 sm:p-14 paper-shadow-lg relative overflow-hidden">
              <div className="absolute -top-3 right-12">
                <WashiTape color="#A38D89" width="w-32" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F8E5D7] border border-[#A38D89] rounded-full text-xs font-mono-code uppercase tracking-widest text-[#F8E5D7] paper-shadow-sm">
                    <FlowerMark size={14} />
                    <span>PROJECT 3 (START UP) // PAGE 1</span>
                  </div>

                  <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl text-[#F8E5D7] leading-[1.02] tracking-tight">
                    {p3.cover.title}
                  </h1>

                  <p className="font-serif-display text-2xl sm:text-3xl text-[#F8E5D7]/80 italic leading-snug">
                    {p3.cover.conceptSubtitle}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#A38D89]/15 font-mono-code text-xs">
                    <div>
                      <span className="text-[#F8E5D7]/50 block text-[10px] uppercase">PROJECT TYPE:</span>
                      <span className="font-bold text-[#F8E5D7]">Fashion Start-Up & Athleisure</span>
                    </div>
                    <div>
                      <span className="text-[#F8E5D7]/50 block text-[10px] uppercase">DELIVERABLE:</span>
                      <span className="font-bold text-[#F8E5D7]">Physical MVP Prototype</span>
                    </div>
                    <div>
                      <span className="text-[#F8E5D7]/50 block text-[10px] uppercase">SCOPE:</span>
                      <span className="font-bold text-[#F8E5D7]">Research to Fabrication</span>
                    </div>
                  </div>
                </div>

                {/* Cover Graphic Image */}
                <div className="lg:col-span-5">
                  <div className="bg-[#F8E5D7] border-[1.5px] border-[#A38D89] rounded-2xl p-4 paper-shadow">
                    <img
                      src="/portfolio-assets/Screenshot 2026-09-18 at 7.51.59 PM.png"
                      alt="Athleisure Start-up Cover"
                      className="w-full h-auto object-cover rounded-xl border border-[#A38D89]/15"
                    />
                    <div className="font-mono-code text-[11px] text-[#F8E5D7]/70 text-center mt-2">
                      Athleisure Venture Cover Dossier
                    </div>
                  </div>
                </div>
              </div>
            </div>

        </section>

        {/* SECTION: PAGE 01 — FROM A BUSINESS IDEA TO A REAL OPPORTUNITY */}
        <div className="bg-[#F8E5D7] border-[1.5px] border-[#A38D89] rounded-3xl p-8 sm:p-14 paper-shadow-lg relative mb-16">
            <div className="absolute -top-3 right-12">
              <WashiTape color="#A38D89" width="w-28" />
            </div>

            <div className="max-w-4xl mb-10">
              <span className="font-mono-code text-xs font-bold text-[#F8E5D7]/60 uppercase tracking-widest block mb-2">
                PAGE 01 — FROM A BUSINESS IDEA TO A REAL OPPORTUNITY
              </span>
              <h2 className="font-serif-display text-3xl sm:text-5xl text-[#F8E5D7] mb-4">
                From a Business Idea to a Real Opportunity
              </h2>

              <div className="p-4 bg-[#A38D89]/20 rounded-2xl border border-[#A38D89]/20 font-mono-code text-xs font-bold text-[#F8E5D7]">
                THE JOURNEY: {p3.page2SurveyInsights.journey}
              </div>
            </div>

            {/* WHAT I NOTICED */}
            <div className="mb-10">
              <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#F8E5D7] mb-4 pb-2 border-b border-[#A38D89]/15">
                WHAT I NOTICED
              </div>
              <p className="font-body text-base text-[#F8E5D7]/85 leading-relaxed whitespace-pre-line mb-6">
                {p3.page01.noticing.intro}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {p3.page2SurveyInsights.theObservation.map((obs) => (
                  <div key={obs.num} className="p-6 bg-[#F8E5D7] border border-[#A38D89]/20 rounded-2xl">
                    <h3 className="font-serif-display text-xl text-[#F8E5D7] mb-2">
                      {obs.title}
                    </h3>
                    <p className="font-body text-xs text-[#F8E5D7]/75">
                      {obs.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* THE OPPORTUNITY */}
            <div className="mb-10 p-8 bg-[#A38D89]/20 border-[1.5px] border-[#A38D89] rounded-2xl">
              <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#F8E5D7] mb-4">
                THE OPPORTUNITY
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-4">
                <span className="font-mono-code text-xs font-bold bg-[#3E2723] text-[#F8E5D7] px-3 py-1.5 rounded-full uppercase tracking-wider text-center">
                  {p3.page01.opportunity.label}
                </span>
                <span className="font-mono-code text-sm font-bold text-[#F8E5D7]">
                  {p3.page01.opportunity.spectrum}
                </span>
              </div>
              <p className="font-mono-code text-xs font-bold text-[#F8E5D7]/80">
                {p3.page01.opportunity.pillars}
              </p>
            </div>

            {/* THE CONCEPT */}
            <div className="mb-10 p-8 bg-[#F8E5D7] border-[1.5px] border-[#A38D89] rounded-2xl">
              <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#F8E5D7] mb-4">
                THE CONCEPT
              </div>
              <h3 className="font-serif-display text-3xl sm:text-5xl text-[#F8E5D7] mb-3">
                {p3.page01.concept.headline}
              </h3>
              <p className="font-body text-base text-[#F8E5D7]/85 leading-relaxed mb-4">
                {p3.page01.concept.intro}
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono-code text-xs font-bold text-[#F8E5D7] mb-5">
                {p3.page01.concept.flow.split('→').map((node, nIdx) => (
                  <React.Fragment key={nIdx}>
                    <span className="px-3 py-1.5 bg-[#F8E5D7] border border-[#A38D89] rounded-lg">{node.trim()}</span>
                    {nIdx < p3.page01.concept.flow.split('→').length - 1 && (
                      <span className="text-[#F8E5D7]/50 font-bold">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <ul className="space-y-2 font-body text-sm text-[#F8E5D7]/85">
                {p3.page01.concept.notes.map((n, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3E2723]" />
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* THE FIRST PRODUCT */}
            <div className="mb-10 p-8 bg-[#F8E5D7] border-[1.5px] border-[#A38D89] rounded-2xl">
              <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#F8E5D7] mb-4">
                THE FIRST PRODUCT
              </div>
              <p className="font-serif-display text-2xl sm:text-3xl text-[#F8E5D7] mb-2">
                {p3.page01.firstProduct.name}
              </p>
              <p className="font-body text-sm text-[#F8E5D7]/80">
                {p3.page01.firstProduct.line}
              </p>
            </div>

            {/* WHAT I WORKED WITH */}
            <div className="p-6 bg-[#F8E5D7] border border-[#A38D89]/20 rounded-2xl">
              <div className="font-mono-code text-xs font-bold uppercase text-[#F8E5D7] mb-4 pb-2 border-b border-[#A38D89]/15">
                WHAT I WORKED WITH
              </div>
              <p className="font-body text-sm text-[#F8E5D7]/85 leading-relaxed whitespace-pre-line">
                {p3.page01.whatIWorkedWith}
              </p>
            </div>

        </div>

        {/* SECTION: DESIGN, MATERIAL & PROTOTYPE */}
        <div className="bg-[#F8E5D7] border-[1.5px] border-[#A38D89] rounded-3xl p-8 sm:p-14 paper-shadow-lg relative mb-16">
            <div className="absolute -top-3 right-12">
              <WashiTape color="#D69589" width="w-28" />
            </div>

            <span className="font-mono-code text-xs font-bold text-[#F8E5D7]/60 uppercase tracking-widest block mb-4">
              PAGE 3 — FROM CONCEPT TO PHYSICAL PRODUCT
            </span>

            {/* 01 DESIGN */}
            <div className="p-8 bg-[#F8E5D7] border-[1.5px] border-[#A38D89] rounded-2xl mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <h2 className="font-serif-display text-3xl text-[#F8E5D7]">
                    {p3.page3DesignAndMaterial.design.title}
                  </h2>
                  <div className="flex flex-wrap gap-2.5 font-mono-code text-xs">
                    {p3.page3DesignAndMaterial.design.points.map((pt, i) => (
                      <span key={i} className="px-4 py-2 bg-[#F8E5D7] border border-[#A38D89] rounded-xl font-bold">
                        ✦ {pt}
                      </span>
                    ))}
                  </div>
                  <p className="font-body text-xs text-[#F8E5D7]/75 leading-relaxed pt-2">
                    Structured top for shape + style. Relaxed bottoms for movement + comfort.
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <div className="bg-[#F8E5D7] rounded-xl overflow-hidden border border-[#A38D89]/25 p-2 paper-shadow-sm flex items-center justify-center">
                    <img
                      src="/portfolio-assets/Screenshot 2026-09-18 at 7.03.12 PM.png"
                      alt="Design Flats Structured Crop Top and Joggers"
                      className="max-h-64 object-contain"
                    />
                  </div>
                  <span className="font-mono-code text-[11px] text-[#F8E5D7]/60 block mt-1.5 text-center">
                    01 Design — Structured Crop Top & Joggers Flat
                  </span>
                </div>
              </div>
            </div>

            {/* 02 MATERIAL */}
            <div className="p-8 bg-[#F8E5D7] border-[1.5px] border-[#A38D89] rounded-2xl mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <h2 className="font-serif-display text-3xl text-[#F8E5D7]">
                    {p3.page3DesignAndMaterial.material.title}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-[#F8E5D7] border border-[#A38D89]/25 rounded-xl">
                      <div className="font-mono-code text-xs font-bold text-[#F8E5D7] mb-1">
                        {p3.page3DesignAndMaterial.material.lycra.name}
                      </div>
                      <div className="font-body text-xs text-[#F8E5D7]/80">
                        {p3.page3DesignAndMaterial.material.lycra.attributes}
                      </div>
                    </div>

                    <div className="p-4 bg-[#F8E5D7] border border-[#A38D89]/25 rounded-xl">
                      <div className="font-mono-code text-xs font-bold text-[#F8E5D7] mb-1">
                        {p3.page3DesignAndMaterial.material.terryCotton.name}
                      </div>
                      <div className="font-body text-xs text-[#F8E5D7]/80">
                        {p3.page3DesignAndMaterial.material.terryCotton.attributes}
                      </div>
                    </div>
                  </div>
                  <p className="font-mono-code text-xs text-[#F8E5D7]/80 font-semibold">
                    ✦ {p3.page3DesignAndMaterial.material.colorNote}
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <div className="bg-[#F8E5D7] rounded-xl overflow-hidden border border-[#A38D89]/25 p-2 paper-shadow-sm flex items-center justify-center">
                    <img
                      src="/portfolio-assets/Screenshot 2026-09-18 at 7.03.20 PM.png"
                      alt="Material Testing Lycra and Terry Cotton"
                      className="max-h-64 object-contain"
                    />
                  </div>
                  <span className="font-mono-code text-[11px] text-[#F8E5D7]/60 block mt-1.5 text-center">
                    02 Material — Lycra & Terry Cotton Functional Pairing
                  </span>
                </div>
              </div>
            </div>

            {/* 03 FINAL PROTOTYPE */}
            <div className="p-8 bg-[#A38D89]/30 border-[1.5px] border-[#A38D89] rounded-2xl mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-3">
                  <span className="font-mono-code text-xs font-bold bg-[#3E2723] text-[#F8E5D7] px-3 py-1 rounded-full uppercase inline-block">
                    {p3.page3DesignAndMaterial.prototype.badge}
                  </span>
                  <h3 className="font-serif-display text-3xl sm:text-5xl text-[#F8E5D7]">
                    {p3.page3DesignAndMaterial.prototype.tagline}
                  </h3>
                  <p className="font-mono-code text-xs sm:text-sm text-[#F8E5D7]/90 uppercase tracking-wider font-bold">
                    {p3.page3DesignAndMaterial.prototype.coreProposition}
                  </p>
                  <p className="font-body text-xs text-[#F8E5D7]/80 pt-2 leading-relaxed whitespace-pre-line">
                    {p3.page3DesignAndMaterial.prototype.paragraph}
                  </p>
                </div>

                <div className="lg:col-span-6">
                  <div className="bg-[#F8E5D7] rounded-2xl overflow-hidden border-[1.5px] border-[#A38D89] p-3 paper-shadow">
                    <img
                      src="/portfolio-assets/Screenshot 2026-09-18 at 7.03.30 PM.png"
                      alt="03 Physical MVP Prototype"
                      className="w-full h-auto max-h-80 object-contain mx-auto"
                    />
                  </div>
                  <span className="font-mono-code text-[11px] text-[#F8E5D7]/70 block mt-2 text-center font-bold">
                    03 Final Prototype — Physical MVP Sample
                  </span>
                </div>
              </div>
            </div>

        </div>

        {/* SECTION: PAGE 02 — BUILD IT. TEST IT. LET USERS SHAPE IT. */}
        <div className="bg-[#F8E5D7] border-[1.5px] border-[#A38D89] rounded-3xl p-8 sm:p-14 paper-shadow-lg relative">
            <div className="absolute -top-3 right-12">
              <WashiTape color="#D69589" width="w-28" />
            </div>

            <div className="max-w-4xl mb-10">
              <span className="font-mono-code text-xs font-bold text-[#F8E5D7]/60 uppercase tracking-widest block mb-2">
                PAGE 02 — BUILD IT. TEST IT. LET USERS SHAPE IT.
              </span>
              <h2 className="font-serif-display text-3xl sm:text-5xl text-[#F8E5D7] mb-4">
                Build it. Test it. Let Users Shape It.
              </h2>
            </div>

            {/* FROM IDEA TO MVP */}
            <div className="mb-10">
              <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#F8E5D7] mb-4 pb-2 border-b border-[#A38D89]/15">
                FROM IDEA TO MVP
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono-code text-xs mb-5">
                {p3.page2SurveyInsights.myApproach.map((app, aIdx) => (
                  <React.Fragment key={aIdx}>
                    <span className="px-3 py-1.5 bg-[#F8E5D7] border border-[#A38D89] rounded-lg font-bold text-[#F8E5D7]">
                      {app.name}
                    </span>
                    {aIdx < p3.page2SurveyInsights.myApproach.length - 1 && (
                      <span className="text-[#F8E5D7]/50 font-bold">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <p className="font-body text-sm text-[#F8E5D7]/80">
                {p3.page2SurveyInsights.myApproachSummary}
              </p>
            </div>

            {/* THEN I TESTED ONE THING */}
            <div className="mb-10 bg-[#F8E5D7] border-[1.5px] border-[#A38D89] rounded-2xl p-6 paper-shadow">
              <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#F8E5D7] mb-1 flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                <span>{p3.page2SurveyInsights.surveyTitle}</span>
              </div>
              <p className="font-serif-display text-2xl sm:text-3xl text-[#F8E5D7] italic mb-4">
                Would People Actually Wear It?
              </p>
              <div className="rounded-xl overflow-hidden border border-[#A38D89]/20 bg-[#F8E5D7] max-h-[420px] flex items-center justify-center p-2 mb-3">
                <img
                  src="/portfolio-assets/Screenshot 2026-09-18 at 7.12.03 PM.png"
                  alt="Survey Insights Breakdown"
                  className="max-h-[380px] w-auto object-contain"
                />
              </div>
              <div className="font-mono-code text-xs text-[#F8E5D7]/70 leading-relaxed whitespace-pre-line">
                {p3.page2SurveyInsights.surveyAudience}
                {"\n"}
                {p3.page2SurveyInsights.surveyMethods}
                {"\n \n"}
                {p3.page2SurveyInsights.surveyLookedAt}
                {"\n"}
                {p3.page2SurveyInsights.surveyFactors}
              </div>
            </div>

            {/* WHAT I LEARNED FROM USERS */}
            <div className="mb-10">
              <h2 className="font-serif-display text-3xl text-[#F8E5D7] mb-4">
                WHAT I LEARNED FROM USERS
              </h2>
              <div className="space-y-3">
                {p3.page4FeedbackAndIteration.whatIHeard.map((quote, qIdx) => (
                  <div key={qIdx} className="p-4 bg-[#F8E5D7] border border-[#A38D89]/20 rounded-xl font-serif-display text-lg text-[#F8E5D7]">
                    <span className="font-mono-code text-xs font-bold uppercase text-[#F8E5D7] block mb-1 whitespace-pre-line">
                      {quote}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* WHAT I TAKE FORWARD */}
            <div className="mb-10">
              <h2 className="font-serif-display text-3xl text-[#F8E5D7] mb-4">
                WHAT I TAKE FORWARD
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {p3.page4FeedbackAndIteration.whatThisTaughtMe.map((item, tIdx) => (
                  <div key={tIdx} className="p-6 bg-[#F8E5D7] border border-[#A38D89]/25 rounded-2xl">
                    <h3 className="font-serif-display text-xl text-[#F8E5D7] mb-2">
                      {item.headline}
                    </h3>
                    <p className="font-body text-xs text-[#F8E5D7]/80 leading-relaxed whitespace-pre-line">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FEEDBACK → ITERATION → IMPACT */}
            <div className="p-8 bg-[#F8E5D7] border-[1.5px] border-[#A38D89] rounded-2xl mb-8">
              <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#F8E5D7] mb-6 text-center">
                FEEDBACK → ITERATION → IMPACT
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center text-center font-mono-code text-xs">
                <div className="md:col-span-1 p-5 bg-[#F8E5D7] border border-[#A38D89] rounded-xl">
                  <span className="text-[#F8E5D7]/60 uppercase text-[10px] block mb-1">FEEDBACK</span>
                  <strong className="text-sm text-[#F8E5D7]">
                    {p3.page4FeedbackAndIteration.feedbackLoop.feedback}
                  </strong>
                </div>

                <div className="text-2xl font-bold text-[#F8E5D7]/50 hidden md:block">
                  →
                </div>

                <div className="md:col-span-1 p-5 bg-[#D69589] border border-[#A38D89] rounded-xl">
                  <span className="text-[#F8E5D7]/60 uppercase text-[10px] block mb-1">ITERATION</span>
                  <strong className="text-sm text-[#F8E5D7]">
                    {p3.page4FeedbackAndIteration.feedbackLoop.iteration}
                  </strong>
                </div>

                <div className="text-2xl font-bold text-[#F8E5D7]/50 hidden md:block">
                  →
                </div>

                <div className="md:col-span-1 p-5 bg-[#F8E5D7] border border-[#A38D89] rounded-xl">
                  <span className="text-[#F8E5D7]/60 uppercase text-[10px] block mb-1">IMPACT</span>
                  <strong className="text-sm text-[#F8E5D7]">
                    {p3.page4FeedbackAndIteration.feedbackLoop.impact}
                  </strong>
                </div>
              </div>

              {/* Graphical Feedback Loop Diagram */}
              <div className="mt-8 rounded-xl overflow-hidden border border-[#A38D89]/20 bg-[#F8E5D7] max-h-48 flex items-center justify-center p-2">
                <img
                  src="/portfolio-assets/Screenshot 2026-09-18 at 8.44.29 PM.png"
                  alt="Feedback Iteration Impact Flow"
                  className="max-h-40 w-auto object-contain"
                />
              </div>
            </div>

            <div className="flex justify-end pt-6 border-t border-[#A38D89]/15 font-mono-code text-xs">
              <Link
                to="/skills"
                className="bg-[#3E2723] text-[#F8E5D7] px-5 py-2.5 rounded-xl font-bold hover:bg-[#A38D89] cursor-pointer flex items-center gap-1.5"
              >
                <span>View Skills Matrix →</span>
              </Link>
            </div>
          </div>
      </div>
    </div>
  );
};