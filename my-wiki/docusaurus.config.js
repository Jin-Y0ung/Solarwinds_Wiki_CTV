// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Solarwinds Wiki',
  tagline: 'Your Solarwinds Documentation Hub',
  favicon: 'img/favicon.ico',

  // 🔹 GitHub Pages에서 사용할 URL
  url: 'https://Jin-Y0ung.github.io', // 내 GitHub Pages 기본 도메인
  baseUrl: '/Solarwinds_Wiki_CTV/', // 반드시 저장소 이름과 일치해야 함!

  // 🔹 GitHub Pages 배포를 위한 설정
  organizationName: 'Jin-Y0ung', // 내 GitHub 계정 아이디
  projectName: 'Solarwinds_Wiki_CTV', // GitHub 저장소 이름
  deploymentBranch: 'gh-pages', // GitHub Pages 배포 브랜치

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Jin-Y0ung/Solarwinds_Wiki_CTV/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/Jin-Y0ung/Solarwinds_Wiki_CTV/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/qcells_logo.png',
      navbar: {
        title: 'Solarwinds Wiki',
        logo: {
          alt: 'Solarwinds Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/Jin-Y0ung/Solarwinds_Wiki_CTV',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/Jin-Y0ung/Solarwinds_Wiki_CTV/discussions',
              },
              {
                label: 'Issues',
                href: 'https://github.com/Jin-Y0ung/Solarwinds_Wiki_CTV/issues',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Jin-Y0ung/Solarwinds_Wiki_CTV',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Solarwinds Wiki. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
