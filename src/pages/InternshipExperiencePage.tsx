import React from 'react';
import { SocialBoard } from '../components/internship/SocialBoard';
import { CommerceBoard } from '../components/internship/CommerceBoard';
import { KeyLearningsBand } from '../components/internship/KeyLearningsBand';

/**
 * INTERNSHIP — AADIYA JEWELS.
 *
 * Two sections, one page, one scroll, and then the reading of them. The social
 * media work is the first, the e-commerce and website management work is the
 * second, and the key learnings band is the last, and the first two are sections
 * rather than pages because they are one piece of work told in two halves — one
 * internship, one brand, one set of photographs. Splitting them across two routes
 * asked the reader to decide up front which half of a single job they cared
 * about, which is a question the work itself should answer by being read all the
 * way through.
 *
 * THE TWO HALVES ARE NOT BUILT THE SAME WAY, and that is because the work in them
 * is not the same kind of work rather than because the page ran out of attention
 * halfway down. The third section is a third thing again and is neither half's
 * construction: four rows of prose on a blush band, with no sheet and no board in
 * it, because it is the conclusion rather than more of the evidence. It was taken
 * off this page in 6d41b95 when the internship was rebuilt as two fixed boards,
 * and is restored here from de7f6bc, which is the tightened version of it and also
 * the last commit before it was removed. See the component for why one of its
 * classes is gone and what replaced it.
 *
 * The social half is three fixed sheets, 1600 wide, flush with each other and
 * with the edges of the window, with every part of them placed: a running head,
 * six prints, a hand-drawn annotation set. The sheets are a continuous surface
 * rather than three boards on a background, so nothing separates them and the
 * pink runs edge to edge. Nothing on a sheet is reachable by scrolling within it.
 * These are art-directed layouts with absolute pixel positions in them, and a
 * reader who resizes the window gets the same sheet smaller rather than a
 * different arrangement of it.
 *
 * The e-commerce half is a fluid section that reflows. Seven columns of website
 * beside five of prose at the large breakpoint; a four-across card row that
 * collapses to two and then to one; drawn objects scaled to whatever width they
 * are given rather than laid out on fixed paper. The work it holds is a website
 * and a set of tools, and a website is not a fixed composition — it is the one
 * thing on this page that is genuinely a different size on every screen, so
 * drawing it as a sheet would have been a lie about what it is.
 *
 * THEY MEET DIRECTLY, with no band, no rule and no section number between them.
 * A divider and a palette band used to sit in that gap, and the divider's reason
 * for existing is the reason they are not missed now: it existed to announce that
 * a second composition was arriving, because the two halves were once painted in
 * colours close enough that a reader scrolling from one to the other would have
 * landed on what looked like the same ground again. They are not close now. The
 * sheets are on a blush pink and this section is on the cream of the reference it
 * was rebuilt in, and a change of ground is a change of material — it needs no
 * announcement, because it cannot be missed. The band beneath it named the five
 * colours the sheets are painted with, which was a reference for work that is
 * still on the page and did not need to be restated between the two halves.
 */

export const InternshipExperiencePage: React.FC = () => (
  <main className="bg-[#10090B]">
    <SocialBoard />
    <CommerceBoard />
    <KeyLearningsBand />
  </main>
);
