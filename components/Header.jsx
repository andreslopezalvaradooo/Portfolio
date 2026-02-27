import Link from "next/link";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="container h-16 flex items-center justify-between">
      <Link
        href="/"
        aria-label="Go to homepage"
        className="text-3xl hover:text-accent transition-all duration-500"
      >
        Andrés<span className="text-accent">.</span>
      </Link>

      <div className="hidden md:flex gap-4 items-center">
        <Nav />

        <Button asChild>
          <Link href="/contact">HIRE ME</Link>
        </Button>
      </div>

      <div className="md:hidden">
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
