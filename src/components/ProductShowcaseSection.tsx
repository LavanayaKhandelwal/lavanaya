import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Maximize2, 
  Sparkles, 
  CheckCircle, 
  Mic, 
  Clock, 
  Compass, 
  Tag, 
  FileText, 
  Pin,
  Move,
  Check,
  Plus
} from 'lucide-react';
import { FlowerMark, HandDrawnArrow, WashiTape, PaperClip, HandDrawnStar } from './CustomDoodles';

export const ProductShowcaseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'canvas' | 'synthesizer' | 'roadmap'>('canvas');
  const [pinnedNotes, setPinnedNotes] = useState([
    { id: 1, text: "Sound design using 80s tape echoes", done: false, tag: "AUDIO", color: "#D69589" },
    { id: 2, text: "Sample Japanese sumi-e ink textures", done: true, tag: "VISUAL", color: "#D69589" },
    { id: 3, text: "Interview master bookbinders in Lyon", done: false, tag: "RESEARCH", color: "#D69589" }
  ]);

  const toggleNote = (id: number) => {
    setPinnedNotes(prev => prev.map(n => n.id === id ? { ...n, done: !n.done } : n));
  };

  return (
    <section id="product-showcase" className="py-24 lg:py-36 bg-graph-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FADBD9] border border-[#A38D89] rounded-full text-xs font-mono-code uppercase tracking-widest text-[#F8E5D7] mb-4 paper-shadow-sm">
            <Clock className="w-3.5 h-3.5 text-[#F8E5D7]" />
            <span>THE 24-HOUR IDEA LIFECYCLE</span>
          </div>

          <h2 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl text-[#F8E5D7] leading-[1.02] tracking-tight">
            Turn midnight musings into morning action plans.
          </h2>

          <p className="font-mono-code text-sm sm:text-base text-[#F8E5D7]/80 mt-5 max-w-xl mx-auto leading-relaxed">
            A workspace that honors your messy sparks at 2:00 AM, then builds the bridge to execution by 9:00 AM.
          </p>
        </div>

        {/* OVERSIZED PRODUCT SHOWCASE IN A PASTEL GREEN CONTAINER */}
        <div className="relative bg-[#D69589] border-[2px] border-[#A38D89] rounded-3xl p-4 sm:p-8 lg:p-10 paper-shadow-lg">
          {/* Top Washi Tape Pins */}
          <div className="absolute -top-3 left-16 z-20">
            <WashiTape color="#D69589" width="w-28" />
          </div>
          <div className="absolute -top-3 right-20 z-20">
            <WashiTape color="#A38D89" width="w-28" />
          </div>

          {/* Top Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-[#A38D89]/20">
            <div className="flex items-center gap-3">
              <FlowerMark size={24} />
              <div>
                <span className="font-mono-code text-xs font-bold uppercase text-[#F8E5D7] block">
                  CURIO WORKSPACE SPECIMEN 01
                </span>
                <span className="font-mono-code text-[11px] text-[#F8E5D7]/70">
                  PROJECT: "BOTANICAL TYPE LAB // ARCHIVE EDITION"
                </span>
              </div>
            </div>

            {/* Interactive Mode Tabs */}
            <div className="flex items-center gap-2 bg-[#FADBD9] p-1 border-[1.5px] border-[#A38D89] rounded-xl">
              <button
                onClick={() => setActiveTab('canvas')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono-code uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'canvas'
                    ? 'bg-[#3E2723] text-[#F8E5D7] font-bold'
                    : 'text-[#F8E5D7]/70 hover:text-[#F8E5D7]'
                }`}
              >
                Canvas Desk
              </button>
              <button
                onClick={() => setActiveTab('synthesizer')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono-code uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'synthesizer'
                    ? 'bg-[#3E2723] text-[#F8E5D7] font-bold'
                    : 'text-[#F8E5D7]/70 hover:text-[#F8E5D7]'
                }`}
              >
                AI Synthesizer
              </button>
              <button
                onClick={() => setActiveTab('roadmap')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono-code uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'roadmap'
                    ? 'bg-[#3E2723] text-[#F8E5D7] font-bold'
                    : 'text-[#F8E5D7]/70 hover:text-[#F8E5D7]'
                }`}
              >
                Action Matrix
              </button>
            </div>
          </div>

          {/* INNER INTERFACE CANVAS (Physical paper-inspired frame) */}
          <div className="bg-[#FADBD9] border-[1.5px] border-[#A38D89] rounded-2xl p-4 sm:p-6 min-h-[500px] relative overflow-hidden paper-shadow">
            {/* Corner Stamp */}
            <div className="absolute top-4 right-4 z-10 hidden sm:block">
              <span className="font-mono-code text-[10px] border border-[#A38D89] px-2 py-0.5 rounded bg-[#FADBD9] text-[#F8E5D7]">
                ZOOM: 100% • GRID: 24PT
              </span>
            </div>

            {activeTab === 'canvas' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
              >
                {/* Left Side: Intake voice note & transcription */}
                <div className="lg:col-span-5 space-y-4">
                  {/* Voice Note Artifact Card */}
                  <div className="bg-[#FADBD9] border-[1.5px] border-[#A38D89] rounded-xl p-5 paper-shadow -rotate-1 relative">
                    <div className="flex items-center justify-between border-b border-[#A38D89]/15 pb-2.5 mb-3">
                      <div className="flex items-center gap-2">
                        <Mic className="w-4 h-4 text-rose-600 animate-pulse" />
                        <span className="font-mono-code text-xs font-bold text-[#F8E5D7]">
                          VOICE THOUGHT #104
                        </span>
                      </div>
                      <span className="font-mono-code text-[10px] bg-[#D69589] px-1.5 py-0.5 rounded border border-[#A38D89]">
                        RECORDED 01:28 AM
                      </span>
                    </div>

                    <p className="font-serif-display text-xl text-[#F8E5D7] italic leading-snug">
                      "What if the book's dust jacket is printed on seeded plantable wildflower paper, so readers can bury the cover in spring?"
                    </p>

                    <div className="mt-4 pt-3 border-t border-[#A38D89]/15 flex items-center justify-between">
                      <span className="font-mono-code text-[11px] text-[#F8E5D7]/60">
                        Duration: 0:42 • Transcribed
                      </span>
                      <span className="font-mono-code text-[11px] font-bold text-[#A38D89]">
                        ✦ Clustered to: Production
                      </span>
                    </div>
                  </div>

                  {/* Curio synthesis notes */}
                  <div className="bg-[#A38D89]/30 border-[1.5px] border-[#A38D89] rounded-xl p-4 paper-shadow-sm rotate-1">
                    <div className="flex items-center gap-2 mb-2 font-mono-code text-xs font-bold text-[#F8E5D7]">
                      <Sparkles className="w-3.5 h-3.5 text-[#D69589]" />
                      <span>CURIO AUTO-RELATIONSHIP DETECTED</span>
                    </div>
                    <p className="font-body text-xs text-[#F8E5D7]/80 leading-relaxed mb-3">
                      Cross-referenced with your bookmark on "Hokkaido handmade mulberry paper mills". Sourcing quote available from Kyoto artisanal guild.
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono-code bg-[#FADBD9] border border-[#A38D89] px-2 py-0.5 rounded">
                        Paper Weight: 180gsm
                      </span>
                      <span className="text-[10px] font-mono-code bg-[#FADBD9] border border-[#A38D89] px-2 py-0.5 rounded">
                        Seeds: Chamomile & Poppies
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Moodboard & Interactive Pinned Checklist */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="bg-[#FADBD9] border-[1.5px] border-[#A38D89] rounded-xl p-5 paper-shadow">
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#A38D89]/15">
                      <div className="flex items-center gap-2">
                        <Pin className="w-4 h-4 text-[#F8E5D7]" />
                        <h4 className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#F8E5D7]">
                          ACTIVE SYNTHESIZED TASKS
                        </h4>
                      </div>
                      <span className="font-mono-code text-[11px] text-[#F8E5D7]/60">
                        {pinnedNotes.filter(p => p.done).length} / {pinnedNotes.length} EXECUTED
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {pinnedNotes.map((note) => (
                        <div
                          key={note.id}
                          onClick={() => toggleNote(note.id)}
                          className={`flex items-center justify-between p-3 rounded-lg border-[1.5px] transition-all cursor-pointer ${
                            note.done
                              ? 'bg-[#3E2723]/5 border-[#A38D89]/30 opacity-70'
                              : 'bg-[#F8E5D7] border-[#A38D89] paper-shadow-sm hover:translate-x-1'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-5 h-5 rounded border border-[#A38D89] flex items-center justify-center ${
                              note.done ? 'bg-[#3E2723] text-[#F8E5D7]' : 'bg-[#FADBD9]'
                            }`}>
                              {note.done && <Check className="w-3.5 h-3.5" />}
                            </div>
                            <span className={`font-mono-code text-xs text-[#F8E5D7] ${note.done ? 'line-through text-[#F8E5D7]/50' : ''}`}>
                              {note.text}
                            </span>
                          </div>
                          <span 
                            className="text-[10px] font-mono-code px-2 py-0.5 rounded border border-[#A38D89] font-bold"
                            style={{ backgroundColor: note.color }}
                          >
                            {note.tag}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Handwritten annotation under checklist */}
                    <div className="mt-4 pt-3 border-t border-dashed border-[#A38D89]/25 flex items-center justify-between">
                      <span className="font-hand text-lg text-[#F8E5D7] rotate-[-1deg]">
                        "Ideas turn into reality when each step is tiny"
                      </span>
                      <span className="font-mono-code text-[11px] text-[#F8E5D7]/60">
                        Auto-scheduled for Friday
                      </span>
                    </div>
                  </div>

                  {/* Collage visual preview snippet */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#F8E5D7] border border-[#A38D89] p-3 rounded-xl">
                      <div className="h-24 rounded-lg overflow-hidden border border-[#A38D89]/30 relative">
                        <img
                          src="/src/assets/images/curated_moodboard_art_1789788458713.jpg"
                          alt="Color and material swatch"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute top-1 left-1 bg-[#D69589] text-[#F8E5D7] text-[9px] font-mono-code px-1.5 py-0.5 rounded border border-[#A38D89]">
                          SWATCH REF
                        </span>
                      </div>
                      <p className="font-mono-code text-[10px] text-[#F8E5D7] mt-2 font-bold">
                        Earthy Raw Tone Palette
                      </p>
                    </div>

                    <div className="bg-[#F8E5D7] border border-[#A38D89] p-3 rounded-xl flex flex-col justify-between">
                      <div>
                        <span className="font-mono-code text-[10px] uppercase text-[#F8E5D7]/60 block mb-1">
                          EXPORT DESTINATION
                        </span>
                        <p className="font-serif-display text-xl text-[#F8E5D7] leading-snug">
                          Publish as Interactive Web Dispatch
                        </p>
                      </div>
                      <div className="pt-2 border-t border-[#A38D89]/15 flex items-center justify-between">
                        <span className="font-mono-code text-[10px] bg-[#D69589] px-1.5 py-0.5 rounded border border-[#A38D89]">
                          READY
                        </span>
                        <span className="font-mono-code text-[10px] text-[#F8E5D7]/60">1-CLICK</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'synthesizer' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div className="bg-[#FADBD9] border-[1.5px] border-[#A38D89] rounded-xl p-6 paper-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-5 h-5 text-[#D69589]" />
                    <h4 className="font-serif-display text-2xl text-[#F8E5D7]">
                      Curio Semantic Mind Map
                    </h4>
                  </div>
                  <p className="font-body text-sm text-[#F8E5D7]/80 mb-6">
                    Curio parsed 48 random fragments and structured them into 3 distinct creative vectors without losing personal voice:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-[#FADBD9] border border-[#A38D89] p-4 rounded-xl">
                      <span className="font-mono-code text-[11px] bg-[#D69589] px-2 py-0.5 rounded border border-[#A38D89] font-bold">
                        VECTOR A: TACTILE
                      </span>
                      <h5 className="font-serif-display text-xl text-[#F8E5D7] mt-2 mb-2">Physical Book Craft</h5>
                      <ul className="space-y-1.5 font-mono-code text-xs text-[#F8E5D7]/80">
                        <li>• Seeded wildflower cover</li>
                        <li>• Letterpress emboss tests</li>
                        <li>• Lyon cotton twine binding</li>
                      </ul>
                    </div>

                    <div className="bg-[#FADBD9] border border-[#A38D89] p-4 rounded-xl">
                      <span className="font-mono-code text-[11px] bg-[#D69589] px-2 py-0.5 rounded border border-[#A38D89] font-bold">
                        VECTOR B: ESSAYS
                      </span>
                      <h5 className="font-serif-display text-xl text-[#F8E5D7] mt-2 mb-2">Slow Modernity</h5>
                      <ul className="space-y-1.5 font-mono-code text-xs text-[#F8E5D7]/80">
                        <li>• The lost art of waiting</li>
                        <li>• Brutalism vs. Craft</li>
                        <li>• Kyoto architecture logs</li>
                      </ul>
                    </div>

                    <div className="bg-[#FADBD9] border border-[#A38D89] p-4 rounded-xl">
                      <span className="font-mono-code text-[11px] bg-[#A38D89] px-2 py-0.5 rounded border border-[#A38D89] font-bold">
                        VECTOR C: EVENT
                      </span>
                      <h5 className="font-serif-display text-xl text-[#F8E5D7] mt-2 mb-2">Exhibition Evening</h5>
                      <ul className="space-y-1.5 font-mono-code text-xs text-[#F8E5D7]/80">
                        <li>• Ambient cassette tape set</li>
                        <li>• 40 printed specimens gallery</li>
                        <li>• Tea ceremony collaboration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'roadmap' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-[#FADBD9] border-[1.5px] border-[#A38D89] rounded-xl p-6 paper-shadow space-y-4"
              >
                <div className="flex items-center justify-between border-b border-[#A38D89]/15 pb-3">
                  <h4 className="font-serif-display text-2xl text-[#F8E5D7]">
                    Execution Matrix // Next 14 Days
                  </h4>
                  <span className="font-mono-code text-xs bg-[#D69589] px-2 py-0.5 rounded border border-[#A38D89] font-bold">
                    FEASIBILITY: OPTIMAL
                  </span>
                </div>

                <div className="space-y-3 font-mono-code text-xs">
                  <div className="p-3 border border-[#A38D89]/30 rounded-lg flex items-center justify-between bg-[#FADBD9]">
                    <div>
                      <span className="font-bold text-[#F8E5D7]">MON, MAR 24:</span>
                      <span className="ml-2 text-[#F8E5D7]/80">Receive handmade paper samples from Kyoto</span>
                    </div>
                    <span className="text-[10px] bg-[#FADBD9] border border-[#A38D89] px-2 py-0.5 rounded">DELIVERED</span>
                  </div>

                  <div className="p-3 border border-[#A38D89]/30 rounded-lg flex items-center justify-between bg-[#FADBD9]">
                    <div>
                      <span className="font-bold text-[#F8E5D7]">THU, MAR 27:</span>
                      <span className="ml-2 text-[#F8E5D7]/80">Finalize essay draft: "Why the Best Tools Feel Like Paper"</span>
                    </div>
                    <span className="text-[10px] bg-[#D69589] border border-[#A38D89] px-2 py-0.5 rounded">IN PROGRESS</span>
                  </div>

                  <div className="p-3 border border-[#A38D89]/30 rounded-lg flex items-center justify-between bg-[#FADBD9]">
                    <div>
                      <span className="font-bold text-[#F8E5D7]">SUN, MAR 30:</span>
                      <span className="ml-2 text-[#F8E5D7]/80">Launch waitlist dispatch issue #01</span>
                    </div>
                    <span className="text-[10px] bg-[#A38D89] border border-[#A38D89] px-2 py-0.5 rounded">QUEUED</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Pinned sticky note on canvas frame */}
            <div className="absolute bottom-4 left-6 hidden md:block">
              <div className="bg-[#D69589] border border-[#A38D89] px-3 py-1.5 rounded paper-shadow-sm rotate-[-2deg]">
                <span className="font-hand text-base text-[#F8E5D7]">
                  Pinned artifact: Live preview mode
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
