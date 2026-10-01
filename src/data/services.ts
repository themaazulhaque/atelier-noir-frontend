export interface Service {
  id: string;
  number: string;
  name: string;
  description: string;
}

export const services: Service[] = [
  {
    id: "interior-architecture",
    number: "01",
    name: "Interior Architecture",
    description:
      "We shape the bones of a space—reconfiguring layouts, redefining volumes, and orchestrating the flow between rooms so that architecture and interior become a single, seamless experience.",
  },
  {
    id: "residential-interiors",
    number: "02",
    name: "Residential Interiors",
    description:
      "From apartment refreshes to full home commissions, we create private spaces that feel deeply personal—layered, considered, and built around the rhythms of everyday life.",
  },
  {
    id: "hospitality-design",
    number: "03",
    name: "Hospitality Design",
    description:
      "Hotels, restaurants, and retreats demand atmosphere at scale. We design environments that tell a story, balancing guest experience with operational intelligence and brand identity.",
  },
  {
    id: "furniture-material-selection",
    number: "04",
    name: "Furniture & Material Selection",
    description:
      "We source and curate furniture, finishes, and fabrics that carry meaning—from artisan-crafted heirlooms to precision-engineered contemporary pieces, each chosen for context and longevity.",
  },
  {
    id: "lighting-design",
    number: "05",
    name: "Lighting Design",
    description:
      "Light transforms how a space is felt. We design layered lighting schemes—natural, ambient, and accent—that shape mood, highlight texture, and bring warmth to every hour of the day.",
  },
  {
    id: "spatial-styling",
    number: "06",
    name: "Spatial Styling",
    description:
      "The final layer that gives a room its soul. We style with art, objects, and greenery to create moments of surprise and quiet beauty that make a house feel truly lived in.",
  },
];
