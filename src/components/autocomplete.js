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
    },

    // AutoComplete Row
    {
      class: 'table_row',
      attributes: ['selected'],

      'layer0.opacity': 1, // Background
    },

  ];
};
