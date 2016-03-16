module.exports = function (values) {
  'use strict';

  const c = values.colors;
  const paths = values.paths;

  return [

    // Status Bar Panel
    {
      class: 'panel_control',
      content_margin: [6, 14, 6, 8],

      // Background
      'layer0.tint': c.container,
      'layer0.opacity': 1,

      // Border - Top
      'layer1.tint': c.border,
      'layer1.draw_center': false,
      'layer1.inner_margin': [0, 1, 0, 0],
      'layer1.opacity': 1,
    },

    // Status Bar Panel Close Icon
    {
      class: 'panel_close_button',
      content_margin: [0, 0],

      // Default
      'layer0.texture': `${paths.this}close.png`,
      'layer0.opacity': 1,

      // Hover
      'layer1.texture': `${paths.this}close--hover.png`,
      'layer1.opacity': 0,
    },

    // Status Bar Panel Close Icon Hover
    {
      class: 'panel_close_button',
      attributes: ['hover'],

      'layer1.opacity': 1, // Hover
    },

    // Textline Input
    {
      class: 'text_line_control',
      content_margin: [18, 2, 18, 2],
    },

    // Textline Input Inside Overlay Panels
    {
      class: 'text_line_control',
      parents: [

        {
          class: 'overlay_control',
        },

      ],

      content_margin: [18, 4, 18, 14],
    },

    // Textline Input Overflow Menu
    {
      class: 'dropdown_button_control',
      content_margin: [12, 12],

      // Default
      'layer0.texture': `${paths.this}more.png`,
      'layer0.opacity': 1,

      // Hover
      'layer1.texture': `${paths.this}more--hover.png`,
      'layer1.opacity': 0,
    },

    // Textline Input Overflow Menu Hover
    {
      class: 'dropdown_button_control',
      attributes: ['hover'],

      'layer1.opacity': 1, // Hover
    },

  ];
};
