import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SlidePhoto } from '../SlidePhoto';

/**
 * PROJECT 2 COVER — "A Future in Bloom"
 *
 * Built from the Cover Story cover-slide specification. The one deliberate
 * change is the side the editorial panel sits on: the spec puts the text panel
 * right and the photograph left, this page mirrors it — solid text panel left,
 * photograph right, both full height.
 *
 * Because the copy sits on its own solid panel rather than over the image,
 * there is no scrim, no gradient and no drop-shadow anywhere, and the
 * photograph is never veiled.
 *
 * The panel is a little over a quarter of the viewport, so the photograph
 * carries the page. The type is sized in vw against that column and held to one
 * line each with `whitespace-nowrap`: the title as "A Future in Bloom" with
 * *Bloom* in the palette's pink, and the credit as a single "COVER STORY X
 * FUTURE FLORALS" line. Neither line may wrap, so the widest of them — the
 * credit, at 19.2x the font size tracked out — sets the content width the
 * ramps are solved against.
 *
 * The copy is pushed well in from the panel's left edge and runs flush to the
 * photograph on the right: 48/64/84px of left inset against none, so the block
 * reads as indented off the viewport edge rather than stranded against the
 * image. The inset matches the HOME button's own padding at each breakpoint,
 * which keeps the panel's left edge a single clean line. Only the body copy
 * carries right padding, so the ragged-right prose keeps a margin off the
 * photograph without taxing the three nowrap lines that have to fit.
 *
 * Indent and type size pull against each other: the left inset is subtracted
 * from the same fixed panel the nowrap lines are measured against, so every
 * extra pixel of indent comes out of the font size. The ramps are therefore set
 * per band (lg / xl / 2xl) against that band's own tightest width, and the
 * heading carries a further step up past 1800px, where the panel is widest and
 * the indent costs the least.
 *
 * The blush box that used to hold the brand note is gone — only its content
 * remains, with the label set above the italic line.
 *
 * Colour follows the home page's light palette rather than the prompt's own
 * hex values: cream ground, brown ink, taupe for labels, terracotta on the rule
 * under the wordmark, and the palette's pink `#FADBD9` on *Bloom*.
 */
export const FutureInBloomCover: React.FC = () => {
  return (
    /* No bottom margin — PAGE 02's pink band picks up the page the instant the
       photograph ends, so there is no cream gap between the two. */
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.7fr] lg:min-h-[100svh]">
        {/* Editorial panel — text dominant. Stacks under the photograph until
            lg, where the two columns meet and the copy centres itself in the
            panel the way Project 1's hero copy centres in its wash. */}
        <div className="relative order-2 lg:order-1 lg:flex lg:flex-col lg:justify-center bg-[#F9F8F2] px-7 pt-24 pb-16 sm:px-10 md:pt-[120px] lg:pl-12 lg:pr-0 lg:pt-[104px] lg:pb-[104px] xl:pl-16 xl:pr-0 2xl:pl-[84px] 2xl:pr-0">
          {/* Home button */}
          <Link
            to="/"
            className="absolute top-0 left-0 px-7 pt-5 sm:px-10 lg:px-12 xl:px-16 2xl:px-[84px] inline-flex items-center gap-2 eyebrow text-[#705955] hover:text-[#3E2723]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>HOME</span>
          </Link>

          <div className="relative">
            {/* One line, *Bloom* in the palette's pink. Held on a single line
                with `whitespace-nowrap`, so the panel cannot be narrowed past
                the width of this string. Re-solved per band against each band's
                own tightest width, since the left inset widens with the panel
                and a single ramp would be pinned by the worst of the three. */}
            <h1 className="font-display text-[clamp(2rem,9vw,3.5rem)] leading-[1.05] tracking-tight text-[#3E2723] whitespace-nowrap lg:text-[clamp(1.75rem,2.75vw,3.5rem)] xl:text-[clamp(1.75rem,2.7vw,3.5rem)] 2xl:text-[clamp(1.75rem,2.65vw,3.5rem)] min-[1800px]:text-[clamp(1.75rem,2.8vw,4rem)]">
              A Future in{' '}
              <span className="font-editorial italic text-[#FADBD9]">Bloom</span>
            </h1>

            <div className="mt-8 h-px w-[55px] bg-[#D69589]" aria-hidden="true" />

            {/* One line. The credit is the second-widest string in the panel at
                19.2x the font size tracked out, so the ramp is set just under
                the title's and the tracking stays opened to 0.1em. */}
            <p className="mt-8 font-body font-medium uppercase text-[clamp(0.6875rem,1.05vw,1.15rem)] tracking-[0.1em] text-[#3E2723]/85 whitespace-nowrap xl:text-[clamp(0.6875rem,1.02vw,1.15rem)] 2xl:text-[clamp(0.6875rem,1vw,1.15rem)]">
              COVER STORY X FUTURE FLORALS
            </p>

            {/* Brand note — no box. The label sits above the italic line: side by
                side the label and the italic together run about 1.5x the panel's
                content width, so the vertical hairline between them had to go. The
                rule above the body copy still carries the box's old top edge. */}
            <div className="mt-9">
              <span className="eyebrow text-[#705955]">COVER STORY :</span>
              <p className="mt-2 font-editorial italic text-[clamp(1.0625rem,4.5vw,1.5rem)] leading-[1.28] text-[#3E2723]/85 lg:text-[clamp(0.8125rem,1.25vw,1.3125rem)] 2xl:text-[clamp(0.8125rem,1.2vw,1.3125rem)]">
                Contemporary. Feminine. Trend-led.
              </p>
            </div>

            <p className="rule-t-light mt-7 pt-6 font-body text-[1rem] leading-[1.6] text-[#3E2723]/80 lg:pr-8 xl:pr-10 2xl:pr-12">
              The project focused on taking an established fashion brand into a new product
              category. We chose Uniqlo and explored how its LifeWear philosophy could be
              extended beyond apparel.
            </p>
          </div>
        </div>

        {/* Photograph — 73%, full height, touching the top, bottom and outer edge */}
        <div className="relative order-1 lg:order-2 h-[55vh] lg:h-auto overflow-hidden">
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
              the panel instead of ending on a hard vertical cut. Kept short so
              the wider photograph is not veiled. Outer, top and bottom edges
              stay flush to the viewport. */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-[5%] bg-gradient-to-r from-[#F9F8F2] to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};
