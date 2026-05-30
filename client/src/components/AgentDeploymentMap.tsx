import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "@/components/CountUp";
import { stagger, fadeUp } from "@/lib/motion";

type Agent = { name: string; desc: string };
type Category = { label: string; color: string; bg: string; border: string; textColor: string; agents: Agent[] };

const CATEGORIES: Category[] = [
  {
    label: "Water Emergency Suite",
    color: "#3b82f6",
    bg: "bg-blue-50",
    border: "border-blue-200",
    textColor: "text-blue-700",
    agents: [
      { name: "Water Quality Analyst", desc: "Monitors turbidity, pH, and contaminant thresholds in real time" },
      { name: "Contamination Detector", desc: "Identifies chemical and biological threat signatures in sensor streams" },
      { name: "Regulatory Reporter", desc: "Drafts EPA and state agency notifications to required formats" },
      { name: "Emergency Coordinator", desc: "Determines which response teams to mobilize based on incident type" },
      { name: "Sensor Monitor", desc: "Validates sensor data quality and flags outlier readings" },
    ],
  },
  {
    label: "Healthcare Suite",
    color: "#8b5cf6",
    bg: "bg-purple-50",
    border: "border-purple-200",
    textColor: "text-purple-700",
    agents: [
      { name: "HVAC Monitor", desc: "Tracks air handling unit anomalies (Bosch Climatic BMS)" },
      { name: "Patient Safety Agent", desc: "Assesses risk to vulnerable populations from environmental events" },
      { name: "Air Quality Analyst", desc: "Measures indoor/outdoor air quality against clinical thresholds" },
      { name: "Equipment Coordinator", desc: "Alerts facility maintenance teams to critical equipment states" },
      { name: "Compliance Reporter", desc: "Generates OSHA and accreditation-required documentation" },
    ],
  },
  {
    label: "Core Agent Suite",
    color: "#10b981",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    textColor: "text-emerald-700",
    agents: [
      { name: "Detection Agent", desc: "Classifies anomaly type across all verticals" },
      { name: "Analysis Agent", desc: "Context enrichment with historical data and regulatory limits" },
      { name: "Reasoning Agent", desc: "AI-powered decision support: risk classification and recommended actions" },
      { name: "Coordination Agent", desc: "Routes notifications to the right stakeholder set" },
      { name: "Documentation Agent", desc: "Generates audit-ready incident reports automatically" },
      { name: "Notification Agent", desc: "Multi-channel delivery: email, SMS, and webhook" },
      { name: "Scheduler Agent", desc: "Triggers Slotify to book the emergency response meeting" },
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
          <p className="text-sm text-muted-foreground mt-1">Live Specialized Agents</p>
        </div>
        <div className="hidden sm:block w-px h-12 bg-border" />
        <div className="hidden sm:block text-sm text-muted-foreground max-w-xs">
          Each agent is an independent Python FastAPI service. Modular architecture: update one without affecting the rest.
        </div>
      </div>

      {/* Category grids */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
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
                    key={agent.name}
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
                      <p className="text-xs font-semibold text-foreground">{agent.name}</p>
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
            key={hoveredAgent.name}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
            className={`w-full rounded-xl border p-4 ${hoveredCat.bg} ${hoveredCat.border}`}
          >
            <p className="text-sm font-semibold text-foreground mb-1">{hoveredAgent.name}</p>
            <p className="text-sm text-muted-foreground">{hoveredAgent.desc}</p>
          </motion.div>
        ) : (
          <p className="text-xs text-muted-foreground text-center w-full">Hover any agent to see its role</p>
        )}
      </div>
    </div>
  );
}
