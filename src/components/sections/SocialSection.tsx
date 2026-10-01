"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { socialImages, socialLinks } from "@/data/social";

export default function SocialSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="social"
      ref={ref}
      className="py-[clamp(6rem,10vw,8rem)] px-[clamp(1.5rem,4vw,4rem)] bg-[#111110]"
      aria-label="Studio Journal"
    >
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <div className="flex items-center gap-4 mb-12">
            <span className="font-body text-[0.65rem] font-medium tracking-[0.25em] uppercase text-[#6b6358]">
              STUDIO JOURNAL
            </span>
            <span className="w-12 h-px bg-[#2a2925]" />
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[0.65rem] font-medium tracking-[0.25em] text-[#6b6358] hover:text-[#f0ebe3] transition-colors duration-300"
            >
              @atelier.noir.studio
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px]">
          {socialImages.map((item, index) => (
            <motion.div
              key={item.id}
              className={`relative group cursor-pointer overflow-hidden ${
                index === 0
                  ? "col-span-1 aspect-square"
                  : index === 1
                  ? "col-span-2 aspect-square md:col-span-2"
                  : index === 2
                  ? "col-span-1 aspect-square"
                  : index === 3
                  ? "col-span-2 aspect-square md:col-span-2"
                  : index === 4
                  ? "col-span-1 aspect-square"
                  : "col-span-1 aspect-square"
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes={
                  index === 1 || index === 3
                    ? "(min-width: 768px) 50vw, 100vw"
                    : "(min-width: 768px) 25vw, 50vw"
                }
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-[#111110]/0 group-hover:bg-[#111110]/20 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
