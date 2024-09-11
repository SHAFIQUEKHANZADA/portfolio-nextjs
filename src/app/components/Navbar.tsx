"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon } from "react-icons/fa";
import { IoMoonOutline, IoSunny } from "react-icons/io5";
import { PopoverDemo } from "./PopOver";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-20 dark:bg-[rgb(36,36,36,0.5)] backdrop-saturate-[180%]  bg-[hsla(0,0%,100%,.8)] backdrop-blur-[5px]  border-b-[1px] border-zinc-300  dark:border-zinc-800">
      <div className="max-w-1xl mx-auto px-5 sm:px-6 lg:px-6">
        <div className="flex items-center justify-between  my-1.5">
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="flex gap-2 items-center">
              <Link href="/">
           
                  <Image
                    src="/shaf.jpeg"
                    alt="Profile Picture"
                    height={100}
                    width={100}
                    className="rounded-full h-9 w-9"
                  />
            
              </Link>
              {/* <div className="flex border dark:border-black rounded-lg p-2 items-center"> */}

              {/* <h1 className="font-light pl-1"> Projects</h1> */}
              {/* <h1 className="pl-2 font-light">&gt;</h1> */}
              {/* <DropdownMenu/> */}
              <PopoverDemo />
              {/* </div> */}
            </div>
            {/* Dark mode toggle button for mobile */}
            <button
              onClick={toggleDarkMode}
              className="md:hidden ml-auto text-white hover:text-gray-300 focus:outline-none"
            >
              {isDarkMode ? (
                <IoSunny className="h-6 w-6 text-gray-400" />
              ) : (
                <IoMoonOutline className="h-6 w-6 text-black" />
              )}
            </button>
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden ml-4 dark:text-white text-black hover:text-gray-300 focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBars className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="hidden md:flex items-center">
            <button
              onClick={toggleDarkMode}
              className="  text-white hover:text-gray-300 focus:outline-none"
            >
              {isDarkMode ? (
                <IoSunny className="h-6 w-6 text-gray-400" />
              ) : (
                <IoMoonOutline className="h-6 w-6 text-black" />
              )}
            </button>
            <div className="ml-4 flex items-baseline space-x-2">
              <Link
                href="/about"
                className="text-gray-400 hover:text-black dark:hover:text-white py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link
                href="#services"
                scroll={true}
                className=" text-gray-400 hover:text-black dark:hover:text-white  px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </Link>
            </div>
            {/* Dark mode toggle button for desktop */}
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed mt-1  right-5 md:hidden bg-gradient-to-b from-slate-300 to-slate-100 dark:from-slate-950 dark:to-slate-950  w-[40%] h-full rounded-lg">
          <div className="pr-2 pt-3 pb-4 space-y-2 sm:px-3 bg-gradient-to-r from-slate-300 to-slate-100 dark:from-slate-800 dark:to-slate-800 rounded-lg">
            <Link
              href="/about"
              className="dark:text-gray-400 leading-5 dark:hover:text-white hover:text-gray-800 px-3 py-2 rounded-md text-sm mb-3 font-medium"
            >
              About
            </Link>{" "}
            <br />
            <Link
              href="#services"
              scroll={true}
              className="dark:text-gray-400 leading-5 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Services
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
