"use client";
import { useRef } from "react";
import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

interface DockItemData {
  link: string;
  Icon: React.ReactNode;
  target?: string;
}

interface SocialDockProps {
  className?: string;
  items: DockItemData[];
}

export default function SocialDock({ className, items = [] }: SocialDockProps) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto flex h-16 items-end gap-4 rounded-full border border-primary bg-background px-4 pb-3",
        className,
      )}
    >
      {items.map((item, index) => (
        <DockItem key={index} mouseX={mouseX}>
          <a
            href={item.link}
            target={item.target}
            className="flex size-full grow items-center justify-center text-primary-foreground"
          >
            {item.Icon}
          </a>
        </DockItem>
      ))}
    </motion.div>
  );
}

function DockItem({
  mouseX,
  children,
}: {
  mouseX: MotionValue;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="flex aspect-square w-10 items-center justify-center rounded-full bg-primary text-secondary-foreground"
    >
      <div className="flex size-full grow items-center justify-center">
        {children}
      </div>
    </motion.div>
  );
}
