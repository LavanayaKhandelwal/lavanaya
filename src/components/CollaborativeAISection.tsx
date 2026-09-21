import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  CornerDownRight, 
  ArrowRight, 
  Layers, 
  CheckCircle2, 
  Tag, 
  Compass, 
  Send,
  RefreshCw,
  SlidersHorizontal
} from 'lucide-react';
import { FlowerMark, HandDrawnArrow, WashiTape, PaperClip, HandDrawnStar } from './CustomDoodles';
import { ThoughtUnravelerPreset } from '../types';

export const CollaborativeAISection: React.FC = () => {
  const presets: ThoughtUnravelerPreset[] = [
    {
      id: 'studio-rebrand',
      title: 'Ceramic Studio Rebrand',
      category: 'DESIGN & COMMERCE',
      rawThought: "I have 35 bookmarks about Japanese wood-fired kilns, 3 audio notes recorded during my pottery wheel session about unglazed clay textures, and an urgent gallery pitch in Zurich next month. I don't want a generic modern logo—it has to feel ancient yet contemporary, like a 400-year-old teahouse found in a Brutalist museum.",
      curioOutput: {
        clarifiedIntent: "Create a timeless, dual-heritage visual identity marrying ancient Japanese wood-fired pottery wabi-sabi with sharp Swiss modernist typography.",
        clusters: [
          {
            title: "Material Sourcing & Physical Touch",
            color: "#D69589",
            items: [
              "Shigaraki coarse stoneware clay bodies",
              "Uncoated letterpress business cards with raw deckle edge",
              "Individual woodblock stamp seal for each vessel"
            ]
          },
          {
            title: "Zurich Exhibition Narrative",
            color: "#D69589",
            items: [
              "Exhibition Title: 'Fire, Soil, Concrete'",
              "Gallery display: Raw sand plinths beneath dramatic spotlights",
              "Bilingual catalog printed in Zurich on Kyoto mulberry paper"
            ]
          },
          {
            title: "Identity & Typography System",
            color: "#A38D89",
            items: [
              "High-contrast editorial serif paired with typewriter specimen numbering",
              "Color palette: Charcoal soot black, clay blush, and raw ivory paper",
              "Minimal bilingual wordmark (Kanji + Latin)"
            ]
          }
        ],
        actionSteps: [
          "Curio drafted 3 sample catalog essay openers based on your voice memo.",
          "Assembled Zurich gallery curator contact list & submission package.",
          "Generated raw material testing matrix for the next studio kiln firing."
        ],
        moodTags: ["#wabi-sabi", "#brutalism", "#tactile-identity", "#zurich-curation"]
      }
    },
    {
      id: 'essay-waiting',
      title: 'The Architecture of Waiting',
      category: 'ESSAY & WRITING',
      rawThought: "Why do airport waiting areas and doctor offices feel designed to induce anxiety? I've been reading Tanizaki's 'In Praise of Shadows' and thinking about soft lighting, train timetables from the 1920s, and how modern digital notifications broke our relationship with patience.",
      curioOutput: {
        clarifiedIntent: "Synthesize an architectural and cultural essay dissecting why modern transit spaces induce alienation, proposing tactile, sensory alternatives.",
        clusters: [
          {
            title: "Historical Contrast",
            color: "#D69589",
            items: [
              "1920s wooden railway benches vs. cold vinyl airport gates",
              "Mechanical flip-disc departure boards (audible rhythm of time)",
              "The Japanese concept of 'Ma' (negative space / paused time)"
            ]
          },
          {
            title: "Sensory Critique",
            color: "#A38D89",
            items: [
              "Overhead fluorescent hum vs. indirect amber sconces",
              "Acoustic damping through felt and compressed cellulose pulp",
              "The elimination of analog waiting clocks"
            ]
          }
        ],
        actionSteps: [
          "Organized 14 quotes from Tanizaki, Pallasmaa, and Perec into narrative arcs.",
          "Formulated 4 central essay chapters with provocative section titles.",
          "Recommended 3 literary magazines currently accepting long-form cultural essays."
        ],
        moodTags: ["#cultural-essay", "#sensory-architecture", "#slow-living"]
      }
    },
    {
      id: 'print-magazine',
      title: 'Independent Print Magazine',
      category: 'EDITORIAL PUBLISHING',
      rawThought: "I want to publish a 64-page physical biannual magazine celebrating obscure obsessive hobbies—like typewriter repairers, antique radio restorers, and lichen foragers. But distribution, printing costs, and editorial deadlines feel totally overwhelming.",
      curioOutput: {
        clarifiedIntent: "Scope a realistic, self-funded independent print publication with pre-order economics and sustainable small-batch production.",
        clusters: [
          {
            title: "Issue 01 Lineup",
            color: "#D69589",
            items: [
              "Feature: The 84-year-old Swiss Olivetti technician in Basel",
              "Photo Essay: Sub-arctic lichen varieties in northern Norway",
              "Audio accompaniment via hidden QR-pressed vinyl flexi-disc"
            ]
          },
          {
            title: "Production & Economics",
            color: "#D69589",
            items: [
              "Print run: 500 copies on Munken Lynx 120gsm paper",
              "Pre-order funding goal: $6,200 covering print and postage",
              "Stockist outreach: 20 independent art bookshops in London, Berlin, NYC"
            ]
          }
        ],
        actionSteps: [
          "Built pre-order budgeting spreadsheet with break-even curves.",
          "Drafted cold outreach letters tailored to independent bookshop buyers.",
          "Generated a 12-week editorial & proofing milestone roadmap."
        ],
        moodTags: ["#print-is-alive", "#independent-press", "#subcultures"]
      }
    }
  ];

  const [selectedPresetId, setSelectedPresetId] = useState('studio-rebrand');
  const [customInput, setCustomInput] = useState('');
  const [customSubmitted, setCustomSubmitted] = useState(false);

  const currentPreset = presets.find(p => p.id === selectedPresetId) || presets[0];

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;
    setCustomSubmitted(true);
  };

  return (
    <section id="collaborative-ai" className="py-24 lg:py-36 bg-[#A38D89] border-b border-[#3E2723]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Top Tag */}
        <div className="flex items-center justify-between font-mono-code text-xs text-[#3E2723]/60 pb-4 border-b border-[#3E2723]/10 mb-12">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#3E2723]" />
            <span>EDITORIAL AI COLLABORATOR</span>
          </div>
          <span>PHILOSOPHY: AMPLIFICATION, NOT REPLACEMENT</span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl text-[#3E2723] leading-[1.04] tracking-tight mb-4">
            Bring the messy thought. We'll help you find the thread.
          </h2>
          <p className="font-mono-code text-sm sm:text-base text-[#3E2723]/80 leading-relaxed">
            Most AI tools try to do the thinking for you. Curio is different: it acts as a sounding board, untangling knots and illuminating pathways while keeping you in full artistic control.
          </p>
        </div>

        {/* Preset Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="font-mono-code text-xs text-[#3E2723]/60 mr-2 uppercase tracking-wider">
            Explore live thoughts:
          </span>
          {presets.map((preset) => (
            <button
              key={preset.id}
              onClick={() => {
                setSelectedPresetId(preset.id);
                setCustomSubmitted(false);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono-code uppercase tracking-wider border-[1.5px] transition-all cursor-pointer ${
                selectedPresetId === preset.id && !customSubmitted
                  ? 'bg-[#3E2723] text-[#F4C9D6] border-[#3E2723] font-bold paper-shadow-sm'
                  : 'bg-[#F4C9D6] text-[#3E2723] border-[#3E2723]/30 hover:border-[#3E2723]'
              }`}
            >
              {preset.title}
            </button>
          ))}
        </div>

        {/* THE CONVERSATIONAL EDITORIAL UI (Human thought + Curio unraveling) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Human Unstructured Thought Dump (Paper Notebook style) */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#F4C9D6] border-[1.5px] border-[#3E2723] rounded-2xl p-6 sm:p-7 paper-shadow relative">
              {/* Washi Tape Header */}
              <div className="absolute -top-3 left-8">
                <WashiTape color="#D69589" width="w-24" />
              </div>

              <div className="flex items-center justify-between border-b border-[#3E2723]/15 pb-3 mb-4 pt-1">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="font-mono-code text-xs font-bold uppercase text-[#3E2723]">
                    YOUR UNFILTERED THOUGHT DUMP
                  </span>
                </div>
                <span className="font-mono-code text-[11px] text-[#3E2723]/50">
                  {currentPreset.category}
                </span>
              </div>

              {/* Thought Text */}
              <div className="bg-[#F8E5D7] border border-[#3E2723]/20 rounded-xl p-4 mb-4">
                <p className="font-serif-display text-xl sm:text-2xl text-[#3E2723] italic leading-relaxed">
                  "{customSubmitted && customInput ? customInput : currentPreset.rawThought}"
                </p>
              </div>

              <div className="flex items-center justify-between text-xs font-mono-code text-[#3E2723]/60 pt-2 border-t border-[#3E2723]/10">
                <span>INTAKE METHOD: DICTATED AUDIO</span>
                <span className="text-[#A38D89] font-bold">✓ UNSTRUCTURED RAW</span>
              </div>
            </div>

            {/* Quick Interactive Prompt Try-Out Box */}
            <div className="mt-6 bg-[#F4C9D6] border-[1.5px] border-[#3E2723] rounded-xl p-4 paper-shadow-sm">
              <form onSubmit={handleCustomSubmit}>
                <label className="block font-mono-code text-xs font-bold uppercase text-[#3E2723] mb-1.5">
                  Try unravelling your own chaotic thought:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="e.g., Launching a brutalist coffee roaster in Lisbon..."
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                    className="flex-1 bg-[#F4C9D6] border border-[#3E2723] rounded-lg px-3 py-2 text-xs font-mono-code text-[#3E2723] placeholder-[#3E2723]/40 focus:outline-hidden focus:ring-1 focus:ring-[#3E2723]"
                  />
                  <button
                    type="submit"
                    className="bg-[#D69589] text-[#3E2723] border border-[#3E2723] px-3 py-2 rounded-lg text-xs font-mono-code font-bold hover:bg-[#D69589] cursor-pointer"
                  >
                    Unravel
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column: Curio Synthesized Editorial Breakdown */}
          <div className="lg:col-span-7 relative">
            <div className="bg-[#F4C9D6] border-[1.5px] border-[#3E2723] rounded-2xl p-6 sm:p-8 paper-shadow-lg relative">
              {/* Paper Clip */}
              <div className="absolute -top-3 right-8">
                <PaperClip className="w-5 h-8 text-[#3E2723]" />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#3E2723]/15 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <FlowerMark size={20} />
                  <div>
                    <h4 className="font-mono-code text-xs font-bold uppercase text-[#3E2723]">
                      CURIO INTELLIGENCE DISPATCH
                    </h4>
                    <span className="font-mono-code text-[11px] text-[#3E2723]/60">
                      SYNTHESIZED IN 0.38 SECONDS
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  {currentPreset.curioOutput.moodTags.map((tag) => (
                    <span
                      key={tag}
                      className="hidden sm:inline-block text-[10px] font-mono-code px-2 py-0.5 bg-[#F4C9D6] border border-[#3E2723]/30 rounded text-[#3E2723]/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Clarified Intent Banner */}
              <div className="p-4 bg-[#D69589]/30 border border-[#3E2723]/40 rounded-xl mb-6">
                <span className="font-mono-code text-[10px] uppercase font-bold text-[#3E2723] block mb-1">
                  CORE CREATIVE THREAD
                </span>
                <p className="font-serif-display text-xl text-[#3E2723] leading-snug">
                  {currentPreset.curioOutput.clarifiedIntent}
                </p>
              </div>

              {/* Clustered Idea Modules */}
              <div className="space-y-4 mb-6">
                <span className="font-mono-code text-xs font-bold uppercase text-[#3E2723] tracking-wider block">
                  CONNECTED IDEA CLUSTERS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {currentPreset.curioOutput.clusters.map((cluster, i) => (
                    <div
                      key={i}
                      className="border-[1.5px] border-[#3E2723] rounded-xl p-4 bg-[#F4C9D6] paper-shadow-sm"
                    >
                      <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-[#3E2723]/15">
                        <span 
                          className="w-2.5 h-2.5 rounded-full border border-[#3E2723]"
                          style={{ backgroundColor: cluster.color }}
                        />
                        <h5 className="font-mono-code text-xs font-bold text-[#3E2723]">
                          {cluster.title}
                        </h5>
                      </div>
                      <ul className="space-y-1.5 font-mono-code text-[11px] text-[#3E2723]/80">
                        {cluster.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-[#3E2723]/50">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suggested Next Steps */}
              <div className="border-t border-[#3E2723]/15 pt-5">
                <span className="font-mono-code text-xs font-bold uppercase text-[#3E2723] tracking-wider block mb-3">
                  SUGGESTED IMMEDIATE ACTIONS
                </span>
                <div className="space-y-2">
                  {currentPreset.curioOutput.actionSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#F8E5D7] border border-[#3E2723]/30 text-xs font-mono-code text-[#3E2723]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#D69589] shrink-0" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
