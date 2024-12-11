"use client";

import { useEffect, useState } from "react";
import { cn } from "../util";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
}

export default function TypingAnimation({
  text,
  duration = 200,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i]);

  return (
    <h1
      className={cn(
        "font-display text-left font-bold leading-[8rem] tracking-[-0.02em] drop-shadow-sm", // Ukuran lebih besar dan properti leading yang lebih tinggi
        className,
      )}
    >
      {displayedText ? displayedText : text}
    </h1>
  );
}