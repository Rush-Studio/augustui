"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GlazingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function GlazingButton({
  children,
  className,
}: GlazingButtonProps) {
  return (
    <button
      className={cn(
        "group relative flex items-center justify-center overflow-hidden rounded-lg bg-primary px-6 py-3 text-primary-foreground",
        className,
      )}
    >
      <span className="relative z-10">{children}</span>
      <span
        className="absolute -left-1/2 -top-1/2 size-[200%] rotate-[30deg] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 
                transition-transform duration-500 group-hover:translate-x-full group-hover:opacity-100 dark:via-black/30"
      ></span>
    </button>
  );
}
