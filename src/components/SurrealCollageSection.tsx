import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Layers, Compass, BookmarkCheck, ArrowRight, CornerDownRight } from 'lucide-react';
import { FlowerMark, HandDrawnArrow, WashiTape, PaperClip, HandDrawnStar } from './CustomDoodles';

export const SurrealCollageSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number>(0);

  const features = [
    {
      id: 0,
      title: "Throw your thoughts onto an infinite canvas and watch them evolve",
      tag: "SPATIAL CANVAS",
      accent: "#D69589",
      subtitle: "No rigid database tables or sterile bullet points. Scatter screenshots, sketches, audio voice memos, and snippets exactly where your intuition puts them.",
      detail: "Pan, zoom, group, and let ideas breathe across an unconstrained surface that adapts to your brain's natural rhythm."
    },
    {
      id: 1,
      title: "Turn scattered ideas into coherent plans with your AI collaborator",
      tag: "CURIO SYNTHESIS",
      accent: "#D69589",
      subtitle: "Curio doesn't replace your artistic voice; it acts as the sharpest studio assistant you've ever had, noticing unseen patterns across 40 disparate notes.",
      detail: "Cluster related thoughts into exhibition outlines, product launches, or editorial manuscripts with one gentle prompt."
    },
    {
      id: 2,
      title: "Save anything that sparks your creativity from the web",
      tag: "TACTILE CLIPPER",
      accent: "#A38D89",
      subtitle: "One-click capture for high-res typography specimens, color chips, podcast transcripts, and obscure forum threads.",
      detail: "Everything lands on your intake desk with rich metadata, ready to be pinned, annotated, or remixed."
    },
    {
      id: 3,
      title: "Experience the blissful feeling of a perfectly organized junk drawer",
      tag: "AUTO-ORGANIZER",
      accent: "#D69589",
      subtitle: "Keep the charm of raw creative mess without the dread of losing that one brilliant shower idea from three months ago.",
      detail: "Semantic recall searches by meaning, mood, texture, or color tone — not just rigid keywords."
    }
  ];

  return (
    <section id="chaos-to-creativity" className="py-24 lg:py-32 bg-[#FADBD9] border-y border-[#A38D89]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Metadata Header */}
        <div className="flex items-center justify-between font-mono-code text-xs text-[#F8E5D7]/50 pb-4 border-b border-[#A38D89]/10 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3E2723]" />
            <span>SECTION 02 // CREATIVE ENGINE</span>
          </div>
          <span>PRINCIPLE: ORGANIZED CHAOS</span>
        </div>

        {/* Two-Column Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (45-50% width): Heading & Feature Stack */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="font-mono-code text-xs uppercase tracking-widest text-[#F8E5D7]/60 block mb-2">
                FROM SCRAPS TO SYMPHONIES
              </span>
              <h2 className="font-serif-display text-4xl sm:text-6xl text-[#F8E5D7] leading-[1.05] tracking-tight">
                Transform chaos into creativity.
              </h2>
              <p className="font-mono-code text-sm text-[#F8E5D7]/80 mt-4 leading-relaxed max-w-lg">
                Great work doesn’t start in neat corporate spreadsheets. It starts in messy notebooks, frantic bookmarks, and late-night recordings.
              </p>
            </div>

            {/* Feature Stack: 4 Outlined Cards */}
            <div className="space-y-4 pt-2">
              {features.map((feat, index) => {
                const isActive = activeCard === index;
                return (
                  <motion.div
                    key={feat.id}
                    onClick={() => setActiveCard(index)}
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', damping: 20 }}
                    className={`relative cursor-pointer rounded-[14px] border-[1.5px] border-[#A38D89] p-6 sm:p-7 transition-all ${
                      isActive
                        ? 'bg-[#FADBD9] paper-shadow'
                        : 'bg-[#F8E5D7] hover:bg-[#FADBD9] hover:paper-shadow-sm'
                    }`}
                  >
                    {/* Corner pastel color tag */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span 
                          className="px-2.5 py-0.5 rounded text-[11px] font-mono-code uppercase font-bold border border-[#A38D89]"
                          style={{ backgroundColor: feat.accent }}
                        >
                          {feat.tag}
                        </span>
                        <span className="font-mono-code text-xs text-[#F8E5D7]/50">
                          0{index + 1}
                        </span>
                      </div>
                      <span className="text-xs font-mono-code text-[#F8E5D7]/50">
                        {isActive ? '✦ ACTIVE VIEW' : 'CLICK TO EXPAND'}
                      </span>
                    </div>

                    <h3 className="font-serif-display text-2xl sm:text-3xl text-[#F8E5D7] leading-tight mb-2">
                      {feat.title}
                    </h3>

                    <p className="font-body text-sm text-[#F8E5D7]/80 leading-relaxed">
                      {feat.subtitle}
                    </p>

                    {/* Expandable detail when active */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-4 pt-4 border-t border-[#A38D89]/20 flex items-start gap-2"
                      >
                        <CornerDownRight className="w-4 h-4 text-[#F8E5D7] mt-0.5 shrink-0" />
                        <p className="font-mono-code text-xs text-[#F8E5D7]/90 italic">
                          {feat.detail}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column (Surreal Collage Visual) */}
          <div className="lg:col-span-6 relative">
            {/* Surreal Collage Art Frame */}
            <div className="relative bg-[#FADBD9] border-[1.5px] border-[#A38D89] rounded-3xl p-6 sm:p-8 paper-shadow-lg overflow-hidden">
              {/* Washi Tape at Top */}
              <div className="absolute -top-3 right-1/4 z-20">
                <WashiTape color="#D69589" width="w-28" />
              </div>

              {/* Art Specimen Tag */}
              <div className="flex items-center justify-between border-b border-[#A38D89]/20 pb-3 mb-5">
                <div className="flex items-center gap-2">
                  <FlowerMark size={20} />
                  <span className="font-mono-code text-xs uppercase font-bold text-[#F8E5D7]">
                    FIG. 02 // THE COGNITIVE COLLAGE
                  </span>
                </div>
                <span className="font-mono-code text-[11px] text-[#F8E5D7]/60 bg-[#FADBD9] px-2 py-0.5 border border-[#A38D89] rounded">
                  COLLAGE ARCHIVE #77
                </span>
              </div>

              {/* Main Cutout Collage Artwork */}
              <div className="relative rounded-2xl border-[1.5px] border-[#A38D89] overflow-hidden bg-[#A38D89]">
                <img
                  src="/src/assets/images/creative_chaos_collage_1789788411014.jpg"
                  alt="Surreal editorial collage of mind blooming with ideas and flowers"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover max-h-[500px]"
                />

                {/* Floating Handwritten Notes on top of artwork */}
                <div className="absolute top-4 left-4 bg-[#FADBD9]/95 border border-[#A38D89] px-3 py-1.5 rounded-lg paper-shadow-sm rotate-[-2deg]">
                  <span className="font-hand text-lg text-[#F8E5D7]">
                    "Botanical mind at 2:00 AM"
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 bg-[#D69589] border border-[#A38D89] px-3 py-1 rounded-full paper-shadow-sm rotate-2">
                  <span className="font-mono-code text-xs text-[#F8E5D7] font-bold">
                    IDEA DENSITY: 98%
                  </span>
                </div>
              </div>

              {/* Scrapbook Details & Annotations Below Visual */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#FADBD9] border border-[#A38D89]/30 p-3.5 rounded-xl">
                  <div className="flex items-center gap-1.5 mb-1 text-xs font-mono-code font-bold text-[#F8E5D7]">
                    <HandDrawnStar className="w-3.5 h-3.5 text-amber-600" />
                    <span>SYNAPTIC CLUSTERING</span>
                  </div>
                  <p className="font-mono-code text-[11px] text-[#F8E5D7]/70">
                    Connects vintage print techniques with current AI models without flattening nuance.
                  </p>
                </div>

                <div className="bg-[#FADBD9] border border-[#A38D89]/30 p-3.5 rounded-xl">
                  <div className="flex items-center gap-1.5 mb-1 text-xs font-mono-code font-bold text-[#F8E5D7]">
                    <Sparkles className="w-3.5 h-3.5 text-[#D69589]" />
                    <span>PHYSICALITY IN DIGITAL</span>
                  </div>
                  <p className="font-mono-code text-[11px] text-[#F8E5D7]/70">
                    Paper grain, tactile edges, and ink density that make digital ideation feel alive.
                  </p>
                </div>
              </div>

              {/* Hand-drawn scribble arrow indicator */}
              <div className="mt-4 flex items-center justify-between text-xs font-mono-code text-[#F8E5D7]/60 pt-3 border-t border-[#A38D89]/15">
                <span className="font-hand text-lg text-[#F8E5D7]">
                  Handmade scrapbook composition • 2026
                </span>
                <span className="font-mono-code text-[10px]">PLATE 14B</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
