module.exports = function (values) {
  'use strict';

  const c = values.colors;
  const info = values.info;
  const paths = values.paths;

  return [

    // Status bar panel
    {
      'class': 'panel_control',
      'content_margin': [6, 14, 6, 8],

      'layer0.tint': c.container,
      'layer0.inner_margin': [0, 0, 0, 0],
      'layer0.opacity': 1,

      'layer1.tint': c.border,
      'layer1.draw_center': false,

      'layer1.inner_margin': [0, 1, 0, 0],
      'layer1.opacity': 1,
    },

    // Status bar panel close icon

    {
      'class': 'panel_close_button',
      'content_margin': [0, 0], // 8,8 to show

      'layer0.texture': `${paths.this}close.png`,
      'layer0.opacity': 0.6,

      'layer1.texture': `${paths.this}close--hover.png`,
      'layer1.opacity': 0,
    },

    {
      'class': 'panel_close_button',
      'attributes': ['hover'],

      'layer0.opacity': 0,
      'layer1.opacity': 1,
    },

    // Textline Input

    {
      'class': 'text_line_control',
      'content_margin': [18, 2, 18, 2],
    },

    // Textline Input Inside Overlay Panels

    {
      'class': 'text_line_control',
      'parents': [{
        'class': 'overlay_control',
      }],

      'content_margin': [18, 4, 18, 14],
    },

    // Textline Input Overflow Menu

    {
      'class': 'dropdown_button_control',
      'content_margin': [12, 12],

      'layer0.texture': `${paths.this}more.png`,
      'layer0.opacity': 1,
      'layer0.inner_margin': [0, 0],

      'layer1.texture': `${paths.this}more--hover.png`,
      'layer1.opacity': 0,
      'layer1.inner_margin': [0, 0],
    },

    {
      'class': 'dropdown_button_control',
      'attributes': ['hover'],

      'layer1.opacity': 1,
    },

  ];
};
