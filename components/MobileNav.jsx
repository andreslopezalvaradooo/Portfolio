"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { TbArrowLeftToArc } from "react-icons/tb";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "Resume", href: "/resume" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href) => href === pathname;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="noBorder" size="noBorder">
          <TbArrowLeftToArc size={36} />
        </Button>
      </SheetTrigger>

      <SheetContent aria-describedby={undefined}>
        <SheetHeader>
          <SheetTitle>
            <Link href="/">
              Andrés<span className="text-accent">.</span>
            </Link>
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-8 items-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={[
                "hover:text-accent transition-all duration-500 text-lg",
                isActive(link.href) && "text-accent border-b-2 border-accent",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex justify-center">
          <Button asChild>
            <Link href="/contact" onClick={() => setOpen(false)}>
              HIRE ME
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
