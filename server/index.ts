import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import handler from "../api/leads.js";
import { seoPages } from "../shared/seo.js";
const app = express();
app.disable("x-powered-by");
app.use(express.json({ limit: "16kb" }));
app.all("/api/leads", (req, res) => {
  void handler(req, res);
});
app.use("/api", (_req, res) => res.status(404).json({ message: "Not found." }));
const staticPath = path.dirname(fileURLToPath(import.meta.url));
app.use("/portal", (_req, res, next) => {
  res.setHeader("X-Robots-Tag", "noindex, nofollow");
  res.setHeader("Cache-Control", "no-store");
  next();
});
app.get("/server.js", (_req, res) => res.sendStatus(404));
app.get(Object.keys(seoPages), (req, res) => {
  const page = req.path.replace(/\/+$/, "") || "/";
  res.sendFile(path.join(staticPath, page, "index.html"));
});
app.use(express.static(staticPath, { extensions: ["html"] }));
app.get("*", (req, res) => {
  if (req.path.startsWith("/portal"))
    res.sendFile(path.join(staticPath, "index.html"));
  else res.status(404).sendFile(path.join(staticPath, "404.html"));
});
app.use(
  (
    err: Error,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) => {
    res.status(400).json({ message: "Invalid request." });
  }
);
app.listen(process.env.PORT || 3000, () =>
  console.log("ChainSync server ready")
);
