import React from 'react';
import { Link } from 'react-router-dom';
import { FlowerMark } from './CustomDoodles';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3E2723] border-t border-[#A38D89]/20 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8 text-center">
        <Link to="/" className="flex items-center gap-2.5">
          <FlowerMark size={24} />
          <span className="font-serif-display text-2xl font-bold tracking-tight text-[#F8E5D7]">
            {portfolioData.student.name}
          </span>
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 font-mono-code text-xs text-[#A38D89]">
          <Link to="/projects" className="hover:text-[#F8E5D7] transition-colors">Projects</Link>
          <Link to="/about" className="hover:text-[#F8E5D7] transition-colors">About</Link>
          <Link to="/skills" className="hover:text-[#F8E5D7] transition-colors">Skills</Link>
          <Link to="/contact" className="hover:text-[#F8E5D7] transition-colors">Contact</Link>
        </nav>

        <p className="font-mono-code text-[11px] text-[#A38D89]">
          © 2026 {portfolioData.student.name}
        </p>
      </div>
    </footer>
  );
};