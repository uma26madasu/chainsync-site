import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import AnimatedCounter from "./AnimatedCounter";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  value: string;
  numericValue?: number;
  title: string;
  description: string;
  icon?: LucideIcon;
  color?: "primary" | "secondary" | "accent";
  delay?: number;
}

export default function StatsCard({
  value,
  numericValue,
  title,
  description,
  icon: Icon,
  color = "primary",
  delay = 0
}: StatsCardProps) {
  const colorClasses = {
    primary: "from-blue-500 to-blue-600 text-blue-600 bg-blue-50 border-blue-200",
    secondary: "from-green-500 to-green-600 text-green-600 bg-green-50 border-green-200",
    accent: "from-amber-500 to-amber-600 text-amber-600 bg-amber-50 border-amber-200"
  };

  const [gradientFrom, gradientTo, textColor, bgColor, borderColor] = colorClasses[color].split(' ');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <Card className={`p-8 bg-white border-2 ${borderColor} hover:shadow-2xl transition-all duration-300 relative overflow-hidden group`}>
        {/* Background gradient on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

        {/* Icon */}
        {Icon && (
          <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${bgColor} mb-4 relative z-10`}>
            <Icon className={textColor} size={28} />
          </div>
        )}

        {/* Value */}
        <div className={`text-5xl font-bold ${textColor} mb-3 relative z-10`}>
          {numericValue !== undefined ? (
            <AnimatedCounter end={numericValue} suffix={value.replace(/[0-9]/g, '')} />
          ) : (
            value
          )}
        </div>

        {/* Title */}
        <h3 className="font-bold text-foreground mb-2 text-lg relative z-10">{title}</h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed relative z-10">{description}</p>

        {/* Decorative corner */}
        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-10 rounded-bl-full`}></div>
      </Card>
    </motion.div>
  );
}
