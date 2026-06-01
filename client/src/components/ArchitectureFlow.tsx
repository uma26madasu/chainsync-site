import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PILLARS = [
  {
    id: "ingestion",
    step: "01",
    label: "Ingestion Layer",
    sublabel: "MuleSoft / Universal Webhook",
    color: "#2563eb",
    bgColor: "#eff6ff",
    borderColor: "#bfdbfe",
    accentColor: "#3b82f6",
    bullets: [
      "Universal Webhook Endpoint receives events",
      "DataWeave normalizes heterogeneous formats",
      "SCADA, IoT sensors, and APIs supported",
      "22+ integration flows deployed",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" />
      </svg>
    ),
  },
  {
    id: "orchestration",
    step: "02",
    label: "AI Orchestration Layer",
    sublabel: "17 Python Agents",
    color: "#7c3aed",
    bgColor: "#f5f3ff",
    borderColor: "#ddd6fe",
    accentColor: "#8b5cf6",
    bullets: [
      "Detection agents identify anomalies",
      "Analysis agents assess severity and scope",
      "Agents cross-check EPA / CMS / HIPAA rules",
      "Each agent: independent FastAPI service",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .28 2.716-1.126 2.716H4.924c-1.406 0-2.127-1.716-1.127-2.716L5 14.5" />
      </svg>
    ),
  },
  {
    id: "dispatch",
    step: "03",
    label: "Action & Dispatch",
    sublabel: "Slotify Integration",
    color: "#059669",
    bgColor: "#f0fdf4",
    borderColor: "#bbf7d0",
    accentColor: "#10b981",
    bullets: [
      "Slotify resolves multi-calendar conflicts",
      "Emergency overrides applied automatically",
      "Google Calendar and Microsoft 365 live",
      "Stakeholders notified via email and SMS",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
      </svg>
    ),
  },
  {
    id: "compliance",
    step: "04",
    label: "Compliance & Audit",
    sublabel: "Resolution Record",
    color: "#0369a1",
    bgColor: "#f0f9ff",
    borderColor: "#bae6fd",
    accentColor: "#0ea5e9",
    bullets: [
      "Full audit trail persisted to MongoDB",
      "Compliance documentation auto-generated",
      "Joint Commission / CMS / HIPAA records",
      "Incident closed with timestamped log",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

function PulseConnector({ color, delay }: { color: string; delay: number }) {
  return (
    <div className="hidden md:flex flex-col items-center justify-center w-12 flex-shrink-0 relative" style={{ marginTop: "60px" }}>
      <svg width="48" height="24" viewBox="0 0 48 24" fill="none" className="overflow-visible">
        <line x1="0" y1="12" x2="40" y2="12" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 3" />
        <motion.circle
          cx={0}
          cy={12}
          r={3.5}
          fill={color}
          animate={{ cx: [0, 40], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.4, delay, repeat: Infinity, repeatDelay: 0.8, ease: "easeInOut" }}
        />
        <polygon points="40,8 48,12 40,16" fill="#94a3b8" />
      </svg>
    </div>
  );
}

export default function ArchitectureFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="w-full">
      {/* Step label bar */}
      <div className="flex flex-col md:flex-row items-stretch gap-0 md:gap-0 w-full">
        {PILLARS.map((pillar, i) => (
          <div key={pillar.id} className="flex flex-col md:flex-row items-stretch flex-1 min-w-0">
            {/* Pillar card */}
            <motion.div
              className="flex-1 min-w-0 rounded-xl border-2 overflow-hidden shadow-sm"
              style={{ borderColor: pillar.borderColor, backgroundColor: "#ffffff" }}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.12, ease: "easeOut" }}
            >
              {/* Pillar header */}
              <div
                className="px-5 py-4 flex items-start gap-3"
                style={{ backgroundColor: pillar.bgColor, borderBottom: `1px solid ${pillar.borderColor}` }}
              >
                <div
                  className="rounded-lg p-2 flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: pillar.accentColor + "20", color: pillar.color }}
                >
                  {pillar.icon}
                </div>
                <div className="min-w-0">
                  <div
                    className="text-xs font-bold tracking-widest uppercase mb-0.5"
                    style={{ color: pillar.accentColor }}
                  >
                    Step {pillar.step}
                  </div>
                  <div className="text-sm font-bold text-slate-800 leading-tight">{pillar.label}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{pillar.sublabel}</div>
                </div>
              </div>

              {/* Pillar body */}
              <div className="px-5 py-4 bg-white">
                <ul className="space-y-2">
                  {pillar.bullets.map((bullet, bi) => (
                    <motion.li
                      key={bi}
                      className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed"
                      initial={{ opacity: 0, x: -6 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.25, delay: 0.25 + i * 0.12 + bi * 0.06, ease: "easeOut" }}
                    >
                      <span
                        className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5"
                        style={{ backgroundColor: pillar.accentColor }}
                      />
                      {bullet}
                    </motion.li>
                  ))}
                </ul>

                {/* Completed badge on last pillar */}
                {pillar.id === "compliance" && (
                  <motion.div
                    className="mt-4 flex items-center gap-2 px-3 py-2 rounded-lg"
                    style={{ backgroundColor: "#f0fdf4", border: "1px solid #bbf7d0" }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.75, ease: "easeOut" }}
                  >
                    <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0" stroke="#16a34a" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 10l4 4 8-8" />
                    </svg>
                    <span className="text-xs font-semibold text-green-700">Incident Resolved & Documented</span>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Connector between pillars */}
            {i < PILLARS.length - 1 && (
              <div className="flex md:flex-col items-center justify-center w-full md:w-12 h-8 md:h-auto md:flex-shrink-0 my-1 md:my-0 md:mx-0">
                {/* Mobile: horizontal-ish spacer with down arrow */}
                <div className="flex md:hidden items-center justify-center w-full">
                  <motion.svg
                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.12 }}
                  >
                    <path d="M12 5v14M6 13l6 6 6-6" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </motion.svg>
                </div>
                {/* Desktop: animated pulse connector */}
                {inView && (
                  <PulseConnector color={PILLARS[i + 1].accentColor} delay={0.4 + i * 0.3} />
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom legend */}
      <motion.div
        className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.7, duration: 0.3 }}
      >
        {PILLARS.map((p) => (
          <div key={p.id} className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: p.accentColor }} />
            <span className="text-xs text-slate-500">{p.label}</span>
          </div>
        ))}
        <div className="flex items-center gap-1.5">
          <span className="text-slate-300 text-xs">--</span>
          <span className="text-xs text-slate-400">data pulse</span>
        </div>
      </motion.div>
    </div>
  );
}
