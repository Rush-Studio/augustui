"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Define the props interface
interface SwipeFlickerProps {
  className?: string;
  images?: string[];
}

export default function SwipeFlicker({ images, className }: SwipeFlickerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Default images if none are provided
  const defaultImages = [
    "https://images.unsplash.com/photo-1721059537602-e844ccc60c94?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1661962399580-80301d32d791?q=80&w=3850&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1663792573804-0347dfaffdab?q=80&w=3880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1664700651198-42cf8d382dc3?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1722929517020-69d5530e8c92?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1711239682372-fd545e32cb5b?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1663868891817-8853b9eb83f0?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1721059571819-e57015549fa1?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  // Use provided images or fall back to defaults
  const imageList = images?.length ? images : defaultImages;

  // Handle mouse movement to change active image
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const { left, width } = containerRef.current.getBoundingClientRect();
    const relativeX = e.clientX - left;
    const percentage = relativeX / width;

    // Calculate which segment the cursor is in
    const newIndex = Math.min(
      Math.floor(percentage * imageList.length),
      imageList.length - 1,
    );

    setActiveIndex(newIndex);
  };

  return (
    <div
      className={cn(
        "relative flex h-80 min-h-[350px] w-full overflow-hidden",
        className,
      )}
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      {/* Trigger areas (invisible) */}
      <div className="absolute inset-0 z-10 flex">
        {imageList.map((_, index) => (
          <div key={`trigger-${index}`} className="h-full flex-1" />
        ))}
      </div>

      {/* Images stack */}
      <div className="relative size-full">
        {imageList.map((src, index) => (
          <div
            key={`image-${index}`}
            className="absolute inset-0"
            style={{ opacity: activeIndex === index ? 1 : 0 }}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
