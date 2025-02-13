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
          id: 'edit_map', 
          label: 'How to edit map',
        },{
          type: 'doc',
          id: 'add_application_sam', 
          label: 'How to Add an Application to SAM',
        },
        {
          type: 'doc',
          id: 'add_db_dpa', 
          label: 'How to Add a Database to DPA',
        },
      ],
    },{
      type: 'category',
      label: 'DPA Oracle Instance', // Installation과 같은 레벨의 큰 분류
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'create_monitoring_user_auto', 
          label: 'Create Monitoring User Automatically',
        },{
          type: 'doc',
          id: 'create_monitoring_user_manual', 
          label: 'Manually Creating a Monitoring User',
        },
      ],
    },
    {
      type: 'category',
      label: 'Telegram message', // Installation과 같은 레벨의 큰 분류
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'open_groupchat_obtain_id', 
          label: 'How to Open a Group Chat & Obtain Chat ID',
        },{
          type: 'doc',
          id: 'input_telegram_id', 
          label: 'How to Input Telegram ID',
        },{
          type: 'doc',
          id: 'modifying_telegram_message', 
          label: 'How to Modify Telegram Message',
        },
      ],
    },
  ],
};

module.exports = sidebars;
