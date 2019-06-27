module.exports = {
  title: 'quantumclay.com',
  description: 'Official website for Quantum Clay LLC',
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir'
      }
    }
  },

  // https://v1.vuepress.vuejs.org/guide/markdown.html#advanced-configuration
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },
    extendMarkdown: md => {
      // use more markdown-it plugins!
      // md.use(require('markdown-it-xxx'))
    },
  },

  themeConfig: {
    // logo: '/QCLogoHero.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Quantum Clay', link: '/guide/' },
      { text: 'Smartdown', link: '/smartdown/' },
      { text: 'InfoClay', link: '/infoclay/' },
      { text: 'Scape', link: '/scape/' },
    ],
  },
};
