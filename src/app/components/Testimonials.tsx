
import {
  CardStack,
  CardStackThree,
  CardStackTwo,
} from "../../components/ui/card-stack";
import { cn } from "@/lib/utils";


export function CardStackDemo() {
 
  return (
    <div className="dark:bg-black pt-20 lg:mt-28 my-14 lg:mb-40 mb-24">
      <div className="mb-10">
        <h1 className="scroll-m-20 gap-y-10 lg:pl-10 pl-4 text-4xl  font-extrabold  lg:text-5xl  xyz">
          Client & Colleague Endorsements
        </h1>
      </div>
      <div className="grid mt-24 sm:mx-auto  md:grid-cols-1  items-center  w-full">
      <div className="md:mx-auto flex lg:flex-row flex-col  lg:gap-7 gap-0 justify-evenly sm:h-auto">
      <CardStack items={CARDS} />
        <CardStackTwo items={CARDSS} />
        <CardStackThree items={CARDSSS} />
      </div>
      </div>
    </div>
  );
}

 
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};
const CARDS = [
  {
    id: 0,
    name: "Asharib Ali",
    designation: "Blockchain developer",
    content: (
      <p>
        Shafique&apos;s expertise in Cloud Native technologies and Generative AI is impressive. His ability to turn complex problems into scalable solutions is truly commendable.
      </p>
    ),
  },
  {
    id: 1,
    name: "Zayan Ahmed",
    designation: "Junior web developer",
    content: (
      <p>
      As a Cloud Native and AI developer, Shafique combines technical excellence with a keen sense of user-centric design. His work is both cutting-edge and practical.
      </p>
    ),
  },
  {
    id: 2,
    name: "Isfhan Ahmed",
    designation: "Backend developer",
    content: (
      <p>
      Working with Shafique has been a great experience. His skills in full-stack development, from building scalable APIs to designing intuitive user interfaces, have greatly enhanced our projects
      </p>
    ),
  },
];

const CARDSS = [
  {
    id: 3,
    name: "Arsalan Ahmed",
    designation: "Senior Software Engineer",
    content: (
      <p>
        Shafique’s expertise in frontend development with Next.js complements his AI skills perfectly. His ability to build scalable and efficient web interfaces is impressive.
      </p>
    ),
  },
  {
    id: 4,
    name: "Muhammad Bilal",
    designation: "Senior fullstack developer",
    content: (
      <p>
        Shafique’s proficiency in designing AI solutions using BDD and design thinking ensures that his projects are not only effective but also user-friendly.
      </p>
    ),
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
     Shafique brings a wealth of experience to full-stack development. His expertise in building scalable applications and integrating various technologies ensures project success from start to finish.
      </p>
    ),
  },
];
const CARDSSS = [
  {
    id: 6,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <p>
        Shafique&apos;s skills in building Custom GPTs and AI agents are second to none. His innovative approach and technical proficiency make him a standout in the field.
      </p>
    ),
  },
  {
    id: 7,
    name: "John henry",
    designation: "Senior Shitposter",
    content: (
      <p>
       Working with Shafique has been a game-changer for our <Highlight>AI projects.</Highlight> His deep understanding of AI agents and LLMs has propelled our development forward.
      </p>
    ),
  },
  {
    id: 8,
    name: "Hamzah Khan",
    designation: "Project Manager",
    content: (
      <p>
   Shafique’s approach to full-stack development is both innovative and practical. His proficiency in handling complex tech stacks and delivering user-friendly solutions is commendable.
      </p>
    ),
  },
];
