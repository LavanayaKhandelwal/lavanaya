import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { startScrollReveal } from './utils/scrollReveal';
import { WaitlistModal } from './components/WaitlistModal';
import { ScrollToTop } from './components/ScrollToTop';
import { FashionPortfolioPage } from './pages/FashionPortfolioPage';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { InternshipExperiencePage } from './pages/InternshipExperiencePage';
import { InternshipLearningsPage } from './pages/InternshipLearningsPage';
import { ProjectsOverviewPage } from './pages/ProjectsOverviewPage';
import { ProjectMarketingPage } from './pages/ProjectMarketingPage';
import { MappingOpportunitySlide } from './pages/MappingOpportunitySlide';
import { BringingConceptToLifeSlide } from './pages/BringingConceptToLifeSlide';
import { MakingIdeaRealSlide } from './pages/MakingIdeaRealSlide';
import { ProjectVisualMerchandisingPage } from './pages/ProjectVisualMerchandisingPage';
import { ProjectThreePage } from './pages/ProjectThreePage';
import { ProjectFourPage } from './pages/ProjectFourPage';
import { ContactPage } from './pages/ContactPage';
import { ambientSound } from './utils/ambientAudio';

export default function App() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  useEffect(() => {
    return () => {
      ambientSound.stop();
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppShell
        onOpenInquiry={() => setWaitlistOpen(true)}
        waitlistOpen={waitlistOpen}
        onCloseInquiry={() => setWaitlistOpen(false)}
      />
    </BrowserRouter>
  );
}

function AppShell({
  onOpenInquiry,
  waitlistOpen,
  onCloseInquiry,
}: {
  onOpenInquiry: () => void;
  waitlistOpen: boolean;
  onCloseInquiry: () => void;
}) {
  const { pathname } = useLocation();
  // The homepage opens with the full-screen fashion portfolio plate,
  // followed by the original homepage sections exactly as they were.
  const isStandalonePlate = pathname === '/fashion-portfolio';

  /* One IntersectionObserver for the section reveals, restarted on every
     navigation so the new page's elements are picked up and the old page's are
     released. See utils/scrollReveal. */
  useEffect(() => startScrollReveal(), [pathname]);

  return (
    <div className={`min-h-screen flex flex-col ${isStandalonePlate ? 'bg-[#10090B]' : ''}`}>
      {/* Multi-Page Route Outlet */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={
            <>
              <FashionPortfolioPage />
              <HomePage onOpenInquiry={onOpenInquiry} />
            </>
          } />
          <Route path="/about" element={<AboutPage />} />
          {/* The internship is two boards on one page, one per half of the
              role, in the order the work was done, followed by the key
              learnings band that reads them. */}
          <Route path="/internship/experience" element={<InternshipExperiencePage />} />
          <Route path="/internship/learnings" element={<InternshipLearningsPage />} />
          <Route path="/projects/marketing" element={<ProjectMarketingPage />} />
          <Route path="/projects/marketing/mapping-opportunity" element={<MappingOpportunitySlide />} />
          <Route path="/projects/marketing/bringing-concept-to-life" element={<BringingConceptToLifeSlide />} />
          <Route path="/projects/marketing/making-idea-real" element={<MakingIdeaRealSlide />} />
          <Route path="/projects/visual-merchandising" element={<ProjectVisualMerchandisingPage />} />
          <Route path="/projects/project-3" element={<ProjectThreePage />} />
          <Route path="/projects/project-4" element={<ProjectFourPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/fashion-portfolio" element={<FashionPortfolioPage />} />
        </Routes>
      </main>

      {/* Studio Inquiry / Dossier Modal */}
      <WaitlistModal
        isOpen={waitlistOpen}
        onClose={onCloseInquiry}
      />
    </div>
  );
}
