import { motion } from "framer-motion";

export default function SuccessAnimation({ message = "We've received your message and will get back to you within 2 business days." }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-8 text-center">
      <svg width={80} height={80} viewBox="0 0 80 80" aria-hidden="true">
        {/* Background circle */}
        <motion.circle
          cx={40} cy={40} r={36}
          fill="#f0fdf4"
          stroke="#16a34a"
          strokeWidth={3}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 18, duration: 0.5 }}
        />
        {/* Checkmark */}
        <motion.path
          d="M 24 40 l 11 11 20 -22"
          fill="none"
          stroke="#16a34a"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.35, duration: 0.45, ease: "easeOut" }}
        />
      </svg>

      <motion.h3
        className="font-semibold text-green-900 mt-4 mb-2 text-lg"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        Thank You!
      </motion.h3>

      <motion.p
        className="text-green-800 text-sm max-w-xs"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75 }}
      >
        {message}
      </motion.p>
    </div>
  );
}
