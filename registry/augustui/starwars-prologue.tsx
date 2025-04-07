"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
interface StarwarsPrologueProps {
  textLines: string[];
  repeat?: boolean;
  className?: string;
}

export default function StarwarsPrologue({
  textLines = [
    "A long time ago in a galaxy far, far away...",
    "The Galactic Empire has spread its dominion across countless star systems, ruling with an iron fist and crushing any resistance in its path.",
    "But hope remains. A small band of rebels, united in their determination to restore freedom to the galaxy, has begun to gather strength.",
    "Deep in the Outer Rim territories, brave pilots and warriors train in secret, preparing for the inevitable confrontation with Imperial forces.",
    "As darkness grows deeper, ancient prophecies speak of a chosen one who will bring balance to the Force and challenge the Empire's supremacy.",
    "Now, as the stars align and destinies converge, the fate of the galaxy hangs precariously in the balance...",
  ],
  repeat = false,
  className = "",
}: StarwarsPrologueProps) {
  return (
    <div
      className={cn(
        "relative flex justify-center items-center h-full w-full overflow-hidden",
        className,
      )}
    >
      <div
        className="absolute inset-0 flex justify-center"
        style={{ perspective: "400px" }}
      >
        <div
          className="absolute w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(60deg)",
            transformOrigin: "center bottom",
          }}
        >
          <motion.div
            initial={{ y: "100%", opacity: 1 }}
            animate={{
              y: "-100%",
              opacity: [1, 1, 1, 1, 1, 1, 1, 1, 0],
            }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: repeat ? Infinity : 0,
              repeatDelay: 1,
              times: [0, 0.7, 0.75, 0.8, 0.85, 0.9, 0.92, 0.95, 1],
            }}
            className="absolute text-center w-[80%] left-[10%] uppercase"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="transform-gpu"
              style={{ transform: "translateZ(0)" }}
            >
              {textLines.map((line, index) => (
                <p
                  key={index}
                  className="mb-8 text-xl font-bold text-white text-justify"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 50%, rgba(200,200,200,0.5) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
