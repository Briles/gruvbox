module.exports = function (values) {
  'use strict';

  const c = values.colors;
  const info = values.info;
  const paths = values.paths;

  return [

    /**
     *
     * Tabs
     *
     */

    // Tabs Container
    {
      'class': 'tabset_control',
      'content_margin': [-1, 0, 12, 0],
      'tab_overlap': 0,
      'tab_width': 180,
      'tab_min_width': 80,
      'tab_height': 51,
      'mouse_wheel_switch': false,

      'layer0.opacity': 1,
      'layer0.tint': c.container,
      'layer0.inner_margin': [0, 0],

      'layer1.opacity': 1,
      'layer1.tint': c.border,
      'layer1.draw_center': false,
      'layer1.inner_margin': [0, 0, 0, 1],
    },

    {
      'class': 'tabset_control',
      'settings': ['mouse_wheel_switches_tabs', '!enable_tab_scrolling'],
      'mouse_wheel_switch': true,
    },

    // Tab
    {
      'class': 'tab_control',
      'content_margin': [16, 0, 12, 0],
      'max_margin_trim': 0,
      'hit_test_level': 0.4,

      'layer0.tint': c.container,
      'layer0.opacity': 1,

      'layer1.tint': c.border,
      'layer1.draw_center': false,
      'layer1.inner_margin': [1, 0, 1, 0],
      'layer1.opacity': 0,

      'layer2.tint': c.border,
      'layer2.draw_center': false,
      'layer2.inner_margin': [0, 0, 0, 1],
      'layer2.opacity': 1,
    },

    // Selected Tab
    {
      'class': 'tab_control',
      'attributes': ['selected'],

      'layer0.tint': c.background,
      'layer1.opacity': 1,
      'layer2.opacity': 0,
    },

    // Tab Label
    {
      'class': 'tab_label',

      'fg': c.gs.gray,
      'font.size': 11,
      'font.italic': false,
      'font.bold': false,
    },

    // Selected Tab Tab Label
    {
      'class': 'tab_label',
      'parents': [{
        'class': 'tab_control',
        'attributes': ['selected'],
      }],

      'fg': c.gs.fg2,
    },

    // Transient Tab Label
    {
      'class': 'tab_label',
      'attributes': ['transient'],

      'font.italic': true,
    },

    // Hovered Tab Tab Label
    {
      'class': 'tab_label',
      'parents': [{
        'class': 'tab_control',
        'attributes': ['hover'],
      }],

      'fg': c.gs.fg3,
    },

    // Selected & Hovered Tab Tab Label
    {
      'class': 'tab_label',
      'parents': [{
        'class': 'tab_control',
        'attributes': ['selected', 'hover'],
      }],

      'fg': c.gs.fg2,
    },

    // Tab Close Buttons
    {
      'class': 'tab_close_button',
      'content_margin': [8, 8],

      // Close Icon
      'layer0.texture': `${paths.this}close.png`,
      'layer0.inner_margin': 0,
      'layer0.opacity': 1,

      // Close Icon Hover
      'layer1.texture': `${paths.this}close--hover.png`,
      'layer1.opacity': 0,

      // Dirty Icon
      'layer2.texture': `${paths.this}dirty.png`,
      'layer2.inner_margin': 0,

      // Dirty Icon Hover
      'layer3.texture': `${paths.this}dirty.png`,
      'layer3.opacity': 0,
    },

    // Default Tab Close Button Shown
    {
      'class': 'tab_close_button',
      'settings': ['show_tab_close_buttons'],

      'layer0.opacity': 1,
    },

    // Default Tab Close Button Not Shown
    {
      'class': 'tab_close_button',
      'settings': ['!show_tab_close_buttons'],

      'layer0.opacity': 0,
    },

    // Selected Tab
    {
      'class': 'tab_close_button',
      'settings': ['show_tab_close_buttons'],
      'parents': [{
        'class': 'tab_control',
        'attributes': ['selected'],
      }, ],

      'layer0.opacity': 1, // Close Icon
      'layer1.opacity': 0, // Close Icon Hover
    },

    // Default Hover
    {
      'class': 'tab_close_button',
      'settings': ['show_tab_close_buttons'],
      'attributes': ['hover'],

      'layer0.opacity': 0, // Close Icon
      'layer1.opacity': 1, // Close Icon Hover
    },

    // Selected Tab
    {
      'class': 'tab_close_button',
      'settings': ['!show_tab_close_buttons'],
      'parents': [{
        'class': 'tab_control',
        'attributes': ['selected'],
      }, ],

      'layer0.opacity': 0, // Close Icon
      'layer1.opacity': 0, // Close Icon Hover
    },
    // Default hover
    {
      'class': 'tab_close_button',
      'settings': ['!show_tab_close_buttons'],
      'attributes': ['hover'],

      'layer0.opacity': 0, // Close Icon
      'layer1.opacity': 1, // Close Icon Hover
    },

    // Dirty tab
    {
      'class': 'tab_close_button',
      'parents': [{
        'class': 'tab_control',
        'attributes': ['dirty'],
      }, ],

      'layer0.opacity': 0, // Close Icon
      'layer1.opacity': 0, // Close Icon Hover
      'layer2.opacity': 0, // Dirty Icon
      'layer3.opacity': 1, // Dirty Icon Hover

      'content_margin': [8, 8],
    },

    // Dirty tab on hover
    {
      'class': 'tab_close_button',
      'parents': [{
        'class': 'tab_control',
        'attributes': ['dirty'],
      }, ],
      'attributes': ['hover'],

      'layer0.opacity': 0, // Close Icon
      'layer1.opacity': 1, // Close Icon Hover
      'layer2.opacity': 0, // Dirty Icon
      'layer3.opacity': 0, // Dirty Icon Hover
    },

    // Selected dirty tab
    {
      'class': 'tab_close_button',
      'parents': [{
        'class': 'tab_control',
        'attributes': ['selected', 'dirty', ],
      }, ],

      'layer0.opacity': 0, // Close Icon
      'layer1.opacity': 0, // Close Icon Hover
      'layer2.opacity': 0, // Dirty Icon
      'layer3.opacity': 1 // Dirty Icon Hover
    },

    // Selected dirty tab on hover
    {
      'class': 'tab_close_button',
      'parents': [{
        'class': 'tab_control',
        'attributes': ['selected', 'dirty'],
      }, ],
      'attributes': ['hover'],

      'layer0.opacity': 0, // Close Icon
      'layer1.opacity': 1, // Close Icon Hover
      'layer2.opacity': 0, // Dirty Icon
      'layer3.opacity': 0, // Dirty Icon Hover
    },

    // tab set scroll left | scroll right
    {
      'class': 'scroll_tabs_left_button',
      'content_margin': [14, 7],

      'layer0.texture': `${paths.this}prevtab.png`,
      'layer0.opacity': 1,
      'layer0.inner_margin': 0,

      'layer1.texture': `${paths.this}prevtab--hover.png`,
      'layer1.opacity': 0,
      'layer1.inner_margin': 0,
    },

    {
      'class': 'scroll_tabs_left_button',
      'attributes': ['hover'],

      'layer1.opacity': 1,
    },

    {
      'class': 'scroll_tabs_right_button',
      'content_margin': [14, 7],

      'layer0.texture': `${paths.this}nexttab.png`,
      'layer0.opacity': 1,
      'layer0.inner_margin': 0,

      'layer1.texture': `${paths.this}nexttab--hover.png`,
      'layer1.opacity': 0,
      'layer1.inner_margin': 0,
    },

    {
      'class': 'scroll_tabs_right_button',
      'attributes': ['hover'],

      'layer1.opacity': 1,
    },

    {
      'class': 'show_tabs_dropdown_button',
      'content_margin': [12, 12],

      'layer0.texture': `${paths.this}more.png`,
      'layer0.opacity': 1,
      'layer0.inner_margin': 0,

      'layer1.texture': `${paths.this}more--hover.png`,
      'layer1.opacity': 0,
      'layer1.inner_margin': 0,
    },

    {
      'class': 'show_tabs_dropdown_button',
      'attributes': ['hover'],
      'layer1.opacity': 1,
    },

  ];
};
