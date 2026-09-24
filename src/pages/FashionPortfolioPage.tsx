import { CoverSection } from '../components/fashion/CoverSection';
import { WhyMeSection } from '../components/fashion/WhyMeSection';
import { CaseStudySection } from '../components/fashion/CaseStudySection';

/**
 * Fashion portfolio plate — exactly three vertically stacked full-screen
 * editorial sections with hard 0px transitions, edge to edge.
 * No navigation, no footer, no extra sections.
 */
export function FashionPortfolioPage() {
  return (
    <div className="w-full bg-[#10090B]">
      <CoverSection />
      <WhyMeSection />
      <CaseStudySection />
    </div>
  );
}
