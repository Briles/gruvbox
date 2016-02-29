module.exports = function (values) {
  'use strict';

  const c = values.colors;
  const info = values.info;
  const paths = values.paths;

  return [

    // All labels
    {
      'class': 'label_control',

      'color': c.gs.fg3,
    },

    // Status bar labels
    {
      'class': 'label_control',
      'parents': [{
        'class': 'status_bar',
      }],

      'color': c.gs.fg3,
    },

    // Text field labels
    {
      'class': 'status_bar',
      'content_margin': [10, 0, 0, 0],

      // Layer 0 base
      'layer0.tint': c.container,
      'layer0.opacity': 1,
      'layer0.inner_margin': [2, 2],

      // Border
      'layer2.opacity': 1,
      'layer2.tint': c.border,
      'layer2.draw_center': false,
      'layer2.inner_margin': [0, 1, 0, 0],

      // Visible tint layer
      'layer1.tint': c.container,
      'layer1.opacity': 1,
      'layer1.inner_margin': [2, 2],
    },

    {
      'class': 'status_container',
      'content_margin': [12, 11, 12, 11],
    },

    {
      'class': 'status_button',
      'content_margin': [12, 0, 12, 0],
      'min_size': [75, 0],

      'layer0.tint': c.gs.bg1,
      'layer0.opacity': 1,
      'layer0.draw_center': false,
      'layer0.inner_margin': [1, 0, 0, 0],
    },

    {
      'class': 'label_control',
      'parents': [{
        'class': 'status_button',
        'attributes': ['hover'],
      }],

      'color': c.gs.fg1,
    },

    // Panel Switcher
    {
      'class': 'panel_button_control',
      'content_margin': [12, 12],

      'layer0.texture': `${paths.this}panels.png`,
      'layer0.opacity': 1,

      'layer1.texture': `${paths.this}panels--hover.png`,
      'layer1.opacity': 0,
    },

    {
      'class': 'panel_button_control',
      'attributes': ['hover'],

      'layer1.opacity': 1,
    },

  ];
};
