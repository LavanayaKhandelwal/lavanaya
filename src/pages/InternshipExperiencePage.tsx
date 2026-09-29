import React from 'react';
import { ChevronDown } from 'lucide-react';
import { SocialBoard } from '../components/internship/SocialBoard';
import { CommerceBoard } from '../components/internship/CommerceBoard';
import { portfolioData } from '../data/portfolioData';

/**
 * INTERNSHIP — AADIYA JEWELS.
 *
 * Two boards, one page, one scroll. The social media work is the first section
 * and the e-commerce and website management work is the second, and they are
 * sections rather than pages because they are one piece of work told in two
 * halves — one internship, one brand, one set of photographs. Splitting them
 * across two routes asked the reader to decide up front which half of a single
 * job they cared about, which is a question the work itself should answer by
 * being read all the way through.
 *
 * Each section is exactly one screen tall and each holds a fixed sheet scaled
 * to fit, so scrolling moves between two complete compositions rather than
 * between two scroll regions. Nothing on either sheet is reachable by scrolling
 * within it: the boards are art-directed layouts with absolute pixel positions
 * in them, and a reader who resizes the window gets the same board smaller
 * rather than a different arrangement of it.
 *
 * THE DIVIDER BETWEEN THEM EXISTS because the two sheets are very nearly the
 * same colour — the two briefs asked for a light pink and landed two and three
 * points apart in green and blue — so without a break between them a reader
 * scrolling from one to the other would land on a second composition with
 * nothing to say it was the second. It carries a section number and the
 * section's subject and nothing else, in the same eyebrow as the rest of the
 * site, and it sits on the dark surround rather than on either sheet, because
 * both sheets are specified as full compositions with their own margins and a
 * band of type across the foot of one would be a seventh thing on a board that
 * was specified as six.
 *
 * THE PALETTE BAND SITS NEXT TO IT, closing the social half and running the same
 * dark ground and the same eyebrow so the two read as one break in the page
 * rather than two interruptions. It is the one piece of type on this page that is
 * not on a board, and it earns that: neither sheet has space for it, and the
 * colours it names are the ones the sheet above is painted with.
 *
 * Its padding is halved below the large breakpoint for the same reason the
 * boards hug there: on a phone the two sheets together are about 480 pixels
 * tall, and a divider with desktop padding on it would be taller than the
 * artwork it divides.
 */

const Divider: React.FC = () => (
  <div className="flex flex-col items-center justify-center gap-5 bg-[#10090B] px-5 py-14 lg:gap-7 lg:py-24">
    <div className="flex items-center gap-5">
      <span className="h-px w-10 lg:w-16" style={{ background: '#705955' }} aria-hidden="true" />
      <span className="eyebrow text-[#F8DDE3]">Section 02</span>
      <span className="h-px w-10 lg:w-16" style={{ background: '#705955' }} aria-hidden="true" />
    </div>

    <p className="font-editorial text-center text-[clamp(1.6rem,3.2vw,2.6rem)] leading-[1.05] text-[#F8DDE3]">
      E-commerce &amp; Website Management
    </p>

    {/* The only downward cue on the page. It is here because the second board
        is further down the scroll and a reader at the foot of the first one has
        no other evidence that it exists. */}
    <ChevronDown className="w-4 h-4 text-[#705955]" aria-hidden="true" />
  </div>
);

/**
 * THE PALETTE, between the two boards.
 *
 * It could not go inside either sheet. Both are fixed-size art-directed
 * compositions with every part of them placed, and there is no band left on
 * either that would hold five swatches without pushing something else off the
 * paper. So it sits on the dark surround, in the same ground and the same
 * eyebrow as the divider beside it, and it closes the social half of the page.
 *
 * The colours are the ones the board above is painted with, not a brand colour
 * board — see `internship.palette` for what they are and are not. Two of the
 * five are pale enough to vanish against a dark ground and two are dark inks
 * that would vanish against anything, so every swatch carries a hairline in the
 * surround's own taupe: the mount is what keeps the ink navy readable rather
 * than an assumption that a dark square on a dark page reads as a dark square.
 */
const PaletteBand: React.FC = () => {
  const { palette } = portfolioData.internship;

  return (
    <section className="bg-[#10090B] px-5 py-14 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <span className="eyebrow text-[#F8DDE3]">THE PALETTE</span>
          <span className="eyebrow text-[#705955]">
            {palette.swatches.length.toString().padStart(2, '0')} COLOURS
          </span>
        </div>

        <p className="mt-4 max-w-[62ch] font-body text-sm leading-relaxed text-[#F8DDE3]/75">
          {palette.content}
        </p>

        <ul className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {palette.swatches.map((swatch) => (
            <li key={swatch.hex}>
              <div className="rounded-lg border border-[#705955]/45 bg-[#1B1116] p-2 transition-colors duration-300 hover:border-[#F8DDE3]/60">
                <div
                  className="h-20 rounded-md border border-[#705955]/40 lg:h-24"
                  style={{ backgroundColor: swatch.hex }}
                  role="img"
                  aria-label={`${swatch.name} swatch, ${swatch.hex}`}
                />
              </div>
              <p className="mt-2.5 eyebrow text-[#F8DDE3]/90">{swatch.name}</p>
              <p className="mt-1 font-mono-code text-[0.6875rem] tracking-[0.08em] text-[#705955]">
                {swatch.hex.toUpperCase()}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export const InternshipExperiencePage: React.FC = () => (
  <main className="bg-[#10090B]">
    <SocialBoard />
    <PaletteBand />
    <Divider />
    <CommerceBoard />
  </main>
);
