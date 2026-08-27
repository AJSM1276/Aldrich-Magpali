import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, CORE_VALUES } from '../data/portfolioData';
import { 
  GraduationCap, 
  Brain, 
  Compass, 
  Sparkles, 
  MapPin, 
  BookOpen, 
  Code, 
  Users, 
  Unlock, 
  ArrowRight,
  HeartHandshake,
  Lightbulb
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Unlock: <Unlock className="w-4 h-4 text-[#3E2B4E] dark:text-[#E2C799]" />,
    Brain: <Brain className="w-4 h-4 text-[#3E2B4E] dark:text-[#E2C799]" />,
    Code: <Code className="w-4 h-4 text-[#3E2B4E] dark:text-[#E2C799]" />,
    Users: <Users className="w-4 h-4 text-[#3E2B4E] dark:text-[#E2C799]" />
  };

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="py-16 sm:py-20 border-t border-stone-200/60 dark:border-stone-800/80 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3E2B4E] dark:bg-[#E2C799]"></span>
            <span className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400">
              About Me & Background
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 dark:text-white font-normal tracking-tight">
            Bridging the gap between <span className="italic text-[#3E2B4E] dark:text-[#E2C799] font-normal">ambition and opportunity</span>.
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
            A glimpse into my academic background, research curiosities, and the core beliefs that drive my writing, software building, and admissions mentoring.
          </p>
        </div>

        {/* Narrative Grid: Bio & Academic Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story & Philosophy Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              <p>
                I am an incoming first-year student at <strong className="text-stone-900 dark:text-white font-semibold">Williams College ('30)</strong> and a <strong className="text-stone-900 dark:text-white font-semibold">QuestBridge National College Match Scholar</strong> from Prince George’s County, Maryland.
              </p>
              <p>
                Growing up in a working-class immigrant household in Greenbelt, MD, the world of elite college admissions felt distant and impenetrable. Without private college counselors, legacy connections, or generational wealth, I had to teach myself how to decipher CSS Profile tax forms, craft compelling narrative essays, and secure all-expenses-paid fly-in travel grants.
              </p>
              <p>
                That experience ignited my conviction that <em>talent is universal, but access to information is not</em>. Today, I combine cognitive science frameworks with candid, line-by-line editorial feedback to help high school applicants articulate their genuine intellectual voice.
              </p>
            </div>

            {/* Academic Interests Pillbox */}
            <div className="p-5 bg-white dark:bg-[#1A1224] border border-stone-200/80 dark:border-stone-800 rounded-2xl shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                <GraduationCap className="w-4 h-4 text-[#876834] dark:text-[#E2C799]" />
                <span>Academic Pursuits & Research Interests</span>
              </div>
              <div className="space-y-1.5">
                <div className="text-sm font-serif font-medium text-stone-900 dark:text-white">
                  Intended Major: Biology & Psychology (Pre-Health / Cognitive Science Track)
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  Deeply interested in how the human mind consolidates memory, the neurobiology of stress and learning, and how digital learning tools (like Tutorly) can democratize peer tutoring in public school districts.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {PERSONAL_INFO.secondaryInterests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-[#FAF7F2] dark:bg-[#251B2E] text-stone-700 dark:text-stone-300 border border-stone-200/80 dark:border-stone-700/60"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Facts & Highlights Card Column */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Quick Profile Summary Card */}
            <div className="p-6 bg-[#FAF7F2] dark:bg-[#1A1224] border border-stone-200/90 dark:border-stone-800 rounded-2xl shadow-2xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#241D2B] dark:bg-[#3E2B4E] text-[#FAF5ED] font-serif font-bold text-lg flex items-center justify-center shadow-2xs">
                  {PERSONAL_INFO.monogram}
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-stone-900 dark:text-white">
                    {PERSONAL_INFO.name}
                  </h3>
                  <div className="text-xs text-stone-500 dark:text-stone-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-stone-400" />
                    <span>Greenbelt, MD → Williamstown, MA</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-stone-200/70 dark:border-stone-800 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-stone-500 dark:text-stone-400">High School</span>
                  <span className="font-medium text-stone-900 dark:text-white text-right">
                    Eleanor Roosevelt S/T Magnet
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-500 dark:text-stone-400">College Match</span>
                  <span className="font-medium text-[#3E2B4E] dark:text-[#E2C799]">
                    Williams College '30 (Full Ride)
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-500 dark:text-stone-400">Recognition</span>
                  <span className="font-medium text-stone-900 dark:text-white">
                    QuestBridge Match Scholar
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-500 dark:text-stone-400">Projects Founded</span>
                  <span className="font-medium text-stone-900 dark:text-white">
                    Tutorly (2.6K+ Users)
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="w-full py-2.5 px-3 rounded-xl bg-white dark:bg-[#251B2E] hover:bg-stone-50 dark:hover:bg-[#2F233A] text-stone-800 dark:text-stone-200 text-xs font-medium border border-stone-200 dark:border-stone-700/80 shadow-2xs flex items-center justify-center gap-1.5 transition-all text-center"
                >
                  <span>Get in Touch Directly</span>
                  <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
                </a>
              </div>
            </div>

            {/* Micro Quote Banner */}
            <div className="p-4 rounded-xl bg-[#FAF5ED] dark:bg-[#22172B] border border-[#E7DFD3] dark:border-[#4E3862]/60 text-xs text-stone-700 dark:text-stone-300 leading-relaxed flex items-start gap-2.5">
              <Lightbulb className="w-4 h-4 text-[#876834] dark:text-[#E2C799] shrink-0 mt-0.5" />
              <span>
                <strong>My Guiding North Star:</strong> "Demystifying admissions isn't about teaching tricks—it's about teaching young people how to reflect with radical honesty and communicate their intellectual agency."
              </span>
            </div>

          </div>

        </div>

        {/* Core Values 4-Pillar Grid */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-lg sm:text-xl text-stone-900 dark:text-white font-medium">
              Core Principles & Values
            </h3>
            <span className="text-xs text-stone-500 dark:text-stone-400">
              How I approach work, writing & advising
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CORE_VALUES.map((val) => (
              <div
                key={val.id}
                className="p-5 bg-white dark:bg-[#1A1224] border border-stone-200/80 dark:border-stone-800 rounded-xl shadow-2xs space-y-2 hover:border-stone-300 dark:hover:border-stone-700 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF5ED] dark:bg-[#251B2E] border border-[#E7DFD3] dark:border-stone-700/60 flex items-center justify-center">
                    {iconMap[val.icon] || <Sparkles className="w-4 h-4 text-[#3E2B4E] dark:text-[#E2C799]" />}
                  </div>
                  <h4 className="font-serif text-sm font-medium text-stone-900 dark:text-white">
                    {val.title}
                  </h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  );
};
