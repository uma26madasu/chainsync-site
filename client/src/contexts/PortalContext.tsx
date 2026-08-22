import { createContext, useContext, useState, ReactNode } from "react";

interface PortalState {
  isAuthenticated: boolean;
  facilityId: string | null;
  facilityName: string | null;
  facilityType: string | null;
}

interface PortalContextValue extends PortalState {
  login: (facilityId: string, facilityName: string, facilityType: string) => void;
  logout: () => void;
}

const PortalContext = createContext<PortalContextValue | null>(null);

const INITIAL_STATE: PortalState = {
  isAuthenticated: false,
  facilityId: null,
  facilityName: null,
  facilityType: null,
};

export function PortalProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<PortalState>(INITIAL_STATE);

  function login(facilityId: string, facilityName: string, facilityType: string) {
    setState({ isAuthenticated: true, facilityId, facilityName, facilityType });
  }

  function logout() {
    setState(INITIAL_STATE);
  }

  return (
    <PortalContext.Provider value={{ ...state, login, logout }}>
      {children}
    </PortalContext.Provider>
  );
}

export function usePortal(): PortalContextValue {
  const ctx = useContext(PortalContext);
  if (!ctx) throw new Error("usePortal must be used inside PortalProvider");
  return ctx;
}
