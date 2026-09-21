import React, { useState } from 'react';
import { Sparkles, ArrowRight, Check } from 'lucide-react';
import { FlowerMark, HandDrawnStar, WashiTape, PaperClip } from './CustomDoodles';

interface FinalCTAProps {
  onOpenWaitlist: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenWaitlist }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSubscribed(true);
  };

  return (
    <section className="py-24 lg:py-36 bg-[#F4C9D6] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Soft Green Editorial Billboard Card */}
        <div className="relative bg-[#D69589] border-[2px] border-[#A38D89] rounded-3xl p-8 sm:p-14 lg:p-16 paper-shadow-lg text-center overflow-hidden">
          {/* Top Washi Tape */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
            <WashiTape color="#D69589" width="w-32" />
          </div>

          {/* Floating abstract decorative flowers */}
          <div className="absolute top-6 left-8 hidden sm:block animate-spin-slow">
            <FlowerMark size={36} />
          </div>
          <div className="absolute bottom-8 right-8 hidden sm:block">
            <FlowerMark size={32} />
          </div>
          <div className="absolute top-8 right-12 hidden lg:block">
            <HandDrawnStar className="w-6 h-6 text-[#F8E5D7]" />
          </div>

          {/* Metadata Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F4C9D6] border border-[#A38D89] rounded-full text-xs font-mono-code uppercase tracking-widest text-[#F8E5D7] mb-6 paper-shadow-sm">
            <FlowerMark size={14} />
            <span>ENROLMENT DISPATCH // BATCH 04</span>
          </div>

          {/* Headline */}
          <h2 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl text-[#F8E5D7] leading-[1.02] tracking-tight max-w-2xl mx-auto mb-4">
            Your next great idea is probably hiding in the mess.
          </h2>

          {/* Supporting Copy */}
          <p className="font-serif-display text-2xl sm:text-3xl text-[#F8E5D7]/90 italic mb-8">
            Give it somewhere to grow.
          </p>

          {/* Inline Email or Modal Trigger */}
          {!subscribed ? (
            <div className="max-w-md mx-auto mb-6">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-[#F4C9D6] border-[1.5px] border-[#A38D89] px-4 py-3.5 rounded-full font-mono-code text-xs text-[#F8E5D7] placeholder-[#3E2723]/50 focus:outline-hidden focus:ring-2 focus:ring-[#3E2723]"
                />
                <button
                  type="submit"
                  id="final-waitlist-submit"
                  className="flex items-center justify-center gap-2 bg-[#3E2723] text-[#F8E5D7] hover:bg-[#A38D89] border-[1.5px] border-[#A38D89] px-6 py-3.5 rounded-full font-mono-code text-xs uppercase tracking-wider font-bold paper-shadow hover:translate-y-[-1px] transition-all cursor-pointer whitespace-nowrap"
                >
                  <span>Join the Waitlist</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          ) : (
            <div className="max-w-md mx-auto mb-6 p-4 bg-[#F4C9D6] border-[1.5px] border-[#A38D89] rounded-2xl paper-shadow">
              <div className="flex items-center justify-center gap-2 text-[#A38D89] font-mono-code text-xs font-bold uppercase mb-1">
                <Check className="w-4 h-4" />
                <span>Admission Ticket Reserved!</span>
              </div>
              <p className="font-body text-xs text-[#F8E5D7]/80">
                Check your inbox shortly for your accession stamp.
              </p>
            </div>
          )}

          {/* Secondary Subtitle */}
          <p className="font-mono-code text-xs text-[#F8E5D7]/70 max-w-sm mx-auto">
            No spam. Just occasional dispatch issues and private studio invitations as we build.
          </p>

          {/* Bottom Stamp seal */}
          <div className="mt-8 pt-6 border-t border-[#A38D89]/20 flex items-center justify-between text-[11px] font-mono-code text-[#F8E5D7]/60">
            <span>PRINTED IN CURIO STUDIO</span>
            <span>EDITION OF 5,000 PASSES</span>
            <span>STATUS: BETA OPEN</span>
          </div>
        </div>
      </div>
    </section>
  );
};
