import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { StoryAndImpactSection } from './components/StoryAndImpactSection';
import { BlogSection } from './components/BlogSection';
import { ShopSection } from './components/ShopSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TutorlyExplorerModal } from './components/TutorlyExplorerModal';
import { QuestBridgeGuideModal } from './components/QuestBridgeGuideModal';

function MainAppContent() {
  const [tutorlyModalOpen, setTutorlyModalOpen] = useState(false);
  const [questBridgeModalOpen, setQuestBridgeModalOpen] = useState(false);

  const handleOpenQuestBridgeGuide = () => {
    setQuestBridgeModalOpen(true);
  };

  const handleExploreMission = () => {
    const el = document.getElementById('story');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#0E0915] text-[#1A1A1A] dark:text-[#EDE8F2] font-sans selection:bg-purple-100 dark:selection:bg-[#432E56] selection:text-[#3C225D] dark:selection:text-[#FAF5ED] relative overflow-x-hidden transition-colors duration-300">
      
      {/* Top Fixed Header */}
      <Navbar
        onOpenTutorly={() => setTutorlyModalOpen(true)}
        onOpenQuestBridgeGuide={handleOpenQuestBridgeGuide}
      />

      {/* Main Content Sections */}
      <main className="space-y-0">
        
        {/* 1. Simplified, Elegant Hero Section */}
        <HeroSection
          onOpenTutorly={() => setTutorlyModalOpen(true)}
          onOpenQuestBridgeGuide={handleOpenQuestBridgeGuide}
          onExploreMission={handleExploreMission}
        />

        {/* 2. Dedicated About Me & Academic Background Section */}
        <AboutSection />

        {/* 3. Story & Mission Showcase (Journey to Williams '30, Mentorship) */}
        <StoryAndImpactSection
          onOpenQuestBridgeGuide={handleOpenQuestBridgeGuide}
        />

        {/* 4. Blog & Articles Publication Hub */}
        <BlogSection />

        {/* 5. Advising & Essay Services Shop */}
        <ShopSection />

        {/* 6. Contact & Connect Section */}
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

export default function App() {
  return (
    <ThemeProvider>
      <MainAppContent />
    </ThemeProvider>
  );
}

