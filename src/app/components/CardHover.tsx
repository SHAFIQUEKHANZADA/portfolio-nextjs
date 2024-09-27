import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
    return (
      <div className="scrollable-container px-8 ">
        <HoverEffect items={projects} />
      </div>
    );
  }
  export const projects = [
    {
      imageSrc: "/robiz.png",
      title: "Robiz",
      description:
        "Robiz, the cutting-edge e-commerce platform designed to revolutionize your online shopping experience. Robiz combines sleek design with powerful functionality to offer a seamless and intuitive shopping journey. Whether you're a consumer looking for the latest trends or a business owner aiming to expand your reach, Robiz has you covered.",
      link: "https://robiz-nextjs-ecommerce.vercel.app/",
    },
    {
      imageSrc: "/pana.jpg",
      title: "Panacloud",
      description:
        "Panacloud PTV ltd Solutions is a comprehensive cloud-based platform designed to streamline business operations.",
      link: "https://panacloud-website-rho.vercel.app/",
    },
    {
      imageSrc: "/capming.png",
      title: "Hilink",
      description:
        "Hilink is a travel website designed to help users discover and plan their ideal trips. It offers easy navigation, detailed destination guides, and travel tips, making trip planning simple and enjoyable for all travelers.",
      link: "https://travel-app-with-next-js.vercel.app/",
    },
    {
      imageSrc: "/made.png",
      title: "SkyCast",
      description:
        "SkyCast is a weather forecasting app built using Next.js and the OpenWeatherMap API. It provides real-time weather updates for over 40 cities across Pakistan. With a sleek and user-friendly interface, the app allows users to view current conditions, temperature, humidity, wind speed, and a detailed forecast.",
      link: "https://github.com/SHAFIQUEKHANZADA/Weather-App-nextjs",
    },
    {
      imageSrc: "/dash.png",
      title: "Dashboard",
      description:
        "A dynamic and interactive dashboard featuring various charts to provide insightful data visualization. The charts are designed to be user-friendly and responsive, allowing users to analyze data trends easily. By integrating real-time data, the dashboard ensures up-to-date insights, making it an essential tool for informed decision-making.",
      link: "https://github.com/SHAFIQUEKHANZADA/dashboard-with-nextjs",
    },
    {
      imageSrc: "/sch.png",
      title: "Student Management System",
      description:
        "This is Nodejs CLI project, i have made this project student managment system as an assignment in class of governor initiative of artifical intelligence and metaverse",
      link: "https://github.com/SHAFIQUEKHANZADA/Student-Management-System",
    },
    {
      imageSrc: "/ha.jpg",
      title: "100 Days of Coding",
      description:
        "This is hunderd days of coding challange i have done a an assignment also. there are lots of mini nodejs CLI projects in challange that i have made you can see by clicking here",
      link: "https://github.com/SHAFIQUEKHANZADA/100-days-of-coding-challenge",
    },
  ];