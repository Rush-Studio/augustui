"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useState, useCallback, useRef, useMemo } from "react";

interface TypingAnimationProps {
  text: string | string[];
  className?: string;
  cursorClassName?: string;
  speed?: number;
  cursor?: string | React.ReactNode;
  loop?: boolean;
  deleteSpeed?: number;
  delay?: number;
  onTextChange?: (text: string) => void;
}

export default function TypingAnimation({
  text,
  className,
  cursorClassName,
  speed = 100,
  cursor = "|",
  loop = false,
  deleteSpeed = 50,
  delay = 1500,
  onTextChange,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textArrayIndex, setTextArrayIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Process text input to handle both string and array
  const textArray = useMemo(
    () => (Array.isArray(text) ? text : [text]),
    [text],
  );
  const currentText = textArray[textArrayIndex] || "";

  // Get a slightly randomized delay for more natural typing
  const getTypingDelay = useCallback(() => {
    // Random delay between 0.8x and 1.2x of the base speed
    return (isDeleting ? deleteSpeed : speed) * (0.8 + Math.random() * 0.4);
  }, [speed, deleteSpeed, isDeleting]);

  // Clear timeout helper
  const clearTimeoutRef = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  // Reset when text prop changes
  useEffect(() => {
    setDisplayedText("");
    setCurrentIndex(0);
    setIsDeleting(false);
    setTextArrayIndex(0);
    clearTimeoutRef();
  }, [text, clearTimeoutRef]);

  useEffect(() => {
    if (!currentText) return;

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing mode
        if (currentIndex < currentText.length) {
          // Still have characters to type
          const newText = currentText.slice(0, currentIndex + 1);
          setDisplayedText(newText);
          setCurrentIndex((prev) => prev + 1);

          if (onTextChange) {
            onTextChange(newText);
          }
        } else {
          // Finished typing current text
          if (loop || textArrayIndex < textArray.length - 1) {
            // Wait before starting to delete
            timeoutRef.current = setTimeout(() => setIsDeleting(true), delay);
            return;
          }
        }
      } else {
        // Deleting mode
        if (displayedText.length > 0) {
          // Still have characters to delete
          const newText = displayedText.slice(0, -1);
          setDisplayedText(newText);

          if (onTextChange) {
            onTextChange(newText);
          }
        } else {
          // Finished deleting
          setIsDeleting(false);
          setCurrentIndex(0);

          if (textArrayIndex < textArray.length - 1 || loop) {
            setTextArrayIndex((prev) => (prev + 1) % textArray.length);
          }
        }
      }
    };

    // Schedule next typing/deleting action
    timeoutRef.current = setTimeout(handleTyping, getTypingDelay());

    return clearTimeoutRef;
  }, [
    displayedText,
    currentIndex,
    currentText,
    isDeleting,
    textArray,
    textArrayIndex,
    loop,
    delay,
    getTypingDelay,
    clearTimeoutRef,
    onTextChange,
  ]);

  return (
    <div
      className={cn(
        "relative inline-flex items-center text-primary",
        className,
      )}
    >
      <span className="whitespace-pre text-primary">{displayedText}</span>
      {cursor && (
        <motion.span
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
            times: [0, 0.5, 0.5, 1],
            ease: "linear",
          }}
          className={cn("text-primary", cursorClassName)}
        >
          {cursor}
        </motion.span>
      )}
    </div>
  );
}
