import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export default function GlassCard({ children, className = "", delay = 0, hover = true }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -4, scale: 1.01 } : {}}
      className={`backdrop-blur-lg bg-white/70 border border-white/20 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 ${className}`}
      style={{
        backdropFilter: 'blur(12px) saturate(150%)',
        WebkitBackdropFilter: 'blur(12px) saturate(150%)'
      }}
    >
      {children}
    </motion.div>
  );
}
