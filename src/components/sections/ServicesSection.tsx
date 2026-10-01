"use client";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { services } from "@/data/services";

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-[clamp(4rem,8vw,6rem)] px-[clamp(1.5rem,4vw,4rem)]" aria-label="Services">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[clamp(2rem,4vw,4rem)]">
          <Reveal>
            <SectionLabel number="04" label="SERVICES" className="lg:pt-3" />
          </Reveal>
          <div>
            <Reveal delay={0.05}>
              <h2 className="font-display text-[clamp(2.25rem,5vw,4.5rem)] font-light leading-[1.1] tracking-[-0.02em] mb-12">
                What We Do
              </h2>
            </Reveal>

            <div>
              {services.map((service, i) => {
                const isHovered = hoveredIndex === i;
                const isLast = i === services.length - 1;

                return (
                  <Reveal key={service.id} delay={0.1 + i * 0.06}>
                    <div
                      className={`group grid grid-cols-[40px_1fr_30px] md:grid-cols-[60px_1fr_40px] items-start py-6 md:py-8 cursor-pointer transition-all duration-500 ${
                        isLast ? "border-t border-b" : "border-t"
                      } ${isHovered ? "border-[#c9a96e]/30 bg-[#1a1918]" : "border-[#2a2925] bg-transparent"}`}
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <span className="font-body text-[0.65rem] md:text-[0.7rem] font-medium tracking-[0.15em] text-[#6b6358] pt-1">
                        {service.number}
                      </span>
                      <div className="space-y-2 md:space-y-3">
                        <h3 className="font-display text-[clamp(1.125rem,2.25vw,1.75rem)] md:text-[clamp(1.25rem,2.5vw,2rem)] font-light leading-[1.2] text-[#f0ebe3] group-hover:text-[#c9a96e] transition-colors duration-500">
                          {service.name}
                        </h3>
                        <p
                          className={`text-[0.85rem] md:text-[0.9rem] leading-[1.75] text-[#a09889] max-w-[600px] transition-all duration-500 ${
                            isHovered ? "opacity-100 max-h-40" : "opacity-0 max-h-0 overflow-hidden"
                          }`}
                        >
                          {service.description}
                        </p>
                      </div>
                      <span
                        className={`text-[1rem] md:text-[1.2rem] transition-all duration-300 pt-1 ${
                          isHovered ? "text-[#c9a96e] translate-x-1" : "text-[#6b6358] translate-x-0"
                        }`}
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
