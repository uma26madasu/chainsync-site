import type { Variants } from "framer-motion";

// Premium cubic-bezier — simulates physical mass deceleration
const EASE: [number, number, number, number] = [0.32, 0.72, 0, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: EASE } },
};

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

// Shared viewport config — triggers once, 60px before fold
export const viewport = { once: true, margin: "-60px" } as const;
