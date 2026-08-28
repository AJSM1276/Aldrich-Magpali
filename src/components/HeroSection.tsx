import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import confetti from 'canvas-confetti';
import { motion } from 'motion/react';
import { 
  staggerContainer, 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight 
} from '../utils/motionVariants';
import { 
  ArrowRight, 
  BookOpen, 
  MapPin, 
  Sparkles, 
  Award,
  Check
} from 'lucide-react';

interface HeroSectionProps {
  onOpenTutorly: () => void;
  onOpenQuestBridgeGuide: () => void;
  onExploreMission: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenQuestBridgeGuide,
}) => {
  const triggerMatchConfetti = () => {
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#3E2B4E', '#876834', '#D4C3A3', '#EAE2F2', '#A99B87']
    });
  };

  return (
    <motion.section 
      id="hero"
      initial="hidden"
      animate="visible"
      variants={staggerContainer(0.1, 0.05)}
      className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-28 md:pb-20 overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Main Narrative Column */}
          <motion.div 
            variants={fadeInLeft}
            className="lg:col-span-7 space-y-4 sm:space-y-5"
          >
            
            {/* Top Badges & Mobile Mini Avatar */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <button 
                  id="hero-badge-qb"
                  onClick={triggerMatchConfetti}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 bg-[#FAF5ED] dark:bg-[#251B2E] border border-[#E5DAC6] dark:border-[#4E3862] rounded-full text-[11px] sm:text-xs font-semibold text-[#4A3B22] dark:text-[#E2C799] shadow-2xs hover:bg-[#F3ECE0] dark:hover:bg-[#2F223B] transition-colors cursor-pointer"
                >
                  <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#876834] dark:text-[#E2C799]" />
                  <span>QuestBridge Match Scholar</span>
                </button>
                
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 bg-stone-100 dark:bg-stone-800/80 border border-stone-200/80 dark:border-stone-700/70 rounded-full text-[11px] sm:text-xs text-stone-600 dark:text-stone-300 font-medium">
                  <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-stone-400 dark:text-stone-400" />
                  <span>Williams '30 • MD</span>
                </div>
              </div>

              {/* Mobile-only compact mini avatar linking to LinkedIn */}
              <div className="lg:hidden shrink-0">
                <a
                  href="https://www.linkedin.com/in/aldrich-magpali/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Connect with Aldrich on LinkedIn"
                  className="block w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden ring-2 ring-[#3E2B4E]/30 dark:ring-[#E2C799]/40 shadow-xs hover:opacity-90 hover:scale-105 transition-all cursor-pointer"
                >
                  <img
                    src={PERSONAL_INFO.defaultAvatarUrl || "/aldrich_portrait.jpg"}
                    alt="Aldrich Magpali"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                </a>
              </div>
            </div>

            {/* Typography Header */}
            <div className="space-y-2.5 sm:space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#3E2B4E] dark:text-[#E2C799]">
                  Aldrich Magpali • College Prep & Admissions Mentor
                </span>
              </div>
              <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-stone-900 dark:text-white tracking-tight leading-snug sm:leading-[1.15] font-normal">
                College Prep, Common App &{' '}
                <span className="italic text-[#3E2B4E] dark:text-[#E2C799] font-normal">QuestBridge Strategy.</span>
              </h1>
              
              <p className="text-xs sm:text-sm md:text-base text-stone-600 dark:text-stone-300 leading-relaxed max-w-xl">
                Hello! My name is <strong className="font-semibold text-stone-900 dark:text-white">Aldrich Magpali</strong>, and I am a QuestBridge National College Match Scholar attending <strong className="text-stone-900 dark:text-white font-medium">Williams College</strong>—the #1 Liberal Arts College in the United States. I can best assist first-generation low-income students interested in pursuing STEM at a prestigious university.
              </p>
            </div>

            {/* Micro Pillars - Streamlined for Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-1">
              <div className="flex items-center sm:items-start gap-2 text-xs text-stone-700 dark:text-stone-300 bg-white/90 dark:bg-[#160E21] p-2 sm:p-2.5 rounded-xl border border-stone-200/70 dark:border-stone-800 shadow-2xs">
                <div className="w-4 h-4 rounded-full bg-[#EAE2F2] dark:bg-[#342443] flex items-center justify-center text-[#3E2B4E] dark:text-[#E2C799] shrink-0">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <span className="leading-tight"><strong>QuestBridge:</strong> Ranked 7 schools, full-ride with no contribution</span>
              </div>

              <div className="flex items-center sm:items-start gap-2 text-xs text-stone-700 dark:text-stone-300 bg-white/90 dark:bg-[#160E21] p-2 sm:p-2.5 rounded-xl border border-stone-200/70 dark:border-stone-800 shadow-2xs">
                <div className="w-4 h-4 rounded-full bg-[#FAF5ED] dark:bg-[#2E2319] flex items-center justify-center text-[#876834] dark:text-[#E2C799] shrink-0">
                  <Sparkles className="w-2.5 h-2.5" />
                </div>
                <span className="leading-tight"><strong>Mentorship Track Record:</strong> 20+ students guided to top fly-ins & admissions</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2">
              <button
                id="hero-read-guide-btn"
                onClick={onOpenQuestBridgeGuide}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#241D2B] dark:bg-[#3E2B4E] hover:bg-[#382B42] dark:hover:bg-[#4E3862] text-white text-xs sm:text-sm font-medium rounded-xl shadow-2xs hover:scale-101 transition-all cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-stone-300 dark:text-[#FAF5ED]" />
                <span>Read QuestBridge Playbook</span>
              </button>

              <a
                id="hero-explore-products-btn"
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white dark:bg-[#1A1224] hover:bg-stone-50 dark:hover:bg-[#251B32] text-stone-800 dark:text-stone-200 text-xs sm:text-sm font-medium rounded-xl border border-stone-200/90 dark:border-stone-700/80 shadow-2xs transition-all cursor-pointer"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
              </a>
            </div>

          </motion.div>

          {/* Desktop Portrait Showcase (Hidden on Mobile, Visible on lg+) - Clickable to LinkedIn */}
          <motion.div 
            variants={fadeInRight}
            className="hidden lg:flex lg:col-span-5 justify-end"
          >
            <a
              href="https://www.linkedin.com/in/aldrich-magpali/"
              target="_blank"
              rel="noopener noreferrer"
              title="Connect with Aldrich on LinkedIn"
              className="block cursor-pointer group"
            >
              <TiltCard 
                id="hero-portrait-card"
                maxTilt={4} 
                scale={1.01}
                glareOpacity={0.08}
                className="w-full max-w-[320px] rounded-2xl bg-white dark:bg-[#160E21] p-3 shadow-sm border border-stone-200/80 dark:border-stone-800 group-hover:border-stone-400/80 dark:group-hover:border-[#E2C799]/40 transition-colors"
              >
                {/* Photo */}
                <div className="relative aspect-4/5 w-full rounded-xl overflow-hidden bg-stone-100 dark:bg-stone-900">
                  <img
                    src={PERSONAL_INFO.defaultAvatarUrl || "/aldrich_portrait.jpg"}
                    alt="Aldrich Jad S. Magpali"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-2.5 left-3 right-3 text-white pointer-events-none">
                    <div className="text-[10px] uppercase tracking-wider font-semibold text-[#DCC9A8]">
                      Williams College '30
                    </div>
                    <div className="text-sm font-serif font-medium text-white">
                      Aldrich Jad S. Magpali
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-2 px-1 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
                  <span>Eleanor Roosevelt HS '26</span>
                  <span className="font-semibold text-stone-700 dark:text-stone-300 group-hover:text-[#3E2B4E] dark:group-hover:text-[#E2C799] flex items-center gap-1 transition-colors">
                    <span>Connect on LinkedIn</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </TiltCard>
            </a>
          </motion.div>

        </div>

        {/* Stats Row: Clean 2x2 Grid on Mobile, 4-Column Cards on Tablet & Desktop */}
        <motion.div 
          variants={staggerContainer(0.08, 0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-8 sm:mt-12 pt-5 sm:pt-6 border-t border-stone-200/80 dark:border-stone-800/80"
        >
          {/* Mobile layout: Streamlined, unified 2x2 grid with tight neat typography */}
          <div className="grid grid-cols-2 sm:hidden gap-2.5">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-3 bg-white/80 dark:bg-[#160E21] rounded-xl border border-stone-200/70 dark:border-stone-800 shadow-2xs flex flex-col justify-center"
              >
                <span className="text-[10px] uppercase tracking-wider font-semibold text-stone-400 dark:text-stone-500 truncate">
                  {stat.label}
                </span>
                <span className="text-base font-serif font-medium text-stone-900 dark:text-white my-0.5">
                  {stat.value}
                </span>
                <span className="text-[11px] text-stone-500 dark:text-stone-400 truncate">
                  {stat.detail}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Desktop & Tablet layout: 4-Column Cards */}
          <div className="hidden sm:grid sm:grid-cols-4 gap-4">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-3.5 bg-white dark:bg-[#160E21] rounded-xl border border-stone-200/70 dark:border-stone-800 shadow-2xs flex flex-col justify-between transition-colors"
              >
                <div className="text-[10px] uppercase tracking-wider font-semibold text-stone-400 dark:text-stone-500">
                  {stat.label}
                </div>
                <div className="text-xl font-serif font-medium text-stone-900 dark:text-white my-0.5">
                  {stat.value}
                </div>
                <div className="text-xs text-stone-500 dark:text-stone-400 font-normal">
                  {stat.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};


