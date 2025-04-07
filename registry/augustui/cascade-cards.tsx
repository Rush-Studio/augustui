"use client";

import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import { CSSProperties } from "react";
import { motion } from "framer-motion";

interface CascadeCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  titleClassName?: string;
  style?: CSSProperties;
}

function CascadeCard({
  className,
  icon = <Sparkles className="size-4 text-blue-300" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  titleClassName = "text-blue-500",
  style,
}: CascadeCardProps) {
  return (
    <motion.div
      className={cn(
        "relative flex h-36 w-[22rem] select-none flex-col justify-between rounded-xl border-2 bg-muted/70 px-4 py-3 backdrop-blur-sm after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-80 after:bg-gradient-to-l after:from-background after:to-transparent after:content-[''] hover:border-white/20 hover:bg-muted [&>*]:flex [&>*]:items-center [&>*]:gap-2",
        className,
      )}
      style={style}
      whileHover={{ filter: "grayscale(0)" }}
      transition={{ duration: 0.7 }}
    >
      <div>
        <span className="relative inline-block rounded-full bg-blue-800 p-1">
          {icon}
        </span>
        <p className={cn("text-lg font-medium", titleClassName)}>{title}</p>
      </div>
      <p className="whitespace-nowrap text-lg">{description}</p>
      <p className="text-muted-foreground">{date}</p>
    </motion.div>
  );
}

interface CascadeCardsProps {
  cards: CascadeCardProps[];
  variant?: "default" | "custom";
  maxVisible?: number;
  gapX?: number;
  gapY?: number;
  skewAngle?: number;
  hoverLift?: number;
  hoverEffect?: "lift" | "top" | "both" | "none";
}

export default function CascadeCards({
  cards,
  gapX = 50,
  gapY = 25,
  skewAngle = -8,
  hoverLift = 15,
  hoverEffect = "none",
}: CascadeCardsProps) {
  // Default cards if none provided
  const defaultCards = [
    {
      icon: <Sparkles className="size-4 text-blue-300" />,
      title: "New",
      description: "Latest updates and features",
      date: "Today",
      iconClassName: "text-blue-500",
      titleClassName: "text-blue-500",
    },
    {
      icon: <Sparkles className="size-4 text-blue-300" />,
      title: "New",
      description: "Latest updates and features",
      date: "Today",
      iconClassName: "text-blue-500",
      titleClassName: "text-blue-500",
    },
    {
      icon: <Sparkles className="size-4 text-blue-300" />,
      title: "New",
      description: "Latest updates and features",
      date: "Today",
      iconClassName: "text-blue-500",
      titleClassName: "text-blue-500",
    },
  ];

  let displayCards = cards || defaultCards;

  return (
    <div className="relative flex h-[300px] w-full items-center justify-center">
      {displayCards.map((cardProps, index) => {
        // Calculate dynamic positioning based on index
        const xOffset = index * gapX;
        const yOffset = index * gapY;
        const liftAmount = hoverEffect === "none" ? 0 : hoverLift;

        // Determine z-index behavior on hover
        const hoverZIndexValue = (() => {
          if (hoverEffect === "none") return undefined;
          if (hoverEffect === "top") return displayCards.length + 1;
          if (hoverEffect === "lift" || hoverEffect === "both")
            return displayCards.length + 1;
          return undefined;
        })();

        // Dynamic styles based on index with explicit skew
        const cardStyle: CSSProperties = {
          filter: "grayscale(100%)",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: index,
        };

        const cardClassName = cn(
          "before:absolute before:left-0 before:top-0 before:size-full before:rounded-xl before:bg-background/50 before:opacity-100 before:transition-opacity before:duration-700 before:content-[''] hover:before:opacity-0",
        );

        return (
          <motion.div
            key={index}
            initial={{
              x: xOffset,
              y: yOffset,
              skewY: skewAngle,
              opacity: 0,
            }}
            animate={{
              x: xOffset,
              y: yOffset,
              skewY: skewAngle,
              opacity: 1,
              zIndex: index,
            }}
            whileHover={
              hoverEffect === "top"
                ? {
                    y: yOffset - liftAmount,
                    boxShadow:
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  }
                : hoverEffect === "lift"
                  ? {
                      zIndex: displayCards.length + 1,
                      boxShadow:
                        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    }
                  : hoverEffect === "both"
                    ? {
                        y: yOffset - liftAmount,
                        zIndex: displayCards.length + 1,
                        boxShadow:
                          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      }
                    : {
                        boxShadow:
                          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      }
            }
            transition={{ duration: 0.7 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <CascadeCard
              {...cardProps}
              className={cardClassName}
              style={cardStyle}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
