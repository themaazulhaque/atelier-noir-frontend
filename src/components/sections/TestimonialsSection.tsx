"use client";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" aria-label="Testimonials">
      <Reveal>
        <div className="px-[clamp(1.5rem,4vw,4rem)] py-[clamp(2rem,4vw,3rem)]">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[clamp(2rem,4vw,4rem)]">
              <div>
                <span className="text-[0.65rem] md:text-[0.7rem] font-medium tracking-[0.2em] text-[#6b6358] uppercase">
                  07 — Reviews
                </span>
                <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] font-light leading-[1.15] tracking-[-0.02em] mt-4">
                  What Our Clients Say
                </h2>
              </div>
              <div />
            </div>
          </div>
        </div>
      </Reveal>
      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  );
}
