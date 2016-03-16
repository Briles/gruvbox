module.exports = function (values) {
  'use strict';

  const c = values.colors;
  const info = values.info;
  const paths = values.paths;

  return [

    // Normal Vertical Scrollbar Track
    {
      class: 'scroll_bar_control',
      blur: false,

      // Background
      'layer0.tint': c.container,
      'layer0.opacity': 1,
      'layer0.inner_margin': [0, 6],

      // Border - Left
      'layer1.tint': c.border,
      'layer1.opacity': 1,
      'layer1.draw_center': false,
      'layer1.inner_margin': [1, 0, 0, 0],
    },

    // Normal Vertical Scrollbar Track Inside Sidebar
    {
      class: 'scroll_bar_control',
      parents: [

        {
          class: 'sidebar_container',
        },

      ],

      'layer1.opacity': 0, // Border - Right
    },

    // Normal Vertical Scrollbar Track Inside Console Panel
    {
      class: 'scroll_bar_control',
      parents: [

        {
          class: 'panel_control',
        },

      ],

      'layer1.opacity': 0, // Border - Right
    },

    // Normal Vertical Scrollbar Track Inside AutoComplete
    {
      class: 'scroll_bar_control',
      parents: [

        {
          class: 'popup_control',
        },

      ],

      'layer1.opacity': 0, // Border - Right
    },

    // Normal Vertical Scrollbar Track Inside Overlay Panel
    {
      class: 'scroll_bar_control',
      parents: [

        {
          class: 'overlay_control',
        },

      ],

      'layer1.opacity': 0, // Border - Right
    },

    // Normal Horizontal Scrollbar Track
    {
      class: 'scroll_bar_control',
      attributes: ['horizontal'],
      blur: false,

      'layer1.inner_margin': [0, 1, 0, 0], // Border - Top
    },

    // Scrollbars Corner
    {
      class: 'scroll_corner_control',

      // Background
      'layer0.tint': c.container,
      'layer0.opacity': 1,
    },

    // Scroll Area
    {
      class: 'scroll_area_control',
      overlay: false,
    },

    // Overlay Scroll Bars Enabled
    {
      class: 'scroll_area_control',
      settings: ['overlay_scroll_bars'],
      overlay: true,
    },

    // Scrollbar Track Overlay Scroll Bars Enabled
    {
      class: 'scroll_bar_control',
      settings: ['overlay_scroll_bars'],
      blur: false,

      'layer0.opacity': 0, // Background
      'layer1.opacity': 0, // Border - Right
    },

    // Vertical Scrollbar Puck
    {
      class: 'puck_control',
      content_margin: [8, 16],
      blur: false,

      // Background
      'layer0.texture': `${paths.this}puckvertical.png`,
      'layer0.opacity': 1,
      'layer0.inner_margin': [4, 4, 4, 4],
    },

    // Horizontal Scrollbar Puck
    {
      class: 'puck_control',
      attributes: ['horizontal'],
      content_margin: [16, 8],

      'layer0.texture': `${paths.this}puckhorizontal.png`,
    },

    // Overlay Vertical Scrollbar Puck
    {
      class: 'puck_control',
      settings: ['overlay_scroll_bars'],

      'layer0.texture': `${paths.this}puckvertical--overlay.png`,
    },

    // Overlay Horizontal Scrollbar Puck
    {
      class: 'puck_control',
      attributes: ['horizontal'],
      settings: ['overlay_scroll_bars'],

      'layer0.texture': `${paths.this}puckhorizontal--overlay.png`,
    },

  ];
};
