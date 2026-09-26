import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  Image as ImageIcon, 
  Bookmark, 
  Mic, 
  CheckSquare, 
  Sparkles, 
  Paperclip,
  ExternalLink,
  Volume2
} from 'lucide-react';
import { FlowerMark, WashiTape, PaperClip, HandDrawnStar, HandDrawnArrow } from './CustomDoodles';
import { IdeaItem } from '../types';

export const IdeaShapesCollage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'notes' | 'voice' | 'polaroid' | 'links'>('all');
  const [playingVoice, setPlayingVoice] = useState(false);

  const ideaItems: IdeaItem[] = [
    {
      id: '1',
      type: 'note',
      title: 'Typewriter Manifesto Fragment',
      subtitle: 'Recorded on Olivetti Lettera 32',
      snippet: 'Digital screens make everything feel transient. Physical stationery gives weight to intention. What if software could possess weight?',
      tag: 'WRITING',
      accentColor: '#FADBD9',
      rotation: '-rotate-1'
    },
    {
      id: '2',
      type: 'voice',
      title: 'Night Walk Musings (02:14 AM)',
      subtitle: 'Recorded in Shibuya backstreets',
      snippet: 'Audio snippet: "The neon signs reflected in puddle water look exactly like watercolor bleeds. Remember this for the album packaging palette..."',
      tag: 'VOICE THOUGHT',
      accentColor: '#A38D89',
      rotation: 'rotate-2'
    },
    {
      id: '3',
      type: 'polaroid',
      title: 'Architectural Shadow Study',
      subtitle: 'Brutalist concrete overhang at dawn',
      tag: 'VISUAL SCRAP',
      accentColor: '#FADBD9',
      rotation: '-rotate-2'
    },
    {
      id: '4',
      type: 'link',
      title: 'Archive of Lost Botanical Pigments',
      subtitle: 'almanac.design/pigments/1840-indigo',
      snippet: 'Curated 14th century recipe for copper verdigris and lapis lazuli binders.',
      tag: 'WEB CLIP',
      accentColor: '#D69589',
      rotation: 'rotate-1'
    },
    {
      id: '5',
      type: 'task',
      title: 'Print Run Checklist // Proof #02',
      subtitle: 'Due at studio next Tuesday',
      snippet: '✓ 300gsm deckle-edge paper\n✓ Hand-numbered embossed stamps\n✓ Letterpress silver ink test',
      tag: 'CHECKLIST',
      accentColor: '#D69589',
      rotation: '-rotate-1'
    },
    {
      id: '6',
      type: 'swatch',
      title: 'Studio Material Swatch Palette',
      subtitle: 'Kyoto Washi & Olive Green Glaze',
      snippet: 'RGB: (201, 255, 140) • (244, 182, 212) • (62, 39, 35)',
      tag: 'COLOR SYSTEM',
      accentColor: '#D69589',
      rotation: 'rotate-2'
    }
  ];

  const filteredItems = filter === 'all' 
    ? ideaItems 
    : ideaItems.filter(item => {
        if (filter === 'notes') return item.type === 'note' || item.type === 'task';
        if (filter === 'voice') return item.type === 'voice';
        if (filter === 'polaroid') return item.type === 'polaroid' || item.type === 'swatch';
        if (filter === 'links') return item.type === 'link';
        return true;
      });

  return (
    <section id="idea-shapes" className="py-24 lg:py-36 bg-[#FADBD9] border-b border-[#A38D89]/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Central Statement */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FADBD9] border border-[#A38D89] rounded-full text-xs font-mono-code uppercase tracking-widest text-[#F8E5D7] mb-6 paper-shadow-sm">
            <FlowerMark size={14} />
            <span>UNIVERSAL MEDIUMS OF CREATIVITY</span>
          </div>

          <h2 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl text-[#F8E5D7] leading-[1.04] tracking-tight mb-6">
            However your brain works,{' '}
            <span className="relative inline-block whitespace-nowrap">
              <span className="absolute inset-0 -inset-x-2 bottom-1 bg-[#D69589] -rotate-1 rounded-sm -z-10 opacity-90 border-b-2 border-[#A38D89]/20" />
              <span className="relative z-10 italic">there is room</span>
            </span>{' '}
            for it here.
          </h2>

          <p className="font-mono-code text-sm sm:text-base text-[#F8E5D7]/80 max-w-xl mx-auto leading-relaxed">
            Notes, voice thoughts, random screenshots, color chips, and midnight questions. Curio gathers them without making them boring.
          </p>

          {/* Interactive filter pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Artifacts' },
              { id: 'notes', label: 'Notes & Scraps' },
              { id: 'voice', label: 'Voice Thoughts' },
              { id: 'polaroid', label: 'Visuals & Swatches' },
              { id: 'links', label: 'Web Clips' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono-code tracking-wider uppercase border-[1.5px] transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#3E2723] text-[#F8E5D7] border-[#A38D89] paper-shadow-sm font-bold'
                    : 'bg-[#FADBD9] text-[#F8E5D7]/80 border-[#A38D89]/40 hover:border-[#A38D89]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ASYMMETRIC SCRAPBOOK COLLAGE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`relative bg-[#FADBD9] border-[1.5px] border-[#A38D89] rounded-2xl p-6 paper-shadow-hover ${item.rotation} cursor-pointer group`}
            >
              {/* Paper Clip or Washi Tape top accent */}
              {index % 2 === 0 ? (
                <div className="absolute -top-3 left-6 z-10">
                  <WashiTape color={item.accentColor} width="w-20" />
                </div>
              ) : (
                <div className="absolute -top-3 right-6 z-10">
                  <PaperClip className="w-5 h-8 text-[#F8E5D7]" />
                </div>
              )}

              {/* Tag and category metadata */}
              <div className="flex items-center justify-between border-b border-[#A38D89]/15 pb-3 mb-4 pt-1">
                <span 
                  className="px-2 py-0.5 rounded text-[10px] font-mono-code font-bold uppercase border border-[#A38D89]"
                  style={{ backgroundColor: item.accentColor }}
                >
                  {item.tag}
                </span>
                <span className="font-mono-code text-[11px] text-[#F8E5D7]/50">
                  SCRAP #0{item.id}
                </span>
              </div>

              {/* Visual preview if polaroid or swatch */}
              {item.type === 'polaroid' && (
                <div className="mb-4 rounded-xl border border-[#A38D89]/30 overflow-hidden bg-[#A38D89]">
                  <img
                    src="/src/assets/images/creative_chaos_collage_1789788411014.jpg"
                    alt="Study artifact"
                    referrerPolicy="no-referrer"
                    className="w-full h-36 object-cover"
                  />
                </div>
              )}

              {item.type === 'swatch' && (
                <div className="mb-4 rounded-xl border border-[#A38D89]/30 overflow-hidden bg-[#A38D89]">
                  <img
                    src="/src/assets/images/curated_moodboard_art_1789788458713.jpg"
                    alt="Material swatch"
                    referrerPolicy="no-referrer"
                    className="w-full h-36 object-cover"
                  />
                </div>
              )}

              {/* Voice Player UI */}
              {item.type === 'voice' && (
                <div className="mb-4 p-3 bg-[#3E2723]/5 border border-[#A38D89]/20 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setPlayingVoice(!playingVoice);
                      }}
                      className="w-8 h-8 rounded-full bg-[#3E2723] text-[#F8E5D7] flex items-center justify-center hover:scale-105 transition-transform"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <div>
                      <span className="font-mono-code text-[11px] font-bold text-[#F8E5D7] block">
                        {playingVoice ? "PLAYING AUDIO..." : "VOICE MEMO 0:48"}
                      </span>
                      <span className="font-mono-code text-[10px] text-[#F8E5D7]/60">
                        Recorded on bike ride
                      </span>
                    </div>
                  </div>
                  {/* Fake waveform bars */}
                  <div className="flex items-center gap-1 h-6">
                    {[12, 24, 18, 28, 14, 22, 10, 26, 16].map((h, i) => (
                      <span
                        key={i}
                        className={`w-1 bg-[#3E2723] rounded-full transition-all ${
                          playingVoice ? 'animate-pulse' : 'opacity-40'
                        }`}
                        style={{ height: `${h}px` }}
                      />
                    ))}
                  </div>
                </div>
              )}

              <h3 className="font-serif-display text-2xl text-[#F8E5D7] leading-tight mb-2 group-hover:text-[#A38D89] transition-colors">
                {item.title}
              </h3>

              {item.subtitle && (
                <p className="font-mono-code text-xs text-[#F8E5D7]/60 mb-3">
                  {item.subtitle}
                </p>
              )}

              {item.snippet && (
                <p className="font-body text-xs text-[#F8E5D7]/80 leading-relaxed whitespace-pre-line border-t border-dashed border-[#A38D89]/15 pt-3 mt-3">
                  {item.snippet}
                </p>
              )}

              {/* Card Footer stamp */}
              <div className="mt-4 pt-3 border-t border-[#A38D89]/15 flex items-center justify-between text-[11px] font-mono-code text-[#F8E5D7]/60">
                <span>INTENT: PRESERVED</span>
                <span className="group-hover:translate-x-1 transition-transform">✦ PINNED</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-16 text-center">
          <p className="font-hand text-2xl sm:text-3xl text-[#F8E5D7]/80 -rotate-1">
            "Your workspace shouldn't force your thoughts into somebody else's boxes."
          </p>
        </div>
      </div>
    </section>
  );
};
