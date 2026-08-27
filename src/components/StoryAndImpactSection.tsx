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
  Users, 
  Quote
} from 'lucide-react';

interface StoryAndImpactSectionProps {
  onOpenQuestBridgeGuide: () => void;
}

export const StoryAndImpactSection: React.FC<StoryAndImpactSectionProps> = ({
  onOpenQuestBridgeGuide
}) => {
  const [activeTab, setActiveTab] = useState<'journey' | 'mentorship'>('journey');

  const tabs = [
    { id: 'journey', label: 'My Journey & Match Day', icon: Sparkles, badge: "Williams '30" },
    { id: 'mentorship', label: 'Student Mentorship & Impact', icon: Users, badge: '20+ Guided' },
  ] as const;

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
                Mission, Journey & Impact
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 dark:text-white font-normal tracking-tight">
              From personal adversity to <span className="italic text-[#3E2B4E] dark:text-[#E2C799] font-normal">mentorship & open doors</span>.
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 max-w-md leading-relaxed">
            Explore my journey to Williams College and 1-on-1 student mentorship breakthroughs across selective college admissions and QuestBridge.
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
              key="mentorship"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              {/* Quick Strip with Stagger */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-4 bg-[#FAF7F2] dark:bg-[#1A1224] border border-stone-200/80 dark:border-stone-800 rounded-xl transition-colors">
                  <div className="text-2xl font-serif font-medium text-stone-900 dark:text-white">20+</div>
                  <div className="text-xs text-stone-600 dark:text-stone-400">Students Guided 1-on-1</div>
                </div>
                <div className="p-4 bg-[#FAF7F2] dark:bg-[#1A1224] border border-stone-200/80 dark:border-stone-800 rounded-xl transition-colors">
                  <div className="text-2xl font-serif font-medium text-stone-900 dark:text-white">2x</div>
                  <div className="text-xs text-stone-600 dark:text-stone-400">Applicants at ERHS</div>
                </div>
                <div className="p-4 bg-[#FAF7F2] dark:bg-[#1A1224] border border-stone-200/80 dark:border-stone-800 rounded-xl transition-colors">
                  <div className="text-2xl font-serif font-medium text-stone-900 dark:text-white">100%</div>
                  <div className="text-xs text-stone-600 dark:text-stone-400">Free for Low-Income</div>
                </div>
              </div>

              {/* Mentee Stories Grid with Staggered Entrance */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {MENTEE_STORIES.map((mentee) => (
                  <div key={mentee.id}>
                    <TiltCard
                      maxTilt={3}
                      scale={1.01}
                      className="p-5 bg-white dark:bg-[#1A1224] border border-stone-200/80 dark:border-stone-800 rounded-xl shadow-2xs space-y-3 flex flex-col justify-between hover:border-stone-300 dark:hover:border-stone-700 transition-colors h-full"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-stone-900 dark:text-white">{mentee.studentName}</span>
                          <span className="text-[11px] font-medium text-[#3A274A] dark:text-[#E2C799] bg-[#F2EDF7] dark:bg-[#342442] px-2 py-0.5 rounded border border-[#DDD0E8] dark:border-[#523A68]">
                            {mentee.cohortYear}
                          </span>
                        </div>
                        <div className="text-xs text-stone-500 dark:text-stone-400">{mentee.schoolContext}</div>
                        
                        <div className="text-xs text-stone-700 dark:text-stone-300 bg-stone-50 dark:bg-stone-900/60 p-2.5 rounded border border-stone-100 dark:border-stone-800/80">
                          <strong className="text-stone-900 dark:text-stone-200 block mb-0.5">Strategy:</strong>
                          {mentee.keyStrategy}
                        </div>

                        <div className="space-y-1">
                          {mentee.outcomes.map((out, idx) => (
                            <div key={idx} className="text-xs text-stone-800 dark:text-stone-200 flex items-center gap-1.5 font-medium">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400 shrink-0" />
                              <span>{out}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 border-t border-stone-100 dark:border-stone-800 text-xs text-stone-600 dark:text-stone-400 italic">
                        <Quote className="w-3 h-3 text-[#3A274A] dark:text-[#E2C799] inline mr-1 opacity-70" />
                        "{mentee.quote}"
                      </div>
                    </TiltCard>
                  </div>
                ))}
              </div>

              {/* Mentorship Philosophy */}
              <div className="p-5 bg-white dark:bg-[#1A1224] border border-stone-200/90 dark:border-stone-800 rounded-xl text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed space-y-2 transition-colors">
                <h4 className="font-medium text-stone-900 dark:text-white flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#876834] dark:text-[#E2C799]" />
                  <span>My Core Mentoring Belief</span>
                </h4>
                <p className="text-stone-600 dark:text-stone-300">
                  "I never coach students to commodify their pain or write in an artificial adult tone. My role is asking the probing questions that help young people discover what they genuinely care about and articulate their intellectual curiosity with razor clarity."
                </p>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.section>
  );
};

