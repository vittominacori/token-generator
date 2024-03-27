const vars = require("./.env.json");

module.exports = {
  title: "Token Generator",
  base: "/token-generator/",
  plugins: [
    [
      "vuepress-plugin-gtag",
      {
        gtagId: vars.gaId,
      },
    ],
  ],
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
    sidebar: false,
    search: false,
    smoothScroll: true,
    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Tutorials",
        items: [
          {
            text: "Ethereum Network",
            link: "/tutorials/how-to-create-erc20-token/",
          },
          {
            text: "BNB Smart Chain",
            link: "/tutorials/how-to-create-bep20-token/",
          },
          {
            text: "Polygon PoS Chain",
            link: "/tutorials/how-to-create-polygon-erc20-token/",
          },
        ],
      },
      {
        text: "Create Token",
        items: [
          {
            text: "ERC20 on Ethereum Network",
            link: "https://vittominacori.github.io/erc20-generator/",
            target: "_self",
          },
          {
            text: "BEP20 on BNB Smart Chain",
            link: "https://vittominacori.github.io/bep20-generator/",
            target: "_self",
          },
          {
            text: "ERC20 on Polygon PoS Chain",
            link: "https://vittominacori.github.io/polygon-generator/",
            target: "_self",
          },
        ],
      },
      {
        text: "Official Website",
        link: "https://erc20tokengenerator.com",
      },
    ],
  },
};
