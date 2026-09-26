import { CoverSection } from '../components/fashion/CoverSection';
import { WhyMeSection } from '../components/fashion/WhyMeSection';

/**
 * Fashion portfolio plate — exactly two vertically stacked full-screen
 * editorial sections with a hard 0px transition, edge to edge.
 * No navigation, no footer, no extra sections.
 */
export function FashionPortfolioPage() {
  return (
    <div className="w-full bg-[#10090B]">
      <CoverSection />
      <WhyMeSection />
    </div>
  );
}
