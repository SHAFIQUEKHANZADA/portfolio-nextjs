"use client";
import { useEffect, useMemo, useState } from "react";
import { TypewriterEffect } from "../../components/ui/typewriter-effect";

export function TypewriterEffectDemo() {
  // Memoize the texts array to avoid unnecessary re-renders
  const texts = useMemo(
    () => ["Nextjs Developer", "API Developer", "DevOps Engineer", "GenAI Engineer"],
    []
  );

  const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => {
        const currentIndex = texts.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % texts.length;
        return texts[nextIndex];
      });
    }, 5000);  

    return () => clearInterval(interval);
  }, [texts]); // Include `texts` in the dependency array

  return (
    <div>
      <TypewriterEffect key={currentText} text={currentText} />
    </div>
  );
}
