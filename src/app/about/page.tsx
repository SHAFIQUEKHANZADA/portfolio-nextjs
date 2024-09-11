import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="about-bg">
      <div className="lg:py-36 py-20 lg:px-32 px-5">
        <div>
          <h1 className="text-5xl font-extrabold text-center mb-10"><span className="text-orange-600">About</span> Me</h1>
        </div>
        <p className="lg:leading-7 mb-5 lg:text-[20px]">
          I am a passionate front-end developer with a growing expertise in
          Next.js, TypeScript, and responsive design. Currently, I am advancing
          my skills in the Cloud Native Applied Generative AI Certification
          program, where I am learning to develop intelligent cloud applications
          using GenAI technologies. With a focus on creating user-friendly
          interfaces and seamless user experiences,
        </p>
        <p className="lg:leading-7 mb-5 lg:text-[20px]">
          I am expanding my skillset to include AI-powered microservices,
          multi-agent systems, and cloud-native development. Driven by
          innovation and future-proofing my career, I aim to merge cutting-edge
          GenAI capabilities with front-end development to build scalable and
          intelligent applications.
        </p>

        <p className="lg:leading-7 mb-5 lg:text-[20px]">
          As a front-end developer with a deep passion for Generative AI and
          cloud-native technologies, I envision a future where intelligent,
          scalable applications revolutionize the way businesses operate. My
          goal is to merge the power of AI with seamless, user-centered
          front-end experiences, creating solutions that not only enhance
          productivity but also drive innovation across industries. With my
          ongoing pursuit of the Cloud Native Applied Generative AI
          Certification, I am sharpening my expertise in building AI-powered
          microservices, custom GPTs, and multi-agent systems.
        </p>
        <p className="lg:leading-7 lg:text-[20px]">
          I believe that the convergence of GenAI, Physical AI, and cloud-native
          computing will redefine the technological landscape, offering endless
          possibilities for automation, human-computer interaction, and
          immersive user experiences. Through continuous learning and hands-on
          development, I aim to contribute to this rapidly evolving field,
          helping businesses harness the transformative potential of AI while
          maintaining a focus on intuitive and accessible design.
        </p>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full">
        {/* <hr className=""/> */}
        <p className="px-10 text-center py-6 font-extralight text-[12px] dark:text-zinc-200">
          © 2024 Shafique Ur Rehman™. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default page;
