import React from 'react';
import { ChevronDown } from 'lucide-react';
import { SocialBoard } from '../components/internship/SocialBoard';
import { CommerceBoard } from '../components/internship/CommerceBoard';

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
 * THE DIVIDER BETWEEN THEM IS THE ONLY THING ON THE PAGE THAT IS NOT A BOARD.
 * It exists because the two sheets are very nearly the same colour — the two
 * briefs asked for a light pink and landed two and three points apart in green
 * and blue — so without a break between them a reader scrolling from one to the
 * other would land on a second composition with nothing to say it was the
 * second. It carries a section number and the section's subject and nothing
 * else, in the same eyebrow as the rest of the site, and it sits on the dark
 * surround rather than on either sheet, because both sheets are specified as
 * full compositions with their own margins and a band of type across the foot
 * of one would be a seventh thing on a board that was specified as six.
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

export const InternshipExperiencePage: React.FC = () => (
  <main className="bg-[#10090B]">
    <SocialBoard />
    <Divider />
    <CommerceBoard />
  </main>
);
