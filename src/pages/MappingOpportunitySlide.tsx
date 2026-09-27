import React from 'react';
import { SlidePhoto } from '../components/SlidePhoto';

export const MappingOpportunitySlide: React.FC<{ embedded?: boolean }> = ({ embedded = false }) => {
  return (
    <div className={embedded ? 'w-full bg-[#F4F0E8]' : 'min-h-screen flex items-center justify-center p-4 sm:p-8 lg:p-12 bg-[#F4F0E8]'}>
      <div
        className={`w-full aspect-[16/9] bg-[#F4F0E8] relative font-body text-[#171715] ${embedded ? '' : 'max-w-7xl'}`}
      >
        {/* Slide Background with subtle texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 400 400%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.03%22/%3E%3C/svg%3E')] pointer-events-none" />

        {/* Main Grid Container */}
        <div className="absolute inset-0 m-4 sm:m-6 lg:m-8 grid grid-rows-[auto_1fr_auto] h-full">
          
          {/* ============================================================
              HEADER SECTION (~18% height)
          ============================================================ */}
          <header className="relative grid grid-cols-[1fr_auto] gap-6 items-start pt-2 pr-2 pl-2 h-[18%] min-h-[120px]">
            
            {/* Left Header Content */}
            <div className="flex flex-col justify-start min-w-0">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-serif-display text-sm text-[#77746C]">— 02</span>
                <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-[#171715]">
                  MAPPING THE OPPORTUNITY
                </h1>
              </div>
              <p className="font-editorial italic text-xs sm:text-sm text-[#6D6961] leading-snug max-w-xl">
                Exploring the market, consumer and competitive landscape to identify where Uniqlo could grow.
              </p>
            </div>

            {/* Right Header Content */}
            <div className="flex flex-col items-end justify-start gap-2 relative">
              <div className="text-right">
                <p className="font-mono-code text-[9px] uppercase tracking-[0.22em] text-[#77746C]">
                  UNIQLO FRAGRANCES
                </p>
                <p className="font-mono-code text-[9px] uppercase tracking-[0.22em] text-[#77746C] mt-0.5">
                  MARKETING MANAGEMENT PROJECT
                </p>
              </div>
              
              {/* Header Image - Fragrance Still Life - IMAGE PLACEHOLDER */}
              <div className="relative w-[32%] aspect-[3.2/1] min-w-[200px] max-w-[280px] overflow-hidden">
                <SlidePhoto
                  src="/portfolio-assets/02_fragrance_still_life.jpg"
                  alt="Minimal Japanese-inspired fragrance still life with small fragrance bottle on warm cream surface beside delicate white flowers and thin branches"
                  label="Fragrance Still Life"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </header>

          {/* Header bottom rule */}
          <div className="border-t border-[#D8D3C8] mx-2" />

          {/* ============================================================
              MAIN GRID - UPPER ROW (3 columns, ~44% height)
          ============================================================ */}
          <main className="relative flex-1 grid grid-cols-3 gap-2 p-2 min-h-0">
            
            {/* ----- MARKET POTENTIAL (Left, ~34%) ----- */}
            <section className="relative bg-[#E5E9E9] p-5 sm:p-6 overflow-hidden min-w-0">
              {/* Section Header */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-serif-display text-sm text-[#55534D]">01</span>
                <h2 className="font-mono-code text-[10px] uppercase tracking-[0.22em] font-medium text-[#55534D]">
                  MARKET POTENTIAL
                </h2>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2.5 mb-6 text-[#55534D]">
                <li className="flex items-start gap-2 text-[11px] leading-[1.6]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#77746C] mt-1.5 flex-shrink-0" />
                  <span>Fragrance industry growing in India</span>
                </li>
                <li className="flex items-start gap-2 text-[11px] leading-[1.6]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#77746C] mt-1.5 flex-shrink-0" />
                  <span>+5.6% annual growth</span>
                </li>
                <li className="flex items-start gap-2 text-[11px] leading-[1.6]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#77746C] mt-1.5 flex-shrink-0" />
                  <span>₹16,000 Cr projected market by 2033</span>
                </li>
              </ul>

              {/* Market Metric */}
              <div className="relative z-10 flex flex-col items-start">
                <div className="font-serif-display text-4xl sm:text-5xl lg:text-6xl leading-[0.9] tracking-tight text-[#171715]">
                  ₹16,000 Cr
                </div>
                <p className="font-mono-code text-[9px] uppercase tracking-[0.22em] text-[#55534D] mt-1">
                  PROJECTED MARKET BY 2033
                </p>
                <p className="font-mono-code text-[10px] text-[#55534D] mt-0.5">
                  +5.6% CAGR
                </p>
              </div>

              {/* Background Image - City Skyline - IMAGE PLACEHOLDER */}
              <div className="absolute bottom-0 right-0 w-[55%] h-[65%] opacity-40 pointer-events-none">
                <SlidePhoto
                  src="/portfolio-assets/02_city_skyline.jpg"
                  alt="Modern Indian metropolitan skyline viewed through atmospheric haze with waterfront and high-rise buildings"
                  label="City Skyline"
                  className="w-full h-full object-cover"
                />
              </div>
            </section>

            {/* ----- CONSUMER (Center, ~32%) ----- */}
            <section className="relative bg-[#F5F1E9] p-5 sm:p-6 overflow-hidden min-w-0">
              {/* Section Header */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-serif-display text-sm text-[#55534D]">02</span>
                <h2 className="font-mono-code text-[10px] uppercase tracking-[0.22em] font-medium text-[#55534D]">
                  CONSUMER
                </h2>
              </div>

              <div className="grid grid-cols-[48%_52%] gap-3 h-[calc(100%-40px)] min-h-0">
                {/* Image - Editorial Lifestyle - IMAGE PLACEHOLDER */}
                <div className="relative aspect-[0.9/1] overflow-hidden">
                  <SlidePhoto
                    src="/portfolio-assets/02_consumer_lifestyle.jpg"
                    alt="Young Asian couple standing outdoors in minimal neutral clothing, soft neutral outdoor environment with natural diffused daylight"
                    label="Consumer Lifestyle"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Consumer Points */}
                <div className="flex flex-col justify-center space-y-2.5">
                  <ul className="space-y-2.5 text-[#55534D]">
                    <li className="flex items-start gap-2 text-[11px] leading-[1.6]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#77746C] mt-1.5 flex-shrink-0" />
                      <span>Millennials & Gen Z</span>
                    </li>
                    <li className="flex items-start gap-2 text-[11px] leading-[1.6]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#77746C] mt-1.5 flex-shrink-0" />
                      <span>Value simplicity & subtle elegance</span>
                    </li>
                    <li className="flex items-start gap-2 text-[11px] leading-[1.6]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#77746C] mt-1.5 flex-shrink-0" />
                      <span>Fresh, minimal, everyday scents</span>
                    </li>
                    <li className="flex items-start gap-2 text-[11px] leading-[1.6]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#77746C] mt-1.5 flex-shrink-0" />
                      <span>Professionals seeking office-friendly fragrances</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* ----- COMPETITIVE SPACE (Right, ~34%) ----- */}
            <section className="relative bg-[#F5F1E9] p-5 sm:p-6 overflow-hidden min-w-0">
              {/* Section Header */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-serif-display text-sm text-[#55534D]">03</span>
                <h2 className="font-mono-code text-[10px] uppercase tracking-[0.22em] font-medium text-[#55534D]">
                  COMPETITIVE SPACE
                </h2>
              </div>

              {/* Competitor Rows */}
              <div className="space-y-5 mb-6 pr-8">
                {/* ZARA Row */}
                <div className="grid grid-cols-[1fr_auto_1fr] items-baseline gap-3">
                  <span className="font-serif-display text-lg font-bold text-[#171715] tracking-tight">ZARA</span>
                  <span className="text-[#77746C] font-mono-code text-sm">→</span>
                  <span className="font-mono-code text-[11px] uppercase tracking-[0.15em] text-[#55534D]">Fragrance</span>
                </div>
                
                {/* H&M Row */}
                <div className="grid grid-cols-[1fr_auto_1fr] items-baseline gap-3">
                  <span className="font-editorial text-lg font-bold text-[#171715] italic">H&M</span>
                  <span className="text-[#77746C] font-mono-code text-sm">→</span>
                  <span className="font-mono-code text-[11px] uppercase tracking-[0.15em] text-[#55534D]">Fragrance</span>
                </div>
                
                {/* UNIQLO Row */}
                <div className="grid grid-cols-[1fr_auto_1fr] items-baseline gap-3">
                  <div className="flex items-baseline gap-1.5">
                    <span className="w-6 h-6 bg-[#E01A1A] flex items-center justify-center">
                      <span className="font-bold text-white text-[11px] leading-none">UNI</span>
                    </span>
                    <span className="font-bold text-[#171715] text-lg">QLO</span>
                  </div>
                  <span className="text-[#77746C] font-mono-code text-sm">→</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-mono-code text-[11px] uppercase tracking-[0.15em] text-[#55534D]">Apparel</span>
                    <span className="font-serif-display text-xl text-[#E01A1A] leading-none">?</span>
                  </div>
                </div>
              </div>

              {/* Uniqlo Note */}
              <p className="font-editorial italic text-[11px] text-[#5F5B54] leading-relaxed pr-8">
                Opportunity for a distinctly Japanese, minimal scent.
              </p>

              {/* Background Image - Japanese Botanical - IMAGE PLACEHOLDER */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[35%] h-[70%] opacity-60 pointer-events-none">
                <SlidePhoto
                  src="/portfolio-assets/02_japanese_botanical.jpg"
                  alt="Delicate flowering branch with small white blossoms against pale neutral background, Japanese botanical photography"
                  label="Japanese Botanical"
                  className="w-full h-full object-cover"
                />
              </div>
            </section>

          </main>

          {/* ============================================================
              LOWER ROW (~29% height)
          ============================================================ */}
          <section className="relative grid grid-cols-[70%_28%] gap-2 p-2 h-[29%] min-h-[180px] max-h-[200px]">
            
            {/* ----- BRAND FIT (Left + Center, ~70%) ----- */}
            <div className="relative bg-[#EEE9E0] p-5 sm:p-6 overflow-hidden min-w-0">
              {/* Section Header */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-serif-display text-sm text-[#55534D]">04</span>
                <h2 className="font-mono-code text-[10px] uppercase tracking-[0.22em] font-medium text-[#55534D]">
                  BRAND FIT
                </h2>
              </div>

              <div className="relative h-[calc(100%-40px)] grid grid-cols-[65%_35%] gap-4">
                {/* LifeWear → FeelWear Content */}
                <div className="flex flex-col justify-center gap-6 pr-4">
                  {/* LIFEWEAR */}
                  <div>
                    <h3 className="font-mono-code text-[10px] uppercase tracking-[0.3em] font-bold text-[#171715] mb-3">
                      LIFEWEAR
                    </h3>
                    <ul className="space-y-2 text-[#4D4B46]">
                      <li className="flex items-center gap-2 text-[11px] leading-[1.5]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#77746C] flex-shrink-0" />
                        <span>Comfort</span>
                      </li>
                      <li className="flex items-center gap-2 text-[11px] leading-[1.5]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#77746C] flex-shrink-0" />
                        <span>Functionality</span>
                      </li>
                      <li className="flex items-center gap-2 text-[11px] leading-[1.5]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#77746C] flex-shrink-0" />
                        <span>Simplicity</span>
                      </li>
                    </ul>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center justify-center my-2">
                    <svg viewBox="0 0 60 12" className="w-24 h-5 text-[#77746C]" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                      <path d="M2 6 L58 6"/>
                      <path d="M48 2 L58 6 L48 10"/>
                    </svg>
                  </div>

                  {/* FEELWEAR */}
                  <div>
                    <h3 className="font-mono-code text-[10px] uppercase tracking-[0.3em] font-bold text-[#171715] mb-3">
                      FEELWEAR
                    </h3>
                    <ul className="space-y-2 text-[#4D4B46]">
                      <li className="flex items-center gap-2 text-[11px] leading-[1.5]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#77746C] flex-shrink-0" />
                        <span>Sensory experience</span>
                      </li>
                      <li className="flex items-center gap-2 text-[11px] leading-[1.5]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#77746C] flex-shrink-0" />
                        <span>Japanese minimalism</span>
                      </li>
                      <li className="flex items-center gap-2 text-[11px] leading-[1.5]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#77746C] flex-shrink-0" />
                        <span>Everyday fragrance</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Brand Fit Image - Sunlight on cream fabric with botanical shadows - IMAGE PLACEHOLDER */}
                <div className="relative aspect-[1/1] min-h-[160px] overflow-hidden">
                  <SlidePhoto
                    src="/portfolio-assets/02_brand_fit_sunlight.jpg"
                    alt="Soft sunlight falling across cream fabric with delicate flowering branches casting shadows, minimal Japanese editorial still life"
                    label="Brand Fit Sunlight"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* ----- THE SPACE WE IDENTIFIED (Right, ~28%) ----- */}
            <div className="relative bg-[#EEE9E0] p-5 sm:p-6 flex flex-col justify-center min-w-0">
              {/* Title */}
              <h3 className="font-mono-code text-[10px] uppercase tracking-[0.3em] font-medium text-[#656159] mb-4">
                THE SPACE WE IDENTIFIED
              </h3>
              
              {/* Statement */}
              <p className="font-editorial italic text-base sm:text-lg leading-[1.5] text-[#55524C]">
                A minimalist, everyday fragrance category that feels distinctly Uniqlo.
              </p>
            </div>

          </section>

          {/* ============================================================
              FOOTER NAVIGATION (~9% height)
          ============================================================ */}
          <footer className="relative h-[9%] min-h-[60px] bg-[#F4F0E8] border-t border-[#D8D3C8] flex items-center px-4">
            <nav className="w-full flex items-center justify-between gap-2 sm:gap-4 px-2" aria-label="Slide navigation">
              <button className="font-mono-code text-[10px] uppercase tracking-[0.15em] font-bold text-[#292824] whitespace-nowrap flex-shrink-0">
                RESEARCH LENS
              </button>
              <div className="hidden sm:flex items-center gap-2 sm:gap-3 flex-1 justify-center">
                <span className="font-mono-code text-[10px] uppercase tracking-[0.15em] text-[#77736A] whitespace-nowrap">MARKET ANALYSIS</span>
                <span className="w-px h-4 bg-[#D8D3C8]"></span>
                <span className="font-mono-code text-[10px] uppercase tracking-[0.15em] text-[#77736A] whitespace-nowrap">CONSUMER ANALYSIS</span>
                <span className="w-px h-4 bg-[#D8D3C8]"></span>
                <span className="font-mono-code text-[10px] uppercase tracking-[0.15em] text-[#77736A] whitespace-nowrap">COMPETITIVE MAPPING</span>
                <span className="w-px h-4 bg-[#D8D3C8]"></span>
                <span className="font-mono-code text-[10px] uppercase tracking-[0.15em] text-[#77736A] whitespace-nowrap">SWOT</span>
                <span className="w-px h-4 bg-[#D8D3C8]"></span>
                <span className="font-mono-code text-[10px] uppercase tracking-[0.15em] text-[#77736A] whitespace-nowrap">STP</span>
                <span className="w-px h-4 bg-[#D8D3C8]"></span>
                <span className="font-mono-code text-[10px] uppercase tracking-[0.15em] text-[#77736A] whitespace-nowrap">PORTER'S FIVE FORCES</span>
                <span className="w-px h-4 bg-[#D8D3C8]"></span>
                <span className="font-mono-code text-[10px] uppercase tracking-[0.15em] text-[#77736A] whitespace-nowrap">ANSOFF</span>
                <span className="w-px h-4 bg-[#D8D3C8]"></span>
                <span className="font-mono-code text-[10px] uppercase tracking-[0.15em] text-[#77736A] whitespace-nowrap">BCG</span>
              </div>
              <div className="flex sm:hidden items-center gap-1 overflow-x-auto pb-1 scrollbar-hide">
                <span className="font-mono-code text-[8px] uppercase tracking-[0.1em] text-[#77736A] whitespace-nowrap">MARKET ANALYSIS</span>
                <span className="w-px h-3 bg-[#D8D3C8]"></span>
                <span className="font-mono-code text-[8px] uppercase tracking-[0.1em] text-[#77736A] whitespace-nowrap">CONSUMER ANALYSIS</span>
                <span className="w-px h-3 bg-[#D8D3C8]"></span>
                <span className="font-mono-code text-[8px] uppercase tracking-[0.1em] text-[#77736A] whitespace-nowrap">COMPETITIVE MAPPING</span>
                <span className="w-px h-3 bg-[#D8D3C8]"></span>
                <span className="font-mono-code text-[8px] uppercase tracking-[0.1em] text-[#77736A] whitespace-nowrap">SWOT</span>
                <span className="w-px h-3 bg-[#D8D3C8]"></span>
                <span className="font-mono-code text-[8px] uppercase tracking-[0.1em] text-[#77736A] whitespace-nowrap">STP</span>
                <span className="w-px h-3 bg-[#D8D3C8]"></span>
                <span className="font-mono-code text-[8px] uppercase tracking-[0.1em] text-[#77736A] whitespace-nowrap">PORTER'S FIVE FORCES</span>
                <span className="w-px h-3 bg-[#D8D3C8]"></span>
                <span className="font-mono-code text-[8px] uppercase tracking-[0.1em] text-[#77736A] whitespace-nowrap">ANSOFF</span>
                <span className="w-px h-3 bg-[#D8D3C8]"></span>
                <span className="font-mono-code text-[8px] uppercase tracking-[0.1em] text-[#77736A] whitespace-nowrap">BCG</span>
              </div>
            </nav>
          </footer>

        </div>
      </div>
    </div>
  );
};