import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TbDownload } from "react-icons/tb";

export default function Home() {
  return (
    <main className="container flex flex-col gap-6 items-center justify-center">
      <section className="flex flex-col md:flex-row gap-6 items-center justify-center">
        <div className="flex flex-col gap-6 order-1 md:order-0">
          {/* Description */}
          <div className="flex flex-col gap-2">
            <span>Fullstack Developer</span>

            <h1 className="text-4xl font-bold">
              Hello, I'm
              <br />
              <span className="text-accent">Andrés López</span>.
            </h1>

            <p className="text-foreground/70 text-sm text-justify md:text-left">
              I build fast and polished digital experiences using React or
              Next.js with Tailwind CSS. I develop backend services with NestJS,
              Node.js, Go, or Python, connected to MongoDB or PostgreSQL to
              create complete, scalable, production-ready applications.
            </p>
          </div>

          {/* Button - Socials */}
          <div className="flex gap-2 md:gap-3 items-center justify-center md:justify-start">
            <Button asChild>
              <Link href="/assets/CV.pdf" download>
                DOWNLOAD CV <TbDownload />
              </Link>
            </Button>

            <Socials />
          </div>
        </div>

        <Link href="/resume">
          <Photo className="order-0 md:order-1" />
        </Link>
      </section>

      <Stats />

      <p className="pt-12 text-accent text-sm">
        Built with Next.js, Tailwind CSS, Shadcn/UI & Framer Motion
      </p>
    </main>
  );
}
