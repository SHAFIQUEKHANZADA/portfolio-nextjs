"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { IoMoonOutline, IoSunny } from "react-icons/io5";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
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
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent opacity-96 backdrop-blur-md  border-b  dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between  my-1.5">
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="flex gap-2 items-center">
              <Image
                src={"/shaf.jpeg"}
                alt=""
                height={100}
                width={100}
                className="rounded-full h-9 w-9"
              />
              {/* <div className="flex border dark:border-black rounded-lg p-2 items-center"> */}
           
                {/* <h1 className="font-light pl-1"> Projects</h1> */}
                {/* <h1 className="pl-2 font-light">&gt;</h1> */}
                {/* <DropdownMenu/> */}
                <PopoverDemo/>
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
              className="md:hidden ml-4 text-white hover:text-gray-300 focus:outline-none"
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
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-black dark:hover:text-white py-2 rounded-md text-sm font-medium"
              >
                Projects
              </Link>
              <a
                href="#"
                className=" text-gray-400 hover:text-black dark:hover:text-white  px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </a>
            </div>
            {/* Dark mode toggle button for desktop */}
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 bg-opacity-90">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-gray-400 block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-gray-400 block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
