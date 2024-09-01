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
    setIsOpen(!isOpen);
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        {/* <Button variant="outline">Open popover</Button> */}
        <div className="flex items-center border border-black dark:border-gray-50 p-1 rounded-md">
          <GoProjectSymlink className="h-5 w-5" onClick={toggleDropdown} />
          <button onClick={toggleDropdown} className="font-light pl-1 px-2">Projects</button>
          {isOpen ? (
            <FaChevronDown
              onClick={toggleDropdown}
              className="font-extralight text-xs pr-1"
            />
          ) : (
            <FaChevronRight
              onClick={toggleDropdown}
              className="font-extralight text-xs pr-1"
            />
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[100vw] h-[100vh]">
        <div className="grid gap-4">
          <CardHoverEffectDemo />
        </div>
      </PopoverContent>
    </Popover>
  );
}
