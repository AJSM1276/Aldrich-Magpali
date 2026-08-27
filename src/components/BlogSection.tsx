import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { motion } from 'motion/react';
import { 
  staggerContainer, 
  fadeInUp, 
  fadeInScale 
} from '../utils/motionVariants';
import { 
  ExternalLink, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  Send
} from 'lucide-react';

interface BlogSectionProps {
  onOpenPost?: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = () => {
  const blogLink = PERSONAL_INFO.beehiivUrl || "https://aldrichmagpali-newsletter.beehiiv.com/";

  const highlights = [
    "100% Free & Open Access",
    "Admissions & Essay Breakdowns",
    "Application Checklists & Timelines",
    "No Spam, Unsubscribe Anytime"
  ];

  return (
    <motion.section 
      id="blog" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer(0.12, 0.05)}
      className="py-20 bg-white dark:bg-[#120B1C] border-t border-stone-200/80 dark:border-stone-800/80 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3E2B4E] dark:bg-[#E2C799]"></span>
              <span className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400">
                Writing & Field Notes
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 dark:text-white font-normal tracking-tight">
              Essays, Guides & <span className="italic text-[#3E2B4E] dark:text-[#E2C799] font-normal">Blogs</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 max-w-xl leading-relaxed">
              Long-form admissions playbooks, QuestBridge reflections, essay analyses, and cognitive research dispatches published regularly.
            </p>
          </div>

          <a
            id="blog-header-link"
            href={blogLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#241D2B] dark:bg-[#3E2B4E] hover:bg-[#382B42] dark:hover:bg-[#4E3862] text-white text-xs font-medium rounded-xl shadow-2xs transition-all cursor-pointer hover:scale-101 shrink-0"
          >
            <BookOpen className="w-4 h-4 text-stone-300 dark:text-[#FAF5ED]" />
            <span>Open Blog</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </motion.div>

        {/* Hero Hub Card */}
        <motion.div variants={fadeInScale} className="p-6 sm:p-8 bg-[#FAF7F2] dark:bg-[#1A1224] border border-[#E7DFD3] dark:border-stone-800 rounded-2xl shadow-2xs space-y-6 transition-colors">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-stone-200/70 dark:border-stone-800/70">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-medium uppercase tracking-wider bg-[#FAF5ED] dark:bg-[#251B2E] text-[#4A3B22] dark:text-[#E2C799] border border-[#E5DAC6] dark:border-[#4E3862] px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#876834] dark:text-[#E2C799]" />
                  Featured Publication
                </span>
                <span className="text-xs text-stone-500 dark:text-stone-400 font-medium font-serif italic">
                  Weekly / Bi-weekly Dispatches
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 dark:text-white font-normal leading-snug">
                Admissions Strategy, Lived Reflections & Cognitive Notes
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                Join students, counselors, and educators reading free dispatches on selective college admissions, essay writing without tropes, and QuestBridge strategies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0">
              <a
                id="blog-hub-primary-btn"
                href={blogLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#241D2B] dark:bg-[#3E2B4E] hover:bg-[#382B42] dark:hover:bg-[#4E3862] text-white text-xs sm:text-sm font-medium rounded-xl shadow-2xs transition-all cursor-pointer hover:scale-101"
              >
                <Send className="w-4 h-4 text-stone-300 dark:text-[#FAF5ED]" />
                <span>Read Articles & Subscribe</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-80" />
              </a>
              <a
                id="blog-hub-read-all-btn"
                href={blogLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-white dark:bg-[#251B32] hover:bg-stone-50 dark:hover:bg-[#302340] text-stone-700 dark:text-stone-200 text-xs font-medium rounded-xl border border-stone-200 dark:border-stone-700 shadow-2xs transition-all cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400" />
                <span>Browse All Past Posts</span>
              </a>
            </div>
          </div>

          {/* Highlights checklist */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-stone-700 dark:text-stone-300 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3E2B4E] dark:text-[#E2C799] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

