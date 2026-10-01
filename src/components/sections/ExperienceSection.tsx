"use client";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { studio } from "@/data/studio";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-[clamp(4rem,8vw,6rem)] px-[clamp(1.5rem,4vw,4rem)]" aria-label="Experience">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[clamp(2rem,4vw,4rem)]">
          <Reveal>
            <SectionLabel number="03" label="EXPERIENCE" className="lg:pt-3" />
          </Reveal>
          <div>
            <Reveal delay={0.05}>
              <h2 className="font-display text-[clamp(2.25rem,5vw,4.5rem)] font-light leading-[1.1] tracking-[-0.02em] mb-12">
                <span className="block">A Practice Built</span>
                <span className="block">Over Time</span>
              </h2>
            </Reveal>

            <div className="space-y-0">
              {studio.experience.map((item, i) => (
                <Reveal key={item.year} delay={0.1 + i * 0.08}>
                  <div className="group grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-8 py-8 md:py-10 border-t border-[#2a2925] hover:bg-[#1a1918] transition-colors duration-500">
                    <span className="font-display text-[clamp(2rem,3vw,3.5rem)] font-light text-[#c9a96e] leading-none">
                      {item.year}
                    </span>
                    <div className="space-y-3">
                      <h3 className="font-display text-[clamp(1.25rem,2vw,1.75rem)] font-light text-[#f0ebe3] leading-[1.2] group-hover:text-[#c9a96e] transition-colors duration-500">
                        {item.title}
                      </h3>
                      <p className="text-[0.95rem] leading-[1.75] text-[#a09889] max-w-[600px]">
                        {item.description}
                      </p>
                    </div>
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
