"use client"
import Image from "next/image";
import DarkModeToggle from "./components/DarkModeToggle";
import Hero from "./components/Hero";
import { CardHoverEffectDemo } from "./components/CardHover";
import { CardStackDemo } from "./components/Testimonials";
import { TimelineDemo } from "./components/Experince";
import Services from "./components/Services";
import Skills from "./components/Skills";
import { SignupFormDemo } from "./components/Contact";

export default function Home() {
  return (
    <div>
     <Hero/>
     <Services/>
     <Skills/>
     <TimelineDemo/>
     <CardStackDemo/>
     <SignupFormDemo/>
    </div>
  );
}
