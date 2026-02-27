"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

const Scanline = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <div
        key={pathname}
        className="h-full fixed top-16 left-0 right-0 z-50 pointer-events-none"
      >
        <motion.div
          initial={{ top: 0 }}
          animate={{ top: "calc(100vh - 64px)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="relative h-px w-full bg-accent shadow-[0_0_15px_5px_var(--accent)]"
        />
      </div>
    </AnimatePresence>
  );
};

export default Scanline;
