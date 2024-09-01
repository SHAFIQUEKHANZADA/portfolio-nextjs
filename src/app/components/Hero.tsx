"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FlipWords } from "../../components/ui/flip-words";
import { DownloadButton } from "./Download";

const Hero = () => {
  const words = [
    "FullStack developer",
    "API Developer",
    "DevOps Engineer",
    "GenAI Engineer",
  ];
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="grid max-h-screen  grid-cols-2 gap-10 bg-custom-dark">
      <div className="px-8 py-24">
        <h1 className="text-5xl font-extrabold leading-tight">
          <span className="text-orange-600">Hello,</span> my name is{" "}
          <span className="xyz">Shafique Ur Rehman</span> And i am{" "}
          <span>
            <FlipWords className="xz" words={words} /> <br />{" "}
          </span>{" "}
        </h1>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <DownloadButton
            isHovered={isHovered}
            fileUrl="/path/to/your/file.pdf"
          />
        </div>
      </div>
      <div className="py-24">
        <h1>Trading Fundamentals</h1>

        <Link href={"/"}>View Courses</Link>
      </div>
    </div>
  );
};

export default Hero;
