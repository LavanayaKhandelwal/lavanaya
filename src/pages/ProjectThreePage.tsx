import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { EverydayAthleisurePageOne } from '../components/marketing/EverydayAthleisurePageOne';
import { EverydayAthleisurePageTwo } from '../components/marketing/EverydayAthleisurePageTwo';

/**
 * PROJECT 3 — EVERYDAY ATHLEISURE (fashion start-up)
 *
 * One continuous page on the home page's light palette, built on the same
 * system as Project 1: cream ground, blush bands, taupe hairlines,
 * plate-light imagery, no side padding. The old scrapbook furniture
 * (washi tape, dark cards, paper shadows) is gone.
 *
 * Both pages are built from their own written specification:
 *
 *   PAGE 01  EverydayAthleisurePageOne — the cover board. The photograph is
 *            full bleed and the type sits over it, then four lifestyle
 *            polaroids, the mid band stacked top to bottom (WHAT I NOTICED over
 *            THE OPPORTUNITY over THE CONCEPT), the bottom band and a wave.
 *
 *   PAGE 02  EverydayAthleisurePageTwo — the dense BUILD → TEST → LISTEN →
 *            ITERATE board. Title, sketch-to-machine collage and FROM IDEA TO
 *            MVP; then THEN I TESTED ONE THING, SURVEY INSIGHTS and SKILLS
 *            APPLIED; then SO I ITERATED beside the co-ord worn in the world;
 *            then WHAT I TAKE FORWARD.
 *
 * PAGE 02's specification carried the page number 02 / 02 and folded the old
 * design/material/prototype page into its own process band, so the project is
 * two pages rather than three.
 */
export const ProjectThreePage: React.FC = () => {
  return (
    <div className="min-h-screen pb-16 lg:pb-24 bg-[#F9F8F2]">
      <div className="px-5 sm:px-5 lg:px-6">
        {/* PAGE 01 — EVERYDAY ATHLEISURE, the specification's landscape board */}
        <EverydayAthleisurePageOne />

        {/* PAGE 02 — BUILD IT. TEST IT. LET USERS SHAPE IT. */}
        <EverydayAthleisurePageTwo />

        {/* Footer — project marks, then the onward link */}
        <div className="rule-t-light mt-6 lg:mt-8 pt-6 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <span className="eyebrow text-[#705955]">EVERYDAY ATHLEISURE</span>
            <span className="block h-px w-10 lg:w-16 bg-[#705955]/30" aria-hidden="true" />
          </div>

          <span className="eyebrow text-[#705955]">PROJECT 03</span>
        </div>

        {/* Onward link — next project */}
        <div className="mt-8 flex justify-end">
          <Link
            to="/projects/project-4"
            className="inline-flex items-center gap-3 eyebrow text-[#3E2723] editorial-link"
          >
            <span>Next Project: Hunkemöller →</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
