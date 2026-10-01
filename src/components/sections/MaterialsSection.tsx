"use client";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Image from "next/image";
import { materials } from "@/data/materials";

export default function MaterialsSection() {
  return (
    <section id="materials" className="py-[clamp(4rem,8vw,6rem)] px-[clamp(1.5rem,4vw,4rem)]" aria-label="Materials">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[clamp(2rem,4vw,4rem)]">
          <Reveal>
            <SectionLabel number="06" label="MATERIAL" className="lg:pt-3" />
          </Reveal>
          <div>
            <Reveal delay={0.05}>
              <h2 className="font-display text-[clamp(2.25rem,5vw,4.5rem)] font-light leading-[1.1] tracking-[-0.02em] mb-12">
                The Language of Surfaces
              </h2>
            </Reveal>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-x-6 md:gap-y-10">
              {materials.map((material, i) => (
                <Reveal key={material.id} delay={0.1 + i * 0.06}>
                  <div className="group flex flex-col gap-3">
                    <div className="relative aspect-square overflow-hidden bg-[#1a1918]">
                      <Image
                        src={material.image}
                        alt={material.imageAlt}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <span className="font-body text-xs md:text-sm tracking-wide text-[#a09889] group-hover:text-[#f0ebe3] transition-colors duration-300">
                      {material.name}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
