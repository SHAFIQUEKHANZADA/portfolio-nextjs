import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CardHoverEffectDemo } from "./CardHover";
import { useState } from "react";
import { GoProjectSymlink } from "react-icons/go";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

export function PopoverDemo() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Popover onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        {/* Attach the `onClick` to the `div` itself */}
        <div
          className="flex items-center border dark:border-zinc-600 border-zinc-500 p-1 pr-2 rounded-md cursor-pointer"
          onClick={toggleDropdown}
        >
          <GoProjectSymlink className="h-6 w-6" />
          <button className="font-light pl-1 px-2">Projects</button>
          {isOpen ? (
            <FaChevronDown className="font-extralight text-xs pr-1" />
          ) : (
            <FaChevronRight className="font-extralight text-xs pr-1" />
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[100vw] h-[200vh] overflow-y-auto dark:bg-[rgb(36,36,36,0.5)] backdrop-saturate-[180%] bg-[hsla(0,0%,100%,.8)] backdrop-blur-[5px]">
        <div className="grid gap-4">
          <CardHoverEffectDemo />
        </div>
      </PopoverContent>
    </Popover>
  );
}
