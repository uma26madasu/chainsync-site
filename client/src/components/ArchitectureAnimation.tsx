import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const LAYERS = [
  {
    label: "LAYER 1",
    title: "Integration Layer",
    subtitle: "MuleSoft + DataWeave",
    color: "#3b82f6",
    bg: "#0c2a3d",
    border: "#1d4ed8",
    items: ["Universal Webhook Endpoint", "DataWeave Transforms", "Event Normalization"],
  },
  {
    label: "LAYER 2",
    title: "Intelligence Layer",
    subtitle: "17 Python FastAPI Agents",
    color: "#10b981",
    bg: "#052e16",
    border: "#15803d",
    items: ["AI Reasoning Engine", "Risk Classification", "HTTP Webhook Routing"],
  },
  {
    label: "LAYER 3",
    title: "Coordination Layer",
    subtitle: "Slotify Scheduler",
    color: "#f59e0b",
    bg: "#2d1a00",
    border: "#b45309",
    items: ["Calendar Conflict Resolution", "Stakeholder Selection", "Closed-Loop Tracking"],
  },
];

function FlowingDots({ x, y1, y2, color }: { x: number; y1: number; y2: number; color: string }) {
  return (
    <>
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          cx={x}
          r={3.5}
          fill={color}
          initial={{ cy: y1, opacity: 0 }}
          animate={{ cy: [y1, y2], opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 1.4,
            delay: i * 0.45,
            repeat: Infinity,
            repeatDelay: 0.6,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}

export default function ArchitectureAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const W = 560;
  const layerH = 88;
  const layerY = [20, 140, 260];
  const connH = 32;
  const connY = [layerY[0] + layerH, layerY[1] + layerH];
  const totalH = layerY[2] + layerH + 20;
  const cx = W / 2;

  return (
    <div ref={ref} className="w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-700 shadow-lg">
      <svg viewBox={`0 0 ${W} ${totalH}`} className="w-full h-auto" aria-label="ChainSync 3-layer architecture">
        <rect width={W} height={totalH} fill="#0f172a" />

        {/* Connector columns */}
        {connY.map((cy, i) => (
          <g key={i}>
            <rect x={cx - 1} y={cy} width={2} height={connH} fill={LAYERS[i].color} opacity={0.3} />
            <FlowingDots x={cx} y1={cy + 4} y2={cy + connH - 4} color={LAYERS[i + 1].color} />
            {/* Arrow tip */}
            <motion.polygon
              points={`${cx - 6},${cy + connH - 8} ${cx + 6},${cy + connH - 8} ${cx},${cy + connH}`}
              fill={LAYERS[i + 1].color}
              opacity={0.7}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 0.7 } : {}}
              transition={{ delay: 0.8 + i * 0.4 }}
            />
          </g>
        ))}

        {/* Layer boxes */}
        {LAYERS.map((layer, i) => {
          const y = layerY[i];
          return (
            <motion.g
              key={layer.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.25, ease: "easeOut" }}
            >
              {/* Box */}
              <rect x={16} y={y} width={W - 32} height={layerH} rx={10}
                fill={layer.bg} stroke={layer.border} strokeWidth={1.5} />

              {/* Left color bar */}
              <rect x={16} y={y} width={6} height={layerH} rx={3} fill={layer.color} opacity={0.8} />

              {/* Layer badge */}
              <rect x={28} y={y + 10} width={44} height={14} rx={4} fill={layer.color} opacity={0.15} />
              <text x={50} y={y + 20.5} textAnchor="middle" fontSize={7} fill={layer.color} fontWeight="700">
                {layer.label}
              </text>

              {/* Title */}
              <text x={80} y={y + 22} fontSize={11} fill="white" fontWeight="700">{layer.title}</text>
              <text x={80} y={y + 35} fontSize={8} fill="#94a3b8">{layer.subtitle}</text>

              {/* Feature pills */}
              {layer.items.map((item, j) => (
                <g key={item}>
                  <rect
                    x={80 + j * 148}
                    y={y + 48}
                    width={136}
                    height={24}
                    rx={6}
                    fill={layer.color}
                    opacity={0.1}
                    stroke={layer.color}
                    strokeWidth={0.8}
                    strokeOpacity={0.3}
                  />
                  <text
                    x={80 + j * 148 + 68}
                    y={y + 63}
                    textAnchor="middle"
                    fontSize={7.5}
                    fill={layer.color}
                    opacity={0.9}
                  >
                    {item}
                  </text>
                </g>
              ))}

              {/* Pulsing indicator dot */}
              <motion.circle
                cx={W - 32}
                cy={y + layerH / 2}
                r={5}
                fill={layer.color}
                animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
                style={{ originX: `${W - 32}px`, originY: `${y + layerH / 2}px` }}
              />
            </motion.g>
          );
        })}
      </svg>

      <div className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 border-t border-slate-700">
        <span className="text-xs text-slate-400">Standard HTTP between all layers. No proprietary protocols.</span>
      </div>
    </div>
  );
}
