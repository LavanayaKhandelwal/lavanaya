import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FutureInBloomCover } from '../components/marketing/FutureInBloomCover';
import { ConceptToShapeSection } from '../components/marketing/ConceptToShapeSection';
import { MakingTheUnexpectedSection } from '../components/marketing/MakingTheUnexpectedSection';
import { LearningThroughProcessSection } from '../components/marketing/LearningThroughProcessSection';

/**
 * PROJECT 2 — VISUAL MERCHANDISING (Cover Story × Future Florals)
 *
 * One continuous page on the home page's light palette, built on the same
 * system as Project 1: full-bleed cover, cream ground, taupe hairlines,
 * no side padding, no cards.
 *
 * The case study is four pages — 01 cover, then 02, 03 and 04, each a
 * component in components/marketing. The footer below is page chrome, not a
 * fifth page.
 */
export const ProjectVisualMerchandisingPage: React.FC = () => {
  return (
    <div className="min-h-screen pb-16 lg:pb-24 bg-[#F9F8F2]">
      {/* COVER — 40/60 editorial split, photograph full height on the right */}
      <FutureInBloomCover />

      <div className="px-5 sm:px-8 lg:px-12">
        {/* PAGE 2 — WHERE THE CONCEPT TOOK SHAPE */}
        <ConceptToShapeSection />

        {/* PAGE 3 — MAKING THE UNEXPECTED */}
        <MakingTheUnexpectedSection />

        {/* PAGE 4 — LEARNING THROUGH THE PROCESS */}
        <LearningThroughProcessSection />

        {/* Footer — project marks, then the onward link */}
        <div className="rule-t-light pt-6 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <span className="eyebrow text-[#705955]">VISUAL MERCHANDISING</span>
            <span className="block h-px w-10 lg:w-16 bg-[#705955]/30" aria-hidden="true" />
          </div>

          <span className="eyebrow text-[#705955]">PROJECT 02</span>
        </div>

        <div className="mt-8 flex justify-end">
          <Link
            to="/projects/project-3"
            className="inline-flex items-center gap-3 eyebrow text-[#3E2723] editorial-link"
          >
            <span>Next Project: Start Up →</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
