export interface SocialImage {
  id: string;
  image: string;
  alt: string;
  platform: string;
}

export const socialLinks = {
  instagram: "https://instagram.com/atelier.noir.studio",
  pinterest: "https://pinterest.com/ateliernoirstudio",
  behance: "https://behance.net/ateliernoirstudio",
};

export const socialImages: SocialImage[] = [
  {
    id: "social-01",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
    alt: "Minimalist living room with neutral tones, clean lines, and natural light streaming through large windows",
    platform: "instagram",
  },
  {
    id: "social-02",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
    alt: "Contemporary kitchen with matte black fixtures, white marble countertops, and warm wood accents",
    platform: "pinterest",
  },
  {
    id: "social-03",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    alt: "Serene bedroom with linen bedding, organic textures, and a calming earth-tone palette",
    platform: "behance",
  },
  {
    id: "social-04",
    image: "https://images.livspace-cdn.com/w:3840/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/1-2025-1736068988-NDPD1/jfm-1736069001-9OxTK/bathroom-1736770548-kfd53/br-10-1737111094-Wk7T1.jpg",
    alt: "Elegant bathroom with freestanding bathtub, terrazzo flooring, and brass hardware",
    platform: "instagram",
  },
  {
    id: "social-05",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80",
    alt: "Cozy reading nook with built-in shelving, plush seating, and soft ambient lighting",
    platform: "pinterest",
  },
  {
    id: "social-06",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=658&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Open-plan dining area with sculptural light fixture, long communal table, and indoor plants",
    platform: "behance",
  },
];
