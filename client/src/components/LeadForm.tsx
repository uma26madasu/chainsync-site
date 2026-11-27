import { useEffect, useRef, useState } from "react";
import { leadSchema } from "@shared/lead";
import { trackConversion } from "@/lib/analytics";
type Turnstile = {
  render: (el: HTMLElement, options: Record<string, unknown>) => string;
  remove: (id: string) => void;
  reset: (id: string) => void;
};
declare global {
  interface Window {
    turnstile?: Turnstile;
  }
}
const labels = {
  demo: "Request a Demo",
  pilot: "Apply for a Founding Pilot",
  partnership: "Make a Partnership Inquiry",
  general: "Send an Inquiry",
};
export default function LeadForm() {
  const raw = new URLSearchParams(window.location.search).get("intent");
  const initial =
    raw && Object.hasOwn(labels, raw)
      ? (raw as keyof typeof labels)
      : "general";
  const [intent, setIntent] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const captcha = useRef<HTMLDivElement>(null);
  const widget = useRef<string | undefined>(undefined);
  const feedback = useRef<HTMLDivElement>(null);
  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
  useEffect(() => {
    if (!siteKey || success) return;
    let cancelled = false;
    let script = document.querySelector<HTMLScriptElement>(
      "script[data-chainsync-captcha]"
    );
    const render = () => {
      if (!cancelled && captcha.current && window.turnstile && !widget.current)
        widget.current = window.turnstile.render(captcha.current, {
          sitekey: siteKey,
          callback: (value: string) => {
            setToken(value);
            setCaptchaError("");
          },
          "expired-callback": () => setToken(""),
          "error-callback": () => {
            setToken("");
            setCaptchaError(
              "Spam verification could not load. Please reload and try again."
            );
          },
        });
    };
    if (!script) {
      script = document.createElement("script");
      script.dataset.chainsyncCaptcha = "true";
      script.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
    script.addEventListener("load", render);
    const fail = () =>
      setCaptchaError(
        "Spam verification could not load. Please reload and try again."
      );
    script.addEventListener("error", fail);
    render();
    return () => {
      cancelled = true;
      script?.removeEventListener("load", render);
      script?.removeEventListener("error", fail);
      if (widget.current) {
        window.turnstile?.remove(widget.current);
        widget.current = undefined;
      }
    };
  }, [siteKey, success]);
  useEffect(() => {
    if (success || error) feedback.current?.focus();
  }, [success, error]);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;
    setError("");
    const fields = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = leadSchema.safeParse({ ...fields, intent, token });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message || "Check the form fields.");
      return;
    }
    if (siteKey && !token) {
      setError("Complete the spam verification before submitting.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!response.ok)
        throw new Error(
          response.status === 503
            ? "The inquiry service is not available yet. Please try again later."
            : response.status === 429
              ? "Too many attempts. Please wait before trying again."
              : "Your inquiry could not be sent. Please check your details and try again."
        );
      setSuccess(true);
      trackConversion(
        intent === "pilot"
          ? "pilot_application_submitted"
          : intent === "partnership"
            ? "partnership_inquiry_submitted"
            : intent === "demo"
              ? "demo_request_submitted"
              : "contact_form_completed"
      );
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Unable to send your inquiry."
      );
    } finally {
      setLoading(false);
      setToken("");
      if (widget.current) window.turnstile?.reset(widget.current);
    }
  }
  if (success)
    return (
      <div
        ref={feedback}
        tabIndex={-1}
        role="status"
        className="cs-card cs-success"
      >
        <h2>Thank you. Your inquiry has been sent.</h2>
        <p>
          The ChainSync team will review it and contact you using the work email
          you provided.
        </p>
        <button
          className="cs-button secondary"
          onClick={() => {
            setSuccess(false);
            setError("");
          }}
        >
          Send another inquiry
        </button>
      </div>
    );
  return (
    <form
      className="cs-card cs-lead-form"
      onSubmit={submit}
      aria-busy={loading}
    >
      <h2>{labels[intent]}</h2>
      <p>
        Required fields are marked with an asterisk. No phone number is needed.
      </p>
      {error && (
        <div ref={feedback} tabIndex={-1} role="alert" className="cs-error">
          {error}
        </div>
      )}
      <label htmlFor="intent">I’m interested in *</label>
      <select
        id="intent"
        name="intent"
        value={intent}
        onChange={e => setIntent(e.target.value as keyof typeof labels)}
      >
        {Object.entries(labels).map(([v, l]) => (
          <option key={v} value={v}>
            {l}
          </option>
        ))}
      </select>
      <div className="cs-form-grid">
        <div>
          <label htmlFor="name">Full name *</label>
          <input
            id="name"
            name="name"
            required
            minLength={2}
            maxLength={120}
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="email">Work email *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="company">Organization *</label>
          <input
            id="company"
            name="company"
            required
            minLength={2}
            maxLength={160}
            autoComplete="organization"
          />
        </div>
        <div>
          <label htmlFor="jobTitle">Job title *</label>
          <input
            id="jobTitle"
            name="jobTitle"
            required
            minLength={2}
            maxLength={120}
            autoComplete="organization-title"
          />
        </div>
      </div>
      <label htmlFor="industry">Industry *</label>
      <select id="industry" name="industry" defaultValue="" required>
        <option value="" disabled>
          Select your industry
        </option>
        <option value="water">Water and wastewater</option>
        <option value="healthcare">Healthcare facilities</option>
        <option value="facilities">Facilities management</option>
        <option value="monitoring">Environmental monitoring</option>
        <option value="integrator">Technology or integration provider</option>
        <option value="other">Other critical infrastructure</option>
      </select>
      <label htmlFor="infrastructure">
        Existing monitoring infrastructure <span>(optional)</span>
      </label>
      <input
        id="infrastructure"
        name="infrastructure"
        maxLength={500}
        placeholder="For example, your SCADA or BMS platform"
      />
      <label htmlFor="message">
        Operational challenge or inquiry <span>(optional)</span>
      </label>
      <textarea id="message" name="message" maxLength={2000} rows={4} />
      <label htmlFor="country">
        Country <span>(optional)</span>
      </label>
      <input
        id="country"
        name="country"
        maxLength={100}
        autoComplete="country-name"
      />
      <div className="cs-honeypot" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <p className="cs-note" id="lead-privacy">
        We use these details to respond to your inquiry and assess fit. The form
        uses EmailJS for delivery and, when configured, Cloudflare Turnstile for
        spam protection. Do not include patient information, credentials, or
        sensitive incident records.{" "}
        <a href="/privacy">Read our data handling notice</a>.
      </p>
      <div ref={captcha} />
      {captchaError && (
        <p role="alert" className="cs-error">
          {captchaError}
        </p>
      )}
      <button
        type="submit"
        className="cs-button"
        disabled={loading || Boolean(siteKey && !token)}
        aria-describedby="lead-privacy"
      >
        {loading ? "Sending your inquiry…" : labels[intent]}
      </button>
    </form>
  );
}
