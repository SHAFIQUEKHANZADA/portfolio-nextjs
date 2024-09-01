"use client";
import React from "react";
import { FaDownload } from "react-icons/fa";

interface DownloadButtonProps {
  isHovered: boolean;
  fileUrl: string; // URL for the PDF file to download
}

export function DownloadButton({ isHovered, fileUrl }: DownloadButtonProps) {
  // Function to handle file download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'file.pdf'; // Default file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-28 h-9 mt-4 relative">
      <button
        onClick={handleDownload}
        className="cv w-full h-full rounded-md bg-gradient-to-r from-slate-600 to-slate-200 shadow-sm  border-black dark:border-white dark:text-white text-base transition-all duration-200 relative overflow-hidden"
      >
        {/* Text */}
        <span
          className={`absolute inset-0 flex p-1 text-xs font-light items-center justify-center transition-transform duration-200 ${
            isHovered ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          Download CV
        </span>

        {/* Icon */}
        <span
          className={`absolute inset-0 flex text-xm items-center justify-center transition-transform duration-200 ${
            isHovered ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <FaDownload />
        </span>
      </button>
    </div>
  );
}
