import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const SOURCES = [
  { label: "SCADA", y: 80 },
  { label: "BMS", y: 160 },
  { label: "IoT / API", y: 240 },
];

/* Travelling pulse dot along an SVG straight line */
function PulseDot({
  x1, y1, x2, y2, duration, delay, color,
}: {
  x1: number; y1: number; x2: number; y2: number;
  duration: number; delay: number; color: string;
}) {
  const prefersReduced = useReducedMotion();
  if (prefersReduced) return null;
  const pathD = `M ${x1} ${y1} L ${x2} ${y2}`;
  return (
    <motion.circle
      r={4.5}
      fill={color}
      style={{ offsetPath: `path('${pathD}')` } as React.CSSProperties}
      initial={{ offsetDistance: "0%", opacity: 0 }}
      animate={{ offsetDistance: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: 0.8,
        ease: "easeInOut",
        times: [0, 0.08, 0.92, 1],
      }}
    />
  );
}

/* Entry line draw animation */
function AnimLine({
  x1, y1, x2, y2, stroke, delay,
}: {
  x1: number; y1: number; x2: number; y2: number; stroke: string; delay: number;
}) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke={stroke} strokeWidth={1.5} strokeDasharray="5 4"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={prefersReduced ? { duration: 0 } : { duration: 0.7, delay, ease: [0.32, 0.72, 0, 1] }}
    />
  );
}

export default function AnimatedHeroFlow() {
  const [mounted, setMounted] = useState(false);
  const prefersReduced = useReducedMotion();
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // Scaled-up coordinate space (1.5x from original 480×300 → 600×380)
  const W = 600;
  const H = 380;

  const webhookX = 268;
  const webhookY = 150;
  const agentsX = 448;
  const agentsY = 150;
  const schedulerX = 448;
  const schedulerY = 272;
  const meetingX = 288;
  const meetingY = 332;

  return (
    <div className="w-full">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        aria-label="ChainSync incident response flow diagram"
      >
        <defs>
          <pattern id="hgrid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#f1f5f9" strokeWidth="0.9" />
          </pattern>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <rect width={W} height={H} fill="#ffffff" />
        <rect width={W} height={H} fill="url(#hgrid)" />

        {/* ── Source nodes */}
        {SOURCES.map(({ label, y }, idx) => {
          const lx2 = webhookX - 52;
          return (
            <g key={label}>
              <rect x={14} y={y - 18} width={72} height={36} rx={8}
                fill="#f0f9ff" stroke="#bae6fd" strokeWidth={1.4} />
              <text x={50} y={y + 5} textAnchor="middle" fontSize={14}
                fill="#0369a1" fontWeight="700" fontFamily="'Plus Jakarta Sans', system-ui">
                {label}
              </text>
              <AnimLine x1={86} y1={y} x2={lx2} y2={webhookY} stroke="#bae6fd" delay={0.2 + idx * 0.15} />
              <PulseDot x1={86} y1={y} x2={lx2} y2={webhookY}
                duration={1.5} delay={0.6 + idx * 0.45} color="#38bdf8" />
            </g>
          );
        })}

        {/* ── Universal Webhook */}
        <rect x={webhookX - 54} y={webhookY - 32} width={108} height={64} rx={10}
          fill="#f0f9ff" stroke="#7dd3fc" strokeWidth={1.8} />
        <text x={webhookX} y={webhookY - 12} textAnchor="middle" fontSize={11}
          fill="#0369a1" fontWeight="700" fontFamily="'Plus Jakarta Sans', system-ui">
          UNIVERSAL
        </text>
        <text x={webhookX} y={webhookY + 3} textAnchor="middle" fontSize={11}
          fill="#0369a1" fontWeight="700" fontFamily="'Plus Jakarta Sans', system-ui">
          WEBHOOK
        </text>
        <text x={webhookX} y={webhookY + 18} textAnchor="middle" fontSize={10}
          fill="#0284c7" fontFamily="'Plus Jakarta Sans', system-ui">
          ENDPOINT
        </text>

        {/* ── Webhook → Agents */}
        <AnimLine x1={webhookX + 54} y1={webhookY} x2={agentsX - 50} y2={agentsY}
          stroke="#86efac" delay={1} />
        <PulseDot x1={webhookX + 54} y1={webhookY} x2={agentsX - 50} y2={agentsY}
          duration={1.2} delay={1.4} color="#4ade80" />

        {/* ── 17 AI Agents */}
        <rect x={agentsX - 50} y={agentsY - 34} width={100} height={68} rx={10}
          fill="#f0fdf4" stroke="#86efac" strokeWidth={1.8} />
        <text x={agentsX} y={agentsY - 14} textAnchor="middle" fontSize={14}
          fill="#15803d" fontWeight="700" fontFamily="'Plus Jakarta Sans', system-ui">
          17 AI
        </text>
        <text x={agentsX} y={agentsY + 4} textAnchor="middle" fontSize={14}
          fill="#15803d" fontWeight="700" fontFamily="'Plus Jakarta Sans', system-ui">
          AGENTS
        </text>
        {/* Agent activity dots */}
        {!prefersReduced && [0,1,2,3,4,5,6].map((i) => (
          <motion.circle
            key={i}
            cx={agentsX - 24 + (i % 4) * 16}
            cy={agentsY + 20 + Math.floor(i / 4) * 10}
            r={2.5}
            fill="#86efac"
            animate={{ opacity: [0.25, 1, 0.25] }}
            transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.18 }}
          />
        ))}
        {prefersReduced && [0,1,2,3,4,5,6].map((i) => (
          <circle key={i} cx={agentsX - 24 + (i % 4) * 16}
            cy={agentsY + 20 + Math.floor(i / 4) * 10}
            r={2.5} fill="#86efac" opacity={0.5} />
        ))}

        {/* ── Agents → Scheduler */}
        <AnimLine x1={agentsX} y1={agentsY + 34} x2={schedulerX} y2={schedulerY - 32}
          stroke="#fde68a" delay={1.5} />
        <PulseDot x1={agentsX} y1={agentsY + 34} x2={schedulerX} y2={schedulerY - 32}
          duration={1.1} delay={1.9} color="#fbbf24" />

        {/* ── Scheduler */}
        <rect x={schedulerX - 50} y={schedulerY - 32} width={100} height={64} rx={10}
          fill="#fffbeb" stroke="#fde68a" strokeWidth={1.8} />
        <text x={schedulerX} y={schedulerY - 10} textAnchor="middle" fontSize={13}
          fill="#92400e" fontWeight="700" fontFamily="'Plus Jakarta Sans', system-ui">
          SCHEDULER
        </text>
        <text x={schedulerX} y={schedulerY + 8} textAnchor="middle" fontSize={11}
          fill="#b45309" fontFamily="'Plus Jakarta Sans', system-ui">
          Coordination
        </text>
        {!prefersReduced && (
          <motion.circle cx={schedulerX + 34} cy={schedulerY - 22} r={7}
            fill="#bbf7d0" stroke="#86efac" strokeWidth={1.2}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        )}

        {/* ── Scheduler → Meeting */}
        <AnimLine x1={schedulerX - 50} y1={schedulerY + 6} x2={meetingX + 60} y2={meetingY - 10}
          stroke="#ddd6fe" delay={2} />
        <PulseDot x1={schedulerX - 50} y1={schedulerY + 6} x2={meetingX + 60} y2={meetingY - 10}
          duration={1} delay={2.4} color="#c4b5fd" />

        {/* ── Response Meeting */}
        <rect x={meetingX - 60} y={meetingY - 28} width={120} height={56} rx={10}
          fill="#faf8ff" stroke="#ddd6fe" strokeWidth={1.8} />
        <text x={meetingX} y={meetingY - 8} textAnchor="middle" fontSize={12}
          fill="#4c1d95" fontWeight="700" fontFamily="'Plus Jakarta Sans', system-ui">
          RESPONSE
        </text>
        <text x={meetingX} y={meetingY + 8} textAnchor="middle" fontSize={12}
          fill="#4c1d95" fontWeight="700" fontFamily="'Plus Jakarta Sans', system-ui">
          MEETING
        </text>

        {/* Checkmark badge */}
        {!prefersReduced ? (
          <>
            <motion.circle cx={meetingX + 44} cy={meetingY - 20} r={10}
              fill="#bbf7d0" stroke="#86efac" strokeWidth={1.2}
              initial={{ scale: 0 }} animate={{ scale: 1 }}
              transition={{ delay: 3, type: "spring", stiffness: 280, damping: 22 }}
            />
            <motion.path d={`M ${meetingX + 39} ${meetingY - 20} l 4 4 7 -7`}
              stroke="#15803d" strokeWidth={2.2} fill="none"
              strokeLinecap="round" strokeLinejoin="round"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ delay: 3.2, duration: 0.3 }}
            />
          </>
        ) : (
          <>
            <circle cx={meetingX + 44} cy={meetingY - 20} r={10} fill="#bbf7d0" stroke="#86efac" strokeWidth={1.2} />
            <path d={`M ${meetingX + 39} ${meetingY - 20} l 4 4 7 -7`}
              stroke="#15803d" strokeWidth={2.2} fill="none"
              strokeLinecap="round" strokeLinejoin="round" />
          </>
        )}

        {/* Footer labels */}
        <text x={10} y={H - 10} fontSize={11} fill="#94a3b8"
          fontFamily="'Plus Jakarta Sans', system-ui">
          External Monitoring Systems
        </text>
        <text x={W - 10} y={H - 10} fontSize={11} fill="#94a3b8" textAnchor="end"
          fontFamily="'Plus Jakarta Sans', system-ui">
          Automated. Hours of coordination, compressed to minutes.
        </text>
      </svg>

      {/* Legend */}
      <div className="flex items-center justify-center flex-wrap gap-5 px-4 py-3 bg-slate-50 border-t border-slate-100">
        {[
          { color: "#38bdf8", label: "Ingest" },
          { color: "#4ade80", label: "Analyze" },
          { color: "#fbbf24", label: "Orchestrate" },
          { color: "#c4b5fd", label: "Schedule" },
        ].map(({ color, label }) => (
          <div key={label} className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
            <span className="text-[13px] text-slate-500 font-medium">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
