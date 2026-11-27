import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { seoPages } from "../shared/seo.js";
test("all marketing routes have unique built metadata, canonicals, and sitemap entries", async () => {
  const sitemap = await readFile("dist/sitemap.xml", "utf8");
  const robots = await readFile("dist/robots.txt", "utf8");
  assert.match(robots, /Disallow: \/portal/);
  const titles = new Set<string>();
  for (const [path, page] of Object.entries(seoPages)) {
    const html = await readFile(
      `dist${path === "/" ? "" : path}/index.html`,
      "utf8"
    );
    assert.ok(html.includes(`<title>${page.title}</title>`));
    assert.ok(html.includes(`href="https://www.getchainsync.com${path}"`));
    assert.ok(
      sitemap.includes(`<loc>https://www.getchainsync.com${path}</loc>`)
    );
    assert.ok(!html.includes("%VITE_"));
    assert.ok(!html.includes('id="manus-runtime"'));
    titles.add(page.title);
  }
  assert.equal(titles.size, Object.keys(seoPages).length);
  assert.ok((await stat("dist/social-card.png")).size > 1000);
});
