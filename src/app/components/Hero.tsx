"use client";

import Link from "next/link";
import React, { useState } from "react";
import { DownloadButton } from "./Download";
import { TypewriterEffectDemo } from "./Typewriter";
import { GiCheckMark } from "react-icons/gi";
import { FloatingDockDemo } from "./Flooting";
import { SlSocialLinkedin } from "react-icons/sl";
import { IconBrandGithub, IconBrandX } from "@tabler/icons-react";
import { SiFiverr } from "react-icons/si";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex md:flex-row flex-col justify-around bg-custom-dark dark:bg-custom-dark items-center px-8 pt-16 max-[350px]:px-4 md:pt-24 pb-16 md:pb-32 select-none md:min-h-screen">
      {/* left */}
      <div className="z-10 max-md:min-h-screen max-md:flex flex-col justify-center">
        <h1 className="md:text-[5vw] lg:text-7xl text-5xl lg:pt-10 font-extrabold leading-tight tracking-tight scroll-m-20">
          <span className="text-orange-600">Hello,</span> my name is{" "}
          <span className="xyz font-extrabold">Shafique Ur Rehman</span> And i
          am{" "}
          <span>
            <TypewriterEffectDemo />
          </span>{" "}
        </h1>
        <div className="py-8">
          <div className="flex items-center gap-3 mt-10">
            <GiCheckMark className="tick text-xl mt-3" />
            <p className="leading-7 [&:not(:first-child)]:mt-4 tracking-wide">
              Get fast, SEO-friendly web apps built with the latest technologies
            </p>
          </div>
          <div className="flex items-center gap-3">
            <GiCheckMark className="tick text-xl mt-2" />
            <p className="leading-7 [&:not(:first-child)]:mt-3 tracking-wide">
              Seamlessly integrate powerful APIs to scale your business
              effortlessly
            </p>
          </div>
          <div className="flex items-center gap-3">
            <GiCheckMark className="tick text-xl mt-2" />
            <p className="leading-7 [&:not(:first-child)]:mt-3 tracking-wide">
              Optimize your infrastructure with automated pipelines
            </p>
          </div>
          <div className="flex items-center gap-3">
            <GiCheckMark className="tick text-xl mt-2" />
            <p className="leading-7 [&:not(:first-child)]:mt-3 tracking-wide">
              Leverage cutting-edge AI to create intelligent, responsive
              applications
            </p>
          </div>
        </div>
        <div
          className="inline-block mt-1"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <DownloadButton
            isHovered={isHovered}
            fileUrl="/path/to/your/file.pdf"
          />
        </div>
      </div>
      <div className="md:w-0.5 flex md:flex-col flex-row w-3/4 md:h-56 h-0.5 md:border-l border-b mt-28 md:mr-8 dark:border-zinc-200/40"></div>
      {/* right */}
      <div className="flex flex-col justify-center items-center z-10 max-w-md lg:pt-24 md:pt-0 pt-8 px-4 sm-px-8">
        <h1 className="font-bold text-3xl md:text-4xl xl:mt-4 lg:mb-6 text-center lg:mr-8">
          Connect <span className="text-orange-600">With Me</span>
        </h1>
        <div className="w-full flex justify-center mb-5">
          <FloatingDockDemo />
        </div>
        <div className="flex lg:hidden h-16 gap-2 justify-between rounded-2xl dark:bg-[rgb(36,36,36,0.5)] backdrop-saturate-[180%] bg-[hsla(0,0%,100%,.8)] backdrop-blur-[5px] border-[1px] border-zinc-300 dark:border-zinc-700 px-4 w-[100%] mb-5 mx-auto items-center">
        <Link href={"https://www.linkedin.com/in/shafique-ur-rehman-b7b859299/"} passHref>  <div className="flex justify-center items-center rounded-full bg-gray-200 dark:bg-neutral-800 p-2">
            <SlSocialLinkedin className="text-2xl" />
          </div> </Link>

        <Link href={"https://github.com/SHAFIQUEKHANZADA"}>  <div className="flex justify-center items-center rounded-full bg-gray-200 dark:bg-neutral-800 p-2">
            <IconBrandGithub className="text-xl" />
          </div> </Link>
        <Link href={"/"}>  <div className="flex justify-center items-center rounded-full bg-gray-200 dark:bg-neutral-800 p-2">
            <SiFiverr className="text-2xl" />
          </div> </Link>
        <Link href={"/"}>  <div className="flex justify-center items-center rounded-full bg-gray-200 dark:bg-neutral-800 p-2">
            <FaFacebookF className="text-2xl" />
          </div> </Link>
        <Link href={"/"}>  <div className="flex justify-center items-center rounded-full bg-gray-200 dark:bg-neutral-800 p-2">
            <FaInstagram className="text-2xl" />
          </div> </Link>
        <Link href={"/"}>  <div className="flex justify-center items-center rounded-full bg-gray-200 dark:bg-neutral-800 p-2">
            <IconBrandX className="text-xl" />
          </div> </Link>
        </div>

        <p className="text-left my-4 text-base md:text-lg">
          Explore my professional profiles across various platforms to dive
          deeper into my work, projects, and activities. Stay updated with my
          latest achievements and connect with me for potential collaborations
          and opportunities.
        </p>
        <div className="w-full">
          <div className="flex flex-col gap-4 items-center">
            <div className="flex gap-3 items-center">
              <GiCheckMark className="tick h-5 w-5" />
              <p className="font-extralight text-sm md:text-base">
                Connect with me on LinkedIn to follow my professional growth
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <GiCheckMark className="tick h-5 w-5" />
              <p className="font-extralight text-sm md:text-base">
                Check out my GitHub for a showcase of my coding projects and
                open-source contributions
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <GiCheckMark className="tick h-5 w-5" />
              <p className="font-extralight text-sm md:text-base">
                Visit my Fiverr to explore how I can bring your project to life
                with my freelance services
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
