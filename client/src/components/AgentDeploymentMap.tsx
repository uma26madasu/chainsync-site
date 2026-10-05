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
      { label: "Adaptive Learning", desc: "Improves response accuracy from historical incident patterns" },
      { label: "Context Retention", desc: "Maintains incident context across multi-step coordination workflows" },
      { label: "Multi-Factor Analysis", desc: "Evaluates complex scenarios to determine response priority" },
      { label: "Natural Language Interface", desc: "Enables plain-language queries against incident and compliance data" },
      { label: "Root Cause Analysis", desc: "Traces incident origin through sensor data and historical patterns" },
    ],
  },
  {
    label: "Emergency Coordination",
    color: "#3b82f6",
    bg: "bg-blue-50",
    border: "border-blue-200",
    textColor: "text-blue-700",
    agents: [
      { label: "Early Warning Detection", desc: "Identifies pre-threshold signals before a breach occurs" },
      { label: "Impact Assessment", desc: "Evaluates operational and regulatory impact of an active incident" },
      { label: "Meeting Context", desc: "Prepares and distributes incident context for coordination meetings" },
      { label: "Historical Pattern Recognition", desc: "Identifies similar past incidents to inform current response" },
      { label: "Public Communication", desc: "Drafts notifications based on incident type and regulatory requirements" },
    ],
  },
  {
    label: "Compliance",
    color: "#f59e0b",
    bg: "bg-amber-50",
    border: "border-amber-200",
    textColor: "text-amber-700",
    agents: [
      { label: "Compliance Automation", desc: "Detects applicable regulatory frameworks and initiates workflows automatically" },
      { label: "Regulatory Reporting", desc: "Generates reports in required formats for water, environmental, and facility regulations" },
    ],
  },
  {
    label: "Healthcare",
    color: "#8b5cf6",
    bg: "bg-purple-50",
    border: "border-purple-200",
    textColor: "text-purple-700",
    agents: [
      { label: "Hospital Operations Coordination", desc: "Coordinates multi-department response to facilities incidents" },
      { label: "Accreditation Documentation", desc: "Auto-generates required documentation from incident data" },
      { label: "Infection Control Response", desc: "Triggers infection control protocols on environmental breach events" },
      { label: "Equipment Failure Response", desc: "Manages coordination for critical medical equipment failures" },
      { label: "Preventive Maintenance Tracking", desc: "Schedules and tracks maintenance workflows based on incident history" },
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
