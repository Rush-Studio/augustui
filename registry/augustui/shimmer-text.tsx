"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface ShimmerTextProps {
  text: string;
  duration?: number;
  className?: string;
  gradient?: string;
}

export default function ShimmerText({
  text,
  duration = 2,
  className = "",
}: ShimmerTextProps) {
  return (
    <motion.h1
      className={cn(className, "bg-clip-text", "text-base", "font-medium")}
      style={{
        backgroundImage: `linear-gradient(110deg, hsl(var(--muted)), 45%, hsl(var(--foreground)), 55%, hsl(var(--muted)))`,
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
      initial={{ backgroundPosition: "200% 0" }}
      animate={{ backgroundPosition: "-200% 0" }}
      transition={{
        repeat: Infinity,
        duration: duration,
        ease: "linear",
        repeatType: "loop",
      }}
    >
      {text}
    </motion.h1>
  );
}
