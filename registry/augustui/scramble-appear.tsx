"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface ScrambleAppearProps {
  text: string;
  delayBetweenLetters?: number;
  className?: string;
}

export default function ScrambleAppear({
  text = "Hello, world!",
  delayBetweenLetters = 30,
  className = "",
}: ScrambleAppearProps) {
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());
  const [repetitions, setRepetitions] = useState(1);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const updateRepetitions = () => {
      const container = document.querySelector(".scramble-container");
      if (container) {
        const { width, height } = container.getBoundingClientRect();
        const charWidth = 14;
        const charHeight = 20;
        const cols = Math.floor(width / charWidth);
        const rows = Math.floor(height / charHeight);
        const totalCharsNeeded = cols * rows;
        const newRepetitions = Math.max(
          1,
          Math.floor(totalCharsNeeded / text.length),
        );
        setRepetitions(newRepetitions);
        setIsReady(true);
      }
    };

    requestAnimationFrame(() => {
      updateRepetitions();
      setIsReady(true);
    });

    window.addEventListener("resize", updateRepetitions);
    return () => window.removeEventListener("resize", updateRepetitions);
  }, [text]);

  useEffect(() => {
    if (!isReady) return;

    setVisibleIndices(new Set());

    const repeatedTextLength = text.length * repetitions;
    const indices = Array.from({ length: repeatedTextLength }, (_, i) => i);
    const shuffledIndices = indices.sort(() => Math.random() - 0.5);

    const animations = shuffledIndices.map((index, i) =>
      setTimeout(() => {
        setVisibleIndices((prev) => new Set([...prev, index]));
      }, i * delayBetweenLetters),
    );

    return () => animations.forEach(clearTimeout);
  }, [text, repetitions, delayBetweenLetters, isReady]);

  const repeatedText = Array(Math.max(1, repetitions))
    .fill(text)
    .join(" ")
    .toUpperCase();

  return (
    <div
      className={cn(
        "scramble-container absolute left-0 top-0 size-full overflow-hidden whitespace-pre-wrap break-all bg-background p-4 font-mono tabular-nums",
        className,
      )}
    >
      {repeatedText.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block"
          style={{
            opacity: visibleIndices.has(index) ? 1 : 0,
            color: visibleIndices.has(index)
              ? "hsl(var(--primary-foreground))"
              : "hsl(var(--primary))",
            transform: visibleIndices.has(index) ? "scale(1)" : "scale(0.8)",
            transition:
              "opacity 0.15s ease-in-out, color 0.3s ease-in-out, transform 0.15s ease-in-out",
            width: "1ch",
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}
