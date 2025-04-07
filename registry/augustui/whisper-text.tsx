"use client";
import { useEffect, useState } from "react";

interface WhisperTextProps {
  lines: string[];
  delay?: number;
  className?: string;
}

export default function WhisperText({
  lines = ["Great things happen", "to those who take action"],
  delay = 200,
  className = "mb-8 text-5xl font-medium md:text-6xl",
}: WhisperTextProps) {
  const [visibleWords, setVisibleWords] = useState<string[]>([]);
  const allWords = lines.flatMap((line) => line.split(" "));

  useEffect(() => {
    const timer = setTimeout(() => {
      if (visibleWords.length < allWords.length) {
        setVisibleWords((prev) => [...prev, allWords[prev.length]]);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [visibleWords, allWords, delay]);

  return (
    <h1 className={className}>
      {lines.map((line, lineIndex) => (
        <div key={lineIndex}>
          {line.split(" ").map((word, wordIndex) => (
            <span
              key={`${lineIndex}-${wordIndex}`}
              className="mr-2 inline-block transition-all duration-500"
              style={{
                opacity: visibleWords.includes(word) ? 1 : 0,
                filter: visibleWords.includes(word) ? "blur(0)" : "blur(8px)",
              }}
            >
              {word}
            </span>
          ))}
        </div>
      ))}
    </h1>
  );
}
