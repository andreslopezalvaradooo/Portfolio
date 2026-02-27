import Link from "next/link";
import { TbBrandLinkedin } from "react-icons/tb";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "./ui/button";

const socials = [
  {
    icon: <TbBrandLinkedin />,
    tooltip: "LinkedIn",
    href: "https://www.linkedin.com/in/andreslopezalvarado",
  },
];

const Socials = () => {
  return (
    <div className="flex gap-2 md:gap-3 items-center">
      {socials.map((social, index) => (
        <Tooltip key={index}>
          <TooltipTrigger asChild>
            <Button asChild variant="icon" size="icon">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={social.href}
              >
                {social.icon}
              </Link>
            </Button>
          </TooltipTrigger>

          <TooltipContent>
            <p>{social.tooltip}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
};

export default Socials;
