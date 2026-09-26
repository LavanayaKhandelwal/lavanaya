import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Compass, Sparkles, Pin, Bookmark, ArrowRight, Heart } from 'lucide-react';
import { FlowerMark, WashiTape, PaperClip, HandDrawnStar } from './CustomDoodles';
import { AudienceProfile } from '../types';

export const PeopleWhoCollectSection: React.FC = () => {
  const profiles: AudienceProfile[] = [
    {
      id: 'designers',
      title: 'The Spatial Hoarders',
      subtitle: 'Designers, Art Directors, Architects',
      quote: '"I have 1,400 unorganized Pinterest pins, 20 vintage magazine clippings, and a drawer of stone samples."',
      quirk: 'Favorite tool: 2B Mitsubishi pencil & 300dpi flatbed scanner',
      sticker: 'PALETTE OBSESSED',
      cardColor: '#D69589',
      rotation: '-rotate-1',
      sampleItems: [
        'Brutalist church facades in Brittany',
        'Swiss type specimen 1968',
        'Paper grain contrast test'
      ]
    },
    {
      id: 'writers',
      title: 'The Sentence Scavengers',
      subtitle: 'Essayists, Novelists, Poets',
      quote: '"I eavesdrop on strangers in coffee shops and jot down fragmented half-sentences on train napkins."',
      quirk: 'Tab count: 83 tabs of forgotten etymology',
      sticker: 'TYPEWRITER HEART',
      cardColor: '#D69589',
      rotation: 'rotate-1',
      sampleItems: [
        'Obsolete botanical adjectives',
        'Audio memo from morning ferry',
        'Draft outline: The Lost Art of Waiting'
      ]
    },
    {
      id: 'founders',
      title: 'The 3 A.M. Architects',
      subtitle: 'Independent Builders, Inventors',
      quote: '"My best product ideas come when I am doing the dishes or halfway through a bike ride."',
      quirk: 'Condition: Allergy to bloated Jira boards',
      sticker: 'HYPER-SYNTHESIS',
      cardColor: '#A38D89',
      rotation: '-rotate-2',
      sampleItems: [
        'Hardware prototype sketches',
        'Pricing model napkin notes',
        'Audio brainstorm with co-founder'
      ]
    },
    {
      id: 'researchers',
      title: 'The Footnote Obsessives',
      subtitle: 'Curators, Historians, Students',
      quote: '"I will happily spend four hours falling down a rabbit hole regarding medieval bookbinding glues."',
      quirk: 'Superpower: Finding primary sources from 1892',
      sticker: 'ARCHIVE DIVER',
      cardColor: '#D69589',
      rotation: 'rotate-2',
      sampleItems: [
        'Kyoto mulberry paper mill records',
        '19th century color chart scans',
        'Cross-referenced archival citations'
      ]
    },
    {
      id: 'creators',
      title: 'The Polymath Synthesizers',
      subtitle: 'Podcasters, Photographers, Curators',
      quote: '"I don\'t fit into a single box. Today I am editing music; tomorrow I am building a physical pop-up shop."',
      quirk: 'Current state: Thinking about everything at once',
      sticker: 'MULTI-HYPHENATE',
      cardColor: '#A38D89',
      rotation: '-rotate-1',
      sampleItems: [
        'Field recordings from Kyoto rain',
        'Risograph ink swatches',
        'Dispatch newsletter editorial queue'
      ]
    }
  ];

  const [activeProfile, setActiveProfile] = useState<string>('designers');
  const selected = profiles.find(p => p.id === activeProfile) || profiles[0];

  return (
    <section id="people-who-collect" className="py-24 lg:py-36 bg-[#FADBD9] border-b border-[#A38D89]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FADBD9] border border-[#A38D89] rounded-full text-xs font-mono-code uppercase tracking-widest text-[#F8E5D7] mb-4 paper-shadow-sm">
            <Heart className="w-3.5 h-3.5 text-rose-600" />
            <span>KINDRED SPIRITS</span>
          </div>

          <h2 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl text-[#F8E5D7] leading-[1.04] tracking-tight">
            Made for people who collect ideas.
          </h2>

          <p className="font-mono-code text-sm sm:text-base text-[#F8E5D7]/80 mt-4 leading-relaxed max-w-xl mx-auto">
            Not for corporate taskmasters or quarterly performance reviews. Curio is built for the curious minds whose brains refuse to operate in a straight line.
          </p>
        </div>

        {/* Character Profile Selector Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {profiles.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveProfile(p.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono-code uppercase tracking-wider border-[1.5px] transition-all cursor-pointer ${
                activeProfile === p.id
                  ? 'bg-[#3E2723] text-[#F8E5D7] border-[#A38D89] font-bold paper-shadow'
                  : 'bg-[#FADBD9] text-[#F8E5D7]/80 border-[#A38D89]/40 hover:border-[#A38D89]'
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* ACTIVE CHARACTER SPREAD (Magazine Profile Layout) */}
        <div className="max-w-5xl mx-auto bg-[#FADBD9] border-[1.5px] border-[#A38D89] rounded-3xl p-6 sm:p-10 paper-shadow-lg relative overflow-hidden">
          {/* Top Washi Tape */}
          <div className="absolute -top-3 left-12">
            <WashiTape color={selected.cardColor} width="w-28" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2">
                <span 
                  className="px-2.5 py-0.5 rounded text-[11px] font-mono-code uppercase font-bold border border-[#A38D89]"
                  style={{ backgroundColor: selected.cardColor }}
                >
                  {selected.sticker}
                </span>
                <span className="font-mono-code text-xs text-[#F8E5D7]/60">
                  CHARACTER DOSSIER #0{profiles.findIndex(p => p.id === selected.id) + 1}
                </span>
              </div>

              <div>
                <h3 className="font-serif-display text-3xl sm:text-5xl text-[#F8E5D7] leading-tight">
                  {selected.title}
                </h3>
                <p className="font-mono-code text-xs text-[#F8E5D7]/70 mt-1 uppercase tracking-wider">
                  {selected.subtitle}
                </p>
              </div>

              <blockquote className="font-serif-display text-xl sm:text-2xl text-[#F8E5D7] italic border-l-2 border-[#A38D89] pl-4 py-1 leading-snug">
                {selected.quote}
              </blockquote>

              <div className="bg-[#FADBD9] border border-[#A38D89]/30 rounded-xl p-3.5">
                <span className="font-mono-code text-[11px] uppercase font-bold text-[#F8E5D7]/70 block mb-1">
                  OBSERVED HABIT / QUIRK
                </span>
                <p className="font-mono-code text-xs text-[#F8E5D7]">
                  {selected.quirk}
                </p>
              </div>

              <div className="pt-2">
                <span className="font-mono-code text-[11px] uppercase text-[#F8E5D7]/60 block mb-2 font-bold">
                  TYPICAL INTAKE ON CURIO DESK:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selected.sampleItems.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#FADBD9] border border-[#A38D89]/40 rounded-lg text-xs font-mono-code text-[#F8E5D7]"
                    >
                      • {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Card / Scrapbook Vignette */}
            <div className="lg:col-span-5 relative">
              <div className="bg-[#FADBD9] border-[1.5px] border-[#A38D89] rounded-2xl p-6 paper-shadow rotate-1 relative">
                <div className="flex items-center justify-between border-b border-[#A38D89]/15 pb-3 mb-4">
                  <span className="font-mono-code text-xs font-bold text-[#F8E5D7]">
                    FIELD PASS
                  </span>
                  <FlowerMark size={18} />
                </div>

                {/* Collage asset cutout snippet */}
                <div className="h-44 rounded-xl border border-[#A38D89]/30 overflow-hidden bg-[#A38D89] mb-4 relative">
                  <img
                    src="/src/assets/images/creative_chaos_collage_1789788411014.jpg"
                    alt="Creative portrait character"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#3E2723] text-[#F8E5D7] font-mono-code text-[10px] px-2 py-0.5 rounded">
                    INTELLECTUAL IDENTITY
                  </div>
                </div>

                <div className="space-y-1.5 text-xs font-mono-code text-[#F8E5D7]/80">
                  <div className="flex justify-between border-b border-[#A38D89]/10 pb-1">
                    <span>RESONANCE:</span>
                    <span className="font-bold text-[#F8E5D7]">100% UNALIGNED WITH CORPORATE SAAS</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span>CREATIVE CADENCE:</span>
                    <span className="font-bold text-[#F8E5D7]">ORGANIC SPRINT & DRIFT</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-dashed border-[#A38D89]/20 flex justify-between items-center text-[10px] font-mono-code text-[#F8E5D7]/50">
                  <span>CURIO CERTIFIED MEMBER</span>
                  <span>VERIFIED CURIOUS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
