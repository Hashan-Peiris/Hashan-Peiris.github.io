import { useState, useEffect } from 'react';
import { Download, Mail } from 'lucide-react';

interface NavigationProps {
  activeTab: 'research' | 'personal';
  setActiveTab: (tab: 'research' | 'personal') => void;
  activeSection?: string;
  onSectionClick: (section: string) => void;
}

const Navigation = ({ activeTab, setActiveTab, activeSection, onSectionClick }: NavigationProps) => {
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
        {/* Left: Name/Logo (visible when scrolled) */}
        <div className={`transition-all duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <span className="text-lg font-display font-semibold text-foreground">H. Peiris</span>
        </div>

        {/* Center: Tab Switcher (moves here when scrolled) */}
        <div className={`flex items-center gap-2 transition-all duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none absolute left-1/2 -translate-x-1/2'}`}>
          <button
            onClick={() => setActiveTab('research')}
            className={`tab-btn ${activeTab === 'research' ? 'active' : ''}`}
          >
            Research
          </button>
          <button
            onClick={() => setActiveTab('personal')}
            className={`tab-btn ${activeTab === 'personal' ? 'active' : ''}`}
          >
            Personal
          </button>
        </div>

        {/* Right: Section Links (context-aware based on active tab) */}
        <div className="flex items-center gap-1">
          {currentLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onSectionClick(link.id)}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.label}
            </button>
          ))}
          
          {/* CV Download - always visible */}
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
