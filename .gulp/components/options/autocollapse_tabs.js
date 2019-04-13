module.exports = function (values) {

  const stOpts = values.options;

  return [

    {
      class: 'tabset_control',
      settings: [stOpts.autocollapseTabs],

      content_margin: [-1, 4, 12, 0],
      tab_height: 0,
    },

    // Trigger Sizes
    {
      class: 'tabset_control',
      settings: [stOpts.autocollapseTabs, stOpts.autocollapseTabsTriggerXs],

      content_margin: [-1, 2, 12, 0],
    },

    {
      class: 'tabset_control',
      settings: [stOpts.autocollapseTabs, stOpts.autocollapseTabsTriggerS],

      content_margin: [-1, 3, 12, 0],
    },

    {
      class: 'tabset_control',
      settings: [stOpts.autocollapseTabs, stOpts.autocollapseTabsTriggerL],

      content_margin: [-1, 5, 12, 0],
    },

    {
      class: 'tabset_control',
      settings: [stOpts.autocollapseTabs, stOpts.autocollapseTabsTriggerXl],

      content_margin: [-1, 6, 12, 0],
    },

    // Autocollapse Hover
    {
      class: 'tabset_control',
      settings: [stOpts.autocollapseTabs],
      attributes: ['hover'],

      content_margin: [-1, 0, 12, 0],
    },

    // Default Tabs
    {
      class: 'tabset_control',
      settings: [stOpts.autocollapseTabs],
      attributes: ['hover'],

      tab_height: 51,
    },

    // Extra Extra Small Tabs
    {
      class: 'tabset_control',
      settings: [stOpts.tabsXxs, stOpts.autocollapseTabs],
      attributes: ['hover'],
      tab_height: 33,
    },

    // Extra Small Tabs
    {
      class: 'tabset_control',
      settings: [stOpts.tabsXs, stOpts.autocollapseTabs],
      attributes: ['hover'],
      tab_height: 39,
    },

    // Small Tabs
    {
      class: 'tabset_control',
      settings: [stOpts.tabsS, stOpts.autocollapseTabs],
      attributes: ['hover'],
      tab_height: 45,
    },

    // Large Tabs
    {
      class: 'tabset_control',
      settings: [stOpts.tabsL, stOpts.autocollapseTabs],
      attributes: ['hover'],
      tab_height: 57,
    },

    // Extra Large Tabs
    {
      class: 'tabset_control',
      settings: [stOpts.tabsXl, stOpts.autocollapseTabs],
      attributes: ['hover'],
      tab_height: 63,
    },

    // Extra Extra Large Tabs
    {
      class: 'tabset_control',
      settings: [stOpts.tabsXxl, stOpts.autocollapseTabs],
      attributes: ['hover'],
      tab_height: 69,
    },

    // Tab Scroll Left Button
    {
      class: 'scroll_tabs_left_button',
      settings: [stOpts.autocollapseTabs],

      content_margin: [0, 0],
    },

    // Tab Scroll Left Button Hover
    {
      class: 'scroll_tabs_left_button',
      settings: [stOpts.autocollapseTabs],
      parents: [

        {
          class: 'tabset_control',
          attributes: ['hover'],
        },

      ],

      content_margin: [14, 7],
    },

    // Tab Scroll Right Button
    {
      class: 'scroll_tabs_right_button',
      settings: [stOpts.autocollapseTabs],

      content_margin: [0, 0],
    },

    // Tab Scroll Right Button Hover
    {
      class: 'scroll_tabs_right_button',
      settings: [stOpts.autocollapseTabs],
      parents: [

        {
          class: 'tabset_control',
          attributes: ['hover'],
        },

      ],

      content_margin: [14, 7],
    },

    // Tab Scroll Overflow Menu Button
    {
      class: 'show_tabs_dropdown_button',
      settings: [stOpts.autocollapseTabs],

      content_margin: [0, 0],
    },

    // Tab Scroll Overflow Menu Button Hover
    {
      class: 'show_tabs_dropdown_button',
      settings: [stOpts.autocollapseTabs],
      parents: [

        {
          class: 'tabset_control',
          attributes: ['hover'],
        },

      ],

      content_margin: [12, 12],
    },

  ];
};
