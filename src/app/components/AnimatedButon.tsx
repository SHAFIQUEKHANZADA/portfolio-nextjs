"use client";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";

export function AnimatedButton({ isHovered }: any) {
  return (
    <div className="w-28 h-9 mt-4">
      <button className="lg:w-[90px] lg:h-[30px] h-8 w-20 px-0  rounded-md bg-transparent border border-black dark:border-white dark:text-white text-base transition-all duration-300 relative overflow-hidden">
        {/* Text */}
        <span
          className={`absolute lg:text-xs text-[10px] inset-0 flex items-center justify-center transform transition-transform duration-500 ${
            isHovered ? "translate-x-full" : "translate-x-0"
          }`}
        >
          Live Preview
        </span>

        {/* Icon */}
        <span
          className={`absolute text-xs inset-0 text-blue-600 flex items-center justify-center transform transition-transform duration-500 ${
            isHovered ? "-translate-x-0" : "-translate-x-full"
          }`}
        >
          <FaLocationArrow />
        </span>
      </button>
    </div>
  );
}
