import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface EnhancedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "lg" | "xl";
  showArrow?: boolean;
  className?: string;
  href?: string;
  pulse?: boolean;
}

export default function EnhancedButton({
  children,
  onClick,
  variant = "primary",
  size = "default",
  showArrow = false,
  className = "",
  pulse = false
}: EnhancedButtonProps) {
  const sizeClasses = {
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl"
  };

  const variantClasses = {
    primary: "bg-gradient-to-r from-primary to-blue-700 hover:from-blue-700 hover:to-primary text-white shadow-lg hover:shadow-xl",
    secondary: "bg-gradient-to-r from-secondary to-green-700 hover:from-green-700 hover:to-secondary text-white shadow-lg hover:shadow-xl",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-md hover:shadow-lg"
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      <Button
        onClick={onClick}
        className={`${sizeClasses[size]} ${variantClasses[variant]} h-auto font-semibold transition-all duration-300 rounded-lg ${className} ${pulse ? 'animate-pulse' : ''}`}
      >
        <span className="flex items-center gap-2">
          {children}
          {showArrow && (
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowRight size={20} />
            </motion.span>
          )}
        </span>
      </Button>
    </motion.div>
  );
}
