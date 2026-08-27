import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { motion } from 'motion/react';
import { 
  ArrowUp, 
  Linkedin, 
  Instagram, 
  Mail, 
  ExternalLink,
  MapPin,
  Sparkles,
  BookOpen
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes('linkedin')) return <Linkedin className="w-4 h-4" />;
    if (lower.includes('blog') || lower.includes('newsletter')) return <BookOpen className="w-4 h-4" />;
    if (lower.includes('tiktok')) {
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.33a6.33 6.33 0 0 0-.85-.06A6.34 6.34 0 0 0 3.14 15.6a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.05a8.28 8.28 0 0 0 4.77 1.49V7.1a4.83 4.83 0 0 1-1-.41z" />
        </svg>
      );
    }
    if (lower.includes('instagram')) return <Instagram className="w-4 h-4" />;
    if (lower.includes('email') || lower.includes('mail')) return <Mail className="w-4 h-4" />;
    return <ExternalLink className="w-4 h-4" />;
  };

  return (
    <motion.footer 
      id="main-footer" 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="py-14 bg-white dark:bg-[#100919] text-stone-600 dark:text-stone-400 text-xs border-t border-stone-200/80 dark:border-stone-800/80 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Brand & Mission Statement */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#241D2B] dark:bg-[#3E2B4E] text-stone-200 flex items-center justify-center font-serif font-medium text-xs shadow-2xs border border-stone-800 dark:border-stone-700">
                {PERSONAL_INFO.monogram}
              </div>
              <div>
                <span className="font-medium text-stone-900 dark:text-white text-sm block">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-[11px] text-[#3E2B4E] dark:text-[#E2C799] font-medium flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#876834] dark:text-[#E2C799]" />
                  Williams '30 • QuestBridge Scholar
                </span>
              </div>
            </div>
            <p className="text-stone-500 dark:text-stone-400 text-xs leading-relaxed max-w-sm">
              Empowering first-generation, low-income students with high-yield college admissions mentorship, free peer learning, and research-backed strategy.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-2.5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 block">
              Quick Navigation
            </span>
            <div className="flex flex-col space-y-1.5 text-xs text-stone-600 dark:text-stone-300 font-medium">
              <a href="#hero" className="hover:text-stone-900 dark:hover:text-white transition-colors py-0.5">Home & Overview</a>
              <a href="#story" className="hover:text-stone-900 dark:hover:text-white transition-colors py-0.5">Story & Impact</a>
              <a href="#blog" className="hover:text-stone-900 dark:hover:text-white transition-colors py-0.5">Field Notes & Blog</a>
              <a href="#services" className="hover:text-stone-900 dark:hover:text-white transition-colors py-0.5">Advising & Services</a>
              <a href="#contact" className="hover:text-stone-900 dark:hover:text-white transition-colors py-0.5">Get in Touch</a>
            </div>
          </div>

          {/* Social Profiles & Direct Connect */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 block">
              Connect & Socials
            </span>
            
            <div className="flex flex-wrap gap-2">
              {PERSONAL_INFO.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex items-center gap-2 px-3 py-2 bg-stone-50 dark:bg-[#1A1224] hover:bg-stone-100 dark:hover:bg-[#261B34] text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white rounded-lg border border-stone-200/80 dark:border-stone-800 transition-all text-xs font-medium group"
                >
                  <span className="text-stone-500 dark:text-stone-400 group-hover:text-stone-800 dark:group-hover:text-stone-200 transition-colors">
                    {getSocialIcon(social.name)}
                  </span>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-1.5 text-[11px] text-stone-400 dark:text-stone-500 pt-1">
              <MapPin className="w-3.5 h-3.5 text-stone-400 dark:text-stone-500 shrink-0" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-6 border-t border-stone-100 dark:border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-400 dark:text-stone-500">
          <p>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="px-3.5 py-1.5 rounded-lg bg-stone-50 dark:bg-[#1A1224] hover:bg-stone-100 dark:hover:bg-[#261B34] border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white transition-all flex items-center gap-1.5 text-xs font-medium cursor-pointer shadow-2xs hover:shadow-xs"
            title="Back to Top"
          >
            <ArrowUp className="w-3.5 h-3.5 text-stone-600 dark:text-stone-400" />
            <span>Back to Top</span>
          </button>
        </div>

      </div>
    </motion.footer>
  );
};
