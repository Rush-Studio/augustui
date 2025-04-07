"use client";

import { motion } from "framer-motion";
import { ShowcaseCard } from "./ShowcaseCard";

type ShowcaseItem = {
  slug: string;
  [key: string]: any;
};

interface MarqueeShowcaseProps {
  items: ShowcaseItem[];
  duration?: number;
  pauseOnHover?: boolean;
}

export function MarqueeShowcase({
  items,
  duration = 30,
  pauseOnHover = true,
}: MarqueeShowcaseProps) {
  return (
    <div
      className="relative w-full overflow-hidden py-6 md:py-8"
      aria-hidden="true"
    >
      <motion.div
        className="flex gap-6 overflow-visible px-4"
        initial={{ x: 0 }}
        animate={{ x: `-${items.length * 320}px` }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
          ease: "linear",
          repeatDelay: 0,
        }}
        {...(pauseOnHover && { whileHover: { animationPlayState: "paused" } })}
      >
        {/* Duplicate items to create a seamless loop */}
        {[...items, ...items, ...items].map((item, index) => (
          <div
            key={`${item.slug}-${index}`}
            className="w-[280px] shrink-0 md:w-[300px]"
          >
            <ShowcaseCard
              {...item}
              href={item.slug}
              title={item.title}
              image={item.image}
            />
          </div>
        ))}
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-secondary to-transparent sm:w-24"></div>
      <div className="absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-secondary to-transparent sm:w-24"></div>
    </div>
  );
}
