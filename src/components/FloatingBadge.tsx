import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingBadgeProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function FloatingBadge({ children, delay = 0, className = "" }: FloatingBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: -20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        type: "spring",
        stiffness: 200,
        damping: 15
      }}
      whileHover={{ scale: 1.05, y: -2 }}
      className={`inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-primary px-4 py-2 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-shadow ${className}`}
    >
      {children}
    </motion.div>
  );
}
