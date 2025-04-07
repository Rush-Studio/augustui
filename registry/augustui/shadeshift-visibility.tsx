"use client";
import { cn } from "@/lib/utils";
import React, { useState, useRef, useEffect } from "react";

interface ShadeShiftVisibilityProps {
  src: string;
  alt?: string;
  circleSize?: number;
}

export default function ShadeShiftVisibility({
  src = "https://images.unsplash.com/photo-1741851374430-d242e0dcd70c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  alt = "Image",
  circleSize = 100,
}: ShadeShiftVisibilityProps) {
  const [clickStage, setClickStage] = useState<0 | 1 | 2>(0); // 0: dimmed, 1: undimmed with hover colorful, 2: fully colorful
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (clickStage < 2) {
      setClickStage((prev) => (prev + 1) as 0 | 1 | 2);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // Create the clip-path for the circle reveal
  const getClipPath = () => {
    if (isHovering) {
      if (clickStage === 0) {
        // Undimmed grayscale circle
        return `circle(${circleSize}px at ${mousePosition.x}px ${mousePosition.y}px)`;
      } else if (clickStage === 1) {
        // Colorful circle
        return `circle(${circleSize}px at ${mousePosition.x}px ${mousePosition.y}px)`;
      }
    }
    return "none";
  };

  return (
    <div
      ref={containerRef}
      className="relative max-h-[350px] w-full cursor-pointer overflow-hidden"
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Base layer - always present */}
      <img
        src={src}
        alt={alt}
        className={cn(
          "absolute left-0 top-0 size-full object-cover transition duration-300",
          clickStage === 0 && "brightness-50 grayscale", // Apply dimming filter to grayscale image in stage 0
          clickStage === 1 && "grayscale", // Only grayscale in stage 1
        )}
        style={{ objectPosition: "center" }}
      />

      {/* Circle reveal for stage 0 (undimmed grayscale) - only when hovering */}
      {clickStage === 0 && isHovering && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            clipPath: getClipPath(),
            top: 0,
            left: 0,
          }}
        >
          <img
            src={src}
            alt=""
            className="absolute left-0 top-0 size-full object-cover grayscale"
            style={{ objectPosition: "center" }}
          />
        </div>
      )}

      {/* Colorful image for stages 1 and 2 */}
      {(clickStage === 2 || (clickStage === 1 && isHovering)) && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            clipPath: clickStage === 1 ? getClipPath() : undefined,
            top: 0,
            left: 0,
          }}
        >
          <img
            src={src}
            alt=""
            className="absolute left-0 top-0 size-full object-cover"
            style={{ objectPosition: "center" }}
          />
        </div>
      )}

      {/* Invisible spacer to maintain container height */}
      <div className="w-full" style={{ paddingBottom: "56.25%" }}></div>
    </div>
  );
}
