import React, { useState } from 'react';
import { 
  MENTEE_STORIES 
} from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { MatchReactionVideo } from './MatchReactionVideo';
import { motion, AnimatePresence } from 'motion/react';
import { 
  staggerContainer, 
  fadeInUp, 
  fadeInScale 
} from '../utils/motionVariants';
import { 
  Sparkles, 
  Award, 
  CheckCircle2, 
  BookOpen, 
  Quote,
  Star,
  MessageSquareQuote,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';

interface StoryAndImpactSectionProps {
  onOpenQuestBridgeGuide: () => void;
}

export const StoryAndImpactSection: React.FC<StoryAndImpactSectionProps> = ({
  onOpenQuestBridgeGuide
}) => {
  const [activeTab, setActiveTab] = useState<'journey' | 'testimonials'>('journey');

  const tabs = [
    { id: 'journey', label: 'My Journey & Match Day', icon: Sparkles, badge: "Williams '30" },
    { id: 'testimonials', label: 'Student Testimonials & Outcomes', icon: MessageSquareQuote, badge: '20+ Advised' },
  ] as const;

  const handleScrollToServices = () => {
    const el = document.getElementById('services');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section 
      id="story" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer(0.12, 0.05)}
      className="py-20 bg-white dark:bg-[#120B1C] border-y border-stone-200/70 dark:border-stone-800/80 relative transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Staggered Entrance */}
        <motion.div variants={fadeInUp} className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3E2B4E] dark:bg-[#E2C799]"></span>
              <span className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400">
                Mission, Journey & Social Proof
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 dark:text-white font-normal tracking-tight">
              From personal adversity to <span className="italic text-[#3E2B4E] dark:text-[#E2C799] font-normal">student mentorship & success</span>.
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 max-w-md leading-relaxed">
            Explore my journey to Williams College and verified testimonials from students guided through QuestBridge, essay line audits, and selective college admissions.
          </p>
        </motion.div>

        {/* 2-Pill Navigation Bar */}
        <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-2 p-1.5 bg-[#F6F4EE] dark:bg-[#1E1528] border border-stone-200/80 dark:border-stone-700/70 rounded-2xl mb-8 shadow-2xs max-w-xl mx-auto transition-colors">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[160px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white dark:bg-[#2C1F38] text-stone-900 dark:text-white font-semibold shadow-2xs border border-stone-200 dark:border-stone-600/80'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/5'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#3E2B4E] dark:text-[#E2C799]' : 'text-stone-400 dark:text-stone-500'}`} />
                <span className="truncate">{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                  isActive 
                    ? 'bg-stone-100 dark:bg-[#3E2B4E] text-stone-700 dark:text-[#FAF5ED] border border-stone-200 dark:border-stone-600' 
                    : 'bg-stone-200/60 dark:bg-stone-800/80 text-stone-500 dark:text-stone-400'
                }`}>
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Animated View / Tab Content Container with Smooth Fade-in */}
        <AnimatePresence mode="wait">
          {activeTab === 'journey' ? (
            <motion.div 
              key="journey"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              {/* Parents' Match Day Live Reaction Embedded Video */}
              <div className="transition-all">
                <MatchReactionVideo />
              </div>

              {/* Quick Link to Playbook */}
              <div className="p-4 bg-[#FAF7F2] dark:bg-[#1A1224] border border-[#E7DFD3] dark:border-stone-800 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-colors">
                <div className="text-xs text-stone-700 dark:text-stone-300">
                  <strong className="text-stone-900 dark:text-white block font-medium">Want to read the full step-by-step QuestBridge Playbook?</strong>
                  Learn the 15-school ranking strategy, CSS Profile waivers, and essay craft.
                </div>
                <button
                  onClick={onOpenQuestBridgeGuide}
                  className="px-4 py-2 bg-[#241D2B] dark:bg-[#3E2B4E] hover:bg-[#382B42] dark:hover:bg-[#4E3862] text-white text-xs font-medium rounded-lg shrink-0 flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read Playbook</span>
                </button>
              </div>

            </motion.div>
          ) : (
            <motion.div 
              key="testimonials"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              {/* Trust & Testimonial Metrics Summary */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto w-full">
                <div className="p-4 bg-[#FAF7F2] dark:bg-[#1A1224] border border-stone-200/80 dark:border-stone-800 rounded-xl text-center transition-colors shadow-2xs">
                  <div className="text-2xl font-serif font-medium text-stone-900 dark:text-white">20+</div>
                  <div className="text-xs text-stone-600 dark:text-stone-400">Students Advised</div>
                </div>

                <div className="p-4 bg-[#FAF7F2] dark:bg-[#1A1224] border border-stone-200/80 dark:border-stone-800 rounded-xl text-center transition-colors shadow-2xs">
                  <div className="text-2xl font-serif font-medium text-stone-900 dark:text-white">30+</div>
                  <div className="text-xs text-stone-600 dark:text-stone-400">Personal Statements Reviewed</div>
                </div>
              </div>

              {/* Testimonials Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {MENTEE_STORIES.map((mentee) => (
                  <div key={mentee.id}>
                    <TiltCard
                      maxTilt={2.5}
                      scale={1.01}
                      className="p-6 bg-white dark:bg-[#1A1224] border border-stone-200/90 dark:border-stone-800 rounded-2xl shadow-2xs space-y-4 flex flex-col justify-between hover:border-stone-300 dark:hover:border-stone-700 transition-colors h-full"
                    >
                      <div className="space-y-3.5">
                        
                        {/* Card Header: Rating, Verified Badge & Outcome Tag */}
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-1 text-amber-500 dark:text-amber-400">
                            {[...Array(mentee.rating || 5)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-current" />
                            ))}
                            <span className="text-[11px] font-semibold text-stone-500 dark:text-stone-400 ml-1">
                              5.0
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5">
                            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800/60">
                              <ShieldCheck className="w-3 h-3" />
                              <span>Verified Student</span>
                            </span>
                          </div>
                        </div>

                        {/* Highlighted Outcome Banner */}
                        {mentee.admitHighlight && (
                          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FAF5ED] dark:bg-[#251B2E] border border-[#E7DFD3] dark:border-[#4E3862]/60 text-[#3E2B4E] dark:text-[#FAF5ED]">
                            <GraduationCap className="w-4 h-4 text-[#876834] dark:text-[#E2C799] shrink-0" />
                            <span className="text-xs font-semibold tracking-tight">
                              {mentee.admitHighlight}
                            </span>
                          </div>
                        )}

                        {/* Testimonial Quote */}
                        <div className="relative pl-3.5 border-l-2 border-[#3E2B4E]/30 dark:border-[#E2C799]/40 py-0.5">
                          <Quote className="w-3.5 h-3.5 text-[#3E2B4E] dark:text-[#E2C799] absolute -top-1 -left-2 opacity-30 fill-current" />
                          <p className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 italic leading-relaxed">
                            "{mentee.quote}"
                          </p>
                        </div>

                        {/* The Strategic Breakthrough */}
                        <div className="text-xs text-stone-700 dark:text-stone-300 bg-[#FAF9F6] dark:bg-[#120B1C]/80 p-3 rounded-xl border border-stone-200/70 dark:border-stone-800 space-y-1">
                          <div className="flex items-center gap-1 text-stone-900 dark:text-stone-200 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#3E2B4E] dark:bg-[#E2C799]"></span>
                            <span>Strategy Implemented:</span>
                          </div>
                          <p className="text-stone-600 dark:text-stone-400 text-[11px] leading-relaxed">
                            {mentee.keyStrategy}
                          </p>
                        </div>

                        {/* Verified Wins Checklist */}
                        <div className="space-y-1.5 pt-1">
                          {mentee.outcomes.map((out, idx) => (
                            <div key={idx} className="text-xs text-stone-800 dark:text-stone-200 flex items-start gap-1.5 font-medium">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                              <span className="text-[11px] sm:text-xs leading-snug">{out}</span>
                            </div>
                          ))}
                        </div>

                      </div>

                      {/* Card Footer: Student Info & Service Type */}
                      <div className="pt-3 mt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-8 h-8 rounded-full bg-[#241D2B] dark:bg-[#3E2B4E] text-[#FAF5ED] font-serif font-semibold text-xs flex items-center justify-center shrink-0 shadow-2xs">
                            {mentee.studentName.charAt(0)}
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs font-semibold text-stone-900 dark:text-white truncate">
                              {mentee.studentName}
                            </div>
                            <div className="text-[10px] text-stone-500 dark:text-stone-400 truncate">
                              {mentee.schoolContext}
                            </div>
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <span className="text-[10px] font-medium text-[#3E2B4E] dark:text-[#E2C799] bg-[#F2EDF7] dark:bg-[#342442] px-2 py-0.5 rounded border border-[#DDD0E8] dark:border-[#523A68] block">
                            {mentee.cohortYear}
                          </span>
                        </div>
                      </div>
                    </TiltCard>
                  </div>
                ))}
              </div>

              {/* Mentorship Philosophy & Services Banner */}
              <div className="p-5 sm:p-6 bg-gradient-to-br from-[#FAF7F2] to-[#F5EFE6] dark:from-[#1A1224] dark:to-[#120B1C] border border-[#E7DFD3] dark:border-stone-800 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-5 transition-colors">
                <div className="space-y-1.5 max-w-xl">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#876834] dark:text-[#E2C799]" />
                    <h4 className="font-serif text-sm sm:text-base font-medium text-stone-900 dark:text-white">
                      The Editorial & Mentorship Standard
                    </h4>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    "I never coach students to commodify their pain or write in an artificial tone. My role is line-by-line editorial precision and probing questions that help applicants articulate their intellectual vitality with razor clarity."
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleScrollToServices}
                  className="shrink-0 px-4 py-2.5 rounded-xl bg-[#241D2B] dark:bg-[#3E2B4E] hover:bg-[#382B42] dark:hover:bg-[#4E3862] text-white text-xs font-medium transition-all shadow-2xs hover:scale-101 cursor-pointer flex items-center gap-2"
                >
                  <span>Explore Essay Review Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.section>
  );
};


