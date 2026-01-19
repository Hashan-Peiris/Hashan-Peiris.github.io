import { useState } from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

const publications = [
  {
    title: 'Polyvinylidene Fluoride (PVDF)–Trimethylaluminum (TMA) Chemistry: First-Principles Investigation and Experimental Insights',
    authors: 'Peiris, H.C., et al.',
    year: '2025',
    journal: 'ACS Applied Materials & Interfaces',
    status: 'Published',
    tags: ['DFT', 'Polymer', 'ALD'],
    link: 'https://pubs.acs.org/doi/abs/10.1021/acsami.4c14135',
    thumbnail: 'https://hashan-peiris.github.io/assets/papers/acs-ami-2025.svg',
    highlight: 'PVDF and TMA reaction pathway overview',
  },
  {
    title: 'High-pressure nitrous oxide reduction by a Cu(II) carbon nitride electrocatalyst',
    authors: 'Peiris, H.C., Smeu, M. et al.',
    year: '2025',
    journal: 'Journal of the American Chemical Society',
    status: 'Submitted',
    tags: ['DFT', 'Catalysis', 'Electrocatalyst'],
    thumbnail: 'https://hashan-peiris.github.io/assets/papers/n2o-jacs-2025.svg',
    highlight: 'Cu(II) active site and N2O reduction pathway',
  },
  {
    title: 'Electrolyte reactivity, oxygen states, and degradation mechanisms of nickel-rich cathodes',
    authors: 'Peiris, H.C., Smeu, M. et al.',
    year: '2024',
    journal: 'Cell Reports Physical Science',
    status: 'Published',
    tags: ['DFT', 'Battery', 'Cathode', 'NMC'],
    link: 'https://www.cell.com/cell-reports-physical-science/fulltext/S2666-3864(24)00308-4',
    thumbnail: 'https://hashan-peiris.github.io/assets/papers/cell-reports-2024.svg',
    highlight: 'NMC cathode surface and oxygen state evolution',
  },
  {
    title: 'Computational determination of the solvation structure of LiBF4 and LiPF6 salts in battery electrolytes',
    authors: 'Peiris, H.C., Smeu, M. et al.',
    year: '2023',
    journal: 'Colloids and Surfaces A',
    status: 'Published',
    tags: ['DFT', 'AIMD', 'Battery', 'Electrolyte'],
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S0927775723009159',
    thumbnail: 'https://hashan-peiris.github.io/assets/papers/colloids-2023.svg',
    highlight: 'LiBF4 and LiPF6 solvation shell structures',
  },
  {
    title: 'Thermo-mechanical modeling of Sn-based solder alloys',
    authors: 'Peiris, H.C., Smeu, M., et al.',
    year: '2022',
    journal: 'IEEC Conference Proceedings',
    status: 'Published',
    tags: ['DFT', 'ML', 'Solder'],
    thumbnail: 'https://hashan-peiris.github.io/assets/papers/solder-ieec-2022.svg',
    highlight: 'Sn-based solder alloy stress-strain response',
  },
  {
    title: 'Study of the Effect of Sulphide Stress Corrosion on the Load Bearing Capability of API 5L Grade B Steel used in Petroleum Pipelines',
    authors: 'Peiris, H.C., et al.',
    year: '2019',
    journal: 'ENGINEER Journal',
    status: 'Published',
    tags: ['Corrosion', 'Steel', 'Failure Analysis'],
    thumbnail: 'https://hashan-peiris.github.io/assets/papers/engineer-2019.svg',
    highlight: 'Stress corrosion map for API 5L steel',
  },
];

const allTags = ['All', ...Array.from(new Set(publications.flatMap(p => p.tags)))];

const PublicationsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredPublications = activeFilter === 'All' 
    ? publications 
    : publications.filter(p => p.tags.includes(activeFilter));

  return (
    <section id="publications" className="section-container">
      <div className="animate-fade-up">
        <h2 className="section-title flex items-center gap-3">
          <BookOpen className="text-primary" size={32} />
          Publications
        </h2>
        <p className="section-subtitle">
          Selected peer-reviewed publications and conference presentations
        </p>
      </div>

      {/* Filter Tags */}
      <div className="flex flex-wrap gap-2 mb-8 animate-fade-up stagger-1">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={`px-4 py-1.5 text-sm rounded-full transition-all ${
              activeFilter === tag 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Publications Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredPublications.map((pub, index) => (
          <div 
            key={index}
            className="glass-card animate-fade-up group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Thumbnail */}
            {pub.thumbnail && (
              <div className="mb-4 rounded-lg overflow-hidden bg-secondary/30">
                <img 
                  src={pub.thumbnail} 
                  alt={pub.highlight}
                  className="w-full h-32 object-contain p-4"
                />
              </div>
            )}
            
            {/* Content */}
            <div className="flex items-start justify-between gap-4 mb-3">
              <span className={`text-xs px-2 py-0.5 rounded ${
                pub.status === 'Published' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
              }`}>
                {pub.status}
              </span>
              <span className="text-sm text-muted-foreground">{pub.year}</span>
            </div>
            
            <h3 className="font-semibold text-foreground mb-2 leading-tight group-hover:text-primary transition-colors">
              {pub.title}
            </h3>
            
            <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
            <p className="text-sm text-primary/80 mb-4">{pub.journal}</p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {pub.tags.map((tag) => (
                <span key={tag} className="pub-tag">{tag}</span>
              ))}
            </div>
            
            {/* Link */}
            {pub.link && (
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
              >
                View Publication <ExternalLink size={12} />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PublicationsSection;
