import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const siteUrl = "https://strates-atelier.com";

const routes = [
    "/",
];

const today = new Date().toISOString().split("T")[0];

const urls = routes
    .map(
        (route) => `
    <url>
        <loc>${siteUrl}${route}</loc>
        <lastmod>${today}</lastmod>
    </url>`
    )
    .join("");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>
`;

const outputPath = resolve("public", "sitemap.xml");

writeFileSync(outputPath, sitemap, "utf8");

console.log("✓ sitemap.xml généré");