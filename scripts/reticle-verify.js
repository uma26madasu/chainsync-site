/**
 * Post-agent verification script (Reticle replacement).
 * @reticle/mcp and @reticle/sdk are not published to npm, so this
 * script replicates the intent using Node 18+ built-in fetch.
 *
 * Checks:
 *   1. App root (/) returns HTTP 200
 *   2. HTML shell contains the React mount point (#root)
 *   3. HTML shell references a built JS bundle (confirms Vite output)
 *   4. Key marketing routes return 200 (not 404/500)
 *
 * Note: console-error detection requires a real browser runtime (Playwright).
 * This script covers the HTTP + HTML-shell layer only.
 *
 * Usage:
 *   node scripts/reticle-verify.js [base-url]
 *   base-url defaults to http://localhost:3000
 */

const BASE = process.argv[2] || "http://localhost:3000";

const ROUTES = [
  "/",
  "/how-it-works",
  "/technology",
  "/walkthrough",
  "/about",
  "/contact",
];

const DOM_MARKERS = [
  { selector: 'id="root"', label: "React mount point (#root)" },
  { selector: "<script", label: "JS bundle script tag" },
  { selector: 'rel="icon"', label: "Favicon link tag" },
];

let passed = 0;
let failed = 0;

function ok(msg) {
  console.log(`  ✓  ${msg}`);
  passed++;
}

function fail(msg) {
  console.error(`  ✗  ${msg}`);
  failed++;
}

async function checkRoute(path) {
  const url = `${BASE}${path}`;
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
    if (res.status === 200) {
      ok(`${path} → ${res.status}`);
    } else {
      fail(`${path} → ${res.status} (expected 200)`);
    }
    return res;
  } catch (err) {
    fail(`${path} → connection error: ${err.message}`);
    return null;
  }
}

async function main() {
  console.log(`\nChainSync post-deploy verification`);
  console.log(`Target: ${BASE}\n`);

  // 1. Check all routes
  console.log("── HTTP status checks ──");
  const rootRes = await checkRoute("/");
  for (const route of ROUTES.slice(1)) {
    await checkRoute(route);
  }

  // 2. HTML shell integrity
  console.log("\n── HTML shell checks ──");
  if (rootRes && rootRes.status === 200) {
    const html = await rootRes.text();
    for (const { selector, label } of DOM_MARKERS) {
      if (html.includes(selector)) {
        ok(label);
      } else {
        fail(`Missing: ${label} (looked for "${selector}")`);
      }
    }
  } else {
    fail("Skipping HTML checks — root did not return 200");
  }

  // 3. Summary
  console.log(`\n── Result ──`);
  console.log(`  Passed: ${passed}   Failed: ${failed}`);
  if (failed > 0) {
    console.error(`\n  VERIFICATION FAILED\n`);
    process.exit(1);
  } else {
    console.log(`\n  VERIFICATION PASSED\n`);
  }
}

main().catch((err) => {
  console.error("Unexpected error:", err);
  process.exit(1);
});
