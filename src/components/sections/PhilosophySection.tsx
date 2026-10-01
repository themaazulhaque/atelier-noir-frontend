"use client";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Image from "next/image";

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="py-[clamp(4rem,8vw,6rem)] px-[clamp(1.5rem,4vw,4rem)]" aria-label="Philosophy">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-[clamp(2rem,4vw,4rem)] items-start">
          <div className="space-y-8 lg:space-y-12">
            <Reveal>
              <SectionLabel number="05" label="PHILOSOPHY" className="lg:pt-3" />
            </Reveal>

            <Reveal delay={0.05}>
              <blockquote className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.15] tracking-[-0.02em] text-[#f0ebe3]">
                <span className="block">Design is not decoration.</span>
                <span className="block">It is the way</span>
                <span className="block">
                  a space <em className="italic text-[#c9a96e]">makes you feel</em>.
                </span>
              </blockquote>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-5">
                <p className="text-[0.95rem] leading-[1.8] text-[#a09889] max-w-[520px]">
                  Every project begins with a conversation—not about colours or finishes, but about how a space should
                  make you feel when you walk through the door. We believe design is an emotional act, a way of shaping
                  atmosphere before form.
                </p>
                <p className="text-[0.95rem] leading-[1.8] text-[#a09889] max-w-[520px]">
                  This philosophy guides every decision we make: from the weight of a door handle to the way light falls
                  across a room at dusk. We don&apos;t chase trends—we listen, study, and create spaces that feel inevitable.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="border-t border-[#2a2925] pt-8">
                <p className="text-[#6b6358] text-xs uppercase tracking-[0.2em] font-body">
                  Materiality · Craft · Context
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="relative mt-8 lg:mt-0">
            <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Architectural interior with dramatic natural light filtering through geometric openings"
                fill
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111110]/30 to-transparent" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
