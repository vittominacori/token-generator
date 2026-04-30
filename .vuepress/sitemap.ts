import * as fs from "fs";
import * as path from "path";
import { siteUrl, tokenTypes } from "./data";

const staticPaths = [
  "",
  "tutorials/",
  "tutorials/how-to-create-erc20-token/",
  "tutorials/how-to-create-bep20-token/",
  "tutorials/how-to-create-polygon-erc20-token/",
];

const entries = [...staticPaths, ...tokenTypes.map(({ text }) => `${text}/`)];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${entries
  .map(
    (entry) => `    <url>
        <loc>${siteUrl}${entry}</loc>
        <changefreq>weekly</changefreq>
        <priority>1.00</priority>
    </url>`,
  )
  .join("\n")}
</urlset>
`;

fs.writeFileSync(path.resolve(__dirname, "public/sitemap.xml"), sitemap);
