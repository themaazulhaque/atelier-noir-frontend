"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects, type Project } from "@/data/projects";

function ProjectMedia({
  project,
  aspect,
  index,
}: {
  project: Project;
  aspect: string;
  index: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const isVideo = project.mediaType === "video" && project.video;

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isVideo) return;

    if (isHovered) {
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isHovered, isVideo]);

  return (
    <Reveal delay={0.1 + index * 0.08}>
      <div
        className="group relative overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`relative ${aspect}`}>
          {isVideo ? (
            <>
              <Image
                src={project.poster || project.image}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={`object-cover transition-opacity duration-300 ${
                  isHovered && videoLoaded ? "opacity-0" : "opacity-100"
                }`}
                priority={index < 2}
              />
              <video
                ref={videoRef}
                src={project.video}
                poster={project.poster}
                muted
                playsInline
                loop
                preload="metadata"
                onLoadedData={() => setVideoLoaded(true)}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                  isHovered && videoLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
            </>
          ) : (
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              priority={index < 2}
            />
          )}
          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
        </div>
      </div>
    </Reveal>
  );
}

function ProjectMeta({
  number,
  category,
}: {
  number: string;
  category: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="font-body text-[0.65rem] font-medium tracking-[0.2em] uppercase text-[#c9a96e]">
        {number}
      </span>
      <span className="w-8 h-px bg-[#2a2925]" />
      <span className="font-body text-[0.65rem] font-medium tracking-[0.2em] uppercase text-[#6b6358]">
        {category}
      </span>
    </div>
  );
}

function ProjectInfo({
  project,
  compact,
}: {
  project: (typeof projects)[0];
  compact?: boolean;
}) {
  return (
    <div className={compact ? "space-y-2" : "space-y-3"}>
      <ProjectMeta number={project.number} category={project.category} />
      <Reveal delay={0.15}>
        <h3 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-light leading-[1.2] tracking-[-0.01em] text-[#f0ebe3]">
          {project.name}
        </h3>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="font-body text-[0.7rem] tracking-[0.15em] uppercase text-[#6b6358]">
          {project.location} · {project.category} · {project.year}
        </p>
      </Reveal>
      {!compact && (
        <Reveal delay={0.25}>
          <p className="text-[0.9rem] leading-[1.7] text-[#a09889] max-w-[480px]">
            {project.description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ── Layout: Full-width image above, info below ── */
function LayoutFull({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <div className="space-y-5 lg:space-y-6">
      <ProjectMedia
        project={project}
        aspect="aspect-[16/9]"
        index={index}
      />
      <ProjectInfo project={project} />
    </div>
  );
}

/* ── Layout: Asymmetric split — large left, small + info right ── */
function LayoutAsymmetric({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-5 lg:gap-8">
      <ProjectMedia
        project={project}
        aspect="aspect-[4/5]"
        index={index}
      />
      <div className="flex flex-col justify-center space-y-5 lg:space-y-6">
        <ProjectInfo project={project} />
        <Reveal delay={0.35}>
          <div className="hidden lg:block w-12 h-px bg-[#2a2925]" />
        </Reveal>
      </div>
    </div>
  );
}

/* ── Layout: Editorial — text left, two stacked images right ── */
function LayoutEditorial({
  project,
  index,
  secondProject,
}: {
  project: (typeof projects)[0];
  index: number;
  secondProject?: (typeof projects)[0];
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6 lg:gap-8">
      <div className="flex flex-col justify-center space-y-5 lg:pr-6">
        <ProjectInfo project={project} />
      </div>
      <div className="space-y-3">
        <ProjectMedia
          project={project}
          aspect="aspect-[3/2]"
          index={index}
        />
        {secondProject && (
          <ProjectMedia
            project={secondProject}
            aspect="aspect-[3/2]"
            index={index + 1}
          />
        )}
      </div>
    </div>
  );
}

/* ── Layout: Wide — info left, large image right ── */
function LayoutWide({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-6 lg:gap-8 items-center">
      <div className="flex flex-col justify-center space-y-5 lg:pl-4">
        <ProjectInfo project={project} />
      </div>
      <ProjectMedia
        project={project}
        aspect="aspect-[4/3]"
        index={index}
      />
    </div>
  );
}

/* ── Layout: Full-width variant with offset image ── */
function LayoutFullOffset({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <div className="space-y-5">
      <Reveal delay={0.1}>
        <div className="max-w-[520px] mb-1">
          <ProjectInfo project={project} />
        </div>
      </Reveal>
      <ProjectMedia
        project={project}
        aspect="aspect-[16/9]"
        index={index}
      />
    </div>
  );
}

/* ── Layout: Split with reversed proportions ── */
function LayoutSplitReverse({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-5 lg:gap-8">
      <div className="flex flex-col justify-center space-y-5 order-2 lg:order-1">
        <ProjectInfo project={project} />
      </div>
      <div className="order-1 lg:order-2">
        <ProjectMedia
          project={project}
          aspect="aspect-[3/4]"
          index={index}
        />
      </div>
    </div>
  );
}

/* ── Main Section ── */
export default function ProjectsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    queueMicrotask(onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const layouts = [
    LayoutFull,
    LayoutAsymmetric,
    LayoutEditorial,
    LayoutWide,
    LayoutFullOffset,
    LayoutSplitReverse,
  ];

  return (
    <section id="projects" className="bg-[#111110]" aria-label="Projects">
      <div className="py-[clamp(4rem,8vw,6rem)] px-[clamp(1.5rem,4vw,4rem)]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-[clamp(2rem,4vw,4rem)]">
            <Reveal>
              <SectionLabel number="02" label="WORK" className="lg:pt-2" />
            </Reveal>
            <div className="space-y-[clamp(3rem,5vw,5rem)]">
              {projects.map((project, i) => {
                const Layout = layouts[i];
                return (
                  <Reveal key={project.id} delay={i * 0.05}>
                    <article>
                      <Layout
                        project={project}
                        index={i}
                        {...(i === 2 ? { secondProject: projects[i + 1] } : {})}
                      />
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── Embla Carousel Preview Strip ── */}
      <div className="border-t border-[#2a2925]">
        <div className="max-w-[1440px] mx-auto px-[clamp(1.5rem,4vw,4rem)] py-8 md:py-10">
          <Reveal>
            <div className="flex items-center justify-between mb-6">
              <p className="font-body text-[0.65rem] font-medium tracking-[0.25em] uppercase text-[#6b6358]">
                Gallery Preview
              </p>
              <div className="flex gap-3">
                <button
                  onClick={scrollPrev}
                  disabled={!canScrollPrev}
                  className="w-10 h-10 border border-[#2a2925] flex items-center justify-center text-[#a09889] hover:border-[#c9a96e] hover:text-[#c9a96e] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
                  aria-label="Previous project"
                >
                  ←
                </button>
                <button
                  onClick={scrollNext}
                  disabled={!canScrollNext}
                  className="w-10 h-10 border border-[#2a2925] flex items-center justify-center text-[#a09889] hover:border-[#c9a96e] hover:text-[#c9a96e] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
                  aria-label="Next project"
                >
                  →
                </button>
              </div>
            </div>
          </Reveal>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-3 md:gap-4">
              {projects.map((project, i) => (
                <div
                  key={project.id}
                  className="flex-none w-[calc(50%-0.375rem)] md:w-[calc(33.333%-0.533rem)] lg:w-[calc(25%-0.75rem)] cursor-pointer"
                  onClick={() => emblaApi?.scrollTo(i)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      className={`object-cover transition-all duration-500 ${
                        selectedIndex === i
                          ? "opacity-100 scale-100"
                          : "opacity-40 scale-[1.02]"
                      }`}
                    />
                    <div
                      className={`absolute inset-0 border transition-colors duration-500 ${
                        selectedIndex === i
                          ? "border-[#c9a96e]/40"
                          : "border-transparent"
                      }`}
                    />
                  </div>
                  <div className="mt-2.5 space-y-0.5">
                    <p className="font-body text-[0.6rem] tracking-[0.2em] uppercase text-[#c9a96e]">
                      {project.number}
                    </p>
                    <p className="font-display text-[0.9rem] font-light text-[#f0ebe3]">
                      {project.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-6 h-px bg-[#2a2925] relative">
            <motion.div
              className="absolute top-0 left-0 h-full bg-[#c9a96e]"
              animate={{
                width: `${((selectedIndex + 1) / projects.length) * 100}%`,
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
