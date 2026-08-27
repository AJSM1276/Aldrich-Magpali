import React, { useState, useEffect } from 'react';
import { BlogPost } from '../types';
import { BLOG_POSTS_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Share2, 
  Bookmark, 
  CheckCircle2, 
  Sparkles, 
  Copy, 
  Check, 
  ChevronRight, 
  Quote, 
  Info, 
  AlertCircle, 
  BookOpen, 
  HelpCircle,
  BarChart2,
  Sliders,
  Send,
  MessageSquare,
  Award
} from 'lucide-react';

interface BlogPostPageProps {
  post: BlogPost;
  onBack: () => void;
  onSelectPost: (post: BlogPost) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({
  post,
  onBack,
  onSelectPost
}) => {
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Interactive checklist state
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // Interactive Agency Analyzer state
  const [analyzerInput, setAnalyzerInput] = useState('');
  const [analyzerResult, setAnalyzerResult] = useState<{ score: number; feedback: string } | null>(null);

  // Interactive Spaced Repetition simulator state
  const [simInterval, setSimInterval] = useState<number>(3);

  // Reflection notes state
  const [reflectionNote, setReflectionNote] = useState('');
  const [noteSaved, setNoteSaved] = useState(false);

  // Copy template state
  const [templateCopied, setTemplateCopied] = useState(false);

  // Scroll listener for reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.scrollTo({ top: 0, behavior: 'instant' });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post.id]);

  // Load saved notes for this post
  useEffect(() => {
    const saved = localStorage.getItem(`blog_note_${post.id}`);
    if (saved) setReflectionNote(saved);
  }, [post.id]);

  const handleShare = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleToggleChecklist = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSaveNote = () => {
    localStorage.setItem(`blog_note_${post.id}`, reflectionNote);
    setNoteSaved(true);
    setTimeout(() => setNoteSaved(false), 2500);
  };

  const handleAnalyzeExcerpt = () => {
    if (!analyzerInput.trim()) return;
    const lower = analyzerInput.toLowerCase();
    let score = 50;
    let feedback = "Balanced draft with good potential.";

    if (lower.includes('built') || lower.includes('designed') || lower.includes('coded') || lower.includes('researched') || lower.includes('founded') || lower.includes('initiated') || lower.includes('curious')) {
      score += 35;
      feedback = "Strong intellectual agency detected! Highlights active curiosity, self-directed exploration, and forward momentum.";
    }
    if (lower.includes('misery') || lower.includes('pain') || lower.includes('suffered') || lower.includes('poor') || lower.includes('forced to')) {
      if (score > 70) {
        feedback = "Great context and resilience, but ensure the hardship doesn't overshadow what you accomplished in response.";
      } else {
        score -= 20;
        feedback = "Noticeable passive hardship framing. Rebalance with the 70/30 Rule: What did you build, read, or organize despite this situation?";
      }
    }
    setAnalyzerResult({ score: Math.max(20, Math.min(98, score)), feedback });
  };

  // Find related posts
  const relatedPosts = BLOG_POSTS_DATA.filter(p => p.id !== post.id && (post.relatedPostIds?.includes(p.id) || p.category === post.category)).slice(0, 2);

  // Calculate checklist progress
  const totalChecklistItems = post.interactiveWidget?.data?.items?.length || 0;
  const completedChecklistItems = Object.values(checkedItems).filter(Boolean).length;
  const checklistScore = totalChecklistItems > 0 ? Math.round((completedChecklistItems / totalChecklistItems) * 100) : 0;

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] pb-24 font-sans selection:bg-purple-100 selection:text-[#3C225D]">
      
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200">
        <div 
          className="h-full bg-[#3C225D] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Top Sticky Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-gray-200/80 px-4 sm:px-6 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            id="blog-back-btn"
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-gray-700 hover:text-[#3C225D] hover:bg-purple-50/70 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setBookmarked(!bookmarked)}
              className={`p-2 rounded-lg text-xs border transition-colors cursor-pointer ${
                bookmarked 
                  ? 'bg-purple-100 text-[#3C225D] border-purple-200' 
                  : 'bg-white text-gray-600 border-gray-200 hover:border-purple-200'
              }`}
              title="Bookmark for later"
            >
              <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-[#3C225D]' : ''}`} />
            </button>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-gray-50 text-gray-700 text-xs font-medium rounded-lg border border-gray-200 transition-colors cursor-pointer"
              title="Copy share link"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-gray-500" />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Article Container */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        
        {/* Article Meta Header */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="font-semibold text-[#3C225D] bg-purple-100/80 px-2.5 py-1 rounded-md">
              {post.category}
            </span>
            <span className="text-gray-400">•</span>
            <span className="inline-flex items-center gap-1 text-gray-500">
              <Calendar className="w-3.5 h-3.5 text-gray-400" />
              {post.date}
            </span>
            <span className="text-gray-400">•</span>
            <span className="inline-flex items-center gap-1 text-gray-500">
              <Clock className="w-3.5 h-3.5 text-gray-400" />
              {post.readTime}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-950 font-normal leading-[1.18] tracking-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            {post.subtitle}
          </p>

          {/* Author Card */}
          <div className="pt-4 border-t border-gray-200/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={PERSONAL_INFO.defaultAvatarUrl}
                alt={post.author}
                referrerPolicy="no-referrer"
                className="w-11 h-11 rounded-full object-cover border border-purple-200"
              />
              <div>
                <div className="font-semibold text-sm text-gray-900">
                  {post.author}
                </div>
                <div className="text-xs text-[#3C225D] font-medium flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  {post.authorRole}
                </div>
              </div>
            </div>

            <div className="hidden sm:block text-right text-xs text-gray-500">
              <span>Published for FGLI Scholars</span>
              <div className="text-[11px] text-gray-400">Greenbelt & Williamstown</div>
            </div>
          </div>
        </div>

        {/* High-Resolution Cover Image */}
        {post.coverImage && (
          <div className="mb-10 rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-100">
            <img
              src={post.coverImage}
              alt={post.title}
              referrerPolicy="no-referrer"
              className="w-full h-72 sm:h-96 object-cover object-center"
            />
            <div className="px-4 py-2 bg-white border-t border-gray-100 text-[11px] text-gray-500 italic flex items-center justify-between">
              <span>Photo context: Higher education equity & strategic admissions</span>
              <span className="text-[#3C225D] font-medium">Field Dispatch</span>
            </div>
          </div>
        )}

        {/* Quick Table of Contents / Key Highlights */}
        {post.sections && post.sections.length > 0 && (
          <div className="mb-10 p-5 bg-white rounded-xl border border-gray-200/90 shadow-2xs">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2.5">
              In This Article
            </span>
            <ul className="space-y-1.5 text-xs sm:text-sm text-gray-700 font-medium">
              {post.sections.map((sec, idx) => (
                <li key={idx} className="flex items-center gap-2 hover:text-[#3C225D] transition-colors">
                  <span className="w-5 h-5 rounded-full bg-purple-50 text-[#3C225D] font-bold text-[10px] flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span>{sec.heading || `Section ${idx + 1}`}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Main Article Prose Content */}
        <div className="space-y-8 text-gray-800 text-base leading-[1.75]">
          
          {/* Introductory Summary Callout */}
          <div className="p-5 bg-purple-50/60 rounded-xl border border-purple-100 text-gray-800 text-sm sm:text-base leading-relaxed space-y-2">
            <div className="font-semibold text-xs uppercase tracking-wider text-[#3C225D] flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5" /> Executive Summary
            </div>
            <p className="italic text-gray-700">{post.summary}</p>
          </div>

          {/* Render Sections */}
          {post.sections?.map((section, sIdx) => (
            <section key={sIdx} className="space-y-4 pt-2">
              {section.heading && (
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 font-medium tracking-tight pt-3 border-t border-gray-200/60">
                  {section.heading}
                </h2>
              )}

              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {para}
                </p>
              ))}

              {/* Callout Box */}
              {section.callout && (
                <div className={`p-4 sm:p-5 rounded-xl border my-4 ${
                  section.callout.type === 'warning'
                    ? 'bg-amber-50/70 border-amber-200 text-amber-950'
                    : section.callout.type === 'stat'
                    ? 'bg-blue-50/70 border-blue-200 text-blue-950'
                    : section.callout.type === 'quote'
                    ? 'bg-purple-50/70 border-purple-200 text-[#2F1A4A]'
                    : 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                }`}>
                  <div className="flex items-start gap-3">
                    {section.callout.type === 'warning' ? (
                      <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    ) : section.callout.type === 'quote' ? (
                      <Quote className="w-5 h-5 text-[#3C225D] shrink-0 mt-0.5" />
                    ) : (
                      <Sparkles className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    )}
                    <div className="space-y-1">
                      {section.callout.title && (
                        <div className="font-bold text-xs uppercase tracking-wider">
                          {section.callout.title}
                        </div>
                      )}
                      <p className="text-xs sm:text-sm font-medium leading-relaxed">
                        "{section.callout.text}"
                      </p>
                      {section.callout.authorOrSource && (
                        <div className="text-[11px] text-gray-500 font-semibold pt-1">
                          — {section.callout.authorOrSource}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Section Image */}
              {section.image && (
                <div className="my-6 rounded-xl overflow-hidden border border-gray-200 bg-white shadow-2xs">
                  <img
                    src={section.image.url}
                    alt={section.image.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-56 sm:h-72 object-cover"
                  />
                  <div className="p-2.5 text-center text-[11px] text-gray-500 bg-gray-50 border-t border-gray-100">
                    {section.image.caption}
                  </div>
                </div>
              )}

              {/* Key Bullet Points */}
              {section.keyBulletPoints && (
                <div className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200/90 shadow-2xs space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#3C225D]">
                    Core Takeaways for Applicants
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                    {section.keyBulletPoints.map((bp, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          ))}

        </div>

        {/* Interactive Feature Widget */}
        {post.interactiveWidget && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-white rounded-2xl border-2 border-purple-200/80 p-6 sm:p-8 shadow-sm space-y-6">
              
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#3C225D] text-white rounded text-[10px] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-amber-300" /> Interactive Toolkit
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-gray-900">
                  {post.interactiveWidget.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  {post.interactiveWidget.description}
                </p>
              </div>

              {/* 1. Interactive Checklist */}
              {post.interactiveWidget.type === 'checklist' && (
                <div className="space-y-4">
                  {/* Progress Header */}
                  <div className="p-3.5 bg-purple-50/70 rounded-xl border border-purple-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-[#3C225D]">Readiness Score: {checklistScore}%</span>
                      <p className="text-[11px] text-gray-600">
                        {completedChecklistItems} of {totalChecklistItems} milestones completed
                      </p>
                    </div>
                    <div className="w-24 h-2.5 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-emerald-600 transition-all duration-300"
                        style={{ width: `${checklistScore}%` }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    {post.interactiveWidget.data.items?.map((item: any) => {
                      const isChecked = !!checkedItems[item.id];
                      return (
                        <div
                          key={item.id}
                          onClick={() => handleToggleChecklist(item.id)}
                          className={`p-3 rounded-lg border transition-all cursor-pointer flex items-start gap-3 ${
                            isChecked 
                              ? 'bg-emerald-50/50 border-emerald-300 text-emerald-950' 
                              : 'bg-gray-50/50 border-gray-200 hover:border-purple-200 text-gray-700'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {}}
                            className="mt-0.5 w-4 h-4 text-[#3C225D] rounded focus:ring-0 cursor-pointer"
                          />
                          <div className="text-xs sm:text-sm font-medium">
                            <span className="text-[10px] uppercase font-bold text-gray-400 mr-2">
                              [{item.category}]
                            </span>
                            {item.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 2. Interactive Ranking Calculator */}
              {post.interactiveWidget.type === 'ranking-calculator' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {post.interactiveWidget.data.categories?.map((cat: any, idx: number) => (
                      <div key={idx} className="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-2">
                        <div className="font-semibold text-xs text-gray-900">
                          {cat.name}
                        </div>
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-[#3C225D] font-bold">Top LACs (Williams): {cat.lacScore}%</span>
                          <span className="text-gray-500">Major Research Unis: {cat.uniScore}%</span>
                        </div>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden flex">
                          <div className="bg-[#3C225D] h-full" style={{ width: `${cat.lacScore / 2}%` }} />
                          <div className="bg-gray-400 h-full" style={{ width: `${cat.uniScore / 2}%` }} />
                        </div>
                        <p className="text-[11px] text-gray-500 italic pt-1">{cat.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. Interactive Essay Agency Diagnostic */}
              {post.interactiveWidget.type === 'agency-analyzer' && (
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700 block">
                      Test an Essay Sentence or Draft Excerpt:
                    </label>
                    <textarea
                      rows={3}
                      value={analyzerInput}
                      onChange={(e) => setAnalyzerInput(e.target.value)}
                      placeholder="e.g. When our home Wi-Fi was cut off, I spent afternoons at the public library dissecting open-source biology curricula..."
                      className="w-full p-3 bg-gray-50 text-xs sm:text-sm text-gray-900 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3C225D]/20 focus:border-[#3C225D]"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleAnalyzeExcerpt}
                      className="px-4 py-2 bg-[#3C225D] hover:bg-[#2F1A4A] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Run Agency Diagnostic
                    </button>
                    <button
                      onClick={() => setAnalyzerInput(post.interactiveWidget?.data.examples?.[1]?.sampleText || '')}
                      className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs rounded-lg transition-colors cursor-pointer"
                    >
                      Load Good Example
                    </button>
                  </div>

                  {analyzerResult && (
                    <div className="p-4 bg-purple-50/80 rounded-xl border border-purple-200 space-y-2 animate-in fade-in duration-200">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-[#3C225D]">Agency Index: {analyzerResult.score}/100</span>
                        <span className="text-[11px] font-semibold text-purple-700">
                          {analyzerResult.score >= 75 ? 'Excellent Intellectual Arc' : 'Needs More Active Voice'}
                        </span>
                      </div>
                      <div className="w-full bg-purple-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-[#3C225D] h-full transition-all" style={{ width: `${analyzerResult.score}%` }} />
                      </div>
                      <p className="text-xs text-gray-700">{analyzerResult.feedback}</p>
                    </div>
                  )}
                </div>
              )}

              {/* 4. Interactive Spaced Retrieval Simulator */}
              {post.interactiveWidget.type === 'spaced-repetition' && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-medium">
                      <span>Simulated Recall Review Interval: {simInterval} Days</span>
                      <span className="text-[#3C225D] font-bold">Estimated Long-Term Retention: {Math.max(40, 100 - simInterval * 4)}%</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={14}
                      value={simInterval}
                      onChange={(e) => setSimInterval(Number(e.target.value))}
                      className="w-full accent-[#3C225D] cursor-pointer"
                    />
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                    {post.interactiveWidget.data.intervals?.map((int: any, idx: number) => (
                      <div key={idx} className="p-2.5 bg-gray-50 rounded-lg border border-gray-200 text-center">
                        <span className="text-[10px] text-gray-400 uppercase font-semibold block">{int.label}</span>
                        <div className="text-xs font-bold text-emerald-700 mt-1">Spaced: {int.spacedRetention}%</div>
                        <div className="text-[10px] text-rose-600 line-through">Cramming: {int.passiveRetention}%</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

        {/* Copyable Outreach / Waiver Email Template */}
        <div className="mt-8 p-5 bg-white rounded-xl border border-gray-200 space-y-3 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#3C225D] flex items-center gap-1.5">
              <Copy className="w-3.5 h-3.5" /> High-Yield Email / Waiver Template
            </span>
            <button
              onClick={() => {
                const text = "Subject: Request for Fly-In Travel Grant Verification & Counselor Endorsement\n\nDear [Counselor Name],\n\nI hope your week is going well. I am currently applying for the fully funded Senior Diversity Fly-In Program at [College Name] (e.g. Williams Windows on Williams). As part of the application, I need a brief verification of my transcript and fee waiver eligibility. Would you be able to submit the counselor endorsement by [Deadline Date]?\n\nThank you so much for your ongoing support!\n\nBest regards,\n[Your Name]";
                navigator.clipboard.writeText(text);
                setTemplateCopied(true);
                setTimeout(() => setTemplateCopied(false), 2000);
              }}
              className="inline-flex items-center gap-1 px-3 py-1 bg-purple-50 hover:bg-purple-100 text-[#3C225D] text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              {templateCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{templateCopied ? 'Template Copied!' : 'Copy Template'}</span>
            </button>
          </div>
          <pre className="p-3 bg-gray-50 rounded-lg text-[11px] text-gray-700 whitespace-pre-wrap font-sans leading-relaxed border border-gray-200/60">
            Subject: Request for Fly-In Travel Grant Verification & Counselor Endorsement{"\n\n"}
            Dear [Counselor Name],{"\n"}
            I hope your week is going well. I am currently applying for the fully funded Senior Diversity Fly-In Program at [College Name]. Would you be able to submit the brief counselor verification by [Deadline Date]? Thank you so much for your support!
          </pre>
        </div>

        {/* Personal Reader Notes Box */}
        <div className="mt-8 p-5 bg-[#FAF9F6] border border-purple-200/80 rounded-2xl space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-900 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-[#3C225D]" /> Private Reflection Scratchpad
            </span>
            {noteSaved && <span className="text-[11px] font-semibold text-emerald-600">Saved locally!</span>}
          </div>
          <p className="text-[11px] text-gray-500">
            Jot down your essay ideas, questions for Aldrich, or fly-in deadlines. This saves automatically in your browser.
          </p>
          <textarea
            rows={3}
            value={reflectionNote}
            onChange={(e) => setReflectionNote(e.target.value)}
            placeholder="e.g. Brainstorm idea: connect my high school lab observations to the Williams tutorial structure..."
            className="w-full p-3 bg-white text-xs sm:text-sm text-gray-900 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3C225D]/20 focus:border-[#3C225D]"
          />
          <div className="flex justify-end">
            <button
              onClick={handleSaveNote}
              className="px-3.5 py-1.5 bg-[#1A1A1A] hover:bg-[#3C225D] text-white text-xs font-medium rounded-lg transition-colors cursor-pointer"
            >
              Save Note
            </button>
          </div>
        </div>

        {/* Bottom Back Button & Related Articles */}
        <div className="mt-12 pt-8 border-t border-gray-200 space-y-8">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A1A1A] hover:bg-[#3C225D] text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </button>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xs text-gray-500 hover:text-[#3C225D] transition-colors cursor-pointer"
            >
              ↑ Back to top
            </button>
          </div>

          {/* Related Reading Grid */}
          {relatedPosts.length > 0 && (
            <div className="space-y-3 pt-4">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block">
                More from Field Notes
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedPosts.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectPost(rel)}
                    className="p-4 bg-white rounded-xl border border-gray-200 hover:border-purple-300 transition-all cursor-pointer shadow-2xs group flex flex-col justify-between space-y-2"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-[#3C225D] bg-purple-50 px-2 py-0.5 rounded">
                        {rel.category}
                      </span>
                      <h4 className="font-serif text-sm font-semibold text-gray-900 group-hover:text-[#3C225D] transition-colors mt-1.5 line-clamp-2">
                        {rel.title}
                      </h4>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-gray-400 pt-2 border-t border-gray-100">
                      <span>{rel.readTime}</span>
                      <span className="text-[#3C225D] font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        Read <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </main>

    </div>
  );
};
