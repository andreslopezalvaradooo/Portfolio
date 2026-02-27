"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

const PageTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 1, duration: 0.4, ease: "easeInOut" }}
          className="h-full w-full fixed top-16 bg-background pointer-events-none"
        />

        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
