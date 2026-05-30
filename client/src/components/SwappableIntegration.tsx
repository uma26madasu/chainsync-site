import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "@/lib/motion";

const CURRENT = {
  id: "mulesoft",
  name: "MuleSoft + DataWeave",
  badge: "Current Implementation",
  desc: "Enterprise integration platform with DataWeave transformations. Handles 22+ flow implementations across cloud and on-premise systems.",
  color: "#3b82f6",
  bg: "bg-blue-50",
  border: "border-blue-400",
};

const ALTERNATIVES = [
  {
    id: "workato",
    name: "Workato",
    desc: "Low-code integration platform for cloud-native teams",
    color: "#8b5cf6",
    bg: "bg-purple-50",
    border: "border-purple-300",
  },
  {
    id: "boomi",
    name: "Dell Boomi",
    desc: "iPaaS platform with strong enterprise data governance",
    color: "#10b981",
    bg: "bg-emerald-50",
    border: "border-emerald-300",
  },
  {
    id: "azure",
    name: "Azure Logic Apps",
    desc: "Microsoft-native workflow automation and integration",
    color: "#06b6d4",
    bg: "bg-cyan-50",
    border: "border-cyan-300",
  },
  {
    id: "custom",
    name: "Custom HTTP",
    desc: "Any stack that can send a standard HTTP POST webhook",
    color: "#f59e0b",
    bg: "bg-amber-50",
    border: "border-amber-300",
  },
];

export default function SwappableIntegration() {
  const [selected, setSelected] = useState<string>("mulesoft");

  const activeAlt = ALTERNATIVES.find((a) => a.id === selected);
  const isMuleSoft = selected === "mulesoft";
  const display = isMuleSoft ? CURRENT : activeAlt!;

  return (
    <div className="w-full">
      <div className="flex flex-col items-center gap-6">
        {/* Universal Webhook Hub */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="bg-slate-900 border-2 border-slate-600 rounded-xl px-8 py-4 text-center shadow-lg"
        >
          <p className="text-xs font-bold tracking-widest text-slate-400 mb-1">CORE ENDPOINT</p>
          <p className="text-base font-bold text-white">Universal Webhook Endpoint</p>
          <p className="text-xs text-slate-400 mt-1">Standard HTTP POST. Accepts events from any source.</p>
        </motion.div>

        {/* Connection line */}
        <div className="w-px h-6 bg-slate-300" aria-hidden="true" />

        {/* Integration options grid */}
        <motion.div
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {/* Current (MuleSoft) */}
          <motion.div variants={fadeUp} className="lg:col-span-1" transition={{ delay: 0 }}>
            <button
              onClick={() => setSelected("mulesoft")}
              className={`w-full rounded-xl border-2 p-4 text-left transition-all duration-200 cursor-pointer ${
                selected === "mulesoft"
                  ? `${CURRENT.bg} ${CURRENT.border} shadow-md`
                  : "bg-white border-border hover:shadow-sm"
              }`}
            >
              <div className="text-xs font-bold text-blue-600 mb-1">CURRENT</div>
              <p className="text-sm font-bold text-foreground">{CURRENT.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{CURRENT.desc.slice(0, 50)}…</p>
            </button>
          </motion.div>

          {/* Divider label */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="flex flex-col items-center gap-1">
              <div className="w-px h-8 bg-border" />
              <span className="text-xs text-muted-foreground font-medium px-2 py-0.5 bg-slate-100 rounded-full">OR</span>
              <div className="w-px h-8 bg-border" />
            </div>
          </div>

          {/* Alternatives */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-3">
            {ALTERNATIVES.map((alt, i) => (
              <motion.div key={alt.id} variants={fadeUp} transition={{ delay: (i + 1) * 0.08 }}>
                <button
                  onClick={() => setSelected(alt.id)}
                  className={`w-full rounded-xl border-2 p-4 text-left transition-all duration-200 cursor-pointer ${
                    selected === alt.id
                      ? `${alt.bg} ${alt.border} shadow-md`
                      : "bg-white border-border hover:shadow-sm opacity-75 hover:opacity-100"
                  }`}
                >
                  <p className="text-sm font-bold text-foreground">{alt.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{alt.desc.slice(0, 42)}…</p>
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className={`w-full rounded-xl border p-5 ${
              isMuleSoft ? "bg-blue-50 border-blue-200" : `${display.bg} ${display.border}`
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                style={{ backgroundColor: display.color }}
              />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm font-bold text-foreground">{display.name}</p>
                  {isMuleSoft && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-medium">Active</span>
                  )}
                  {!isMuleSoft && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">Plug-in alternative</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{display.desc}</p>
                {!isMuleSoft && (
                  <p className="text-xs text-muted-foreground mt-2 italic">
                    Switching to {display.name} requires zero changes to the AI agent layer or Slotify scheduler. Only the integration adapter changes.
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
