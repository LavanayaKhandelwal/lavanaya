import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ProjectHero } from '../components/ProjectHero';
import { ProjectSectionHeader } from '../components/ProjectSectionHeader';
import { SlidePhoto } from '../components/SlidePhoto';
import { portfolioData } from '../data/portfolioData';

/**
 * INTERNSHIP — AADIYA JEWELS
 *
 * Rebuilt on the same light system as the project pages: full-bleed cover, cream
 * ground, blush band, taupe hairlines, plate-light imagery, no side padding.
 */
export const InternshipExperiencePage: React.FC = () => {
  const { internship } = portfolioData;

  const workedOnBlocks = (items: { id: string; title: string; desc: string }[]) =>
    items.map((item) => (
      <div key={item.id} className="rule-t-light pt-5">
        <span className="font-mono-code text-xs text-[#D69589] font-bold uppercase tracking-[0.16em] block mb-2">
          {item.id}.
        </span>
        <h3 className="font-display text-xl text-[#3E2723] mb-2">{item.title}</h3>
        <p className="font-body text-xs text-[#3E2723]/75 leading-relaxed">{item.desc}</p>
      </div>
    ));

  const skillsList = (skills: string[]) =>
    skills.map((skill) => (
      <span
        key={skill}
        className="px-3 py-1.5 bg-[#FADBD9] border border-[#705955]/30 rounded-full font-mono-code text-[0.6875rem] uppercase tracking-[0.14em] text-[#3E2723] inline-flex"
      >
        {skill}
      </span>
    ));

  return (
    <div className="min-h-screen pb-16 lg:pb-24 bg-[#F9F8F2]">
      {/* COVER — full-bleed hero, image spans the entire viewport width */}
      <ProjectHero
        image="/portfolio-assets/B7E707CC-CED2-43AE-A2AD-C2B28D50CD10.jpg"
        alt="Aadiya Jewels studio campaign and jewellery showcase photographed for social content"
        eyebrow="FINE JEWELLERY BRAND INTERNSHIP"
        pageLabel="PAGE 1"
        title={internship.company}
        subtitle={internship.role}
        intro={internship.overview}
      />

      <div className="px-5 sm:px-8 lg:px-12">
        {/* Cover credits strip */}
        <section className="rule-b-light py-6 mb-20 lg:mb-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 font-mono-code text-xs">
          <div>
            <span className="text-[#705955] block text-[10px] uppercase mb-1.5">COMPANY</span>
            <span className="font-bold text-[#3E2723]">{internship.company}</span>
          </div>
          <div>
            <span className="text-[#705955] block text-[10px] uppercase mb-1.5">ROLE</span>
            <span className="font-bold text-[#3E2723]">{internship.role}</span>
          </div>
          <div>
            <span className="text-[#705955] block text-[10px] uppercase mb-1.5">PERIOD</span>
            <span className="font-bold text-[#3E2723]">{internship.period}</span>
          </div>
          <div>
            <span className="text-[#705955] block text-[10px] uppercase mb-1.5">LOCATION</span>
            <span className="font-bold text-[#3E2723]">{internship.location}</span>
          </div>
        </section>

        {/* PAGE 2 — SOCIAL MEDIA */}
        <section id="social-media" className="scroll-mt-24 mb-24 lg:mb-32">
          <ProjectSectionHeader
            eyebrow="PAGE 2 — SOCIAL MEDIA"
            title="From concept to content"
            lead={internship.page1SocialMedia.intro}
          />

          {/* Content types strip */}
          <div className="flex flex-wrap gap-2 mb-10">
            {internship.contentTypes.map((ct) => (
              <span
                key={ct}
                className="px-3 py-1.5 bg-[#FADBD9] border border-[#705955]/30 rounded-full font-mono-code text-[0.6875rem] uppercase tracking-[0.14em] text-[#3E2723] inline-flex"
              >
                {ct}
              </span>
            ))}
          </div>

          <p className="eyebrow text-[#3E2723] rule-b-light pb-3 mb-8 block">
            VIDEOS &amp; REEL PRODUCTION INCLUDED
          </p>

          {/* Media showcase */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-12 items-start">
            {/* Reel 1 */}
            <div className="md:col-span-5">
              <div className="plate-light p-2">
                <div className="aspect-[3/4] overflow-hidden">
                  <SlidePhoto
                    src="/portfolio-assets/f54639f8-2182-461e-bc6b-63ce3787f763.jpg"
                    alt="Aadiya Jewels reel still"
                    label="Jewellery reel 01"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="plate-caption-light mt-3 mb-1">
                Jewellery Reel 01 — Aesthetic &amp; Product Styling
              </p>
              <p className="font-body text-xs text-[#3E2723]/75">
                Shot on set, edited, color graded and published for Aadiya Jewels social handle.
              </p>
            </div>

            {/* Reel 2 + stills */}
            <div className="md:col-span-7 space-y-10">
              <div>
                <div className="plate-light p-2">
                  <div className="aspect-video overflow-hidden">
                    <SlidePhoto
                      src="/portfolio-assets/B7E707CC-CED2-43AE-A2AD-C2B28D50CD10.jpg"
                      alt="Aadiya Jewels studio campaign still"
                      label="Studio campaign showcase"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p className="plate-caption-light mt-3 mb-1">
                  Studio Campaign &amp; Jewellery Showcase
                </p>
                <p className="font-body text-xs text-[#3E2723]/75">
                  Highlighting brilliance, luxury finishes, and craftsmanship through video capture.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="plate-light p-2">
                    <div className="aspect-[4/5] overflow-hidden">
                      <SlidePhoto
                        src="/portfolio-assets/WhatsApp Image 2026-09-13 at 19.42.18.jpeg"
                        alt="Jewellery on-set photography"
                        label="Macro jewellery styling"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <p className="plate-caption-light mt-2">Macro Jewellery Styling</p>
                </div>
                <div className="md:mt-10 lg:mt-16">
                  <div className="plate-light p-2">
                    <div className="aspect-[4/5] overflow-hidden">
                      <SlidePhoto
                        src="/portfolio-assets/WhatsApp Image 2026-09-13 at 19.42.18 (1).jpeg"
                        alt="Product photography framing"
                        label="Product photography framing"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <p className="plate-caption-light mt-2">Product Photography Framing</p>
                </div>
              </div>
            </div>
          </div>

          {/* What I Worked On */}
          <div className="mt-16 lg:mt-20">
            <p className="eyebrow text-[#3E2723] rule-b-light pb-3 mb-8 block">WHAT I WORKED ON</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
              {workedOnBlocks(internship.page1SocialMedia.whatIWorkedOn)}
            </div>
          </div>

          {/* Skills Applied */}
          <div className="mt-14">
            <p className="eyebrow text-[#3E2723] rule-b-light pb-3 mb-6 block">SKILLS APPLIED</p>
            <div className="flex flex-wrap gap-2">{skillsList(internship.page1SocialMedia.skillsApplied)}</div>
          </div>
        </section>

        {/* PAGE 3 — E-COMMERCE */}
        <section id="ecommerce" className="scroll-mt-24 mb-24 lg:mb-32">
          <ProjectSectionHeader
            eyebrow="PAGE 3 — E-COMMERCE"
            title="From product to online store"
            lead={internship.page2Ecommerce.intro}
          />

          <p className="eyebrow text-[#705955] mb-8 block">
            Website Banners &amp; Storefront Visuals Designed for Aadiya Jewels
          </p>

          <div className="plate-light p-2 mb-4">
            <SlidePhoto
              src="/portfolio-assets/Screenshot 2026-09-13 at 6.31.18 PM.png"
              alt="Aadiya Jewels Desktop Website Hero Banner"
              label="E-commerce desktop hero banner"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-3 plate-caption-light">
            <span className="text-[#3E2723]">E-Commerce Desktop Hero Banner</span>
            <span>Designed for seasonal homepage campaign</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">
            <div>
              <div className="plate-light p-2">
                <SlidePhoto
                  src="/portfolio-assets/Screenshot 2026-09-13 at 6.34.14 PM.png"
                  alt="Collection promotional banner"
                  label="Jewellery collection banner"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="plate-caption-light mt-3">Jewellery Collection Category Banner</p>
            </div>

            <div className="md:mt-16">
              <div className="plate-light p-2">
                <SlidePhoto
                  src="/portfolio-assets/Screenshot 2026-09-13 at 6.31.58 PM.png"
                  alt="Shopify product listing layout"
                  label="Shopify product listing"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="plate-caption-light mt-3">
                Shopify Product Listing &amp; Catalogue Management
              </p>
            </div>
          </div>

          {/* What I Worked On */}
          <div className="mt-16 lg:mt-20">
            <p className="eyebrow text-[#3E2723] rule-b-light pb-3 mb-8 block">WHAT I WORKED ON</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
              {workedOnBlocks(internship.page2Ecommerce.whatIWorkedOn)}
            </div>
          </div>

          {/* Skills Applied */}
          <div className="mt-14">
            <p className="eyebrow text-[#3E2723] rule-b-light pb-3 mb-6 block">SKILLS APPLIED</p>
            <div className="flex flex-wrap gap-2">{skillsList(internship.page2Ecommerce.skillsApplied)}</div>
          </div>
        </section>

        {/* PAGE 4 — KEY LEARNINGS (blush band) */}
        <section
          id="internship-learnings"
          className="bg-[#FADBD9] -mx-5 sm:-mx-8 lg:-mx-12 px-5 sm:px-8 lg:px-12 py-16 lg:py-20 mb-20 lg:mb-24 scroll-mt-24"
        >
          <ProjectSectionHeader eyebrow="PAGE 4 — KEY LEARNINGS" title="Key Learnings" />

          <div>
            {internship.learningOutcomes.map((l) => (
              <motion.div
                key={l.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="rule-t-light grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 items-baseline"
              >
                <div className="md:col-span-2">
                  <span className="index-figure text-5xl text-[#705955]/60">{l.number}</span>
                </div>
                <div className="md:col-span-3">
                  <span className="font-body text-sm sm:text-base font-medium uppercase tracking-[0.12em] text-[#3E2723]">
                    {l.title}
                  </span>
                </div>
                <div className="md:col-span-7">
                  <p className="font-body text-sm text-[#3E2723]/80 leading-relaxed">{l.desc}</p>
                </div>
              </motion.div>
            ))}
            <div className="rule-b-light" />
          </div>

          <div className="mt-12">
            <Link
              to="/internship/learnings"
              className="inline-flex items-center gap-3 eyebrow text-[#3E2723] editorial-link"
            >
              <span>Read the four learning outcomes in full →</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Footer — next project */}
        <div className="rule-t-light pt-6 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <span className="eyebrow text-[#705955]">NEXT PROJECT</span>
            <span className="block h-px w-10 lg:w-16 bg-[#705955]/30" aria-hidden="true" />
          </div>

          <span className="eyebrow text-[#705955]">PROJECT 01 — MARKETING (UNIQLO)</span>
        </div>

        <div className="mt-8 flex justify-end">
          <Link
            to="/projects/marketing"
            className="inline-flex items-center gap-3 eyebrow text-[#3E2723] editorial-link"
          >
            <span>View UNIQLO Fragrance Case Study</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
