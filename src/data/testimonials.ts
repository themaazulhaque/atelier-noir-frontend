export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  designation: string;
  src: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote:
      "They understood the soul of the house before touching a single surface. Every detail feels inevitable—like the home was always meant to look and feel this way.",
    name: "Priya & Arjun Mehta",
    designation: "Private Residence · New Delhi",
    src: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&q=80",
  },
  {
    id: "testimonial-2",
    quote:
      "What impressed us most was their ability to translate an emotion into a material language. Our apartment doesn't just look beautiful—it feels like us.",
    name: "Neha Kapoor",
    designation: "Contemporary Apartment · Mumbai",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
  },
  {
    id: "testimonial-3",
    quote:
      "Guests consistently say The Verandah feels like nowhere else. That's entirely down to the design team's sensitivity to place, texture, and light.",
    name: "Rohan & Maya D'Souza",
    designation: "Boutique Hospitality · Goa",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    id: "testimonial-4",
    quote:
      "Living in the desert, you need a home that breathes with the landscape. They delivered a villa that is both a sanctuary and a statement.",
    name: "Farid Al-Mansoori",
    designation: "Modern Residence · Dubai",
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
  },
  {
    id: "testimonial-5",
    quote:
      "The studio itself has become our favourite place to host clients. It communicates our design philosophy before we say a word.",
    name: "Arjun Khanna",
    designation: "Commercial Interior · New Delhi",
    src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&q=80",
  },
];
