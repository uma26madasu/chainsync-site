import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "@/lib/motion";

const STACKS = [
  {
    id: "integration",
    label: "LAYER 1",
    title: "Integration",
    color: "#3b82f6",
    bg: "bg-blue-50",
    border: "border-blue-200",
    textColor: "text-blue-700",
    dotColor: "bg-blue-500",
    tech: ["MuleSoft", "DataWeave", "Universal Webhook", "22+ Flows"],
    detail: "Platform-agnostic orchestration layer. Any sensor, API, or system that can send HTTP POST connects here — MuleSoft is the current implementation, but the architecture is swappable by design.",
    items: [
      { name: "MuleSoft", desc: "Enterprise integration platform" },
      { name: "DataWeave", desc: "Data transformation language" },
      { name: "Universal Webhook", desc: "HTTP POST from any system" },
      { name: "22+ Flow Implementations", desc: "Pre-built connectors" },
    ],
  },
  {
    id: "agents",
    label: "LAYER 2",
    title: "AI / Agents",
    color: "#8b5cf6",
    bg: "bg-purple-50",
    border: "border-purple-200",
    textColor: "text-purple-700",
    dotColor: "bg-purple-500",
    tech: ["17 Python Agents", "FastAPI", "GPT-4", "HTTP Webhooks"],
    detail: "Specialized intelligence layer. 17 Python agents each run as an independent FastAPI service and communicate via HTTP webhooks. GPT-4 powers the reasoning agent for context-aware analysis.",
    items: [
      { name: "17 Python Agents", desc: "Specialized, modular, independently deployable" },
      { name: "FastAPI", desc: "High-performance HTTP webhook routing" },
      { name: "GPT-4 (OpenAI API)", desc: "Reasoning and decision support" },
      { name: "MongoDB", desc: "Event and audit trail storage" },
    ],
  },
  {
    id: "scheduling",
    label: "LAYER 3",
    title: "Scheduling",
    color: "#10b981",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    textColor: "text-emerald-700",
    dotColor: "bg-emerald-500",
    tech: ["Slotify", "Google Calendar", "MS 365", "React + Express"],
    detail: "Autonomous emergency meeting coordination. Slotify checks calendars across platforms, resolves conflicts, applies emergency override protocols, and books multi-stakeholder meetings without human input.",
    items: [
      { name: "Slotify", desc: "Autonomous scheduling engine (live)" },
      { name: "Google Calendar API", desc: "Calendar conflict detection" },
      { name: "Microsoft 365", desc: "Enterprise calendar integration" },
      { name: "React + Express", desc: "Full-stack scheduler platform" },
    ],
  },
  {
    id: "monitoring",
    label: "LAYER 4",
    title: "Monitoring",
    color: "#f59e0b",
    bg: "bg-amber-50",
    border: "border-amber-200",
    textColor: "text-amber-700",
    dotColor: "bg-amber-500",
    tech: ["Prometheus", "Grafana", "FastAPI Logs", "Audit Trail"],
    detail: "Full observability stack. Prometheus scrapes metrics from every agent service, Grafana surfaces health dashboards, and every action is logged for tamper-evident compliance audit trails.",
    items: [
      { name: "Prometheus", desc: "Metrics collection across all agents" },
      { name: "Grafana", desc: "Real-time system health dashboards" },
      { name: "FastAPI Logs", desc: "Structured request/response logging" },
      { name: "Audit Trail", desc: "Compliance records in MongoDB" },
    ],
  },
];

export default function TechStackFlow() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {STACKS.map((stack, i) => (
          <motion.div
            key={stack.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.1 }}
          >
            <motion.button
              className={`w-full text-left rounded-xl border-2 p-5 cursor-pointer transition-shadow duration-200 ${stack.bg} ${stack.border} ${active === stack.id ? "shadow-lg" : "hover:shadow-md"}`}
              onClick={() => setActive(active === stack.id ? null : stack.id)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              aria-expanded={active === stack.id}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-bold tracking-widest ${stack.textColor}`}>{stack.label}</span>
                <motion.span
                  animate={{ rotate: active === stack.id ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-5 h-5 rounded-full flex items-center justify-center text-white text-sm font-bold leading-none"
                  style={{ backgroundColor: stack.color }}
                >
                  +
                </motion.span>
              </div>
              <h3 className="text-base font-bold text-foreground mb-3">{stack.title}</h3>
              <div className="flex flex-wrap gap-1">
                {stack.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-full bg-white/80 text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Flow arrows — desktop only */}
      <div className="hidden lg:flex justify-around px-[13%] mt-1 mb-1 pointer-events-none" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="flex items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.15 }}
          >
            <svg width="40" height="14" viewBox="0 0 40 14">
              <motion.line
                x1="0" y1="7" x2="32" y2="7"
                stroke={STACKS[i + 1].color}
                strokeWidth="1.5"
                strokeDasharray="4 3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.15 }}
              />
              <polygon points="32,3 40,7 32,11" fill={STACKS[i + 1].color} opacity="0.8" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Expanded detail */}
      <AnimatePresence>
        {active && (() => {
          const stack = STACKS.find((s) => s.id === active)!;
          return (
            <motion.div
              key={active}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="overflow-hidden mt-3"
            >
              <div className={`rounded-xl border-2 p-5 ${stack.bg} ${stack.border}`}>
                <p className="text-sm text-muted-foreground mb-4">{stack.detail}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {stack.items.map((item) => (
                    <div key={item.name} className="flex items-start gap-2 bg-white/70 rounded-lg p-3">
                      <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${stack.dotColor}`} />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })()}
      </AnimatePresence>

      <p className="text-center text-xs text-muted-foreground mt-3">Click any layer to expand details</p>
    </div>
  );
}
