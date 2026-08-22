import { useLocation } from "wouter";
import { usePortal } from "@/contexts/PortalContext";
import { Button } from "@/components/ui/button";

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  const { facilityName, logout } = usePortal();
  const [, navigate] = useLocation();

  function handleExit() {
    logout();
    navigate("/portal");
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Portal header */}
      <header
        style={{ backgroundColor: "#0F5A8F" }}
        className="flex items-center justify-between px-4 md:px-6 py-3 shrink-0"
      >
        {/* Logo */}
        <button
          onClick={handleExit}
          className="flex items-center gap-2 cursor-pointer"
          aria-label="Exit portal"
        >
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded bg-white/20 flex items-center justify-center">
              <span className="text-white font-bold text-xs">CS</span>
            </div>
            <span className="text-white font-semibold text-sm tracking-tight">ChainSync</span>
          </div>
          <span className="text-white/40 text-xs ml-1 hidden sm:inline">Portal</span>
        </button>

        {/* Facility name */}
        {facilityName && (
          <span className="text-white/90 text-sm font-medium truncate max-w-[200px] md:max-w-xs text-center">
            {facilityName}
          </span>
        )}

        {/* Exit button */}
        <Button
          variant="outline"
          size="sm"
          onClick={handleExit}
          className="text-white border-white/30 bg-transparent hover:bg-white/10 hover:text-white text-xs h-7 px-3"
        >
          Exit Portal
        </Button>
      </header>

      {/* Content */}
      <main className="flex-grow p-4 md:p-6">
        {children}
      </main>
    </div>
  );
}
