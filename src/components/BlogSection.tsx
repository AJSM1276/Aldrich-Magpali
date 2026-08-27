import React, { useState } from 'react';
import { BLOG_POSTS_DATA } from '../data/portfolioData';
import { BlogPost } from '../types';
import { TiltCard } from './TiltCard';
import { BlogWriterGuideModal } from './BlogWriterGuideModal';
import { motion } from 'motion/react';
import { 
  Calendar, 
  ArrowRight, 
  Sparkles,
  BookOpen,
  Clock,
  PenTool
} from 'lucide-react';

interface BlogSectionProps {
  onOpenPost: (post: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onOpenPost }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [showAll, setShowAll] = useState<boolean>(false);
  const [guideModalOpen, setGuideModalOpen] = useState<boolean>(false);

  const categories = ['All', 'College Access Advice', 'Personal Reflections', 'Research & Cognition'];

  const filteredPosts = activeCategory === 'All'
    ? BLOG_POSTS_DATA
    : BLOG_POSTS_DATA.filter((p) => p.category === activeCategory);

  const visiblePosts = showAll ? filteredPosts : filteredPosts.slice(0, 2);
  const hasMore = filteredPosts.length > 2;

  return (
    <motion.section 
      id="blog" 
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="py-20 bg-white border-t border-gray-200/80"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3C225D]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#3C225D]">
                Field Notes & Dispatches
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 font-normal tracking-tight">
              Admissions Reflections & Insights
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-xl leading-relaxed">
              In-depth strategic roadmaps, cognitive research, and personal reflections with interactive toolkits.
            </p>
          </div>

          {/* Actions & Category Filter Pills */}
          <div className="flex flex-col sm:items-end gap-2.5">
            <button
              onClick={() => setGuideModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF9F6] hover:bg-purple-50 text-[#3C225D] text-xs font-semibold rounded-lg border border-purple-200/80 shadow-2xs transition-all cursor-pointer hover:scale-101"
            >
              <PenTool className="w-3.5 h-3.5" />
              <span>How to Add / Write New Posts</span>
            </button>

            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setShowAll(false);
                  }}
                  className={`px-3 py-1 rounded-full text-xs transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#3C225D] text-white font-medium shadow-2xs'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visiblePosts.map((post) => (
            <TiltCard
              key={post.id}
              onClick={() => onOpenPost(post)}
              className="bg-[#FAF9F6] border border-gray-200/90 rounded-2xl hover:border-purple-300 transition-colors cursor-pointer shadow-2xs group flex flex-col justify-between overflow-hidden"
            >
              {/* Image Preview if available */}
              {post.coverImage && (
                <div className="relative h-48 w-full overflow-hidden bg-gray-100 border-b border-gray-200/60">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#3C225D] bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md shadow-xs">
                      {post.category}
                    </span>
                  </div>
                  {post.interactiveWidget && (
                    <div className="absolute top-3 right-3">
                      <span className="text-[10px] font-semibold text-white bg-[#3C225D]/90 backdrop-blur-xs px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                        <Sparkles className="w-2.5 h-2.5 text-amber-300" /> Interactive Toolkit
                      </span>
                    </div>
                  )}
                </div>
              )}

              <div className="p-5 sm:p-6 space-y-3">
                <div className="flex items-center gap-3 text-[11px] text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-gray-400" />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-gray-400" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-[#3C225D] transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed">
                  {post.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[10px] text-gray-500 bg-white px-2 py-0.5 rounded border border-gray-200/60 font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-5 py-3.5 bg-white border-t border-gray-200/60 flex items-center justify-between text-xs text-[#3C225D] font-semibold">
                <span className="flex items-center gap-1.5 text-gray-500 text-[11px] font-normal">
                  <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                  Full article, images & tools
                </span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* View More / Show Less Button */}
        {hasMore && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#FAF9F6] hover:bg-purple-50 text-[#3C225D] font-semibold text-xs sm:text-sm rounded-full border border-purple-200/80 shadow-2xs hover:shadow-xs transition-all cursor-pointer"
            >
              <span>{showAll ? 'Show Fewer Articles' : `View More Articles (${filteredPosts.length - 2} more)`}</span>
              <ArrowRight className={`w-3.5 h-3.5 transition-transform ${showAll ? '-rotate-90' : 'rotate-90'}`} />
            </button>
          </div>
        )}

      </div>

      {/* Blog Authoring Guide Modal */}
      <BlogWriterGuideModal
        isOpen={guideModalOpen}
        onClose={() => setGuideModalOpen(false)}
      />
    </motion.section>
  );
};
