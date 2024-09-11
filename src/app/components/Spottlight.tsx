import React from "react";
import { cn } from "@/lib/utils";

type StaticSpotlightProps = {
  className?: string;
  fill?: string;
};

export const StaticSpotlight = ({ className, fill }: StaticSpotlightProps) => {
  return (
    <svg
      className={cn(
        "pointer-events-none absolute z-[2] h-[100%] w-[100%] opacity-10",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      fill="none"
    >
      {/* Main spotlight ellipse with blue radial gradient */}
      <g filter="url(#lightFilter)">
        <ellipse
          cx="500"
          cy="500"
          rx="400"
          ry="300"
          fill="url(#blueRadialGradient)"
        />
      </g>
      {/* Subtle smoke layer with Gaussian blur and white color */}
      <g filter="url(#smokeFilter)">
        <ellipse
          cx="500"
          cy="500"
          rx="300"
          ry="300"
          fill="rgba(255, 255, 255, 0.1)"
        />
      </g>
      <defs>
        {/* Blue radial gradient for soft elliptical light */}
        <radialGradient id="blueRadialGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={fill || "rgba(0, 122, 255, 0.7)"} />
          <stop offset="90%" stopColor="rgba(0, 122, 255, 0.1)" />
        </radialGradient>

        {/* Smoke filter with Gaussian blur for the smoke effect */}
        <filter
          id="smokeFilter"
          x="0"
          y="10"
          width="1000"
          height="1000"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="50" />
        </filter>

        {/* Light filter with slight blur */}
        <filter
          id="lightFilter"
          x="0"
          y="10"
          width="1000"
          height="1000"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="30" />
        </filter>
      </defs>
    </svg>
  );
};
