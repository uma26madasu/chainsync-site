import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "@/components/CountUp";
import { stagger, fadeUp } from "@/lib/motion";

type Agent = { name: string; desc: string };
type Category = { label: string; color: string; bg: string; border: string; textColor: string; agents: Agent[] };

const CATEGORIES: Category[] = [
  {
    label: "Core Agents",
    color: "#10b981",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    textColor: "text-emerald-700",
    agents: [
      { name: "ContinuousLearningAgent", desc: "Adapts from past incidents to improve response accuracy over time" },
      { name: "MemoryEnabledAgent", desc: "Retains incident context across multi-step coordination workflows" },
      { name: "MultiStepReasoningAgent", desc: "Evaluates multi-factor scenarios to determine response priority" },
      { name: "NaturalLanguageQueryAgent", desc: "Enables plain-language queries against incident and compliance data" },
      { name: "RootCauseAnalysisAgent", desc: "Traces incident origin through sensor data and historical patterns" },
    ],
  },
  {
    label: "Emergency Coordination Agents",
    color: "#3b82f6",
    bg: "bg-blue-50",
    border: "border-blue-200",
    textColor: "text-blue-700",
    agents: [
      { name: "PredictiveAlertAgent", desc: "Detects early-warning signals before threshold breaches occur" },
      { name: "ImpactAssessmentAgent", desc: "Evaluates operational and regulatory impact of an active incident" },
      { name: "MeetingContextAgent", desc: "Prepares and distributes incident context for emergency coordination meetings" },
      { name: "HistoricalPatternMatchingAgent", desc: "Identifies similar past incidents to inform current response decisions" },
      { name: "PublicCommunicationAgent", desc: "Drafts public-facing notifications based on incident type and regulatory requirements" },
    ],
  },
  {
    label: "Compliance Agents",
    color: "#f59e0b",
    bg: "bg-amber-50",
    border: "border-amber-200",
    textColor: "text-amber-700",
    agents: [
      { name: "ComplianceAutopilotAgent", desc: "Detects applicable regulatory frameworks and initiates compliance workflows automatically" },
      { name: "RegulatoryReportingAgent", desc: "Generates reports in required formats (EPA SDWA, Joint Commission, CMS CoP)" },
    ],
  },
  {
    label: "Healthcare Agents",
    color: "#8b5cf6",
    bg: "bg-purple-50",
    border: "border-purple-200",
    textColor: "text-purple-700",
    agents: [
      { name: "HospitalOperationsAgent", desc: "Coordinates multi-department response to facilities incidents" },
      { name: "JointCommissionDocumentationAgent", desc: "Auto-generates EC.02.05 and EC.02.06 documentation from incident data" },
      { name: "InfectionControlCoordinationAgent", desc: "Triggers infection control protocols on environmental breach events" },
      { name: "MedicalEquipmentFailureAgent", desc: "Manages response coordination for critical medical equipment failures" },
      { name: "PreventiveMaintenanceTrackerAgent", desc: "Schedules and tracks preventive maintenance workflows based on incident history" },
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
          Each agent is an independent Python FastAPI service. Modular architecture: update one without affecting the rest.
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
                      <p className="text-xs font-semibold text-foreground font-mono">{agent.name}</p>
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
            <p className="text-sm font-semibold text-foreground mb-1 font-mono">{hoveredAgent.name}</p>
            <p className="text-sm text-muted-foreground">{hoveredAgent.desc}</p>
          </motion.div>
        ) : (
          <p className="text-xs text-muted-foreground text-center w-full">Hover any agent to see its role</p>
        )}
      </div>
    </div>
  );
}
