import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { PortalProvider } from "./contexts/PortalContext";
import Home from "./pages/Home";
import About from "./pages/About";
import ScenarioWalkthrough from "./pages/ScenarioWalkthrough";
import UseCases from "./pages/UseCases";
import HowItWorks from "./pages/HowItWorks";
import Technology from "./pages/Technology";
import Roadmaps from "./pages/Roadmaps";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import PortalEntry from "./pages/portal/PortalEntry";
import PortalIncidentList from "./pages/portal/PortalIncidentList";
import PortalIncidentDetail from "./pages/portal/PortalIncidentDetail";

// Portal routes are wrapped in PortalProvider but NOT in the main AnimatePresence/motion
// to keep them independent from the marketing site transitions.
function PortalRouter() {
  return (
    <PortalProvider>
      <Switch>
        <Route path={"/portal"} component={PortalEntry} />
        <Route path={"/portal/incidents"} component={PortalIncidentList} />
        <Route path={"/portal/incidents/:id"} component={PortalIncidentDetail} />
      </Switch>
    </PortalProvider>
  );
}

function MarketingRouter() {
  const [location] = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
        <Switch>
          <Route path={"/"} component={Home} />
          <Route path={"/about"} component={About} />
          <Route path={"/walkthrough"} component={ScenarioWalkthrough} />
          <Route path={"/use-cases"} component={UseCases} />
          <Route path={"/how-it-works"} component={HowItWorks} />
          <Route path={"/technology"} component={Technology} />
          <Route path={"/roadmaps"} component={Roadmaps} />
          <Route path={"/insights"} component={Insights} />
          <Route path={"/contact"} component={Contact} />
          <Route path={"/404"} component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </motion.div>
    </AnimatePresence>
  );
}

function Router() {
  const [location] = useLocation();
  if (location.startsWith("/portal")) {
    return <PortalRouter />;
  }
  return <MarketingRouter />;
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <MotionConfig reducedMotion="user">
            <Toaster />
            <Router />
          </MotionConfig>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
