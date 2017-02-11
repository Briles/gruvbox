module.exports = function (values) {
  'use strict';

  const c = values.colors;

  return [

    // AutoComplete Popup Container
    {
      class: 'popup_control',
      content_margin: [0, 0],

      // Background
      'layer0.tint': c.container,
      'layer0.opacity': 1,

      // Border
      'layer1.tint': c.border,
      'layer1.opacity': 0,
      'layer1.draw_center': false,
      'layer1.inner_margin': [1, 1],
    },

    // AutoComplete Popup
    {
      class: 'auto_complete',
      row_padding: [12, 6],

      'layer0.tint': c.container,
      'layer0.opacity': 1,
    },

    // AutoComplete Label
    {
      class: 'auto_complete_label',

      fg: c.gs.fg4,
      match_fg: c.gs.fg1,
      selected_fg: c.gs.fg4,
      selected_match_fg: c.gs.fg1,
    },

    // AutoComplete Row
    {
      class: 'table_row',

      // Background
      'layer0.tint': c.bnp.bg1,
      'layer0.opacity': 0,

      'layer1.tint': c.bnp.fg3,
      'layer1.opacity': 0,
      'layer1.draw_center': false,
      'layer1.inner_margin': [1, 0, 0, 0],
    },

    // AutoComplete Row
    {
      class: 'table_row',
      attributes: ['selected'],

      'layer0.opacity': 1, // Background
    },

  ];
};
