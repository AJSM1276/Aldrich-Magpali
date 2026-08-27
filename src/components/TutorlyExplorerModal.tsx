import React, { useState, useMemo } from 'react';
import { TUTORLY_OPPORTUNITIES } from '../data/portfolioData';
import { OpportunityResource } from '../types';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        id="tutorly-modal-container"
        className="relative w-full max-w-5xl h-[90vh] max-h-[850px] bg-white rounded-lg border border-gray-200 shadow-2xl flex flex-col overflow-hidden text-[#1A1A1A]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Header */}
        <div className="px-6 py-4 border-b border-[#E7DFD3] flex items-center justify-between bg-[#FAF7F2]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#241D2B] text-stone-200 flex items-center justify-center font-serif font-medium text-base shadow-2xs border border-stone-800">
              T
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif font-medium text-base tracking-tight text-stone-900">
                  Tutorly Opportunity Explorer
                </h3>
                <span className="px-2 py-0.5 text-[10px] font-medium uppercase rounded-md bg-[#FAF5ED] text-[#4A3B22] border border-[#E5DAC6]">
                  Live Database
                </span>
              </div>
              <p className="text-xs text-stone-500">
                Created by Aldrich Magpali to centralize fly-ins, scholarships, and FGLI opportunities.
              </p>
            </div>
          </div>

          <button
            id="tutorly-modal-close-btn"
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 sm:p-5 border-b border-stone-200 bg-white flex flex-col sm:flex-row gap-3 items-center justify-between">
          
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              id="tutorly-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search fly-ins, scholarships, schools..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-[#FAF7F2] border border-stone-200 text-stone-900 placeholder-stone-400 focus:outline-hidden focus:border-stone-400"
            />
          </div>

          {/* Category Chips & Bookmark Toggle */}
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#241D2B] text-white'
                    : 'bg-[#FAF7F2] border border-stone-200 text-stone-600 hover:text-stone-900'
                }`}
              >
                {cat}
              </button>
            ))}

            <button
              onClick={() => setShowSavedOnly(!showSavedOnly)}
              className={`flex items-center gap-1 px-3 py-1.5 text-xs rounded-lg font-medium transition-all border ${
                showSavedOnly
                  ? 'bg-stone-100 text-stone-900 border-stone-300'
                  : 'border-stone-200 text-stone-600 hover:text-stone-900 bg-white'
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
          <div className="md:col-span-5 border-r border-stone-200 overflow-y-auto p-4 space-y-3 bg-[#FAF7F2]">
            <div className="flex items-center justify-between px-1 text-xs text-stone-500 font-medium">
              <span>Showing {filteredOpportunities.length} opportunities</span>
              {showSavedOnly && <span className="text-stone-800 font-medium">Shortlist filter active</span>}
            </div>

            {filteredOpportunities.length === 0 ? (
              <div className="p-8 text-center text-stone-500 text-xs">
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
                        ? 'bg-white border-stone-800 shadow-2xs ring-1 ring-stone-800/10'
                        : 'bg-white border-stone-200/80 hover:border-stone-300'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="inline-block px-2 py-0.5 text-[10px] font-medium uppercase rounded-md bg-[#FAF7F2] text-stone-600 mb-1.5 border border-stone-200">
                          {item.category}
                        </span>
                        <h4 className="font-medium text-sm text-stone-900 leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-xs text-stone-500 font-medium">
                          {item.organization}
                        </p>
                      </div>

                      <button
                        onClick={(e) => toggleBookmark(item.id, e)}
                        className={`p-1.5 rounded-lg transition-colors ${
                          isSaved 
                            ? 'text-stone-900 bg-stone-100' 
                            : 'text-stone-400 hover:text-stone-900 hover:bg-stone-100'
                        }`}
                        title={isSaved ? 'Remove from saved' : 'Save opportunity'}
                      >
                        {isSaved ? <BookmarkCheck className="w-4 h-4 fill-stone-800 text-stone-800" /> : <Bookmark className="w-4 h-4" />}
                      </button>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-600">
                      <span className="font-medium text-stone-800 truncate max-w-[170px]">
                        {item.award.split('(')[0]}
                      </span>
                      <span className="font-mono text-stone-500">
                        {item.deadline}
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Detailed Opportunity Viewer Column */}
          <div className="hidden md:flex md:col-span-7 flex-col overflow-y-auto p-6 sm:p-8 bg-white">
            {activeDetail ? (
              <div className="space-y-6 max-w-xl">
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-stone-100 text-stone-700 border border-stone-200">
                      {activeDetail.category}
                    </span>
                    <span className="text-xs text-stone-300">•</span>
                    <span className="text-xs font-mono text-stone-500">
                      Deadline: {activeDetail.deadline}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-normal text-stone-900 leading-tight">
                    {activeDetail.title}
                  </h3>
                  <p className="text-sm font-medium text-stone-500 mt-1">
                    Hosted by {activeDetail.organization}
                  </p>
                </div>

                {/* Award & Funding Highlight Banner */}
                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E7DFD3] flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-stone-700 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-[10px] font-medium uppercase tracking-wider text-stone-600">
                      Funding & Award Level
                    </h5>
                    <p className="text-xs text-stone-900 font-medium mt-0.5">
                      {activeDetail.award}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h5 className="text-[10px] font-medium uppercase tracking-wider text-stone-500 mb-1.5">
                    Overview
                  </h5>
                  <p className="text-sm text-stone-600 leading-relaxed font-normal">
                    {activeDetail.description}
                  </p>
                </div>

                {/* Eligibility Criteria */}
                <div>
                  <h5 className="text-[10px] font-medium uppercase tracking-wider text-stone-500 mb-2">
                    Eligibility Checklist
                  </h5>
                  <ul className="space-y-2">
                    {activeDetail.eligibility.map((el, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-[#3E2B4E] shrink-0 mt-0.5" />
                        <span>{el}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Target Audience */}
                <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-stone-200 text-xs">
                  <span className="font-medium text-stone-900">Target Cohort: </span>
                  <span className="text-stone-600">{activeDetail.targetAudience}</span>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-stone-100 flex items-center gap-3">
                  <a
                    href={activeDetail.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-medium text-white bg-[#241D2B] hover:bg-[#382B42] shadow-2xs transition-colors"
                  >
                    <span>View Official Application</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={(e) => toggleBookmark(activeDetail.id, e)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-medium border border-stone-200 text-stone-800 hover:bg-stone-50 transition-colors"
                  >
                    {savedIds.includes(activeDetail.id) ? (
                      <>
                        <BookmarkCheck className="w-4 h-4 text-stone-800 fill-stone-800" />
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

              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-stone-400 text-xs">
                Select an opportunity on the left to view detailed criteria and application steps.
              </div>
            )}
          </div>

        </div>

        {/* Modal Bottom Footer */}
        <div className="px-6 py-3 bg-[#FAF7F2] border-t border-[#E7DFD3] text-[11px] text-stone-500 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Info className="w-3.5 h-3.5 text-stone-600" />
            <span>Tutorly is an educational project engineered by Aldrich Magpali to empower FGLI students.</span>
          </div>
          <span className="font-mono text-stone-500">Williams '30 Access Initiative</span>
        </div>

      </div>
    </div>
  );
};
