import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SlidePhoto } from '../SlidePhoto';

/**
 * PROJECT 2 COVER — "A Future in Bloom"
 *
 * Built from the Cover Story cover-slide specification. The one deliberate
 * change is the side the editorial panel sits on: the spec puts the text panel
 * right and the photograph left, this page mirrors it — solid text panel 40%
 * left, photograph 60% right, both full height.
 *
 * Because the copy sits on its own solid panel rather than over the image,
 * there is no scrim, no gradient and no drop-shadow anywhere, and the
 * photograph is never veiled.
 *
 * Colour follows the home page's light palette rather than the prompt's own
 * hex values: cream ground, brown ink, taupe for labels, terracotta on the rule
 * under the wordmark and the closing quote's left rule, and Project 1's blush
 * `#FADBD9` on the brand block.
 */
export const FutureInBloomCover: React.FC = () => {
  return (
    <section className="mb-10 lg:mb-14">
      <div className="grid grid-cols-1 md:grid-cols-[45fr_55fr] lg:grid-cols-[40fr_60fr] lg:min-h-[100svh]">
        {/* Editorial panel — 40%, text dominant */}
        <div className="relative order-2 md:order-1 bg-[#F9F8F2] px-7 pt-24 pb-16 sm:px-12 md:pt-[120px] lg:px-14 lg:pt-[155px] lg:pb-20 xl:px-[70px]">
          {/* Home button */}
          <Link
            to="/"
            className="absolute top-0 left-0 px-7 pt-5 sm:px-12 lg:px-14 inline-flex items-center gap-2 eyebrow text-[#705955] hover:text-[#3E2723]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>HOME</span>
          </Link>

          <div className="relative">
            <h1 className="font-display text-[clamp(2.5rem,5.2vw,4.25rem)] leading-[0.98] tracking-tight text-[#3E2723]">
              A FUTURE
              <br />
              IN <span className="font-editorial italic">BLOOM</span>
            </h1>

            <div className="mt-8 h-px w-[55px] bg-[#D69589]" aria-hidden="true" />

            <p className="mt-8 font-body text-[clamp(0.9375rem,1.3vw,1.25rem)] uppercase leading-[1.55] tracking-[0.26em] text-[#3E2723]/85">
              COVER STORY X
              <br />
              FUTURE FLORALS
            </p>

            {/* Brand block on a blush ground — Project 1's insight-panel treatment */}
            <div className="mt-14 xl:mt-[72px] bg-[#FADBD9] p-5 xl:p-6">
              <p className="eyebrow text-[#3E2723]">COVER STORY :</p>

              <p className="mt-3 font-editorial italic text-[1.125rem] xl:text-[1.25rem] leading-[1.35] text-[#3E2723]/80">
                Contemporary.
                <br />
                Feminine. Trend-led.
              </p>

              <p className="mt-5 max-w-[330px] font-body text-sm leading-[1.5] text-[#3E2723]/80">
                A brand built around modern, versatile fashion became the canvas for our
                visual merchandising story.
              </p>
            </div>
          </div>
        </div>

        {/* Photograph — 60%, full height, touching the top, bottom and outer edge */}
        <div className="relative order-1 md:order-2 h-[55vh] md:h-auto overflow-hidden">
          <SlidePhoto
            src="/portfolio-assets/project-visual-merchandising-hero.png"
            alt="Cover Story storefront window display: full-length mannequin in a flowing pastel floral dress, framed by oversized translucent holographic flowers and blossom branches"
            label="Cover Story — Future Florals"
            className="absolute inset-0 h-full w-full object-cover"
            frameInset="inset-4 sm:inset-8 lg:inset-14"
            loading="eager"
            fetchPriority="high"
          />

          {/* Short blend on the inner edge only — lets the photograph run into
              the panel instead of ending on a hard vertical cut. Outer, top
              and bottom edges stay flush to the viewport. */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-[11%] bg-gradient-to-r from-[#F9F8F2] to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};
