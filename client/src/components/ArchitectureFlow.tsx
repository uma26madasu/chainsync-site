import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const NODES = [
  {
    id: "sensor",
    label: "Sensor\nInput",
    sublabel: "IoT / SCADA",
    color: "#3b82f6",
    bg: "#0c2a3d",
    border: "#1d4ed8",
    desc: "Any sensor or system sending HTTP POST: weather stations, gas detectors, water quality monitors, SCADA systems, satellite data feeds.",
  },
  {
    id: "mulesoft",
    label: "MuleSoft\nDataWeave",
    sublabel: "Transform",
    color: "#6366f1",
    bg: "#1a1040",
    border: "#4338ca",
    desc: "DataWeave transformations normalize heterogeneous sensor events into ChainSync's unified schema, then routes to the Universal Webhook Endpoint.",
  },
  {
    id: "agents",
    label: "17 AI\nAgents",
    sublabel: "Python FastAPI",
    color: "#8b5cf6",
    bg: "#1a0a2e",
    border: "#7c3aed",
    desc: "Detection, analysis, coordination, and documentation agents. Each is an independent FastAPI service; HTTP webhooks carry events between them.",
  },
  {
    id: "gpt4",
    label: "AI\nReasoning",
    sublabel: "Intelligence Layer",
    color: "#a855f7",
    bg: "#1e0a30",
    border: "#9333ea",
    desc: "Context enrichment: historical data, regulatory thresholds, weather overlays. Outputs risk classification and recommended stakeholder list.",
  },
  {
    id: "slotify",
    label: "Slotify",
    sublabel: "Scheduler",
    color: "#10b981",
    bg: "#052e16",
    border: "#059669",
    desc: "Autonomous meeting coordination. Checks Google Calendar and Microsoft 365, resolves conflicts, applies emergency overrides, books multi-stakeholder response meeting.",
  },
  {
    id: "output",
    label: "Output\nChannels",
    sublabel: "Email / Calendar",
    color: "#f59e0b",
    bg: "#2d1a00",
    border: "#d97706",
    desc: "Invites sent, stakeholders notified via email/SMS, compliance report generated, full audit trail persisted to MongoDB.",
  },
];

function FlowDots({ x1, x2, y, color }: { x1: number; x2: number; y: number; color: string }) {
  return (
    <>
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          cy={y}
          r={3}
          fill={color}
          initial={{ cx: x1, opacity: 0 }}
          animate={{ cx: [x1, x2], opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 1.2,
            delay: i * 0.38,
            repeat: Infinity,
            repeatDelay: 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}

export default function ArchitectureFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState<string | null>(null);

  const W = 660;
  const NODE_W = 84;
  const NODE_H = 72;
  const Y = 16;
  const GAP = (W - NODES.length * NODE_W) / (NODES.length - 1);
  const nodeX = (i: number) => i * (NODE_W + GAP);
  const nodeCX = (i: number) => nodeX(i) + NODE_W / 2;
  const CONN_Y = Y + NODE_H / 2;
  const SVG_H = NODE_H + Y * 2;

  const activeNode = hovered ? NODES.find((n) => n.id === hovered) : null;

  return (
    <div ref={ref} className="w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-700 shadow-lg">
      <svg
        viewBox={`0 0 ${W} ${SVG_H}`}
        className="w-full h-auto"
        aria-label="ChainSync data pipeline architecture"
      >
        <rect width={W} height={SVG_H} fill="#0f172a" />

        {/* Connection lines */}
        {NODES.slice(0, -1).map((node, i) => {
          const x1 = nodeX(i) + NODE_W;
          const x2 = nodeX(i + 1);
          return (
            <g key={`conn-${i}`}>
              <line x1={x1} y1={CONN_Y} x2={x2} y2={CONN_Y} stroke={node.border} strokeWidth={1} opacity={0.4} />
              <motion.polygon
                points={`${x2 - 6},${CONN_Y - 4} ${x2},${CONN_Y} ${x2 - 6},${CONN_Y + 4}`}
                fill={NODES[i + 1].color}
                opacity={0.7}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 0.7 } : {}}
                transition={{ delay: 0.6 + i * 0.2 }}
              />
              {inView && (
                <FlowDots
                  x1={x1 + 4}
                  x2={x2 - 4}
                  y={CONN_Y}
                  color={NODES[i + 1].color}
                />
              )}
            </g>
          );
        })}

        {/* Nodes */}
        {NODES.map((node, i) => {
          const x = nodeX(i);
          const isActive = hovered === node.id;
          return (
            <motion.g
              key={node.id}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.15 + i * 0.1, ease: "easeOut" }}
              onMouseEnter={() => setHovered(node.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ cursor: "pointer" }}
            >
              <rect
                x={x}
                y={Y}
                width={NODE_W}
                height={NODE_H}
                rx={8}
                fill={isActive ? node.color + "28" : node.bg}
                stroke={isActive ? node.color : node.border}
                strokeWidth={isActive ? 2 : 1}
              />
              <rect x={x} y={Y} width={4} height={NODE_H} rx={2} fill={node.color} opacity={0.9} />

              {node.label.split("\n").map((line, li) => (
                <text
                  key={li}
                  x={x + NODE_W / 2 + 2}
                  y={Y + 20 + li * 13}
                  textAnchor="middle"
                  fontSize={9}
                  fill="white"
                  fontWeight="700"
                >
                  {line}
                </text>
              ))}
              <text
                x={x + NODE_W / 2 + 2}
                y={Y + NODE_H - 10}
                textAnchor="middle"
                fontSize={7}
                fill="#94a3b8"
              >
                {node.sublabel}
              </text>

              <motion.circle
                cx={x + NODE_W - 8}
                cy={Y + 10}
                r={4}
                fill={node.color}
                animate={inView ? { opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                style={{ originX: `${x + NODE_W - 8}px`, originY: `${Y + 10}px` }}
              />
            </motion.g>
          );
        })}
      </svg>

      {/* Description panel */}
      <div className="px-4 py-2 bg-slate-800 border-t border-slate-700 min-h-[44px] flex items-center">
        {activeNode ? (
          <motion.p
            key={activeNode.id}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
            className="text-xs text-slate-300"
          >
            <span className="font-semibold" style={{ color: activeNode.color }}>{activeNode.label.replace("\n", " ")}: </span>
            {activeNode.desc}
          </motion.p>
        ) : (
          <p className="text-xs text-slate-500">Hover any node to see details</p>
        )}
      </div>
    </div>
  );
}
