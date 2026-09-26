import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const navItems = [
    { to: '/projects', label: 'Projects' },
    { to: '/about', label: 'About' },
    { to: '/skills', label: 'Skills' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <footer className="bg-[#3E2723] border-t border-[#A38D89]/20 pt-14 lg:pt-16 pb-10 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Index — name + nav */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12">
          <div>
            <div className="eyebrow text-[#A38D89] mb-3">Portfolio — Index</div>
            <Link to="/" className="font-display text-4xl sm:text-5xl text-[#F8E5D7] tracking-tight hover:text-[#FADBD9] transition-colors">
              {portfolioData.student.name}
            </Link>
          </div>

          <nav
            className="flex flex-wrap items-center gap-x-8 gap-y-2 font-mono-code text-xs text-[#A38D89] lg:pb-2"
            aria-label="Footer Navigation"
          >
            {navItems.map((item, i) => (
              <span key={item.to} className="flex items-center gap-x-8">
                {i > 0 && <span className="hidden lg:inline text-[#D69589]">/</span>}
                <Link to={item.to} className="hover:text-[#F8E5D7] transition-colors">
                  {item.label}
                </Link>
              </span>
            ))}
          </nav>
        </div>

        {/* Colophon line */}
        <div className="rule-t mt-10 pt-6 lg:mt-14 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="font-mono-code text-[11px] text-[#A38D89]">
            © 2026 {portfolioData.student.name}
          </p>
          <p className="font-mono-code text-[11px] text-[#A38D89] uppercase tracking-wider">
            {portfolioData.student.degree}
          </p>
        </div>
      </div>
    </footer>
  );
};