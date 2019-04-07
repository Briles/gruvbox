module.exports = function (values) {

  const c = values.colors;
  const stOpts = values.options;

  return [

    // Sidebar Container
    {
      class: 'sidebar_container',
      settings: [stOpts.lessContrast],

      // Background
      'layer0.tint': 'var(containerSofter)',

      // Border - Right
      'layer1.tint': 'var(borderSofter)',
    },

    // Tabs Container
    {
      class: 'tabset_control',
      settings: [stOpts.lessContrast],

      // Background
      'layer0.tint': 'var(containerSofter)',

      // Border - Bottom
      'layer1.tint': 'var(borderSofter)',
    },

    // Tab
    {
      class: 'tab_control',
      settings: [stOpts.lessContrast],

      // Background
      'layer0.tint': 'var(containerSofter)',

      // Border - Left & Right
      'layer1.tint': 'var(borderSofter)',

      // Border - Bottom
      'layer2.tint': 'var(borderSofter)',
    },

    // Reset the selected tab
    // Selected Tab
    {
      class: 'tab_control',
      attributes: ['selected'],

      'layer0.tint': 'var(bg)',
    },

    // Normal Vertical Scrollbar Track
    {
      class: 'scroll_bar_control',
      settings: [stOpts.lessContrast],

      // Background
      'layer0.tint': 'var(containerSofter)',

      // Border - Left
      'layer1.tint': 'var(borderSofter)',
    },

    // Scrollbars Corner
    {
      class: 'scroll_corner_control',
      settings: [stOpts.lessContrast],

      // Background
      'layer0.tint': 'var(containerSofter)',
    },

    // Status Bar
    {
      class: 'status_bar',
      settings: [stOpts.lessContrast],

      // Background
      'layer0.tint': 'var(containerSofter)',

      // Border - Top
      'layer2.tint': 'var(borderSofter)',
    },

    // Find & Replace & Console Panel
    {
      class: 'panel_control',
      settings: [stOpts.lessContrast],

      // Background
      'layer0.tint': 'var(containerSofter)',

      // Border - Top
      'layer1.tint': 'var(borderSofter)',
    },

    // Button
    {
      class: 'button_control',
      settings: [stOpts.lessContrast],

      // Background
      'layer0.tint': 'var(containerSofter)',

      // Background Pressed
      'layer2.tint': 'var(borderSofter)',
    },

    // Command Palette & Goto Panel
    {
      class: 'overlay_control',
      settings: [stOpts.lessContrast],

      // Background
      'layer0.tint': 'var(containerSofter)',

      // Border - Left, Right, Bottom
      'layer1.tint': 'var(borderSofter)',
    },

    // Command Palette List Item
    {
      class: 'mini_quick_panel_row',
      settings: [stOpts.lessContrast],

      // Border - Top
      'layer1.tint': 'var(borderSofter)',
    },

    // Quick Switch Project Panel
    {
      class: 'quick_panel',
      settings: [stOpts.lessContrast],

      // Background
      'layer0.tint': 'var(containerSofter)',
    },

    // Quick Switch Project Panel List Item
    {
      class: 'quick_panel_row',
      settings: [stOpts.lessContrast],

      // Border - Top
      'layer1.tint': 'var(borderSofter)',
    },

    {
      class: 'dialog',
      settings: [stOpts.lessContrast],

      // Background
      'layer0.tint': 'var(containerSofter)',
    },

    // Pane
    {
      class: 'grid_layout_control',
      settings: [stOpts.lessContrast],

      border_color: 'var(borderSofter)',
    },

    // AutoComplete Popup Container
    {
      class: 'popup_control',
      settings: [stOpts.lessContrast],

      // Background
      'layer0.tint': 'var(containerSofter)',
    },

    // AutoComplete Popup
    {
      class: 'auto_complete',
      settings: [stOpts.lessContrast],

      'layer0.tint': 'var(containerSofter)',
    },

  ];
};
