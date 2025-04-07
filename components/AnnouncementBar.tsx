"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export function AnnouncementBar() {
  const requestRef = useRef<number | null>(null);
  const barRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Set up CSS variable for layout calculations
    document.documentElement.style.setProperty("--announcement-height", "40px");

    // Use direct DOM manipulation for max performance
    const updateVisibility = (visible: boolean) => {
      // Update class on the bar element
      if (barRef.current) {
        if (visible) {
          barRef.current.classList.remove("hidden");
        } else {
          barRef.current.classList.add("hidden");
        }
      }

      // Update CSS variable
      document.documentElement.style.setProperty(
        "--announcement-height",
        visible ? "40px" : "0px",
      );
    };

    // Optimized scroll handler with proper RAF throttling
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only show when at the very top
      updateVisibility(currentScrollY <= 0);

      requestRef.current = null;
    };

    // Optimized RAF-based event handler
    const onScroll = () => {
      if (requestRef.current === null) {
        requestRef.current = requestAnimationFrame(handleScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <Link
      ref={barRef}
      href="https://plus.augustui.com"
      className="z-100 announcement-bar fixed inset-x-0 top-0 flex h-10 translate-y-0 items-center justify-center bg-black text-sm text-white transition-transform duration-200 ease-out"
      style={{ transitionTimingFunction: "cubic-bezier(0.4, 0.0, 0.2, 1)" }}
    >
      <span>
        ✨ Upgrade to August UI Plus for premium components and features
      </span>
    </Link>
  );
}
