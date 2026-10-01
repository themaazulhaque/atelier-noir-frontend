export interface Material {
  id: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const materials: Material[] = [
  {
    id: "marble",
    name: "Marble",
    description:
      "Carrara, Statuario, and Indian Green—sourced from quarries in Italy and Rajasthan. Each slab is selected for its veining, depth, and ability to age with quiet elegance.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    imageAlt: "Close-up of white Carrara marble with subtle grey veining on a polished countertop surface",
  },
  {
    id: "natural-oak",
    name: "Natural Oak",
    description:
      "Quarter-sawn European oak finished with hand-rubbed oils. Its warm grain grounds a room with an organic warmth that deepens beautifully over decades of use.",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80",
    imageAlt: "Natural oak wood grain texture with warm honey tones and visible linear grain patterns",
  },
  {
    id: "brushed-brass",
    name: "Brushed Brass",
    description:
      "Unlacquered and living-finish brass that develops a rich patina over time. Used in hardware, lighting, and trim to introduce a quiet warmth and restrained luxury.",
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&q=80",
    imageAlt: "Brushed brass hardware detail with a soft matte golden finish on a dark wood surface",
  },
  {
    id: "raw-concrete",
    name: "Raw Concrete",
    description:
      "Board-formed and polished concrete that celebrates imperfection. Its tactile, industrial quality provides a grounding counterpoint to softer materials in any interior.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    imageAlt: "Raw concrete wall with board-formed texture showing wood grain imprint patterns",
  },
  {
    id: "handwoven-linen",
    name: "Handwoven Linen",
    description:
      "Ethically sourced from small mills in Belgium and Rajasthan. Its natural drape and lived-in texture bring softness, breathability, and a human hand to every interior.",
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80",
    imageAlt: "Handwoven linen fabric in a neutral oatmeal tone with visible weave texture and natural drape",
  },
  {
    id: "textured-plaster",
    name: "Textured Plaster",
    description:
      "Venetian and lime plasters applied by hand to create walls with depth, movement, and a soft mineral glow. Each surface is unique—a quiet canvas that changes with the light.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
    imageAlt: "Textured lime plaster wall with subtle tonal variations and a soft matte mineral finish",
  },
];
