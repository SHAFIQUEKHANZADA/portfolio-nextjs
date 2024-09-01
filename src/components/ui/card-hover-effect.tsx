import { AnimatedButton } from "@/app/components/AnimatedButon";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {

    title: string;
    description: string;
    link: string;
    imageSrc: string ; // Added imageSrc property
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 py-6 px-10",
        className
      )}
    >
      {items.map((item, idx) => (
      <Link
      href={item?.link}
      key={item?.link}
      className="relative group  block p-1 h-full w-full"
      onMouseEnter={() => setHoveredIndex(idx)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === idx && (
          <motion.span
            className="absolute inset-0 h-70 w-30 bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.10 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.10, delay: 0 },
            }}
          />
        )}
      </AnimatePresence>
      <Card imageSrc={item.imageSrc}>
        <CardTitle>{item.title}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </Card>
    </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  imageSrc,
}: {
  className?: string;
  children: React.ReactNode;
  imageSrc: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
    className={cn(
      "rounded-2xl group h-80 w-21 p-4 gap-3 overflow-hidden mode-bg bg-gradient-to-b from-slate-600 to-white  border border-black dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 group",
      className
    )}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    <img src={imageSrc} alt="Card image" className="w-full h-[40%] overflow-y-hidden" />
    <div className="relative z-50">
      <div className="">{children}</div>
    </div>
    <div className="">
      <AnimatedButton isHovered={isHovered} />
    </div>
  </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("dark:text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-2 dark:text-zinc-400 tracking-wide leading-relaxed text-sm line-clamp-3",
        className
      )}
    >
      {children}
    </p>
  );
};


