// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Solarwinds Wiki',
  tagline: 'Your Solarwinds Documentation Hub',
  favicon: 'img/favicon.ico',

  // GitHub Pages에서 사용할 URL
  url: 'https://Jin-Y0ung.github.io', // 기본 도메인
  baseUrl: '/Solarwinds_Wiki_CTV/', // 반드시 저장소 이름과 일치해야 함!

  // GitHub Pages 배포를 위한 설정
  organizationName: 'Jin-Y0ung', 
  projectName: 'Solarwinds_Wiki_CTV', // GitHub 저장소 이름
  deploymentBranch: 'gh-pages', // GitHub Pages 배포 브랜치

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],  // 한국어 추가
    localeConfigs: {
      ko: {
        label: '한국어',
        direction: 'ltr',
      },
    },
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Solarwinds Wiki',
        logo: {
          alt: 'Solarwinds Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'localeDropdown',  // 🔹 언어 선택 드롭다운 추가
            position: 'right',
          },
          {
            href: 'https://github.com/Jin-Y0ung/Solarwinds_Wiki_CTV',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Solarwinds Wiki. Built by Jinyoung Kim`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
