import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Footer } from './components/Footer';
import { WaitlistModal } from './components/WaitlistModal';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { InternshipExperiencePage } from './pages/InternshipExperiencePage';
import { InternshipLearningsPage } from './pages/InternshipLearningsPage';
import { ProjectsOverviewPage } from './pages/ProjectsOverviewPage';
import { ProjectMarketingPage } from './pages/ProjectMarketingPage';
import { ProjectVisualMerchandisingPage } from './pages/ProjectVisualMerchandisingPage';
import { ProjectThreePage } from './pages/ProjectThreePage';
import { SkillsPage } from './pages/SkillsPage';
import { ContactPage } from './pages/ContactPage';
import { FashionPortfolioPage } from './pages/FashionPortfolioPage';
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
  // The fashion portfolio plate is a standalone editorial page —
  // exactly three stacked sections, no site chrome.
  const isStandalonePlate = pathname === '/fashion-portfolio';

  return (
    <div className={`min-h-screen flex flex-col ${isStandalonePlate ? 'bg-[#10090B]' : ''}`}>
      {/* Multi-Page Route Outlet */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onOpenInquiry={onOpenInquiry} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/internship/experience" element={<InternshipExperiencePage />} />
          <Route path="/internship/learnings" element={<InternshipLearningsPage />} />
          <Route path="/projects" element={<ProjectsOverviewPage />} />
          <Route path="/projects/marketing" element={<ProjectMarketingPage />} />
          <Route path="/projects/visual-merchandising" element={<ProjectVisualMerchandisingPage />} />
          <Route path="/projects/project-3" element={<ProjectThreePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/fashion-portfolio" element={<FashionPortfolioPage />} />
        </Routes>
      </main>

      {/* Editorial Footer */}
      {!isStandalonePlate && <Footer />}

      {/* Studio Inquiry / Dossier Modal */}
      <WaitlistModal
        isOpen={waitlistOpen}
        onClose={onCloseInquiry}
      />
    </div>
  );
}
