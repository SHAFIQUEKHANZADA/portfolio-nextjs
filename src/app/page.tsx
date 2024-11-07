"use client"
import Hero from "./components/Hero";
import { CardStackDemo } from "./components/Testimonials";
import { TimelineDemo } from "./components/Experince";
import Services from "./components/Services";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div>
     <Hero/>
     <Services/>
     <Skills/>
     <TimelineDemo/>
     <CardStackDemo/>
    </div>
  );
}
