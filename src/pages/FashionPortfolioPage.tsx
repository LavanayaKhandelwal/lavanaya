import { CoverSection } from '../components/fashion/CoverSection';
import { WhyMeSection } from '../components/fashion/WhyMeSection';
import { CaseStudySection } from '../components/fashion/CaseStudySection';

/**
 * Fashion portfolio plate — exactly three vertically stacked editorial
 * sections with hard 0px transitions, composed on a 910px-wide canvas
 * (page aspect ~910:2048). No navigation, no footer, no extra sections.
 */
export function FashionPortfolioPage() {
  return (
    <div className="mx-auto w-full max-w-[910px] bg-[#10090B] shadow-[0_0_80px_rgba(0,0,0,0.6)]">
      <CoverSection />
      <WhyMeSection />
      <CaseStudySection />
    </div>
  );
}
