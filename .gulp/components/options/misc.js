module.exports = function (values) {

  const stOpts = values.options;

  return [

    // Autowidth Tabs
    {
      class: 'tabset_control',
      settings: [stOpts.tabsAutowidth],
      tab_width: 0,
    },

    // Bold Tabs
    {
      class: 'tab_label',
      settings: [stOpts.tabsBold],
      'font.bold': true,
    },

    // Hide Sidebar File-Type Icons
    {
      class: 'icon_file_type',
      settings: [stOpts.disableFileIcons],
      content_margin: [0, 0],

      'layer0.opacity': 0,
    },

    // Hide Sidebar Folder Icons
    {
      class: 'icon_folder',
      settings: [stOpts.disableFolderIcons],

      content_margin: [0, 0],
    },

    // Folder Loading
    {
      class: 'icon_folder_loading',
      settings: [stOpts.disableFolderIcons],

      content_margin: [0, 0],
    },

    // Symlinked Folder
    {
      class: 'icon_folder_dup',
      settings: [stOpts.disableFolderIcons],

      content_margin: [0, 0],
    },

    // Enable Status Bar Close Button
    {
      class: 'panel_close_button',
      settings: [stOpts.enablePanelCloseButton],
      content_margin: [8, 8],
    },

    // Disable Panel Switcher
    {
      class: 'panel_button_control',
      settings: [stOpts.disablePanelsButton],
      content_margin: [0, 0],
    },

    // Remove the status_bar margin to compensate
    {
      class: 'status_bar',
      settings: [stOpts.disablePanelsButton],
      content_margin: [0, 0],
    },

    // Disable Faded File Icons
    {
      class: 'icon_file_type',
      settings: [stOpts.disableFadedFileIcons],

      'layer0.opacity': 1,
    },

    // Highlight Active Tree Row
    {
      class: 'tree_row',
      settings: [stOpts.enableTreeRowHighlight],

      attributes: ['selected'],

      'layer0.opacity': 1,
    },

    // Highlight Active Buttons
    {
      class: 'icon_button_control',
      settings: [stOpts.enableActiveButtonHighlight],
      attributes: ['selected'],

      'layer0.opacity': 1,
    },

    // Bold Statusbar Labels
    {
      class: 'label_control',
      settings: [stOpts.statusbarBold],
      parents: [

        {
          class: 'status_bar',
        },

      ],

      'font.bold': true,
    },

    // Bold Button Labels

    {
      class: 'label_control',
      settings: [stOpts.buttonsBold],
      parents: [

        {
          class: 'button_control',
        },

      ],

      'font.bold': true,
    },

    /**
     * AutoComplete Border
     */

    {
      class: 'popup_control',
      settings: [stOpts.autocompleteBorders],
      content_margin: [1, 1],

      // Border
      'layer1.opacity': 1,
    },

    {
      class: 'popup_control',
      settings: [stOpts.autocompleteBordersL],
      content_margin: [2, 2],

      // Border
      'layer1.opacity': 1,
      'layer1.inner_margin': [2, 2],
    },

    /**
     * Disable Command Palette Row Border
     */

    {
      class: 'mini_quick_panel_row',
      settings: [stOpts.disableCommandPaletteRowBorder],

      // Border - Top
      'layer1.opacity': 0,
    },

    {
      class: 'quick_panel_row',
      settings: [stOpts.disableCommandPaletteRowBorder],

      // Border - Top
      'layer1.opacity': 0,
    },

    // Disabled AutoComplete Row Highlight
    {
      class: 'table_row',
      settings: [stOpts.disableAutocompleteRowHighlight],
      attributes: ['selected'],

      'layer0.opacity': 0, // Background
    },

    // Disabled Command Palette Row Highlight
    {
      class: 'mini_quick_panel_row',
      settings: [stOpts.disableCommandPaletteRowHighlight],
      attributes: ['selected'],

      'layer0.opacity': 0, // Background
    },

  ];
};
