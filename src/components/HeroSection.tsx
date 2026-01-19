import { Download, Mail, Linkedin, Github } from 'lucide-react';

interface HeroSectionProps {
  activeTab: 'research' | 'personal';
  setActiveTab: (tab: 'research' | 'personal') => void;
}

const HeroSection = ({ activeTab, setActiveTab }: HeroSectionProps) => {
  return (
    <section className="relative z-10 min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Computational Materials Scientist
            </span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 leading-tight">
              Hashan C. Peiris
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Advanced research and industrial experience in computational materials science, 
              battery interfaces, failure analysis, catalysis, and manufacturing.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="https://hashan-peiris.github.io/assets/Hashan_Peiris_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105"
              >
                <Download size={18} />
                Download CV
              </a>
              <a
                href="mailto:peiris.mdhc@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/80 transition-all hover:scale-105"
              >
                <Mail size={18} />
                Contact
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/m-d-hashan-c-peiris-aa9b65146"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/Hashan-Peiris"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="animate-fade-up stagger-2 flex justify-center md:justify-end">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 -m-4">
                <div className="absolute inset-0 border border-primary/20 rounded-full animate-pulse" />
                <div className="absolute inset-2 border border-primary/10 rounded-full" style={{ animationDelay: '0.5s' }} />
              </div>
              
              {/* Profile image */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
                <img
                  src="https://hashan-peiris.github.io/assets/images/Hashan-Peiris.jpg"
                  alt="Hashan C. Peiris"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tab Switcher (visible before scroll) */}
        <div className="flex justify-center mt-16 animate-fade-up stagger-3">
          <div className="flex items-center gap-2 p-1.5 bg-secondary/50 rounded-full backdrop-blur-sm">
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
