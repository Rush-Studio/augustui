"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PerspectivePileProps {
  images: string[];
  className?: string;
}

export default function PerspectivePile({
  images = [
    "https://images.unsplash.com/photo-1742268351444-7e153a9fb747?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1742228896964-83f6327740ea?q=80&w=3212&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1742943679519-bb9eb364b152?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  className,
}: PerspectivePileProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn("relative size-full", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative size-full"
        animate={isHovered ? "hover" : "rest"}
        style={{ transformStyle: "preserve-3d", perspective: "1500px" }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {images.slice(0, 3).map((src, index) => (
          <Card
            key={index}
            src={src}
            index={index}
            total={Math.min(images.length, 3)}
            isHovered={isHovered}
          />
        ))}
      </motion.div>
    </div>
  );
}

interface CardProps {
  src: string;
  index: number;
  total: number;
  isHovered: boolean;
}

const Card = ({ src, index, total, isHovered }: CardProps) => {
  // Calculate z-offset based on index
  // First card (index 0) is in front, last card (index 2) is behind
  const zOffset = -index * 100;

  return (
    <motion.div
      className={cn(
        "absolute inset-0 size-full overflow-hidden rounded-2xl shadow-md transition-shadow",
        isHovered && "hover:shadow-lg",
      )}
      style={{
        zIndex: total - index,
      }}
      variants={{
        rest: {
          z: zOffset,
          y: -index * 40,
          x: 0,
          scale: 1,
          opacity: 1,
          rotateX: 0,
          rotateY: 0,
        },
        hover: {
          z: zOffset,
          y: 0, // Move up slightly when hovered
          x: (index - 1) * 80,
          scale: 1,
          opacity: 1,
          rotateX: 0,
          rotateY: -40,
        },
      }}
      transition={{
        duration: 0.3,
        ease: [0.19, 1, 0.22, 1], // Custom cubic bezier for more natural motion
      }}
      whileHover={{ y: -60 }} // Additional lift on individual hover
      whileTap={{ scale: 1 }}
    >
      <motion.div
        className="w-full h-full bg-cover bg-center rounded-2xl"
        style={{ backgroundImage: `url(${src})` }}
        variants={{
          rest: { scale: 1 },
          hover: {
            scale: 1,
          },
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
};
