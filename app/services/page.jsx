import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { TbArrowRightToArc } from "react-icons/tb";

const services = [
  {
    num: "01",
    title: "Web Development (Fullstack)",
    text: "I develop modern, fast, and optimized websites from end to end. I build solid architectures, scalable APIs, and clean frontends that deliver a smooth experience on any device.",
  },
  {
    num: "02",
    title: "UI/Frontend Moderno",
    text: "I build visually appealing, minimalist, and highly functional interfaces using React, Next.js, Tailwind, and shadcn/ui. I care about user experience, animations, and the visual details that make an interface stand out.",
  },
  {
    num: "03",
    title: "Interactive & 3D Web",
    text: "I develop interactive web experiences and 3D animations using react-three-fiber and Three.js. From animated elements to full three-dimensional scenes, I integrate dynamic content with a professional aesthetic.",
  },
  {
    num: "04",
    title: "AI Integration",
    text: "I integrate AI models into web applications: text generation, image creation, and intelligent chatbots using APIs like Hugging Face and DeepInfra. I implement efficient architectures with Go and Node.",
  },
];

const Services = () => {
  return (
    <main className="container">
      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col gap-4">
            <div className="relative flex flex-col gap-4 group">
              <Link
                href="/work"
                className="absolute top-2 right-2 group-hover:text-accent hover:-rotate-45 transition-all duration-500"
              >
                <TbArrowRightToArc size={25} />
              </Link>

              <span className="text-5xl text-transparent text-outline font-semibold transition-all duration-500">
                {service.num}
              </span>

              <h1 className="text-4xl font-bold group-hover:text-accent transition-all duration-500">
                {service.title}
              </h1>

              <p className="text-foreground/70 text-sm text-justify">
                {service.text}
              </p>
            </div>

            <Separator className="bg-primary" />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Services;
