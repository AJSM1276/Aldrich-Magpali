import React, { useState } from 'react';
import { 
  COLLEGE_ACCESS_MILESTONES, 
  MENTEE_STORIES 
} from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { motion } from 'motion/react';
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="py-20 bg-white border-y border-gray-200/70 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3C225D]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#3C225D]">
                Mission, Journey & Impact
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] font-normal tracking-tight">
              From personal adversity to <span className="italic text-[#3C225D] font-normal">mentorship & open doors</span>.
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 max-w-md leading-relaxed">
            Explore my journey to Williams College and 1-on-1 student mentorship breakthroughs across selective college admissions and QuestBridge.
          </p>
        </div>

        {/* 2-Pill Navigation Bar */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#FAF9F6] border border-gray-200/80 rounded-2xl mb-8 shadow-xs max-w-xl mx-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[160px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white text-[#3C225D] font-bold shadow-xs border border-purple-200/80 scale-101'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#3C225D]' : 'text-gray-400'}`} />
                <span className="truncate">{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive ? 'bg-purple-100 text-[#3C225D]' : 'bg-gray-200/60 text-gray-500'
                }`}>
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: My Journey & Match Day */}
        {activeTab === 'journey' && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            
            {/* Match Day Hero Card */}
            <TiltCard 
              maxTilt={3}
              scale={1.01}
              glareOpacity={0.15}
              className="p-6 sm:p-8 rounded-2xl bg-[#1A1A1A] text-white shadow-xl relative overflow-hidden"
            >
              <div className="relative z-10 space-y-4 max-w-3xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 text-purple-200 text-xs font-semibold rounded-full backdrop-blur-xs border border-white/10">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>December 1, 2025 • Match Day</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-light text-white leading-snug">
                  "The screen updated, and my family screamed in our living room."
                </h3>

                <p className="text-purple-100/90 text-sm leading-relaxed">
                  At 4:00 PM on December 1st, after months of deciphering CSS profile tax schedules alone and drafting essays deep into the night, I refreshed the QuestBridge portal. I matched to <strong className="text-white font-semibold">Williams College Class of 2030 with a 100% comprehensive full four-year scholarship ($0 loans, covering all tuition, room, board, and books)</strong>.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
                  <span className="px-2.5 py-1 bg-white/10 rounded-md font-semibold text-purple-100 border border-white/10">
                    Match Scholar #1 of 14 to Williams '30
                  </span>
                  <span className="px-2.5 py-1 bg-white/10 rounded-md font-semibold text-purple-100 border border-white/10">
                    100% Demonstrated Need Funded
                  </span>
                  <span className="px-2.5 py-1 bg-white/10 rounded-md font-semibold text-purple-100 border border-white/10">
                    $0 Required Family Contribution
                  </span>
                </div>
              </div>
            </TiltCard>

            {/* Milestones Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {COLLEGE_ACCESS_MILESTONES.map((item) => (
                <TiltCard
                  key={item.id}
                  maxTilt={4}
                  scale={1.01}
                  className="p-5 bg-white rounded-xl border border-gray-200/90 shadow-2xs space-y-3 flex flex-col justify-between hover:border-purple-300 transition-colors"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#3C225D] bg-purple-50 px-2.5 py-0.5 rounded border border-purple-200/60">
                        {item.badge}
                      </span>
                      <span className="text-xs text-gray-400 font-medium">{item.year}</span>
                    </div>

                    <h4 className="font-serif text-base font-semibold text-gray-900 leading-snug">
                      {item.title}
                    </h4>

                    <p className="text-xs text-gray-600 leading-relaxed">
                      {item.narrative}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-gray-100 flex items-center gap-1.5 text-xs text-[#3C225D] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3C225D] shrink-0" />
                    <span className="truncate">{item.impactNote}</span>
                  </div>
                </TiltCard>
              ))}
            </div>

            {/* Quick Link to Playbook */}
            <div className="p-4 bg-purple-50/70 border border-purple-200/70 rounded-xl flex items-center justify-between gap-4">
              <div className="text-xs text-gray-700">
                <strong className="text-gray-900 block font-semibold">Want to read the full step-by-step QuestBridge Playbook?</strong>
                Learn the 15-school ranking strategy, CSS Profile waivers, and essay craft.
              </div>
              <button
                onClick={onOpenQuestBridgeGuide}
                className="px-4 py-2 bg-[#3C225D] hover:bg-[#2F1A4A] text-white text-xs font-semibold rounded-lg shrink-0 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Read Playbook</span>
              </button>
            </div>

          </motion.div>
        )}

        {/* Tab 2: Mentorship & Student Stories */}
        {activeTab === 'mentorship' && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            
            {/* Quick Strip */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-4 bg-[#FAF9F6] border border-gray-200/80 rounded-xl">
                <div className="text-2xl font-serif font-bold text-[#3C225D]">20+</div>
                <div className="text-xs text-gray-600">Students Guided 1-on-1</div>
              </div>
              <div className="p-4 bg-[#FAF9F6] border border-gray-200/80 rounded-xl">
                <div className="text-2xl font-serif font-bold text-[#3C225D]">2x</div>
                <div className="text-xs text-gray-600">Applicants at ERHS</div>
              </div>
              <div className="p-4 bg-[#FAF9F6] border border-gray-200/80 rounded-xl">
                <div className="text-2xl font-serif font-bold text-[#3C225D]">100%</div>
                <div className="text-xs text-gray-600">Free for Low-Income</div>
              </div>
            </div>

            {/* Mentee Stories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {MENTEE_STORIES.map((mentee) => (
                <TiltCard
                  key={mentee.id}
                  maxTilt={4}
                  scale={1.01}
                  className="p-5 bg-white border border-gray-200/90 rounded-xl shadow-2xs space-y-3 flex flex-col justify-between hover:border-purple-300 transition-colors"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-gray-900">{mentee.studentName}</span>
                      <span className="text-[11px] font-medium text-[#3C225D] bg-purple-50 px-2 py-0.5 rounded">
                        {mentee.cohortYear}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">{mentee.schoolContext}</div>
                    
                    <div className="text-xs text-gray-700 bg-gray-50 p-2.5 rounded border border-gray-100">
                      <strong className="text-gray-900 block mb-0.5">Strategy:</strong>
                      {mentee.keyStrategy}
                    </div>

                    <div className="space-y-1">
                      {mentee.outcomes.map((out, idx) => (
                        <div key={idx} className="text-xs text-gray-800 flex items-center gap-1.5 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{out}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-gray-100 text-xs text-gray-600 italic">
                    <Quote className="w-3 h-3 text-purple-400 inline mr-1" />
                    "{mentee.quote}"
                  </div>
                </TiltCard>
              ))}
            </div>

            {/* Mentorship Philosophy */}
            <div className="p-5 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-700 leading-relaxed space-y-2">
              <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#3C225D]" />
                <span>My Core Mentoring Belief</span>
              </h4>
              <p>
                "I never coach students to commodify their pain or write in an artificial adult tone. My role is asking the probing questions that help young people discover what they genuinely care about and articulate their intellectual curiosity with razor clarity."
              </p>
            </div>

          </motion.div>
        )}

      </div>
    </motion.section>
  );
};
