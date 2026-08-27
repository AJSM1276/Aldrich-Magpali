import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import confetti from 'canvas-confetti';
import { motion } from 'motion/react';
import { 
  staggerContainer, 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight, 
  fadeInScale 
} from '../utils/motionVariants';
import { 
  ArrowRight, 
  BookOpen, 
  MapPin, 
  Sparkles, 
  Award,
  Camera,
  Upload,
  Check,
  X
} from 'lucide-react';

interface HeroSectionProps {
  onOpenTutorly: () => void;
  onOpenQuestBridgeGuide: () => void;
  onExploreMission: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenQuestBridgeGuide,
}) => {
  const [currentImage, setCurrentImage] = useState<string>(
    PERSONAL_INFO.defaultAvatarUrl || "/aldrich_portrait.jpg"
  );
  const [showImageModal, setShowImageModal] = useState(false);
  const [customUrl, setCustomUrl] = useState('');

  const triggerMatchConfetti = () => {
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#3E2B4E', '#876834', '#D4C3A3', '#EAE2F2', '#A99B87']
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCurrentImage(event.target.result as string);
          setShowImageModal(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApplyUrl = () => {
    if (customUrl.trim()) {
      setCurrentImage(customUrl.trim());
      setShowImageModal(false);
      setCustomUrl('');
    }
  };

  return (
    <motion.section 
      id="hero-section" 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden bg-[#FAF8F5]"
    >
      {/* Subtle ambient light wash */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-amber-50/40 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Clean narrative with staggered child animations */}
          <motion.div 
            variants={staggerContainer(0.1, 0.05)}
            initial="hidden"
            animate="visible"
            className="md:col-span-7 space-y-5 text-left"
          >
            
            {/* Top Badges */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F2EDF7] text-[#3A274A] text-[11px] font-semibold tracking-wide rounded-full border border-[#DDD0E8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3A274A]"></span>
                Williams College '30
              </span>

              <button
                onClick={triggerMatchConfetti}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F9F5EE] hover:bg-[#F3EDE2] text-[#6B5327] text-[11px] font-semibold rounded-full border border-[#E4D9C5] transition-colors cursor-pointer"
                title="Celebrate QuestBridge Match"
              >
                <Award className="w-3.5 h-3.5 text-[#876834]" />
                <span>QuestBridge Scholar</span>
                <Sparkles className="w-3 h-3 text-[#876834]" />
              </button>

              <span className="inline-flex items-center gap-1 px-2.5 py-1 text-stone-600 text-xs bg-white border border-stone-200 rounded-full">
                <MapPin className="w-3 h-3 text-stone-400" />
                <span>Massachusetts</span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeInUp} className="space-y-2">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-900 font-normal tracking-tight leading-tight">
                Hi, I'm <span className="text-[#3A274A] font-medium">{PERSONAL_INFO.shortName}</span>.
              </h1>
              <p className="font-serif text-lg sm:text-xl text-stone-600 font-light leading-relaxed">
                Opening selective college doors for underrepresented students.
              </p>
            </motion.div>

            {/* Narrative */}
            <motion.p variants={fadeInUp} className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Incoming first-year at <strong className="text-stone-800 font-semibold">Williams College</strong>. After navigating financial aid and elite admissions as a low-income first-generation student in Prince George's County, I now lead workshops, admissions playbooks, and 1-on-1 mentorship so no student has to walk this road alone.
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={fadeInUp} className="pt-2 flex flex-wrap items-center gap-3">
              <a
                id="hero-story-cta"
                href="#story"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#241D2B] hover:bg-[#3A2D44] text-white text-xs sm:text-sm font-medium rounded-lg shadow-2xs transition-all hover:scale-101"
              >
                <span>Read Story</span>
                <ArrowRight className="w-4 h-4 text-stone-300" />
              </a>

              <a
                id="hero-blog-cta"
                href="#blog"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white hover:bg-stone-50 text-stone-700 text-xs sm:text-sm font-medium border border-stone-200 rounded-lg shadow-2xs transition-colors"
              >
                <span>Field Notes</span>
              </a>

              <button
                id="hero-guide-cta"
                onClick={onOpenQuestBridgeGuide}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#3E2B4E]" />
                <span>Free QB Guide</span>
              </button>
            </motion.div>

          </motion.div>

          {/* Right Column: Clean Portrait Frame */}
          <motion.div 
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="md:col-span-5 flex flex-col items-center md:items-end justify-center"
          >
            
            <TiltCard 
              id="hero-portrait-card"
              maxTilt={4} 
              scale={1.01}
              glareOpacity={0.08}
              className="w-full max-w-[290px] sm:max-w-[320px] rounded-2xl bg-white p-3 shadow-sm border border-stone-200/80 group"
            >
              {/* Photo */}
              <div className="relative aspect-4/5 w-full rounded-xl overflow-hidden bg-stone-100">
                <img
                  src={currentImage}
                  alt="Aldrich Jad S. Magpali"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-102"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-2.5 left-3 right-3 text-white pointer-events-none">
                  <div className="text-[10px] uppercase tracking-wider font-semibold text-[#DCC9A8]">
                    Williams College '30
                  </div>
                  <div className="text-sm font-serif font-medium text-white">
                    Aldrich Jad S. Magpali
                  </div>
                </div>

                <button
                  id="hero-change-photo-btn"
                  onClick={() => setShowImageModal(true)}
                  className="absolute top-2.5 right-2.5 p-1.5 bg-white/90 hover:bg-white text-stone-700 rounded-full shadow-2xs backdrop-blur-xs transition-opacity opacity-70 group-hover:opacity-100 text-[10px] flex items-center gap-1 cursor-pointer"
                  title="Change Photo"
                >
                  <Camera className="w-3 h-3 text-stone-600" />
                </button>
              </div>

              {/* Card Footer */}
              <div className="pt-2 px-1 flex items-center justify-between text-xs text-stone-500">
                <span>Eleanor Roosevelt HS '26</span>
                <span className="text-[#3A274A] font-medium text-[11px]">QuestBridge '25</span>
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
          className="mt-12 pt-6 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="p-3.5 bg-white rounded-xl border border-stone-200/70 shadow-2xs flex flex-col justify-between"
            >
              <div className="text-[10px] uppercase tracking-wider font-semibold text-stone-400">
                {stat.label}
              </div>
              <div className="text-xl font-serif font-medium text-stone-900 my-0.5">
                {stat.value}
              </div>
              <div className="text-xs text-stone-500 font-normal">
                {stat.detail}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Clean, Uncluttered Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-sm w-full p-5 shadow-xl border border-gray-200 space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                Customize Portrait Photo
              </h3>
              <button
                onClick={() => setShowImageModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              <label className="flex flex-col items-center justify-center border border-dashed border-gray-300 hover:border-[#3C225D] p-5 rounded-xl cursor-pointer bg-gray-50/60 hover:bg-purple-50/50 transition-colors">
                <Upload className="w-5 h-5 text-[#3C225D] mb-1.5" />
                <span className="text-xs text-gray-700 font-medium">Choose file from device</span>
                <span className="text-[10px] text-gray-400 mt-0.5">PNG, JPG or WebP</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>

              <div className="space-y-1.5 pt-1">
                <label className="text-[11px] font-semibold text-gray-600 block">Or enter image URL</label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    placeholder="https://example.com/photo.jpg"
                    value={customUrl}
                    onChange={(e) => setCustomUrl(e.target.value)}
                    className="flex-1 px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#3C225D] focus:border-[#3C225D]"
                  />
                  <button
                    onClick={handleApplyUrl}
                    disabled={!customUrl.trim()}
                    className="px-3.5 py-2 bg-[#3C225D] hover:bg-[#2F1A4A] text-white text-xs font-semibold rounded-lg transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </motion.section>
  );
};
