import { useState, useEffect, useCallback } from "react";

const WATER_SCENARIO = {
  title: "Water Quality Incident",
  subtitle: "Turbidity Spike at Regional Treatment Plant",
  facility: "Riverside Regional Water Treatment Plant",
  system: "SCADA System — Hach Turbidity Monitor",
  phases: [
    {
      phase: 1,
      name: "Detection",
      time: "02:14:03 AM",
      elapsed: "0s",
      icon: "🔴",
      headline: "SCADA Alert Received",
      detail: "Turbidity reading at Intake Point A has exceeded the regulatory threshold.",
      data: [
        { label: "Reading", value: "5.2 NTU" },
        { label: "Threshold", value: "4.0 NTU" },
        { label: "Location", value: "Intake Point A — Raw Water" },
        { label: "Trend", value: "Rising (3.1 → 4.6 → 5.2 in 18 min)" },
      ],
      log: "SCADA webhook received → Alert parsed → Incident ID #WQ-2026-0847 created",
    },
    {
      phase: 2,
      name: "Analysis",
      time: "02:14:07 AM",
      elapsed: "4s",
      icon: "🔍",
      headline: "Severity Assessed — Level 3 (High)",
      detail: "AI agent analyzed the alert pattern, regulatory context, and historical data to determine response requirements.",
      data: [
        { label: "Severity", value: "Level 3 — High (exceeds EPA MCL)" },
        { label: "Regulation", value: "EPA SDWA — 40 CFR 141.13" },
        { label: "Notification window", value: "County Health: 2 hours" },
        { label: "Stakeholders identified", value: "6 people across 4 departments" },
      ],
      log: "Water Quality Agent activated → Compliance Agent cross-referenced EPA SDWA → Escalation path determined",
    },
    {
      phase: 3,
      name: "Notification",
      time: "02:14:12 AM",
      elapsed: "9s",
      icon: "📨",
      headline: "6 Stakeholders Notified Simultaneously",
      detail: "All relevant personnel received context-rich notifications through their preferred channel. No phone tree. No sequential calls.",
      data: [
        { label: "Plant Operator (on-shift)", value: "SMS + Dashboard — Acknowledged ✓" },
        { label: "Director of Operations", value: "SMS + Email — Acknowledged ✓" },
        { label: "Environmental Compliance Officer", value: "Email + SMS — Acknowledged ✓" },
        { label: "County Health Dept Liaison", value: "Email — Pending" },
        { label: "Field Supervisor (Zone A)", value: "SMS — Acknowledged ✓" },
        { label: "Lab Technician (on-call)", value: "SMS — Acknowledged ✓" },
      ],
      log: "Notification Agent dispatched 6 alerts across SMS + Email → 5/6 acknowledged within 90 seconds",
    },
    {
      phase: 4,
      name: "Coordination",
      time: "02:14:18 AM",
      elapsed: "15s",
      icon: "📅",
      headline: "Response Structure Built — Meeting Scheduled",
      detail: "Ownership assigned. Emergency coordination meeting created across all calendars with pre-populated agenda.",
      data: [
        { label: "Incident Commander", value: "Director of Operations" },
        { label: "Sample Collection", value: "Lab Technician — assigned" },
        { label: "Field Investigation", value: "Field Supervisor Zone A — assigned" },
        { label: "EPA Notification Draft", value: "Compliance Officer — assigned" },
        { label: "Meeting", value: "5:00 AM — All 6 stakeholders — Google Calendar invites sent" },
        { label: "Agenda", value: "Auto-generated: Source ID → Remediation → Public notification decision" },
      ],
      log: "Scheduling Agent checked 6 calendars → Emergency meeting created → Ownership matrix built → Agenda populated",
    },
    {
      phase: 5,
      name: "State Tracking",
      time: "02:14:18 AM → Ongoing",
      elapsed: "Live",
      icon: "📊",
      headline: "Live Coordination Timeline",
      detail: "Every action, acknowledgment, and update is tracked in real-time. Single source of truth for all stakeholders.",
      data: [
        { label: "02:14:03", value: "SCADA alert received — Turbidity 5.2 NTU" },
        { label: "02:14:07", value: "Severity assessed — Level 3 High" },
        { label: "02:14:12", value: "6 stakeholders notified" },
        { label: "02:14:18", value: "Response structure built, meeting at 5:00 AM" },
        { label: "02:16:41", value: "Lab Tech confirmed — heading to intake for samples" },
        { label: "02:22:08", value: "Field Supervisor on-site — visual inspection started" },
        { label: "02:34:15", value: "Turbidity reading update: 5.8 NTU (still rising)" },
        { label: "02:41:00", value: "Compliance Officer: EPA notification draft ready for review" },
      ],
      log: "State Tracking Agent maintaining live timeline → All updates logged with timestamps → Accessible to all stakeholders",
    },
    {
      phase: 6,
      name: "Compliance Docs",
      time: "02:14:18 AM",
      elapsed: "Auto-generating",
      icon: "📄",
      headline: "EPA SDWA Notification Auto-Generated",
      detail: "Compliance documentation started building the moment the incident was created. Pre-populated with facility data, readings, timeline, and regulatory references.",
      data: [
        { label: "Document", value: "EPA SDWA Tier 2 Public Notification" },
        { label: "Regulation", value: "40 CFR 141.203 — Turbidity MCL Violation" },
        { label: "Facility info", value: "Auto-populated from facility profile" },
        { label: "Readings", value: "Auto-populated from SCADA data" },
        { label: "Timeline", value: "Auto-populated from coordination log" },
        { label: "Status", value: "Draft ready — pending Compliance Officer review" },
      ],
      log: "Compliance Documentation Agent generated EPA notification → Cross-referenced 40 CFR 141 → Draft ready for human review",
    },
    {
      phase: 7,
      name: "Closure",
      time: "07:42:00 AM",
      elapsed: "5h 28m",
      icon: "✅",
      headline: "Incident Resolved — Audit-Ready Record Complete",
      detail: "Turbidity returned to normal after source was identified and remediated. Complete incident record with every action, decision, and notification timestamped.",
      data: [
        { label: "Resolution", value: "Sediment runoff from upstream construction — contained" },
        { label: "Final reading", value: "2.1 NTU (within normal range)" },
        { label: "EPA notification", value: "Submitted on-time — confirmed received" },
        { label: "County Health", value: "Notified within window — no public advisory needed" },
        { label: "Total coordination time", value: "15 seconds (vs 4-6 hours manual)" },
        { label: "Documentation", value: "Complete — exportable PDF, audit-ready" },
      ],
      log: "Incident #WQ-2026-0847 closed → Full audit trail generated → PDF exported → All stakeholders notified of resolution",
    },
  ],
};

const HEALTHCARE_SCENARIO = {
  title: "Hospital Facilities Incident",
  subtitle: "HVAC Failure in Surgical Wing",
  facility: "St. Mary's Regional Medical Center — 320 beds",
  system: "Bosch Climatic BMS — Air Handling Unit #3",
  phases: [
    {
      phase: 1,
      name: "Detection",
      time: "01:47:22 PM",
      elapsed: "0s",
      icon: "🔴",
      headline: "BMS Threshold Alert Received",
      detail: "Temperature in OR Suite 2 has exceeded the acceptable range for sterile surgical environments.",
      data: [
        { label: "Reading", value: "78.4°F (target: 68-72°F)" },
        { label: "Location", value: "OR Suite 2 — Surgical Wing, 3rd Floor" },
        { label: "Equipment", value: "AHU-3 — Primary air handling unit" },
        { label: "Trend", value: "Rising (72.1 → 75.3 → 78.4 in 22 min)" },
      ],
      log: "Bosch Climatic BMS webhook received → Alert parsed → Incident ID #FC-2026-0312 created",
    },
    {
      phase: 2,
      name: "Analysis",
      time: "01:47:26 PM",
      elapsed: "4s",
      icon: "🔍",
      headline: "Severity Assessed — Level 3 (High)",
      detail: "AI agent identified this as a sterile environment breach requiring multi-department coordination. Joint Commission EC standards triggered.",
      data: [
        { label: "Severity", value: "Level 3 — High (sterile environment compromise)" },
        { label: "Compliance trigger", value: "Joint Commission EC.02.05 — Utility Systems" },
        { label: "Secondary trigger", value: "Infection Control protocol — OR temperature breach" },
        { label: "Stakeholders identified", value: "7 people across 5 departments" },
        { label: "Surgery impact", value: "2 procedures scheduled in OR Suite 2 within 90 min" },
      ],
      log: "Hospital Operations Agent activated → Joint Commission Agent cross-referenced EC.02.05 → Infection Control Agent flagged sterile environment risk",
    },
    {
      phase: 3,
      name: "Notification",
      time: "01:47:31 PM",
      elapsed: "9s",
      icon: "📨",
      headline: "7 Stakeholders Notified Simultaneously",
      detail: "Facilities, Infection Control, Clinical Leadership, and Biomedical Engineering all notified with full context in under 10 seconds.",
      data: [
        { label: "Facilities Technician (on-shift)", value: "SMS + Teams — Acknowledged ✓" },
        { label: "Director of Facilities", value: "SMS + Email — Acknowledged ✓" },
        { label: "Infection Control Preventionist", value: "Email + Teams — Acknowledged ✓" },
        { label: "Surgical Services Director", value: "SMS — Acknowledged ✓" },
        { label: "Biomedical Engineering Lead", value: "SMS — Acknowledged ✓" },
        { label: "Chief Nursing Officer (3rd Floor)", value: "Teams — Pending" },
        { label: "Quality/Accreditation Manager", value: "Email — Acknowledged ✓" },
      ],
      log: "Notification Agent dispatched 7 alerts across SMS + Email + Teams → 6/7 acknowledged within 2 minutes",
    },
    {
      phase: 4,
      name: "Coordination",
      time: "01:47:38 PM",
      elapsed: "16s",
      icon: "📅",
      headline: "Response Structure Built — Surgery Schedule Flagged",
      detail: "Ownership assigned. Emergency meeting scheduled. Surgical Services alerted to evaluate the two upcoming procedures in OR Suite 2.",
      data: [
        { label: "Incident Commander", value: "Director of Facilities" },
        { label: "HVAC Repair", value: "Facilities Technician — dispatched to AHU-3" },
        { label: "Infection Risk Assessment", value: "Infection Control Preventionist — assigned" },
        { label: "Surgery Decision", value: "Surgical Services Director — evaluating postponement" },
        { label: "Equipment Check", value: "Biomedical Engineering — checking OR Suite 2 equipment" },
        { label: "Meeting", value: "2:15 PM — All stakeholders — Outlook 365 invites sent" },
        { label: "Backup plan", value: "OR Suite 4 identified as alternative (temp: 70.2°F ✓)" },
      ],
      log: "Scheduling Agent checked 7 calendars → Emergency meeting created → Ownership matrix built → OR schedule cross-referenced",
    },
    {
      phase: 5,
      name: "State Tracking",
      time: "01:47:38 PM → Ongoing",
      elapsed: "Live",
      icon: "📊",
      headline: "Live Coordination Timeline",
      detail: "Every department's actions tracked in real-time. No one needs to ask 'what's the status?' — it's visible to everyone.",
      data: [
        { label: "01:47:22", value: "BMS alert received — OR Suite 2 temp 78.4°F" },
        { label: "01:47:26", value: "Severity assessed — Level 3, EC.02.05 triggered" },
        { label: "01:47:31", value: "7 stakeholders notified" },
        { label: "01:47:38", value: "Response structure built, meeting at 2:15 PM" },
        { label: "01:52:14", value: "Facilities Tech on-site — AHU-3 compressor failure identified" },
        { label: "01:54:30", value: "Surgical Services: Case 1 moved to OR Suite 4, Case 2 delayed 1hr" },
        { label: "01:58:00", value: "Infection Control: environmental sampling initiated in OR Suite 2" },
        { label: "02:12:00", value: "Facilities: replacement compressor installed, AHU-3 restarting" },
        { label: "02:31:00", value: "OR Suite 2 temp returning to range: 73.1°F" },
        { label: "02:48:00", value: "Infection Control: clearance pending culture results (24hr)" },
      ],
      log: "State Tracking Agent maintaining live timeline → Cross-department visibility → No status calls needed",
    },
    {
      phase: 6,
      name: "Compliance Docs",
      time: "01:47:38 PM",
      elapsed: "Auto-generating",
      icon: "📄",
      headline: "Joint Commission Documentation Auto-Generated",
      detail: "EC.02.05 utility systems management documentation building in real-time from incident data. No manual Word docs. No reconstruction after the fact.",
      data: [
        { label: "Document 1", value: "EC.02.05 — Utility Systems Incident Report" },
        { label: "Document 2", value: "EC.02.06 — Medical Equipment Impact Assessment" },
        { label: "Document 3", value: "Infection Control Environmental Event Log" },
        { label: "Facility info", value: "Auto-populated from facility profile" },
        { label: "Timeline", value: "Auto-populated from coordination log" },
        { label: "Clinical impact", value: "Auto-populated: 2 cases rescheduled, 0 patient harm" },
        { label: "Status", value: "Drafts ready — pending Quality Manager review" },
      ],
      log: "Joint Commission Documentation Agent generated EC.02.05 + EC.02.06 reports → Infection Control log populated → All drafts ready for human review",
    },
    {
      phase: 7,
      name: "Closure",
      time: "03:15:00 PM",
      elapsed: "1h 28m",
      icon: "✅",
      headline: "Incident Resolved — Survey-Ready Record Complete",
      detail: "AHU-3 repaired. OR Suite 2 cleared for use (pending 24hr culture results). Complete incident record ready for Joint Commission survey.",
      data: [
        { label: "Resolution", value: "AHU-3 compressor replaced — system operational" },
        { label: "Final temp", value: "70.8°F (within target range)" },
        { label: "Patient impact", value: "2 cases rescheduled, 0 adverse events" },
        { label: "Infection Control", value: "Environmental cultures pending — 24hr follow-up scheduled" },
        { label: "Total coordination time", value: "16 seconds (vs 2-4 hours manual)" },
        { label: "Documentation", value: "EC.02.05, EC.02.06, IC log — complete, exportable, audit-ready" },
      ],
      log: "Incident #FC-2026-0312 closed → Joint Commission docs finalized → All stakeholders notified → 24hr follow-up auto-scheduled",
    },
  ],
};

const phaseColors = {
  1: { bg: "#FEE2E2", border: "#EF4444", text: "#991B1B" },
  2: { bg: "#FEF3C7", border: "#F59E0B", text: "#92400E" },
  3: { bg: "#DBEAFE", border: "#3B82F6", text: "#1E40AF" },
  4: { bg: "#E0E7FF", border: "#6366F1", text: "#3730A3" },
  5: { bg: "#F3E8FF", border: "#8B5CF6", text: "#5B21B6" },
  6: { bg: "#FFF7ED", border: "#F97316", text: "#9A3412" },
  7: { bg: "#D1FAE5", border: "#10B981", text: "#065F46" },
};

export default function ScenarioWalkthrough() {
  const [vertical, setVertical] = useState("water");
  const [currentPhase, setCurrentPhase] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLog, setShowLog] = useState(false);

  const scenario = vertical === "water" ? WATER_SCENARIO : HEALTHCARE_SCENARIO;

  const startDemo = useCallback(() => {
    setCurrentPhase(0);
    setIsPlaying(true);
  }, []);

  const resetDemo = useCallback(() => {
    setCurrentPhase(-1);
    setIsPlaying(false);
  }, []);

  const nextPhase = useCallback(() => {
    if (currentPhase < 6) setCurrentPhase((p) => p + 1);
    else setIsPlaying(false);
  }, [currentPhase]);

  const prevPhase = useCallback(() => {
    if (currentPhase > 0) setCurrentPhase((p) => p - 1);
  }, [currentPhase]);

  useEffect(() => {
    resetDemo();
  }, [vertical, resetDemo]);

  const phase = currentPhase >= 0 ? scenario.phases[currentPhase] : null;
  const colors = phase ? phaseColors[phase.phase] : null;

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", fontFamily: "'Inter', system-ui, sans-serif", color: "#1E293B", padding: "0 16px" }}>
      
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, color: "#0F5A8F", textTransform: "uppercase", marginBottom: 8 }}>
          Scenario Walkthrough
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 700, margin: "0 0 8px", color: "#0F5A8F" }}>
          7 Phases. One Unbroken Chain.
        </h1>
        <p style={{ fontSize: 15, color: "#64748B", margin: 0, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
          Watch a real incident flow through ChainSync — from the first sensor alert to a documented, audit-ready resolution.
        </p>
      </div>

      {/* Vertical Tabs */}
      <div style={{ display: "flex", gap: 0, marginBottom: 24, borderRadius: 10, overflow: "hidden", border: "1px solid #E2E8F0" }}>
        {[
          { id: "water", label: "Water Utility", sub: "Turbidity Spike" },
          { id: "healthcare", label: "Healthcare", sub: "HVAC Failure — Surgical Wing" },
        ].map((v) => (
          <button
            key={v.id}
            onClick={() => setVertical(v.id)}
            style={{
              flex: 1,
              padding: "14px 16px",
              border: "none",
              cursor: "pointer",
              background: vertical === v.id ? "#0F5A8F" : "#F8FAFC",
              color: vertical === v.id ? "#fff" : "#64748B",
              fontFamily: "inherit",
              transition: "all 0.2s",
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 600 }}>{v.label}</div>
            <div style={{ fontSize: 11, opacity: 0.8, marginTop: 2 }}>{v.sub}</div>
          </button>
        ))}
      </div>

      {/* Facility Info */}
      <div style={{ background: "#F8FAFC", borderRadius: 10, padding: "14px 20px", marginBottom: 24, border: "1px solid #E2E8F0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <div>
            <div style={{ fontSize: 11, color: "#94A3B8", fontWeight: 600, letterSpacing: 0.5 }}>FACILITY</div>
            <div style={{ fontSize: 14, fontWeight: 500 }}>{scenario.facility}</div>
          </div>
          <div>
            <div style={{ fontSize: 11, color: "#94A3B8", fontWeight: 600, letterSpacing: 0.5 }}>ALERT SOURCE</div>
            <div style={{ fontSize: 14, fontWeight: 500 }}>{scenario.system}</div>
          </div>
        </div>
      </div>

      {/* Phase Progress Bar */}
      {currentPhase >= 0 && (
        <div style={{ display: "flex", gap: 4, marginBottom: 24 }}>
          {scenario.phases.map((p, i) => (
            <div
              key={i}
              onClick={() => setCurrentPhase(i)}
              style={{
                flex: 1,
                height: 6,
                borderRadius: 3,
                background: i <= currentPhase ? phaseColors[p.phase].border : "#E2E8F0",
                cursor: "pointer",
                transition: "background 0.3s",
              }}
            />
          ))}
        </div>
      )}

      {/* Start State */}
      {currentPhase === -1 && (
        <div style={{ textAlign: "center", padding: "60px 20px", background: "#F8FAFC", borderRadius: 12, border: "1px solid #E2E8F0" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>
            {vertical === "water" ? "🌊" : "🏥"}
          </div>
          <h2 style={{ fontSize: 22, fontWeight: 600, margin: "0 0 8px" }}>{scenario.title}</h2>
          <p style={{ fontSize: 15, color: "#64748B", margin: "0 0 24px" }}>{scenario.subtitle}</p>
          <button
            onClick={startDemo}
            style={{
              padding: "12px 32px",
              background: "#0F5A8F",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Start Simulation →
          </button>
        </div>
      )}

      {/* Active Phase */}
      {phase && colors && (
        <div style={{ animation: "fadeIn 0.3s ease" }}>
          {/* Phase Header */}
          <div
            style={{
              background: colors.bg,
              border: `1px solid ${colors.border}`,
              borderRadius: 12,
              padding: "20px 24px",
              marginBottom: 16,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12, flexWrap: "wrap", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 24 }}>{phase.icon}</span>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: colors.text, letterSpacing: 1, textTransform: "uppercase" }}>
                    Phase {phase.phase} — {phase.name}
                  </div>
                  <div style={{ fontSize: 20, fontWeight: 700, color: colors.text, marginTop: 2 }}>
                    {phase.headline}
                  </div>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 11, color: colors.text, opacity: 0.7 }}>TIME</div>
                <div style={{ fontSize: 14, fontWeight: 600, fontFamily: "'Geist Mono', monospace", color: colors.text }}>
                  {phase.time}
                </div>
                <div style={{ fontSize: 12, color: colors.text, opacity: 0.7 }}>
                  +{phase.elapsed}
                </div>
              </div>
            </div>
            <p style={{ fontSize: 14, color: colors.text, margin: 0, lineHeight: 1.6 }}>
              {phase.detail}
            </p>
          </div>

          {/* Data Points */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #E2E8F0",
              borderRadius: 12,
              overflow: "hidden",
              marginBottom: 16,
            }}
          >
            {phase.data.map((d, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "12px 20px",
                  borderBottom: i < phase.data.length - 1 ? "1px solid #F1F5F9" : "none",
                  background: i % 2 === 0 ? "#fff" : "#FAFBFC",
                  gap: 16,
                  flexWrap: "wrap",
                }}
              >
                <div style={{ fontSize: 13, color: "#64748B", fontWeight: 500, minWidth: 160 }}>{d.label}</div>
                <div style={{ fontSize: 13, fontWeight: 500, color: "#1E293B", textAlign: "right", flex: 1 }}>{d.value}</div>
              </div>
            ))}
          </div>

          {/* System Log Toggle */}
          <button
            onClick={() => setShowLog(!showLog)}
            style={{
              background: "none",
              border: "1px solid #E2E8F0",
              borderRadius: 8,
              padding: "8px 16px",
              fontSize: 12,
              color: "#64748B",
              cursor: "pointer",
              fontFamily: "'Geist Mono', monospace",
              marginBottom: 8,
              width: "100%",
              textAlign: "left",
            }}
          >
            {showLog ? "▼" : "▶"} System Log
          </button>
          {showLog && (
            <div
              style={{
                background: "#1E293B",
                borderRadius: 8,
                padding: "14px 18px",
                fontFamily: "'Geist Mono', monospace",
                fontSize: 12,
                color: "#94A3B8",
                lineHeight: 1.8,
                marginBottom: 16,
              }}
            >
              <span style={{ color: "#22C55E" }}>&gt;</span> {phase.log}
            </div>
          )}

          {/* Navigation */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20, gap: 12 }}>
            <button
              onClick={prevPhase}
              disabled={currentPhase === 0}
              style={{
                padding: "10px 20px",
                background: currentPhase === 0 ? "#F1F5F9" : "#fff",
                color: currentPhase === 0 ? "#CBD5E1" : "#0F5A8F",
                border: "1px solid #E2E8F0",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 500,
                cursor: currentPhase === 0 ? "default" : "pointer",
                fontFamily: "inherit",
              }}
            >
              ← Previous
            </button>

            <div style={{ fontSize: 13, color: "#94A3B8", fontWeight: 500 }}>
              {currentPhase + 1} of 7
            </div>

            {currentPhase < 6 ? (
              <button
                onClick={nextPhase}
                style={{
                  padding: "10px 20px",
                  background: "#0F5A8F",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                Next Phase →
              </button>
            ) : (
              <button
                onClick={resetDemo}
                style={{
                  padding: "10px 20px",
                  background: "#2D7A4A",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                Restart ↺
              </button>
            )}
          </div>

          {/* End CTA */}
          {currentPhase === 6 && (
            <div style={{ textAlign: "center", marginTop: 32, padding: "24px 20px", background: "#F0F7FF", borderRadius: 12, border: "1px solid #BFDBFE" }}>
              <div style={{ fontSize: 16, fontWeight: 600, color: "#0F5A8F", marginBottom: 6 }}>
                {vertical === "water" ? "15 seconds" : "16 seconds"} to full coordination.
              </div>
              <div style={{ fontSize: 14, color: "#64748B", marginBottom: 16 }}>
                {vertical === "water" ? "Not 4-6 hours." : "Not 2-4 hours."} Same people. Same systems. Automated coordination.
              </div>
              <button
                onClick={() => window.open("https://www.getchainsync.com/contact", "_blank")}
                style={{
                  padding: "12px 28px",
                  background: "#0F5A8F",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                Apply for Founding Partnership
              </button>
            </div>
          )}
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
