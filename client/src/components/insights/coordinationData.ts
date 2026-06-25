export interface Step {
  name: string;
  midHours: number;   // midpoint used for bar width calculation
  rangeLabel: string; // e.g. "30–60 min"
  isBottleneck?: boolean;
}

export interface VerticalData {
  id: string;
  name: string;
  color: string;       // primary bar color
  dimColor: string;    // ChainSync bar color (lighter)
  maxHours: number;    // x-axis ceiling
  bottleneck: string;
  reductionPct: string;
  manualTotalLabel: string;
  chainsyncTotalLabel: string;
  manualSteps: Step[];
  chainsyncSteps: Step[];
}

export const VERTICALS: VerticalData[] = [
  {
    id: "water",
    name: "Water Utility",
    color: "#0284c7",
    dimColor: "#7dd3fc",
    maxHours: 8,
    bottleneck: "Lab Results + State Agency Phone Tag",
    reductionPct: "85–90%",
    manualTotalLabel: "4–8 hrs",
    chainsyncTotalLabel: "30–60 min",
    manualSteps: [
      { name: "Detection / confirmation", midHours: 0.75, rangeLabel: "30–60 min" },
      { name: "Lab results", midHours: 1.5, rangeLabel: "60–120 min", isBottleneck: true },
      { name: "State agency notification", midHours: 0.75, rangeLabel: "30–60 min" },
      { name: "EPA documentation", midHours: 1, rangeLabel: "60 min" },
      { name: "Public notice coordination", midHours: 1.5, rangeLabel: "60–120 min" },
      { name: "Remediation dispatch", midHours: 0.75, rangeLabel: "30–60 min" },
    ],
    chainsyncSteps: [
      { name: "Auto-detection", midHours: 0.02, rangeLabel: "Instant" },
      { name: "Lab + alerts triggered", midHours: 0.08, rangeLabel: "5 min" },
      { name: "State agency auto-notified", midHours: 0.08, rangeLabel: "5 min" },
      { name: "EPA docs generated", midHours: 0.08, rangeLabel: "5 min" },
      { name: "Public notice drafted", midHours: 0.17, rangeLabel: "10 min" },
      { name: "Maintenance dispatched", midHours: 0.08, rangeLabel: "5 min" },
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    color: "#16a34a",
    dimColor: "#86efac",
    maxHours: 6,
    bottleneck: "Cross-Department Documentation",
    reductionPct: "85–88%",
    manualTotalLabel: "2–6 hrs",
    chainsyncTotalLabel: "15–45 min",
    manualSteps: [
      { name: "Incident identification", midHours: 0.375, rangeLabel: "15–30 min" },
      { name: "Infection control notification", midHours: 0.375, rangeLabel: "15–30 min" },
      { name: "Department head coordination", midHours: 0.75, rangeLabel: "30–60 min" },
      { name: "Joint Commission documentation", midHours: 1.5, rangeLabel: "30–90 min", isBottleneck: true },
      { name: "CDC / state health dept", midHours: 0.75, rangeLabel: "30–60 min" },
      { name: "Corrective action assignment", midHours: 0.375, rangeLabel: "15–30 min" },
    ],
    chainsyncSteps: [
      { name: "Auto-detection", midHours: 0.02, rangeLabel: "Instant" },
      { name: "Infection control triggered", midHours: 0.05, rangeLabel: "3 min" },
      { name: "Dept heads notified", midHours: 0.03, rangeLabel: "2 min" },
      { name: "JC docs auto-populated", midHours: 0.08, rangeLabel: "5 min" },
      { name: "CDC notification formatted", midHours: 0.05, rangeLabel: "3 min" },
      { name: "Corrective action coordinated", midHours: 0.03, rangeLabel: "2 min" },
    ],
  },
  {
    id: "food",
    name: "Food & Agriculture",
    color: "#ea580c",
    dimColor: "#fdba74",
    maxHours: 72,
    bottleneck: "Supply Chain Traceability (Upstream + Downstream)",
    reductionPct: "90–95%",
    manualTotalLabel: "24–72 hrs",
    chainsyncTotalLabel: "2–4 hrs",
    manualSteps: [
      { name: "Contamination detection", midHours: 4, rangeLabel: "2–6 hrs" },
      { name: "Source identification", midHours: 8, rangeLabel: "4–12 hrs", isBottleneck: true },
      { name: "FDA notification", midHours: 3, rangeLabel: "2–4 hrs" },
      { name: "Supply chain trace (downstream)", midHours: 16, rangeLabel: "8–24 hrs", isBottleneck: true },
      { name: "Product pull / recall execution", midHours: 8, rangeLabel: "4–12 hrs" },
      { name: "Public recall notice", midHours: 3, rangeLabel: "2–4 hrs" },
    ],
    chainsyncSteps: [
      { name: "Auto-detection from QA", midHours: 0.25, rangeLabel: "15 min" },
      { name: "Batch upstream traced", midHours: 0.5, rangeLabel: "30 min" },
      { name: "FDA notification formatted", midHours: 0.25, rangeLabel: "15 min" },
      { name: "Downstream chain alerted", midHours: 0.5, rangeLabel: "30 min" },
      { name: "Retail pull dispatched", midHours: 0.5, rangeLabel: "30 min" },
      { name: "Public notice drafted", midHours: 0.25, rangeLabel: "15 min" },
    ],
  },
  {
    id: "oilgas",
    name: "Oil & Gas",
    color: "#dc2626",
    dimColor: "#fca5a5",
    maxHours: 24,
    bottleneck: "Multi-Agency Jurisdiction Overlap",
    reductionPct: "80–88%",
    manualTotalLabel: "6–24 hrs",
    chainsyncTotalLabel: "1–3 hrs",
    manualSteps: [
      { name: "Spill / leak detection", midHours: 0.75, rangeLabel: "30–60 min" },
      { name: "Containment crew dispatch", midHours: 0.75, rangeLabel: "30–60 min" },
      { name: "EPA / NRC notification", midHours: 1.5, rangeLabel: "60–120 min", isBottleneck: true },
      { name: "PHMSA reporting", midHours: 1.5, rangeLabel: "60–120 min" },
      { name: "State environmental agency", midHours: 0.75, rangeLabel: "30–60 min" },
      { name: "Coast Guard (if waterway)", midHours: 0.75, rangeLabel: "30–60 min" },
      { name: "Local emergency services", midHours: 0.375, rangeLabel: "15–30 min" },
      { name: "Environmental assessment", midHours: 4, rangeLabel: "2–6 hrs" },
    ],
    chainsyncSteps: [
      { name: "Auto-detection (SCADA)", midHours: 0.02, rangeLabel: "Instant" },
      { name: "Containment auto-dispatched", midHours: 0.17, rangeLabel: "10 min" },
      { name: "EPA / NRC auto-notified", midHours: 0.17, rangeLabel: "10 min" },
      { name: "PHMSA report generated", midHours: 0.17, rangeLabel: "10 min" },
      { name: "State agency notified", midHours: 0.08, rangeLabel: "5 min" },
      { name: "Coast Guard notified", midHours: 0.08, rangeLabel: "5 min" },
      { name: "Local emergency coordinated", midHours: 0.08, rangeLabel: "5 min" },
      { name: "Assessment template populated", midHours: 0.25, rangeLabel: "15 min" },
    ],
  },
  {
    id: "government",
    name: "Government / Emergency Services",
    color: "#7c3aed",
    dimColor: "#c4b5fd",
    maxHours: 48,
    bottleneck: "Cross-Agency Command Structure Alignment",
    reductionPct: "75–88%",
    manualTotalLabel: "12–48 hrs",
    chainsyncTotalLabel: "2–6 hrs",
    manualSteps: [
      { name: "Incident detection / verification", midHours: 2.5, rangeLabel: "1–4 hrs" },
      { name: "ICS / NIMS activation", midHours: 1.5, rangeLabel: "1–2 hrs" },
      { name: "Multi-agency notification", midHours: 4, rangeLabel: "2–6 hrs", isBottleneck: true },
      { name: "FEMA coordination", midHours: 8, rangeLabel: "4–12 hrs", isBottleneck: true },
      { name: "Mutual aid requests", midHours: 3, rangeLabel: "2–4 hrs" },
      { name: "Public communications", midHours: 4, rangeLabel: "2–6 hrs" },
      { name: "After-action documentation", midHours: 8, rangeLabel: "4–12 hrs" },
    ],
    chainsyncSteps: [
      { name: "Detection aggregated", midHours: 0.25, rangeLabel: "15 min" },
      { name: "ICS / NIMS auto-activated", midHours: 0.25, rangeLabel: "15 min" },
      { name: "All agencies notified", midHours: 0.25, rangeLabel: "15 min" },
      { name: "FEMA template populated", midHours: 0.5, rangeLabel: "30 min" },
      { name: "Mutual aid auto-requested", midHours: 0.25, rangeLabel: "15 min" },
      { name: "Public comms auto-drafted", midHours: 0.5, rangeLabel: "30 min" },
      { name: "After-action auto-generated", midHours: 1, rangeLabel: "60 min" },
    ],
  },
];
