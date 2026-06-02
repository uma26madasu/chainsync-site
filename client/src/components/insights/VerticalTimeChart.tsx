import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { VerticalData, Step } from "./coordinationData";

interface Props {
  data: VerticalData;
  index: number;
}

// Sharp mechanical easing — not decorative
const EASING = [0.16, 1, 0.3, 1] as const;

function pct(hours: number, max: number) {
  return Math.min((hours / max) * 100, 100);
}

function BarRow({
  steps,
  maxHours,
  color,
  bottleneckColor,
  label,
  totalLabel,
  inView,
  rowDelay,
  isManual,
}: {
  steps: Step[];
  maxHours: number;
  color: string;
  bottleneckColor: string;
  label: string;
  totalLabel: string;
  inView: boolean;
  rowDelay: number;
  isManual: boolean;
}) {
  const [tooltip, setTooltip] = useState<{ step: Step; x: number; y: number } | null>(null);

  return (
    <div className="mb-1">
      {/* Row label */}
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-semibold text-slate-500 tracking-wide uppercase">{label}</span>
        <span
          className="text-xs font-bold tabular-nums"
          style={{ color: isManual ? "#64748b" : color }}
        >
          {totalLabel}
        </span>
      </div>

      {/* Stacked bar */}
      <div className="relative h-8 flex rounded overflow-hidden bg-slate-100" style={{ minWidth: 0 }}>
        {steps.map((step, i) => {
          const widthPct = pct(step.midHours, maxHours);
          const segDelay = rowDelay + i * 0.055;
          const isBottleneck = step.isBottleneck && isManual;

          return (
            <motion.div
              key={i}
              className="relative h-full flex items-center justify-center overflow-hidden cursor-default"
              style={{
                width: `${widthPct}%`,
                minWidth: widthPct < 1.5 ? "3px" : undefined,
                backgroundColor: isBottleneck ? bottleneckColor : color,
                opacity: isManual ? (isBottleneck ? 1 : 0.72 - i * 0.04) : 0.85,
                borderRight: i < steps.length - 1 ? "1px solid rgba(255,255,255,0.35)" : "none",
                outline: isBottleneck ? `2px solid ${bottleneckColor}` : "none",
                outlineOffset: isBottleneck ? "-2px" : "0",
              }}
              initial={{ scaleX: 0, originX: "left" }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{
                duration: 0.55 + i * 0.04,
                delay: segDelay,
                ease: EASING,
              }}
              onMouseEnter={(e) => {
                const rect = (e.currentTarget as HTMLElement)
                  .closest(".relative.h-8")!
                  .getBoundingClientRect();
                setTooltip({ step, x: e.clientX - rect.left, y: -8 });
              }}
              onMouseLeave={() => setTooltip(null)}
            >
              {/* Label inside bar — only if wide enough */}
              {widthPct > 9 && (
                <span
                  className="text-white text-[9px] font-medium px-1 truncate select-none pointer-events-none"
                  style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
                >
                  {step.name}
                </span>
              )}
            </motion.div>
          );
        })}

        {/* Tooltip */}
        {tooltip && (
          <div
            className="absolute z-20 bg-white border border-slate-200 rounded-lg shadow-lg px-3 py-2 pointer-events-none"
            style={{
              left: Math.min(tooltip.x, 200),
              top: tooltip.y - 64,
              whiteSpace: "nowrap",
            }}
          >
            <p className="text-xs font-semibold text-slate-800">{tooltip.step.name}</p>
            <p className="text-xs text-slate-500">{tooltip.step.rangeLabel}</p>
            {tooltip.step.isBottleneck && isManual && (
              <p className="text-xs text-red-500 font-medium mt-0.5">Key bottleneck</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function VerticalTimeChart({ data, index }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const cardDelay = index * 0.1;
  const bottleneckColor = "#dc2626"; // always red for bottleneck highlight

  // X-axis tick marks
  const tickCount = 5;
  const ticks = Array.from({ length: tickCount + 1 }, (_, i) =>
    Math.round((data.maxHours / tickCount) * i * 10) / 10
  );

  const formatTick = (h: number) => {
    if (h === 0) return "0";
    if (h < 1) return `${Math.round(h * 60)}m`;
    if (Number.isInteger(h)) return `${h}h`;
    return `${h}h`;
  };

  return (
    <motion.div
      ref={ref}
      className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.35, delay: cardDelay, ease: EASING }}
    >
      {/* Header */}
      <div
        className="px-5 py-4 border-b border-slate-100 flex items-center justify-between flex-wrap gap-2"
        style={{ borderLeftWidth: 4, borderLeftColor: data.color, borderLeftStyle: "solid" }}
      >
        <div>
          <span className="text-base font-bold text-slate-800">{data.name}</span>
          <span className="ml-2 text-xs text-slate-400">coordination time comparison</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: data.color, opacity: 0.72 }} />
            <span className="text-xs text-slate-500">Manual</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: data.dimColor }} />
            <span className="text-xs text-slate-500">ChainSync</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: bottleneckColor }} />
            <span className="text-xs text-slate-500">Bottleneck</span>
          </div>
        </div>
      </div>

      {/* Chart area */}
      <div className="px-5 pt-4 pb-2">
        <BarRow
          steps={data.manualSteps}
          maxHours={data.maxHours}
          color={data.color}
          bottleneckColor={bottleneckColor}
          label="Manual process"
          totalLabel={data.manualTotalLabel}
          inView={inView}
          rowDelay={cardDelay + 0.1}
          isManual={true}
        />

        {/* Reduction badge between bars */}
        <motion.div
          className="flex items-center gap-2 my-2"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: cardDelay + 0.5, duration: 0.25 }}
        >
          <div className="h-px flex-1 bg-slate-200" />
          <span
            className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
            style={{ backgroundColor: data.color }}
          >
            {data.reductionPct} faster
          </span>
          <div className="h-px flex-1 bg-slate-200" />
        </motion.div>

        <BarRow
          steps={data.chainsyncSteps}
          maxHours={data.maxHours}
          color={data.dimColor}
          bottleneckColor={bottleneckColor}
          label="With ChainSync"
          totalLabel={data.chainsyncTotalLabel}
          inView={inView}
          rowDelay={cardDelay + 0.35}
          isManual={false}
        />

        {/* X-axis ticks */}
        <div className="flex justify-between mt-2 mb-1 px-0">
          {ticks.map((t, i) => (
            <span key={i} className="text-[9px] text-slate-400 tabular-nums">
              {formatTick(t)}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex flex-wrap gap-x-6 gap-y-1 items-center">
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Key bottleneck</span>
          <span className="text-xs font-medium text-red-600">{data.bottleneck}</span>
        </div>
        <div className="flex items-center gap-1.5 ml-auto">
          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Time saved</span>
          <span className="text-xs font-bold" style={{ color: data.color }}>{data.reductionPct}</span>
        </div>
      </div>
    </motion.div>
  );
}
