const mixins = require('../mixins.js');

module.exports = function (values) {

  const c = values.colors;

  return [

    // AutoComplete Popup Container
    {
      class: 'popup_control',
      content_margin: [0, 0],

      // Background
      'layer0.tint': 'var(container)',
      'layer0.opacity': 1,

      // Border
      'layer1.tint': 'var(border)',
      'layer1.opacity': 0,
      'layer1.draw_center': false,
      'layer1.inner_margin': [1, 1],
    },

    // AutoComplete Popup
    {
      class: 'auto_complete',
      row_padding: [12, 6],

      'layer0.tint': 'var(container)',
      'layer0.opacity': 1,
    },

    // AutoComplete Label
    {
      class: 'auto_complete_label',

      fg: 'var(fg)',
      match_fg: 'var(fg)',
      selected_fg: 'var(fg)',
      selected_match_fg: 'var(fg)',
    },

    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'auto_complete_label',

        parents: [
          {
            attributes: [lumin],
          },
        ],

        fg: palette('fg4_gs'),
        match_fg: palette('fg1_gs'),
        selected_fg: palette('fg4_gs'),
        selected_match_fg: palette('fg1_gs'),
      };
    }),

    // AutoComplete Row
    {
      class: 'table_row',

      // Background
      // 'layer0.tint': 'var(bg1)',
      'layer0.opacity': 0,

      // 'layer1.tint': 'var(fg3)',
      'layer1.opacity': 0,
      'layer1.draw_center': false,
      'layer1.inner_margin': [1, 0, 0, 0],
    },

    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'table_row',

        parents: [
          {
            attributes: [lumin],
          },
        ],

        'layer0.tint': palette('bg1'),
        'layer1.tint': palette('fg3'),
      };
    }),

    // AutoComplete Row
    {
      class: 'table_row',
      attributes: ['selected'],

      'layer0.opacity': 1, // Background
    },

  ];
};
