// CLIENT: scroll-triggered viewport swiper and drag interactions
"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { VOD_CATALOG } from "@/data/site-content";
import { VodCard } from "@/components/VodCard";
import type { VodItem } from "@/types";

export function VodCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Triple items array for seamless continuous infinite looping
  const carouselItems: readonly VodItem[] = [
    ...VOD_CATALOG,
    ...VOD_CATALOG,
    ...VOD_CATALOG,
  ];

  // Viewport detection: activate swiping only when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Continuous auto-scroll loop when in viewport and not paused
  useEffect(() => {
    if (!isInView || isPaused) return;

    const track = scrollTrackRef.current;
    if (!track) return;

    let animationFrameId: number;
    const speed = 1.0;

    const step = () => {
      if (track) {
        track.scrollLeft += speed;
        const maxScroll = track.scrollWidth / 2;
        if (track.scrollLeft >= maxScroll) {
          track.scrollLeft -= maxScroll;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, isPaused]);

  const handleManualScroll = (direction: "left" | "right") => {
    const track = scrollTrackRef.current;
    if (!track) return;
    const scrollAmount = 320;
    track.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={containerRef}
      id="vod"
      className="py-16 md:py-24 bg-[#040A17] relative overflow-hidden"
      aria-label="Catalogue VOD Films et Séries"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs sm:text-sm font-bold text-[#1E7BFF] tracking-wider uppercase">
            CATALOGUE VOD 4K
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Des milliers de films & séries à la demande
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#9FB0CC] max-w-2xl leading-relaxed">
            Profitez des dernières sorties cinéma, classiques intemporels et
            séries exclusives en qualité 4K Ultra HD sans aucune interruption.
          </p>
        </div>

        {/* Manual Navigation Controls */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            type="button"
            onClick={() => handleManualScroll("left")}
            className="w-10 h-10 rounded-full border border-[#1A2A4A] bg-[#0A1428] hover:border-[#1E7BFF] hover:bg-[#1E7BFF]/10 text-white flex items-center justify-center transition-colors"
            aria-label="Faire défiler vers la gauche"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => handleManualScroll("right")}
            className="w-10 h-10 rounded-full border border-[#1A2A4A] bg-[#0A1428] hover:border-[#1E7BFF] hover:bg-[#1E7BFF]/10 text-white flex items-center justify-center transition-colors"
            aria-label="Faire défiler vers la droite"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Carousel Track with Gradient Fades */}
      <div className="relative w-full">
        {/* Left Fade Mask */}
        <div
          className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 z-20 pointer-events-none bg-gradient-to-r from-[#040A17] to-transparent"
          aria-hidden="true"
        />

        {/* Right Fade Mask */}
        <div
          className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 z-20 pointer-events-none bg-gradient-to-l from-[#040A17] to-transparent"
          aria-hidden="true"
        />

        {/* Scrollable Track */}
        <div
          ref={scrollTrackRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex gap-5 overflow-x-hidden py-4 px-4 select-none cursor-grab active:cursor-grabbing no-scrollbar"
          style={{ scrollBehavior: "auto" }}
        >
          {carouselItems.map((item, index) => (
            <VodCard key={`${item.id}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
