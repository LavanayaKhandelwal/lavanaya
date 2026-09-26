import React from 'react';

export const BringingConceptToLifeSlide: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-8 lg:p-12 bg-[#F5F1E8]">
      <div className="w-full max-w-7xl aspect-[16/9] bg-[#F5F1E8] relative font-body text-[#151515]">
        {/* Subtle paper texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 400 400%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.03%22/%3E%3C/svg%3E')] pointer-events-none" />

        {/* Main Grid - Asymmetric 3-column editorial collage */}
        <div className="absolute inset-0 m-3 sm:m-4 lg:m-5 grid grid-cols-[39%_31%_30%] gap-[6px] h-full">
          
          {/* ============================================================
              LEFT COLUMN (~39%, ~90% height)
          ============================================================ */}
          <div className="relative flex flex-col h-[90%] self-start p-4 sm:p-5 min-w-0">
            
            {/* Main Heading */}
            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight text-[#151515] mb-5 sm:mb-6">
              BRINGING THE<br />CONCEPT TO LIFE
            </h1>

            {/* The Marketing Pitch */}
            <div className="mb-6 sm:mb-7 max-w-[310px]">
              <h2 className="font-mono-code text-[11px] sm:text-[13px] uppercase tracking-[0.22em] font-bold text-[#181818] mb-3">
                THE MARKETING PITCH
              </h2>
              <p className="font-body text-[10px] sm:text-[11px] leading-[1.45] text-[#4B4944]">
                Once the product was developed, we took it into a college product-pitch activity. We presented the fragrance concept, explained the product and invited students to experience the fragrances themselves.
              </p>
            </div>

            {/* Process Flow - 4 circular nodes with image placeholders */}
            <div className="mb-5 sm:mb-6 flex flex-col items-start">
              <div className="flex items-center gap-2 sm:gap-3 mb-3">
                {[
                  { label: 'PITCH', src: '/portfolio-assets/process-pitch.jpg', alt: 'Pitch process icon' },
                  { label: 'TEST', src: '/portfolio-assets/process-test.jpg', alt: 'Test process icon' },
                  { label: 'FEEDBACK', src: '/portfolio-assets/process-feedback.jpg', alt: 'Feedback process icon' },
                  { label: 'ITERATE', src: '/portfolio-assets/process-iterate.jpg', alt: 'Iterate process icon' }
                ].map((item, idx) => (
                  <React.Fragment key={item.label}>
                    <div className="relative flex flex-col items-center">
                      <div className="w-[43px] h-[43px] rounded-full bg-[#EAE5DC] flex items-center justify-center overflow-hidden">
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-full object-cover opacity-60"
                          onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }}
                        />
                        <div className="hidden absolute inset-0 flex items-center justify-center text-[#55524C] font-mono-code text-[10px] uppercase tracking-[0.1em]">
                          {item.label}
                        </div>
                      </div>
                      <span className="font-mono-code text-[8px] sm:text-[9px] uppercase tracking-[0.1em] text-[#373631] mt-1.5">
                        {item.label}
                      </span>
                    </div>
                    {idx < 3 && (
                      <svg viewBox="0 0 24 12" className="w-6 h-[43px] text-[#77736B]" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                        <path d="M2 6 L20 6" />
                        <path d="M16 2 L20 6 L16 10" />
                      </svg>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Bottom Photo - Students testing fragrances - IMAGE PLACEHOLDER */}
            <div className="relative mt-auto w-full aspect-[2.8/1] min-h-[135px] max-h-[145px] overflow-hidden bg-[#EDE9E1]">
              <img
                src="/portfolio-assets/04_students_testing_fragrances.jpg"
                alt="College students gathered around a table testing and smelling fragrance products with multiple perfume bottles and product boxes displayed"
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 150%22%3E%3Crect fill=%22%23EDE9E1%22 width=%22100%25%22 height=%22100%25%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22system-ui%22 font-size=%2212%22 fill=%22%23A89A87%22%3EStudents Testing Fragrances%3C/text%3E%3C/svg%3E'; }}
              />
            </div>
          </div>

          {/* ============================================================
              CENTRAL COLUMN (~31%, ~72% height)
          ============================================================ */}
          <div className="relative flex flex-col h-[72%] self-start gap-[6px] min-w-0">
            
            {/* Top Photo - Woman presenting at booth - IMAGE PLACEHOLDER */}
            <div className="relative flex-0-0 aspect-[1.1/1] min-h-[185px] max-h-[195px] overflow-hidden bg-[#EDE9E1]">
              <img
                src="/portfolio-assets/04_presenter_at_booth.jpg"
                alt="Young woman in black blazer presenting fragrance products at college product-pitch booth with students gathered around"
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 350 350%22%3E%3Crect fill=%22%23EDE9E1%22 width=%22100%25%22 height=%22100%25%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22system-ui%22 font-size=%2212%22 fill=%22%23A89A87%22%3EPresenter at Booth%3C/text%3E%3C/svg%3E'; }}
              />
            </div>

            {/* Middle Photo - Students testing fragrances - IMAGE PLACEHOLDER */}
            <div className="relative flex-0-0 aspect-[1.3/1] min-h-[145px] max-h-[155px] overflow-hidden bg-[#EDE9E1]">
              <img
                src="/portfolio-assets/04_students_interacting.jpg"
                alt="College students actively testing fragrance products at presentation table with multiple bottles and white packaging"
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 350 280%22%3E%3Crect fill=%22%23EDE9E1%22 width=%22100%25%22 height=%22100%25%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22system-ui%22 font-size=%2212%22 fill=%22%23A89A87%22%3EStudents Interacting%3C/text%3E%3C/svg%3E'; }}
              />
            </div>

            {/* Bottom Insight Panel */}
            <div className="relative bg-[#F5F1E8] p-4 sm:p-5 min-h-[90px] flex flex-col justify-center">
              <h3 className="font-mono-code text-[11px] sm:text-[13px] uppercase tracking-[0.22em] text-[#222222] mb-2">
                LISTEN. REFINE. REPEAT.
              </h3>
              <p className="font-body text-[10px] sm:text-[11px] leading-[1.45] text-[#55524D]">
                The feedback helped us identify what could be improved and refine the product and packaging accordingly.
              </p>
            </div>
          </div>

          {/* ============================================================
              RIGHT COLUMN (~29%, ~90% height)
          ============================================================ */}
          <div className="relative flex flex-col h-[90%] self-start gap-[6px] min-w-0">
            
            {/* Top Photo - Students at booth - IMAGE PLACEHOLDER */}
            <div className="relative flex-0-0 aspect-[1.6/1] min-h-[112px] max-h-[120px] overflow-hidden bg-[#EDE9E1]">
              <img
                src="/portfolio-assets/04_students_at_booth.jpg"
                alt="College students interacting with fragrance booth and testing perfume products"
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 350 220%22%3E%3Crect fill=%22%23EDE9E1%22 width=%22100%25%22 height=%22100%25%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22system-ui%22 font-size=%2212%22 fill=%22%23A89A87%22%3EStudents at Booth%3C/text%3E%3C/svg%3E'; }}
              />
            </div>

            {/* Metric Panel */}
            <div className="relative flex-0-0 min-h-[180px] bg-[#F5F1E8] flex items-center justify-center px-4">
              <div className="text-center">
                <div className="font-serif-display text-5xl sm:text-6xl lg:text-7xl leading-[0.9] tracking-tight text-[#171717] mb-2">
                  25–30<span className="font-mono-code text-2xl sm:text-3xl font-bold text-[#171717]">+</span>
                </div>
                <p className="font-mono-code text-[9px] sm:text-[11px] uppercase tracking-[0.3em] text-[#222222]">
                  REVIEWS COLLECTED
                </p>
              </div>
            </div>

            {/* Feedback Document Image - IMAGE PLACEHOLDER */}
            <div className="relative flex-0-0 aspect-[1.4/1] min-h-[150px] max-h-[160px] overflow-hidden bg-[#FDFBF7]">
              <img
                src="/portfolio-assets/04_feedback_documents.jpg"
                alt="Printed feedback forms and review sheets spread across a table with handwritten responses"
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 220%22%3E%3Crect fill=%22%23FDFBF7%22 width=%22100%25%22 height=%22100%25%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22system-ui%22 font-size=%2212%22 fill=%22%23A89A87%22%3EFeedback Documents%3C/text%3E%3C/svg%3E'; }}
              />
            </div>

            {/* Bottom Right Role Panel */}
            <div className="relative flex-1 min-h-[90px] bg-[#F5F1E8] flex items-center justify-center px-4">
              <div className="relative w-full flex items-center justify-between gap-4">
                {/* Vertical divider */}
                <div className="w-px h-[60%] bg-[#D4CEC4] hidden sm:block" />
                
                {/* My Role */}
                <div className="flex-1 text-center sm:text-right pr-2">
                  <h4 className="font-mono-code text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-[#292825] mb-1.5">
                    MY ROLE
                  </h4>
                  <p className="font-body text-[9px] sm:text-[10px] leading-[1.45] text-[#55524D]">
                    I led the product presentation and audience interaction, explaining the concept and engaging with students throughout the activity.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ============================================================
            BOTTOM NAVIGATION
        ============================================================ */}
        <footer className="absolute bottom-0 left-0 right-0 h-[35px] bg-[#F5F1E8] border-t border-[#D8D2C8] flex items-center justify-center px-4">
          <nav className="flex items-center gap-2 sm:gap-4" aria-label="Stage navigation">
            <span className="font-body text-[8px] sm:text-[9px] text-[#4C4943] tracking-[0.05em] whitespace-nowrap">Product Pitch</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#55524D] flex-shrink-0" />
            <span className="font-body text-[8px] sm:text-[9px] text-[#4C4943] tracking-[0.05em] whitespace-nowrap">Audience Interaction</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#55524D] flex-shrink-0" />
            <span className="font-body text-[8px] sm:text-[9px] text-[#4C4943] tracking-[0.05em] whitespace-nowrap">Feedback Collection</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#55524D] flex-shrink-0" />
            <span className="font-body text-[8px] sm:text-[9px] text-[#4C4943] tracking-[0.05em] whitespace-nowrap">Iteration</span>
          </nav>
        </footer>
      </div>
    </div>
  );
};