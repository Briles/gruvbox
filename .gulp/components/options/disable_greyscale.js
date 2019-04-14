const mixins = require('../../mixins.js');

module.exports = function (values) {

  const c = values.colors;
  const stOpts = values.options;

  return [

    // Title Bar
    {
      class: 'title_bar',
      settings: [stOpts.disableGreyscaleColors],

      fg: 'var(fg)',
      bg: 'var(container)',
    },

    // Button labels
    {
      class: 'label_control',
      settings: [stOpts.disableGreyscaleColors],

      parents: [

        {
          class: 'button_control',
        },

      ],

      color: 'var(fg)',
    },

    // All labels
    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'label_control',
        settings: [stOpts.disableGreyscaleColors],

        parents: [
          {
            attributes: [lumin],
          },
        ],

        color: palette('fg3'),
      };
    }),

    // Status bar labels
    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'label_control',
        settings: [stOpts.disableGreyscaleColors],

        parents: [
          {
            attributes: [lumin],
          },
          {
            class: 'status_bar',
          },
        ],

        color: palette('fg3'),
      };
    }),

    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'status_button',
        settings: [stOpts.disableGreyscaleColors],

        parents: [
          {
            attributes: [lumin],
          },
        ],

        'layer0.tint': palette('bg1'),
      };
    }),

    {
      class: 'label_control',
      settings: [stOpts.disableGreyscaleColors],

      parents: [

        {
          class: 'status_button',
          attributes: ['hover'],
        },

      ],

      color: 'var(fg1)',
    },

    // Sidebar
    {
      class: 'sidebar_heading',
      settings: [stOpts.disableGreyscaleColors],

      fg: 'var(fg1)',
    },

    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'sidebar_label',
        settings: [stOpts.disableGreyscaleColors],

        parents: [
          {
            attributes: [lumin],
          },
        ],

        fg: palette('gray'),
      };
    }),

    {
      class: 'sidebar_label',
      settings: [stOpts.disableGreyscaleColors],

      parents: [

        {
          class: 'tree_row',
          attributes: ['hover'],
        },

      ],

      fg: 'var(fg1)',
    },

    {
      class: 'sidebar_label',
      settings: [stOpts.disableGreyscaleColors],

      parents: [

        {
          class: 'tree_row',
          attributes: ['selected'],
        },

      ],

      fg: 'var(fg1)',
    },

    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'sidebar_label',
        settings: [stOpts.disableGreyscaleColors],

        parents: [
          {
            attributes: [lumin],
          },
          {
            class: 'tree_row',
            attributes: ['expandable'],
          },
        ],

        fg: palette('fg4'),
      };
    }),

    {
      class: 'sidebar_label',
      settings: [stOpts.disableGreyscaleColors],

      parents: [

        {
          class: 'tree_row',
          attributes: ['expanded'],
        },

      ],

      fg: 'var(fg1)',
    },

    {
      class: 'sidebar_label',
      settings: [stOpts.disableGreyscaleColors],

      parents: [

        {
          class: 'tree_row',
          attributes: ['hover'],
        },

      ],

      fg: 'var(fg1)',
    },

    {
      class: 'sidebar_label',
      settings: [stOpts.disableGreyscaleColors],

      parents: [

        {
          class: 'tree_row',
          attributes: ['expanded', 'selected'],
        },

      ],

      fg: 'var(fg1)',
    },

    {
      class: 'sidebar_label',
      settings: [stOpts.disableGreyscaleColors],
      attributes: ['transient'],

      fg: 'var(fg1)',
    },

    // Tab Label
    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'tab_label',
        settings: [stOpts.disableGreyscaleColors],

        parents: [
          {
            attributes: [lumin],
          },
        ],

        fg: palette('gray'),
      };
    }),

    // Selected Tab Tab Label
    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'tab_label',
        settings: [stOpts.disableGreyscaleColors],

        parents: [
          {
            attributes: [lumin],
          },
          {
            class: 'tab_control',
            attributes: ['selected'],
          },
        ],

        fg: palette('fg2'),
      };
    }),

    // Hovered Tab Tab Label
    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'tab_label',
        settings: [stOpts.disableGreyscaleColors],

        parents: [
          {
            attributes: [lumin],
          },
          {
            class: 'tab_control',
            attributes: ['hover'],
          },
        ],

        fg: palette('fg3'),
      };
    }),

    // Selected & Hovered Tab Tab Label
    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'tab_label',
        settings: [stOpts.disableGreyscaleColors],

        parents: [
          {
            attributes: [lumin],
          },
          {
            class: 'tab_control',
            attributes: ['selected', 'hover'],
          },
        ],

        fg: palette('fg2'),
      };
    }),

    // Panel labels
    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'quick_panel_label',
        settings: [stOpts.disableGreyscaleColors],

        parents: [
          {
            attributes: [lumin],
          },
        ],

        fg: palette('fg4'),
        match_fg: palette('fg1'),
        selected_fg: palette('fg4'),
        selected_match_fg: palette('fg1'),
      };
    }),

    // Panel labels
    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'quick_panel_label',
        settings: [stOpts.disableGreyscaleColors],

        parents: [
          {
            attributes: [lumin],
          },
          {
            class: 'overlay_control',
          },
        ],

        fg: palette('fg4'),
        match_fg: palette('fg1'),
        selected_fg: palette('fg4'),
        selected_match_fg: palette('fg1'),
      };
    }),

    // Panels sublabels
    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'quick_panel_path_label',
        settings: [stOpts.disableGreyscaleColors],

        parents: [
          {
            attributes: [lumin],
          },
        ],

        fg: palette('fg4'),
        match_fg: palette('fg1'),
        selected_fg: palette('fg4'),
        selected_match_fg: palette('fg1'),
      };
    }),

    // Panels data / score
    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'quick_panel_score_label',
        settings: [stOpts.disableGreyscaleColors],

        parents: [
          {
            attributes: [lumin],
          },
        ],

        fg: palette('fg4'),
        selected_fg: palette('fg1'),
      };
    }),

    // Autocomplete
    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'auto_complete_label',
        settings: [stOpts.disableGreyscaleColors],

        parents: [
          {
            attributes: [lumin],
          },
        ],

        fg: palette('fg4'),
        match_fg: palette('fg1'),
        selected_fg: palette('fg4'),
        selected_match_fg: palette('fg1'),
      };
    }),

    // Folder Icons
    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'icon_folder',
        settings: [stOpts.disableGreyscaleColors],

        parents: [
          {
            class: 'window',
            attributes: [lumin],
          },
        ],

        'layer1.tint': palette('folder_default'),
        'layer2.tint': palette('folder_hover'),
        'layer3.tint': palette('folder_expanded'),
      };
    }),

    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'icon_folder_loading',
        settings: [stOpts.disableGreyscaleColors],

        parents: [
          {
            class: 'window',
            attributes: [lumin],
          },
        ],

        'layer1.tint': palette('folder_hover'),
      };
    }),

    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'icon_folder_dup',
        settings: [stOpts.disableGreyscaleColors],

        parents: [
          {
            class: 'window',
            attributes: [lumin],
          },
        ],

        'layer1.tint': palette('folder_hover'),
        'layer2.tint': palette('folder_expanded'),
      };
    }),

    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'close_button',

        parents: [
          {
            class: 'window',
            attributes: [lumin],
          },
          {
            class: 'tree_row',
            attributes: ['!hover'],
          },
        ],

        'layer0.tint': palette('close_default'),
      };
    }),

    // Tab Close Icons
    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'tab_close_button',
        settings: [stOpts.disableGreyscaleColors],

        parents: [
          {
            class: 'tab_control',
            attributes: ['!hover', lumin]
          }
        ],

        'layer0.tint': palette('close_default'),
      };
    }),

    // Tab Scroll Left Button
    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'scroll_tabs_left_button',
        settings: [stOpts.disableGreyscaleColors],

        parents: [
          {
            class: 'tabset_control',
            attributes: [lumin]
          }
        ],

        'layer0.tint': palette('tabbar_icon_default'),
      };
    }),

    // Tab Scroll Left Button Hover
    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'scroll_tabs_left_button',
        settings: [stOpts.disableGreyscaleColors],
        attributes: ['hover'],

        parents: [
          {
            class: 'tabset_control',
            attributes: [lumin]
          }
        ],

        'layer0.tint': palette('tabbar_icon_hover'),
      };
    }),

    // Tab Scroll Right Button
    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'scroll_tabs_right_button',
        settings: [stOpts.disableGreyscaleColors],

        parents: [
          {
            class: 'tabset_control',
            attributes: [lumin]
          }
        ],

        'layer0.tint': palette('tabbar_icon_default'),
      };
    }),

    // Tab Scroll Right Button Hover
    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'scroll_tabs_right_button',
        settings: [stOpts.disableGreyscaleColors],
        attributes: ['hover'],

        parents: [
          {
            class: 'tabset_control',
            attributes: [lumin]
          }
        ],

        'layer0.tint': palette('tabbar_icon_hover'),
      };
    }),

    // Tab Scroll Overflow Menu Button
    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'show_tabs_dropdown_button',
        settings: [stOpts.disableGreyscaleColors],

        parents: [
          {
            class: 'tabset_control',
            attributes: [lumin]
          }
        ],

        'layer0.tint': palette('tabbar_icon_default'),
      };
    }),

    // Tab Scroll Overflow Menu Button Hover
    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'show_tabs_dropdown_button',
        settings: [stOpts.disableGreyscaleColors],
        attributes: ['hover'],

        parents: [
          {
            class: 'tabset_control',
            attributes: [lumin]
          }
        ],

        'layer0.tint': palette('tabbar_icon_hover'),
      };
    }),
  ];
};
