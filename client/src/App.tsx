import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { PortalProvider } from "./contexts/PortalContext";
import { lazy, Suspense, useEffect } from "react";
import Home from "./pages/Home";
import { seoPages } from "@shared/seo";
const About = lazy(() => import("./pages/About"));
const ScenarioWalkthrough = lazy(() => import("./pages/ScenarioWalkthrough"));
const UseCases = lazy(() => import("./pages/UseCases"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const Technology = lazy(() => import("./pages/Technology"));
const Roadmaps = lazy(() => import("./pages/Roadmaps"));
const Insights = lazy(() => import("./pages/Insights"));
const Contact = lazy(() => import("./pages/Contact"));
const Industry = lazy(() => import("./pages/Industry"));
const PilotProgram = lazy(() => import("./pages/PilotProgram"));
const Partnerships = lazy(() => import("./pages/Partnerships"));
const Security = lazy(() => import("./pages/Security"));
const Privacy = lazy(() => import("./pages/Privacy"));
const PortalEntry = lazy(() => import("./pages/portal/PortalEntry"));
const PortalIncidentList = lazy(
  () => import("./pages/portal/PortalIncidentList")
);
const PortalIncidentDetail = lazy(
  () => import("./pages/portal/PortalIncidentDetail")
);
function RouteMetadata() {
  const [path] = useLocation();
  useEffect(() => {
    const canonicalPath = path.replace(/\/+$/, "") || "/";
    const page = seoPages[canonicalPath];
    const title = page?.title || "Page not found | ChainSync";
    document.title = title;
    const set = (selector: string, attr: string, value: string) => {
      document.querySelector(selector)?.setAttribute(attr, value);
    };
    set(
      'meta[name="description"]',
      "content",
      page?.description || "Explore ChainSync incident coordination."
    );
    set('meta[property="og:title"]', "content", title);
    set('meta[property="og:description"]', "content", page?.description || "");
    set(
      'meta[property="og:url"]',
      "content",
      `https://www.getchainsync.com${canonicalPath}`
    );
    set(
      'link[rel="canonical"]',
      "href",
      `https://www.getchainsync.com${canonicalPath}`
    );
    set(
      'meta[name="robots"]',
      "content",
      page ? "index,follow" : "noindex,nofollow"
    );
    document.getElementById("organization-schema")?.remove();
    if (canonicalPath === "/") {
      const script = document.createElement("script");
      script.id = "organization-schema";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "ChainSync",
        url: "https://www.getchainsync.com",
        logo: "https://www.getchainsync.com/logo.png",
      });
      document.head.appendChild(script);
    }
    window.scrollTo(0, 0);
  }, [path]);
  return null;
}
// Portal routes are wrapped in PortalProvider but NOT in the main AnimatePresence/motion
// to keep them independent from the marketing site transitions.
function PortalRouter() {
  return (
    <PortalProvider>
      <Switch>
        <Route path={"/portal"} component={PortalEntry} />
        <Route path={"/portal/incidents"} component={PortalIncidentList} />
        <Route
          path={"/portal/incidents/:id"}
          component={PortalIncidentDetail}
        />
        <Route component={NotFound} />
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
          <Route path="/contact" component={Contact} />
          <Route path="/industries/water-wastewater">
            <Industry />
          </Route>
          <Route path="/industries/healthcare-facilities">
            <Industry healthcare />
          </Route>
          <Route path="/pilot-program" component={PilotProgram} />
          <Route path="/partnerships" component={Partnerships} />
          <Route path="/security" component={Security} />
          <Route path="/privacy" component={Privacy} />
          <Route path={"/404"} component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </motion.div>
    </AnimatePresence>
  );
}

function Router() {
  const [location] = useLocation();
  if (/^\/portal(?:\/|$)/.test(location)) {
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
            <RouteMetadata />
            <Suspense
              fallback={
                <div role="status" className="container py-12">
                  Loading page…
                </div>
              }
            >
              <Router />
            </Suspense>
            <Analytics />
          </MotionConfig>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
