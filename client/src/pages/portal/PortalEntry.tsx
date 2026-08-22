import { useState, FormEvent } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fadeUp } from "@/lib/motion";
import { usePortal } from "@/contexts/PortalContext";
import { API_URL } from "@/config/api";

export default function PortalEntry() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = usePortal();
  const [, navigate] = useLocation();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!code.trim()) return;

    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/portal/auth?access_code=${encodeURIComponent(code.trim())}`, {
        method: "POST",
      });

      if (!res.ok) {
        setError("Invalid access code. Contact your ChainSync administrator.");
        setLoading(false);
        return;
      }

      const data = await res.json();
      login(data.facility_id, data.facility_name, data.facility_type ?? "");
      navigate("/portal/incidents");
    } catch {
      setError("Unable to reach the portal. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
      {/* Logo mark */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="flex items-center gap-2 mb-8"
      >
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: "#0F5A8F" }}
        >
          <span className="text-white font-bold text-sm">CS</span>
        </div>
        <span className="text-xl font-semibold text-foreground tracking-tight">ChainSync</span>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="w-full max-w-sm"
      >
        <Card className="p-8 bg-white border border-border shadow-sm">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Incident Coordination Portal
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your facility access code
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Access code"
                value={code}
                onChange={(e) => { setCode(e.target.value); setError(""); }}
                className="w-full text-center tracking-widest font-mono uppercase"
                autoComplete="off"
                spellCheck={false}
                disabled={loading}
              />
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-600 mt-2 text-center"
                >
                  {error}
                </motion.p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white h-10 font-semibold"
              disabled={loading || !code.trim()}
            >
              {loading ? "Verifying..." : "Access Portal"}
            </Button>
          </form>
        </Card>

        <p className="text-center text-xs text-muted-foreground mt-4">
          Access codes are issued by your ChainSync administrator.
        </p>
      </motion.div>
    </div>
  );
}
