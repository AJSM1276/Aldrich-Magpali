import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  BookOpen, 
  Menu, 
  X, 
  ExternalLink
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

  const blogUrl = PERSONAL_INFO.beehiivUrl || "https://aldrichmagpali-newsletter.beehiiv.com/";

  const navLinks = [
    { label: 'Story', href: '#story', external: false },
    { label: 'Blog & Articles', href: blogUrl, external: true },
    { label: 'Services', href: '#services', external: false },
    { label: 'Contact', href: '#contact', external: false },
  ];

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled 
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/70 shadow-2xs py-3' 
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
          <div className="w-7 h-7 rounded-lg bg-[#2D2236] text-[#DBCBB1] flex items-center justify-center font-serif font-bold text-xs shadow-2xs group-hover:bg-[#3E304B] transition-colors border border-stone-300/40">
            {PERSONAL_INFO.monogram}
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-stone-900 text-xs sm:text-sm tracking-tight block">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-stone-500 font-medium flex items-center gap-1">
              <span className="text-stone-700 font-semibold">Williams '30</span>
              <span className="text-stone-400">•</span>
              <span className="text-[#876834]">QuestBridge Scholar</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-stone-600">
          {navLinks.map((link) => (
            <a
              key={link.label}
              id={`nav-link-${link.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="hover:text-stone-900 transition-colors py-1 flex items-center gap-1"
            >
              <span>{link.label}</span>
              {link.external && <ExternalLink className="w-3 h-3 opacity-50 text-stone-500" />}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            id="nav-quick-guide-btn"
            onClick={onOpenQuestBridgeGuide}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-white hover:bg-stone-100 border border-stone-200 rounded-lg transition-colors cursor-pointer shadow-2xs"
            title="Read QuestBridge Strategy Playbook"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#3E2B4E]" />
            <span>Free QB Guide</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="nav-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-stone-700 hover:bg-stone-100/80 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            <motion.div
              initial={false}
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </motion.div>
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu with smooth animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            id="nav-mobile-drawer"
            initial={{ opacity: 0, height: 0, y: -6 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -6 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-[#FAF8F5]/98 backdrop-blur-md border-b border-stone-200/80 shadow-md"
          >
            <div className="px-5 pt-3 pb-5 space-y-3">
              <div className="grid grid-cols-2 gap-2 text-xs">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * idx + 0.05, duration: 0.2 }}
                    className="px-3.5 py-2.5 rounded-xl text-stone-700 hover:bg-stone-100 hover:text-stone-900 bg-white/60 border border-stone-200/60 transition-colors font-medium flex items-center justify-between shadow-2xs"
                  >
                    <span>{link.label}</span>
                    {link.external && <ExternalLink className="w-3 h-3 opacity-50 text-stone-500" />}
                  </motion.a>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                className="pt-2 border-t border-stone-200/70"
              >
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuestBridgeGuide();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-stone-800 bg-white hover:bg-stone-50 border border-stone-200 rounded-xl shadow-2xs transition-colors cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#3E2B4E]" />
                  <span>Read Free QuestBridge Guide</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
