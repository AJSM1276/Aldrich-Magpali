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
      className="relative pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Main Narrative Column */}
          <motion.div 
            variants={fadeInLeft}
            className="lg:col-span-7 space-y-5"
          >
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <button 
                id="hero-badge-qb"
                onClick={triggerMatchConfetti}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF5ED] dark:bg-[#251B2E] border border-[#E5DAC6] dark:border-[#4E3862] rounded-full text-xs font-semibold text-[#4A3B22] dark:text-[#E2C799] shadow-2xs hover:bg-[#F3ECE0] dark:hover:bg-[#2F223B] transition-colors cursor-pointer"
              >
                <Award className="w-3.5 h-3.5 text-[#876834] dark:text-[#E2C799]" />
                <span>QuestBridge National Match Scholar</span>
              </button>
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-stone-100 dark:bg-stone-800/80 border border-stone-200/80 dark:border-stone-700/70 rounded-full text-xs text-stone-600 dark:text-stone-300 font-medium">
                <MapPin className="w-3.5 h-3.5 text-stone-400 dark:text-stone-400" />
                <span>Williams College '30 • Maryland</span>
              </div>
            </div>

            {/* Typography Header */}
            <div className="space-y-3">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-900 dark:text-white tracking-tight leading-[1.15] font-normal">
                Admissions Strategy, Mentorship &{' '}
                <span className="italic text-[#3E2B4E] dark:text-[#E2C799] font-normal">Cognitive Research.</span>
              </h1>
              
              <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed max-w-xl">
                Hi, I'm <strong className="font-semibold text-stone-900 dark:text-white">Aldrich Magpali</strong> — a first-generation QuestBridge Scholar matched to Williams College. I help ambitious students demystify elite college admissions through data-driven essay strategy, structured fly-in guidance, and 1-on-1 mentorship.
              </p>
            </div>

            {/* Micro Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="flex items-start gap-2 text-xs text-stone-700 dark:text-stone-300 bg-white dark:bg-[#160E21] p-2.5 rounded-xl border border-stone-200/70 dark:border-stone-800 shadow-2xs transition-colors">
                <div className="w-4 h-4 rounded-full bg-[#EAE2F2] dark:bg-[#342443] flex items-center justify-center text-[#3E2B4E] dark:text-[#E2C799] shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <span><strong>QuestBridge Strategy:</strong> Ranked 15 schools, 100% matched to top choice</span>
              </div>

              <div className="flex items-start gap-2 text-xs text-stone-700 dark:text-stone-300 bg-white dark:bg-[#160E21] p-2.5 rounded-xl border border-stone-200/70 dark:border-stone-800 shadow-2xs transition-colors">
                <div className="w-4 h-4 rounded-full bg-[#FAF5ED] dark:bg-[#2E2319] flex items-center justify-center text-[#876834] dark:text-[#E2C799] shrink-0 mt-0.5">
                  <Sparkles className="w-2.5 h-2.5" />
                </div>
                <span><strong>20+ Students Mentored:</strong> Fly-ins, QuestBridge & financial aid appeals</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-read-guide-btn"
                onClick={onOpenQuestBridgeGuide}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#241D2B] dark:bg-[#3E2B4E] hover:bg-[#382B42] dark:hover:bg-[#4E3862] text-white text-xs sm:text-sm font-medium rounded-xl shadow-2xs hover:scale-101 transition-all cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-stone-300 dark:text-[#FAF5ED]" />
                <span>Read QuestBridge Playbook</span>
              </button>

              <a
                id="hero-explore-advising-btn"
                href="#services"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-[#1A1224] hover:bg-stone-50 dark:hover:bg-[#251B32] text-stone-800 dark:text-stone-200 text-xs sm:text-sm font-medium rounded-xl border border-stone-200/90 dark:border-stone-700/80 shadow-2xs transition-all cursor-pointer"
              >
                <span>Explore Advising</span>
                <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
              </a>
            </div>

          </motion.div>

          {/* Portrait Showcase */}
          <motion.div 
            variants={fadeInRight}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <TiltCard 
              id="hero-portrait-card"
              maxTilt={4} 
              scale={1.01}
              glareOpacity={0.08}
              className="w-full max-w-[290px] sm:max-w-[320px] rounded-2xl bg-white dark:bg-[#160E21] p-3 shadow-sm border border-stone-200/80 dark:border-stone-800 group transition-colors"
            >
              {/* Photo */}
              <div className="relative aspect-4/5 w-full rounded-xl overflow-hidden bg-stone-100 dark:bg-stone-900">
                <img
                  src={PERSONAL_INFO.defaultAvatarUrl || "/aldrich_portrait.jpg"}
                  alt="Aldrich Jad S. Magpali"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-102"
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
                <span className="text-[#3A274A] dark:text-[#E2C799] font-medium text-[11px]">QuestBridge '25</span>
              </div>
            </TiltCard>

          </motion.div>

        </div>

        {/* Stats Row with Staggered Entrance */}
        <motion.div 
          variants={staggerContainer(0.08, 0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-12 pt-6 border-t border-stone-200/80 dark:border-stone-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
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
        </motion.div>

      </div>
    </motion.section>
  );
};

