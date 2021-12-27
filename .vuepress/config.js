const vars = require('./.env.json');

module.exports = {
  title: 'Token Generator',
  description: 'The most used Smart Contract Generator for ERC20 and BEP20 Token.',
  base: '/token-generator/',
  plugins: [
    ['@vuepress/google-analytics', {
      ga: vars.gaId
    }],
    ['vuepress-plugin-facebook-pixel', {
      pixelId: vars.fbPixelId
    }],
  ],
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no'}],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://vittominacori.github.io/token-generator' }],
    ['meta', { property: 'og:image', content: 'https://vittominacori.github.io/token-generator/assets/images/todo.jpg' }], // eslint-disable-line max-len
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:image', content: 'https://vittominacori.github.io/token-generator/assets/images/todo.jpg' }], // eslint-disable-line max-len
    ['script',
      {
        src: 'https://cdn.jsdelivr.net/npm/cookie-bar/cookiebar-latest.min.js?forceLang=en&theme=momh&thirdparty=1&always=1&noGeoIp=1&scrolling=1&hideDetailsBtn=1',  // eslint-disable-line max-len
        defer: true,
      },
    ],
  ],
  themeConfig: {
    sidebar: false,
    search: false,
    smoothScroll: true,
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Tutorials',
        items: [
          { text: 'Ethereum', link: '/tutorials/how-to-create-erc20-token/' },
          { text: 'Binance Smart Chain', link: '/tutorials/how-to-create-bep20-token/' },
          { text: 'Polygon', link: '/tutorials/how-to-create-polygon-erc20-token/' }
        ]
      },
      {
        text: 'Create Token',
        items: [
          { text: 'ERC20 on Ethereum', link: 'https://vittominacori.github.io/erc20-generator/', target: '_self' },
          { text: 'BEP20 on Binance Smart Chain', link: 'https://vittominacori.github.io/bep20-generator/', target: '_self' },
          { text: 'ERC20 on Polygon', link: 'https://vittominacori.github.io/polygon-generator/', target: '_self' }
        ]
      }
    ]
  },
};
