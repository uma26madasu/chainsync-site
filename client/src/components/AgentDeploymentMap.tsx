import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "@/components/CountUp";
import { stagger, fadeUp } from "@/lib/motion";

type Agent = { label: string; desc: string };
type Category = { label: string; color: string; bg: string; border: string; textColor: string; agents: Agent[] };

const CATEGORIES: Category[] = [
  {
    label: "Core Intelligence",
    color: "#10b981",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    textColor: "text-emerald-700",
    agents: [
      { label: "Continuous Learning Agent", desc: "Improves response accuracy over time by learning from historical incident outcomes and pattern feedback" },
      { label: "Root Cause Analysis Agent", desc: "Traces incident origin through sensor data, event logs, and historical patterns to identify the underlying cause" },
      { label: "Natural Language Query Agent", desc: "Enables plain-language queries against incident records, compliance data, and system status" },
      { label: "Memory Enabled Agent", desc: "Maintains persistent context across multi-step coordination workflows and multi-session incidents" },
      { label: "Multi-Step Reasoning Agent", desc: "Evaluates complex, multi-variable scenarios to determine response priority and escalation path" },
    ],
  },
  {
    label: "Emergency Coordination",
    color: "#3b82f6",
    bg: "bg-blue-50",
    border: "border-blue-200",
    textColor: "text-blue-700",
    agents: [
      { label: "Meeting Context Agent", desc: "Prepares and distributes a structured incident brief to all participants before the emergency response meeting" },
      { label: "Public Communication Agent", desc: "Drafts regulatory notifications and public-facing communications based on incident type and jurisdiction" },
      { label: "Impact Assessment Agent", desc: "Evaluates operational, regulatory, and community impact of an active incident to inform response scope" },
      { label: "Predictive Alert Agent", desc: "Identifies pre-threshold signals and trend deviations before a breach or failure occurs" },
      { label: "Historical Pattern Matching Agent", desc: "Identifies similar past incidents to surface proven response patterns and avoid repeated failures" },
    ],
  },
  {
    label: "Compliance",
    color: "#f59e0b",
    bg: "bg-amber-50",
    border: "border-amber-200",
    textColor: "text-amber-700",
    agents: [
      { label: "Compliance Autopilot Agent", desc: "Automatically detects applicable regulatory frameworks at incident detection and initiates the required documentation workflows" },
      { label: "Regulatory Reporting Agent", desc: "Generates audit-ready reports in required formats for water, environmental, and healthcare facility regulations" },
    ],
  },
  {
    label: "Healthcare",
    color: "#8b5cf6",
    bg: "bg-purple-50",
    border: "border-purple-200",
    textColor: "text-purple-700",
    agents: [
      { label: "Hospital Operations Agent", desc: "Coordinates multi-department response — Facilities, Clinical, and Administration — for facility incidents" },
      { label: "Joint Commission Documentation Agent", desc: "Auto-generates Joint Commission, CMS, and HIPAA-required documentation from incident data in real time" },
      { label: "Infection Control Coordination Agent", desc: "Triggers infection control protocols and stakeholder notification on environmental breach events" },
      { label: "Medical Equipment Failure Agent", desc: "Manages coordination and documentation for critical medical equipment failures requiring immediate response" },
      { label: "Preventive Maintenance Tracker Agent", desc: "Schedules and tracks maintenance workflows based on incident history and equipment risk profiles" },
    ],
  },
];

export default function AgentDeploymentMap() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState<{ cat: number; agent: number } | null>(null);

  const hoveredAgent =
    hovered !== null ? CATEGORIES[hovered.cat].agents[hovered.agent] : null;
  const hoveredCat = hovered !== null ? CATEGORIES[hovered.cat] : null;

  return (
    <div ref={ref} className="w-full">
      {/* Total count */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="text-center">
          <div className="text-5xl font-bold text-primary">
            {inView ? <CountUp end={17} /> : "0"}
          </div>
          <p className="text-sm text-muted-foreground mt-1">Coordination Agents Built</p>
        </div>
        <div className="hidden sm:block w-px h-12 bg-border" />
        <div className="hidden sm:block text-sm text-muted-foreground max-w-xs">
          Each agent owns one job in the coordination pipeline. Modular design means any agent can be updated independently.
        </div>
      </div>

      {/* Category grids */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6"
        variants={stagger}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {CATEGORIES.map((cat, ci) => (
          <motion.div key={cat.label} variants={fadeUp} className={`rounded-xl border-2 p-4 ${cat.bg} ${cat.border}`}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }} />
              <h3 className={`text-sm font-bold ${cat.textColor}`}>{cat.label}</h3>
              <span className={`ml-auto text-xs font-bold px-2 py-0.5 rounded-full bg-white/70 ${cat.textColor}`}>
                {cat.agents.length}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-1.5">
              {cat.agents.map((agent, ai) => {
                const isHovered = hovered?.cat === ci && hovered?.agent === ai;
                return (
                  <motion.div
                    key={agent.label}
                    className={`rounded-lg px-3 py-2 cursor-pointer transition-all duration-150 ${
                      isHovered ? "bg-white shadow-sm" : "bg-white/50 hover:bg-white/80"
                    }`}
                    onMouseEnter={() => setHovered({ cat: ci, agent: ai })}
                    onMouseLeave={() => setHovered(null)}
                    initial={{ opacity: 0, x: -8 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.25, delay: 0.2 + ci * 0.1 + ai * 0.05 }}
                  >
                    <div className="flex items-center gap-2">
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: cat.color }}
                        animate={isHovered ? { scale: 1.5 } : { scale: 1 }}
                        transition={{ duration: 0.15 }}
                      />
                      <p className="text-xs font-semibold text-foreground">{agent.label}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Hover description */}
      <div className="mt-4 min-h-[48px] flex items-center">
        {hoveredAgent && hoveredCat ? (
          <motion.div
            key={hoveredAgent.label}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
            className={`w-full rounded-xl border p-4 ${hoveredCat.bg} ${hoveredCat.border}`}
          >
            <p className="text-sm font-semibold text-foreground mb-1">{hoveredAgent.label}</p>
            <p className="text-sm text-muted-foreground">{hoveredAgent.desc}</p>
          </motion.div>
        ) : (
          <p className="text-xs text-muted-foreground text-center w-full">Hover any agent to see its role</p>
        )}
      </div>
    </div>
  );
}
