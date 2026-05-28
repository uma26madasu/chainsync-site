import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SOURCES = [
  { label: "SCADA", y: 60 },
  { label: "BMS", y: 120 },
  { label: "IoT / API", y: 180 },
];

function PulseRing({ cx, cy, color }: { cx: number; cy: number; color: string }) {
  return (
    <>
      {[0, 1].map((i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={cy}
          r={18}
          fill="none"
          stroke={color}
          strokeWidth={1.5}
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ opacity: 0, scale: 2.2 }}
          transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.9, ease: "easeOut" }}
          style={{ originX: `${cx}px`, originY: `${cy}px` }}
        />
      ))}
    </>
  );
}

function FlowDot({ path, duration, delay, color }: { path: string; duration: number; delay: number; color: string }) {
  return (
    <motion.circle
      r={4}
      fill={color}
      initial={{ offsetDistance: "0%" }}
      animate={{ offsetDistance: "100%" }}
      transition={{ duration, delay, repeat: Infinity, ease: "linear", repeatDelay: 0.4 }}
      style={{ offsetPath: `path('${path}')` } as React.CSSProperties}
    />
  );
}

export default function AnimatedHeroFlow() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // Layout constants
  const W = 480;
  const H = 300;
  const webhookX = 220;
  const webhookY = 120;
  const agentsX = 360;
  const agentsY = 120;
  const slotifyX = 360;
  const slotifyY = 210;
  const meetingX = 240;
  const meetingY = 255;

  return (
    <div className="w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-700 shadow-2xl">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" aria-label="ChainSync incident response flow diagram">
        {/* Background grid */}
        <defs>
          <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#334155" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width={W} height={H} fill="#0f172a" />
        <rect width={W} height={H} fill="url(#grid)" />

        {/* ── Source nodes ── */}
        {SOURCES.map(({ label, y }) => (
          <g key={label}>
            <PulseRing cx={42} cy={y} color="#3b82f6" />
            <circle cx={42} cy={y} r={18} fill="#1e3a5f" stroke="#3b82f6" strokeWidth={1.5} />
            <text x={42} y={y + 4} textAnchor="middle" fontSize={7} fill="#93c5fd" fontWeight="600">{label}</text>
            {/* Arrow line to webhook */}
            <motion.line
              x1={62} y1={y} x2={webhookX - 22} y2={webhookY}
              stroke="#3b82f6" strokeWidth={1} strokeDasharray="4 3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 0.8, delay: 0.2 + SOURCES.findIndex(s => s.label === label) * 0.15 }}
            />
            {/* Flowing dot source → webhook */}
            <FlowDot
              path={`M 62 ${y} L ${webhookX - 22} ${webhookY}`}
              duration={1.4}
              delay={0.6 + SOURCES.findIndex(s => s.label === label) * 0.4}
              color="#60a5fa"
            />
          </g>
        ))}

        {/* ── Universal Webhook node ── */}
        <PulseRing cx={webhookX} cy={webhookY} color="#0ea5e9" />
        <rect x={webhookX - 38} y={webhookY - 22} width={76} height={44} rx={8}
          fill="#0c2a3d" stroke="#0ea5e9" strokeWidth={1.5} />
        <text x={webhookX} y={webhookY - 6} textAnchor="middle" fontSize={7} fill="#7dd3fc" fontWeight="700">UNIVERSAL</text>
        <text x={webhookX} y={webhookY + 4} textAnchor="middle" fontSize={7} fill="#7dd3fc" fontWeight="700">WEBHOOK</text>
        <text x={webhookX} y={webhookY + 14} textAnchor="middle" fontSize={6} fill="#38bdf8">ENDPOINT</text>

        {/* ── Arrow webhook → agents ── */}
        <motion.line
          x1={webhookX + 38} y1={webhookY} x2={agentsX - 38} y2={agentsY}
          stroke="#10b981" strokeWidth={1.5} strokeDasharray="4 3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 0.6, delay: 1 }}
        />
        <FlowDot path={`M ${webhookX + 38} ${webhookY} L ${agentsX - 38} ${agentsY}`} duration={1.2} delay={1.2} color="#34d399" />

        {/* ── AI Agents node ── */}
        <PulseRing cx={agentsX} cy={agentsY} color="#10b981" />
        <rect x={agentsX - 38} y={agentsY - 24} width={76} height={48} rx={8}
          fill="#052e16" stroke="#10b981" strokeWidth={1.5} />
        <text x={agentsX} y={agentsY - 8} textAnchor="middle" fontSize={8} fill="#6ee7b7" fontWeight="700">17 AI</text>
        <text x={agentsX} y={agentsY + 4} textAnchor="middle" fontSize={8} fill="#6ee7b7" fontWeight="700">AGENTS</text>
        {/* Mini agent dots */}
        {[0,1,2,3,4,5,6].map((i) => (
          <motion.circle
            key={i}
            cx={agentsX - 18 + (i % 4) * 12}
            cy={agentsY + 14 + Math.floor(i / 4) * 8}
            r={2.5}
            fill="#10b981"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}

        {/* ── Arrow agents → slotify ── */}
        <motion.line
          x1={agentsX} y1={agentsY + 24} x2={slotifyX} y2={slotifyY - 22}
          stroke="#f59e0b" strokeWidth={1.5} strokeDasharray="4 3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        />
        <FlowDot path={`M ${agentsX} ${agentsY + 24} L ${slotifyX} ${slotifyY - 22}`} duration={1} delay={1.6} color="#fbbf24" />

        {/* ── Slotify node ── */}
        <PulseRing cx={slotifyX} cy={slotifyY} color="#f59e0b" />
        <rect x={slotifyX - 36} y={slotifyY - 22} width={72} height={44} rx={8}
          fill="#2d1a00" stroke="#f59e0b" strokeWidth={1.5} />
        <text x={slotifyX} y={slotifyY - 5} textAnchor="middle" fontSize={9} fill="#fcd34d" fontWeight="700">SLOTIFY</text>
        <text x={slotifyX} y={slotifyY + 7} textAnchor="middle" fontSize={6} fill="#fbbf24">Scheduler</text>
        <motion.circle cx={slotifyX + 20} cy={slotifyY - 16} r={5}
          fill="#16a34a" stroke="#15803d" strokeWidth={1}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <text x={slotifyX + 20} y={slotifyY - 13} textAnchor="middle" fontSize={6} fill="white" fontWeight="700">●</text>

        {/* ── Arrow slotify → meeting ── */}
        <motion.line
          x1={slotifyX - 36} y1={slotifyY + 5} x2={meetingX + 46} y2={meetingY - 5}
          stroke="#8b5cf6" strokeWidth={1.5} strokeDasharray="4 3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        />
        <FlowDot path={`M ${slotifyX - 36} ${slotifyY + 5} L ${meetingX + 46} ${meetingY - 5}`} duration={1} delay={2} color="#a78bfa" />

        {/* ── Response Meeting node ── */}
        <PulseRing cx={meetingX} cy={meetingY} color="#8b5cf6" />
        <rect x={meetingX - 46} y={meetingY - 20} width={92} height={40} rx={8}
          fill="#1e1b4b" stroke="#8b5cf6" strokeWidth={1.5} />
        <text x={meetingX} y={meetingY - 4} textAnchor="middle" fontSize={7} fill="#c4b5fd" fontWeight="700">RESPONSE MEETING</text>
        <text x={meetingX} y={meetingY + 8} textAnchor="middle" fontSize={6} fill="#a78bfa">Scheduled in &lt;15 min</text>

        {/* Checkmark */}
        <motion.circle cx={meetingX + 34} cy={meetingY - 14} r={8} fill="#16a34a"
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{ delay: 2.5, type: "spring", stiffness: 260, damping: 20 }}
        />
        <motion.path d={`M ${meetingX + 30} ${meetingY - 14} l 3 3 5 -5`}
          stroke="white" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ delay: 2.7, duration: 0.3 }}
        />

        {/* Labels */}
        <text x={8} y={H - 10} fontSize={7} fill="#475569">
          External Monitoring Systems
        </text>
        <text x={W - 8} y={H - 10} fontSize={7} fill="#475569" textAnchor="end">
          Automated in under 15 minutes
        </text>
      </svg>

      {/* Legend strip */}
      <div className="flex items-center justify-center gap-6 px-4 py-2 bg-slate-800 border-t border-slate-700">
        {[
          { color: "bg-blue-400", label: "Ingest" },
          { color: "bg-green-400", label: "Analyze" },
          { color: "bg-amber-400", label: "Orchestrate" },
          { color: "bg-purple-400", label: "Report" },
        ].map(({ color, label }) => (
          <div key={label} className="flex items-center gap-1.5">
            <div className={`w-2 h-2 rounded-full ${color}`} />
            <span className="text-xs text-slate-400">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
