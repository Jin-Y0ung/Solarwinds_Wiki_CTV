/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro', // Getting Started
      label: 'Getting Started',
    },
    {
      type: 'category',
      label: 'Installation', // 큰 분류
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'windows_agent', // Windows 설치 문서
          label: 'Windows',
        },
        {
          type: 'doc',
          id: 'linux_agent', // Linux 설치 문서
          label: 'Linux',
        },
        {
          type: 'doc',
          id: 'preperations', // 설치 준비 문서
          label: 'Preparations',
        },
      ],
    },
    {
      type: 'category',
      label: 'Data Polling Interval', // Installation과 같은 레벨의 큰 분류
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'polling_interval', // 예시 문서 (원하는 문서 추가 가능)
          label: 'Polling Interval Settings',
        },
      ],
    },
  ],
};

module.exports = sidebars;
