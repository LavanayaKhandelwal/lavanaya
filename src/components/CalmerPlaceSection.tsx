import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sliders, Sparkles, Check, RefreshCw, LayoutGrid, Layers } from 'lucide-react';
import { FlowerMark, WashiTape, PaperClip, HandDrawnArrow } from './CustomDoodles';

export const CalmerPlaceSection: React.FC = () => {
  const [isOrganized, setIsOrganized] = useState(false);

  const deskItems = [
    {
      id: 1,
      title: "Tab 47: Rare French Typography foundry 1920",
      messyPos: "top-4 left-6 -rotate-6",
      neatPos: "col-span-1",
      tag: "BOOKMARK",
      bg: "#F4C9D6",
      border: "#3E2723"
    },
    {
      id: 2,
      title: "Voice Memo 03: 'Remember the smell of pine resin'",
      messyPos: "top-14 right-10 rotate-8",
      neatPos: "col-span-1",
      tag: "AUDIO",
      bg: "#D69589",
      border: "#3E2723"
    },
    {
      id: 3,
      title: "Screenshot 2026-03-12: Brutalist stairs in Kyoto",
      messyPos: "bottom-8 left-16 rotate-4",
      neatPos: "col-span-1",
      tag: "IMAGE",
      bg: "#A38D89",
      border: "#3E2723"
    },
    {
      id: 4,
      title: "Apple Notes fragment: 'Title for chapter 3?'",
      messyPos: "bottom-12 right-24 -rotate-3",
      neatPos: "col-span-1",
      tag: "SCRAP",
      bg: "#D69589",
      border: "#3E2723"
    },
    {
      id: 5,
      title: "Slack self-message: 'Read Tanizaki essay this weekend'",
      messyPos: "top-28 left-1/3 rotate-12",
      neatPos: "col-span-1",
      tag: "REMINDER",
      bg: "#D69589",
      border: "#3E2723"
    },
    {
      id: 6,
      title: "Coffee napkin scribble: 'Foldable paper desk lamp'",
      messyPos: "bottom-24 left-1/2 -rotate-8",
      neatPos: "col-span-1",
      tag: "SKETCH",
      bg: "#F4C9D6",
      border: "#3E2723"
    }
  ];

  return (
    <section className="py-24 lg:py-36 bg-[#F4C9D6] border-b border-[#A38D89]/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Whitespace-heavy Minimal Statement */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono-code text-xs uppercase tracking-widest text-[#F8E5D7]/60 block mb-3">
            MENTAL DECOMPRESSION
          </span>

          <h2 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl text-[#F8E5D7] leading-[1.02] tracking-tight mb-6">
            Less searching. Less forgetting.{' '}
            <span className="italic font-serif-display underline decoration-[#D69589] decoration-4 underline-offset-8">
              More making.
            </span>
          </h2>

          <p className="font-mono-code text-sm sm:text-base text-[#F8E5D7]/80 max-w-xl mx-auto leading-relaxed">
            Your ideas deserve somewhere better than 47 open tabs, random screenshots, and notes you can never find again.
          </p>

          {/* Interactive State Toggle Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setIsOrganized(!isOrganized)}
              className="flex items-center gap-3 bg-[#F4C9D6] border-[1.5px] border-[#A38D89] px-6 py-3 rounded-full text-xs font-mono-code uppercase tracking-wider font-bold paper-shadow-hover transition-all cursor-pointer"
            >
              {isOrganized ? (
                <>
                  <Layers className="w-4 h-4 text-amber-700" />
                  <span>Scatter Ideas (Show Raw Chaos)</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-[#D69589]" />
                  <span>Curio Clean-Up (Experience Order)</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* THE JUNK DRAWER TRANSFORMATION STAGE */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#F8E5D7] border-[1.5px] border-[#A38D89] rounded-3xl p-6 sm:p-10 paper-shadow-lg relative min-h-[460px] flex flex-col justify-center">
            {/* Top Indicator */}
            <div className="flex items-center justify-between border-b border-[#A38D89]/15 pb-3 mb-6">
              <div className="flex items-center gap-2">
                <FlowerMark size={20} />
                <span className="font-mono-code text-xs font-bold text-[#F8E5D7]">
                  DESK STATE: {isOrganized ? "CURATED HARMONY" : "SCATTERED RAW MEMORY"}
                </span>
              </div>
              <span className="font-mono-code text-[11px] text-[#F8E5D7]/60">
                {isOrganized ? "SYNTHESIZED GRID" : "UNRESTRICTED CLUTTER"}
              </span>
            </div>

            {/* Transitioning cards */}
            {!isOrganized ? (
              /* Chaotic pile view */
              <div className="relative h-[360px] sm:h-[380px] w-full border border-dashed border-[#A38D89]/25 rounded-2xl bg-[#F4C9D6]/40 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                  <span className="font-serif-display text-4xl sm:text-6xl text-[#F8E5D7] italic">
                    The Creative Junk Drawer
                  </span>
                </div>

                {deskItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.05, zIndex: 40 }}
                    className={`absolute ${item.messyPos} max-w-[240px] sm:max-w-[280px] p-3 sm:p-4 rounded-xl border-[1.5px] border-[#A38D89] paper-shadow-sm cursor-pointer transition-transform`}
                    style={{ backgroundColor: item.bg }}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[9px] font-mono-code px-1.5 py-0.5 rounded bg-[#3E2723] text-[#F8E5D7] font-bold">
                        {item.tag}
                      </span>
                      <span className="text-[10px] font-mono-code text-[#F8E5D7]/50">UNFILED</span>
                    </div>
                    <p className="font-mono-code text-xs text-[#F8E5D7] font-medium leading-snug">
                      {item.title}
                    </p>
                  </motion.div>
                ))}
              </div>
            ) : (
              /* Organized curated grid view */
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {deskItems.map((item, idx) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl border-[1.5px] border-[#A38D89] paper-shadow-sm flex flex-col justify-between bg-[#F4C9D6] hover:bg-[#F4C9D6] transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span 
                          className="text-[10px] font-mono-code px-2 py-0.5 rounded border border-[#A38D89] font-bold"
                          style={{ backgroundColor: item.bg }}
                        >
                          {item.tag}
                        </span>
                        <span className="text-[10px] font-mono-code text-[#D69589] flex items-center gap-1 font-bold">
                          <Check className="w-3 h-3" /> Clustered
                        </span>
                      </div>
                      <h4 className="font-serif-display text-lg text-[#F8E5D7] leading-snug mb-1">
                        {item.title}
                      </h4>
                    </div>
                    <div className="mt-3 pt-2 border-t border-[#A38D89]/15 flex justify-between items-center text-[10px] font-mono-code text-[#F8E5D7]/60">
                      <span>FOLIO: ARCHIVE 01</span>
                      <span>READY TO USE</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Bottom Note */}
            <div className="mt-6 pt-4 border-t border-[#A38D89]/15 flex items-center justify-between text-xs font-mono-code text-[#F8E5D7]/60">
              <span className="font-hand text-lg text-[#F8E5D7]">
                "Nothing is lost, nothing is forced."
              </span>
              <span className="font-mono-code text-[11px]">
                {isOrganized ? "Click button above to scatter again" : "Click 'Curio Clean-Up' above"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
