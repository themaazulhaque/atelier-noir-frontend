"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconQuote } from "@tabler/icons-react";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface AnimatedTestimonialsProps {
  testimonials: Testimonial[];
}

function WordReveal({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <span>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.04, ease: "easeOut" }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export function AnimatedTestimonials({ testimonials }: AnimatedTestimonialsProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[current];

  const imageVariants = {
    enter: (d: number) => ({ opacity: 0, scale: 1.05, x: d > 0 ? 40 : -40 }),
    center: { opacity: 1, scale: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, scale: 0.95, x: d > 0 ? -40 : 40 }),
  };

  return (
    <div className="bg-[#1a1918] w-full py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="relative w-full md:w-[420px] shrink-0">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-[3/4] w-full overflow-hidden rounded"
              >
                <img
                  src={testimonial.src}
                  alt={testimonial.name}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex-1 flex flex-col justify-center min-h-[320px]">
            <div className="relative">
              <IconQuote
                className="text-[#c9a96e] opacity-20 absolute -top-6 -left-2 w-12 h-12 md:w-16 md:h-16"
                stroke={1.5}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-2xl md:text-3xl font-display font-light italic text-[#f0ebe3] leading-relaxed mb-8">
                    <WordReveal text={testimonial.quote} />
                  </p>

                  <div>
                    <p className="font-body text-sm font-medium text-[#f0ebe3]">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-[#6b6358] mt-1">
                      {testimonial.designation}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-3 mt-10">
              <button
                onClick={prev}
                className="w-10 h-10 border border-[#2a2925] rounded flex items-center justify-center text-[#f0ebe3] hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-300 hover:scale-105"
              >
                <IconArrowLeft size={16} stroke={1.5} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 border border-[#2a2925] rounded flex items-center justify-center text-[#f0ebe3] hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-300 hover:scale-105"
              >
                <IconArrowRight size={16} stroke={1.5} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mt-10 md:mt-14 justify-center md:justify-start">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className="group relative h-[2px] w-10 bg-[#2a2925] transition-colors duration-300"
            >
              <motion.div
                className="absolute inset-0 bg-[#c9a96e] origin-left"
                initial={false}
                animate={{ scaleX: i === current ? 1 : 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
