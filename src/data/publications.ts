// Publications data - update this file to add/edit publications
export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  tags: string[];
  doi?: string;
  url?: string;
  pdf?: string;
  bibtex?: string;
  status?: "published" | "in-prep" | "submitted";
}

export const publications: Publication[] = [
  {
    id: "cell-reports-2024",
    title: "Electrolyte reactivity, oxygen states, and degradation mechanisms of nickel-rich cathodes",
    authors: "Peiris, H.C., Smeu, M. et al.",
    journal: "Cell Reports Physical Science",
    year: 2024,
    tags: ["DFT", "Battery", "Cathode", "NMC"],
    url: "https://www.cell.com/cell-reports-physical-science/fulltext/S2666-3864(24)00308-4",
    doi: "10.1016/j.xcrp.2024.102002",
    status: "published",
    bibtex: `@article{peiris2024electrolyte,
  title={Electrolyte reactivity, oxygen states, and degradation mechanisms of nickel-rich cathodes},
  author={Peiris, Hashan C and Smeu, Manuel},
  journal={Cell Reports Physical Science},
  year={2024}
}`
  },
  {
    id: "colloids-2023",
    title: "Computational determination of the solvation structure of LiBF4 and LiPF6 salts in battery electrolytes",
    authors: "Peiris, H.C., Smeu, M. et al.",
    journal: "Colloids and Surfaces A",
    year: 2023,
    tags: ["DFT", "AIMD", "Battery", "Electrolyte"],
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0927775723009159",
    status: "published",
    bibtex: `@article{peiris2023solvation,
  title={Computational determination of the solvation structure of LiBF4 and LiPF6 salts in battery electrolytes},
  author={Peiris, Hashan C and Smeu, Manuel},
  journal={Colloids and Surfaces A},
  year={2023}
}`
  },
  {
    id: "acs-ami-2025",
    title: "Polyvinylidene Fluoride (PVDF)–Trimethylaluminum (TMA) Chemistry: First-Principles Investigation and Experimental Insights",
    authors: "Peiris, H.C., et al.",
    journal: "ACS Applied Materials & Interfaces",
    year: 2025,
    tags: ["DFT", "Polymer", "ALD"],
    url: "https://pubs.acs.org/doi/abs/10.1021/acsami.4c14135",
    status: "published"
  },
  {
    id: "engineer-2019",
    title: "Study of the Effect of Sulphide Stress Corrosion on the Load Bearing Capability of API 5L Grade B Steel used in Petroleum Pipelines",
    authors: "Peiris, H.C.",
    journal: "Engineer (Sri Lanka)",
    year: 2019,
    tags: ["Corrosion", "Steel", "Failure Analysis"],
    url: "https://engineer.sljol.info/articles/10.4038/engineer.v53i2.7408",
    status: "published"
  },
  {
    id: "n2o-jacs-2025",
    title: "High-pressure nitrous oxide reduction by a Cu(II) carbon nitride electrocatalyst",
    authors: "Peiris, H.C., Smeu, M. et al.",
    journal: "Journal of the American Chemical Society",
    year: 2025,
    tags: ["DFT", "Catalysis", "Electrocatalyst"],
    status: "submitted"
  },
  {
    id: "solder-ieec-2022",
    title: "Thermo-mechanical modeling of Sn-based solder alloys",
    authors: "Peiris, H.C., Smeu, M., et al.",
    journal: "IEEC Conference Proceedings",
    year: 2022,
    tags: ["DFT", "ML", "Solder"],
    status: "published"
  }
];

export const allTags = [...new Set(publications.flatMap(p => p.tags))].sort();
