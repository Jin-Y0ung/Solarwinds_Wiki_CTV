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
      label: 'Polling Interval', // Installation과 같은 레벨의 큰 분류
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'status_polling', 
          label: 'Status Polling Interval Settings',
        },
        {
          type: 'doc',
          id: 'Individual_Node_Polling', 
          label: 'Individual Node Polling Interval Settings',
        },
        {
          type: 'doc',
          id: 'ind_interface_polling', 
          label: 'Individual Interface Polling Interval',
        },
        {
          type: 'doc',
          id: 'ind_partition_polling', 
          label: 'Individual Partition Polling Interval',
        },
      ],
    },
    {
      type: 'category',
      label: 'NMS Main Functions', // Installation과 같은 레벨의 큰 분류
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'system_description', 
          label: 'System Description',
        },{
          type: 'doc',
          id: 'register_equipment', 
          label: 'How to register equipment ',
        },{
          type: 'doc',
          id: 'system_description', 
          label: 'How to Register Equipment',
        },
      ],
    },
  ],
};

module.exports = sidebars;
