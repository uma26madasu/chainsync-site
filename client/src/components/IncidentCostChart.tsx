import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { vertical: "Water Utilities", manual: 6, chainsync: 0.25 },
  { vertical: "Industrial", manual: 5, chainsync: 0.25 },
  { vertical: "Municipal", manual: 4.5, chainsync: 0.25 },
];

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: { value: number; name: string; color: string }[]; label?: string }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-border rounded-lg shadow-lg p-3 text-sm">
      <p className="font-semibold text-foreground mb-1">{label}</p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color }}>
          {p.name === "manual" ? "Manual coordination" : "With ChainSync"}:{" "}
          <span className="font-bold">
            {p.value >= 1 ? `${p.value} hrs` : `${Math.round(p.value * 60)} min`}
          </span>
        </p>
      ))}
    </div>
  );
};

export default function IncidentCostChart() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="bg-white border border-border rounded-xl p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">Coordination Time: Manual vs. ChainSync</h3>
        <p className="text-sm text-muted-foreground mt-1">Hours from detection to a scheduled response meeting, by vertical (illustrative)</p>
      </div>

      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data} barCategoryGap="30%" barGap={4}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
          <XAxis
            dataKey="vertical"
            tick={{ fontSize: 12, fill: "#64748b" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={(v) => v >= 1 ? `${v}h` : `${Math.round(v * 60)}m`}
            tick={{ fontSize: 11, fill: "#64748b" }}
            axisLine={false}
            tickLine={false}
            domain={[0, 7]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            formatter={(value) => value === "manual" ? "Manual coordination" : "With ChainSync"}
            iconType="circle"
            wrapperStyle={{ fontSize: 12, color: "#64748b" }}
          />
          <Bar
            dataKey="manual"
            fill="#f87171"
            radius={[4, 4, 0, 0]}
            isAnimationActive={inView}
            animationDuration={800}
            animationEasing="ease-out"
          />
          <Bar
            dataKey="chainsync"
            fill="#22c55e"
            radius={[4, 4, 0, 0]}
            isAnimationActive={inView}
            animationDuration={800}
            animationEasing="ease-out"
            animationBegin={200}
          />
        </BarChart>
      </ResponsiveContainer>

      <p className="text-xs text-muted-foreground text-center mt-3">
        Source: Based on reported coordination overhead for environmental incidents. ChainSync target: &lt;15 minutes.
      </p>
    </motion.div>
  );
}
