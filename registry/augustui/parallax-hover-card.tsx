"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useInView } from "motion/react";

export interface Layer {
  type: "backgroundImage" | "heading" | "subheading" | "foregroundImage";
  src?: string;
  alt?: string;
  content?: React.ReactNode;
  depth: number;
  className: string;
}

export default function ParallaxHoverCard({
  layers = [
    {
      type: "backgroundImage",
      src: "https://plus.unsplash.com/premium_photo-1714051660720-888e8454a021?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Sky",
      depth: 0, // No parallax for background
      className: "z-10",
    },
    {
      type: "heading",
      content: (
        <h2 className="text-2xl font-bold text-white uppercase">
          PARALLAX CARD
        </h2>
      ),
      depth: 0.3,
      className: "z-30",
    },
    {
      type: "foregroundImage",
      src: "/liberty.png",
      alt: "Castle",
      depth: 0.5, // Reduced parallax for foreground
      className: "z-20",
    },
    {
      type: "subheading",
      content: (
        <div className="flex flex-col">
          <p className="text-sm">Status of Liberty</p>
          <p className="text-sm">New York City, USA</p>
        </div>
      ),
      depth: 0,
      className: "z-40",
    },
  ],
  maxOffsetX = 400,
  maxOffsetY = 2000,
}: {
  layers: Layer[];
  maxOffsetX?: number;
  maxOffsetY?: number;
}) {
  const SPRING_CONFIG = { damping: 100, stiffness: 400 };
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, SPRING_CONFIG);
  const springY = useSpring(y, SPRING_CONFIG);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) {
      x.set(0);
      y.set(0);
    }
  }, [isInView]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current || !isInView) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      let distanceX = e.clientX - centerX;
      let distanceY = e.clientY - centerY;

      // Limit the maximum offset to prevent revealing edges
      distanceX = Math.max(Math.min(distanceX, maxOffsetX), -maxOffsetX);
      distanceY = Math.max(Math.min(distanceY, maxOffsetY), -maxOffsetY);

      x.set(distanceX / 20);
      y.set(distanceY / 20);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [isInView, maxOffsetX, maxOffsetY]);

  return (
    <div
      className="relative w-[250px] h-[250px] overflow-hidden rounded-xl"
      ref={ref}
    >
      {layers.map((layer, index) => {
        const layerX = useSpring(0, SPRING_CONFIG);
        const layerY = useSpring(0, SPRING_CONFIG);

        useEffect(() => {
          if (layer.depth) {
            const unsubX = springX.onChange((latest) => {
              // Reduce the multiplier to make movement less intense
              layerX.set(latest * layer.depth * 3);
            });
            const unsubY = springY.onChange((latest) => {
              // Reduce the multiplier to make movement less intense
              layerY.set(latest * layer.depth * 3);
            });
            return () => {
              unsubX();
              unsubY();
            };
          }
        }, [layer.depth]);

        return (
          <motion.div
            key={index}
            className={`absolute w-full h-full ${layer.className}`}
            style={{
              x: layerX,
              y: layerY,
            }}
          >
            {layer.type === "backgroundImage" ||
            layer.type === "foregroundImage" ? (
              <img
                src={layer.src}
                alt={layer.alt}
                className={`w-full h-full scale-150 ${layer.type === "backgroundImage" ? "object-cover" : "object-contain"}`}
              />
            ) : (
              <div
                className={`flex w-full h-full ${
                  layer.type === "subheading"
                    ? 'items-end justify-center pb-2 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-16 after:bg-gradient-to-t after:from-background/60 after:to-transparent after:backdrop-blur-sm after:rounded-b-xl'
                    : layer.type === "heading"
                      ? 'items-start justify-center pt-6 after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-16'
                      : ""
                }`}
              >
                <div
                  className={`${layer.type === "subheading" ? "z-10 relative mb-0 px-4 text-center" : layer.type === "heading" ? "z-10 relative mt-2 px-4 text-center" : ""}`}
                >
                  {layer.content}
                </div>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
