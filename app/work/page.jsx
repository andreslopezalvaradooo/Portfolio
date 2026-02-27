"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import cookingDate from "@/public/assets/cookingDate.png";
import storytime from "@/public/assets/storytime.png";
import neoTechServices from "@/public/assets/neoTechServices.png";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { TbArrowRightToArc } from "react-icons/tb";
import { SiGithub } from "react-icons/si";

const work = [
  {
    num: "01",
    name: "Cooking Date",
    description: "App Web",
    technology:
      "Node.js, Express.js, MongoDB, Socket.io, Vite, React, Javascript, Tailwind CSS, Chakra UI, Redux.js",
    photo: cookingDate,
    href: "https://cookingdate-nday.onrender.com",
  },
  {
    num: "02",
    name: "Story Time",
    description: "Create and share stories",
    technology: "Node.js, Express, MongoDB",
    photo: storytime,
    href: "https://storytime-p7s0.onrender.com/",
  },
  {
    num: "03",
    name: "NeoTech Services",
    description: "Company Website",
    technology: "React, Node.js, MongoDB",
    photo: neoTechServices,
    href: "/work",
  },
];

const Work = () => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  const currentProject = work[current - 1] || work[0];

  return (
    <main className="container h-[calc(100dvh-65px)] flex flex-col md:flex-row items-center overflow-hidden">
      <div className="relative h-full w-full md:w-1/2 flex flex-col gap-5 md:justify-center order-1 md:order-0">
        <h1 className="font-semibold text-5xl text-transparent text-outline transition-all duration-300">
          {currentProject.num}
        </h1>

        <h2 className="font-bold text-4xl group-hover:text-accent transition-all duration-300">
          {currentProject.name}
        </h2>

        <p className="text-sm text-justify text-foreground/70">
          {currentProject.description}
        </p>

        <p className="text-accent">{currentProject.technology}</p>

        <Separator className="bg-primary" />

        <div className="absolute md:static right-4 md:right-auto top-4 md:top-auto flex gap-4">
          <Link
            href={currentProject.href}
            className="hover:text-accent hover:-rotate-45 transition-all duration-300"
          >
            <TbArrowRightToArc size={25} />
          </Link>

          <Link
            href={currentProject.href}
            className="hover:text-accent transition-all duration-300"
          >
            <SiGithub size={25} />
          </Link>
        </div>
      </div>

      <Carousel
        setApi={setApi}
        className="w-2/5 m-12 flex items-center justify-center order-0 md:order-1"
      >
        <CarouselContent>
          {work.map((item, index) => (
            <CarouselItem key={index}>
              <div className="flex aspect-square items-center justify-center">
                <Image
                  src={item.photo}
                  alt={`Work ${index + 1}`}
                  className="rounded-md"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
};

export default Work;
