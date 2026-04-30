import * as path from "path";
import {
  networks,
  publicTokenTypes,
  siteUrl,
  specsDir,
  tokenTypes,
} from "./data";
import vars from "./.env.json";
import "./sitemap";

type PageMeta = {
  property?: string;
  content: string;
};

type VuePressPage = {
  key: string;
  relativePath?: string;
  title?: string;
  frontmatter: {
    title?: string;
    metaTitle?: string;
    description?: string;
    permalink?: string;
    meta?: PageMeta[];
    next?: false;
    prev?: false;
  };
  _content: string;
  _filePath: string;
  _context: {
    writeTemp(file: string, content: string): Promise<string>;
  };
};

const configVars = vars as { gaId: string };

const plainText = (markdown: string): string =>
  markdown
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[[^\]]*]\([^)]+\)/g, "")
    .replace(/\[([^\]]+)]\([^)]+\)/g, "$1")
    .replace(/^#+\s+/gm, "")
    .replace(/^[-*+]\s+/gm, "")
    .replace(/\s+/g, " ")
    .trim();

const overview = (content: string): string => {
  const heading = /^#{2,3}\s+Overview\s*$/im.exec(content);
  if (!heading) return "";

  const start = heading.index + heading[0].length;
  const rest = content.slice(start);
  const nextHeading = rest.search(/^#{2,3}\s+/m);

  return plainText(rest.slice(0, nextHeading === -1 ? undefined : nextHeading));
};

const specFooter = (tokenName: string): string => `

<div class="token-spec-actions">
  <a class="token-spec-action token-spec-action-primary" href="https://www.smartcontracts.tools/token-generator/create/ethereum/${encodeURIComponent(
    tokenName,
  )}">Create ${tokenName}</a>
  <a class="token-spec-action" href="https://www.smartcontracts.tools/token-generator/docs/?tokenType=${encodeURIComponent(
    tokenName,
  )}">More Info</a>
</div>
`;

export default {
  title: "Token Generator",
  base: "/token-generator/",
  plugins: [
    [
      "vuepress-plugin-gtag",
      {
        gtagId: configVars.gaId,
      },
    ],
  ],
  async extendPageData($page: VuePressPage) {
    if (
      !$page.relativePath?.startsWith(specsDir) ||
      !$page.relativePath.endsWith(".md")
    ) {
      return;
    }

    const tokenName = path.basename($page.relativePath, ".md");
    const pageTitle = `Discover ${tokenName} | Token Generator`;
    const description = overview($page._content);
    const pageUrl = `${siteUrl}${tokenName}/`;

    $page.title = pageTitle;
    Object.assign($page.frontmatter, {
      title: pageTitle,
      metaTitle: pageTitle,
      description,
      permalink: `${tokenName}/`,
      next: false,
      prev: false,
      meta: [
        { property: "og:url", content: pageUrl },
        { property: "og:title", content: pageTitle },
        { property: "og:description", content: description },
        { property: "twitter:title", content: pageTitle },
        { property: "twitter:description", content: description },
      ],
    });

    $page._filePath = await $page._context.writeTemp(
      `spec-pages/${$page.key}.md`,
      `${$page._content}${specFooter(tokenName)}`,
    );
  },
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
    ],
    ["meta", { property: "og:type", content: "website" }],
    [
      "meta",
      {
        property: "og:url",
        content: "https://vittominacori.github.io/token-generator/",
      },
    ],
    [
      "meta",
      {
        property: "og:image",
        content:
          "https://vittominacori.github.io/token-generator/images/token-generator.jpg",
      },
    ],
    ["meta", { property: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      {
        property: "twitter:image",
        content:
          "https://vittominacori.github.io/token-generator/images/token-generator.jpg",
      },
    ],
  ],
  themeConfig: {
    networks,
    tokenTypes: publicTokenTypes,
    sidebar: {
      [`/${specsDir}`]: [
        {
          title: "Available Token Types",
          collapsable: false,
          sidebarDepth: 0,
          children: tokenTypes.map(({ file, text }) => [file, text]),
        },
      ],
    },
    search: false,
    smoothScroll: true,
    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Token Types",
        items: publicTokenTypes,
      },
      {
        text: "Tutorials",
        link: "/tutorials/",
      },
      {
        text: "Create Token",
        items: networks.map(({ createText, createLink }) => ({
          text: createText,
          link: createLink,
          target: "_self",
        })),
      },
      {
        text: "Official Website",
        link: "https://erc20tokengenerator.com",
      },
      {
        text: "Open App",
        link: "https://www.smartcontracts.tools/token-generator/",
      },
    ],
  },
};
