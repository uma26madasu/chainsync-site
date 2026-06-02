import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SOURCES = [
  { label: "SCADA", y: 60 },
  { label: "BMS", y: 120 },
  { label: "IoT / API", y: 180 },
];

function FlowDot({ path, duration, delay, color }: { path: string; duration: number; delay: number; color: string }) {
  return (
    <motion.circle
      r={3.5}
      fill={color}
      initial={{ offsetDistance: "0%" }}
      animate={{ offsetDistance: "100%" }}
      transition={{ duration, delay, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
      style={{ offsetPath: `path('${path}')` } as React.CSSProperties}
    />
  );
}

export default function AnimatedHeroFlow() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

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
    <div className="w-full rounded-xl overflow-hidden border border-slate-200 shadow-sm" style={{ backgroundColor: "#ffffff" }}>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" aria-label="ChainSync incident response flow diagram">
        {/* Light grid background */}
        <defs>
          <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#f1f5f9" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width={W} height={H} fill="#ffffff" />
        <rect width={W} height={H} fill="url(#grid)" />

        {/* Source nodes */}
        {SOURCES.map(({ label, y }) => (
          <g key={label}>
            <rect x={16} y={y - 14} width={52} height={28} rx={6} fill="#f0f9ff" stroke="#bae6fd" strokeWidth={1.2} />
            <text x={42} y={y + 4} textAnchor="middle" fontSize={7.5} fill="#0369a1" fontWeight="700">{label}</text>
            <motion.line
              x1={68} y1={y} x2={webhookX - 40} y2={webhookY}
              stroke="#bae6fd" strokeWidth={1} strokeDasharray="4 3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 + SOURCES.findIndex(s => s.label === label) * 0.15 }}
            />
            <FlowDot
              path={`M 68 ${y} L ${webhookX - 40} ${webhookY}`}
              duration={1.4}
              delay={0.6 + SOURCES.findIndex(s => s.label === label) * 0.4}
              color="#7dd3fc"
            />
          </g>
        ))}

        {/* Universal Webhook node */}
        <rect x={webhookX - 42} y={webhookY - 24} width={84} height={48} rx={8}
          fill="#f0f9ff" stroke="#7dd3fc" strokeWidth={1.5} />
        <text x={webhookX} y={webhookY - 8} textAnchor="middle" fontSize={6.5} fill="#0369a1" fontWeight="700">UNIVERSAL</text>
        <text x={webhookX} y={webhookY + 2} textAnchor="middle" fontSize={6.5} fill="#0369a1" fontWeight="700">WEBHOOK</text>
        <text x={webhookX} y={webhookY + 14} textAnchor="middle" fontSize={6} fill="#0284c7">ENDPOINT</text>

        {/* Arrow webhook → agents */}
        <motion.line
          x1={webhookX + 42} y1={webhookY} x2={agentsX - 40} y2={agentsY}
          stroke="#86efac" strokeWidth={1.2} strokeDasharray="4 3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        />
        <FlowDot path={`M ${webhookX + 42} ${webhookY} L ${agentsX - 40} ${agentsY}`} duration={1.2} delay={1.2} color="#86efac" />

        {/* AI Agents node */}
        <rect x={agentsX - 40} y={agentsY - 26} width={80} height={52} rx={8}
          fill="#f0fdf4" stroke="#86efac" strokeWidth={1.5} />
        <text x={agentsX} y={agentsY - 10} textAnchor="middle" fontSize={8} fill="#15803d" fontWeight="700">17 AI</text>
        <text x={agentsX} y={agentsY + 2} textAnchor="middle" fontSize={8} fill="#15803d" fontWeight="700">AGENTS</text>
        {[0,1,2,3,4,5,6].map((i) => (
          <motion.circle
            key={i}
            cx={agentsX - 18 + (i % 4) * 12}
            cy={agentsY + 15 + Math.floor(i / 4) * 8}
            r={2}
            fill="#86efac"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.3, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}

        {/* Arrow agents → slotify */}
        <motion.line
          x1={agentsX} y1={agentsY + 26} x2={slotifyX} y2={slotifyY - 24}
          stroke="#fde68a" strokeWidth={1.2} strokeDasharray="4 3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        />
        <FlowDot path={`M ${agentsX} ${agentsY + 26} L ${slotifyX} ${slotifyY - 24}`} duration={1} delay={1.6} color="#fbbf24" />

        {/* Slotify node */}
        <rect x={slotifyX - 38} y={slotifyY - 24} width={76} height={48} rx={8}
          fill="#fffbeb" stroke="#fde68a" strokeWidth={1.5} />
        <text x={slotifyX} y={slotifyY - 7} textAnchor="middle" fontSize={9} fill="#92400e" fontWeight="700">SLOTIFY</text>
        <text x={slotifyX} y={slotifyY + 5} textAnchor="middle" fontSize={6} fill="#b45309">Scheduler</text>
        <motion.circle cx={slotifyX + 22} cy={slotifyY - 18} r={5}
          fill="#bbf7d0" stroke="#86efac" strokeWidth={1}
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        />

        {/* Arrow slotify → meeting */}
        <motion.line
          x1={slotifyX - 38} y1={slotifyY + 5} x2={meetingX + 48} y2={meetingY - 6}
          stroke="#ddd6fe" strokeWidth={1.2} strokeDasharray="4 3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        />
        <FlowDot path={`M ${slotifyX - 38} ${slotifyY + 5} L ${meetingX + 48} ${meetingY - 6}`} duration={1} delay={2} color="#c4b5fd" />

        {/* Response Meeting node */}
        <rect x={meetingX - 48} y={meetingY - 22} width={96} height={44} rx={8}
          fill="#faf8ff" stroke="#ddd6fe" strokeWidth={1.5} />
        <text x={meetingX} y={meetingY - 6} textAnchor="middle" fontSize={7} fill="#4c1d95" fontWeight="700">RESPONSE MEETING</text>
        <text x={meetingX} y={meetingY + 6} textAnchor="middle" fontSize={6} fill="#7c3aed">Scheduled in minutes</text>

        {/* Checkmark */}
        <motion.circle cx={meetingX + 36} cy={meetingY - 16} r={8} fill="#bbf7d0"
          stroke="#86efac" strokeWidth={1}
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{ delay: 2.5, type: "spring", stiffness: 260, damping: 20 }}
        />
        <motion.path d={`M ${meetingX + 32} ${meetingY - 16} l 3 3 5 -5`}
          stroke="#15803d" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ delay: 2.7, duration: 0.3 }}
        />

        {/* Footer labels */}
        <text x={8} y={H - 8} fontSize={7} fill="#94a3b8">External Monitoring Systems</text>
        <text x={W - 8} y={H - 8} fontSize={7} fill="#94a3b8" textAnchor="end">Automated. Hours of coordination, compressed to minutes.</text>
      </svg>

      {/* Legend strip */}
      <div className="flex items-center justify-center gap-6 px-4 py-2 bg-slate-50 border-t border-slate-100">
        {[
          { color: "#7dd3fc", label: "Ingest" },
          { color: "#86efac", label: "Analyze" },
          { color: "#fbbf24", label: "Orchestrate" },
          { color: "#c4b5fd", label: "Report" },
        ].map(({ color, label }) => (
          <div key={label} className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
            <span className="text-xs text-slate-400">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
