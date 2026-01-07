// Projects data - update this file to add/edit projects
export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image?: string;
  url?: string;
  repo?: string;
  pdf?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "nmc-cathode",
    title: "NMC-811 Cathode Interface Modeling",
    description: "Modeled chemical activity on Ni/Co-rich interfaces of NMC-811 cathodes using DFT and AIMD simulations. Research published in Cell Reports Physical Science.",
    category: "Battery Research",
    tags: ["DFT", "AIMD", "Battery", "Cathode"],
    featured: true
  },
  {
    id: "electrolyte-solvation",
    title: "Li/Ca Salt Solvation Dynamics",
    description: "Studied solvation shell dynamics of Li/Ca salts in electrolytes and cathode interfaces using DFT/AIMD models, with ongoing ML-accelerated studies.",
    category: "Battery Research",
    tags: ["DFT", "AIMD", "ML", "Electrolyte"],
    featured: true
  },
  {
    id: "solder-alloys",
    title: "Sn-based Solder Alloy Stability",
    description: "Investigated thermo-mechanical stability of Sn-based soldering alloys using DFT/ML approaches, contributing to IEEC and SRC conferences.",
    category: "Materials Modeling",
    tags: ["DFT", "ML", "Solder", "Thermomechanical"]
  },
  {
    id: "pfas-degradation",
    title: "PFAS Degradation Mechanisms",
    description: "Collaborative research on PFAS degradation mechanisms using computational approaches.",
    category: "Environmental",
    tags: ["DFT", "Environmental", "Degradation"]
  },
  {
    id: "hpc-optimization",
    title: "HPC Cluster Optimization",
    description: "Provisioned and optimized high-performance compute nodes, integrating them into the Spiedie compute cluster at Binghamton University.",
    category: "Infrastructure",
    tags: ["HPC", "Linux", "Optimization"]
  },
  {
    id: "pipeline-corrosion",
    title: "Pipeline Steel Degradation Model",
    description: "Developed a predictive model for API 5L Grade B steel degradation in wet sour environments using SEM/EDS analysis.",
    category: "Failure Analysis",
    tags: ["Corrosion", "Steel", "SEM", "Prediction"]
  }
];

export const categories = [...new Set(projects.map(p => p.category))].sort();
export const projectTags = [...new Set(projects.flatMap(p => p.tags))].sort();
