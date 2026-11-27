import { readFile, writeFile, mkdir } from "node:fs/promises";
import { seoPages } from "../shared/seo.js";
const origin = "https://www.getchainsync.com";
const shell = await readFile("dist/index.html", "utf8");
const escape = (s: string) =>
  s.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
for (const [path, page] of Object.entries(seoPages)) {
  let html = shell.replace(
    /<title>.*?<\/title>/,
    `<title>${escape(page.title)}</title>`
  );
  const replace = (key: string, value: string) => {
    const pattern = new RegExp(
      `(<meta (?:name|property)="${key}" content=")[^"]*("[^>]*>)`
    );
    html = html.replace(pattern, (_, a, b) => a + escape(value) + b);
  };
  replace("description", page.description);
  replace("og:title", page.title);
  replace("og:description", page.description);
  replace("og:url", origin + path);
  html = html.replace(
    /(<link rel="canonical" href=")[^"]*"/,
    `$1${origin}${path}"`
  );
  if (path === "/")
    html = html.replace(
      "</head>",
      `<script id="organization-schema" type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: "ChainSync", url: origin, logo: origin + "/logo.png" })}</script></head>`
    );
  if (path === "/") await writeFile("dist/index.html", html);
  else {
    await mkdir(`dist${path}`, { recursive: true });
    await writeFile(`dist${path}/index.html`, html);
  }
}
const urls = Object.keys(seoPages)
  .map(path => `<url><loc>${origin}${path}</loc></url>`)
  .join("\n");
await writeFile(
  "dist/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`
);
await writeFile(
  "dist/robots.txt",
  `User-agent: *\nAllow: /\nDisallow: /portal\nDisallow: /api/\nSitemap: ${origin}/sitemap.xml\n`
);
// A genuine missing-page response for the Express server; SPA fallback remains available.
await writeFile(
  "dist/404.html",
  shell
    .replace(/<title>.*?<\/title>/, "<title>Page not found | ChainSync</title>")
    .replace('content="index,follow"', 'content="noindex,nofollow"')
);
console.log(
  `Generated metadata documents for ${Object.keys(seoPages).length} routes, sitemap, and robots.txt.`
);
