"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { FaMicrosoft } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="relative">
      <div className="relative z-10 mt-20">
        <div className="flex justify-center mt-20 mb-10 lg:mb-1">
          <h1 className="lg:text-5xl text-4xl font-bold text-center">
            <span className="serCol">Contact</span> Me
          </h1>
        </div>

        <div className="mx-auto lg:w-[60%] w-[95%] rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-transparent relative z-20">
          <form className="lg:my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <label
                  htmlFor="firstname"
                  className="text-gray-700 dark:text-gray-300"
                >
                  First name
                </label>
                <input
                  id="firstname"
                  placeholder="Shafique"
                  type="text"
                  className="transparent-input h-12"
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <label
                  htmlFor="lastname"
                  className="text-gray-700 dark:text-gray-300"
                >
                  Last name
                </label>
                <input
                  id="lastname"
                  placeholder="Ur Rehman"
                  type="text"
                  className="transparent-input h-12"
                />
              </LabelInputContainer>
            </div>

            <LabelInputContainer className="mb-4">
              <label
                htmlFor="email"
                className="text-gray-700 dark:text-gray-300"
              >
                Email Address
              </label>
              <input
                id="email"
                placeholder="kzshafique77@gmail.com"
                type="email"
                className="transparent-input h-12"
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <label
                htmlFor="email"
                className="text-gray-700 dark:text-gray-300"
              >
                Company Name(Optional)
              </label>
              <input
                id="email"
                placeholder="Microsoft"
                type="email"
                className="transparent-input h-12"
              />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <label
                htmlFor="password"
                className="text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="password"
                placeholder="Write a message"
                rows={5}
                // type=""
                className="transparent-input"
              />
            </LabelInputContainer>

            {/* <LabelInputContainer className="mb-8">
              <label htmlFor="twitterpassword" className="text-gray-700 dark:text-gray-300">
                Confirm password
              </label>
              <input
                id="twitterpassword"
                placeholder="••••••••"
                type="password"
                className="transparent-input"
              />
            </LabelInputContainer> */}

            <button
              className="relative group/btn bg-gradient-to-br from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Send Message <IoSend className="inline-block ml-2" />
              <BottomGradient />
            </button>

            
          </form>
        </div>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full">
        {/* <hr className=""/> */}
        <p className="px-10 text-center py-6 font-extralight text-[12px] dark:text-zinc-200">
          © 2024 Shafique Ur Rehman™. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const SocialButton = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <button
      className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
      type="button"
    >
      {icon}
      <span className="text-neutral-700 dark:text-neutral-300 text-sm">
        {label}
      </span>
      <BottomGradient />
    </button>
  );
};
