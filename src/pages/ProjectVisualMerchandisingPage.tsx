import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, Palette, Hammer, Eye, Lightbulb, CheckCircle2, Image as ImageIcon } from 'lucide-react';
import { FlowerMark, WashiTape } from '../components/CustomDoodles';
import { portfolioData } from '../data/portfolioData';

export const ProjectVisualMerchandisingPage: React.FC = () => {
  const { projectVM: vm } = portfolioData;

  // Exact 5 step images from behind the display photoshoot
  const stepImages = [
    {
      src: "/portfolio-assets/1e36b3dd-85f2-438b-b90a-e7143dbd03cd.jpg",
      caption: "Holographic sheets transformed into layered petals"
    },
    {
      src: "/portfolio-assets/6fa49fa5-d790-4c76-9f00-69ca01bfcdc2.jpg",
      caption: "Wire and foam provided structure and dimension"
    },
    {
      src: "/portfolio-assets/7eee7676-2ce8-4667-9ef7-abf624ba1833.jpg",
      caption: "Organza added softness"
    },
    {
      src: "/portfolio-assets/97e20f9d-778d-44a3-bc5f-d32b6c39b7a3.jpg",
      caption: "Lighting enhanced the reflective surfaces"
    },
    {
      src: "/portfolio-assets/DD05B299-B533-4126-B54A-3B48CD3AA413.jpg",
      caption: "The mannequin remained the focal point, framed by florals, texture and light"
    }
  ];

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
            <span className="text-[#F8E5D7] font-semibold">PROJECT 2 — VISUAL MERCHANDISING</span>
          </div>
          <span>COVER STORY X FUTURE FLORALS</span>
        </div>

        {/* SECTION: COVER PAGE */}
        <section className="space-y-12 mb-16">
            <div className="bg-[#F8E5D7] border-[1.5px] border-[#A38D89] rounded-3xl p-8 sm:p-14 paper-shadow-lg relative overflow-hidden">
              <div className="absolute -top-3 right-12">
                <WashiTape color="#D69589" width="w-32" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F8E5D7] border border-[#A38D89] rounded-full text-xs font-mono-code uppercase tracking-widest text-[#F8E5D7] paper-shadow-sm">
                    <FlowerMark size={14} />
                    <span>VISUAL MERCHANDISING PROJECT 2 // PAGE 1</span>
                  </div>

                  <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl text-[#F8E5D7] leading-[1.02] tracking-tight">
                    {vm.cover.title}
                  </h1>

                  <p className="font-serif-display text-2xl sm:text-3xl text-[#F8E5D7]/80 italic leading-snug">
                    {vm.cover.credits[0]}
                  </p>

                  {vm.cover.intro.map((line, i) => (
                    <div key={i} className="font-body text-sm sm:text-base text-[#F8E5D7]/80 leading-relaxed">
                      {line}
                    </div>
                  ))}

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#A38D89]/15 font-mono-code text-xs">
                    <div>
                      <span className="text-[#F8E5D7]/50 block text-[10px] uppercase">CLIENT / BRAND:</span>
                      <span className="font-bold text-[#F8E5D7]">{vm.cover.brand}</span>
                    </div>
                    <div>
                      <span className="text-[#F8E5D7]/50 block text-[10px] uppercase">SEASON:</span>
                      <span className="font-bold text-[#F8E5D7]">{vm.cover.season}</span>
                    </div>
                    <div>
                      <span className="text-[#F8E5D7]/50 block text-[10px] uppercase">DISCIPLINE:</span>
                      <span className="font-bold text-[#F8E5D7]">Visual Merchandising & Spatial Design</span>
                    </div>
                  </div>
                </div>

                {/* Brand Book Cover Graphic */}
                <div className="lg:col-span-5">
                  <div className="bg-[#F8E5D7] border-[1.5px] border-[#A38D89] rounded-2xl p-4 paper-shadow">
                    <img
                      src="/portfolio-assets/BRAND BOOK  - 1.png"
                      alt="Cover Story S/S Brand Book"
                      className="w-full h-auto object-cover rounded-xl border border-[#A38D89]/15"
                    />
                    <div className="font-mono-code text-[11px] text-[#F8E5D7]/70 text-center mt-2">
                      Cover Story Spring/Summer In-Store Experience Dossier
                    </div>
                  </div>
                </div>
              </div>
            </div>

        </section>

        {/* SECTION: THE BRIEF & CONCEPT */}
        <div className="bg-[#F8E5D7] border-[1.5px] border-[#A38D89] rounded-3xl p-8 sm:p-14 paper-shadow-lg relative mb-16">
            <div className="absolute -top-3 right-12">
              <WashiTape color="#D69589" width="w-28" />
            </div>

            <div className="max-w-4xl mb-10">
              <span className="font-mono-code text-xs font-bold text-[#F8E5D7]/60 uppercase tracking-widest block mb-2">
                PAGE 2
              </span>
              <h2 className="font-serif-display text-3xl sm:text-5xl text-[#F8E5D7] mb-4">
                {vm.page2Brief.briefTitle}
              </h2>
              <p className="font-body text-base text-[#F8E5D7]/85 leading-relaxed p-4 bg-[#F8E5D7] rounded-2xl border border-[#A38D89]/20">
                {vm.page2Brief.briefText}
              </p>
            </div>

            {/* WHAT I INVESTIGATED */}
            <div className="mb-10">
              <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#F8E5D7] mb-4 pb-2 border-b border-[#A38D89]/15">
                WHAT I INVESTIGATED
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {vm.page2Brief.whatIInvestigated.map((item, idx) => (
                  <div key={idx} className="p-6 bg-[#F8E5D7] border border-[#A38D89]/20 rounded-2xl">
                    <h3 className="font-serif-display text-xl text-[#F8E5D7] mb-3">
                      {item.pillar}
                    </h3>
                    <ul className="space-y-1.5 font-body text-xs text-[#F8E5D7]/80">
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3E2723]" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* HOW I REACHED THE CONCEPT */}
            <div className="mb-10 p-6 bg-[#F8E5D7] border-[1.5px] border-[#A38D89] rounded-2xl">
              <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#F8E5D7] mb-4">
                HOW I REACHED THE CONCEPT
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono-code text-xs">
                {vm.page2Brief.howIReachedTheConcept.map((node, nIdx) => (
                  <React.Fragment key={nIdx}>
                    <span className="px-3 py-1.5 bg-[#F8E5D7] border border-[#A38D89] rounded-lg font-bold">
                      {node}
                    </span>
                    {nIdx < vm.page2Brief.howIReachedTheConcept.length - 1 && (
                      <span className="text-[#F8E5D7]/50 font-bold">↓</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <p className="font-serif-display text-xl text-[#F8E5D7] italic mt-5">
                "{vm.page2Brief.conceptSummary}"
              </p>
            </div>

            {/* MY DESIGN INSIGHT */}
            <div className="p-6 bg-[#D69589]/25 border border-[#A38D89]/25 rounded-2xl mb-8">
              <span className="font-mono-code text-xs font-bold uppercase text-[#F8E5D7] block mb-1">
                MY DESIGN INSIGHT
              </span>
              <p className="font-body text-sm text-[#F8E5D7]/85">
                {vm.page2Brief.designInsight}
              </p>
            </div>

        </div>

        {/* SECTION: MOOD BOARD / COLOUR BOARD */}
        <div className="bg-[#F8E5D7] border-[1.5px] border-[#A38D89] rounded-3xl p-8 sm:p-14 paper-shadow-lg relative mb-16">
            <div className="absolute -top-3 right-12">
              <WashiTape color="#D69589" width="w-28" />
            </div>

            <span className="font-mono-code text-xs font-bold text-[#F8E5D7]/60 uppercase tracking-widest block mb-4">
              PAGE 2 — VISUAL BOARDS
            </span>

            {/* MOOD BOARD */}
            <div className="p-8 bg-[#F8E5D7] border-[1.5px] border-[#A38D89] rounded-2xl mb-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-6">
                  <h2 className="font-serif-display text-3xl text-[#F8E5D7] mb-3">
                    {vm.page3Boards.moodBoard.title}
                  </h2>
                  <p className="font-body text-sm sm:text-base text-[#F8E5D7]/85 leading-relaxed mb-6">
                    {vm.page3Boards.moodBoard.content}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[#A38D89]/15 font-mono-code text-xs font-bold text-[#F8E5D7]">
                    {vm.page3Boards.moodBoard.keywords.map((kw, i) => (
                      <span key={i} className="px-3 py-1 bg-[#F8E5D7] border border-[#A38D89] rounded-full">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="rounded-xl overflow-hidden border border-[#A38D89]/20 paper-shadow-sm bg-[#F8E5D7]">
                    <img
                      src="/portfolio-assets/BRAND BOOK  - 16.png"
                      alt="Future Florals Mood Board"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <span className="font-mono-code text-[11px] text-[#F8E5D7]/60 block mt-1.5 text-center">
                    Mood Board Visual Collages & Material Invocations
                  </span>
                </div>
              </div>
            </div>

            {/* COLOUR BOARD */}
            <div className="p-8 bg-[#F8E5D7] border-[1.5px] border-[#A38D89] rounded-2xl mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-6">
                <div className="lg:col-span-6">
                  <h2 className="font-serif-display text-3xl text-[#F8E5D7] mb-3">
                    {vm.page3Boards.colourBoard.title}
                  </h2>
                  <p className="font-body text-sm sm:text-base text-[#F8E5D7]/85 leading-relaxed">
                    {vm.page3Boards.colourBoard.content}
                  </p>
                </div>

                <div className="lg:col-span-6">
                  <div className="rounded-xl overflow-hidden border border-[#A38D89]/20 paper-shadow-sm bg-[#F8E5D7]">
                    <img
                      src="/portfolio-assets/BRAND BOOK  - 18.png"
                      alt="Colour Board Palette"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <span className="font-mono-code text-[11px] text-[#F8E5D7]/60 block mt-1.5 text-center">
                    Spring/Summer Colour Harmony & Iridescent Accents
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-4 border-t border-[#A38D89]/15">
                {vm.page3Boards.colourBoard.palette.map((color, idx) => (
                  <div key={idx} className="bg-[#F8E5D7] border border-[#A38D89]/25 rounded-xl p-3 text-center">
                    <div
                      className="w-full h-16 rounded-lg border border-[#A38D89]/20 mb-2"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="font-mono-code text-xs font-bold text-[#F8E5D7]">{color.name}</div>
                  </div>
                ))}
              </div>
            </div>

        </div>

        {/* SECTION: BEHIND THE DISPLAY (5 STEPS WITH REAL PHOTOS) */}
        <div className="bg-[#F8E5D7] border-[1.5px] border-[#A38D89] rounded-3xl p-8 sm:p-14 paper-shadow-lg relative mb-16">
            <div className="absolute -top-3 right-12">
              <WashiTape color="#D69589" width="w-28" />
            </div>

            <div className="max-w-4xl mb-8">
              <span className="font-mono-code text-xs font-bold text-[#F8E5D7]/60 uppercase tracking-widest block mb-2">
                PAGE 3 — MAKING THE UNEXPECTED
              </span>
              <h2 className="font-serif-display text-3xl sm:text-5xl text-[#F8E5D7] mb-2">
                Making the Unexpected
              </h2>
              <p className="font-body text-sm sm:text-base text-[#F8E5D7]/85 leading-relaxed mb-4">
                The concept moved from visual direction to physical execution.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono-code text-xs font-bold bg-[#3E2723] text-[#F8E5D7] px-3 py-1.5 rounded-full uppercase tracking-wider">
                  CONCEPT → MATERIAL → CONSTRUCTION → INSTALLATION
                </span>
                <span className="font-mono-code text-xs font-bold bg-[#D69589] text-[#F8E5D7] px-3 py-1.5 rounded-full border border-[#A38D89]/30 uppercase tracking-wider">
                  ₹8,847 — TOTAL PROJECT COST
                </span>
              </div>
              <div className="mt-6 space-y-3 font-body text-sm sm:text-base text-[#F8E5D7]/85 leading-relaxed">
                {vm.page4BehindTheDisplay.narration.map((n, nIdx) => (
                  <p
                    key={nIdx}
                    className="bg-[#F8E5D7] border border-[#A38D89]/20 rounded-2xl p-4"
                  >
                    {n}
                  </p>
                ))}
              </div>
            </div>

            <div className="space-y-8 mb-10">
              {vm.page4BehindTheDisplay.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#F8E5D7] border-[1.5px] border-[#A38D89] rounded-2xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center paper-shadow-sm"
                >
                  {/* Photo Slot */}
                  <div className="md:col-span-5">
                    <div className="rounded-xl overflow-hidden border border-[#A38D89]/25 bg-[#3E2723]/5 aspect-[4/3] sm:aspect-[16/10]">
                      <img
                        src={stepImages[idx]?.src}
                        alt={step.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Description Slot */}
                  <div className="md:col-span-7 space-y-2">
                    <span className="text-[10px] font-mono-code bg-[#3E2723] text-[#F8E5D7] px-2.5 py-0.5 rounded-full font-bold uppercase inline-block">
                      {step.imageIndex}
                    </span>
                    <h3 className="font-serif-display text-2xl sm:text-3xl text-[#F8E5D7]">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm sm:text-base text-[#F8E5D7]/85 leading-relaxed pt-1">
                      {step.desc}
                    </p>
                    <div className="font-mono-code text-xs text-[#F8E5D7]/60 pt-2 border-t border-[#A38D89]/15">
                      Process Note: {stepImages[idx]?.caption}
                    </div>
                  </div>
                </div>
              ))}
            </div>

        </div>

        {/* SECTION: SKILLS & VM PRINCIPLES */}
        <div className="bg-[#F8E5D7] border-[1.5px] border-[#A38D89] rounded-3xl p-8 sm:p-14 paper-shadow-lg relative">
            <div className="absolute -top-3 right-12">
              <WashiTape color="#D69589" width="w-28" />
            </div>

            <span className="font-mono-code text-xs font-bold text-[#F8E5D7]/60 uppercase tracking-widest block mb-4">
              PAGE 04 — LEARNING THROUGH THE PROCESS
            </span>

            {/* FINAL WINDOW DISPLAY HERO PHOTO */}
            <div className="mb-12 bg-[#F8E5D7] border-[1.5px] border-[#A38D89] rounded-2xl p-4 sm:p-6 paper-shadow">
              <div className="rounded-xl overflow-hidden border border-[#A38D89]/25 mb-3 bg-[#3E2723]/5 max-h-[500px]">
                <img
                  src="/portfolio-assets/f72aff62-4ccf-4668-9ba7-1a88dc9a9eab.jpg"
                  alt="Cover Story Completed Window Display Installation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between font-mono-code text-xs text-[#F8E5D7]">
                <span className="font-bold">Final Window Installation — Mannequin Focal Point & Lighting Harmony</span>
                <span className="text-[#F8E5D7]/60">Symmetrical Balance & Vertical Draping</span>
              </div>
            </div>

            {/* SKILLS I APPLIED */}
            <div className="mb-10">
              <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#F8E5D7] mb-4 pb-2 border-b border-[#A38D89]/15">
                LEARNING THROUGH THE PROCESS
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {vm.page5SkillsAndPrinciples.skillsApplied.map((sk, idx) => (
                  <div key={idx} className="p-5 bg-[#F8E5D7] border border-[#A38D89]/20 rounded-2xl">
                    <h3 className="font-mono-code text-xs font-bold text-[#F8E5D7] uppercase mb-2">
                      {sk.title}
                    </h3>
                    <p className="font-body text-xs text-[#F8E5D7]/80 leading-relaxed">
                      {sk.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* VM PRINCIPLES APPLIED */}
            <div className="mb-10">
              <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#F8E5D7] mb-4 pb-2 border-b border-[#A38D89]/15">
                SKILLS APPLIED
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {vm.page5SkillsAndPrinciples.vmPrinciplesApplied.map((p, idx) => (
                  <div key={idx} className="p-5 bg-[#F8E5D7] border border-[#A38D89]/20 rounded-2xl">
                    <span className="font-mono-code text-xs text-[#F8E5D7]/50 font-bold block mb-1">
                      {p.number}.
                    </span>
                    <h3 className="font-serif-display text-xl text-[#F8E5D7] mb-1">
                      {p.name}
                    </h3>
                    <p className="font-body text-xs text-[#F8E5D7]/80 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* WHAT I LEARNED */}
            <div className="p-8 bg-[#F8E5D7] border-[1.5px] border-[#A38D89] rounded-2xl mb-8">
              <h2 className="font-serif-display text-3xl text-[#F8E5D7] mb-3">
                WHAT I LEARNED
              </h2>
              <p className="font-body text-sm sm:text-base text-[#F8E5D7]/85 leading-relaxed">
                {vm.page5SkillsAndPrinciples.whatILearned}
              </p>
            </div>

            <div className="flex justify-end pt-6 border-t border-[#A38D89]/15 font-mono-code text-xs">
              <Link
                to="/projects/project-3"
                className="bg-[#3E2723] text-[#F8E5D7] px-5 py-2.5 rounded-xl font-bold hover:bg-[#A38D89] cursor-pointer flex items-center gap-1.5"
              >
                <span>Next Project: Start Up →</span>
              </Link>
            </div>
          </div>
      </div>
    </div>
  );
};
