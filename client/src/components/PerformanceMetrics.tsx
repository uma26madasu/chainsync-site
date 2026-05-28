import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "@/components/CountUp";
import { fadeUp, stagger } from "@/lib/motion";

const METRICS = [
  {
    label: "Anomaly Detection",
    value: 2,
    suffix: "s",
    prefix: "~",
    desc: "From sensor event to anomaly classification",
    color: "#3b82f6",
    bg: "bg-blue-50",
    border: "border-blue-200",
    textColor: "text-blue-700",
  },
  {
    label: "Coordination Target",
    value: 15,
    suffix: " min",
    prefix: "<",
    desc: "Design goal: detection to scheduled response meeting (vs. 4–6 hrs manual)",
    color: "#10b981",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    textColor: "text-emerald-700",
  },
  {
    label: "Live AI Agents",
    value: 17,
    suffix: "",
    prefix: "",
    desc: "Specialized Python FastAPI agents deployed",
    color: "#8b5cf6",
    bg: "bg-purple-50",
    border: "border-purple-200",
    textColor: "text-purple-700",
  },
  {
    label: "Flow Implementations",
    value: 22,
    suffix: "+",
    prefix: "",
    desc: "Pre-built sensor and API connectors",
    color: "#f59e0b",
    bg: "bg-amber-50",
    border: "border-amber-200",
    textColor: "text-amber-700",
  },
];

function GaugeArc({ pct, color }: { pct: number; color: string }) {
  const R = 28;
  const CX = 36;
  const CY = 36;
  const circumference = Math.PI * R;
  const dash = (pct / 100) * circumference;

  return (
    <svg width="72" height="42" viewBox="0 0 72 42" aria-hidden="true">
      <path
        d={`M ${CX - R} ${CY} A ${R} ${R} 0 0 1 ${CX + R} ${CY}`}
        fill="none"
        stroke="#e2e8f0"
        strokeWidth={5}
        strokeLinecap="round"
      />
      <motion.path
        d={`M ${CX - R} ${CY} A ${R} ${R} 0 0 1 ${CX + R} ${CY}`}
        fill="none"
        stroke={color}
        strokeWidth={5}
        strokeLinecap="round"
        strokeDasharray={`${circumference} ${circumference}`}
        initial={{ strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset: circumference - dash }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      />
    </svg>
  );
}

const GAUGE_PCTS = [30, 85, 100, 75];

export default function PerformanceMetrics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      variants={stagger}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {METRICS.map((m, i) => (
        <motion.div
          key={m.label}
          variants={fadeUp}
          whileHover={{ y: -4, transition: { duration: 0.15 } }}
          className={`rounded-xl border-2 p-5 ${m.bg} ${m.border} flex flex-col items-center text-center`}
        >
          <GaugeArc pct={GAUGE_PCTS[i]} color={m.color} />

          <div className={`text-3xl font-bold mt-2 ${m.textColor}`}>
            {m.prefix}
            {inView ? <CountUp end={m.value} /> : "0"}
            {m.suffix}
          </div>

          <p className="text-sm font-semibold text-foreground mt-1">{m.label}</p>
          <p className="text-xs text-muted-foreground mt-1">{m.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
