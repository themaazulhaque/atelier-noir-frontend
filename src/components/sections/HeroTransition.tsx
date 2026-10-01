"use client";
import { Reveal } from "@/components/ui/Reveal";

export default function HeroTransition() {
  return (
    <section className="py-[clamp(4rem,8vw,6rem)] px-[clamp(1.5rem,4vw,4rem)] text-center" aria-label="Introduction">
      <div className="max-w-[900px] mx-auto">
        <Reveal>
          <div className="font-body text-[0.65rem] md:text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#c9a96e] mb-6 md:mb-8">
            A Design Studio
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] md:text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[1.1] tracking-[-0.02em] text-[#f0ebe3] mb-8 md:mb-12">
            <span className="block">Spaces designed around</span>
            <span className="block italic text-[#c9a96e]">how people actually live.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="w-[60px] h-px bg-[#3a3835] mx-auto" />
        </Reveal>
      </div>
    </section>
  );
}
