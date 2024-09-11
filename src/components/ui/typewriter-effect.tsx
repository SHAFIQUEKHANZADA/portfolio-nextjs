"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({
  text,
  className,
  cursorClassName,
}: {
  text: string;
  className?: string;
  cursorClassName?: string;
}) => {
  // Split text into an array of characters
  const wordsArray = text.split("");

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView, animate, text]);

  const renderText = () => {
    return (
      <motion.div key={text} ref={scope} className="inline">
        <div className="inline-block">
          {wordsArray.map((char, index) => (
            <motion.span
              initial={{}}
              key={`char-${index}`}
              className={cn(
                `dark:text-white text-black opacity-0 hidden`,
                className
              )}
            >
              {char}
            </motion.span>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <div
      className={cn(
        "lg:text-7xl md:text-5xl text-4xl font-extrabold leading-tight tracking-tight scroll-m-20",
        className
      )}
    >
      {renderText()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-6 ml-2 md:h-7 lg:h-11 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
