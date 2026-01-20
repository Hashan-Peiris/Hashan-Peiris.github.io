import { useState, useEffect } from 'react';
import { Download, Mail } from 'lucide-react';

interface NavigationProps {
  activeTab: 'research' | 'personal';
  setActiveTab: (tab: 'research' | 'personal') => void;
  hasSelectedTab: boolean;
  activeSection?: string;
  onSectionClick: (section: string) => void;
}

const Navigation = ({ activeTab, setActiveTab, hasSelectedTab, activeSection, onSectionClick }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const researchLinks = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'publications', label: 'Publications' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const personalLinks = [
    { id: 'photos', label: 'Photos' },
    { id: 'blogs', label: 'Blogs' },
  ];

  const currentLinks = activeTab === 'research' ? researchLinks : personalLinks;

  return (
    <nav className={`nav-sticky ${isScrolled ? 'py-3' : 'py-4'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Left: Tab Switcher (always visible, fixed position) */}
        <div className="flex items-center gap-2 p-1 bg-secondary/50 rounded-full backdrop-blur-sm">
          <button
            onClick={() => setActiveTab('research')}
            className={`tab-btn ${hasSelectedTab && activeTab === 'research' ? 'active' : ''}`}
          >
            Research
          </button>
          <button
            onClick={() => setActiveTab('personal')}
            className={`tab-btn ${hasSelectedTab && activeTab === 'personal' ? 'active' : ''}`}
          >
            Personal
          </button>
        </div>

        {/* Right: Section Links (only visible after tab selection) */}
        <div className={`flex items-center gap-1 transition-all duration-300 ${hasSelectedTab ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          {currentLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onSectionClick(link.id)}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.label}
            </button>
          ))}
          
          {/* CV Download - visible after tab selection */}
          <a
            href="https://hashan-peiris.github.io/assets/Hashan_Peiris_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            <Download size={14} />
            <span className="hidden sm:inline">CV</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
