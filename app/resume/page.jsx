import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  SiJavascript,
  SiHtml5,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiShadcnui,
  SiPostgresql,
  SiApollographql,
  SiGraphql,
  SiPrisma,
  SiNestjs,
  SiPython,
} from "react-icons/si";
import { BiLogoGoLang } from "react-icons/bi";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const skills = [
  { name: "JavaScript", icon: SiJavascript, level: "Intermediate" },
  { name: "HTML5", icon: SiHtml5, level: "Intermediate" },
  { name: "React.js", icon: SiReact, level: "Intermediate" },
  { name: "Node.js", icon: SiNodedotjs, level: "Intermediate" },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: "Intermediate" },
  { name: "Shadcn/UI", icon: SiShadcnui, level: "Intermediate" },
  { name: "Next.js", icon: SiNextdotjs, level: "Intermediate" },
  { name: "MongoDB", icon: SiMongodb, level: "Intermediate" },
  { name: "PostgreSQL", icon: SiPostgresql, level: "Basic" },
  { name: "NestJS", icon: SiNestjs, level: "Basic" },
  { name: "Prisma", icon: SiPrisma, level: "Basic" },
  { name: "GraphQL", icon: SiGraphql, level: "Basic" },
  { name: "Apollo", icon: SiApollographql, level: "Basic" },
  { name: "Python", icon: SiPython, level: "Basic" },
  { name: "GoLang", icon: BiLogoGoLang, level: "Basic" },
];

const aboutMe = [
  { label: "Name", value: "Andrés López" },
  { label: "Freelance", value: "Available" },
  { label: "Nationality", value: "Colombian" },
  { label: "Languages", value: "Spanish" },
  { label: "Phone", value: "(+57) 350 613 0442" },
  { label: "Email", value: "andreslopezalvaradooo@gmail.com" },
];

const experience = [
  {
    period: "2015 - 2022",
    role: "Técnico de Cambios y Devoluciones",
    company: "Colombiana de Comercio S.A.S",
  },
  {
    period: "2014",
    role: "Supervisor de Campo",
    company: "REDCOM LTDA – GRUPO CS C.T.",
  },
  {
    period: "2014",
    role: "Técnico Electrónico",
    company: "CSM INGENIERIA LTDA",
  },
];

const education = [
  {
    period: "2013",
    degree: "Ingeniero Electrónico",
    institution: "Universidad de Los Llanos",
  },
  {
    period: "2007",
    degree: "Bachiller Técnico",
    institution: "Institución Educativa Antonio Ricaurte CASD",
  },
  {
    period: "2001",
    degree: "Básica Primaria",
    institution: "Concentración Urbana Simón Bolívar",
  },
];

const ContentHeader = ({ title, description }) => (
  <div className="flex flex-col gap-1 md:gap-4">
    <h2 className="text-3xl lg:text-4xl font-bold">{title}</h2>

    <p className="text-foreground/70 text-justify md:text-left text-sm">
      {description}
    </p>
  </div>
);

const CardList = ({ items, renderItem }) => (
  <ScrollArea className="flex-1 overflow-y-auto">
    <ul className="flex flex-col md:grid md:grid-cols-2 gap-1">
      {items.map(renderItem)}
    </ul>
  </ScrollArea>
);

const SkillCard = ({ icon: Icon, name, level }) => (
  <div className="bg-primary p-4 flex justify-center rounded-md">
    <Tooltip>
      <TooltipTrigger className="flex flex-col items-center gap-2 group">
        <Icon
          size={50}
          className="group-hover:text-accent transition-all duration-500"
        />

        <p className="text-foreground/70 text-xs group-hover:text-accent">
          {level}
        </p>
      </TooltipTrigger>

      <TooltipContent>{name}</TooltipContent>
    </Tooltip>
  </div>
);

const Resume = () => (
  <main className="container h-[calc(100dvh-65px)] flex justify-center">
    <Tabs defaultValue="experience" className="w-full">
      <aside className="md:w-1/3 flex flex-col gap-6">
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold">Why hire me?</h1>

          <p className="text-foreground/70 text-justify md:text-left text-sm mt-2">
            Passionate fullstack developer focused on crafting high-quality web
            experiences.
          </p>
        </div>

        <TabsList>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="aboutMe">About Me</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>
      </aside>

      <TabsContent value="skills">
        <ContentHeader
          title="My Skills"
          description="Technologies and tools I use regularly."
        />

        <div className="grid grid-cols-4 gap-3">
          {skills.map((skill, i) => (
            <SkillCard key={i} {...skill} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="aboutMe">
        <ContentHeader
          title="About Me"
          description="Quick details about who I am and how to reach me."
        />

        <div className="grid grid-cols-2 gap-4">
          {aboutMe.map(({ label, value }, i) => (
            <div key={i}>
              <span className="text-foreground/70 text-sm">{label}:</span>

              <p className="text-foreground break-all">{value}</p>
            </div>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="experience">
        <ContentHeader
          title="My Experience"
          description="My journey before coding"
        />

        <CardList
          items={experience}
          renderItem={(item, i) => (
            <li key={i} className="bg-primary p-4 rounded-md">
              <p className="text-accent">{item.period}</p>

              <h3 className="text-xl font-bold">{item.role}</h3>

              <div className="flex items-center gap-2 text-sm text-foreground/70">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {item.company}
              </div>
            </li>
          )}
        />
      </TabsContent>

      <TabsContent value="education">
        <ContentHeader
          title="My Education"
          description="Academic background and formal training."
        />

        <CardList
          items={education}
          renderItem={(item, i) => (
            <li key={i} className="bg-primary p-4 rounded-md">
              <p className="text-accent">{item.period}</p>

              <h3 className="text-xl font-bold">{item.degree}</h3>

              <div className="flex items-center gap-2 text-sm text-foreground/70">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {item.institution}
              </div>
            </li>
          )}
        />
      </TabsContent>
    </Tabs>
  </main>
);

export default Resume;
