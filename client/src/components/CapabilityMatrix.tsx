import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { fadeUp } from "@/lib/motion";

const VERTICALS = [
  "Water Utilities",
  "Healthcare",
  "Industrial / Mfg",
  "Municipal Gov't",
  "Oil & Gas",
  "Food & Agriculture",
];

const CAPABILITIES = [
  { label: "Incident Detection", short: "Detection" },
  { label: "Response Coordination", short: "Coordination" },
  { label: "Calendar Integration", short: "Scheduling" },
  { label: "Compliance Reporting", short: "Compliance" },
  { label: "Multi-agency Sync", short: "Multi-agency" },
];

const HOVER_DESCS: Record<string, string> = {
  "Water Utilities-Detection": "Turbidity spikes, pH anomalies, chemical contamination via SCADA and water quality sensors",
  "Water Utilities-Response Coordination": "Auto-notifies EPA contacts, utility operators, and municipal emergency management",
  "Water Utilities-Calendar Integration": "Schedules multi-stakeholder emergency meetings across Google/MS365 calendars",
  "Water Utilities-Compliance Reporting": "Generates EPA Safe Drinking Water Act notification templates",
  "Water Utilities-Multi-agency Sync": "Coordinates between water authority, health department, and public works",

  "Healthcare-Detection": "HVAC anomalies, air quality events, equipment failures via Bosch Climatic BMS",
  "Healthcare-Response Coordination": "Alerts facility management, clinical leadership, and patient safety officers",
  "Healthcare-Calendar Integration": "Books emergency operations meetings within clinical scheduling constraints",
  "Healthcare-Compliance Reporting": "OSHA and Joint Commission-formatted incident documentation",
  "Healthcare-Multi-agency Sync": "Coordinates facility team, county health, and regulatory contacts",

  "Industrial / Mfg-Detection": "Emissions threshold breaches, chemical releases, equipment sensor anomalies",
  "Industrial / Mfg-Response Coordination": "Mobilizes EHS team, plant manager, and regulatory contacts",
  "Industrial / Mfg-Calendar Integration": "Emergency scheduling across shift-based and corporate calendars",
  "Industrial / Mfg-Compliance Reporting": "EPA and OSHA incident reporting templates generated automatically",
  "Industrial / Mfg-Multi-agency Sync": "Plant operations + corporate EHS + state environmental agency",

  "Municipal Gov't-Detection": "Environmental sensor networks, weather-triggered events, infrastructure alerts",
  "Municipal Gov't-Response Coordination": "Notifies department heads, elected officials, and public safety",
  "Municipal Gov't-Calendar Integration": "Schedules across municipal staff calendars with emergency overrides",
  "Municipal Gov't-Compliance Reporting": "State and federal agency reporting documentation",
  "Municipal Gov't-Multi-agency Sync": "Fire, police, public works, health, and utilities coordination",

  "Oil & Gas-Detection": "Emissions monitoring, pipeline sensor anomalies, spill detection",
  "Oil & Gas-Response Coordination": "Alerts field operations, safety, and environmental compliance teams",
  "Oil & Gas-Calendar Integration": "24/7 on-call scheduling with emergency escalation protocols",
  "Oil & Gas-Compliance Reporting": "EPA and state regulatory notifications and spill report templates",
  "Oil & Gas-Multi-agency Sync": "Operations + corporate + EPA + state environmental + local emergency management",

  "Food & Agriculture-Detection": "Water quality for irrigation, pesticide threshold alerts, weather pattern anomalies",
  "Food & Agriculture-Response Coordination": "Alerts quality assurance, operations, and supply chain contacts",
  "Food & Agriculture-Calendar Integration": "Schedules emergency quality review meetings across business calendars",
  "Food & Agriculture-Compliance Reporting": "FDA and USDA incident reporting documentation",
  "Food & Agriculture-Multi-agency Sync": "Farm operations + food safety + regulatory + distribution coordination",
};

export default function CapabilityMatrix() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="w-full overflow-x-auto">
      <table className="w-full text-sm border-collapse min-w-[560px]">
        <thead>
          <tr>
            <th className="text-left py-3 px-4 font-semibold text-foreground bg-slate-50 border border-border rounded-tl-lg w-[24%]">
              Vertical
            </th>
            {CAPABILITIES.map((cap) => (
              <th
                key={cap.label}
                className="text-center py-3 px-2 font-semibold text-foreground bg-slate-50 border border-border text-xs"
              >
                <span className="hidden md:inline">{cap.label}</span>
                <span className="md:hidden">{cap.short}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {VERTICALS.map((vertical, vi) => (
            <motion.tr
              key={vertical}
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.1 + vi * 0.08 }}
              className="group"
            >
              <td className="py-3 px-4 font-medium text-foreground border border-border bg-white group-hover:bg-slate-50 transition-colors">
                {vertical}
              </td>
              {CAPABILITIES.map((cap, ci) => {
                const key = `${vertical}-${cap.label}`;
                return (
                  <motion.td
                    key={cap.label}
                    className="py-3 px-2 text-center border border-border bg-white group-hover:bg-slate-50 transition-colors relative"
                    title={HOVER_DESCS[key] ?? ""}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.25, delay: 0.2 + vi * 0.08 + ci * 0.04 }}
                  >
                    <div className="flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <Check size={13} className="text-green-600" strokeWidth={2.5} />
                      </div>
                    </div>
                  </motion.td>
                );
              })}
            </motion.tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-muted-foreground text-center mt-3">
        Hover any cell for vertical-specific implementation details
      </p>
    </div>
  );
}
