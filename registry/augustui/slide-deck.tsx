"use client";

import React, { useState, useMemo } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SlideDeckProps {
  images: string[];
  initialIndex?: number;
}

export default function SlideDeck({
  images = [
    "https://plus.unsplash.com/premium_photo-1661962542692-4fe7a4ad6b54?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661962305764-375ef76a3fb5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1697729844084-c03db2377161?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1519802772250-a52a9af0eacb?q=80&w=3136&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1442570468985-f63ed5de9086?q=80&w=3020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  initialIndex = Math.floor(images.length / 2),
}: SlideDeckProps) {
  const [activeIndex, setActiveIndex] = useState(
    initialIndex < images.length ? initialIndex : 0,
  );

  const prev = () =>
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  const next = () => setActiveIndex((prev) => (prev + 1) % images.length);

  // Calculate visible slides and their positions
  const visibleSlides = useMemo(() => {
    // If we have fewer than 7 images, just show all of them
    if (images.length <= 7) {
      return images.map((_, i) => ({
        index: i,
        position: i - activeIndex,
      }));
    }

    // For more than 7 images, we need to handle wrapping correctly
    const result = [];
    const seenIndices = new Set(); // Track which indices we've already included

    // Add the active slide first
    result.push({ index: activeIndex, position: 0 });
    seenIndices.add(activeIndex);

    // Add up to 3 slides on each side
    for (let offset = 1; offset <= 3; offset++) {
      // Add slide to the left
      const leftIndex = (activeIndex - offset + images.length) % images.length;
      if (!seenIndices.has(leftIndex)) {
        result.push({ index: leftIndex, position: -offset });
        seenIndices.add(leftIndex);
      }

      // Add slide to the right
      const rightIndex = (activeIndex + offset) % images.length;
      if (!seenIndices.has(rightIndex)) {
        result.push({ index: rightIndex, position: offset });
        seenIndices.add(rightIndex);
      }
    }

    // Sort by position to ensure correct rendering order
    return result.sort((a, b) => a.position - b.position);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, images.length]);

  return (
    <div className="relative flex h-[260px] w-full items-center justify-center overflow-hidden bg-black">
      <button
        onClick={prev}
        className="absolute left-3 z-30 rounded-full bg-black/40 p-2.5 transition-colors hover:bg-black/60"
        aria-label="Previous slide"
      >
        <ChevronLeft className="size-4 text-white" />
      </button>

      <div className="relative flex size-full items-center justify-center">
        {visibleSlides.map(({ index, position }) => {
          // Calculate distance from center (active slide)
          const distanceFromCenter = Math.abs(position);
          const isActive = distanceFromCenter === 0;
          const isLeft = position < 0;

          // Calculate size based on distance from active
          const getWidth = () => {
            if (isActive) return 320; // Even smaller main image
            if (distanceFromCenter === 1) return 55;
            if (distanceFromCenter === 2) return 40;
            return 30;
          };

          const getHeight = () => {
            if (isActive) return 200; // Smaller height
            if (distanceFromCenter === 1) return 160;
            if (distanceFromCenter === 2) return 120;
            return 90;
          };

          const getOpacity = () => {
            if (isActive) return 1;
            if (distanceFromCenter === 1) return 1;
            if (distanceFromCenter === 2) return 0.9;
            return 0.7;
          };

          // Calculate horizontal position for proper spacing
          const getTranslateX = () => {
            if (isActive) return 0;
            const direction = isLeft ? -1 : 1;

            // Increased gap between main and first side image
            const baseOffset = 200; // Main to first image gap

            if (distanceFromCenter === 1) return direction * baseOffset;
            if (distanceFromCenter === 2) return direction * (baseOffset + 60);
            return direction * (baseOffset + 100);
          };

          return (
            <motion.div
              key={`slide-${index}`}
              className={cn(
                "absolute overflow-hidden rounded-lg transition-all",
                {
                  "shadow-2xl": isActive,
                  "shadow-md": !isActive,
                },
              )}
              style={{
                width: getWidth(),
                height: getHeight(),
                zIndex: isActive ? 20 : 10 - distanceFromCenter,
                borderRadius: "8px", // Even smaller border radius
              }}
              animate={{
                width: getWidth(),
                height: getHeight(),
                opacity: getOpacity(),
                x: getTranslateX(),
                scale: isActive ? 1 : 1 - distanceFromCenter * 0.05,
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                opacity: { duration: 0.3 },
              }}
              whileHover={
                !isActive
                  ? {
                      y: -5,
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }
                  : undefined
              }
            >
              <img
                src={images[index]}
                alt={`slide-${index}`}
                className="size-full object-cover"
              />
            </motion.div>
          );
        })}
      </div>

      <button
        onClick={next}
        className="absolute right-3 z-30 rounded-full bg-black/40 p-2.5 transition-colors hover:bg-black/60"
        aria-label="Next slide"
      >
        <ChevronRight className="size-4 text-white" />
      </button>
    </div>
  );
}
