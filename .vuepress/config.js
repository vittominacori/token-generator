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
        text: "Create Token",
        items: [
          {
            text: "Create ERC20 on Ethereum",
            link: "https://www.smartcontracts.tools/token-generator/create/ethereum/",
            target: "_self",
          },
          {
            text: "Create BEP20 on BNB Smart Chain",
            link: "https://www.smartcontracts.tools/token-generator/create/bsc/",
            target: "_self",
          },
          {
            text: "Create ERC20 on Base",
            link: "https://www.smartcontracts.tools/token-generator/create/base/",
            target: "_self",
          },
          {
            text: "Create ERC20 on Polygon PoS",
            link: "https://www.smartcontracts.tools/token-generator/create/polygon/",
            target: "_self",
          },
          {
            text: "Create ERC20 on Arbitrum One",
            link: "https://www.smartcontracts.tools/token-generator/create/arbitrum/",
            target: "_self",
          },
          {
            text: "Create ERC20 on OP Mainnet",
            link: "https://www.smartcontracts.tools/token-generator/create/optimism/",
            target: "_self",
          },
          {
            text: "Create ERC20 on Avalanche C-Chain",
            link: "https://www.smartcontracts.tools/token-generator/create/avalanche/",
            target: "_self",
          },
          {
            text: "Create ERC20 on ZKsync Era",
            link: "https://www.smartcontracts.tools/token-generator/create/zksync/",
            target: "_self",
          },
          {
            text: "Create ERC20 on Unichain",
            link: "https://www.smartcontracts.tools/token-generator/create/unichain/",
            target: "_self",
          },
          {
            text: "Create ERC20 on World Chain",
            link: "https://www.smartcontracts.tools/token-generator/create/worldchain/",
            target: "_self",
          },
        ],
      },
      {
        text: "Tutorials",
        link: "/tutorials/",
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
