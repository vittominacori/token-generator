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
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': '/token-generator/'
      }
    }
  },
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
        text: 'Docs',
        items: [
          { text: 'How to create ERC20', link: '/docs/how-to-create-erc20-token/' },
          { text: 'How to create BEP20', link: '/docs/how-to-create-bep20-token/' }
        ]
      },
      {
        text: 'Create Token',
        items: [
          { text: 'ERC20', link: 'https://vittominacori.github.io/erc20-generator/', target: '_self' },
          { text: 'BEP20', link: 'https://vittominacori.github.io/bep20-generator/', target: '_self' }
        ]
      }
    ]
  },
};
