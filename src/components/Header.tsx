import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { FlowerMark } from './CustomDoodles';
import { portfolioData } from '../data/portfolioData';

interface HeaderProps {
  onOpenWaitlist: () => void;
  ambientSound: boolean;
  onToggleAmbient: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { to: '/projects', label: 'Projects' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' }
  ];

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'text-[#F8E5D7] font-bold'
      : 'text-[#F8E5D7]/70 hover:text-[#F8E5D7] transition-colors';

  return (
    <header className="sticky top-0 z-40 bg-[#FADBD9]/90 backdrop-blur-md border-b border-[#A38D89]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand identity (Left) */}
        <Link to="/" className="flex items-center gap-2.5">
          <FlowerMark size={24} />
          <span className="font-serif-display text-2xl font-bold tracking-tight text-[#F8E5D7]">
            {portfolioData.student.name}
          </span>
        </Link>

        {/* Minimal Navigation */}
        <nav
          className="hidden md:flex items-center gap-x-8 font-mono-code text-xs"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#F8E5D7] hover:text-[#F8E5D7]/70 transition-colors focus:outline-hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FADBD9] border-b border-[#A38D89]/15 px-6 pt-4 pb-6 space-y-3 font-mono-code text-xs">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#F8E5D7]"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};
