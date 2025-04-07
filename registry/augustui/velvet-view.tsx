"use client";
import { useState } from "react";
import { motion, useMotionValue } from "framer-motion";

// Define the type for each slide item
interface SlideItem {
  imageSrc: string;
  imageText: string;
}

interface VelvetViewProps {
  slides: SlideItem[];
}

export default function VelvetView({
  slides = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1481018085669-2bc6e4f00eed?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageText: "Ashen grace in slow motion",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageText: "Time hums in glass veins",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageText: "Static hearts, cinematic longing.",
    },
  ],
}: VelvetViewProps) {
  const [index, setIndex] = useState(0);
  const rotateY = useMotionValue(0);

  const nextImage = () => setIndex((index + 1) % slides.length);
  const prevImage = () => setIndex((index - 1 + slides.length) % slides.length);

  const handlePressStart = (direction: string) => {
    rotateY.set(direction === "left" ? -25 : 25);
  };

  const handlePressEnd = (direction: string) => {
    setTimeout(() => {
      rotateY.set(0);
      direction === "right" ? nextImage() : prevImage();
    }, 150);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, currentTarget } = e;
    const { left, width } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    rotateY.set(x * 10);
  };

  const handleMouseLeave = () => {
    rotateY.set(0);
  };

  return (
    <div
      className="relative size-[300px] overflow-hidden rounded-[50px] bg-background"
      style={{ perspective: "1000px" }} // Tailwind doesn't support this directly
    >
      <motion.div
        className="relative size-full"
        style={{
          rotateY,
          transformStyle: "preserve-3d", // Required for 3D to take effect
          scale: 1.2, // Increased from 1.1 to prevent cropping during tilt
          transition: "transform 0.3s ease", // Added animation time for smoother tilting
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={slides[index].imageSrc}
          alt={`Slide ${index}`}
          className="pointer-events-none size-full select-none object-cover"
          draggable={false}
        />

        <div className="absolute left-14 top-14 z-10 w-[100px] leading-tight">
          <p className="text-sm font-medium text-primary drop-shadow-md">
            {slides[index].imageText}
          </p>
        </div>
      </motion.div>

      {/* Left Control */}
      <div
        className="group absolute left-0 top-0 flex h-full w-1/4 cursor-pointer items-center justify-center"
        onMouseDown={() => handlePressStart("left")}
        onMouseUp={() => handlePressEnd("left")}
      >
        <div className="absolute inset-0 rounded-l-[40px] bg-gradient-to-r from-background/20 to-transparent opacity-0 backdrop-blur-[1px] transition-opacity duration-300 group-hover:opacity-100" />
        <span className="relative z-10 -ml-6 text-2xl text-primary/30 transition-opacity duration-300 group-hover:text-primary">
          {"<"}
        </span>
      </div>

      {/* Right Control */}
      <div
        className="group absolute right-0 top-0 flex h-full w-1/4 cursor-pointer items-center justify-center"
        onMouseDown={() => handlePressStart("right")}
        onMouseUp={() => handlePressEnd("right")}
      >
        <div className="absolute inset-0 rounded-r-[40px] bg-gradient-to-l from-background/20 to-transparent opacity-0 backdrop-blur-[1px] transition-opacity duration-300 group-hover:opacity-100" />
        <span className="relative z-10 -mr-6 text-2xl text-primary/30 transition-opacity duration-300 group-hover:text-primary">
          {">"}
        </span>
      </div>

      <div className="absolute right-10 top-12 z-20">
        <div className="flex gap-0.5">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-0.5 w-2 rounded-full transition-all duration-300 ${
                i === index ? "bg-primary" : "bg-primary/20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
