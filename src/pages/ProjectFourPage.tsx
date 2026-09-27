import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { HunkyHideawayPage } from '../components/marketing/HunkyHideawayPage';
import { WhatITookAwayPage } from '../components/marketing/WhatITookAwayPage';

/**
 * PROJECT 04 — HUNKY HIDEAWAY (Hunkemöller customer experience activation)
 *
 * Two boards, each rebuilt from its own written specification, scrolling in
 * sequence:
 *
 *   PAGE 01  the event  — components/marketing/HunkyHideawayPage
 *   PAGE 02  the result — components/marketing/WhatITookAwayPage
 *
 * Page 01 is a blush ground, page 02 a cream ground, so the scroll alternates
 * the paper rather than repeating a template. The shared drawn marks live in
 * components/marketing/hunkyScrapbook.
 *
 * The onward link sits here rather than inside either board, because it
 * belongs after the last page rather than the first. A `.bg-[#F9F8F2]` wrapper
 * still sits behind both so the blush ground of page 01 covers the palette's
 * own cream rather than the body colour.
 */
export const ProjectFourPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F8F2]">
      <HunkyHideawayPage />
      <WhatITookAwayPage />

      <div className="px-5 sm:px-5 lg:px-6 pb-16 lg:pb-24">
        <div className="flex justify-end">
          <Link
            to="/projects/marketing"
            className="inline-flex items-center gap-3 eyebrow text-[#3E2723] editorial-link"
          >
            <span>Read Project 01: UNIQLO × Fragrances</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
