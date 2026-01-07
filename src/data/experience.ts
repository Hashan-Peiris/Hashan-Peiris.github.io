// Experience data - update this file to add/edit experience
export interface Experience {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  type: "research" | "teaching" | "industry";
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    id: "gra-binghamton",
    title: "Graduate Research Assistant",
    organization: "Binghamton University",
    location: "NY, USA",
    period: "Dec 2022 – Present",
    type: "research",
    highlights: [
      "Modeled chemical activity on Ni/Co-rich interfaces of NMC-811 cathodes using DFT and AIMD simulations",
      "Studied solvation shell dynamics of Li/Ca salts in electrolytes using DFT/AIMD models",
      "Investigated thermo-mechanical stability of Sn-based soldering alloys using DFT/ML approaches",
      "Provisioned and optimized high-performance compute nodes for the Spiedie cluster",
      "Authored successful grant proposals securing funding from NSF, IEEC, SRC, and XSEDE/ACCESS"
    ]
  },
  {
    id: "gta-binghamton",
    title: "Graduate Teaching Assistant",
    organization: "Binghamton University",
    location: "NY, USA",
    period: "Jan 2020 – Dec 2022",
    type: "teaching",
    highlights: [
      "Delivered laboratory and discussion-based teaching sessions for PHYS 121/122/131/132",
      "Served as Computational TA providing technical support in PHYS 568",
      "Managed experiments and supported student learning"
    ]
  },
  {
    id: "api-inspector",
    title: "API Certified Inspector (Consultant)",
    organization: "Chevron Lubricants",
    location: "Sri Lanka",
    period: "Mar – Jun 2019",
    type: "industry",
    highlights: [
      "Conducted certified inspections of Pressure Safety Valves (PSVs) and Pressure Relief Valves (PRVs)",
      "Supervised establishment of maintenance SOPs for API 510 compliance",
      "Advised on maintenance and testing protocols"
    ]
  },
  {
    id: "gra-moratuwa",
    title: "Graduate Research/Teaching Assistant",
    organization: "University of Moratuwa",
    location: "Sri Lanka",
    period: "Jan 2019 – Dec 2019",
    type: "research",
    highlights: [
      "Modeled molecular behavior of glass-metal specimens using LAMMPS and VMD",
      "Performed AFM pico-indentation experiments to verify computational models"
    ]
  },
  {
    id: "trainee-camso",
    title: "Trainee Engineer",
    organization: "Camso Loadstar (Michelin)",
    location: "Sri Lanka",
    period: "Jun – Dec 2017",
    type: "industry",
    highlights: [
      "Performed NDT techniques (PT, UT, RT) and failure analysis on wheels and assemblies",
      "Evaluated weldments for wheels and components for quality standards"
    ]
  }
];
