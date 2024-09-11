import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Education",
      content: (
        <div className="mx-2">
          <div className="lg:flex lg:justify-between  items-start">
            <div className=" max-w-lg">
              <h1 className="text-2xl mb-3">University of Sindh</h1>
              <p>
                <span className="font-bold ">Degree:</span> Bachelors of
                Business Administration - BBA
              </p>
              <p>
                <span className="font-bold">Date:</span> 2022 - Present
              </p>
              <p className="mt-5">
                I&apos;m currently pursuing a Bachelor of Business
                Administration (BBA) degree at Sindh University, where I&apos;m
                developing a solid foundation in business principles and
                practices. Alongside my academic pursuits, I&apos;m passionate
                about exploring the intersection of technology and innovation.
              </p>
            </div>

            <div className="flex-shrink-0 lg:mt-0 mt-4">
              <Image
                src={"/sindh.jpg"}
                alt="uni"
                width={100}
                height={100}
                className="rounded-md h-16 w-30 object-cover"
              />
            </div>
          </div>

          <div className="lg:flex lg:justify-between items-start mt-5">
            <div className="max-w-lg">
              <h1 className="text-2xl mb-3">
                Governor initiative of Artifical Inteligence and Metaverse
              </h1>
              <p>
                <span className="font-bold">Degree:</span> Cloud Native Applied
                GenAI Engineering
              </p>
              <p>
                <span className="font-bold">Date:</span> 1 feb 2024 - Present
              </p>
              <p className="mt-5">
                I&apos;m excited to be part of the Cloud Native Applied AI
                Engineering program at GIAIC, where I&apos;m gaining hands-on
                experience in designing and deploying scalable, efficient AI
                solutions. This program is helping me bridge the gap between
                theoretical knowledge and practical application, preparing me
                for a career in cutting-edge technology.
              </p>
            </div>
            <div className="flex-shrink-0 lg:mt-0 mt-4">
              <Image
                src={"/gigo.jpeg"}
                alt="uni"
                width={100}
                height={100}
                className="rounded-md h-16 w-30 object-cover"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Certifications",
      content: (
        <div>
          
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/codr.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/prop.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
