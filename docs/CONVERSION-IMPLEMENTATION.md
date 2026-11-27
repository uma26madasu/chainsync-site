# ChainSync conversion improvements

## Scope and review status

The approved audit plan is implemented on `improve-conversion`. No merge or production deployment is authorized. The existing React/Vite stack, logo, palette, article links, interactive illustrative walkthrough, and incident portal remain. The former use-case dashboards were replaced with workflow content because their presentation could imply an implemented product interface. Unsupported statistics and performance projections were removed from Insights; its original article links remain.

## Before and after

| Before | After |
| --- | --- |
| Pilot-only primary conversion path | Demo, pilot, partnership, and general inquiry intent |
| Required phone and long message | No phone; infrastructure, challenge, and country optional |
| Browser-only email submission | Shared client/server validation; server-side EmailJS delivery |
| Unsupported results and deployment claims | Explicit early-stage status and scoped evaluation language |
| Industry tabs and mixed use cases | Dedicated water and healthcare facilities routes |
| Broad roadmap on homepage | Focused initial industries; roadmap retained separately |
| Shared metadata and HTML fallback for robots/sitemap | Build-generated route metadata, sitemap, and robots documents |
| Marketing and portal loaded together | Lazy route chunks |
| Production debug runtime injected into HTML | Runtime limited to development |

This is a qualitative conversion assessment. No traffic, customer, revenue, or conversion improvement has been measured.

## Routes

Existing routes retained: `/`, `/about`, `/walkthrough`, `/use-cases`, `/how-it-works`, `/technology`, `/roadmaps`, `/insights`, `/contact`, and `/portal` plus its incident routes.

Added: `/industries/water-wastewater`, `/industries/healthcare-facilities`, `/pilot-program`, `/partnerships`, `/security`, `/privacy`.

Inquiry links: `/contact?intent=demo`, `pilot`, `partnership`, or `general`. The selected intent can be changed in the form. Query parameters are not sent to analytics. Invalid intent parameters fall back to general inquiry.

## Inquiry setup: required before release

The new `/api/leads` handler uses the site's existing EmailJS provider through its documented REST API. It does not create a provider account, configure a mailbox, or establish a CRM integration. Live delivery has not been tested. Missing configuration returns HTTP 503 and does not report success.

1. In the existing EmailJS account, verify the connected email service and its sender authorization. Set `EMAILJS_SERVICE_ID` to that service's ID.
2. Create or review an inquiry template. Set its recipient inside EmailJS to the intended ChainSync mailbox. Never let the browser supply the recipient. Set `EMAILJS_TEMPLATE_ID` to this template's ID.
3. Use `{{subject}}` as the subject and `{{formatted_message}}` as a plain-text body. Set Reply-To to `{{reply_to}}`. Available additional parameters are `company`, `name`, `email`, `job_title`, `industry`, and `message`. Treat submitted values as untrusted text; do not insert them as unescaped HTML.
4. In EmailJS account/API security settings, permit authenticated REST requests from a non-browser application if required by the account. Set `EMAILJS_PUBLIC_KEY` and `EMAILJS_PRIVATE_KEY` as server-only environment values. The latter is sent only from the server as `accessToken`. Do not put private credentials in any `VITE_` variable.
5. Create a Cloudflare Turnstile widget for the actual site hostname. Configure the exact permitted hostname. Set `VITE_TURNSTILE_SITE_KEY` for the browser and `TURNSTILE_SECRET_KEY` for the server. `SITE_ORIGIN` must match the intended HTTPS origin, including `www` where used. The server checks both incoming Origin, when supplied, and the verified Turnstile hostname. No CORS permissions are added.
6. In a staging environment, configure a widget and origin for that staging hostname and a test recipient/template. Rebuild when any `VITE_` value changes. Use separate staging secrets. For local real verification, allow `localhost` in the widget and use `SITE_ORIGIN=http://localhost:3000`. Use Turnstile test keys only in isolated testing, never production.
7. Exercise all four inquiry types, invalid input, failed verification, expired verification, delivery failure, and successful receipt. Confirm the recipient, Reply-To, all fields, and provider quotas. Do not submit live operational data during these tests.
8. Enable host-level request rate limiting for `/api/leads` if available. Turnstile and a honeypot provide application spam protection; there is no durable distributed rate limiter in this repository. Review provider quotas and abuse monitoring before launch.

The handler accepts JSON POST requests, caps input at 16 KiB, rejects unknown fields, validates email and enum values, bounds strings, enforces a honeypot, checks server-side Turnstile, and uses provider timeouts. It does not log form contents. Success means the delivery provider accepted the request, not that a human read the email. Inquiry storage, retention, access, and deletion policies in the receiving mailbox and providers remain the owner's responsibility. Confirm these policies and processing locations before publishing the data-handling notice.

## Environment variables

| Variable | Where | Required for |
| --- | --- | --- |
| `VITE_TURNSTILE_SITE_KEY` | Build/browser | Spam verification widget |
| `TURNSTILE_SECRET_KEY` | Server only | Spam verification |
| `EMAILJS_SERVICE_ID` | Server only | Existing EmailJS delivery service |
| `EMAILJS_TEMPLATE_ID` | Server only | Reviewed recipient/template |
| `EMAILJS_PUBLIC_KEY` | Server only in this implementation | EmailJS account identifier |
| `EMAILJS_PRIVATE_KEY` | Server only | Authenticated server delivery |
| `SITE_ORIGIN` | Server only | Origin and verified hostname; defaults to production origin |
| `VITE_API_URL` | Build/browser | Existing incident portal API; review deployment before changing |
| `PORT` | Node runtime | Express listener; defaults to 3000 |

No Umami configuration is needed. The unset Umami script was removed. Vercel Analytics remains the single analytics implementation and needs the hosting project's Web Analytics support enabled. If using another host, validate its support before expecting events.

## Analytics

Allowlisted events: `demo_cta_clicked`, `pilot_cta_clicked`, `demo_request_submitted`, `pilot_application_submitted`, `partnership_inquiry_submitted`, `industry_page_visited`, `contact_form_completed` (general inquiries). Events contain only the pathname and, for industry visits, the water/healthcare category. There are no form values, email addresses, query strings, or raw payloads in these custom events. Route visits may repeat when visitors revisit a page; there is no invented conversion attribution history.

## Build and deployment

1. Use Node 22 or a compatible later LTS and Corepack with the pinned pnpm 10.4.1.
2. `corepack pnpm install --frozen-lockfile`
3. Configure the intended build and runtime variables.
4. `corepack pnpm check`
5. `corepack pnpm build`
6. `corepack pnpm test` (build-output tests require step 5 first).
7. Review route output and staging behavior. Obtain explicit production deployment approval.
8. For the existing Vercel project, use the checked-in build command and `dist` output. `/api/leads` is a Node serverless function; portal routes rewrite to the SPA shell. Known marketing routes have generated `index.html` documents. Confirm deep links, query strings, API routing, security headers, and the custom 404 in staging. Do not enable a blanket SPA rewrite over `/api`, sitemap, or robots files.
9. Alternatively, `pnpm start` runs the built Express server, serving the generated marketing documents and the same inquiry handler. Provide runtime variables through the process environment. Serve it behind a reviewed HTTPS reverse proxy. `vite preview` is static and does not run the inquiry API; local API smoke testing should use the built Express server.

`pnpm dev` is for frontend development. It does not serve the inquiry endpoint. Use the built Express runtime for end-to-end delivery tests.

The SEO build generates metadata documents, not server-rendered page bodies. Marketing content is still React-rendered. Search rendering, social previews, canonical behavior, and Core Web Vitals require staging/production checks. The social card is an original typography graphic, not a product screenshot.

## Remaining product confirmations

- Which of the 17 proposed coordination agents are operational for each workflow?
- Which source systems, adapters, authentication methods, calendars, and notification channels are actually supported?
- What data leaves each deployment, including external AI processing and subprocessors?
- Which encryption, audit, authorization, data isolation, retention, backup, recovery, and manual override controls are verified?
- What pilot scope, duration, fees, support, commercial terms, and acceptance criteria can be offered?
- What data retention/deletion policy and inquiry response process should be published?

No certification, regulatory approval, performance result, customer deployment, testimonial, or commercial partnership is asserted. Pilot safeguards are proposals, not proof of implemented controls. The incident portal's external backend authorization has not been audited; this work preserves its existing request contract and does not claim to resolve that risk.

## Verification limits

Automated checks and build results are recorded in the PR. The managed browser preview relay timed out while opening port 4173, so live browser QA could not be performed. Responsive breakpoints, mobile navigation semantics, focus handling, visible labels, feedback announcements, and reduced-motion behavior were implemented, but mobile screenshots, keyboard interaction, assistive technology, visual contrast, real email delivery, real Turnstile verification, hosted analytics, external links, and production Core Web Vitals still need verification. No production deployment was performed.

## Validation results

- `pnpm check`: passed, including API and test sources. The pre-existing SVG `cy` typing error is fixed.
- `pnpm build`: passed without missing analytics-variable or oversized-chunk warnings.
- `pnpm test`: four tests passed, covering lead validation, request rejection, verification/delivery failure paths, and all 15 metadata documents. Provider calls are mocked; no email was sent.
- Built Express HTTP smoke: 11 marketing/portal route variants passed; robots and sitemap have correct content types; missing-page and server-bundle requests return 404; an unconfigured inquiry returns 503. Portal noindex headers were checked.
- `git diff --check`: passed.
- Main JavaScript chunk: about 449.5 kB raw / 144.6 kB gzip, compared with about 744.9 kB / 210.9 kB at audit. Secondary routes load separately. HTML shell before route metadata is about 2 kB versus 368.5 kB. These are build artifact sizes, not measured Core Web Vitals.
- Browser QA: blocked by managed preview relay timeout; no mobile or assistive-technology pass is claimed.

The canned chatbot responses were replaced with a direct inquiry component because they repeated unsupported security, commercial, and performance claims. Useful operational scenarios are retained as explicitly fictional walkthroughs; industry dashboard-style illustrations and unsupported benchmark charts were removed.

## Complete modified and added file list

- `.env.example`
- `api/leads.ts`
- `client/index.html`
- `client/public/social-card.png`
- `client/public/social-card.svg`
- `client/src/App.tsx`
- `client/src/components/Chatbot.tsx`
- `client/src/components/CountUp.tsx`
- `client/src/components/Footer.tsx`
- `client/src/components/Header.tsx`
- `client/src/components/LeadForm.tsx`
- `client/src/components/Lifecycle.tsx`
- `client/src/components/MarketingLayout.tsx`
- `client/src/components/ProcessFlowAnimation.tsx`
- `client/src/index.css`
- `client/src/lib/analytics.ts`
- `client/src/pages/About.tsx`
- `client/src/pages/Contact.tsx`
- `client/src/pages/Home.tsx`
- `client/src/pages/HowItWorks.tsx`
- `client/src/pages/Industry.tsx`
- `client/src/pages/Insights.tsx`
- `client/src/pages/Partnerships.tsx`
- `client/src/pages/PilotProgram.tsx`
- `client/src/pages/Privacy.tsx`
- `client/src/pages/Roadmaps.tsx`
- `client/src/pages/ScenarioWalkthrough.tsx`
- `client/src/pages/Security.tsx`
- `client/src/pages/Technology.tsx`
- `client/src/pages/UseCases.tsx`
- `docs/CONVERSION-IMPLEMENTATION.md`
- `package.json`
- `scripts/build-seo.ts`
- `server/index.ts`
- `shared/lead.ts`
- `shared/seo.ts`
- `tests/build.test.ts`
- `tests/leads.test.ts`
- `tsconfig.json`
- `vercel.json`
- `vite.config.ts`
