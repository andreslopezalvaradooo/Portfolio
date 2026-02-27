"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const TRANSITION_DURATION = 1;

const PageFX = ({ children }) => {
  const pathname = usePathname();
  const [showChildren, setShowChildren] = useState(true);

  useEffect(() => {
    setShowChildren(false);

    const timer = setTimeout(
      () => setShowChildren(true),
      TRANSITION_DURATION * 1000
    );

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {/* Overlay */}
        <motion.div
          key={pathname}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: TRANSITION_DURATION, ease: "easeInOut" }}
          className="fixed inset-0 top-16 bg-background pointer-events-none"
        >
          {/* Scanline */}
          <motion.div
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: "calc(100vh - 64px)", opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute left-0 right-0 h-px bg-accent shadow-[0_0_15px_5px_var(--accent)]"
          />
        </motion.div>
      </AnimatePresence>

      {showChildren && (
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
};

export default PageFX;
