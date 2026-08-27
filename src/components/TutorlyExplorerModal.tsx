import React, { useState, useMemo } from 'react';
import { TUTORLY_OPPORTUNITIES } from '../data/portfolioData';
import { OpportunityResource } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Bookmark, 
  BookmarkCheck, 
  ExternalLink, 
  X, 
  DollarSign, 
  CheckCircle2, 
  Info
} from 'lucide-react';

interface TutorlyExplorerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TutorlyExplorerModal: React.FC<TutorlyExplorerModalProps> = ({
  isOpen,
  onClose
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [savedIds, setSavedIds] = useState<string[]>(['williams-wow', 'questbridge-ncm']);
  const [activeDetail, setActiveDetail] = useState<OpportunityResource | null>(TUTORLY_OPPORTUNITIES[0]);
  const [showSavedOnly, setShowSavedOnly] = useState(false);

  const categories = ['All', 'Fly-in Program', 'Scholarship', 'Summer Research'];

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredOpportunities = useMemo(() => {
    return TUTORLY_OPPORTUNITIES.filter(item => {
      const matchesSearch = 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.targetAudience.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === 'All' || item.category === selectedCategory;

      const matchesSaved = !showSavedOnly || savedIds.includes(item.id);

      return matchesSearch && matchesCategory && matchesSaved;
    });
  }, [searchQuery, selectedCategory, showSavedOnly, savedIds]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        id="tutorly-modal-container"
        className="relative w-full max-w-5xl h-[90vh] max-h-[850px] bg-white dark:bg-[#150E20] rounded-xl border border-gray-200 dark:border-stone-800 shadow-2xl flex flex-col overflow-hidden text-[#1A1A1A] dark:text-stone-100 transition-colors duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Header */}
        <div className="px-6 py-4 border-b border-[#E7DFD3] dark:border-stone-800 flex items-center justify-between bg-[#FAF7F2] dark:bg-[#1A1224] transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#241D2B] dark:bg-[#3E2B4E] text-stone-200 flex items-center justify-center font-serif font-medium text-base shadow-2xs border border-stone-800 dark:border-stone-700">
              T
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif font-medium text-base tracking-tight text-stone-900 dark:text-white">
                  Tutorly Opportunity Explorer
                </h3>
                <span className="px-2 py-0.5 text-[10px] font-medium uppercase rounded-md bg-[#FAF5ED] dark:bg-[#2A1D33] text-[#4A3B22] dark:text-[#E2C799] border border-[#E5DAC6] dark:border-[#4E3862]">
                  Live Database
                </span>
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Created by Aldrich Magpali to centralize fly-ins, scholarships, and FGLI opportunities.
              </p>
            </div>
          </div>

          <button
            id="tutorly-modal-close-btn"
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-900 dark:hover:text-white rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 sm:p-5 border-b border-stone-200 dark:border-stone-800 bg-white dark:bg-[#150E20] flex flex-col sm:flex-row gap-3 items-center justify-between transition-colors">
          
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              id="tutorly-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search fly-ins, scholarships, schools..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-[#FAF7F2] dark:bg-[#1F162B] border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-white placeholder-stone-400 dark:placeholder-stone-500 focus:outline-hidden focus:border-stone-400 dark:focus:border-stone-500 transition-colors"
            />
          </div>

          {/* Category Chips & Bookmark Toggle */}
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#241D2B] dark:bg-[#3E2B4E] text-white'
                    : 'bg-[#FAF7F2] dark:bg-[#1F162B] border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}

            <button
              onClick={() => setShowSavedOnly(!showSavedOnly)}
              className={`flex items-center gap-1 px-3 py-1.5 text-xs rounded-lg font-medium transition-all border cursor-pointer ${
                showSavedOnly
                  ? 'bg-stone-100 dark:bg-[#281C37] text-stone-900 dark:text-white border-stone-300 dark:border-stone-600'
                  : 'border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white bg-white dark:bg-[#150E20]'
              }`}
            >
              <Bookmark className="w-3 h-3" />
              <span>Saved ({savedIds.length})</span>
            </button>
          </div>

        </div>

        {/* Content Body: Split View (List + Details) */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden">
          
          {/* Opportunities List Column */}
          <div className="md:col-span-5 border-r border-stone-200 dark:border-stone-800 overflow-y-auto p-4 space-y-3 bg-[#FAF7F2] dark:bg-[#1A1224] transition-colors">
            <div className="flex items-center justify-between px-1 text-xs text-stone-500 dark:text-stone-400 font-medium">
              <span>Showing {filteredOpportunities.length} opportunities</span>
              {showSavedOnly && <span className="text-stone-800 dark:text-stone-200 font-medium">Shortlist filter active</span>}
            </div>

            {filteredOpportunities.length === 0 ? (
              <div className="p-8 text-center text-stone-500 dark:text-stone-400 text-xs">
                No matching opportunities found. Try adjusting your search or filters.
              </div>
            ) : (
              filteredOpportunities.map((item) => {
                const isSelected = activeDetail?.id === item.id;
                const isSaved = savedIds.includes(item.id);

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveDetail(item)}
                    className={`p-4 rounded-xl cursor-pointer transition-all border ${
                      isSelected
                        ? 'bg-white dark:bg-[#281C37] border-stone-800 dark:border-stone-600 shadow-2xs ring-1 ring-stone-800/10'
                        : 'bg-white dark:bg-[#1F162B] border-stone-200/80 dark:border-stone-800/80 hover:border-stone-300 dark:hover:border-stone-700'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="inline-block px-2 py-0.5 text-[10px] font-medium uppercase rounded-md bg-[#FAF7F2] dark:bg-[#2B1E3B] text-stone-600 dark:text-[#E2C799] mb-1.5 border border-stone-200 dark:border-stone-700">
                          {item.category}
                        </span>
                        <h4 className="font-medium text-sm text-stone-900 dark:text-white leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-xs text-stone-500 dark:text-stone-400 font-medium">
                          {item.organization}
                        </p>
                      </div>

                      <button
                        onClick={(e) => toggleBookmark(item.id, e)}
                        className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                          isSaved 
                            ? 'text-stone-900 dark:text-white bg-stone-100 dark:bg-stone-800' 
                            : 'text-stone-400 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800'
                        }`}
                        title={isSaved ? 'Remove from saved' : 'Save opportunity'}
                      >
                        {isSaved ? <BookmarkCheck className="w-4 h-4 fill-stone-800 dark:fill-stone-200 text-stone-800 dark:text-stone-200" /> : <Bookmark className="w-4 h-4" />}
                      </button>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-[11px] text-stone-600 dark:text-stone-400">
                      <span className="font-medium text-stone-800 dark:text-stone-300 truncate max-w-[170px]">
                        {item.award.split('(')[0]}
                      </span>
                      <span className="font-mono text-stone-500 dark:text-stone-400">
                        {item.deadline}
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Detailed Opportunity Viewer Column */}
          <div className="hidden md:flex md:col-span-7 flex-col overflow-y-auto p-6 sm:p-8 bg-white dark:bg-[#120B1C] transition-colors">
            {activeDetail ? (
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeDetail.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="space-y-6 max-w-xl"
                >
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700">
                        {activeDetail.category}
                      </span>
                      <span className="text-xs text-stone-300 dark:text-stone-600">•</span>
                      <span className="text-xs font-mono text-stone-500 dark:text-stone-400">
                        Deadline: {activeDetail.deadline}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-normal text-stone-900 dark:text-white leading-tight">
                      {activeDetail.title}
                    </h3>
                    <p className="text-sm font-medium text-stone-500 dark:text-stone-400 mt-1">
                      Hosted by {activeDetail.organization}
                    </p>
                  </div>

                  {/* Award & Funding Highlight Banner */}
                  <div className="p-4 rounded-xl bg-[#FAF7F2] dark:bg-[#1A1224] border border-[#E7DFD3] dark:border-stone-800 flex items-start gap-3 transition-colors">
                    <DollarSign className="w-5 h-5 text-stone-700 dark:text-[#E2C799] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-[10px] font-medium uppercase tracking-wider text-stone-600 dark:text-stone-400">
                        Funding & Award Level
                      </h5>
                      <p className="text-xs text-stone-900 dark:text-white font-medium mt-0.5">
                        {activeDetail.award}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h5 className="text-[10px] font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1.5">
                      Overview
                    </h5>
                    <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-normal">
                      {activeDetail.description}
                    </p>
                  </div>

                  {/* Eligibility Criteria */}
                  <div>
                    <h5 className="text-[10px] font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
                      Eligibility Checklist
                    </h5>
                    <ul className="space-y-2">
                      {activeDetail.eligibility.map((el, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-stone-700 dark:text-stone-300">
                          <CheckCircle2 className="w-4 h-4 text-[#3E2B4E] dark:text-[#E2C799] shrink-0 mt-0.5" />
                          <span>{el}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Target Audience */}
                  <div className="p-3.5 rounded-xl bg-[#FAF7F2] dark:bg-[#1A1224] border border-stone-200 dark:border-stone-800 text-xs transition-colors">
                    <span className="font-medium text-stone-900 dark:text-white">Target Cohort: </span>
                    <span className="text-stone-600 dark:text-stone-300">{activeDetail.targetAudience}</span>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center gap-3">
                    <a
                      href={activeDetail.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-medium text-white bg-[#241D2B] dark:bg-[#3E2B4E] hover:bg-[#382B42] dark:hover:bg-[#4E3862] shadow-2xs transition-colors"
                    >
                      <span>View Official Application</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={(e) => toggleBookmark(activeDetail.id, e)}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-medium border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors cursor-pointer"
                    >
                      {savedIds.includes(activeDetail.id) ? (
                        <>
                          <BookmarkCheck className="w-4 h-4 text-stone-800 dark:text-stone-200 fill-stone-800 dark:fill-stone-200" />
                          <span>Saved to Shortlist</span>
                        </>
                      ) : (
                        <>
                          <Bookmark className="w-4 h-4 text-stone-400" />
                          <span>Save Opportunity</span>
                        </>
                      )}
                    </button>
                  </div>

                </motion.div>
              </AnimatePresence>
            ) : (
              <div className="h-full flex items-center justify-center text-stone-400 dark:text-stone-500 text-xs">
                Select an opportunity on the left to view detailed criteria and application steps.
              </div>
            )}
          </div>

        </div>

        {/* Modal Bottom Footer */}
        <div className="px-6 py-3 bg-[#FAF7F2] dark:bg-[#1A1224] border-t border-[#E7DFD3] dark:border-stone-800 text-[11px] text-stone-500 dark:text-stone-400 flex items-center justify-between transition-colors">
          <div className="flex items-center gap-2">
            <Info className="w-3.5 h-3.5 text-stone-600 dark:text-stone-400" />
            <span>Tutorly is an educational project engineered by Aldrich Magpali to empower FGLI students.</span>
          </div>
          <span className="font-mono text-stone-500 dark:text-stone-400">Williams '30 Access Initiative</span>
        </div>

      </div>
    </div>
  );
};

