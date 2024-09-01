import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
    return (
      <div className=" px-8">
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
      imageSrc: "/robiz.png",
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      imageSrc: "/robiz.png",
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      imageSrc: "/robiz.png",
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      imageSrc: "/robiz.png",
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      imageSrc: "/robiz.png",
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];