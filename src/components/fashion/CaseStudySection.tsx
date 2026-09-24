import { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';

/**
 * Section 3 — Internship case study for Aadiya Jewels on near-black #12090B.
 * Dense editorial collage: centred eyebrow + serif company name, flanked by
 * two tilted AI-content phones (left) and three social-media phones (right),
 * with a centre column holding the content calendar, a dotted hand-drawn
 * arrow, the carousel drafts, and a small "+101% reach" analytics plate.
 * Dark silky fabric detail anchored bottom-left.
 */

const GOLD = '#D9A441';

/** Abstract fine-jewellery illustration drawn in pure CSS. */
function JewelleryVisual({ variant }: { variant: 'ring' | 'pendant' | 'earrings' | 'sparkle' }) {
  if (variant === 'ring') {
    return (
      <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2">
        <div className="h-12 w-12 rounded-full border-[3px] shadow-[0_0_18px_rgba(217,164,65,0.35)]" style={{ borderColor: GOLD }} />
        <div className="absolute -top-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 bg-[#F3D9A0]" />
      </div>
    );
  }
  if (variant === 'pendant') {
    return (
      <div className="absolute left-1/2 top-[14%] -translate-x-1/2">
        <div className="mx-auto h-12 w-px bg-[#C99F7A]/70" />
        <div className="h-7 w-7 rounded-full border-2 shadow-[0_0_14px_rgba(217,164,65,0.35)]" style={{ borderColor: GOLD }} />
        <div className="mx-auto -mt-1 h-1.5 w-1.5 rotate-45 bg-[#F3D9A0]" />
      </div>
    );
  }
  if (variant === 'earrings') {
    return (
      <div className="absolute left-1/2 top-[36%] flex -translate-x-1/2 gap-4">
        {[0, 1].map((i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-[#F3D9A0]" />
            <div className="mt-1 h-5 w-5 rounded-full border-2" style={{ borderColor: GOLD }} />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2">
      <div className="h-3 w-3 rotate-45" style={{ backgroundColor: GOLD }} />
      <div className="absolute -left-4 top-3 h-1.5 w-1.5 rotate-45 bg-[#F3D9A0]" />
      <div className="absolute left-4 top-4 h-2 w-2 rotate-45 bg-[#C99F7A]" />
    </div>
  );
}

type PhoneProps = {
  className?: string;
  tilt?: number;
  headline: string;
  sub: string;
  visual?: 'ring' | 'pendant' | 'earrings' | 'sparkle';
  imgSrc?: string;
};

function PhoneMock({ className = '', tilt = 0, headline, sub, visual = 'ring', imgSrc }: PhoneProps) {
  const [imgOk, setImgOk] = useState(Boolean(imgSrc));

  return (
    <div
      className={`w-[138px] shrink-0 rounded-[20px] border-[3px] border-[#070406] bg-[#0D0508] p-[5px] shadow-[0_18px_40px_rgba(0,0,0,0.55)] ${className}`}
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <div className="overflow-hidden rounded-[15px] bg-[#160A0E]">
        {/* Account chrome */}
        <div className="flex items-center gap-1.5 px-2 pt-2">
          <span className="h-4 w-4 rounded-full" style={{ background: 'linear-gradient(135deg, #D9A441, #7A4A16)' }} />
          <span className="text-[7px] font-semibold tracking-wide text-[#F3E7DC]">aadiyajewels</span>
          <MoreHorizontal className="ml-auto h-2.5 w-2.5 text-[#CBB6AB]" />
        </div>

        {/* Creative — drop-in image slot with CSS jewellery fallback */}
        <div
          className="relative mx-2 mt-1.5 h-[128px] overflow-hidden rounded-[8px]"
          style={{ background: 'radial-gradient(circle at 50% 32%, #3A1418, #12070A 78%)' }}
        >
          {imgSrc && imgOk ? (
            <img
              src={imgSrc}
              alt={headline}
              className="absolute inset-0 h-full w-full object-cover"
              onError={() => setImgOk(false)}
            />
          ) : (
            <JewelleryVisual variant={visual} />
          )}
          <p className="absolute inset-x-1 bottom-1.5 text-center font-serif-display text-[11px] italic leading-tight text-[#F6EAD9] [text-shadow:0_1px_6px_rgba(0,0,0,0.8)]">
            {headline}
          </p>
        </div>

        {/* Actions + caption */}
        <div className="flex items-center gap-2 px-2 pt-1.5 text-[#E8D8CC]">
          <Heart className="h-2.5 w-2.5" />
          <MessageCircle className="h-2.5 w-2.5" />
          <Send className="h-2.5 w-2.5" />
          <Bookmark className="ml-auto h-2.5 w-2.5" />
        </div>
        <p className="px-2 pb-2 pt-1 font-body text-[6.5px] leading-snug text-[#B9A194]">{sub}</p>
      </div>
    </div>
  );
}

function CalendarPanel() {
  const posts: Record<number, string> = {
    2: '#781A1C', 5: GOLD, 9: '#C98A8A', 12: '#781A1C', 16: GOLD,
    19: '#C98A8A', 23: '#781A1C', 26: GOLD, 30: '#781A1C',
  };
  return (
    <div className="w-[232px] rotate-[-1.5deg] rounded-lg bg-[#F7F0E6] p-2.5 shadow-[0_16px_36px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-between">
        <p className="font-body text-[8px] font-bold uppercase tracking-[0.14em] text-[#3A2320]">
          October — content calendar
        </p>
        <span className="flex gap-[3px]">
          {[0, 1, 2].map((i) => <i key={i} className="h-1 w-1 rounded-full bg-[#8A736A]" />)}
        </span>
      </div>
      <div className="mt-2 grid grid-cols-7 gap-[3px]">
        {Array.from({ length: 28 }).map((_, i) => (
          <div
            key={i}
            className="flex h-[20px] items-center justify-center rounded-[3px] bg-white/70 font-body text-[6px] text-[#8A736A]"
          >
            {posts[i + 1]
              ? <span className="h-full w-full rounded-[2px]" style={{ backgroundColor: posts[i + 1] }} />
              : i + 1}
          </div>
        ))}
      </div>
      <div className="mt-1.5 flex items-center gap-2 font-body text-[5.5px] uppercase tracking-wider text-[#8A736A]">
        <span className="flex items-center gap-1"><i className="h-1.5 w-1.5 rounded-[1px] bg-[#781A1C]" /> reel</span>
        <span className="flex items-center gap-1"><i className="h-1.5 w-1.5 rounded-[1px]" style={{ backgroundColor: GOLD }} /> carousel</span>
        <span className="flex items-center gap-1"><i className="h-1.5 w-1.5 rounded-[1px] bg-[#C98A8A]" /> story</span>
      </div>
    </div>
  );
}

function CarouselPanel() {
  return (
    <div className="w-[210px] rotate-[1.5deg] rounded-lg bg-[#FAF5EC] p-2 shadow-[0_16px_36px_rgba(0,0,0,0.5)]">
      <p className="font-body text-[7px] font-bold uppercase tracking-[0.14em] text-[#3A2320]">
        Carousel draft 03 — festive edit
      </p>
      <div className="relative mt-1.5">
        <div className="relative z-10 w-[150px] rounded-md bg-white p-1.5 shadow">
          <div
            className="relative h-[64px] overflow-hidden rounded-[4px]"
            style={{ background: 'radial-gradient(circle at 50% 40%, #3A1418, #12070A 80%)' }}
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="h-7 w-7 rounded-full border-2" style={{ borderColor: GOLD }} />
              <div className="absolute -top-0.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rotate-45 bg-[#F3D9A0]" />
            </div>
          </div>
          <p className="mt-1 font-body text-[6.5px] font-semibold leading-snug text-[#3A2320]">
            5 ways to style temple jewellery this season
          </p>
        </div>
        <div className="absolute left-[132px] top-1 z-0 h-[86px] w-[72px] rounded-md bg-white/50 p-1 shadow-sm">
          <div className="h-[56px] rounded-[3px] bg-[#C98A8A]/40" />
        </div>
      </div>
      <div className="mt-1.5 flex justify-center gap-1">
        <i className="h-1 w-1 rounded-full bg-[#3A2320]" />
        <i className="h-1 w-1 rounded-full bg-[#8A736A]/50" />
        <i className="h-1 w-1 rounded-full bg-[#8A736A]/50" />
      </div>
    </div>
  );
}

function AnalyticsPanel() {
  const bars = [28, 40, 36, 52, 60, 78, 100];
  return (
    <div className="w-[186px] rotate-[-1deg] rounded-lg border border-[#3A1B1E] bg-[#1C0D10] p-2.5 shadow-[0_16px_36px_rgba(0,0,0,0.5)]">
      <p className="font-body text-[6.5px] uppercase tracking-[0.2em] text-[#A98D81]">
        Accounts reached · 30 days
      </p>
      <p className="mt-1 font-serif-display text-2xl italic text-[#E9C37B]">+101%</p>
      <div className="mt-1.5 flex h-8 items-end gap-1">
        {bars.map((h, i) => (
          <span
            key={i}
            className="w-full rounded-t-[2px]"
            style={{ height: `${h}%`, backgroundColor: i === bars.length - 1 ? GOLD : '#5B2A24' }}
          />
        ))}
      </div>
    </div>
  );
}

export function CaseStudySection() {
  return (
    <section
      className="relative overflow-hidden bg-[#12090B] px-6 py-14 md:h-[780px] md:px-10"
      aria-label="Internship case study — Aadiya Jewels"
    >
      {/* Dark silky fabric detail — bottom-left anchor */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-20 h-[320px] w-[360px] rounded-full opacity-70 blur-2xl"
        style={{ background: 'radial-gradient(closest-side, rgba(122,26,28,0.55), rgba(18,9,11,0))' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 left-6 h-[160px] w-[240px] rounded-full opacity-50 blur-xl"
        style={{ background: 'radial-gradient(closest-side, rgba(217,164,65,0.18), rgba(18,9,11,0))' }}
      />

      {/* Masthead — eyebrow + rule, serif company name */}
      <div className="relative text-center">
        <div className="mx-auto flex max-w-md items-center gap-3">
          <span className="h-px flex-1 bg-[#5B3A35]" />
          <p className="font-body text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C9A68F]">
            Internship · Social Media &amp; Content
          </p>
          <span className="h-px flex-1 bg-[#5B3A35]" />
        </div>
        <h2 className="mt-3 font-serif-display text-5xl italic text-[#F4E6D8] md:text-6xl">
          Aadiya Jewels
        </h2>
        <p className="mt-1 text-xl text-[#C99F7A]" style={{ fontFamily: "'Caveat', cursive" }}>
          content, campaigns &amp; AI-led storytelling
        </p>
      </div>

      {/* Collage — absolutely arranged on desktop, stacked flow on mobile */}
      <div className="relative mt-10 flex flex-col items-center gap-12 md:mt-0 md:block md:h-[580px]">
        {/* Left cluster — AI-generated content */}
        <div className="md:absolute md:left-0 md:top-8">
          <p className="mb-3 font-serif-display text-sm italic text-[#D8B894]">AI-generated content</p>
          <div className="flex items-start">
            <PhoneMock
              tilt={-8}
              className="relative z-10"
              headline="Happy Halloween."
              sub="Festive concept frame — AI-directed jewellery still, deep burgundy set."
              visual="pendant"
            />
            <PhoneMock
              tilt={7}
              className="-ml-8 mt-10"
              headline="Aadiya Jewels"
              sub="Brand ident frame — gold on near-black, AI-assisted grade."
              visual="sparkle"
            />
          </div>
        </div>

        {/* Centre column — calendar, arrow, carousel, analytics */}
        <div className="flex flex-col items-center gap-3 md:absolute md:left-1/2 md:top-0 md:-translate-x-1/2">
          <p className="text-lg text-[#C99F7A]" style={{ fontFamily: "'Caveat', cursive" }}>
            content calendar
          </p>
          <CalendarPanel />
          <svg viewBox="0 0 40 54" fill="none" aria-hidden className="h-12 w-8">
            <path
              d="M20 2 C 26 18, 14 30, 20 44"
              stroke="#C9A68F"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="0.1 8"
            />
            <path d="M13 38 L20 47 L27 38" stroke="#C9A68F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          <p className="text-lg text-[#C99F7A]" style={{ fontFamily: "'Caveat', cursive" }}>
            carousel drafts
          </p>
          <CarouselPanel />
        </div>

        {/* Analytics plate — bottom-centre-right */}
        <div className="md:absolute md:bottom-4 md:left-[55%]">
          <AnalyticsPanel />
        </div>

        {/* Right cluster — social media management */}
        <div className="md:absolute md:right-0 md:top-8 md:text-right">
          <p className="mb-3 font-serif-display text-sm italic text-[#D8B894]">Social media management</p>
          <div className="flex items-start">
            <PhoneMock
              tilt={-9}
              className="mt-8"
              headline="The Festive Edit"
              sub="Feed planning & grid styling for the festive drop."
              visual="earrings"
              imgSrc="/portfolio-assets/IMG_1559.PNG"
            />
            <PhoneMock
              tilt={2}
              className="relative z-10 -ml-6"
              headline="New Arrivals"
              sub="Product storytelling — macro shine, styled sets."
              visual="ring"
              imgSrc="/portfolio-assets/IMG_1560.PNG"
            />
            <PhoneMock
              tilt={10}
              className="-ml-6 mt-12"
              headline="On Set"
              sub="Behind the lens — lighting studies for the catalogue."
              visual="pendant"
              imgSrc="/portfolio-assets/WhatsApp Image 2026-09-13 at 19.42.18.jpeg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
