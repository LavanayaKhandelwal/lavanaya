import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Eye, Palette, Hammer, Lightbulb } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ProjectVisualMerchandisingPage: React.FC = () => {
  const { projectVM: vm } = portfolioData;

  const stepImages = [
    { src: "/portfolio-assets/1e36b3dd-85f2-438b-b90a-e7143dbd03cd.jpg", caption: "Holographic sheets transformed into layered petals" },
    { src: "/portfolio-assets/6fa49fa5-d790-4c76-9f00-69ca01bfcdc2.jpg", caption: "Wire and foam provided structure and dimension" },
    { src: "/portfolio-assets/7eee7676-2ce8-4667-9ef7-abf624ba1833.jpg", caption: "Organza added softness" },
    { src: "/portfolio-assets/97e20f9d-778d-44a3-bc5f-d32b6c39b7a3.jpg", caption: "Lighting enhanced the reflective surfaces" },
    { src: "/portfolio-assets/DD05B299-B533-4126-B54A-3B48CD3AA413.jpg", caption: "The mannequin remained the focal point, framed by florals, texture and light" }
  ];

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Folio rule */}
        <div className="rule-b pb-4 mb-14 flex items-center justify-between eyebrow text-[#A38D89]">
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

        {/* COVER / PAGE 1 */}
        <section className="mb-24 lg:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <p className="eyebrow text-[#D69589] border-l-2 border-[#D69589] pl-4 block mb-4">
                {vm.cover.credits[0]}
              </p>

              <h1 className="font-serif-display text-5xl sm:text-6xl lg:text-7xl text-[#F8E5D7] leading-[1.02] tracking-tight">
                {vm.cover.title}
              </h1>

              <div className="rule-l border-[#D69589] pl-6 space-y-2">
                <p className="font-serif-display text-2xl sm:text-3xl text-[#F8E5D7]/80 italic leading-snug">
                  {vm.cover.brand} — {vm.cover.season}
                </p>
              </div>

              <div className="rule-t pt-6 grid grid-cols-3 gap-4 font-mono-code text-xs">
                <div>
                  <span className="text-[#A38D89] block text-[10px] uppercase">CLIENT / BRAND:</span>
                  <span className="font-bold text-[#F8E5D7]">{vm.cover.brand}</span>
                </div>
                <div>
                  <span className="text-[#A38D89] block text-[10px] uppercase">SEASON:</span>
                  <span className="font-bold text-[#F8E5D7]">{vm.cover.season}</span>
                </div>
                <div>
                  <span className="text-[#A38D89] block text-[10px] uppercase">DISCIPLINE:</span>
                  <span className="font-bold text-[#F8E5D7]">Visual Merchandising & Spatial Design</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="plate p-4">
                <img
                  src="/portfolio-assets/BRAND BOOK  - 1.png"
                  alt="Cover Story Brand Book"
                  className="w-full h-auto object-cover rounded-xl"
                />
                <p className="plate-caption text-center mt-2.5">Cover Story Spring/Summer In-Store Experience Dossier</p>
              </div>
            </div>
          </div>
        </section>

        {/* PAGE 2 — THE BRIEF */}
        <section className="mb-24 lg:mb-32">
          <div className="rule-b pb-6 mb-14 flex items-baseline gap-6">
            <span className="index-figure text-7xl sm:text-8xl text-[#A38D89]/30 leading-none">02</span>
            <div>
              <p className="eyebrow text-[#D69589] mb-1">PAGE 2 — THE BRIEF</p>
              <h2 className="font-serif-display text-3xl sm:text-4xl text-[#F8E5D7] tracking-tight">{vm.page2Brief.briefTitle}</h2>
            </div>
          </div>

          <p className="font-body text-base text-[#F8E5D7]/85 leading-loose max-w-3xl mb-14 whitespace-pre-line">
            {vm.page2Brief.briefText}
          </p>

          {/* WHAT I INVESTIGATED — ruled pillars */}
          <div className="mb-12">
            <p className="eyebrow text-[#A38D89] mb-4 block">WHAT I INVESTIGATED</p>
            <div className="space-y-0">
              {vm.page2Brief.whatIInvestigated.map((pillar, pIdx) => (
                <div key={pIdx} className={`rule-t grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 py-6 ${pIdx !== 0 ? '' : ''}`}>
                  <div className="md:col-span-4">
                    <h3 className="font-serif-display text-xl text-[#F8E5D7]">{pillar.pillar}</h3>
                  </div>
                  <div className="md:col-span-8">
                    <ul className="space-y-2">
                      {pillar.points.map((pt, pIdx2) => (
                        <li key={pIdx2} className="flex items-start gap-2 font-mono-code text-xs text-[#F8E5D7]/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D69589] mt-1 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              <div className="rule-b" />
            </div>
          </div>

          {/* HOW I REACHED THE CONCEPT */}
          <div className="rule-t pt-8 mb-10">
            <p className="eyebrow text-[#A38D89] mb-5 block">HOW I REACHED THE CONCEPT</p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono-code text-xs">
              {vm.page2Brief.howIReachedTheConcept.map((node, nIdx) => (
                <React.Fragment key={nIdx}>
                  <span className="px-3 py-1.5 bg-[#F4C9D6] border border-[#A38D89] rounded-lg font-bold text-[#3E2723]">
                    {node}
                  </span>
                  {nIdx < vm.page2Brief.howIReachedTheConcept.length - 1 && (
                    <span className="text-[#A38D89] font-bold">↓</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="max-w-3xl p-6 bg-[#3E2723] border-[1.5px] border-[#A38D89]/40 rounded-2xl mb-8">
            <p className="font-serif-display text-2xl text-[#F8E5D7] italic">
              "{vm.page2Brief.conceptSummary}"
            </p>
          </div>

          <div className="max-w-3xl p-6 bg-[#705955] border-[1.5px] border-[#A38D89]/30 rounded-2xl">
            <p className="eyebrow text-[#F8E5D7] mb-2 block">MY DESIGN INSIGHT</p>
            <p className="font-body text-sm text-[#F8E5D7]/85 leading-relaxed">{vm.page2Brief.designInsight}</p>
          </div>
        </section>

        {/* PAGE 3 — MOOD & COLOUR BOARDS */}
        <section className="mb-24 lg:mb-32">
          <div className="rule-b pb-6 mb-14 flex items-baseline gap-6">
            <span className="index-figure text-7xl sm:text-8xl text-[#A38D89]/30 leading-none">03</span>
            <div>
              <p className="eyebrow text-[#D69589] mb-1">PAGE 3 — VISUAL BOARDS</p>
              <h2 className="font-serif-display text-3xl sm:text-4xl text-[#F8E5D7] tracking-tight">
                {vm.page3Boards.moodBoard.title}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <div className="plate p-3">
                <img src="/portfolio-assets/BRAND BOOK  - 16.png" alt="Mood Board Visual" className="w-full h-auto object-cover rounded-xl" />
              </div>
              <span className="plate-caption text-[#A38D89] block mt-2 text-center">
                Mood Board Visual Collages & Material Invocations
              </span>
            </div>

            <div className="lg:col-span-7 space-y-10">
              <div className="rule-t pt-8">
                <p className="font-body text-sm text-[#F8E5D7]/85 leading-relaxed mb-5">{vm.page3Boards.moodBoard.content}</p>
                <div className="flex flex-wrap gap-2 font-mono-code text-xs font-bold text-[#F8E5D7] pt-2 border-t border-[#A38D89]/15">
                  {vm.page3Boards.moodBoard.keywords.map((kw, kIdx) => (
                    <span key={kIdx} className="px-3 py-1 bg-[#F4C9D6] border border-[#A38D89] rounded-full text-[#3E2723]">{kw}</span>
                  ))}
                </div>
              </div>

              <div className="rule-t pt-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-6">
                  <div className="lg:col-span-6">
                    <h2 className="font-serif-display text-3xl text-[#F8E5D7] mb-3">{vm.page3Boards.colourBoard.title}</h2>
                    <p className="font-body text-sm text-[#F8E5D7]/85 leading-relaxed">{vm.page3Boards.colourBoard.content}</p>
                  </div>
                  <div className="lg:col-span-6">
                    <div className="plate overflow-hidden">
                      <img src="/portfolio-assets/BRAND BOOK  - 18.png" alt="Colour Board Palette" className="w-full h-auto object-cover" />
                    </div>
                    <span className="plate-caption text-[#A38D89] block mt-1.5 text-center">
                      Spring/Summer Colour Harmony & Iridescent Accents
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-4 border-t border-[#A38D89]/15">
                  {vm.page3Boards.colourBoard.palette.map((color, cIdx) => (
                    <div key={cIdx} className="bg-[#3E2723] border border-[#A38D89]/25 rounded-xl p-3 text-center">
                      <div className="w-full h-16 rounded-lg border border-[#A38D89]/20 mb-2" style={{ backgroundColor: color.hex }} />
                      <div className="font-mono-code text-xs font-bold text-[#F8E5D7]">{color.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PAGE 4 — BEHIND THE DISPLAY */}
        <section className="mb-24 lg:mb-32">
          <div className="rule-b pb-6 mb-14 flex items-baseline gap-6">
            <span className="index-figure text-7xl sm:text-8xl text-[#A38D89]/30 leading-none">04</span>
            <div>
              <p className="eyebrow text-[#D69589] mb-1">PAGE 4 — BEHIND THE DISPLAY</p>
              <h2 className="font-serif-display text-3xl sm:text-4xl text-[#F8E5D7] tracking-tight">Making the Unexpected</h2>
            </div>
          </div>

          <div className="space-y-12 mb-14">
            {vm.page4BehindTheDisplay.steps.map((step, sIdx) => (
              <div key={sIdx} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rule-t pt-10">
                <div className="lg:col-span-5">
                  <div className="plate aspect-[4/3] overflow-hidden">
                    <img src={stepImages[sIdx]?.src} alt={step.title} className="w-full h-full object-cover" />
                  </div>
                  <span className="plate-caption text-[#A38D89] block mt-2 text-center">{stepImages[sIdx]?.caption}</span>
                </div>
                <div className="lg:col-span-7 space-y-2">
                  <span className="font-mono-code text-xs text-[#D69589] font-bold">{step.imageIndex}</span>
                  <h3 className="font-serif-display text-2xl sm:text-3xl text-[#F8E5D7]">{step.title}</h3>
                  <p className="font-body text-sm text-[#F8E5D7]/85 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl p-8 bg-[#3E2723] border-[1.5px] border-[#A38D89]/40 rounded-3xl">
            <p className="eyebrow text-[#F8E5D7] mb-5 block">FROM CONCEPT TO INSTALLATION</p>
            <div className="space-y-4">
              {vm.page4BehindTheDisplay.narration.map((n, nIdx) => (
                <p key={nIdx} className="font-body text-sm text-[#F8E5D7]/85 leading-relaxed">{n}</p>
              ))}
            </div>
          </div>
        </section>

        {/* PAGE 5 — SKILLS & PRINCIPLES */}
        <section className="mb-24 lg:mb-32">
          <div className="rule-b pb-6 mb-14 flex items-baseline gap-6">
            <span className="index-figure text-7xl sm:text-8xl text-[#A38D89]/30 leading-none">05</span>
            <div>
              <p className="eyebrow text-[#D69589] mb-1">PAGE 5 — SKILLS & PRINCIPLES</p>
              <h2 className="font-serif-display text-3xl sm:text-4xl text-[#F8E5D7] tracking-tight">Skills Applied & VM Principles</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-14">
            {vm.page5SkillsAndPrinciples.skillsApplied.map((sk, sIdx) => (
              <div key={sIdx} className="rule-t pt-8">
                <h3 className="font-serif-display text-2xl text-[#F8E5D7] mb-2">{sk.title}</h3>
                <p className="font-body text-sm text-[#F8E5D7]/85 leading-relaxed">{sk.desc}</p>
              </div>
            ))}
          </div>

          <div className="rule-t pt-8 mb-14">
            <p className="eyebrow text-[#A38D89] mb-6 block">VM PRINCIPLES APPLIED</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {vm.page5SkillsAndPrinciples.vmPrinciplesApplied.map((pr, pIdx) => (
                <div key={pIdx} className="p-5 bg-[#3E2723] border-[1.5px] border-[#A38D89]/25 rounded-2xl">
                  <span className="font-mono-code text-xs text-[#D69589] font-bold block mb-1">{pr.number}.</span>
                  <h4 className="font-serif-display text-lg text-[#F8E5D7] mb-1">{pr.name}</h4>
                  <p className="font-body text-xs text-[#F8E5D7]/80 leading-relaxed">{pr.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rule-t pt-8">
            <p className="eyebrow text-[#A38D89] mb-4 block">WHAT I LEARNED</p>
            <p className="font-body text-base text-[#F8E5D7]/85 leading-loose max-w-3xl">
              {vm.page5SkillsAndPrinciples.whatILearned}
            </p>
          </div>

          <div className="rule-t pt-10 flex justify-end mt-12">
            <Link to="/projects/project-3" className="inline-flex items-center gap-3 eyebrow text-[#F8E5D7] editorial-link">
              <span>Next Project: Start Up →</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
