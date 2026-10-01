"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects, type Project } from "@/data/projects";

const filters = ["All", "Residential", "Hospitality", "Commercial"] as const;

const categoryMap: Record<string, string[]> = {
  Residential: [
    "Private Residence",
    "Contemporary Apartment",
    "Modern Residence",
    "Coastal Residence",
  ],
  Hospitality: ["Boutique Hospitality"],
  Commercial: ["Commercial Interior"],
};

function matchesFilter(project: Project, filter: string): boolean {
  if (filter === "All") return true;
  return categoryMap[filter]?.includes(project.category) ?? false;
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filtered = projects.filter((p) => matchesFilter(p, activeFilter));
  const [featured, ...rest] = filtered;

  return (
    <main className="min-h-screen bg-[#111110]">
      <section className="px-[clamp(1.5rem,4vw,4rem)] pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[1440px] mx-auto"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-[#a09889] mb-4">
            Portfolio
          </p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light text-[#f0ebe3] mb-6">
            Selected Work
          </h1>
          <p className="font-body text-[clamp(1rem,1.5vw,1.125rem)] text-[#a09889] max-w-xl mb-12">
            A curated collection of our finest interior architecture projects
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 text-sm font-body tracking-wide rounded-full border transition-colors duration-300 ${
                  activeFilter === f
                    ? "border-[#c9a96e] text-[#c9a96e]"
                    : "border-[#2a2925] text-[#a09889] hover:border-[#6b6358] hover:text-[#f0ebe3]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="max-w-[1440px] mx-auto">
          {/* Featured project */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mb-6"
            >
              <div className="group relative overflow-hidden cursor-pointer">
                <div className="relative aspect-[16/9] md:aspect-[21/9]">
                  <Image
                    src={featured.image}
                    alt={featured.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="100vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 lg:p-14">
                  <span className="text-xs font-body text-[#c9a96e] tracking-[0.2em] uppercase mb-2 block">
                    {featured.number}
                  </span>
                  <h2 className="font-display text-[clamp(1.75rem,4vw,3.5rem)] font-light text-[#f0ebe3] mb-2">
                    {featured.name}
                  </h2>
                  <p className="font-body text-[0.8rem] md:text-sm text-[#a09889]">
                    {featured.location} · {featured.category} ·{" "}
                    {featured.year}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Grid of remaining projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {rest.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.3 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="group relative overflow-hidden cursor-pointer">
                  <div className="relative aspect-[3/2]">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/30" />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-7">
                    <span className="text-[0.65rem] font-body text-[#c9a96e] tracking-[0.2em] uppercase mb-1 block">
                      {project.number}
                    </span>
                    <h3 className="font-display text-[clamp(1.25rem,2.5vw,1.75rem)] font-light text-[#f0ebe3] mb-1.5">
                      {project.name}
                    </h3>
                    <p className="font-body text-[0.7rem] md:text-[0.75rem] text-[#a09889]">
                      {project.location} · {project.category} · {project.year}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
