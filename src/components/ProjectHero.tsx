import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SlidePhoto } from './SlidePhoto';

export interface ProjectHeroProps {
  /** Cover photograph. Renders an empty hairline frame if absent. */
  image: string;
  alt: string;
  /** Discipline line, e.g. VISUAL MERCHANDISING PROJECT */
  eyebrow: string;
  /** Page marker, e.g. PAGE 1 */
  pageLabel: string;
  title: string;
  /** Optional italic serif line under the title, e.g. brand — season */
  subtitle?: string;
  /** One-paragraph project summary under the title block. */
  intro?: string;
  /** Extra classes for the cover <img>, e.g. a responsive object-position. */
  imageClassName?: string;
  /** Extra classes for the intro paragraph, e.g. justify or a tighter measure. */
  introClassName?: string;
}

/**
 * Full-bleed cover shared by every project page.
 *
 * Identical to Project 1's hero: the photograph spans the whole viewport width,
 * one cream wash sized to the copy (bottom-up on small screens, left-to-right on
 * desktop) keeps the type legible without hiding the image, and the HOME link
 * sits on the image itself. No blur, no drop-shadow — the legibility comes from
 * the wash alone.
 */
export const ProjectHero: React.FC<ProjectHeroProps> = ({
  image,
  alt,
  eyebrow,
  pageLabel,
  title,
  subtitle,
  intro,
  imageClassName = '',
  introClassName = '',
}) => {
  return (
    <section className="mb-14 lg:mb-20">
      <div className="relative flex h-[75svh] min-h-[560px] max-h-[1100px] items-end overflow-hidden sm:min-h-[620px] lg:h-[100svh] lg:min-h-[640px] lg:items-center">
        <SlidePhoto
          src={image}
          alt={alt}
          label={title}
          className={`absolute inset-0 h-full w-full object-cover ${imageClassName}`}
          frameInset="inset-4 sm:inset-8 lg:inset-14"
          loading="eager"
          fetchPriority="high"
        />

        {/* Scrim: one wash, sized to the copy only. */}
        <div className="absolute inset-x-0 bottom-0 h-[78%] bg-gradient-to-t from-[#F9F8F2] via-[#F9F8F2]/72 to-transparent lg:inset-y-0 lg:left-0 lg:right-auto lg:top-0 lg:h-full lg:w-[62%] lg:bg-gradient-to-r lg:from-[#F9F8F2] lg:via-[#F9F8F2]/80 lg:to-transparent" />

        {/* Home button — overlaid on the hero background */}
        <div className="absolute inset-x-0 top-0 z-10 bg-gradient-to-b from-[#F9F8F2]/75 to-transparent px-4 pt-5 pb-8 sm:px-6 lg:px-8">
          <Link to="/" className="hover-arrow-back inline-flex items-center gap-2 eyebrow text-[#705955] hover:text-[#3E2723]">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>HOME</span>
          </Link>
        </div>

        <div className="relative w-full px-4 pb-12 pt-14 sm:px-6 lg:px-8 lg:py-16">
          {/* Measure lives on the prose, not the wrapper — the display heading
              needs the full column or it wraps mid-phrase at lg. */}
          <div className="max-w-xl space-y-5 lg:max-w-[62rem]">
            <p className="reveal eyebrow text-[#705955] border-l-2 border-[#D69589] pl-4">
              {eyebrow}
            </p>

            <p className="reveal reveal-d1 eyebrow text-[#705955] border-l-2 border-[#D69589] pl-4">
              {pageLabel}
            </p>

            <h1 className="reveal reveal-d1 font-display text-5xl sm:text-6xl lg:text-7xl text-[#3E2723] leading-[1] tracking-tight whitespace-pre-line">
              {title}
            </h1>

            {subtitle && (
              <p className="reveal reveal-d2 rule-l border-[#D69589] pl-6 font-serif-display text-2xl sm:text-3xl italic text-[#3E2723]/80 leading-snug lg:max-w-[34ch]">
                {subtitle}
              </p>
            )}

            {intro && (
              <p
                className={`reveal reveal-d3 font-body text-sm sm:text-base text-[#3E2723]/80 leading-loose whitespace-pre-line lg:max-w-[52ch] ${introClassName}`}
              >
                {intro}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
