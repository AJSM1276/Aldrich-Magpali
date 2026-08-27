import React, { useState } from 'react';
import { 
  MENTEE_STORIES 
} from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { MatchReactionVideo } from './MatchReactionVideo';
import { motion } from 'motion/react';
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
      className="py-20 bg-white border-y border-gray-200/70 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Staggered Entrance */}
        <motion.div variants={fadeInUp} className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3E2B4E]"></span>
              <span className="text-xs font-semibold uppercase tracking-widest text-stone-500">
                Mission, Journey & Impact
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight">
              From personal adversity to <span className="italic text-[#3E2B4E] font-normal">mentorship & open doors</span>.
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-stone-600 max-w-md leading-relaxed">
            Explore my journey to Williams College and 1-on-1 student mentorship breakthroughs across selective college admissions and QuestBridge.
          </p>
        </motion.div>

        {/* 2-Pill Navigation Bar */}
        <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-2 p-1.5 bg-[#F6F4EE] border border-stone-200/80 rounded-2xl mb-8 shadow-2xs max-w-xl mx-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[160px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white text-stone-900 font-semibold shadow-2xs border border-stone-200'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-white/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#3E2B4E]' : 'text-stone-400'}`} />
                <span className="truncate">{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                  isActive ? 'bg-stone-100 text-stone-700 border border-stone-200' : 'bg-stone-200/60 text-stone-500'
                }`}>
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Tab 1: My Journey & Match Day */}
        {activeTab === 'journey' && (
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.1, 0.05)}
            className="space-y-6"
          >
            {/* Parents' Match Day Live Reaction Embedded Video */}
            <motion.div variants={fadeInUp}>
              <MatchReactionVideo />
            </motion.div>

            {/* Quick Link to Playbook */}
            <motion.div variants={fadeInUp} className="p-4 bg-[#FAF7F2] border border-[#E7DFD3] rounded-xl flex items-center justify-between gap-4">
              <div className="text-xs text-stone-700">
                <strong className="text-stone-900 block font-medium">Want to read the full step-by-step QuestBridge Playbook?</strong>
                Learn the 15-school ranking strategy, CSS Profile waivers, and essay craft.
              </div>
              <button
                onClick={onOpenQuestBridgeGuide}
                className="px-4 py-2 bg-[#241D2B] hover:bg-[#382B42] text-white text-xs font-medium rounded-lg shrink-0 flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Read Playbook</span>
              </button>
            </motion.div>

          </motion.div>
        )}

        {/* Tab 2: Mentorship & Student Stories */}
        {activeTab === 'mentorship' && (
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.1, 0.05)}
            className="space-y-8"
          >
            
            {/* Quick Strip with Stagger */}
            <motion.div variants={staggerContainer(0.06, 0.05)} className="grid grid-cols-3 gap-3 text-center">
              <motion.div variants={fadeInUp} className="p-4 bg-[#FAF7F2] border border-stone-200/80 rounded-xl">
                <div className="text-2xl font-serif font-medium text-stone-900">20+</div>
                <div className="text-xs text-stone-600">Students Guided 1-on-1</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="p-4 bg-[#FAF7F2] border border-stone-200/80 rounded-xl">
                <div className="text-2xl font-serif font-medium text-stone-900">2x</div>
                <div className="text-xs text-stone-600">Applicants at ERHS</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="p-4 bg-[#FAF7F2] border border-stone-200/80 rounded-xl">
                <div className="text-2xl font-serif font-medium text-stone-900">100%</div>
                <div className="text-xs text-stone-600">Free for Low-Income</div>
              </motion.div>
            </motion.div>

            {/* Mentee Stories Grid with Staggered Entrance */}
            <motion.div variants={staggerContainer(0.08, 0.1)} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {MENTEE_STORIES.map((mentee) => (
                <motion.div key={mentee.id} variants={fadeInUp}>
                  <TiltCard
                    maxTilt={3}
                    scale={1.01}
                    className="p-5 bg-white border border-stone-200/80 rounded-xl shadow-2xs space-y-3 flex flex-col justify-between hover:border-stone-300 transition-colors h-full"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-stone-900">{mentee.studentName}</span>
                        <span className="text-[11px] font-medium text-[#3A274A] bg-[#F2EDF7] px-2 py-0.5 rounded border border-[#DDD0E8]">
                          {mentee.cohortYear}
                        </span>
                      </div>
                      <div className="text-xs text-stone-500">{mentee.schoolContext}</div>
                      
                      <div className="text-xs text-stone-700 bg-stone-50 p-2.5 rounded border border-stone-100">
                        <strong className="text-stone-900 block mb-0.5">Strategy:</strong>
                        {mentee.keyStrategy}
                      </div>

                      <div className="space-y-1">
                        {mentee.outcomes.map((out, idx) => (
                          <div key={idx} className="text-xs text-stone-800 flex items-center gap-1.5 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                            <span>{out}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-stone-100 text-xs text-stone-600 italic">
                      <Quote className="w-3 h-3 text-[#3A274A] inline mr-1 opacity-70" />
                      "{mentee.quote}"
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>

            {/* Mentorship Philosophy */}
            <motion.div variants={fadeInUp} className="p-5 bg-white border border-stone-200/90 rounded-xl text-xs sm:text-sm text-stone-700 leading-relaxed space-y-2">
              <h4 className="font-medium text-stone-900 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#876834]" />
                <span>My Core Mentoring Belief</span>
              </h4>
              <p className="text-stone-600">
                "I never coach students to commodify their pain or write in an artificial adult tone. My role is asking the probing questions that help young people discover what they genuinely care about and articulate their intellectual curiosity with razor clarity."
              </p>
            </motion.div>

          </motion.div>
        )}

      </div>
    </motion.section>
  );
};
