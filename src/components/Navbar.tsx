import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { 
  BookOpen, 
  Menu, 
  X, 
  ExternalLink,
  Sun,
  Moon
} from 'lucide-react';

interface NavbarProps {
  onOpenTutorly: () => void;
  onOpenQuestBridgeGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenQuestBridgeGuide
}) => {
  const { isDark, toggleTheme } = useTheme();
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
    { label: 'About', href: '#about', external: false },
    { label: 'Story & Testimonials', href: '#story', external: false },
    { label: 'Blog & Articles', href: blogUrl, external: true },
    { label: 'Services', href: '#services', external: false },
    { label: 'Contact', href: '#contact', external: false },
  ];

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled 
          ? 'bg-[#FAF8F5]/95 dark:bg-[#120B1C]/95 backdrop-blur-md border-b border-stone-200/70 dark:border-stone-800/80 shadow-2xs py-3' 
          : 'bg-transparent py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand */}
        <a 
          id="nav-brand-logo"
          href="#" 
          className="group flex items-center gap-2 sm:gap-2.5 transition-transform hover:scale-101 min-w-0"
        >
          <div className="w-7 h-7 rounded-lg bg-[#2D2236] dark:bg-[#3E2B4E] text-[#DBCBB1] dark:text-[#FAF5ED] flex items-center justify-center font-serif font-bold text-xs shadow-2xs group-hover:bg-[#3E304B] dark:group-hover:bg-[#4E3862] transition-colors border border-stone-300/40 dark:border-stone-700/60 shrink-0">
            {PERSONAL_INFO.monogram}
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-semibold text-stone-900 dark:text-white text-xs sm:text-sm tracking-tight truncate block">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-stone-500 dark:text-stone-400 font-medium flex items-center gap-1 truncate">
              <span className="text-stone-700 dark:text-stone-300 font-semibold">Williams '30</span>
              <span className="hidden sm:inline text-stone-400 dark:text-stone-600">•</span>
              <span className="hidden sm:inline text-[#876834] dark:text-[#E2C799]">QuestBridge Scholar</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links (Visible on lg+) */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-medium text-stone-600 dark:text-stone-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              id={`nav-link-${link.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="hover:text-stone-900 dark:hover:text-white transition-colors py-1 flex items-center gap-1"
            >
              <span>{link.label}</span>
              {link.external && <ExternalLink className="w-3 h-3 opacity-50 text-stone-500 dark:text-stone-400" />}
            </a>
          ))}
        </nav>

        {/* Action Controls & Dark Mode Toggle (Desktop lg+) */}
        <div className="hidden lg:flex items-center gap-2.5">
          
          {/* Theme Toggle Button */}
          <button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            className="p-2 rounded-lg text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white bg-white/80 dark:bg-stone-800/80 hover:bg-stone-100 dark:hover:bg-stone-700 border border-stone-200 dark:border-stone-700 transition-all cursor-pointer shadow-2xs"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <motion.div
              key={isDark ? 'dark-icon' : 'light-icon'}
              initial={{ rotate: -90, scale: 0.7, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-[#F3E1B9]" />
              ) : (
                <Moon className="w-4 h-4 text-[#3E2B4E]" />
              )}
            </motion.div>
          </button>

          <button
            id="nav-quick-guide-btn"
            onClick={onOpenQuestBridgeGuide}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 dark:text-stone-200 bg-white dark:bg-[#1E1528] hover:bg-stone-100 dark:hover:bg-[#2A1E38] border border-stone-200 dark:border-stone-700/80 rounded-lg transition-colors cursor-pointer shadow-2xs"
            title="Read QuestBridge Strategy Playbook"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#3E2B4E] dark:text-[#E2C799]" />
            <span>Free QB Guide</span>
          </button>
        </div>

        {/* Mobile & Tablet controls: Theme toggle + Hamburger (Visible below lg) */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white bg-white/80 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 transition-colors cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-[#F3E1B9]" />
            ) : (
              <Moon className="w-4 h-4 text-[#3E2B4E]" />
            )}
          </button>

          <button
            id="nav-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-stone-700 dark:text-stone-200 hover:bg-stone-100/80 dark:hover:bg-stone-800/80 transition-colors cursor-pointer"
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

      {/* Mobile & Tablet Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            id="nav-mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden overflow-hidden bg-[#FAF8F5]/98 dark:bg-[#120B1C]/98 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800/80 shadow-md"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2.5 rounded-lg text-sm text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800/70 hover:text-stone-900 dark:hover:text-white transition-colors font-medium flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    {link.external && <ExternalLink className="w-3.5 h-3.5 opacity-50 text-stone-500 dark:text-stone-400" />}
                  </a>
                ))}
              </nav>

              <div className="pt-2 border-t border-stone-200/70 dark:border-stone-800/70">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuestBridgeGuide();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-stone-800 dark:text-stone-200 bg-white dark:bg-[#1E1528] hover:bg-stone-50 dark:hover:bg-[#2A1E38] border border-stone-200 dark:border-stone-700 rounded-xl shadow-2xs transition-colors cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#3E2B4E] dark:text-[#E2C799]" />
                  <span>Read Free QuestBridge Guide</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

