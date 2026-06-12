"use client";
import { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  text: string;
  delay?: number;
}

export default function Tooltip({ children, text, delay = 200 }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {isVisible && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-background text-white text-xs rounded whitespace-nowrap z-50">
          {text}
        </div>
      )}
    </div>
  );
}
