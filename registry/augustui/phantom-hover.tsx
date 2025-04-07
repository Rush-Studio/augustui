"use client";

import { useState, useEffect, ReactNode, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface PhantomHoverProps {
  className?: string;
  children?: ReactNode;
  hoverColor?: string;
  pressedColor?: string;
  radius?: number;
}

export default function PhantomHover({
  children,
  hoverColor = "hsl(var(--accent))",
  pressedColor = "hsl(var(--accent))",
}: PhantomHoverProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isHovered) {
      const styleTag = document.createElement("style");
      styleTag.innerHTML = `
        .phantom-hover-container * {
          cursor: none !important;
        }
      `;
      document.head.appendChild(styleTag);

      return () => {
        document.head.removeChild(styleTag);
      };
    }
  }, [isHovered]);

  // Debug hover state
  useEffect(() => {
    console.log("Hover state:", isHovered);
  }, [isHovered]);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 0.1 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: isPressed ? pressedColor : hoverColor,
            pointerEvents: "none",
          }}
          className={cn("rounded-md")}
        />
      )}

      <motion.div
        ref={containerRef}
        className="phantom-hover-container"
        style={{
          position: "relative",
          cursor: isHovered ? "none" : "auto",
          transition: "all 0.2s ease",
          zIndex: 1,
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onTapStart={() => setIsPressed(true)}
        onTap={() => setIsPressed(false)}
        onTapCancel={() => setIsPressed(false)}
      >
        {children}
      </motion.div>
    </div>
  );
}
