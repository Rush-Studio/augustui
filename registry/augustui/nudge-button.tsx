"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState } from "react";

interface NudgeButtonProps {
  children: React.ReactNode;
  nudgeText?: string | number;
  nudgeDirection?: "up" | "down" | "left" | "right";
  className?: string;
  buttonClassName?: string;
  nudgeClassName?: string;
  nudgeTextClassName?: string;
  onClick?: () => void;
}

export default function NudgeButton({
  children,
  nudgeText = "A bold choice",
  nudgeDirection = "up",
  className = "",
  buttonClassName = "",
  nudgeClassName = "",
  nudgeTextClassName = "",
  onClick,
}: NudgeButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getAnimationProps = () => {
    switch (nudgeDirection) {
      case "up":
        return { y: isHovered ? -30 : 0 };
      case "down":
        return { y: isHovered ? 30 : 0 };
      case "left":
        return { x: isHovered ? -30 : 0 };
      case "right":
        return { x: isHovered ? 30 : 0 };
    }
  };

  return (
    <div
      className={cn(
        "relative flex h-14 w-64 items-center justify-center",
        className,
      )}
    >
      <motion.div
        initial={{ y: 0, x: 0 }}
        animate={getAnimationProps()}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className={cn(
          "absolute z-0 size-full rounded-xl bg-primary",
          nudgeClassName,
        )}
      >
        <p
          className={cn(
            "mt-1.5 text-center text-sm font-semibold text-primary-foreground",
            nudgeTextClassName,
          )}
        >
          {nudgeText}
        </p>
      </motion.div>

      <button
        className={cn(
          "relative z-10 size-full rounded-xl border-4 border-primary bg-background px-2 py-1 text-primary",
          buttonClassName,
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </button>
    </div>
  );
}
