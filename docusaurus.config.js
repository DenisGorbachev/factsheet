module.exports = {
  title: 'FactSheet',
  tagline: 'Fundamental research database for cryptocurrencies',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'spire',
  projectName: 'factsheet',
  themeConfig: {
    navbar: {
      title: 'FactSheet',
      logo: {
        alt: 'FactSheet Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/DenisGorbachev/factsheet',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      // links: [
      // {
      //   title: 'Docs',
      //   items: [
      //     {
      //       label: 'Style Guide',
      //       to: 'docs/',
      //     },
      //     {
      //       label: 'Second Doc',
      //       to: 'docs/doc2/',
      //     },
      //   ],
      // },
      // {
      //   title: 'Community',
      //   items: [
      //     {
      //       label: 'Stack Overflow',
      //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //     },
      //     {
      //       label: 'Discord',
      //       href: 'https://discordapp.com/invite/docusaurus',
      //     },
      //     {
      //       label: 'Twitter',
      //       href: 'https://twitter.com/docusaurus',
      //     },
      //   ],
      // },
      // {
      //   title: 'More',
      //   items: [
      //     {
      //       label: 'Blog',
      //       to: 'blog',
      //     },
      //     {
      //       label: 'GitHub',
      //       href: 'https://github.com/facebook/docusaurus',
      //     },
      //   ],
      // },
      // ],
      copyright: `© ${new Date().getFullYear()} Factsheet. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/DenisGorbachev/factsheet/edit/master/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/DenisGorbachev/factsheet/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
