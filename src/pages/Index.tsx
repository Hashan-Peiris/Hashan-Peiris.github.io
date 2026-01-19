import { useState, useCallback } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import PublicationsSection from '@/components/sections/PublicationsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import PhotosSection from '@/components/sections/PhotosSection';
import BlogsSection from '@/components/sections/BlogsSection';

const Index = () => {
  const [activeTab, setActiveTab] = useState<'research' | 'personal'>('research');
  const [activeSection, setActiveSection] = useState<string>('about');

  const handleSectionClick = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Animated Materials Science Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navigation 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      />

      {/* Hero Section */}
      <HeroSection activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Content Sections */}
      <main className="relative z-10">
        {activeTab === 'research' ? (
          <>
            <AboutSection />
            <ExperienceSection />
            <PublicationsSection />
            <ProjectsSection />
            <ContactSection />
          </>
        ) : (
          <>
            <PhotosSection />
            <BlogsSection />
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-border/30">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Hashan C. Peiris. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
