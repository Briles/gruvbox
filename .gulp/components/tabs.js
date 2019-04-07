const mixins = require('../mixins.js');

module.exports = function (values) {

  const c = values.colors;
  const paths = values.paths;

  return [

    // Tabs Container
    {
      class: 'tabset_control',
      content_margin: [-1, 0, 12, 0],
      tab_overlap: 0,
      tab_width: 180,
      tab_min_width: 80,
      tab_height: 51,
      mouse_wheel_switch: false,

      // Background
      'layer0.opacity': 1,
      'layer0.tint': 'var(container)',

      // Border - Bottom
      'layer1.opacity': 1,
      'layer1.tint': 'var(border)',
      'layer1.draw_center': false,
      'layer1.inner_margin': [0, 0, 0, 1],

      // Border - Left
      'layer2.opacity': 0,
      'layer2.tint': 'var(border)',
      'layer2.draw_center': false,
      'layer2.inner_margin': [1, 0, 0, 0],
    },

    // Reset tab scrolling
    {
      class: 'tabset_control',
      settings: ['mouse_wheel_switches_tabs', '!enable_tab_scrolling'],
      mouse_wheel_switch: true,
    },

    // Tab
    {
      class: 'tab_control',
      content_margin: [16, 0, 12, 0],
      max_margin_trim: 0,
      hit_test_level: 0.4,

      // Background
      'layer0.tint': 'var(container)',
      'layer0.opacity': 1,

      // Border - Left & Right
      'layer1.tint': 'var(border)',
      'layer1.draw_center': false,
      'layer1.inner_margin': [1, 0, 1, 0],
      'layer1.opacity': 0,

      // Border - Bottom
      'layer2.tint': 'var(border)',
      'layer2.draw_center': false,
      'layer2.inner_margin': [0, 0, 0, 1],
      'layer2.opacity': 1,
    },

    // Selected Tab
    {
      class: 'tab_control',
      attributes: ['selected'],

      // Background
      'layer0.tint': 'var(bg)',

      'layer1.opacity': 1, // Border - Left & Right
      'layer2.opacity': 0, // Border - Bottom
    },

    // Tab Label
    {
      class: 'tab_label',

      'font.size': 11,
      'font.italic': false,
      'font.bold': false,
    },

    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'tab_label',

        parents: [
          {
            attributes: [lumin],
          },
        ],

        fg: palette('gray_gs'),
      };
    }),

    // Selected Tab Tab Label
    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'tab_label',

        parents: [
          {
            class: 'tab_control',
            attributes: ['selected', lumin]
          }
        ],

        fg: palette('fg2_gs'),
      };
    }),

    // Transient Tab Label
    {
      class: 'tab_label',
      attributes: ['transient'],

      'font.italic': true,
    },

    // Hovered Tab Tab Label
    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'tab_label',

        parents: [
          {
            class: 'tab_control',
            attributes: ['hover', lumin]
          }
        ],

        fg: palette('fg3_gs'),
      };
    }),

    // Selected & Hovered Tab Tab Label
    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'tab_label',

        parents: [
          {
            class: 'tab_control',
            attributes: ['selected', 'hover', lumin]
          }
        ],

        fg: palette('fg2_gs'),
      };
    }),

    // Tab Close Buttons
    {
      class: 'tab_close_button',
      content_margin: [8, 8],

      // Close Icon
      'layer0.texture': `${paths.commons}close.png`,
      'layer0.opacity': 1,
      // 'layer0.tint': 'var(close_default)',

      // Dirty Icon
      'layer2.texture': `${paths.commons}dirty.png`,
      'layer2.opacity': 0,
      'layer2.tint': 'var(dirty_default)',
    },

    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'tab_close_button',

        parents: [
          {
            class: 'tab_control',
            attributes: [lumin]
          }
        ],

        'layer0.tint': palette('close_default_gs'),
      };
    }),

    // Default Tab Close Button Not Shown
    {
      class: 'tab_close_button',
      settings: ['!show_tab_close_buttons'],

      'layer0.opacity': 0, // Close Icon
    },

    // Tab Close Hover
    {
      class: 'tab_close_button',
      attributes: ['hover'],

      'layer0.tint': 'var(close_hover)',
    },

    // Dirty Tab
    {
      class: 'tab_close_button',
      parents: [

        {
          class: 'tab_control',
          attributes: ['dirty'],
        },
      ],

      'layer0.opacity': 0, // Close Icon
      'layer2.opacity': 1, // Dirty Icon
    },

    // Dirty Tab Hover
    {
      class: 'tab_close_button',
      parents: [

        {
          class: 'tab_control',
          attributes: ['dirty'],
        },
      ],
      attributes: ['hover'],

      'layer0.opacity': 1, // Close Icon
      'layer0.tint': 'var(close_hover)',
      'layer2.opacity': 0, // Dirty Icon
    },

    // Selected dirty tab
    {
      class: 'tab_close_button',
      parents: [

        {
          class: 'tab_control',
          attributes: ['selected', 'dirty'],
        },
      ],

      'layer0.opacity': 0, // Close Icon
      'layer2.opacity': 1, // Dirty Icon
    },

    // Selected dirty tab on hover
    {
      class: 'tab_close_button',
      parents: [

        {
          class: 'tab_control',
          attributes: ['selected', 'dirty'],
        },
      ],
      attributes: ['hover'],

      'layer0.opacity': 1, // Close Icon
      'layer0.tint': 'var(close_hover)',
      'layer2.opacity': 0, // Dirty Icon
    },

    // Tab Scroll Left Button
    {
      class: 'scroll_tabs_left_button',
      content_margin: [14, 7],

      'layer0.texture': `${paths.commons}prevtab.png`,
      'layer0.opacity': 1,
      // 'layer0.tint': 'var(tabbar_icon_default)',
    },

    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'scroll_tabs_left_button',

        parents: [
          {
            class: 'tabset_control',
            attributes: [lumin]
          }
        ],

        'layer0.tint': palette('tabbar_icon_default_gs'),
      };
    }),

    // Tab Scroll Left Button Hover
    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'scroll_tabs_left_button',
        attributes: ['hover'],

        parents: [
          {
            class: 'tabset_control',
            attributes: [lumin]
          }
        ],

        'layer0.tint': palette('tabbar_icon_hover_gs'),
      };
    }),

    // Tab Scroll Right Button
    {
      class: 'scroll_tabs_right_button',
      content_margin: [14, 7],

      'layer0.texture': `${paths.commons}nexttab.png`,
      'layer0.opacity': 1,
      // 'layer0.tint': 'var(tabbar_icon_default)',
    },

    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'scroll_tabs_right_button',

        parents: [
          {
            class: 'tabset_control',
            attributes: [lumin]
          }
        ],

        'layer0.tint': palette('tabbar_icon_default_gs'),
      };
    }),

    // Tab Scroll Right Button Hover
    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'scroll_tabs_right_button',
        attributes: ['hover'],

        parents: [
          {
            class: 'tabset_control',
            attributes: [lumin]
          }
        ],

        'layer0.tint': palette('tabbar_icon_hover_gs'),
      };
    }),

    // Tab Scroll Overflow Menu Button
    {
      class: 'show_tabs_dropdown_button',
      content_margin: [12, 12],

      'layer0.texture': `${paths.commons}more.png`,
      'layer0.opacity': 1,
      // 'layer0.tint': 'var(tabbar_icon_default)',
    },

    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'show_tabs_dropdown_button',

        parents: [
          {
            class: 'tabset_control',
            attributes: [lumin]
          }
        ],

        'layer0.tint': palette('tabbar_icon_default_gs'),
      };
    }),

    // Tab Scroll Overflow Menu Button Hover
    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'show_tabs_dropdown_button',
        attributes: ['hover'],

        parents: [
          {
            class: 'tabset_control',
            attributes: [lumin]
          }
        ],

        'layer0.tint': palette('tabbar_icon_hover_gs'),
      };
    }),
  ];
};
