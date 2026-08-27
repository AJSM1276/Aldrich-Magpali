import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import confetti from 'canvas-confetti';
import { motion } from 'motion/react';
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
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800"
  );
  const [showImageModal, setShowImageModal] = useState(false);
  const [customUrl, setCustomUrl] = useState('');

  const triggerMatchConfetti = () => {
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#3C225D', '#9333EA', '#F59E0B', '#E9D5FF']
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
      className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden bg-[#FAF9F6]"
    >
      {/* Subtle ambient light wash */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-amber-50/50 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Clean narrative */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="md:col-span-7 space-y-5 text-left"
          >
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#3C225D] text-white text-[11px] font-semibold tracking-wider uppercase rounded-full shadow-2xs">
                Williams College '30
              </span>

              <button
                onClick={triggerMatchConfetti}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-50 hover:bg-purple-100 text-[#3C225D] text-[11px] font-semibold rounded-full border border-purple-200 transition-colors cursor-pointer"
                title="Celebrate QuestBridge Match"
              >
                <Award className="w-3.5 h-3.5 text-[#3C225D]" />
                <span>QuestBridge Scholar</span>
                <Sparkles className="w-3 h-3 text-amber-500" />
              </button>

              <span className="inline-flex items-center gap-1 px-2.5 py-1 text-gray-500 text-xs bg-white border border-gray-200/80 rounded-full">
                <MapPin className="w-3 h-3 text-purple-600" />
                <span>Massachusetts</span>
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] font-normal tracking-tight leading-tight">
                Hi, I'm <span className="text-[#3C225D] font-medium">{PERSONAL_INFO.shortName}</span>.
              </h1>
              <p className="font-serif text-lg sm:text-xl text-gray-700 font-light leading-relaxed">
                Opening selective college doors for underrepresented students.
              </p>
            </div>

            {/* Narrative */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Incoming first-year at <strong className="text-gray-900 font-semibold">Williams College</strong>. After navigating financial aid and elite admissions as a low-income first-generation student in Prince George's County, I now lead workshops, admissions playbooks, and 1-on-1 mentorship so no student has to walk this road alone.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                id="hero-story-cta"
                href="#story"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1A1A1A] hover:bg-[#3C225D] text-white text-xs sm:text-sm font-medium rounded-lg shadow-xs transition-all hover:scale-102"
              >
                <span>Read Story</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="hero-blog-cta"
                href="#blog"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white hover:bg-gray-50 text-gray-800 text-xs sm:text-sm font-medium border border-gray-200 rounded-lg shadow-2xs transition-colors"
              >
                <span>Field Notes</span>
              </a>

              <button
                id="hero-guide-cta"
                onClick={onOpenQuestBridgeGuide}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-[#3C225D] hover:text-[#2F1A4A] transition-colors cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#3C225D]" />
                <span>Free QB Guide</span>
              </button>
            </div>

          </motion.div>

          {/* Right Column: Clean Portrait Frame */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="md:col-span-5 flex flex-col items-center md:items-end justify-center"
          >
            
            <TiltCard 
              id="hero-portrait-card"
              maxTilt={6} 
              scale={1.01}
              glareOpacity={0.12}
              className="w-full max-w-[290px] sm:max-w-[320px] rounded-2xl bg-white p-3 shadow-md border border-purple-100/90 group"
            >
              {/* Photo */}
              <div className="relative aspect-4/5 w-full rounded-xl overflow-hidden bg-gray-100">
                <img
                  src={currentImage}
                  alt="Aldrich Jad S. Magpali"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-2.5 left-3 right-3 text-white pointer-events-none">
                  <div className="text-[10px] uppercase tracking-wider font-semibold text-purple-200">
                    Williams College '30
                  </div>
                  <div className="text-sm font-serif font-medium text-white">
                    Aldrich Jad S. Magpali
                  </div>
                </div>

                <button
                  id="hero-change-photo-btn"
                  onClick={() => setShowImageModal(true)}
                  className="absolute top-2.5 right-2.5 p-1.5 bg-white/90 hover:bg-white text-gray-700 rounded-full shadow-xs backdrop-blur-xs transition-opacity opacity-70 group-hover:opacity-100 text-[10px] flex items-center gap-1 cursor-pointer"
                  title="Change Photo"
                >
                  <Camera className="w-3 h-3 text-[#3C225D]" />
                </button>
              </div>

              {/* Card Footer */}
              <div className="pt-2 px-1 flex items-center justify-between text-xs text-gray-500">
                <span>Eleanor Roosevelt HS '26</span>
                <span className="text-[#3C225D] font-semibold text-[11px]">QuestBridge '25</span>
              </div>
            </TiltCard>

          </motion.div>

        </div>

        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="mt-12 pt-6 border-t border-gray-200/70 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-3.5 bg-white rounded-xl border border-gray-100 shadow-2xs flex flex-col justify-between"
            >
              <div className="text-[10px] uppercase tracking-wider font-semibold text-gray-400">
                {stat.label}
              </div>
              <div className="text-xl font-serif font-medium text-[#1A1A1A] my-0.5">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 font-normal">
                {stat.detail}
              </div>
            </div>
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
