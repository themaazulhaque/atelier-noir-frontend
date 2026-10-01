export interface Project {
  id: string;
  slug: string;
  number: string;
  name: string;
  location: string;
  category: string;
  year: number;
  description: string;
  mediaType: "image" | "video";
  image: string;
  imageAlt: string;
  poster?: string;
  video?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "the-lutyens-estate",
    slug: "the-lutyens-estate",
    number: "01",
    name: "The Lutyens Estate",
    location: "New Delhi",
    category: "Private Residence",
    year: 2024,
    description:
      "A meticulous restoration of a heritage Lutyens bungalow, blending colonial grandeur with restrained modern living. Every room was reimagined to honour original proportions while introducing contemporary comfort and understated luxury.",
    mediaType: "image",
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&q=80",
    imageAlt: "Elegant living room with high ceilings, marble flooring, and curated art pieces in a restored Lutyens bungalow",
    featured: true,
  },
  {
    id: "the-altair-residence",
    slug: "the-altair-residence",
    number: "02",
    name: "The Altair Residence",
    location: "Mumbai",
    category: "Contemporary Apartment",
    year: 2024,
    description:
      "A 4,200 sq ft apartment on the 32nd floor of Altair, reimagined as a serene urban retreat. Warm wood tones, layered textiles, and expansive views create a dialogue between city energy and domestic calm.",
    mediaType: "video",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    imageAlt: "Spacious high-rise apartment with panoramic city views, walnut cabinetry, and soft ambient lighting",
    poster: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    video: "https://cdn.coverr.co/videos/coverr-a-living-room-with-a-view-of-the-city-5765/1080p.mp4",
    featured: true,
  },
  {
    id: "the-verandah",
    slug: "the-verandah",
    number: "03",
    name: "The Verandah",
    location: "Goa",
    category: "Boutique Hospitality",
    year: 2023,
    description:
      "An intimate 12-key boutique hotel nestled among cashew groves. The design draws from Goan vernacular architecture—exposed laterite walls, terracotta tiles, and deep verandahs that blur the boundary between indoors and out.",
    mediaType: "image",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    imageAlt: "Boutique hotel room with exposed laterite stone walls, rattan furniture, and lush tropical garden views",
    featured: true,
  },
  {
    id: "dune-house",
    slug: "dune-house",
    number: "04",
    name: "Dune House",
    location: "Dubai",
    category: "Modern Residence",
    year: 2024,
    description:
      "Set within the Arabian desert landscape, this villa draws its palette from sand, stone, and sky. Sculptural forms, rammed-earth textures, and courtyards create a home that feels both monumental and deeply grounded.",
    mediaType: "video",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    imageAlt: "Modern desert villa with rammed earth walls, minimalist furniture, and a central courtyard garden",
    poster: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    video: "https://cdn.coverr.co/videos/coverr-walkway-in-a-modern-building-2478/1080p.mp4",
  },
  {
    id: "the-mangrove-villa",
    slug: "the-mangrove-villa",
    number: "05",
    name: "The Mangrove Villa",
    location: "Alibag",
    category: "Coastal Residence",
    year: 2023,
    description:
      "A waterfront villa designed around its mangrove setting. Reclaimed teak, open-air pavilions, and a muted coastal palette ensure the house remains a quiet observer of the tides rather than a spectacle upon them.",
    mediaType: "image",
    image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80",
    imageAlt: "Coastal villa with open-air living spaces, reclaimed wood finishes, and views of mangrove waters",
  },
  {
    id: "studio-atelier",
    slug: "studio-atelier",
    number: "06",
    name: "Studio Atelier",
    location: "New Delhi",
    category: "Commercial Interior",
    year: 2024,
    description:
      "Our own studio, conceived as a living laboratory for materials, craft, and collaboration. Raw concrete, hand-forged steel, and curated displays of sourced materials define a workspace that doubles as an experiential gallery.",
    mediaType: "image",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80",
    imageAlt: "Industrial design studio with concrete walls, steel display shelves, and curated material samples",
  },
];
