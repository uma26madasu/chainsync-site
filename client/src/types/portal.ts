export interface Incident {
  incident_id: string;
  severity: "critical" | "high" | "medium" | "low";
  status: string;
  current_phase: number;
  source_system: string;
  equipment_name?: string;
  location: string;
  reading?: string;
  threshold?: string;
  created_at: string;
  closed_at?: string;
  resolution?: string;
  stakeholder_count: number;
  acknowledged_count: number;
}

export interface TimelineEvent {
  event_id: string;
  phase: string;
  timestamp: string;
  title: string;
  detail?: string;
}

export interface Stakeholder {
  stakeholder_id: string;
  name: string;
  role: string;
  department: string;
  acknowledged: boolean;
  acknowledged_at?: string;
}

export interface ComplianceDocument {
  doc_id: string;
  doc_type: string;
  title: string;
  status: "draft" | "reviewed" | "submitted";
  created_at: string;
}

export interface IncidentDetail extends Incident {
  timeline: TimelineEvent[];
  stakeholders: Stakeholder[];
  documents: ComplianceDocument[];
}
