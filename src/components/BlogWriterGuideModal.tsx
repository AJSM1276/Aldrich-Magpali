import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  BookOpen, 
  Sparkles, 
  Code2, 
  Copy, 
  Check, 
  Eye, 
  Plus, 
  Trash2, 
  HelpCircle,
  FileText,
  Calendar,
  Clock,
  Quote,
  AlertCircle,
  Image as ImageIcon
} from 'lucide-react';
import { BlogPost } from '../types';

interface BlogWriterGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BlogWriterGuideModal: React.FC<BlogWriterGuideModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'guide' | 'builder' | 'json'>('guide');
  const [copiedCode, setCopiedCode] = useState(false);

  // Form states for builder
  const [title, setTitle] = useState('How I Approached the Williams College Supplements');
  const [subtitle, setSubtitle] = useState('A step-by-step breakdown of academic tutorials and authentic writing.');
  const [category, setCategory] = useState('College Access Advice');
  const [date, setDate] = useState('September 5, 2026');
  const [readTime, setReadTime] = useState('5 min read');
  const [coverImageUrl, setCoverImageUrl] = useState('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200');
  const [summary, setSummary] = useState('Practical guidance on analyzing prompt nuances, connecting high school research to college tutorials, and maintaining a genuine intellectual voice.');
  const [tagsInput, setTagsInput] = useState('Williams, Supplements, Essays, Tutorials');
  
  // Section builder
  const [sections, setSections] = useState<Array<{
    heading: string;
    paragraphs: string;
    calloutTitle: string;
    calloutText: string;
    calloutType: 'quote' | 'stat' | 'tip' | 'warning' | 'framework';
  }>>([
    {
      heading: '1. Deconstructing the Oxford Tutorial Model',
      paragraphs: 'Williams is renowned for its 2-on-1 Oxford-style tutorial courses. In your supplemental essays, show how you thrive in direct intellectual dialogue rather than passive lecture halls.\n\nMention specific questions or research curiosities you want to debate with a partner.',
      calloutTitle: 'Admissions Tip',
      calloutText: 'Name-dropping courses isn\'t enough; explain the methodology or questions you plan to investigate.',
      calloutType: 'tip'
    }
  ]);

  const handleAddSection = () => {
    setSections(prev => [
      ...prev,
      {
        heading: `Section ${prev.length + 1}: Key Insights`,
        paragraphs: 'Write your insightful paragraphs here. Separate multiple paragraphs with a line break.',
        calloutTitle: '',
        calloutText: '',
        calloutType: 'tip'
      }
    ]);
  };

  const handleRemoveSection = (index: number) => {
    if (sections.length <= 1) return;
    setSections(prev => prev.filter((_, idx) => idx !== index));
  };

  const handleSectionChange = (index: number, field: string, value: string) => {
    setSections(prev => prev.map((s, idx) => idx === index ? { ...s, [field]: value } : s));
  };

  // Generate clean TypeScript object code
  const generatedId = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'my-new-post';
  const tagList = tagsInput.split(',').map(t => t.trim()).filter(Boolean);

  const generatedObjectCode = `  {
    id: "${generatedId}",
    title: "${title.replace(/"/g, '\\"')}",
    subtitle: "${subtitle.replace(/"/g, '\\"')}",
    category: "${category}",
    date: "${date}",
    readTime: "${readTime}",
    author: "Aldrich Jad S. Magpali",
    authorRole: "Williams College '30 • QuestBridge Scholar",
    pinned: false,
    coverImage: "${coverImageUrl}",
    summary: "${summary.replace(/"/g, '\\"')}",
    tags: ${JSON.stringify(tagList)},
    content: [
      "${summary.replace(/"/g, '\\"')}"
    ],
    sections: [
${sections.map(s => {
  const pList = s.paragraphs.split('\n\n').map(p => p.trim()).filter(Boolean);
  return `      {
        heading: "${s.heading.replace(/"/g, '\\"')}",
        paragraphs: ${JSON.stringify(pList.length > 0 ? pList : [s.paragraphs])}${s.calloutText ? `,
        callout: {
          type: "${s.calloutType}",
          title: "${s.calloutTitle.replace(/"/g, '\\"')}",
          text: "${s.calloutText.replace(/"/g, '\\"')}"
        }` : ''}
      }`;
}).join(',\n')}
    ],
    keyTakeaways: [
      "Authenticity and specific intellectual curiosity are paramount.",
      "Ground your reflections in concrete examples and active voice."
    ]
  }`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generatedObjectCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-gray-200 overflow-hidden font-sans">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#FAF9F6] border-b border-gray-200 flex items-center justify-between shrink-0">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#3C225D] bg-purple-100 px-2 py-0.5 rounded">
                Authoring Guide
              </span>
              <span className="text-xs text-gray-500 font-medium">Field Notes & Articles</span>
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-semibold text-gray-900">
              How to Write & Add New Blog Posts
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-gray-200 bg-white px-6 shrink-0 gap-6 text-xs sm:text-sm">
          <button
            onClick={() => setActiveTab('guide')}
            className={`py-3 font-semibold border-b-2 transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'guide'
                ? 'border-[#3C225D] text-[#3C225D]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>1. Quick Guide & Workflow</span>
          </button>

          <button
            onClick={() => setActiveTab('builder')}
            className={`py-3 font-semibold border-b-2 transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'builder'
                ? 'border-[#3C225D] text-[#3C225D]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>2. Visual Post Builder</span>
          </button>

          <button
            onClick={() => setActiveTab('json')}
            className={`py-3 font-semibold border-b-2 transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'json'
                ? 'border-[#3C225D] text-[#3C225D]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>3. Copy Code / Data Snippet</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#FAF9F6]">
          
          {/* TAB 1: Step-by-Step Guide */}
          {activeTab === 'guide' && (
            <div className="space-y-6 max-w-3xl mx-auto">
              
              {/* Overview Box */}
              <div className="p-5 bg-white rounded-xl border border-purple-200/80 shadow-2xs space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3C225D]">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Simple 3-Step Process to Publish
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  All articles, research papers, and dispatches are stored cleanly in one central file: 
                  <code className="bg-purple-50 text-[#3C225D] font-mono px-2 py-0.5 rounded ml-1 font-semibold">
                    /src/data/portfolioData.ts
                  </code>.
                  The site automatically parses them into both the blog preview grid and the full-page reading layout.
                </p>
              </div>

              {/* 3 Steps */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-xl border border-gray-200 space-y-2 shadow-2xs">
                  <div className="w-6 h-6 rounded-full bg-[#3C225D] text-white text-xs font-bold flex items-center justify-center">
                    1
                  </div>
                  <h4 className="font-semibold text-xs text-gray-900">Draft or Use the Builder</h4>
                  <p className="text-[11px] text-gray-600 leading-relaxed">
                    Write your article using Tab 2 (Visual Post Builder) or directly in markdown. Fill in the title, headings, and takeaway quotes.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-gray-200 space-y-2 shadow-2xs">
                  <div className="w-6 h-6 rounded-full bg-[#3C225D] text-white text-xs font-bold flex items-center justify-center">
                    2
                  </div>
                  <h4 className="font-semibold text-xs text-gray-900">Copy the Code Snippet</h4>
                  <p className="text-[11px] text-gray-600 leading-relaxed">
                    Switch to Tab 3 (Copy Code) and hit <strong>"Copy Code"</strong> to grab the formatted TypeScript object.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-gray-200 space-y-2 shadow-2xs">
                  <div className="w-6 h-6 rounded-full bg-[#3C225D] text-white text-xs font-bold flex items-center justify-center">
                    3
                  </div>
                  <h4 className="font-semibold text-xs text-gray-900">Paste in portfolioData.ts</h4>
                  <p className="text-[11px] text-gray-600 leading-relaxed">
                    Add the snippet to the <code className="text-[#3C225D] font-mono text-[10px]">BLOG_POSTS_DATA</code> array in <code className="text-gray-700 font-mono text-[10px]">portfolioData.ts</code>, or simply prompt the AI with your draft!
                  </p>
                </div>
              </div>

              {/* Supported Features Breakdown */}
              <div className="p-5 bg-white rounded-xl border border-gray-200 space-y-3">
                <h4 className="font-serif text-sm font-semibold text-gray-900">
                  Rich Formatting Features Supported Out of the Box:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5" />
                    <span><strong>Callout Boxes:</strong> Add quotes, tips, statistics, warnings, or frameworks to any section.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5" />
                    <span><strong>Editorial Cover Imagery:</strong> High-res Unsplash photos or custom uploaded illustrations.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5" />
                    <span><strong>Key Bullet Points:</strong> Structured takeaways for applicants at the end of sections.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5" />
                    <span><strong>Interactive Widgets:</strong> Embed checklists, simulators, ranking calculators, or diagnostic tools.</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex justify-center pt-2">
                <button
                  onClick={() => setActiveTab('builder')}
                  className="px-5 py-2.5 bg-[#3C225D] hover:bg-[#2F1A4A] text-white text-xs font-semibold rounded-xl transition-all shadow-xs flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Try the Visual Post Builder Now</span>
                </button>
              </div>

            </div>
          )}

          {/* TAB 2: Visual Post Builder */}
          {activeTab === 'builder' && (
            <div className="space-y-6 max-w-3xl mx-auto">
              
              <div className="p-4 bg-purple-50/70 border border-purple-200/80 rounded-xl text-xs text-gray-700 flex items-center justify-between">
                <span>
                  💡 Fill out the fields below. As you type, the code in Tab 3 is automatically generated and ready to copy!
                </span>
                <button
                  onClick={() => setActiveTab('json')}
                  className="px-3 py-1.5 bg-[#3C225D] text-white font-semibold rounded-lg shrink-0 ml-3 hover:bg-[#2F1A4A] transition-colors cursor-pointer"
                >
                  View Generated Code →
                </button>
              </div>

              {/* Basic Details */}
              <div className="p-5 bg-white rounded-xl border border-gray-200 space-y-4 shadow-2xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#3C225D]">
                  1. Article Header & Metadata
                </h4>

                <div className="space-y-3 text-xs">
                  <div className="space-y-1">
                    <label className="font-semibold text-gray-700 block">Post Title *</label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#3C225D]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-gray-700 block">Subtitle / Dek</label>
                    <input
                      type="text"
                      value={subtitle}
                      onChange={(e) => setSubtitle(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#3C225D]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="space-y-1">
                      <label className="font-semibold text-gray-700 block">Category</label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#3C225D]"
                      >
                        <option value="College Access Advice">College Access Advice</option>
                        <option value="Personal Reflections">Personal Reflections</option>
                        <option value="Research & Cognition">Research & Cognition</option>
                        <option value="Announcement">Announcement</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-gray-700 block">Date</label>
                      <input
                        type="text"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#3C225D]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-gray-700 block">Read Time</label>
                      <input
                        type="text"
                        value={readTime}
                        onChange={(e) => setReadTime(e.target.value)}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#3C225D]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-gray-700 block">Cover Image URL</label>
                    <input
                      type="text"
                      value={coverImageUrl}
                      onChange={(e) => setCoverImageUrl(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#3C225D]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-gray-700 block">Executive Summary</label>
                    <textarea
                      rows={2}
                      value={summary}
                      onChange={(e) => setSummary(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#3C225D]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-gray-700 block">Tags (comma separated)</label>
                    <input
                      type="text"
                      value={tagsInput}
                      onChange={(e) => setTagsInput(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#3C225D]"
                    />
                  </div>

                </div>
              </div>

              {/* Sections Builder */}
              <div className="p-5 bg-white rounded-xl border border-gray-200 space-y-4 shadow-2xs">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#3C225D]">
                    2. Article Content Sections ({sections.length})
                  </h4>
                  <button
                    onClick={handleAddSection}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-purple-50 hover:bg-purple-100 text-[#3C225D] text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Section</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {sections.map((sec, idx) => (
                    <div key={idx} className="p-4 bg-gray-50/70 border border-gray-200 rounded-xl space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-gray-700">Section {idx + 1}</span>
                        {sections.length > 1 && (
                          <button
                            onClick={() => handleRemoveSection(idx)}
                            className="text-rose-500 hover:text-rose-700 text-xs flex items-center gap-1 cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Remove</span>
                          </button>
                        )}
                      </div>

                      <div className="space-y-1 text-xs">
                        <label className="font-semibold text-gray-600 block">Section Heading</label>
                        <input
                          type="text"
                          value={sec.heading}
                          onChange={(e) => handleSectionChange(idx, 'heading', e.target.value)}
                          className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#3C225D]"
                        />
                      </div>

                      <div className="space-y-1 text-xs">
                        <label className="font-semibold text-gray-600 block">Paragraphs (Use double enter for line breaks)</label>
                        <textarea
                          rows={3}
                          value={sec.paragraphs}
                          onChange={(e) => handleSectionChange(idx, 'paragraphs', e.target.value)}
                          className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#3C225D]"
                        />
                      </div>

                      {/* Optional Callout */}
                      <div className="pt-2 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                        <div className="space-y-1">
                          <label className="text-[11px] font-medium text-gray-600 block">Callout Type</label>
                          <select
                            value={sec.calloutType}
                            onChange={(e) => handleSectionChange(idx, 'calloutType', e.target.value)}
                            className="w-full px-2 py-1 bg-white border border-gray-200 rounded-md text-[11px]"
                          >
                            <option value="tip">Tip</option>
                            <option value="quote">Quote</option>
                            <option value="stat">Statistic</option>
                            <option value="warning">Warning</option>
                            <option value="framework">Framework</option>
                          </select>
                        </div>

                        <div className="space-y-1 sm:col-span-2">
                          <label className="text-[11px] font-medium text-gray-600 block">Callout Text (Optional)</label>
                          <input
                            type="text"
                            placeholder="e.g. Always emphasize your personal response to hardship."
                            value={sec.calloutText}
                            onChange={(e) => handleSectionChange(idx, 'calloutText', e.target.value)}
                            className="w-full px-2.5 py-1 bg-white border border-gray-200 rounded-md text-[11px]"
                          />
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: Code & JSON Output */}
          {activeTab === 'json' && (
            <div className="space-y-4 max-w-3xl mx-auto">
              
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between">
                <div className="space-y-0.5 text-xs text-emerald-950">
                  <span className="font-bold block">✓ Generated TypeScript Object Ready</span>
                  <span className="text-emerald-800">
                    Paste this snippet into the <code className="font-mono font-bold bg-emerald-100 px-1 py-0.5 rounded">BLOG_POSTS_DATA</code> array in <code className="font-mono text-emerald-900">/src/data/portfolioData.ts</code>.
                  </span>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="px-4 py-2 bg-[#3C225D] hover:bg-[#2F1A4A] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 shrink-0 shadow-xs cursor-pointer"
                >
                  {copiedCode ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedCode ? 'Code Copied!' : 'Copy Code Snippet'}</span>
                </button>
              </div>

              <div className="relative rounded-xl overflow-hidden border border-gray-800 bg-[#1E1E1E] text-gray-200 text-xs font-mono p-4">
                <div className="flex items-center justify-between text-[11px] text-gray-400 pb-3 border-b border-gray-700 mb-3">
                  <span>/src/data/portfolioData.ts (BlogPost object)</span>
                  <button
                    onClick={handleCopyCode}
                    className="text-purple-300 hover:text-purple-100 flex items-center gap-1 cursor-pointer"
                  >
                    {copiedCode ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <pre className="overflow-x-auto whitespace-pre-wrap leading-relaxed">
                  {generatedObjectCode}
                </pre>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-white border-t border-gray-200 flex items-center justify-between shrink-0 text-xs">
          <span className="text-gray-500">
            Tip: You can also ask the AI assistant at any time to write and publish a new blog post directly for you!
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
