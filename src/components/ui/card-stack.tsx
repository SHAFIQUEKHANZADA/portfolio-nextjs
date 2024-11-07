"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    AOS.init({
      duration: 600,  
      easing: "ease",  
      once: false,  
    });
  }, []);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div
      data-aos="zoom-out-up"
      className="relative h-60 w-60 md:h-60 md:w-96 mx-auto flex justify-center sm:my-10 my-3"
    >
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute bg-gradient-to-b from-slate-300 to-slate-100 dark:from-slate-950 dark:to-slate-950 lg:h-[20vw] lg:w-[29vw] h-[200px]  w-[280px] lg:rounded-3xl rounded-xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
          >
            <div className="font-normal text-neutral-700 dark:text-neutral-200 text-xs lg:text-base">
              {card.content}
            </div>
            <div>
              <p className="text-neutral-500 font-medium dark:text-white">
                {card.name}
              </p>
              <p className="text-neutral-400 font-normal dark:text-neutral-200">
                {card.designation}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export const CardStackTwo = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    AOS.init({
      duration: 600, // Duration of the animation
      easing: "ease", // Easing function for the animation
      once: false, // Whether animation should happen only once
    });
  }, []);

  useEffect(() => {
    // Start the flipping effect after a 2-second delay
    const timeoutId = setTimeout(() => {
      startFlipping();
    }, 1000);

    // Clear the interval and timeout on cleanup
    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
    };
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000); // Flipping every 5 seconds
  };

  return (
    <div
      data-aos="zoom-out-up"
      className="relative h-60 w-60 md:h-60 md:w-96 mx-auto flex justify-center sm:my-10   my-3"
    >
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute bg-gradient-to-b from-slate-300 to-slate-100 dark:from-slate-950 dark:to-slate-950 lg:h-[20vw] lg:w-[29vw] h-[200px]  w-[280px] lg:rounded-3xl rounded-xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="font-normal text-neutral-700 dark:text-neutral-200 text-xs lg:text-base">
              {card.content}
            </div>
            <div>
              <p className="text-neutral-500 font-medium dark:text-white">
                {card.name}
              </p>
              <p className="text-neutral-400 font-normal dark:text-neutral-200">
                {card.designation}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
export const CardStackThree = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    AOS.init({
      duration: 600, // Duration of the animation
      easing: "ease", // Easing function for the animation
      once: false, // Whether animation should happen only once
    });
  }, []);

  useEffect(() => {
    // Start the flipping effect after a 2-second delay
    const timeoutId = setTimeout(() => {
      startFlipping();
    }, 2000); // 2000 milliseconds = 2 seconds

    // Clear the interval and timeout on cleanup
    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
    };
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000); // Flipping every 5 seconds
  };
  return (
    <div
      data-aos="zoom-out-up"
      className="relative h-60 w-60 md:h-60 md:w-96 mx-auto flex justify-center sm:my-10 my-3"
    >
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute bg-gradient-to-b from-slate-300 to-slate-100 dark:from-slate-950 dark:to-slate-950 
            lg:h-[20vw] lg:w-[29vw] h-[200px]  w-[280px] lg:rounded-3xl rounded-xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,  
              zIndex: cards.length - index,  
            }}
          >
            <div className="font-normal text-neutral-700 dark:text-neutral-200 text-xs lg:text-base">
              {card.content}
            </div>
            <div>
              <p className="text-neutral-500 font-medium dark:text-white">
                {card.name}
              </p>
              <p className="text-neutral-400 font-normal dark:text-neutral-200">
                {card.designation}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
