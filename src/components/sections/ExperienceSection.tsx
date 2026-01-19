import { Briefcase, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Graduate Research Assistant',
    company: 'Binghamton University',
    location: 'NY, USA',
    period: 'Dec 2022 – Present',
    responsibilities: [
      'Modeled chemical activity on Ni/Co-rich interfaces of NMC-811 cathodes using DFT and AIMD simulations',
      'Studied solvation shell dynamics of Li/Ca salts in electrolytes using DFT/AIMD models',
      'Investigated thermo-mechanical stability of Sn-based soldering alloys using DFT/ML approaches',
    ],
  },
  {
    title: 'Graduate Teaching Assistant',
    company: 'Binghamton University',
    location: 'NY, USA',
    period: 'Jan 2020 – Dec 2022',
    responsibilities: [
      'Delivered laboratory and discussion-based teaching sessions for PHYS 121/122/131/132',
      'Served as Computational TA providing technical support in PHYS 568',
      'Managed experiments and supported student learning',
    ],
  },
  {
    title: 'API Certified Inspector (Consultant)',
    company: 'Chevron Lubricants',
    location: 'Sri Lanka',
    period: 'Mar – Jun 2019',
    responsibilities: [
      'Conducted certified inspections of Pressure Safety Valves (PSVs) and Pressure Relief Valves (PRVs)',
      'Supervised establishment of maintenance SOPs for API 510 compliance',
      'Advised on maintenance and testing protocols',
    ],
  },
  {
    title: 'Graduate Research/Teaching Assistant',
    company: 'University of Moratuwa',
    location: 'Sri Lanka',
    period: 'Jan 2019 – Dec 2019',
    responsibilities: [
      'Modeled molecular behavior of glass-metal specimens using LAMMPS and VMD',
      'Performed AFM pico-indentation experiments to verify computational models',
    ],
  },
  {
    title: 'Trainee Engineer',
    company: 'Camso Loadstar (Michelin)',
    location: 'Sri Lanka',
    period: 'Jun – Dec 2017',
    responsibilities: [
      'Performed NDT techniques (PT, UT, RT) and failure analysis on wheels and assemblies',
      'Evaluated weldments for wheels and components for quality standards',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-container">
      <div className="animate-fade-up">
        <h2 className="section-title flex items-center gap-3">
          <Briefcase className="text-primary" size={32} />
          Experience
        </h2>
        <p className="section-subtitle">
          Professional and research experience across academia and industry
        </p>
      </div>

      <div className="space-y-0 mt-8">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="timeline-item animate-fade-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="glass-card ml-4">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1 justify-end">
                    <MapPin size={12} />
                    {exp.location}
                  </p>
                </div>
              </div>
              
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="text-primary mt-1.5">•</span>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
