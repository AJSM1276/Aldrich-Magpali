import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StoryAndImpactSection } from './components/StoryAndImpactSection';
import { BlogSection } from './components/BlogSection';
import { BlogPostPage } from './components/BlogPostPage';
import { ShopSection } from './components/ShopSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TutorlyExplorerModal } from './components/TutorlyExplorerModal';
import { QuestBridgeGuideModal } from './components/QuestBridgeGuideModal';
import { BlogPost } from './types';
import { BLOG_POSTS_DATA } from './data/portfolioData';

export default function App() {
  const [tutorlyModalOpen, setTutorlyModalOpen] = useState(false);
  const [questBridgeModalOpen, setQuestBridgeModalOpen] = useState(false);
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  // Hash based deep-linking for blog posts
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#article/')) {
        const postId = hash.replace('#article/', '');
        const found = BLOG_POSTS_DATA.find(p => p.id === postId);
        if (found) {
          setActivePost(found);
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      } else if (hash === '' || hash === '#' || !hash.startsWith('#article/')) {
        setActivePost(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenPost = (post: BlogPost) => {
    window.location.hash = `article/${post.id}`;
    setActivePost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    window.location.hash = '';
    setActivePost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuestBridgeGuide = () => {
    setQuestBridgeModalOpen(true);
  };

  const handleExploreMission = () => {
    const el = document.getElementById('story');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  // If a blog post is selected, render the dedicated full-page article reader
  if (activePost) {
    return (
      <>
        <BlogPostPage
          post={activePost}
          onBack={handleBackToHome}
          onSelectPost={handleOpenPost}
        />
        <Footer />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] font-sans selection:bg-purple-100 selection:text-[#3C225D] relative overflow-x-hidden">
      
      {/* Top Fixed Header with Simplified Nav */}
      <Navbar
        onOpenTutorly={() => setTutorlyModalOpen(true)}
        onOpenQuestBridgeGuide={handleOpenQuestBridgeGuide}
      />

      {/* Main Content Sections - Reordered with Blog before Shop */}
      <main className="space-y-0">
        
        {/* 1. Simplified, Elegant Hero Section */}
        <HeroSection
          onOpenTutorly={() => setTutorlyModalOpen(true)}
          onOpenQuestBridgeGuide={handleOpenQuestBridgeGuide}
          onExploreMission={handleExploreMission}
        />

        {/* 2. Story & Mission Showcase (Journey, PG County Prep, Mentorship, High School Thesis) */}
        <StoryAndImpactSection
          onOpenQuestBridgeGuide={handleOpenQuestBridgeGuide}
        />

        {/* 3. Field Notes & Blog (Placed before Shop as requested) */}
        <BlogSection onOpenPost={handleOpenPost} />

        {/* 4. Advising & Essay Services Shop */}
        <ShopSection />

        {/* 5. Contact & Connect Section */}
        <ContactSection />

      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Tutorly Explorer Modal */}
      <TutorlyExplorerModal
        isOpen={tutorlyModalOpen}
        onClose={() => setTutorlyModalOpen(false)}
      />

      {/* Interactive QuestBridge Guide Modal */}
      <QuestBridgeGuideModal
        isOpen={questBridgeModalOpen}
        onClose={() => setQuestBridgeModalOpen(false)}
      />

    </div>
  );
}
