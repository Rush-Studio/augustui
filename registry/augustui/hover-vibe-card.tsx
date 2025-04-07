"use client";

import { motion } from "motion/react";

interface HoverZoomCardProps {
  imageSource: string;
  alt?: string;
  title: string;
  buttonText: string;
  icon?: React.ReactNode;
}

export default function HoverZoomCard({
  imageSource = "https://images.unsplash.com/photo-1741851374467-c53876940807?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  alt = "Image",
  title = "LIBRARY",
  buttonText = "EXPLORE",
  icon = <p>→</p>,
}: HoverZoomCardProps) {
  return (
    <motion.div
      className="relative w-80 min-h-60 overflow-hidden rounded-xl shadow-lg cursor-pointer border border-border border-dashed"
      whileHover="hover"
      initial="initial"
    >
      <motion.div
        className="absolute overflow-hidden"
        variants={{
          initial: { top: "20%", left: 0, right: 0, bottom: 0 },
          hover: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.2,
        }}
      >
        <motion.img
          src={imageSource}
          alt={alt}
          className="w-full h-full object-cover"
          variants={{
            initial: { scale: 1.2 },
            hover: { scale: 1 },
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            duration: 0.2,
          }}
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-background/60"
        variants={{
          initial: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.2 }}
      ></motion.div>

      <motion.div
        className="absolute font-bold text-2xl text-center"
        variants={{
          initial: { top: "10%", left: "50%", x: "-50%", y: "-50%" },
          hover: { top: "40%", left: "50%", x: "-50%", y: "-50%" },
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.2,
        }}
      >
        {title}
      </motion.div>

      <motion.div
        className="absolute bottom-8 mx-auto flex items-center gap-2"
        variants={{
          initial: {
            opacity: 0,
            y: "-50%",
            bottom: "0%",
            left: "50%",
            x: "-50%",
          },
          hover: {
            opacity: 1,
            y: "-50%",
            bottom: "35%",
            left: "50%",
            x: "-50%",
          },
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.2,
        }}
      >
        <span className="text-sm tracking-wider border-b border-dashed border-primary">
          {buttonText}
        </span>
        <span className="flex items-center justify-center w-6 h-6 bg-foreground text-background rounded-full text-sm">
          {icon}
        </span>
      </motion.div>
    </motion.div>
  );
}
