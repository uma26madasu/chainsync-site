import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const STEPS = [
  {
    label: "INGEST",
    sublabel: "Webhook receives event",
    bg: "#f0f9ff",
    activeBg: "#dbeafe",
    border: "#bae6fd",
    activeBorder: "#60a5fa",
    dot: "#7dd3fc",
    text: "#0369a1",
    badge: "~2s (target)",
    badgeBg: "#dbeafe",
    badgeText: "#1d4ed8",
    detail: "ChainSync receives events from sensors, SCADA systems, weather APIs, and external alert systems via standard HTTP webhooks. When an anomaly is detected, it is flagged and processing begins immediately.",
    callout: { label: "Universal Webhook Endpoint", text: "Supports MuleSoft, Workato, Boomi, and custom integrations with zero vendor lock-in." },
  },
  {
    label: "ANALYZE",
    sublabel: "17 agents evaluate risk",
    bg: "#f0fdf4",
    activeBg: "#dcfce7",
    border: "#bbf7d0",
    activeBorder: "#4ade80",
    dot: "#86efac",
    text: "#15803d",
    badge: "~30s (target)",
    badgeBg: "#dcfce7",
    badgeText: "#15803d",
    detail: "17 coordination agents perform intelligent analysis. Each agent enriches context with historical data and regulatory thresholds, determines risk level, and routes the incident to the correct response path.",
    callout: { label: "17 Coordination Agents", text: "Each agent owns one discrete job in the pipeline — detection, classification, routing, and documentation." },
  },
  {
    label: "ORCHESTRATE",
    sublabel: "Response meeting scheduled",
    bg: "#fffbeb",
    activeBg: "#fef3c7",
    border: "#fde68a",
    activeBorder: "#fbbf24",
    dot: "#fbbf24",
    text: "#92400e",
    badge: "~50s (target)",
    badgeBg: "#fef3c7",
    badgeText: "#92400e",
    detail: "Based on the analysis, ChainSync determines who needs to be notified, assigns ownership, and schedules emergency meetings — checking Google Calendar and Microsoft 365 simultaneously across all stakeholders.",
    callout: { label: "Scheduling Layer", text: "Multi-calendar conflict detection with automatic authority selection and emergency override." },
  },
  {
    label: "REPORT",
    sublabel: "Audit-ready log generated",
    bg: "#faf8ff",
    activeBg: "#ede9fe",
    border: "#ede9fe",
    activeBorder: "#a78bfa",
    dot: "#c4b5fd",
    text: "#5b21b6",
    badge: "Continuous",
    badgeBg: "#ede9fe",
    badgeText: "#5b21b6",
    detail: "ChainSync maintains a full audit trail throughout the incident lifecycle. Compliance documentation — incident reports, regulatory notifications, and compliance records — is auto-generated in real-time.",
    callout: { label: "Compliance Records", text: "Full audit trail maintained throughout the incident. Documentation exportable and audit-ready at closure." },
  },
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
  const [selected, setSelected] = useState<number | null>(null);

  const toggle = (i: number) => setSelected(prev => prev === i ? null : i);

  return (
    <div ref={ref} className="w-full rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        aria-label="ChainSync 4-step process flow. Click any step to learn more."
      >
        <rect width={W} height={H} fill="#ffffff" />

        {/* Connector lines */}
        {STEPS.slice(0, -1).map((step, i) => {
          const x1 = nodeX(i) + NODE_R;
          const x2 = nodeX(i + 1) - NODE_R;
          const highlight = selected === i || selected === i + 1;
          return (
            <g key={i}>
              <motion.line
                x1={x1} y1={Y} x2={x2} y2={Y}
                stroke={highlight ? step.activeBorder : step.border}
                strokeWidth={highlight ? 2.5 : 2}
                strokeDasharray="6 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: highlight ? 1 : 0.65 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
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
          const isActive = selected === i;
          const isDimmed = selected !== null && !isActive;
          return (
            <motion.g
              key={step.label}
              onClick={() => toggle(i)}
              style={{ cursor: "pointer" }}
              animate={{ opacity: isDimmed ? 0.35 : 1 }}
              transition={{ duration: 0.18 }}
            >
              {/* Larger transparent hit area */}
              <circle cx={cx} cy={Y} r={NODE_R + 10} fill="transparent" />

              {/* Node circle */}
              <motion.circle
                cx={cx} cy={Y} r={NODE_R}
                fill={isActive ? step.activeBg : step.bg}
                stroke={isActive ? step.activeBorder : step.border}
                strokeWidth={isActive ? 2.8 : 1.8}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.1 + i * 0.08 }}
                style={{ originX: `${cx}px`, originY: `${Y}px` }}
              />

              {/* Step number */}
              <motion.text
                x={cx} y={Y - 8}
                textAnchor="middle" fontSize={9} fill={step.text} fontWeight="800"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.18 + i * 0.08 }}
              >
                {i + 1}
              </motion.text>

              {/* Label */}
              <motion.text
                x={cx} y={Y + 5}
                textAnchor="middle" fontSize={7.5} fill={step.text} fontWeight="700"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.22 + i * 0.08 }}
              >
                {step.label}
              </motion.text>

              {/* Sublabel */}
              <motion.text
                x={cx} y={Y + NODE_R + 16}
                textAnchor="middle" fontSize={7} fill="#94a3b8"
                initial={{ opacity: 0, y: 4 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.08 }}
              >
                {step.sublabel}
              </motion.text>
            </motion.g>
          );
        })}
      </svg>

      {/* Expandable detail panel */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            key={selected}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.32, 0.72, 0, 1] }}
            className="overflow-hidden"
          >
            <div
              className="px-6 py-5 border-t"
              style={{ borderColor: STEPS[selected].activeBorder, background: STEPS[selected].activeBg }}
            >
              {/* Header row */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.15em]"
                    style={{ color: STEPS[selected].text }}
                  >
                    Step {selected + 1}: {STEPS[selected].label}
                  </span>
                  <span
                    className="text-[11px] font-semibold px-2 py-0.5 rounded-full border"
                    style={{
                      background: STEPS[selected].badgeBg,
                      color: STEPS[selected].badgeText,
                      borderColor: STEPS[selected].activeBorder,
                    }}
                  >
                    {STEPS[selected].badge}
                  </span>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-slate-400 hover:text-slate-600 transition-[color] duration-150 text-xl leading-none shrink-0 active:scale-[0.97]"
                  aria-label="Close detail"
                >
                  ×
                </button>
              </div>

              {/* Description */}
              <p className="text-[13px] text-slate-700 leading-relaxed mb-3">
                {STEPS[selected].detail}
              </p>

              {/* Callout */}
              <div
                className="bg-white/70 rounded-lg px-4 py-3 border"
                style={{ borderColor: STEPS[selected].activeBorder }}
              >
                <p className="text-[12px] text-slate-600 leading-relaxed">
                  <span className="font-semibold" style={{ color: STEPS[selected].text }}>
                    {STEPS[selected].callout.label}:
                  </span>{" "}
                  {STEPS[selected].callout.text}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer hint */}
      <div className="flex items-center justify-center px-4 py-2 bg-slate-50 border-t border-slate-100">
        <span className="text-xs text-slate-400">
          {selected !== null
            ? `Step ${selected + 1} of 4 — click another node or × to close`
            : "Click any step to explore"}
        </span>
      </div>
    </div>
  );
}
