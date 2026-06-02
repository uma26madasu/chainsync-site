import { motion } from "framer-motion";
import { VERTICALS } from "./coordinationData";
import VerticalTimeChart from "./VerticalTimeChart";
import { fadeUp, viewport } from "@/lib/motion";

const AVG_REDUCTION = "~87%";

export default function CoordinationTimeComparison() {
  return (
    <div className="w-full">
      {/* Section intro */}
      <motion.div
        className="mb-8 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <p className="text-sm text-slate-500 max-w-2xl mx-auto">
          Each vertical has fundamentally different incident timelines, agency overlaps, and compliance burdens.
          These graphs reflect actual coordination complexity — not a generic template.
        </p>
      </motion.div>

      {/* One chart per vertical */}
      <div className="space-y-6">
        {VERTICALS.map((v, i) => (
          <VerticalTimeChart key={v.id} data={v} index={i} />
        ))}
      </div>

      {/* Summary card */}
      <motion.div
        className="mt-8 rounded-xl border border-slate-200 bg-white p-6 flex flex-col sm:flex-row items-center gap-6 shadow-sm"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <div
          className="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center text-white font-black text-2xl"
          style={{ background: "linear-gradient(135deg, #0284c7 0%, #7c3aed 100%)" }}
        >
          {AVG_REDUCTION}
        </div>
        <div>
          <p className="text-base font-bold text-slate-800">
            Average coordination time reduction across all verticals
          </p>
          <p className="text-sm text-slate-500 mt-1">
            From manual phone trees and paperwork to automated agent orchestration.
            The 4–6 hour window that defines incident severity compressed to minutes.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:ml-auto sm:flex-shrink-0 min-w-[160px]">
          {VERTICALS.map((v) => (
            <div key={v.id} className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: v.color }} />
                <span className="text-xs text-slate-600">{v.name}</span>
              </div>
              <span className="text-xs font-bold tabular-nums" style={{ color: v.color }}>
                {v.reductionPct}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
