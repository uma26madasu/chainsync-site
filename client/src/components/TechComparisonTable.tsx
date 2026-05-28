import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { X, Check } from "lucide-react";

const ROWS = [
  {
    metric: "Emergency Meeting Scheduled",
    before: "4–6 hours of phone calls and emails",
    after: "< 15 minutes, fully automated",
    highlight: true,
  },
  {
    metric: "Stakeholder Identification",
    before: "Manual lookup in org charts and directories",
    after: "AI-determined from incident type and severity",
    highlight: false,
  },
  {
    metric: "Calendar Conflict Resolution",
    before: "Caller waits on hold for availability",
    after: "Automated multi-calendar conflict detection",
    highlight: false,
  },
  {
    metric: "Regulatory Notification",
    before: "Drafted manually, sent hours after detection",
    after: "Auto-generated and sent within minutes",
    highlight: false,
  },
  {
    metric: "Compliance Documentation",
    before: "Completed after-the-fact, prone to gaps",
    after: "Real-time audit trail — every action logged",
    highlight: false,
  },
  {
    metric: "System Integration",
    before: "Fragmented across email, phone, spreadsheets",
    after: "Unified: sensors → agents → Slotify → output",
    highlight: false,
  },
];

type View = "split" | "before" | "after";

export default function TechComparisonTable() {
  const [view, setView] = useState<View>("split");

  return (
    <div className="w-full">
      {/* Toggle */}
      <div className="flex items-center justify-center gap-2 mb-6">
        {(["before", "split", "after"] as View[]).map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              view === v
                ? v === "before"
                  ? "bg-red-500 text-white shadow-sm"
                  : v === "after"
                  ? "bg-green-500 text-white shadow-sm"
                  : "bg-slate-800 text-white shadow-sm"
                : "bg-slate-100 text-muted-foreground hover:bg-slate-200"
            }`}
          >
            {v === "split" ? "Side by Side" : v === "before" ? "Without ChainSync" : "With ChainSync"}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-border">
              <th className="text-left py-3 px-4 font-semibold text-foreground w-[30%]">Scenario</th>
              {(view === "split" || view === "before") && (
                <th className="text-left py-3 px-4 font-semibold text-red-600">
                  <div className="flex items-center gap-1.5">
                    <X size={14} /> Without ChainSync
                  </div>
                </th>
              )}
              {(view === "split" || view === "after") && (
                <th className="text-left py-3 px-4 font-semibold text-green-700">
                  <div className="flex items-center gap-1.5">
                    <Check size={14} /> With ChainSync
                  </div>
                </th>
              )}
            </tr>
          </thead>
          <motion.tbody variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}>
            {ROWS.map((row, i) => (
              <motion.tr
                key={row.metric}
                variants={fadeUp}
                className={`border-b border-border last:border-0 ${row.highlight ? "bg-blue-50/40" : i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}
              >
                <td className="py-3 px-4 font-medium text-foreground align-top">
                  {row.metric}
                  {row.highlight && (
                    <span className="ml-2 text-xs px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded-full font-normal">Key metric</span>
                  )}
                </td>
                {(view === "split" || view === "before") && (
                  <td className="py-3 px-4 text-red-700 align-top">{row.before}</td>
                )}
                {(view === "split" || view === "after") && (
                  <td className="py-3 px-4 text-green-800 font-medium align-top">{row.after}</td>
                )}
              </motion.tr>
            ))}
          </motion.tbody>
        </table>
      </div>
    </div>
  );
}
