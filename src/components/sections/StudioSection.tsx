"use client";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { studio } from "@/data/studio";

export default function StudioSection() {
  return (
    <section id="studio" className="py-[clamp(4rem,8vw,6rem)] px-[clamp(1.5rem,4vw,4rem)]" aria-label="Studio">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[clamp(2rem,4vw,4rem)]">
          <Reveal>
            <SectionLabel number="01" label="STUDIO" className="lg:pt-3" />
          </Reveal>
          <div>
            <Reveal delay={0.05}>
              <h2 className="font-display text-[clamp(2.25rem,5vw,4.5rem)] font-light leading-[1.1] tracking-[-0.02em] mb-8 lg:mb-12">
                <span className="block">We create interiors</span>
                <span className="block">where architecture,</span>
                <span className="block">material and light</span>
                <span className="block italic text-[#c9a96e]">exist in balance.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div>
                  {studio.description.map((p, i) => (
                    <p key={i} className="text-[0.95rem] leading-[1.75] text-[#a09889] mb-5">
                      {p}
                    </p>
                  ))}
                </div>
                <div className="flex flex-col justify-end">
                  <div className="border-t border-[#2a2925] pt-8">
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <span className="text-[#c9a96e] text-3xl font-display font-light">15+</span>
                        <p className="text-[#6b6358] text-xs mt-1 uppercase tracking-wider">Years of Practice</p>
                      </div>
                      <div>
                        <span className="text-[#c9a96e] text-3xl font-display font-light">48</span>
                        <p className="text-[#6b6358] text-xs mt-1 uppercase tracking-wider">Projects Completed</p>
                      </div>
                      <div>
                        <span className="text-[#c9a96e] text-3xl font-display font-light">12</span>
                        <p className="text-[#6b6358] text-xs mt-1 uppercase tracking-wider">Design Awards</p>
                      </div>
                      <div>
                        <span className="text-[#c9a96e] text-3xl font-display font-light">3</span>
                        <p className="text-[#6b6358] text-xs mt-1 uppercase tracking-wider">Countries</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
