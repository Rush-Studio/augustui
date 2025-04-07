import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { josefinSans } from "@/lib/fonts";
import TechStack from "./tech-stack";
import GlazingButton from "@/registry/augustui/glazing-button";
export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[700px] flex-col justify-center px-4 pb-20 pt-12 text-center sm:px-6 sm:pb-28 sm:pt-16 md:min-h-screen"
    >
      <div className="mx-auto mb-6 sm:mb-10">
        <div className="inline-flex items-center gap-2 rounded bg-secondary px-4 py-1.5">
          <span
            className={`${josefinSans.className} text-xs font-medium text-primary/80`}
          >
            Free Forever. Open Source.
          </span>
        </div>
      </div>
      <h1
        className={`${josefinSans.className} mx-auto max-w-[800px] text-[50px] font-bold leading-[1.1] tracking-[-0.02em] text-primary sm:text-5xl md:text-6xl lg:text-7xl`}
      >
        Modern UI Components
      </h1>
      <div className="mx-auto mt-4 max-w-[650px] space-y-1 px-2 sm:mt-8 md:px-0">
        <p className="text-base leading-[1.6] text-primary/80 sm:text-lg md:text-xl lg:text-[20px]">
          A complete collection of beautifully crafted, customizable components
          for modern web apps - built with React, Tailwind and Motion
        </p>
      </div>
      <div className="mt-6 flex flex-col justify-center gap-4 px-3 sm:mt-10 sm:flex-row md:px-0">
        <GlazingButton className="relative flex h-fit items-center gap-2 overflow-hidden rounded-lg bg-[#E84E36] px-5 py-3 text-[15px] transition-all hover:bg-[#E84E36]/90">
          <Link href="/docs/components" className="flex items-center gap-2">
            Browse components <ArrowRight className="size-4" />
          </Link>
        </GlazingButton>
        <GlazingButton className="relative flex h-fit items-center gap-2 overflow-hidden rounded-lg px-5 py-3 text-[15px] transition-all">
          <Link href="/templates">Browse templates</Link>
        </GlazingButton>
      </div>

      <TechStack
        technologies={[
          "react",
          "tailwindcss",
          "typescript",
          "nextjs",
          "shadcn",
          "motion",
        ]}
        className="mt-12 justify-center gap-4"
      />

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 sm:bottom-24">
        <p
          className="text-gray-400 transition-colors hover:text-gray-600"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="size-5" />
        </p>
      </div>
    </section>
  );
}
