import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  BookOpen, 
  Menu, 
  X, 
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  onOpenTutorly: () => void;
  onOpenQuestBridgeGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenQuestBridgeGuide
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Story', href: '#story' },
    { label: 'Blog', href: '#blog' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled 
          ? 'bg-[#FAF9F6]/95 backdrop-blur-md border-b border-purple-100/80 shadow-2xs py-3' 
          : 'bg-transparent py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand */}
        <a 
          id="nav-brand-logo"
          href="#" 
          className="group flex items-center gap-2.5 transition-transform hover:scale-101"
        >
          <div className="w-7 h-7 rounded-lg bg-[#1A1A1A] text-white flex items-center justify-center font-serif font-semibold text-xs shadow-2xs group-hover:bg-[#3C225D] transition-colors">
            {PERSONAL_INFO.monogram}
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-[#1A1A1A] text-xs sm:text-sm tracking-tight block">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">
              Williams '30 • QuestBridge Scholar
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-gray-600">
          {navLinks.map((link) => (
            <a
              key={link.label}
              id={`nav-link-${link.label.toLowerCase()}`}
              href={link.href}
              className="hover:text-[#3C225D] hover:font-semibold transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            id="nav-quick-guide-btn"
            onClick={onOpenQuestBridgeGuide}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#3C225D] bg-purple-50 hover:bg-purple-100 border border-purple-200/80 rounded-lg transition-colors cursor-pointer"
            title="Read QuestBridge Strategy Playbook"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Free QB Guide</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="nav-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="nav-mobile-drawer"
          className="md:hidden bg-[#FAF9F6] border-b border-purple-100 px-6 pt-3 pb-5 mt-2 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-150"
        >
          <div className="grid grid-cols-2 gap-2 text-xs">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-[#3C225D] transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-purple-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuestBridgeGuide();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-[#3C225D] bg-purple-50 border border-purple-200 rounded-lg"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Read Free QuestBridge Guide</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
