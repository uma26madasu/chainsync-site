import { useState, useEffect, useCallback } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { usePortal } from "@/contexts/PortalContext";
import PortalLayout from "@/components/portal/PortalLayout";
import { API_URL } from "@/config/api";
import type { Incident } from "@/types/portal";
import { relativeTime, SEVERITY_CONFIG, PHASE_ORDER } from "@/lib/portalUtils";
import { stagger, fadeUp } from "@/lib/motion";

const REFRESH_INTERVAL = 30_000;

function SeverityDot({ severity }: { severity: Incident["severity"] }) {
  const cfg = SEVERITY_CONFIG[severity] ?? SEVERITY_CONFIG.low;
  return (
    <span className="flex items-center gap-1.5">
      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: cfg.dot }} />
      <span className={`text-xs font-semibold px-1.5 py-0.5 rounded border ${cfg.badge}`}>
        {cfg.label}
      </span>
    </span>
  );
}

function PhaseBar({ currentPhase }: { currentPhase: number }) {
  return (
    <div className="flex gap-0.5">
      {PHASE_ORDER.map((_, i) => (
        <div
          key={i}
          className="flex-1 h-1.5 rounded-sm"
          style={{ backgroundColor: i < currentPhase ? "#0F5A8F" : "#E2E8F0" }}
        />
      ))}
    </div>
  );
}

function IncidentCard({ incident }: { incident: Incident }) {
  const [, navigate] = useLocation();
  const alertLabel = incident.equipment_name
    ? `${incident.equipment_name} — ${incident.location}`
    : `${incident.source_system} alert — ${incident.location}`;

  return (
    <motion.div variants={fadeUp} whileHover={{ y: -2, transition: { duration: 0.12 } }}>
      <Card
        className="p-4 bg-white border border-border cursor-pointer hover:shadow-md transition-shadow"
        onClick={() => navigate(`/portal/incidents/${incident.incident_id}`)}
      >
        <div className="flex items-start justify-between gap-3 mb-3">
          <SeverityDot severity={incident.severity} />
          <span className="text-xs text-muted-foreground whitespace-nowrap">
            {relativeTime(incident.created_at)}
          </span>
        </div>

        <p className="text-sm font-semibold text-foreground mb-1 leading-snug">{alertLabel}</p>

        {incident.reading && incident.threshold && (
          <p className="text-xs text-muted-foreground mb-3">
            {incident.reading}{" "}
            <span className="text-muted-foreground/70">(threshold: {incident.threshold})</span>
          </p>
        )}

        <div className="mb-2">
          <PhaseBar currentPhase={incident.current_phase} />
        </div>

        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-muted-foreground">
            Phase {incident.current_phase}/7
          </span>
          <span className="text-xs font-medium text-foreground">
            {incident.acknowledged_count}/{incident.stakeholder_count} acknowledged
          </span>
        </div>
      </Card>
    </motion.div>
  );
}

function IncidentListSkeleton() {
  return (
    <div className="space-y-3">
      {[1, 2, 3].map((i) => (
        <Card key={i} className="p-4 bg-white border border-border">
          <div className="flex justify-between mb-3">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-16" />
          </div>
          <Skeleton className="h-4 w-3/4 mb-2" />
          <Skeleton className="h-3 w-1/2 mb-3" />
          <Skeleton className="h-1.5 w-full mb-2" />
          <div className="flex justify-between">
            <Skeleton className="h-3 w-12" />
            <Skeleton className="h-3 w-20" />
          </div>
        </Card>
      ))}
    </div>
  );
}

function EmptyState() {
  return (
    <Card className="p-8 bg-white border border-border text-center">
      <p className="text-sm text-muted-foreground">
        No incidents recorded yet. When your monitoring system sends an alert, it will appear here.
      </p>
    </Card>
  );
}

function ErrorState({ onRetry }: { onRetry: () => void }) {
  return (
    <Card className="p-6 bg-white border border-border text-center">
      <p className="text-sm text-muted-foreground mb-3">Failed to load incidents.</p>
      <Button variant="outline" size="sm" onClick={onRetry}>Retry</Button>
    </Card>
  );
}

function IncidentTab({ incidents, loading, error, onRetry }: {
  incidents: Incident[];
  loading: boolean;
  error: boolean;
  onRetry: () => void;
}) {
  if (loading) return <IncidentListSkeleton />;
  if (error) return <ErrorState onRetry={onRetry} />;
  if (incidents.length === 0) return <EmptyState />;

  return (
    <motion.div
      className="space-y-3"
      variants={stagger}
      initial="hidden"
      animate="visible"
    >
      {incidents.map((inc) => (
        <IncidentCard key={inc.incident_id} incident={inc} />
      ))}
    </motion.div>
  );
}

export default function PortalIncidentList() {
  const { isAuthenticated, facilityId } = usePortal();
  const [, navigate] = useLocation();

  const [activeIncidents, setActiveIncidents] = useState<Incident[]>([]);
  const [closedIncidents, setClosedIncidents] = useState<Incident[]>([]);
  const [loadingActive, setLoadingActive] = useState(true);
  const [loadingClosed, setLoadingClosed] = useState(true);
  const [errorActive, setErrorActive] = useState(false);
  const [errorClosed, setErrorClosed] = useState(false);

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) navigate("/portal");
  }, [isAuthenticated, navigate]);

  const fetchActive = useCallback(async () => {
    if (!facilityId) return;
    setErrorActive(false);
    try {
      const res = await fetch(`${API_URL}/portal/${facilityId}/incidents?status=active`);
      if (!res.ok) throw new Error("fetch failed");
      const data = await res.json();
      setActiveIncidents(data);
    } catch {
      setErrorActive(true);
    } finally {
      setLoadingActive(false);
    }
  }, [facilityId]);

  const fetchClosed = useCallback(async () => {
    if (!facilityId) return;
    setErrorClosed(false);
    try {
      const res = await fetch(`${API_URL}/portal/${facilityId}/incidents?status=closed`);
      if (!res.ok) throw new Error("fetch failed");
      const data = await res.json();
      setClosedIncidents(data);
    } catch {
      setErrorClosed(true);
    } finally {
      setLoadingClosed(false);
    }
  }, [facilityId]);

  useEffect(() => {
    fetchActive();
    fetchClosed();
  }, [fetchActive, fetchClosed]);

  // Auto-refresh every 30 seconds
  useEffect(() => {
    const id = setInterval(() => {
      fetchActive();
      fetchClosed();
    }, REFRESH_INTERVAL);
    return () => clearInterval(id);
  }, [fetchActive, fetchClosed]);

  return (
    <PortalLayout>
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-foreground">Incidents</h1>
          <span className="text-xs text-muted-foreground">Auto-refreshes every 30s</span>
        </div>

        <Tabs defaultValue="active">
          <TabsList className="mb-4">
            <TabsTrigger value="active">
              Active
              {activeIncidents.length > 0 && (
                <span className="ml-1.5 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                  {activeIncidents.length}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value="resolved">Resolved</TabsTrigger>
          </TabsList>

          <TabsContent value="active">
            <IncidentTab
              incidents={activeIncidents}
              loading={loadingActive}
              error={errorActive}
              onRetry={() => { setLoadingActive(true); fetchActive(); }}
            />
          </TabsContent>

          <TabsContent value="resolved">
            <IncidentTab
              incidents={closedIncidents}
              loading={loadingClosed}
              error={errorClosed}
              onRetry={() => { setLoadingClosed(true); fetchClosed(); }}
            />
          </TabsContent>
        </Tabs>
      </div>
    </PortalLayout>
  );
}
