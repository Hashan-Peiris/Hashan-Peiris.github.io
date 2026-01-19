import { useState } from 'react';
import { FolderOpen } from 'lucide-react';

const projects = [
  {
    title: 'NMC-811 Cathode Interface Modeling',
    description: 'Modeled chemical activity on Ni/Co-rich interfaces of NMC-811 cathodes using DFT and AIMD simulations. Research published in Cell Reports Physical Science.',
    category: 'Battery Research',
    tags: ['DFT', 'AIMD', 'Battery', 'Cathode'],
  },
  {
    title: 'Li/Ca Salt Solvation Dynamics',
    description: 'Studied solvation shell dynamics of Li/Ca salts in electrolytes and cathode interfaces using DFT/AIMD models, with ongoing ML-accelerated studies.',
    category: 'Battery Research',
    tags: ['DFT', 'AIMD', 'ML', 'Electrolyte'],
  },
  {
    title: 'Sn-based Solder Alloy Stability',
    description: 'Investigated thermo-mechanical stability of Sn-based soldering alloys using DFT/ML approaches, contributing to IEEC and SRC conferences.',
    category: 'Materials Modeling',
    tags: ['DFT', 'ML', 'Solder', 'Thermomechanical'],
  },
  {
    title: 'PFAS Degradation Mechanisms',
    description: 'Collaborative research on PFAS degradation mechanisms using computational approaches.',
    category: 'Environmental',
    tags: ['DFT', 'Environmental', 'Degradation'],
  },
  {
    title: 'HPC Cluster Optimization',
    description: 'Provisioned and optimized high-performance compute nodes, integrating them into the Spiedie compute cluster at Binghamton University.',
    category: 'Infrastructure',
    tags: ['HPC', 'Linux', 'Optimization'],
  },
  {
    title: 'Pipeline Steel Degradation Model',
    description: 'Developed a predictive model for API 5L Grade B steel degradation in wet sour environments using SEM/EDS analysis.',
    category: 'Failure Analysis',
    tags: ['Corrosion', 'Steel', 'SEM', 'Prediction'],
  },
];

const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section-container">
      <div className="animate-fade-up">
        <h2 className="section-title flex items-center gap-3">
          <FolderOpen className="text-primary" size={32} />
          Projects
        </h2>
        <p className="section-subtitle">
          Research and development projects across academia and industry
        </p>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-2 mb-8 animate-fade-up stagger-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-1.5 text-sm rounded-full transition-all ${
              activeFilter === cat 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div 
            key={index}
            className="glass-card animate-fade-up group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span className="text-xs text-primary font-medium mb-3 block">
              {project.category}
            </span>
            
            <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span key={tag} className="pub-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
