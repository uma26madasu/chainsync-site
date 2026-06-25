import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const STEPS = [
  { label: "INGEST",      sublabel: "Webhook receives event",       bg: "#f0f9ff", border: "#bae6fd", dot: "#7dd3fc",  text: "#0369a1" },
  { label: "ANALYZE",     sublabel: "17 agents evaluate risk",       bg: "#f0fdf4", border: "#bbf7d0", dot: "#86efac",  text: "#15803d" },
  { label: "ORCHESTRATE", sublabel: "Response meeting scheduled",    bg: "#fffbeb", border: "#fde68a", dot: "#fbbf24",  text: "#92400e" },
  { label: "REPORT",      sublabel: "Audit-ready log generated",     bg: "#faf8ff", border: "#ede9fe", dot: "#c4b5fd",  text: "#5b21b6" },
];

const NODE_R = 28;
const W = 560;
const H = 160;
const Y = 80;
const STEP_W = W / STEPS.length;

function nodeX(i: number) {
  return STEP_W * i + STEP_W / 2;
}

export default function ProcessFlowAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="w-full rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" aria-label="ChainSync 4-step process flow">
        <rect width={W} height={H} fill="#ffffff" />

        {/* Connector lines */}
        {STEPS.slice(0, -1).map((step, i) => {
          const x1 = nodeX(i) + NODE_R;
          const x2 = nodeX(i + 1) - NODE_R;
          return (
            <g key={i}>
              <motion.line
                x1={x1} y1={Y} x2={x2} y2={Y}
                stroke={step.border}
                strokeWidth={2}
                strokeDasharray="6 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.4 }}
              />
              {inView && (
                <motion.circle
                  r={4}
                  fill={step.dot}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 1, 0], x: [x1, x2] }}
                  transition={{
                    duration: 1.2,
                    delay: 0.8 + i * 0.5,
                    repeat: Infinity,
                    repeatDelay: 1.8,
                    ease: "easeInOut",
                  }}
                  style={{ cy: Y }}
                />
              )}
            </g>
          );
        })}

        {/* Nodes */}
        {STEPS.map((step, i) => {
          const cx = nodeX(i);
          return (
            <g key={step.label}>
              {/* Node circle */}
              <motion.circle
                cx={cx} cy={Y} r={NODE_R}
                fill={step.bg}
                stroke={step.border}
                strokeWidth={1.8}
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.1 + i * 0.2 }}
                style={{ originX: `${cx}px`, originY: `${Y}px` }}
              />

              {/* Step number */}
              <motion.text
                x={cx} y={Y - 8}
                textAnchor="middle"
                fontSize={9}
                fill={step.text}
                fontWeight="800"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.2 }}
              >
                {i + 1}
              </motion.text>

              {/* Label */}
              <motion.text
                x={cx} y={Y + 5}
                textAnchor="middle"
                fontSize={7.5}
                fill={step.text}
                fontWeight="700"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.35 + i * 0.2 }}
              >
                {step.label}
              </motion.text>

              {/* Sublabel */}
              <motion.text
                x={cx} y={Y + NODE_R + 16}
                textAnchor="middle"
                fontSize={7}
                fill="#94a3b8"
                initial={{ opacity: 0, y: 4 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.2 }}
              >
                {step.sublabel}
              </motion.text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
