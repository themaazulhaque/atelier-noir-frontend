export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface StudioInfo {
  name: string;
  tagline: string;
  description: string[];
  experience: TimelineItem[];
}

export const studio: StudioInfo = {
  name: "Studio Baháe",
  tagline: "Where intention becomes atmosphere",
  description: [
    "Studio Baháe is an interior architecture and design practice founded in New Delhi, working across residences, hospitality, and cultural spaces in India and abroad. We believe that great interiors are not decorated—they are composed, layer by layer, until a space feels both inevitable and alive.",
    "Our approach is rooted in materiality, craft, and a deep respect for context. Every project begins with listening—understanding how a space will be lived in, what it needs to say, and what it should quietly hold. We work with artisan networks, specialist fabricators, and a curated library of materials to deliver environments that endure beyond trends.",
  ],
  experience: [
    {
      year: "2016",
      title: "Founded in New Delhi",
      description:
        "Studio Baháe was established with a focus on residential interiors and a commitment to material-driven design.",
    },
    {
      year: "2019",
      title: "First Hospitality Project",
      description:
        "Designed The Verandah in Goa, marking the studio's entry into boutique hospitality and earning regional recognition.",
    },
    {
      year: "2022",
      title: "International Commissions",
      description:
        "Expanded to projects in Dubai and Rajasthan, bringing the studio's material-first philosophy to a wider geographic context.",
    },
    {
      year: "2024",
      title: "Studio Atelier Opens",
      description:
        "Opened a new studio and material library in New Delhi, doubling the team and deepening capabilities in lighting and spatial styling.",
    },
  ],
};
