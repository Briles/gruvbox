module.exports = function (values) {

  const stOpts = values.options;

  return [

    // Tabs
    {
      class: 'tabset_control',
      settings: [stOpts.disableBorders],
      content_margin: [0, 0, 12, 0],

      'layer1.opacity': 0,
    },

    {
      class: 'tab_control',
      settings: [stOpts.disableBorders],

      'layer2.opacity': 0,
    },

    {
      class: 'tab_control',
      settings: [stOpts.disableBorders],
      attributes: ['selected'],

      'layer1.opacity': 0,
      'layer2.opacity': 0,
    },

    // Sidebar
    {
      class: 'sidebar_container',
      settings: [stOpts.disableBorders],

      'layer1.opacity': 0,
    },

    // Scrollbars
    {
      class: 'scroll_bar_control',
      settings: [stOpts.disableBorders],

      'layer1.opacity': 0,
    },

    // Status Bar
    {
      class: 'status_bar',
      settings: [stOpts.disableBorders],

      'layer2.opacity': 0,
    },

    {
      class: 'panel_control',
      settings: [stOpts.disableBorders],

      'layer1.opacity': 0,
    },

    // Command Palette
    {
      class: 'overlay_control',
      settings: [stOpts.disableBorders],
      content_margin: [0, 14, 0, 0],

      'layer1.opacity': 0,
    },

    {
      class: 'mini_quick_panel_row',
      settings: [stOpts.disableBorders],

      'layer1.opacity': 0,
    },

    {
      class: 'quick_panel_row',
      settings: [stOpts.disableBorders],

      'layer1.opacity': 0,
    },

    // Pane
    {
      class: 'grid_layout_control',
      settings: [stOpts.disableBorders],

      border_size: 0,
    },

  ];
};
