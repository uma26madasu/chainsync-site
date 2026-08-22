export function relativeTime(isoString: string): string {
  const diff = Date.now() - new Date(isoString).getTime();
  const seconds = Math.floor(diff / 1000);
  if (seconds < 60) return `${seconds}s ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  const days = Math.floor(hours / 24);
  return `${days} day${days !== 1 ? "s" : ""} ago`;
}

export function formatDuration(startIso: string, endIso: string): string {
  const diffMs = new Date(endIso).getTime() - new Date(startIso).getTime();
  const totalSeconds = Math.floor(diffMs / 1000);
  if (totalSeconds < 60) return `${totalSeconds} seconds`;
  const minutes = Math.floor(totalSeconds / 60);
  if (minutes < 60) return `${minutes} minute${minutes !== 1 ? "s" : ""}`;
  const hours = Math.floor(minutes / 60);
  const remainingMin = minutes % 60;
  if (remainingMin === 0) return `${hours} hour${hours !== 1 ? "s" : ""}`;
  return `${hours} hour${hours !== 1 ? "s" : ""} ${remainingMin} minute${remainingMin !== 1 ? "s" : ""}`;
}

export function formatTimestamp(isoString: string): string {
  return new Date(isoString).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

export function formatAbsolute(isoString: string): string {
  return new Date(isoString).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

export const SEVERITY_CONFIG = {
  critical: { dot: "#EF4444", label: "Critical", badge: "bg-red-100 text-red-700 border-red-200" },
  high:     { dot: "#F97316", label: "High",     badge: "bg-orange-100 text-orange-700 border-orange-200" },
  medium:   { dot: "#F59E0B", label: "Medium",   badge: "bg-amber-100 text-amber-700 border-amber-200" },
  low:      { dot: "#22C55E", label: "Low",       badge: "bg-green-100 text-green-700 border-green-200" },
} as const;

export const PHASE_COLORS: Record<string, string> = {
  detection:       "#EF4444",
  analysis:        "#F59E0B",
  notification:    "#3B82F6",
  coordination:    "#6366F1",
  state_tracking:  "#8B5CF6",
  compliance_docs: "#F97316",
  closure:         "#10B981",
};

export const PHASE_ORDER = [
  "detection",
  "analysis",
  "notification",
  "coordination",
  "state_tracking",
  "compliance_docs",
  "closure",
];
