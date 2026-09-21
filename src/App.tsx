import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
      <div className="min-h-screen bg-[#F4C9D6] text-[#3E2723] flex flex-col selection:bg-[#D69589] selection:text-[#3E2723]">
        {/* Multi-Page Route Outlet */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenInquiry={() => setWaitlistOpen(true)} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/internship/experience" element={<InternshipExperiencePage />} />
            <Route path="/internship/learnings" element={<InternshipLearningsPage />} />
            <Route path="/projects" element={<ProjectsOverviewPage />} />
            <Route path="/projects/marketing" element={<ProjectMarketingPage />} />
            <Route path="/projects/visual-merchandising" element={<ProjectVisualMerchandisingPage />} />
            <Route path="/projects/project-3" element={<ProjectThreePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Editorial Footer */}
        <Footer />

        {/* Studio Inquiry / Dossier Modal */}
        <WaitlistModal
          isOpen={waitlistOpen}
          onClose={() => setWaitlistOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}
