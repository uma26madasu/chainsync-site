import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { AlertCircle, Gauge, Building2, Heart, Droplets } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/motion";

const CHECK = ({ color = "text-primary" }: { color?: string }) => (
  <span className={`${color} mt-0.5 flex-shrink-0 font-bold`}>✓</span>
);

export default function UseCases() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Use Cases
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground text-center max-w-3xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
          >
            ChainSync is purpose-built for organizations responsible for detecting and responding to environmental emergencies. Each sector has distinct agents, distinct compliance requirements, and distinct stakeholder chains.
          </motion.p>
        </div>
      </section>

      {/* Water Treatment */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <motion.div variants={fadeUp}>
                <span className="inline-block bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Water Quality Protection
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Water Treatment Facilities
              </motion.h2>

              <motion.div variants={fadeUp} className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">The Challenge</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">•</span>
                      Turbidity spikes, chemical anomalies, and pathogen events require immediate cross-agency coordination
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">•</span>
                      Treatment operators, public health officials, and regulators must be notified simultaneously
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">•</span>
                      Compliance documentation must be maintained throughout the incident, not reconstructed after
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">•</span>
                      Manual coordination takes 4-6 hours when minutes matter for public health
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">How ChainSync Helps</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CHECK />
                      SCADA and sensor data analyzed for anomalies within seconds of detection
                    </li>
                    <li className="flex items-start gap-2">
                      <CHECK />
                      Operators, public health officials, and EPA contacts notified in parallel
                    </li>
                    <li className="flex items-start gap-2">
                      <CHECK />
                      EPA Safe Drinking Water Act notification templates generated automatically
                    </li>
                    <li className="flex items-start gap-2">
                      <CHECK />
                      Emergency response meeting scheduled via Slotify without manual calls
                    </li>
                    <li className="flex items-start gap-2">
                      <CHECK />
                      Full audit trail maintained from first alert to incident closure
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Agents Deployed</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Water Quality Analyst", "Contamination Detector", "Regulatory Reporter", "Emergency Coordinator", "Sensor Monitor"].map((a) => (
                      <span key={a} className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded font-medium">{a}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ delay: 0.18 }}
              className="bg-slate-900 rounded-xl p-6 border border-slate-700"
            >
              <div className="flex items-center gap-2 mb-4">
                <Droplets className="text-blue-400" size={18} />
                <span className="text-xs font-bold tracking-widest text-slate-400">LIVE MONITORING</span>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Turbidity", value: "2.4 NTU", status: "normal", threshold: "Alert > 4 NTU" },
                  { label: "pH", value: "7.2", status: "normal", threshold: "Alert < 6.5 or > 8.5" },
                  { label: "Chlorine Residual", value: "0.8 mg/L", status: "normal", threshold: "Alert < 0.2 mg/L" },
                  { label: "Coliform", value: "0 CFU/100mL", status: "normal", threshold: "Alert > 0" },
                ].map((row, i) => (
                  <motion.div
                    key={row.label}
                    className="flex items-center justify-between bg-slate-800 rounded-lg px-4 py-2.5"
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.28, delay: 0.25 + i * 0.07 }}
                  >
                    <div>
                      <p className="text-xs font-semibold text-slate-200">{row.label}</p>
                      <p className="text-xs text-slate-500">{row.threshold}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-100">{row.value}</span>
                      <span className="w-2 h-2 rounded-full bg-green-400" />
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3 text-center">Illustrative sensor dashboard. All values within threshold.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industrial */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              className="order-2 lg:order-1 bg-slate-900 rounded-xl p-6 border border-slate-700"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ delay: 0.12 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Gauge className="text-emerald-400" size={18} />
                <span className="text-xs font-bold tracking-widest text-slate-400">EMISSIONS MONITOR</span>
              </div>
              <div className="space-y-3">
                {[
                  { label: "NOx Emissions", value: "78 ppm", status: "warning", threshold: "Limit: 100 ppm" },
                  { label: "SO₂ Discharge", value: "12 ppm", status: "normal", threshold: "Limit: 20 ppm" },
                  { label: "Particulate Matter", value: "38 µg/m³", status: "normal", threshold: "Limit: 50 µg/m³" },
                  { label: "Wastewater pH", value: "9.1", status: "alert", threshold: "Limit: 6-9 pH" },
                ].map((row, i) => (
                  <motion.div
                    key={row.label}
                    className="flex items-center justify-between bg-slate-800 rounded-lg px-4 py-2.5"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.28, delay: 0.2 + i * 0.08 }}
                  >
                    <div>
                      <p className="text-xs font-semibold text-slate-200">{row.label}</p>
                      <p className="text-xs text-slate-500">{row.threshold}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-100">{row.value}</span>
                      <span className={`w-2 h-2 rounded-full ${row.status === "alert" ? "bg-red-400" : row.status === "warning" ? "bg-amber-400" : "bg-green-400"}`} />
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3 text-center">Wastewater pH breach triggers agent pipeline automatically.</p>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <motion.div variants={fadeUp}>
                <span className="inline-block bg-green-100 text-secondary px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Emissions and Compliance
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Industrial Environmental Compliance
              </motion.h2>

              <motion.div variants={fadeUp} className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">The Challenge</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">•</span>
                      Emissions threshold breaches require immediate regulatory notification within hours
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">•</span>
                      Multi-department coordination is manual, error-prone, and slow under pressure
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">•</span>
                      Regulatory penalties for late reporting can exceed cost of the incident itself
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">•</span>
                      Compliance docs must be audit-ready immediately, not assembled after-the-fact
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">How ChainSync Helps</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CHECK color="text-secondary" />
                      Continuous emissions monitoring with instant anomaly alerts to EHS and operations
                    </li>
                    <li className="flex items-start gap-2">
                      <CHECK color="text-secondary" />
                      EHS team, plant manager, and regulatory contacts notified automatically on breach
                    </li>
                    <li className="flex items-start gap-2">
                      <CHECK color="text-secondary" />
                      EPA and OSHA incident report templates generated at time of detection
                    </li>
                    <li className="flex items-start gap-2">
                      <CHECK color="text-secondary" />
                      Response meeting scheduled across shift-based and corporate calendars
                    </li>
                    <li className="flex items-start gap-2">
                      <CHECK color="text-secondary" />
                      Full documentation chain ready before the first regulatory call
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Agents Deployed</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Detection Agent", "Analysis Agent", "Coordination Agent", "Documentation Agent", "Notification Agent"].map((a) => (
                      <span key={a} className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded font-medium">{a}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Municipal */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <motion.div variants={fadeUp}>
                <span className="inline-block bg-amber-100 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Emergency Coordination
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Municipal Emergency Response
              </motion.h2>

              <motion.div variants={fadeUp} className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">The Challenge</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">•</span>
                      Environmental threats span flooding, chemical spills, air quality events, and waste emergencies
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">•</span>
                      Response requires fire, public health, utilities, and external agencies to coordinate
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">•</span>
                      No single platform spans all incident types, departments, and jurisdictions
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">•</span>
                      Communication delays between departments directly increase community impact
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">How ChainSync Helps</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CHECK color="text-accent" />
                      Single platform handles all environmental incident types across departments
                    </li>
                    <li className="flex items-start gap-2">
                      <CHECK color="text-accent" />
                      Stakeholder routing determined by incident type and severity, not manual lookup
                    </li>
                    <li className="flex items-start gap-2">
                      <CHECK color="text-accent" />
                      Cross-department emergency meetings scheduled automatically via Slotify
                    </li>
                    <li className="flex items-start gap-2">
                      <CHECK color="text-accent" />
                      State and federal agency reporting documentation generated at incident time
                    </li>
                    <li className="flex items-start gap-2">
                      <CHECK color="text-accent" />
                      Post-incident audit trail ready for public records and after-action review
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Agents Deployed</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Detection Agent", "Coordination Agent", "Notification Agent", "Documentation Agent", "Scheduler Agent"].map((a) => (
                      <span key={a} className="text-xs px-2 py-1 bg-amber-100 text-amber-700 rounded font-medium">{a}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="bg-slate-900 rounded-xl p-6 border border-slate-700"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ delay: 0.15 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="text-amber-400" size={18} />
                <span className="text-xs font-bold tracking-widest text-slate-400">INCIDENT PIPELINE</span>
              </div>
              <div className="space-y-2">
                {[
                  { step: "01", label: "Chemical spill detected at River St intersection", time: "00:00", color: "text-red-400" },
                  { step: "02", label: "Hazmat, public works, and EPA contacts identified", time: "00:04", color: "text-amber-400" },
                  { step: "03", label: "Multi-agency notification sent", time: "00:12", color: "text-blue-400" },
                  { step: "04", label: "Emergency response meeting scheduled", time: "00:31", color: "text-emerald-400" },
                  { step: "05", label: "Compliance report draft generated", time: "00:38", color: "text-slate-400" },
                ].map((item, i) => (
                  <motion.div
                    key={item.step}
                    className="flex items-start gap-3 bg-slate-800 rounded-lg px-3 py-2.5"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 0.2 + i * 0.09 }}
                  >
                    <span className={`text-xs font-bold font-mono ${item.color} mt-0.5`}>{item.step}</span>
                    <p className="text-xs text-slate-300 flex-grow">{item.label}</p>
                    <span className="text-xs font-mono text-slate-500 flex-shrink-0">{item.time}s</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3 text-center">Illustrative timeline. All steps automated.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Healthcare */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <motion.div variants={fadeUp}>
                <span className="inline-block bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Hospital Facilities Management
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Hospital &amp; Healthcare Facilities
              </motion.h2>

              <motion.div variants={fadeUp} className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">The Challenge</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">•</span>
                      Joint Commission, CMS, and FDA compliance demands run simultaneously with daily operations
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">•</span>
                      Equipment failures require immediate Biomedical Engineering response and FDA MDR obligation checks
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">•</span>
                      Missed PM cycles can trigger Joint Commission findings during unannounced surveys
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">•</span>
                      Manual tracking creates dangerous documentation gaps across ventilators, dialysis, and infusion pumps
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">How ChainSync Helps</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CHECK />
                      Joint Commission EC.02.05, EC.02.06, EC.04.01 documentation auto-generated on events
                    </li>
                    <li className="flex items-start gap-2">
                      <CHECK />
                      CMS QSO-17-30 reports filed automatically, not manually after the fact
                    </li>
                    <li className="flex items-start gap-2">
                      <CHECK />
                      Critical device failures trigger Biomedical Engineering dispatch and loaner coordination
                    </li>
                    <li className="flex items-start gap-2">
                      <CHECK />
                      Daily PM compliance scan flags overdue maintenance before a surveyor does
                    </li>
                    <li className="flex items-start gap-2">
                      <CHECK />
                      Bosch Climatic BMS adapter routes HVAC threshold breaches directly to agents, no manual handoff
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Agents Deployed</h4>
                  <div className="flex flex-wrap gap-2">
                    {["HVAC Monitor", "Patient Safety Agent", "Air Quality Analyst", "Equipment Coordinator", "Compliance Reporter"].map((a) => (
                      <span key={a} className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded font-medium">{a}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="bg-slate-900 rounded-xl p-6 border border-slate-700"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Heart className="text-red-400" size={18} />
                <span className="text-xs font-bold tracking-widest text-slate-400">COMPLIANCE STATUS</span>
              </div>
              <div className="space-y-2">
                {[
                  { label: "EC.02.05: Life Safety Rounding", status: "Current", ok: true },
                  { label: "EC.02.06: PM Schedule", status: "2 overdue", ok: false },
                  { label: "EC.04.01: Incident Reports", status: "Current", ok: true },
                  { label: "CMS QSO-17-30 Fire Drill", status: "Current", ok: true },
                  { label: "FDA MDR: Infusion Pump #4", status: "Triggered", ok: false },
                ].map((row, i) => (
                  <motion.div
                    key={row.label}
                    className="flex items-center justify-between bg-slate-800 rounded-lg px-3 py-2"
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 0.25 + i * 0.07 }}
                  >
                    <p className="text-xs text-slate-300">{row.label}</p>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded ${row.ok ? "bg-green-900 text-green-300" : "bg-red-900 text-red-300"}`}>
                      {row.status}
                    </span>
                  </motion.div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3 text-center">Overdue items trigger agent pipeline automatically.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-primary text-white">
        <motion.div
          className="container mx-auto px-4 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Is Your Organization a Good Fit?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            If you're responsible for detecting and responding to environmental emergencies, ChainSync is built for your workflow.
          </p>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
            <Link href="/contact">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 h-auto text-base font-semibold">
                Request Early Access
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
