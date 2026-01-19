export interface PersonalPost {
  id: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  url?: string;
}

export interface PersonalPhoto {
  id: string;
  title: string;
  location: string;
  date: string;
  image: string;
  camera?: string;
}

export const personalPosts: PersonalPost[] = [
  {
    id: "lab-notes-01",
    title: "Surface energy sketches and early morning coffee",
    date: "Jan 2026",
    summary:
      "Hand drawn quick looks at surface energy landscapes, with a short checklist I use before launching new AIMD runs.",
    tags: ["Notes", "Surfaces", "Workflow"],
  },
  {
    id: "field-notes-02",
    title: "From lab benches to pipeline walks",
    date: "Oct 2025",
    summary:
      "A personal reflection on how industrial inspections reshaped the way I think about failure analysis in models.",
    tags: ["Field Notes", "Failure Analysis", "Industry"],
  },
  {
    id: "travel-log-03",
    title: "Notebook: quiet hours between conference sessions",
    date: "May 2025",
    summary:
      "Short entries from a conference week, collecting the small details and people that made the trip memorable.",
    tags: ["Travel", "Writing", "Community"],
  },
];

export const personalPhotos: PersonalPhoto[] = [
  {
    id: "photo-shoreline",
    title: "Winter shoreline textures",
    location: "Binghamton, NY",
    date: "Feb 2025",
    image: "/assets/personal/photo-shoreline.svg",
    camera: "Fujifilm X-T30",
  },
  {
    id: "photo-forge",
    title: "Heat and steel glow",
    location: "Columbus, OH",
    date: "Dec 2024",
    image: "/assets/personal/photo-forge.svg",
    camera: "Sony A7C",
  },
  {
    id: "photo-lablight",
    title: "Late night lab light",
    location: "Binghamton, NY",
    date: "Aug 2024",
    image: "/assets/personal/photo-lablight.svg",
    camera: "iPhone 14 Pro",
  },
  {
    id: "photo-trail",
    title: "Trail fog layers",
    location: "Watkins Glen, NY",
    date: "Apr 2024",
    image: "/assets/personal/photo-trail.svg",
    camera: "Fujifilm X-T30",
  },
];
