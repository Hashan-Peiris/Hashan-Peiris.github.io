import { GraduationCap, Award } from 'lucide-react';

const skills = {
  'Programming & Tools': ['Python', 'Visual Basic', 'Git', 'Bash', 'LaTeX', 'MATLAB', 'HPC Systems'],
  'Simulation & Software': ['VASP', 'DeePMD', 'USPEX', 'Quantum Espresso', 'LAMMPS', 'Orca', 'SolidWorks', 'Abaqus', 'AutoCAD'],
  'Other': ['Proposal Writing', 'Project Management', 'Experimental Design', 'Scientific Communication', 'Teamwork', 'FEA', 'ML Data Analysis'],
};

const education = [
  {
    degree: 'Ph.D. Candidate, Materials Science & Engineering',
    institution: 'Binghamton University (SUNY)',
    details: 'GPA: 3.8',
    date: 'Expected Spring 2026',
  },
  {
    degree: 'MBA',
    institution: 'University of West London',
    date: 'Oct 2019',
  },
  {
    degree: 'BSc in Materials Science & Engineering',
    institution: 'University of Moratuwa',
    details: 'First Class Honors',
    date: 'Dec 2018',
  },
  {
    degree: 'Passed Finalist',
    institution: 'Chartered Management Accountant (UK)',
    date: 'Oct 2016',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <div className="animate-fade-up">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle max-w-3xl">
          Bridging the gap between computational theory and practical materials solutions
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Bio */}
        <div className="animate-fade-up stagger-1">
          <div className="glass-card h-full">
            <p className="text-foreground/90 leading-relaxed mb-4">
              Computational materials scientist and engineer with a proven track record of delivering 
              impactful solutions to complex challenges at the intersection of research and industry. 
              Expertise in advanced modeling techniques, including Density Functional Theory (DFT), 
              <em> Ab Initio</em> Molecular Dynamics (AIMD), and Machine Learning (ML). Extensive 
              hands-on experience in manufacturing plant operations, system inspection, quality 
              assurance, and failure analysis.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Adept at leading interdisciplinary projects, driving innovation, and achieving measurable 
              outcomes. Recognized for mentorship, grant writing, and effective project management. 
              Demonstrated ability to foster collaboration within high-performing teams and deliver 
              results in both academic and industrial settings.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="animate-fade-up stagger-2">
          <div className="glass-card h-full">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Award className="text-primary" size={20} />
              Key Skills
            </h3>
            
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mt-12 animate-fade-up stagger-3">
        <h3 className="text-2xl font-display font-semibold mb-8 flex items-center gap-3">
          <GraduationCap className="text-primary" size={24} />
          Education
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {education.map((edu, index) => (
            <div key={index} className="glass-card">
              <h4 className="font-semibold text-foreground mb-2">{edu.degree}</h4>
              <p className="text-sm text-muted-foreground mb-1">{edu.institution}</p>
              {edu.details && (
                <p className="text-sm text-primary mb-1">{edu.details}</p>
              )}
              <p className="text-xs text-muted-foreground">{edu.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
