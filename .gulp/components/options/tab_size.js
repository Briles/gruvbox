module.exports = function (values) {

  const stOpts = values.options;

  return [

    // Extra Extra Small Tabs
    {
      class: 'tabset_control',
      settings: [stOpts.tabsXxs],
      tab_height: 33,
    },

    {
      class: 'tab_control',
      settings: [stOpts.tabsXxs],
      content_margin: [12, 0, 8, 0],
    },

    // Extra Small Tabs
    {
      class: 'tabset_control',
      settings: [stOpts.tabsXs],
      tab_height: 39,
    },

    {
      class: 'tab_control',
      settings: [stOpts.tabsXs],
      content_margin: [14, 0, 10, 0],
    },

    // Small Tabs
    {
      class: 'tabset_control',
      settings: [stOpts.tabsS],
      tab_height: 45,
    },

    {
      class: 'tab_control',
      settings: [stOpts.tabsS],
      content_margin: [16, 0, 12, 0],
    },

    // Large Tabs
    {
      class: 'tabset_control',
      settings: [stOpts.tabsL],
      tab_height: 57,
    },

    {
      class: 'tab_control',
      settings: [stOpts.tabsL],
      content_margin: [16, 0, 12, 0],
    },

    // Extra Large Tabs
    {
      class: 'tabset_control',
      settings: [stOpts.tabsXl],
      tab_height: 63,
    },

    {
      class: 'tab_control',
      settings: [stOpts.tabsXl],
      content_margin: [18, 0, 14, 0],
    },

    // Extra Extra Large Tabs
    {
      class: 'tabset_control',
      settings: [stOpts.tabsXxl],
      tab_height: 69,
    },

    {
      class: 'tab_control',
      settings: [stOpts.tabsXxl],
      content_margin: [20, 0, 16, 0],
    },

  ];
};
