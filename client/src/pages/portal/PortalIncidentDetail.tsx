import { useState, useEffect, useCallback } from "react";
import { useLocation, useRoute } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { usePortal } from "@/contexts/PortalContext";
import PortalLayout from "@/components/portal/PortalLayout";
import { API_URL } from "@/config/api";
import type { IncidentDetail, TimelineEvent, Stakeholder, ComplianceDocument } from "@/types/portal";
import {
  relativeTime,
  formatAbsolute,
  formatTimestamp,
  formatDuration,
  SEVERITY_CONFIG,
  PHASE_COLORS,
  PHASE_ORDER,
} from "@/lib/portalUtils";
import { stagger, fadeUp } from "@/lib/motion";

const REFRESH_INTERVAL = 15_000;

// ---- Severity badge ----
function SeverityBadge({ severity }: { severity: IncidentDetail["severity"] }) {
  const cfg = SEVERITY_CONFIG[severity] ?? SEVERITY_CONFIG.low;
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2 py-1 rounded border ${cfg.badge}`}>
      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cfg.dot }} />
      {cfg.label}
    </span>
  );
}

// ---- Summary card ----
function SummaryCard({ incident }: { incident: IncidentDetail }) {
  const alertLabel = incident.equipment_name
    ? `${incident.equipment_name} — ${incident.location}`
    : `${incident.source_system} alert — ${incident.location}`;

  return (
    <Card className="p-5 bg-white border border-border mb-4">
      <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
        <div>
          <p className="text-xs text-muted-foreground font-mono mb-1">#{incident.incident_id}</p>
          <h2 className="text-lg font-bold text-foreground leading-snug">{alertLabel}</h2>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <SeverityBadge severity={incident.severity} />
          <Badge variant="outline" className="text-xs font-semibold capitalize">
            {incident.status}
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
        <div>
          <p className="text-xs text-muted-foreground mb-0.5">Source System</p>
          <p className="font-medium text-foreground">{incident.source_system}</p>
        </div>
        {incident.equipment_name && (
          <div>
            <p className="text-xs text-muted-foreground mb-0.5">Equipment</p>
            <p className="font-medium text-foreground">{incident.equipment_name}</p>
          </div>
        )}
        <div>
          <p className="text-xs text-muted-foreground mb-0.5">Location</p>
          <p className="font-medium text-foreground">{incident.location}</p>
        </div>
        {incident.reading && (
          <div>
            <p className="text-xs text-muted-foreground mb-0.5">Reading</p>
            <p className="font-medium text-foreground">
              {incident.reading}
              {incident.threshold && (
                <span className="text-muted-foreground font-normal"> (threshold: {incident.threshold})</span>
              )}
            </p>
          </div>
        )}
        <div>
          <p className="text-xs text-muted-foreground mb-0.5">Created</p>
          <p className="font-medium text-foreground">
            {formatAbsolute(incident.created_at)}{" "}
            <span className="text-muted-foreground font-normal">({relativeTime(incident.created_at)})</span>
          </p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-0.5">Phase</p>
          <p className="font-medium text-foreground">{incident.current_phase} / 7</p>
        </div>
      </div>

      {incident.closed_at && (
        <div className="mt-4 pt-4 border-t border-border grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
          {incident.resolution && (
            <div className="md:col-span-2">
              <p className="text-xs text-muted-foreground mb-0.5">Resolution</p>
              <p className="font-medium text-foreground">{incident.resolution}</p>
            </div>
          )}
          <div>
            <p className="text-xs text-muted-foreground mb-0.5">Total Coordination Time</p>
            <p className="font-semibold text-green-700">
              {formatDuration(incident.created_at, incident.closed_at)}
            </p>
          </div>
        </div>
      )}
    </Card>
  );
}

// ---- Timeline ----
function TimelineEntry({ event, index }: { event: TimelineEvent; index: number }) {
  const color = PHASE_COLORS[event.phase] ?? "#94A3B8";
  return (
    <motion.div
      variants={fadeUp}
      className="flex gap-4"
    >
      {/* Dot + line */}
      <div className="flex flex-col items-center">
        <div
          className="w-3 h-3 rounded-full flex-shrink-0 mt-1 ring-2 ring-white"
          style={{ backgroundColor: color }}
        />
        {index < 999 && <div className="w-0.5 flex-grow mt-1" style={{ backgroundColor: `${color}33` }} />}
      </div>

      {/* Content */}
      <div className="pb-5 flex-grow min-w-0">
        <div className="flex items-center gap-2 flex-wrap mb-1">
          <span
            className="text-xs font-mono font-semibold"
            style={{ color }}
          >
            {formatTimestamp(event.timestamp)}
          </span>
          <span className="text-xs px-1.5 py-0.5 rounded font-medium capitalize"
            style={{ backgroundColor: `${color}18`, color }}>
            {event.phase.replace("_", " ")}
          </span>
        </div>
        <p className="text-sm font-semibold text-foreground leading-snug">{event.title}</p>
        {event.detail && (
          <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{event.detail}</p>
        )}
      </div>
    </motion.div>
  );
}

function Timeline({ events }: { events: TimelineEvent[] }) {
  if (events.length === 0) {
    return (
      <p className="text-sm text-muted-foreground text-center py-4">
        No timeline events yet.
      </p>
    );
  }

  // Sort by phase order then timestamp
  const sorted = [...events].sort((a, b) => {
    const ai = PHASE_ORDER.indexOf(a.phase);
    const bi = PHASE_ORDER.indexOf(b.phase);
    if (ai !== bi) return ai - bi;
    return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
  });

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="visible"
      className="pt-1"
    >
      {sorted.map((ev, i) => (
        <TimelineEntry key={ev.event_id} event={ev} index={i} />
      ))}
    </motion.div>
  );
}

// ---- Stakeholder row ----
function StakeholderRow({ s }: { s: Stakeholder }) {
  return (
    <div className="flex items-center justify-between gap-3 py-3 border-b border-border last:border-0">
      <div className="min-w-0">
        <p className="text-sm font-semibold text-foreground truncate">{s.name}</p>
        <p className="text-xs text-muted-foreground">{s.role} — {s.department}</p>
      </div>
      <div className="flex-shrink-0">
        {s.acknowledged ? (
          <div className="flex flex-col items-end">
            <span className="flex items-center gap-1 text-xs font-semibold text-green-700">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Acknowledged
            </span>
            {s.acknowledged_at && (
              <span className="text-xs text-muted-foreground">{formatTimestamp(s.acknowledged_at)}</span>
            )}
          </div>
        ) : (
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-slate-300" />
            Pending
          </span>
        )}
      </div>
    </div>
  );
}

// ---- Document row ----
const DOC_TYPE_CONFIG: Record<string, { label: string; color: string }> = {
  "epa_sdwa":       { label: "EPA SDWA",       color: "bg-blue-100 text-blue-700 border-blue-200" },
  "ec_02_05":       { label: "EC.02.05",        color: "bg-purple-100 text-purple-700 border-purple-200" },
  "ec_02_06":       { label: "EC.02.06",        color: "bg-indigo-100 text-indigo-700 border-indigo-200" },
  "incident_report":{ label: "Incident Report", color: "bg-slate-100 text-slate-700 border-slate-200" },
};

const STATUS_CONFIG = {
  draft:     "bg-amber-50 text-amber-700 border-amber-200",
  reviewed:  "bg-green-50 text-green-700 border-green-200",
  submitted: "bg-blue-50 text-blue-700 border-blue-200",
};

function DocumentRow({
  doc,
  facilityId,
  incidentId,
}: {
  doc: ComplianceDocument;
  facilityId: string;
  incidentId: string;
}) {
  const typeConfig = DOC_TYPE_CONFIG[doc.doc_type] ?? { label: doc.doc_type, color: "bg-slate-100 text-slate-700 border-slate-200" };
  const statusClass = STATUS_CONFIG[doc.status] ?? STATUS_CONFIG.draft;
  const pdfUrl = `${API_URL}/portal/${facilityId}/incidents/${incidentId}/documents/${doc.doc_type}/pdf`;

  return (
    <div className="flex items-start justify-between gap-3 py-3 border-b border-border last:border-0">
      <div className="min-w-0 flex-grow">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <span className={`text-xs font-semibold px-1.5 py-0.5 rounded border ${typeConfig.color}`}>
            {typeConfig.label}
          </span>
          <span className={`text-xs font-medium px-1.5 py-0.5 rounded border capitalize ${statusClass}`}>
            {doc.status}
          </span>
        </div>
        <p className="text-sm text-foreground font-medium truncate">{doc.title}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{relativeTime(doc.created_at)}</p>
      </div>
      <Button
        variant="outline"
        size="sm"
        className="h-7 px-2.5 text-xs flex-shrink-0"
        onClick={() => window.open(pdfUrl, "_blank")}
      >
        Download PDF
      </Button>
    </div>
  );
}

// ---- Detail skeleton ----
function DetailSkeleton() {
  return (
    <div className="space-y-4">
      <Card className="p-5 bg-white border border-border">
        <Skeleton className="h-5 w-48 mb-3" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-3/4" />
      </Card>
      <Card className="p-5 bg-white border border-border">
        <Skeleton className="h-4 w-32 mb-4" />
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex gap-4 mb-4">
            <Skeleton className="w-3 h-3 rounded-full mt-1 flex-shrink-0" />
            <div className="flex-grow">
              <Skeleton className="h-3 w-24 mb-2" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}

// ---- Main page ----
export default function PortalIncidentDetail() {
  const { isAuthenticated, facilityId } = usePortal();
  const [, navigate] = useLocation();
  const [, params] = useRoute("/portal/incidents/:id");
  const incidentId = params?.id ?? "";

  const [incident, setIncident] = useState<IncidentDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) navigate("/portal");
  }, [isAuthenticated, navigate]);

  const fetchDetail = useCallback(async () => {
    if (!facilityId || !incidentId) return;
    setError(false);
    try {
      const res = await fetch(`${API_URL}/portal/${facilityId}/incidents/${incidentId}`);
      if (!res.ok) throw new Error("fetch failed");
      const data: IncidentDetail = await res.json();
      setIncident(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [facilityId, incidentId]);

  useEffect(() => {
    fetchDetail();
  }, [fetchDetail]);

  // Auto-refresh every 15 seconds
  useEffect(() => {
    const id = setInterval(fetchDetail, REFRESH_INTERVAL);
    return () => clearInterval(id);
  }, [fetchDetail]);

  return (
    <PortalLayout>
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <button
          onClick={() => navigate("/portal/incidents")}
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
        >
          <span>&#8592;</span> Back to incidents
        </button>

        {loading && <DetailSkeleton />}

        {error && !loading && (
          <Card className="p-6 bg-white border border-border text-center">
            <p className="text-sm text-muted-foreground mb-3">Failed to load incident details.</p>
            <Button variant="outline" size="sm" onClick={() => { setLoading(true); fetchDetail(); }}>
              Retry
            </Button>
          </Card>
        )}

        {incident && !loading && (
          <AnimatePresence mode="wait">
            <motion.div
              key={incident.incident_id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {/* Section A: Summary */}
              <SummaryCard incident={incident} />

              {/* Section B: Timeline */}
              <Card className="p-5 bg-white border border-border mb-4">
                <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide">
                  Coordination Timeline
                </h3>
                <Timeline events={incident.timeline} />
              </Card>

              {/* Section C: Stakeholders + Documents */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Stakeholders */}
                <Card className="p-5 bg-white border border-border">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-bold text-foreground uppercase tracking-wide">
                      Stakeholders
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {incident.stakeholders.filter((s) => s.acknowledged).length}/{incident.stakeholders.length} acknowledged
                    </span>
                  </div>
                  {incident.stakeholders.length === 0 ? (
                    <p className="text-sm text-muted-foreground py-2">No stakeholders assigned yet.</p>
                  ) : (
                    <div>
                      {incident.stakeholders.map((s) => (
                        <StakeholderRow key={s.stakeholder_id} s={s} />
                      ))}
                    </div>
                  )}
                </Card>

                {/* Documents */}
                <Card className="p-5 bg-white border border-border">
                  <h3 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wide">
                    Compliance Documents
                  </h3>
                  {incident.documents.length === 0 ? (
                    <p className="text-sm text-muted-foreground py-2">
                      Compliance documents will appear here as the incident progresses.
                    </p>
                  ) : (
                    <div>
                      {incident.documents.map((doc) => (
                        <DocumentRow
                          key={doc.doc_id}
                          doc={doc}
                          facilityId={facilityId!}
                          incidentId={incidentId}
                        />
                      ))}
                    </div>
                  )}
                </Card>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </PortalLayout>
  );
}
