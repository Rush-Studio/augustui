"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";

const sampleImages = [
  "https://images.unsplash.com/photo-1721059537602-e844ccc60c94?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1661962399580-80301d32d791?q=80&w=3850&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1663792573804-0347dfaffdab?q=80&w=3880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1664700651198-42cf8d382dc3?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1722929517020-69d5530e8c92?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1711239682372-fd545e32cb5b?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1663868891817-8853b9eb83f0?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1721059571819-e57015549fa1?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

interface ShapeShifterVariant {
  borderRadius: string;
  width: string;
  height: string;
  rotate: number;
}

interface ShapeShifterProps {
  images: string[];
  imagesInterval?: number;
  shapeInterval?: number;
  shapeVariants?: ShapeShifterVariant[] | false;
  className?: string;
}

export default function ShapeShifter({
  images = sampleImages,
  imagesInterval = 500,
  shapeInterval = 1500,
  shapeVariants,
  className,
}: ShapeShifterProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentShape, setCurrentShape] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const preloadedImages = useRef<HTMLImageElement[]>([]);

  // Preload all images
  useEffect(() => {
    let loadedCount = 0;
    const imageElements: HTMLImageElement[] = [];

    images.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        console.error(`Failed to load image: ${src}`);
        loadedCount++;
        if (loadedCount === images.length) {
          setImagesLoaded(true);
        }
      };
      imageElements[index] = img;
    });

    preloadedImages.current = imageElements;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Set loaded state after component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Change image every second
  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, imagesInterval);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imagesLoaded]);

  // Cycle through shapes
  useEffect(() => {
    if (!imagesLoaded || !shapeVariants) return;

    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex =
        (currentIndex + 1) %
        (Array.isArray(shapeVariants) ? shapeVariants.length : 1);
      setCurrentShape(currentIndex);
    }, shapeInterval);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imagesLoaded]);

  return (
    <div
      className={cn(
        "relative flex size-full items-center justify-center",
        className,
      )}
    >
      <motion.div
        className="flex items-center justify-center overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500"
        initial={
          isLoaded && shapeVariants
            ? {
                borderRadius: shapeVariants[0].borderRadius,
                width: shapeVariants[0].width,
                height: shapeVariants[0].height,
                rotate: shapeVariants[0].rotate,
              }
            : false
        }
        animate={
          shapeVariants && typeof currentShape === "number"
            ? {
                borderRadius: shapeVariants[currentShape].borderRadius,
                width: shapeVariants[currentShape].width,
                height: shapeVariants[currentShape].height,
                rotate: shapeVariants[currentShape].rotate,
              }
            : false
        }
        variants={undefined}
        style={
          !isLoaded
            ? {
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                overflow: "hidden",
              }
            : undefined
        }
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 13,
        }}
      >
        {imagesLoaded ? (
          <img
            src={images[currentImageIndex]}
            alt="Changing image"
            className="size-full object-cover"
          />
        ) : (
          <div className="size-full animate-pulse bg-gray-300"></div>
        )}
      </motion.div>
    </div>
  );
}
