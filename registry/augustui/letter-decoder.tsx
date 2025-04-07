"use client";

import { useState, useEffect } from "react";

interface LetterDecoderProps {
  text: string;
  triggerOnHover?: boolean;
  triggerOnMount?: boolean;
  scrambleSpeed?: number;
  decodeTime?: number;
}

export const LetterDecoder: React.FC<LetterDecoderProps> = ({
  text,
  triggerOnHover = false,
  triggerOnMount = true,
  scrambleSpeed = 50,
  decodeTime = 1500,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isDecoding, setIsDecoding] = useState(false);

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()";

  const scrambleText = () => {
    setIsDecoding(true);
    let iterations = 0;
    const maxIterations = Math.floor(decodeTime / scrambleSpeed);

    const interval = setInterval(() => {
      setDisplayText((prevText) => {
        return prevText
          .split("")
          .map((char, index) => {
            // Keep spaces unchanged
            if (char === " ") return " ";
            // Gradually reveal original characters
            if (iterations > maxIterations * (index / text.length)) {
              return text[index];
            }
            // Random character
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("");
      });

      iterations += 1;

      if (iterations >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        setIsDecoding(false);
      }
    }, scrambleSpeed);
  };

  useEffect(() => {
    if (triggerOnMount) {
      scrambleText();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span
      onMouseEnter={() => {
        if (triggerOnHover && !isDecoding) {
          scrambleText();
        }
      }}
      style={{ display: "inline-block" }}
    >
      {displayText}
    </span>
  );
};
