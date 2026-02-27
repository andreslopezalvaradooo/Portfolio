"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "Resume", href: "/resume" },
];

const Nav = () => {
  const pathname = usePathname();

  const isActive = (href) => href === pathname;

  return (
    <nav className="text-base flex gap-4 items-center">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          aria-current={isActive(link.href) ? "page" : undefined}
          className={[
            "hover:text-accent transition-all duration-500",
            isActive(link.href) && "text-accent border-b-2 border-accent",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
