import React from 'react';

export const MakingIdeaRealSlide: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-8 lg:p-12 bg-[#F4F0E8]">
      <div className="w-full max-w-[520px] aspect-[0.86/1] bg-[#F4F0E8] relative font-body text-[#181817]">
        {/* Subtle paper texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 400 400%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.025%22/%3E%3C/svg%3E')] pointer-events-none" />

        {/* Main Content Container */}
        <div className="absolute inset-0 m-4 sm:m-5 lg:m-7 flex flex-col h-full">
          
          {/* ============================================================
              HEADER (~24% height)
          ============================================================ */}
          <header className="flex flex-col flex-[0_0_24%] pb-4">
            
            {/* Page Marker */}
            <div className="flex items-baseline gap-2 mb-3">
              <span className="font-mono-code text-[22px] sm:text-[25px] font-medium text-[#34332F]">
                03
              </span>
              <span className="font-mono-code text-[7px] uppercase tracking-[0.1em] text-[#55524B] self-end mb-1">
                PAGE 3
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-body text-[22px] sm:text-[25px] font-medium tracking-[0.05em] uppercase text-[#171716] leading-tight mb-1.5">
              MAKING THE IDEA REAL
            </h1>

            {/* Subtitle */}
            <p className="font-body text-[15px] sm:text-[17px] text-[#252522] leading-snug mb-2.5">
              From Idea to Product
            </p>

            {/* Intro Description */}
            <p className="font-body text-[9px] sm:text-[10px] leading-[1.4] text-[#55524D] max-w-[300px] mb-3">
              We turned the idea into a 4-fragrance collection, inspired by nature and Japanese simplicity.
            </p>

            {/* Fragrance Names */}
            <div className="flex items-center gap-2 sm:gap-3 font-mono-code text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-[#262522]">
              <span>HANA</span>
              <span className="text-[#AAA59C]">•</span>
              <span>MIZU</span>
              <span className="text-[#AAA59C]">•</span>
              <span>KAZE</span>
              <span className="text-[#AAA59C]">•</span>
              <span>SORA</span>
            </div>
          </header>

          {/* ============================================================
              HERO PRODUCT IMAGE
          ============================================================ */}
          <div className="relative flex-[0_0_28%] min-h-[125px] max-h-[140px] mb-3 overflow-hidden bg-[#EDE9E1]">
            <img
              src="/portfolio-assets/03_four_bottles_hero.jpg"
              alt="Four minimal rectangular perfume bottles HANA, MIZU, KAZE, SORA arranged on reflective stone surface with delicate pink flowering branch on left, green branch on right, soft cream and pale blue outdoor landscape background"
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 140%22%3E%3Crect fill=%22%23EDE9E1%22 width=%22100%25%22 height=%22100%25%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22system-ui%22 font-size=%2212%22 fill=%22%23A89A87%22%3EHANA • MIZU • KAZE • SORA%3C/text%3E%3C/svg%3E'; }}
            />
          </div>

          {/* ============================================================
              DEVELOPMENT PROCESS (~75px)
          ============================================================ */}
          <section className="relative flex-[0_0_75px] bg-[#F4F0E8] flex items-center justify-center px-4 gap-4 sm:gap-6">
            {[
              { 
                number: '01', 
                title: 'Concept\nDevelopment',
                icon: <ConceptIcon />
              },
              { 
                number: '02', 
                title: 'Prototype\nDevelopment',
                icon: <PrototypeIcon />
              },
              { 
                number: '03', 
                title: 'Packaging\nDesign',
                icon: <PackagingIcon />
              }
            ].map((step, idx) => (
              <React.Fragment key={step.number}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative flex items-center justify-center mb-2">
                    <div className="w-[34px] h-[34px] rounded-full border border-[#9E9A91] bg-[#F7F4ED] flex items-center justify-center">
                      <span className="text-[#55524C]">{step.icon}</span>
                    </div>
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 font-mono-code text-[9px] font-bold text-[#55524C]">
                      {step.number}
                    </span>
                  </div>
                  <p className="font-body text-[7px] sm:text-[8px] leading-[1.2] text-[#3E3C37] whitespace-pre">
                    {step.title}
                  </p>
                </div>
                {idx < 2 && (
                  <div className="flex items-center">
                    <svg viewBox="0 0 24 12" className="w-6 h-4 text-[#AAA59C]" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                      <path d="M2 6 L20 6" />
                      <path d="M16 2 L20 6 L16 10" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </section>

          {/* ============================================================
              BOTTOM VISUAL GRID (~125px)
          ============================================================ */}
          <section className="relative flex-[0_0_125px] min-h-[125px] max-h-[135px] flex items-center">
            <div className="w-full flex gap-[4px] h-full">
              {/* Image 01 - Concept Sketches */}
              <div className="flex-1 rounded-[5px] overflow-hidden bg-[#EDE9E1] relative">
                <img
                  src="/portfolio-assets/03_concept_sketches.jpg"
                  alt="Close-up of hand-drawn perfume bottle sketches and packaging concepts on white paper with rough bottle drawings, packaging sketches, handwritten annotations, technical design marks"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 120 125%22%3E%3Crect fill=%22%23EDE9E1%22 width=%22100%25%22 height=%22100%25%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22system-ui%22 font-size=%228%22 fill=%22%23A89A87%22%3EConcept Sketches%3C/text%3E%3C/svg%3E'; }}
                />
              </div>

              {/* Image 02 - Prototype Photography */}
              <div className="flex-1 rounded-[5px] overflow-hidden bg-[#EDE9E1] relative">
                <img
                  src="/portfolio-assets/03_prototype_products.jpg"
                  alt="Multiple fragrance bottles and early prototypes arranged on warm beige table with several perfume bottles, prototype packaging, different bottle shapes, neutral product boxes"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 120 125%22%3E%3Crect fill=%22%23EDE9E1%22 width=%22100%25%22 height=%22100%25%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22system-ui%22 font-size=%228%22 fill=%22%23A89A87%22%3EPrototypes%3C/text%3E%3C/svg%3E'; }}
                />
              </div>

              {/* Image 03 - Packaging */}
              <div className="flex-1 rounded-[5px] overflow-hidden bg-[#EDE9E1] relative">
                <img
                  src="/portfolio-assets/03_branded_packaging.jpg"
                  alt="Minimal cream fragrance packaging box with UNIQLO FRAGRANCES branding and small red square logo centered on box"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 120 125%22%3E%3Crect fill=%22%23E8E2D6%22 width=%22100%25%22 height=%22100%25%22/%3E%3Crect x=%2225%22 y=%2240%22 width=%2270%22 height=%2245%22 fill=%22%23FFFFFF%22 stroke=%22%23D5D0C6%22 stroke-width=%220.5%22/%3E%3Crect x=%2252%22 y=%2248%22 width=%2216%22 height=%2216%22 fill=%22%23E11B22%22/%3E%3Ctext x=%2250%25%22 y=%22110%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22system-ui%22 font-size=%227%22 fill=%22%23A89A87%22%3EPackaging%3C/text%3E%3C/svg%3E'; }}
                />
              </div>

              {/* Image 04 - Final Product */}
              <div className="flex-1 rounded-[5px] overflow-hidden bg-[#EDE9E1] relative">
                <img
                  src="/portfolio-assets/03_final_products.jpg"
                  alt="Open packaging tray containing four finished fragrance bottles HANA, MIZU, KAZE, SORA in cream interior tray, top-down view"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 120 125%22%3E%3Crect fill=%22%23EDE9E1%22 width=%22100%25%22 height=%22100%25%22/%3E%3Crect x=%2210%22 y=%2220%22 width=%22100%22 height=%2285%22 fill=%22%23F5F1E9%22 rx=%224%22 stroke=%22%23D5D0C6%22 stroke-width=%220.5%22/%3E%3Crect x=%2218%22 y=%2235%22 width=%2220%22 height=%2255%22 fill=%22%23FFE4E1%22 rx=%221%22/%3E%3Crect x=%2243%22 y=%2235%22 width=%2220%22 height=%2255%22 fill=%22%22E0F0FF%22 rx=%221%22/%3E%3Crect x=%2268%22 y=%2235%22 width=%2220%22 height=%2255%22 fill=%22%22F0FFE0%22 rx=%221%22/%3E%3Crect x=%2293%22 y=%2235%22 width=%2220%22 height=%2255%22 fill=%22%22F0E0FF%22 rx=%221%22/%3E%3Ctext x=%2250%25%22 y=%22110%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22system-ui%22 font-size=%227%22 fill=%22%23A89A87%22%3EFinal Products%3C/text%3E%3C/svg%3E'; }}
                />
              </div>
            </div>
          </section>

          {/* ============================================================
              BOTTOM CAPTION
          ============================================================ */}
          <footer className="flex flex-[0_0_20px] items-end justify-end pr-2">
            <p className="font-mono-code text-[7px] sm:text-[8px] uppercase tracking-[0.1em] text-[#55524D]">
              Minimal / Functional / Japanese
            </p>
          </footer>

        </div>
      </div>
    </div>
  );
};

// Icon components
const ConceptIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18h6m-6 0v-6m0 6a9 9 0 1 0 0-18" />
    <path d="M12 9v3m0 3v3" />
    <path d="M12 12h.01" />
  </svg>
);

const PrototypeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v3" />
    <path d="M9 6h6v12a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2V6" />
    <path d="M9 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" />
  </svg>
);

const PackagingIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);