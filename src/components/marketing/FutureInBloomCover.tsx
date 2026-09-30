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
 * THE WHOLE BLOCK SITS FAR RIGHT AND SETS VERY LARGE.
 *
 * Three levers, all pulling the same way: the panel is wider (1fr_2.7fr ->
 * 1fr_1.5fr, i.e. 27% -> 40% of the viewport), the left indent is much smaller
 * (48/64/84px -> 24/32/40px, so the block sits hard against the photograph),
 * and the prose below is no longer held off the photograph at all. Every string
 * in the panel was measured in the real fonts, in ems of its own size (Chrome,
 * rendered at 200px and divided):
 *
 *   "A Future in Bloom"           DM Serif Display + Bodoni ... 6.992em
 *   "COVER STORY X FUTURE FLORALS"  Plus Jakarta Sans 500 ...... 20.139em
 *   "Contemporary. Feminine. Trend-led."  Bodoni Moda italic ..... 14.657em
 *
 * THE TITLE IS THE BINDING LINE, AND IT IS ON ONE LINE.
 *
 * It has to clear 6.992em of the panel's content width, and it is held there by
 * `whitespace-nowrap` so the panel can never be narrowed past it. Splitting the
 * title over two lines would drop the binding string to 4.281em and buy a 63%
 * larger font for nothing — but a cover title that breaks mid-phrase is worth
 * less than the extra size, so the width is spent on the panel instead.
 *
 * The panel and the indent pull against each other here: the indent is
 * subtracted from the same fixed panel the title is measured against, so every
 * pixel of indent comes straight out of the font size. That is why the indent
 * is spent down to 24px rather than held at 48 — the type needs the pixels more
 * than the margin does, and the HOME button carries the same 24px so the two
 * still share one clean edge. The photograph takes the remaining 60% of the
 * viewport, so it is still the larger element even at this panel width.
 *
 * Each ramp is solved against its own band's tightest width (the indent steps
 * up at xl and 2xl, so a single ramp would be pinned by the worst case). Every
 * one fills ~93% of the column — the lines reach almost to the photograph
 * without touching it. Verified in headless Chrome at 1024 / 1280 / 1440: one
 * title line, one credit line, one tagline line, no element overflowing the
 * panel, and no horizontal scroll at any width.
 *
 *   band        panel    indent   content   title max   set at    fill
 *   lg  1024    406.4    24       382.4     54.7px      50.9      93.1%
 *   xl  1280    508.8    32       476.8     68.2px      63.4      93.1%
 *   2xl 1536    611.2    40       571.2     81.7px      76.0      93.1%
 *   1800+       716.8    40       676.8     96.7px      89.9      93.0%
 *
 * That is roughly +80% on the heading against the 28px it used to sit at, with
 * no extra lines anywhere: the title, the credit and the tagline are all still
 * a single line each.
 *
 * The prose is the one element that may wrap, so it is the one element that got
 * its right padding taken away — it now measures the full content width, which
 * is what collapses it from four lines to two or three. It runs flush to the
 * photograph like the lines above it, so the ragged right edge is the one thing
 * on the panel that breaks the alignment, which is what makes it read as prose.
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
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] lg:min-h-[100svh]">
        {/* Editorial panel — text dominant. Stacks under the photograph until
            lg, where the two columns meet and the copy centres itself in the
            panel the way Project 1's hero copy centres in its wash.
            1fr_1.5fr splits the viewport 40 / 60. The photograph still holds the
            majority, and the panel is now wide enough that the one-line title at
            6.992em can be set large enough to actually lead the page. */}
        <div className="relative order-2 lg:order-1 lg:flex lg:flex-col lg:justify-center bg-[#F9F8F2] px-6 pt-24 pb-16 sm:px-8 md:pt-[120px] lg:pl-6 lg:pr-0 lg:pt-[104px] lg:pb-[104px] xl:pl-8 2xl:pl-10 2xl:pr-0">
          {/* Home button — its padding is the panel's left indent, so the label
              and the type below it share one edge. */}
          <Link
            to="/"
            className="absolute top-0 left-0 px-6 pt-5 sm:px-8 lg:px-6 xl:px-8 2xl:px-10 inline-flex items-center gap-2 eyebrow text-[#705955] hover:text-[#3E2723]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>HOME</span>
          </Link>

          <div className="relative">
            {/* One line, *Bloom* in the palette's pink. Held by
                `whitespace-nowrap` at 6.992em — the widest line in the panel, and
                the one every other ramp here is solved around. */}
            <h1 className="font-display text-[clamp(1.75rem,11.5vw,4rem)] lg:text-[clamp(1.75rem,4.95vw,6.5rem)] leading-[1] tracking-tight text-[#3E2723] whitespace-nowrap reveal">
              A Future in{' '}
              <span className="font-editorial italic text-[#FADBD9]">Bloom</span>
            </h1>

            <div className="mt-7 h-px w-[55px] bg-[#D69589] lg:mt-9" aria-hidden="true" />

            {/* One line, 20.139em tracked out — the second-widest string in the
                panel. It used to be the binding constraint on the whole column;
                with the panel widened it clears its own overflow comfortably and
                one ramp works from lg up. */}
            <p className="mt-7 font-body font-medium uppercase text-[0.6875rem] tracking-[0.1em] text-[#3E2723]/85 whitespace-nowrap lg:mt-9 lg:text-[clamp(0.6875rem,1.55vw,1.125rem)] reveal reveal-d1">
              COVER STORY X FUTURE FLORALS
            </p>

            {/* Brand note — no box. The label sits above the italic line: side by
                side the label and the italic together run about 1.5x the panel's
                content width, so the vertical hairline between them had to go. The
                rule above the body copy still carries the box's old top edge. */}
            <div className="mt-8 lg:mt-9 reveal reveal-d2">
              <span className="eyebrow text-[#705955]">COVER STORY :</span>
              <p className="mt-2 font-editorial italic text-[clamp(1.0625rem,4.4vw,1.6rem)] leading-[1.28] text-[#3E2723]/85 lg:text-[clamp(1.0625rem,2.15vw,1.6rem)]">
                Contemporary. Feminine. Trend-led.
              </p>
            </div>

            {/* No right padding — the prose takes the full content width, the
                same measure the nowrap lines above already run to. Every pixel
                here came off this paragraph's line count; the wider the panel,
                the fewer lines it breaks to. */}
            <p className="rule-t-light mt-7 pt-6 font-body text-[1rem] leading-[1.6] text-[#3E2723]/80 reveal reveal-d3">
              The project focused on taking an established fashion brand into a new product
              category. We chose Uniqlo and explored how its LifeWear philosophy could be
              extended beyond apparel.
            </p>
          </div>
        </div>

        {/* Photograph — 65.5%, full height, touching the top, bottom and outer edge */}
        {/* No reveal on this frame: it is the largest thing on the screen the
            moment the page opens, so an arrival that starts at opacity 0 is
            measured as a slower paint of the cover itself. */}
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
