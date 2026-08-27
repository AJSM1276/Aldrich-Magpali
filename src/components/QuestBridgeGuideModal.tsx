import React, { useState } from 'react';
import { QUESTBRIDGE_PLAYBOOK } from '../data/portfolioData';
import { 
  BookOpen, 
  X, 
  CheckCircle2, 
  ChevronRight, 
  Sparkles, 
  GraduationCap, 
  HelpCircle, 
  Download,
  Share2,
  Check,
  Calendar,
  AlertTriangle,
  Lightbulb
} from 'lucide-react';

interface QuestBridgeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuestBridgeGuideModal: React.FC<QuestBridgeGuideModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeChapterIdx, setActiveChapterIdx] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen) return null;

  const currentChapter = QUESTBRIDGE_PLAYBOOK[activeChapterIdx];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        id="questbridge-modal-container"
        className="relative w-full max-w-5xl h-[90vh] max-h-[850px] bg-white rounded-lg border border-gray-200 shadow-2xl flex flex-col overflow-hidden text-[#1A1A1A]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-[#E7DFD3] flex items-center justify-between bg-[#FAF7F2]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#241D2B] text-stone-200 flex items-center justify-center font-serif font-medium text-base shadow-2xs border border-stone-800">
              QB
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif font-medium text-base tracking-tight text-stone-900">
                  The QuestBridge Match Playbook
                </h3>
                <span className="px-2 py-0.5 text-[10px] font-medium uppercase rounded-md bg-[#FAF5ED] text-[#4A3B22] border border-[#E5DAC6]">
                  Comprehensive Guide
                </span>
              </div>
              <p className="text-xs text-stone-600">
                Authored by Aldrich Magpali • Williams College '30 QuestBridge Match Recipient
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="p-2 text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors text-xs flex items-center gap-1 cursor-pointer"
              title="Share Guide Link"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-700" /> : <Share2 className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Main Body */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden">
          
          {/* Chapter Navigation Sidebar */}
          <div className="md:col-span-4 border-r border-[#E7DFD3] overflow-y-auto p-4 space-y-2 bg-[#FAF7F2]">
            <div className="text-[10px] font-medium uppercase tracking-wider text-stone-500 px-2 mb-2">
              Table of Contents
            </div>

            {QUESTBRIDGE_PLAYBOOK.map((chapter, idx) => {
              const isSelected = activeChapterIdx === idx;
              return (
                <button
                  key={chapter.id}
                  onClick={() => setActiveChapterIdx(idx)}
                  className={`w-full text-left p-3.5 rounded-xl transition-all border flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-white border-stone-800 text-stone-900 shadow-2xs font-medium'
                      : 'bg-white/80 border-stone-200/70 text-stone-700 hover:border-stone-300 hover:bg-white'
                  }`}
                >
                  <div>
                    <span className="text-[10px] font-medium uppercase text-stone-500 block">
                      Chapter {idx + 1}
                    </span>
                    <h4 className="font-medium text-xs sm:text-sm mt-0.5 leading-snug">
                      {chapter.title}
                    </h4>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-stone-900 translate-x-0.5' : 'text-stone-300'}`} />
                </button>
              );
            })}
          </div>

          {/* Chapter Content Reader */}
          <div className="md:col-span-8 overflow-y-auto p-6 sm:p-10 bg-white space-y-6">
            
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 text-[10px] font-medium uppercase rounded-full bg-stone-100 text-stone-700 border border-stone-200">
                  Chapter {activeChapterIdx + 1} of {QUESTBRIDGE_PLAYBOOK.length}
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 leading-tight">
                {currentChapter.title}
              </h2>
              <p className="text-sm font-medium text-stone-600 mt-1">
                {currentChapter.subtitle}
              </p>
            </div>

            {/* Key Strategic Tips Box */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#FAF7F2] border border-[#E7DFD3]">
              <h4 className="text-[10px] font-medium uppercase tracking-wider text-stone-600 mb-2.5 flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5 text-[#876834]" />
                <span>Tactical Strategy Rules</span>
              </h4>
              <ul className="space-y-2">
                {currentChapter.keyTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-stone-800">
                    <CheckCircle2 className="w-4 h-4 text-[#3E2B4E] shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Chapter Body Content */}
            <div className="space-y-4 text-sm text-stone-700 leading-relaxed font-normal">
              {currentChapter.content.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            {/* Bottom Nav Prev / Next */}
            <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
              <button
                disabled={activeChapterIdx === 0}
                onClick={() => setActiveChapterIdx(prev => Math.max(0, prev - 1))}
                className="px-4 py-2 text-xs font-medium border border-stone-200 rounded-lg disabled:opacity-30 hover:bg-stone-50 transition-colors cursor-pointer text-stone-700"
              >
                Previous Chapter
              </button>

              <span className="text-xs font-mono text-stone-400">
                {activeChapterIdx + 1} / {QUESTBRIDGE_PLAYBOOK.length}
              </span>

              <button
                disabled={activeChapterIdx === QUESTBRIDGE_PLAYBOOK.length - 1}
                onClick={() => setActiveChapterIdx(prev => Math.min(QUESTBRIDGE_PLAYBOOK.length - 1, prev + 1))}
                className="px-4 py-2 text-xs font-medium bg-[#241D2B] hover:bg-[#382B42] text-white rounded-lg disabled:opacity-30 transition-colors shadow-2xs cursor-pointer"
              >
                Next Chapter
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
