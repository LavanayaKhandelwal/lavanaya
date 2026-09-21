import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Video, ShoppingBag, ArrowRight, Camera, Play, Image as ImageIcon } from 'lucide-react';
import { FlowerMark, WashiTape } from '../components/CustomDoodles';
import { portfolioData } from '../data/portfolioData';

export const InternshipExperiencePage: React.FC = () => {
  const { internship } = portfolioData;

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Header */}
        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F4C9D6] border border-[#A38D89] rounded-full text-xs font-mono-code uppercase tracking-widest text-[#3E2723] mb-4 paper-shadow-sm">
            <FlowerMark size={14} />
            <span>FINE JEWELLERY BRAND INTERNSHIP</span>
          </div>

          <h1 className="font-serif-display text-4xl sm:text-6xl text-[#F8E5D7] leading-[1.05] tracking-tight mb-2">
            {internship.company}
          </h1>

          <div className="font-mono-code text-sm sm:text-base text-[#A38D89] font-bold mb-4">
            {internship.role}
          </div>

          <p className="font-body text-base text-[#F8E5D7]/85 leading-relaxed max-w-3xl mb-8">
            {internship.overview}
          </p>
        </div>

        {/* SECTION 1: PAGE 1 — SOCIAL MEDIA */}
        <section id="social-media" className="scroll-mt-24 mb-20">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-[#A38D89]/20">
            <Video className="w-5 h-5 text-[#D69589]" />
            <h2 className="font-serif-display text-2xl sm:text-3xl text-[#F8E5D7]">
              01 — SOCIAL MEDIA
            </h2>
          </div>
          <div className="space-y-12">
            <div className="bg-[#3E2723] border-[1.5px] border-[#A38D89]/40 rounded-3xl p-8 sm:p-12 paper-shadow-lg relative">
              <div className="absolute -top-3 right-12">
                <WashiTape color="#D69589" width="w-28" />
              </div>

              <div className="max-w-3xl mb-8">
                <h2 className="font-serif-display text-3xl sm:text-4xl text-[#F8E5D7] mb-4">
                  From concept to content
                </h2>
                <div className="p-4 bg-[#3E2723] rounded-2xl border border-[#A38D89]/40 font-body text-sm sm:text-base text-[#F8E5D7]/85 leading-relaxed">
                  {internship.page1SocialMedia.intro}
                </div>
              </div>

              {/* Content Types Strip */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {internship.contentTypes.map((ct, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-3.5 py-1.5 bg-[#D69589] border border-[#A38D89]/40 rounded-xl font-mono-code text-xs font-bold text-[#3E2723]"
                    >
                      {ct}
                    </span>
                  ))}
                </div>
              </div>

              {/* Videos Callout Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#3E2723] border border-[#A38D89]/20 rounded-full text-xs font-mono-code font-bold text-[#F8E5D7] mb-8">
                <Camera className="w-3.5 h-3.5" />
                <span>VIDEOS & REEL PRODUCTION INCLUDED</span>
              </div>

              {/* REAL VIDEO MEDIA SHOWCASE */}
              <div className="mb-12">
                <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#A38D89] mb-4 pb-2 border-b border-[#A38D89]/20 flex items-center gap-2">
                  <Play className="w-3.5 h-3.5 text-[#D69589]" />
                  <span>Video Content Production & Reels</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  {/* Video Reel 1 */}
                  <div className="md:col-span-5 bg-[#3E2723] border-[1.5px] border-[#A38D89]/40 rounded-2xl p-4 paper-shadow">
                    <div className="aspect-[9/16] bg-[#3E2723] rounded-xl overflow-hidden relative shadow-inner mb-3 max-h-[520px] mx-auto">
                      <img
                        src="/portfolio-assets/f54639f8-2182-461e-bc6b-63ce3787f763.jpg"
                        alt="Video placeholder"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="font-mono-code text-xs text-[#F8E5D7] font-bold">
                      Jewellery Reel 01 — Aesthetic & Product Styling
                    </div>
                    <p className="font-body text-xs text-[#F8E5D7]/70 mt-1">
                      Shot on set, edited, color graded and published for Aadiya Jewels social handle.
                    </p>
                  </div>

                  {/* Video Reel 2 */}
                  <div className="md:col-span-7 space-y-6">
                    <div className="bg-[#3E2723] border-[1.5px] border-[#A38D89]/40 rounded-2xl p-4 paper-shadow">
                      <div className="aspect-video bg-[#3E2723] rounded-xl overflow-hidden relative shadow-inner mb-3">
                        <img
                          src="/portfolio-assets/B7E707CC-CED2-43AE-A2AD-C2B28D50CD10.jpg"
                          alt="Video placeholder"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="font-mono-code text-xs text-[#F8E5D7] font-bold">
                        Studio Campaign & Jewellery Showcase
                      </div>
                      <p className="font-body text-xs text-[#F8E5D7]/70 mt-1">
                        Highlighting brilliance, luxury finishes, and craftsmanship through video capture.
                      </p>
                    </div>

                    {/* On-set Photography Stills */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[#3E2723] border border-[#A38D89]/25 rounded-2xl p-2 paper-shadow-sm">
                        <img
                          src="/portfolio-assets/WhatsApp Image 2026-09-13 at 19.42.18.jpeg"
                          alt="Jewellery on-set photography"
                          className="w-full h-44 object-cover rounded-xl border border-[#A38D89]/10"
                        />
                        <span className="font-mono-code text-[11px] text-[#F8E5D7]/70 block mt-2 px-1">
                          Macro Jewellery Styling
                        </span>
                      </div>
                      <div className="bg-[#3E2723] border border-[#A38D89]/25 rounded-2xl p-2 paper-shadow-sm">
                        <img
                          src="/portfolio-assets/WhatsApp Image 2026-09-13 at 19.42.18 (1).jpeg"
                          alt="Product photography framing"
                          className="w-full h-44 object-cover rounded-xl border border-[#A38D89]/10"
                        />
                        <span className="font-mono-code text-[11px] text-[#F8E5D7]/70 block mt-2 px-1">
                          Product Photography Framing
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What I Worked On Grid */}
              <div className="mb-10">
                <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#A38D89] mb-4 pb-2 border-b border-[#A38D89]/20">
                  What I Worked On
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {internship.page1SocialMedia.whatIWorkedOn.map((item) => (
                    <div key={item.id} className="p-5 bg-[#3E2723] border border-[#A38D89]/20 rounded-2xl flex flex-col justify-between">
                      <div>
                        <span className="font-mono-code text-xs text-[#A38D89] font-bold block mb-1">
                          {item.id}.
                        </span>
                        <h3 className="font-serif-display text-xl text-[#F8E5D7] mb-2">
                          {item.title}
                        </h3>
                      </div>
                      <p className="font-body text-xs text-[#F8E5D7]/70 leading-relaxed mt-2">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Applied */}
              <div>
                <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#A38D89] mb-3">
                  Skills Applied
                </div>
                <div className="flex flex-wrap gap-2">
                  {internship.page1SocialMedia.skillsApplied.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3.5 py-1.5 bg-[#F4C9D6] border border-[#A38D89]/30 rounded-xl font-mono-code text-xs text-[#3E2723] flex items-center gap-1.5"
                    >
                      <span className="text-[#D69589] font-bold">•</span>
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: PAGE 2 — E-COMMERCE */}
        <section id="ecommerce" className="scroll-mt-24 mb-20">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-[#A38D89]/20">
            <ShoppingBag className="w-5 h-5 text-[#D69589]" />
            <h2 className="font-serif-display text-2xl sm:text-3xl text-[#F8E5D7]">
              02 — E-COMMERCE
            </h2>
          </div>
          <div className="space-y-12">
            <div className="bg-[#3E2723] border-[1.5px] border-[#A38D89]/40 rounded-3xl p-8 sm:p-12 paper-shadow-lg relative">
              <div className="absolute -top-3 right-12">
                <WashiTape color="#D69589" width="w-28" />
              </div>

              <div className="max-w-3xl mb-8">
                <h2 className="font-serif-display text-3xl sm:text-4xl text-[#F8E5D7] mb-4">
                  From product to online store
                </h2>
                <div className="p-4 bg-[#3E2723] rounded-2xl border border-[#A38D89]/40 font-body text-sm sm:text-base text-[#F8E5D7]/85 leading-relaxed">
                  {internship.page2Ecommerce.intro}
                </div>
              </div>

              {/* WEBSITE BANNERS MEDIA SHOWCASE */}
              <div className="mb-12 space-y-6">
                <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#A38D89] pb-2 border-b border-[#A38D89]/20 flex items-center gap-2">
                  <ImageIcon className="w-3.5 h-3.5 text-[#D69589]" />
                  <span>Website Banners & Storefront Visuals Designed for Aadiya Jewels</span>
                </div>

                <div className="bg-[#3E2723] border-[1.5px] border-[#A38D89]/40 rounded-2xl p-4 sm:p-6 paper-shadow">
                  <div className="rounded-xl overflow-hidden border border-[#A38D89]/20 mb-3 bg-[#3E2723]">
                    <img
                      src="/portfolio-assets/Screenshot 2026-09-13 at 6.31.18 PM.png"
                      alt="Aadiya Jewels Desktop Website Hero Banner"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-mono-code text-xs text-[#F8E5D7] pt-1">
                    <span className="font-bold">E-Commerce Desktop Hero Banner</span>
                    <span className="text-[#A38D89]">Designed for seasonal homepage campaign</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#3E2723] border-[1.5px] border-[#A38D89]/40 rounded-2xl p-4 paper-shadow">
                    <div className="rounded-xl overflow-hidden border border-[#A38D89]/20 mb-3 bg-[#3E2723]">
                      <img
                        src="/portfolio-assets/Screenshot 2026-09-13 at 6.34.14 PM.png"
                        alt="Collection promotional banner"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="font-mono-code text-xs font-bold text-[#F8E5D7]">
                      Jewellery Collection Category Banner
                    </div>
                  </div>

                  <div className="bg-[#3E2723] border-[1.5px] border-[#A38D89]/40 rounded-2xl p-4 paper-shadow">
                    <div className="rounded-xl overflow-hidden border border-[#A38D89]/20 mb-3 bg-[#3E2723]">
                      <img
                        src="/portfolio-assets/Screenshot 2026-09-13 at 6.31.58 PM.png"
                        alt="Shopify product listing layout"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="font-mono-code text-xs font-bold text-[#F8E5D7]">
                      Shopify Product Listing & Catalogue Management
                    </div>
                  </div>
                </div>
              </div>

              {/* What I Worked On */}
              <div className="mb-10">
                <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#A38D89] mb-4 pb-2 border-b border-[#A38D89]/20">
                  What I Worked On
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {internship.page2Ecommerce.whatIWorkedOn.map((item) => (
                    <div key={item.id} className="p-5 bg-[#3E2723] border border-[#A38D89]/20 rounded-2xl flex flex-col justify-between">
                      <div>
                        <span className="font-mono-code text-xs text-[#A38D89] font-bold block mb-1">
                          {item.id}.
                        </span>
                        <h3 className="font-serif-display text-xl text-[#F8E5D7] mb-2">
                          {item.title}
                        </h3>
                      </div>
                      <p className="font-body text-xs text-[#F8E5D7]/70 leading-relaxed mt-2">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Applied */}
              <div>
                <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#A38D89] mb-3">
                  Skills Applied
                </div>
                <div className="flex flex-wrap gap-2">
                  {internship.page2Ecommerce.skillsApplied.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3.5 py-1.5 bg-[#F4C9D6] border border-[#A38D89]/30 rounded-xl font-mono-code text-xs text-[#3E2723] flex items-center gap-1.5"
                    >
                      <span className="text-[#D69589] font-bold">•</span>
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: LEARNINGS OF INTERNSHIP */}
        <section id="internship-learnings" className="scroll-mt-24 mb-16">
          <div className="bg-[#3E2723] border-[1.5px] border-[#A38D89]/40 rounded-3xl p-8 sm:p-12 paper-shadow-lg">
            <div className="max-w-2xl mb-8">
              <span className="font-mono-code text-xs font-bold text-[#A38D89] uppercase tracking-widest block mb-2">
                03 — KEY LEARNINGS
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl text-[#F8E5D7]">
                Key Learnings
              </h2>
            </div>

            <div className="space-y-4">
              {internship.learningOutcomes.map((l, idx) => (
                <div key={l.number} className="flex items-start gap-4 p-5 bg-[#3E2723] border border-[#A38D89]/25 rounded-2xl">
                  <span className="font-mono-code text-sm font-bold text-[#3E2723] bg-[#D69589] border border-[#A38D89]/40 rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <div>
                    <div className="font-mono-code text-xs sm:text-sm font-bold text-[#F8E5D7] uppercase mb-1">
                      {l.title}
                    </div>
                    <p className="font-body text-sm text-[#F8E5D7]/80 leading-relaxed">
                      {l.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-8 bg-[#3E2723] border-[1.5px] border-[#A38D89]/40 rounded-2xl gap-4">
          <div>
            <div className="font-mono-code text-xs uppercase text-[#A38D89]">NEXT PROJECT</div>
            <div className="font-serif-display text-2xl text-[#F8E5D7]">Project 1 — Marketing (UNIQLO)</div>
          </div>
          <Link
            to="/projects/marketing"
            className="flex items-center gap-2 px-6 py-3 bg-[#D69589] text-[#3E2723] rounded-xl font-mono-code text-xs uppercase tracking-wider font-bold hover:bg-[#3E2723] hover:text-[#F8E5D7] transition-colors"
          >
            <span>View UNIQLO Fragrance Case Study</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
