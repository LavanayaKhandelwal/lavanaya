import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Video, ShoppingBag, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const InternshipExperiencePage: React.FC = () => {
  const { internship } = portfolioData;

  const workedOnBlocks = (items: { id: string; title: string; desc: string }[]) =>
    items.map((item) => (
      <div key={item.id} className="rule-t pt-5">
        <span className="font-mono-code text-xs text-[#D69589] font-bold block mb-2">
          {item.id}.
        </span>
        <h3 className="font-serif-display text-2xl text-[#F8E5D7] mb-2">
          {item.title}
        </h3>
        <p className="font-body text-xs text-[#F8E5D7]/70 leading-relaxed">
          {item.desc}
        </p>
      </div>
    ));

  const skillsList = (skills: string[]) =>
    skills.map((skill, sIdx) => (
      <span key={sIdx} className="plate-caption text-[#F8E5D7] inline-flex items-center gap-3">
        <span className="text-[#D69589]">●</span>
        {skill}
      </span>
    ));

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company header */}
        <div className="max-w-4xl mb-20 lg:mb-28">
          <p className="eyebrow text-[#D69589] border-l-2 border-[#D69589] pl-4 mb-4">
            FINE JEWELLERY BRAND INTERNSHIP
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#F8E5D7] leading-[1] tracking-tight mb-4">
            {internship.company}
          </h1>
          <p className="eyebrow text-[#A38D89] mb-6">{internship.role}</p>
          <p className="font-body text-base text-[#F8E5D7]/85 leading-loose max-w-3xl">
            {internship.overview}
          </p>
        </div>

        {/* SECTION 1 — SOCIAL MEDIA */}
        <section id="social-media" className="scroll-mt-24 mb-24 lg:mb-32">
          <div className="rule-b pb-6 mb-14 flex items-baseline justify-between gap-6">
            <div className="flex items-baseline gap-6">
              <span className="index-figure text-7xl sm:text-8xl text-[#A38D89]/30 leading-none">
                01
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#F8E5D7] tracking-tight">
                SOCIAL MEDIA
              </h2>
            </div>
            <Video className="w-6 h-6 text-[#D69589] hidden sm:block" />
          </div>

          <div className="space-y-16">
            {/* Intro */}
            <div className="max-w-3xl">
              <h2 className="font-serif-display text-3xl sm:text-4xl text-[#F8E5D7] mb-6">
                From concept to content
              </h2>
              <div className="rule-l border-[#D69589] pl-6 font-body text-sm sm:text-base text-[#F8E5D7]/85 leading-loose">
                {internship.page1SocialMedia.intro}
              </div>
            </div>

            {/* Content types strip */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              {internship.contentTypes.map((ct, cIdx) => (
                <span key={cIdx} className="plate-caption text-[#F8E5D7] inline-flex items-center gap-3">
                  <span className="text-[#D69589]">●</span>
                  {ct}
                </span>
              ))}
            </div>

            <p className="eyebrow text-[#D69589]">VIDEOS &amp; REEL PRODUCTION INCLUDED</p>

            {/* Media showcase */}
            <div>
              <p className="eyebrow text-[#A38D89] mb-6 pb-2 rule-b inline-flex items-center gap-2">
                Video Content Production &amp; Reels
              </p>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Reel 1 */}
                <div className="md:col-span-5">
                  <div className="plate aspect-[3/4] overflow-hidden">
                    <img
                      src="/portfolio-assets/f54639f8-2182-461e-bc6b-63ce3787f763.jpg"
                      alt="Video placeholder"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="plate-caption text-[#F8E5D7] mt-3 mb-1">
                    Jewellery Reel 01 — Aesthetic &amp; Product Styling
                  </p>
                  <p className="font-body text-xs text-[#F8E5D7]/70">
                    Shot on set, edited, color graded and published for Aadiya Jewels social handle.
                  </p>
                </div>

                {/* Reel 2 + stills */}
                <div className="md:col-span-7 space-y-8">
                  <div>
                    <div className="plate aspect-video overflow-hidden">
                      <img
                        src="/portfolio-assets/B7E707CC-CED2-43AE-A2AD-C2B28D50CD10.jpg"
                        alt="Video placeholder"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="plate-caption text-[#F8E5D7] mt-3 mb-1">
                      Studio Campaign &amp; Jewellery Showcase
                    </p>
                    <p className="font-body text-xs text-[#F8E5D7]/70">
                      Highlighting brilliance, luxury finishes, and craftsmanship through video capture.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <div className="plate aspect-[4/5] overflow-hidden">
                        <img
                          src="/portfolio-assets/WhatsApp Image 2026-09-13 at 19.42.18.jpeg"
                          alt="Jewellery on-set photography"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="plate-caption text-[#F8E5D7] mt-2">Macro Jewellery Styling</p>
                    </div>
                    <div className="md:mt-10 lg:mt-16">
                      <div className="plate aspect-[4/5] overflow-hidden">
                        <img
                          src="/portfolio-assets/WhatsApp Image 2026-09-13 at 19.42.18 (1).jpeg"
                          alt="Product photography framing"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="plate-caption text-[#F8E5D7] mt-2">Product Photography Framing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* What I Worked On */}
            <div>
              <p className="eyebrow text-[#A38D89] mb-8 pb-2 rule-b inline-block">What I Worked On</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
                {workedOnBlocks(internship.page1SocialMedia.whatIWorkedOn)}
              </div>
            </div>

            {/* Skills Applied */}
            <div>
              <p className="eyebrow text-[#A38D89] mb-5 pb-2 rule-b inline-block">Skills Applied</p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                {skillsList(internship.page1SocialMedia.skillsApplied)}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — E-COMMERCE */}
        <section id="ecommerce" className="scroll-mt-24 mb-24 lg:mb-32">
          <div className="rule-b pb-6 mb-14 flex items-baseline justify-between gap-6">
            <div className="flex items-baseline gap-6">
              <span className="index-figure text-7xl sm:text-8xl text-[#A38D89]/30 leading-none">
                02
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#F8E5D7] tracking-tight">
                E-COMMERCE
              </h2>
            </div>
            <ShoppingBag className="w-6 h-6 text-[#D69589] hidden sm:block" />
          </div>

          <div className="space-y-16">
            {/* Intro */}
            <div className="max-w-3xl">
              <h2 className="font-serif-display text-3xl sm:text-4xl text-[#F8E5D7] mb-6">
                From product to online store
              </h2>
              <div className="rule-l border-[#D69589] pl-6 font-body text-sm sm:text-base text-[#F8E5D7]/85 leading-loose">
                {internship.page2Ecommerce.intro}
              </div>
            </div>

            {/* Banners */}
            <div className="space-y-10">
              <p className="eyebrow text-[#A38D89] mb-2">
                Website Banners &amp; Storefront Visuals Designed for Aadiya Jewels
              </p>

              <div>
                <div className="plate p-2">
                  <img
                    src="/portfolio-assets/Screenshot 2026-09-13 at 6.31.18 PM.png"
                    alt="Aadiya Jewels Desktop Website Hero Banner"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-3 plate-caption">
                  <span className="text-[#F8E5D7]">E-Commerce Desktop Hero Banner</span>
                  <span>Designed for seasonal homepage campaign</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <div className="plate p-2">
                    <img
                      src="/portfolio-assets/Screenshot 2026-09-13 at 6.34.14 PM.png"
                      alt="Collection promotional banner"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <p className="plate-caption text-[#F8E5D7] mt-3">
                    Jewellery Collection Category Banner
                  </p>
                </div>

                <div className="md:mt-16">
                  <div className="plate p-2">
                    <img
                      src="/portfolio-assets/Screenshot 2026-09-13 at 6.31.58 PM.png"
                      alt="Shopify product listing layout"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <p className="plate-caption text-[#F8E5D7] mt-3">
                    Shopify Product Listing &amp; Catalogue Management
                  </p>
                </div>
              </div>
            </div>

            {/* What I Worked On */}
            <div>
              <p className="eyebrow text-[#A38D89] mb-8 pb-2 rule-b inline-block">What I Worked On</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
                {workedOnBlocks(internship.page2Ecommerce.whatIWorkedOn)}
              </div>
            </div>

            {/* Skills Applied */}
            <div>
              <p className="eyebrow text-[#A38D89] mb-5 pb-2 rule-b inline-block">Skills Applied</p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                {skillsList(internship.page2Ecommerce.skillsApplied)}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — KEY LEARNINGS */}
        <section id="internship-learnings" className="scroll-mt-24 mb-20">
          <div className="rule-b pb-6 mb-14 flex items-baseline gap-6">
            <span className="index-figure text-7xl sm:text-8xl text-[#A38D89]/30 leading-none">
              03
            </span>
            <div>
              <p className="eyebrow text-[#D69589] mb-1">03 — KEY LEARNINGS</p>
              <h2 className="font-display text-3xl sm:text-4xl text-[#F8E5D7] tracking-tight">
                Key Learnings
              </h2>
            </div>
          </div>

          <div>
            {internship.learningOutcomes.map((l, idx) => (
              <motion.div
                key={l.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 items-baseline ${idx !== 0 ? 'rule-t' : ''}`}
              >
                <div className="md:col-span-2">
                  <span className="index-figure text-5xl text-[#D69589]">{l.number}</span>
                </div>
                <div className="md:col-span-3">
                  <span className="font-mono-code text-xs sm:text-sm font-bold text-[#F8E5D7] uppercase tracking-wider">
                    {l.title}
                  </span>
                </div>
                <div className="md:col-span-7">
                  <p className="font-body text-sm text-[#F8E5D7]/80 leading-relaxed">
                    {l.desc}
                  </p>
                </div>
              </motion.div>
            ))}
            <div className="rule-b" />
          </div>
        </section>

        {/* Next project */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 rule-t pt-10 items-end">
          <div>
            <p className="eyebrow text-[#A38D89] mb-3">NEXT PROJECT</p>
            <p className="font-serif-display text-2xl sm:text-3xl text-[#F8E5D7]">Project 1 — Marketing (UNIQLO)</p>
          </div>
          <div className="sm:text-right">
            <Link
              to="/projects/marketing"
              className="inline-flex items-center gap-3 eyebrow text-[#F8E5D7] editorial-link"
            >
              <span>View UNIQLO Fragrance Case Study</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};