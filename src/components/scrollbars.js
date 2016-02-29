module.exports = function (values) {
  'use strict';

  const c = values.colors;
  const info = values.info;
  const paths = values.paths;

  return [

    // Normal Vertical Scrollbar Track

    {
      'class': 'scroll_bar_control',
      'blur': false,

      'layer0.tint': c.container,
      'layer0.opacity': 1,
      'layer0.inner_margin': [0, 6],

      'layer1.tint': c.border,
      'layer1.opacity': 1,
      'layer1.draw_center': false,
      'layer1.inner_margin': [1, 0, 0, 0],
    },

    // Normal Vertical Scrollbar Track Inside Sidebar

    {
      'class': 'scroll_bar_control',
      'parents': [{
        'class': 'sidebar_container',
      }],

      'layer1.inner_margin': [0, 0, 1, 0],
    },

    // Normal Vertical Scrollbar Track Inside Console Panel

    {
      'class': 'scroll_bar_control',
      'parents': [{
        'class': 'panel_control',
      }],

      'layer1.opacity': 0,
    },

    // Normal Vertical Scrollbar Track Inside AutoComplete

    {
      'class': 'scroll_bar_control',
      'parents': [{
        'class': 'popup_control',
      }],

      'layer1.opacity': 0,
    },

    // Normal Vertical Scrollbar Track Inside Overlay Panel

    {
      'class': 'scroll_bar_control',
      'parents': [{
        'class': 'overlay_control',
      }],

      'layer1.opacity': 0,
    },

    // Normal Horizontal Scrollbar Track

    {
      'class': 'scroll_bar_control',
      'attributes': ['horizontal'],
      'blur': false,

      'layer1.inner_margin': [0, 1, 0, 0],
    },

    {
      'class': 'scroll_bar_control',
      'attributes': ['horizontal'],
      'parents': [{
        'class': 'sidebar_container',
      }],

      'layer1.opacity': 0,
    },

    // Normal Horizontal Scrollbar Track Inside AutoComplete

    {
      'class': 'scroll_bar_control',
      'attributes': ['horizontal'],
      'parents': [{
        'class': 'popup_control',
      }],

      'layer1.opacity': 0,
    },

    // Normal Horizontal Scrollbar Track Inside Overlay Panel

    {
      'class': 'scroll_bar_control',
      'attributes': ['horizontal'],

      'parents': [{
        'class': 'overlay_control',
      }],

      'layer0.opacity': 0,
    },

    // Normal Horizontal Scrollbar Track Inside Console Panel

    {
      'class': 'scroll_bar_control',
      'attributes': ['horizontal'],
      'parents': [{
        'class': 'panel_control',
      }],

      'layer1.opacity': 0,
    },

    // Scrollbars Corner

    {
      'class': 'scroll_corner_control',

      'layer0.tint': c.container,
      'layer0.opacity': 1,
      'layer0.inner_margin': [1, 1],

      'layer1.tint': c.border,
      'layer1.opacity': 1,
      'layer1.draw_center': false,
      'layer1.inner_margin': [0, 0, 1, 0],
    },

    // Scrollbars Corner in Console Panel

    {
      'class': 'scroll_corner_control',
      'parents': [{
        'class': 'panel_control',
      }],

      'layer0.opacity': 0,
      'layer1.opacity': 0,
    },

    {
      'class': 'scroll_area_control',
      'settings': ['overlay_scroll_bars'],
      'overlay': true,
    },

    {
      'class': 'scroll_area_control',
      'settings': ['!overlay_scroll_bars'],
      'overlay': false, // set to false for the original behavior
    },

    {
      'class': 'scroll_area_control',
      'parents': [{
        'class': 'overlay_control',
      }],
      'settings': ['overlay_scroll_bars'],
      'overlay': true, // set to false for the original behavior
    },

    {
      'class': 'scroll_area_control',
      'parents': [{
        'class': 'sidebar_container',
      }],
      'settings': ['!overlay_scroll_bars'],
      'overlay': false, // set to false for the original behavior
    },

    {
      'class': 'scroll_bar_control',
      'settings': ['overlay_scroll_bars'],
      'blur': false,

      'layer0.opacity': 0,
      'layer1.opacity': 0,
    },

    {
      'class': 'scroll_bar_control',
      'settings': ['overlay_scroll_bars'],
      'attributes': ['horizontal'],
      'blur': false,

      'layer0.opacity': 0,
      'layer1.opacity': 0,
    },

    {
      'class': 'puck_control',
      'content_margin': [6, 16],
      'blur': false,

      'layer0.texture': `${paths.this}puckvertical.png`,
      'layer0.opacity': 1,
      'layer0.inner_margin': [1, 8, 1, 8],
    },

    {
      'class': 'puck_control',
      'attributes': ['horizontal'],
      'content_margin': [16, 6],

      'layer0.texture': `${paths.this}puckhorizontal.png`,
      'layer0.inner_margin': [8, 1, 8, 1],
    },

    {
      'class': 'puck_control',
      'settings': ['overlay_scroll_bars'],

      'layer0.texture': `${paths.this}puckvertical--overlay.png`,
    },

    {
      'class': 'puck_control',
      'attributes': ['horizontal'],
      'settings': ['overlay_scroll_bars'],

      'layer0.texture': `${paths.this}puckhorizontal--overlay.png`,
    },

  ];
};
