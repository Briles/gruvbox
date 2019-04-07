const mixins = require('../mixins.js');

module.exports = function (values) {

  const c = values.colors;

  return [

    // Command Palette & Goto Panel
    {
      class: 'overlay_control',
      content_margin: [1, 14, 1, 1],

      // Background
      'layer0.tint': 'var(container)',
      'layer0.opacity': 1,

      // Border - Left, Right, Bottom
      'layer1.tint': 'var(border)',
      'layer1.opacity': 1,
      'layer1.inner_margin': [1, 0, 1, 1],
      'layer1.draw_center': false,
    },

    // Command Palette List Item
    {
      class: 'mini_quick_panel_row',

      // Background
      'layer0.tint': 'transparent',
      'layer0.opacity': 1,
      'layer0.inner_margin': [2, 2, 2, 2],

      // Border - Top
      'layer1.tint': 'var(border)',
      'layer1.opacity': 1,
      'layer1.inner_margin': [0, 1, 0, 0],
      'layer1.draw_center': false,

      // Border - Left
      'layer2.tint': 'var(fg)',
      'layer2.opacity': 0,
      'layer2.draw_center': false,
      'layer2.inner_margin': [1, 0, 0, 0],
    },

    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'mini_quick_panel_row',

        parents: [
          {
            class: 'window',
            attributes: [lumin],
          },
        ],

        'layer2.tint': palette('fg3'),
      };
    }),

    // Command Palette List Item Selected

    {
      class: 'mini_quick_panel_row',
      attributes: ['selected'],

      'layer0.tint': 'var(panelRow)', // Background
    },

    // Quick Switch Project Panel
    {
      class: 'quick_panel',
      row_padding: [14, 12],

      // Background
      'layer0.tint': 'var(container)',
      'layer0.opacity': 1,
    },

    // Quick Switch Project Panel List Item
    {
      class: 'quick_panel_row',

      // Background
      'layer0.tint': 'transparent',
      'layer0.opacity': 1,

      // Border - Top
      'layer1.tint': 'var(border)',
      'layer1.opacity': 1,
      'layer1.inner_margin': [0, 1, 0, 0],
      'layer1.draw_center': false,
    },

    // Quick Switch Project Panel List Item Selected
    {
      class: 'quick_panel_row',
      attributes: ['selected'],

      'layer0.tint': 'var(panelRow)',
    },

    // Panel Label
    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'quick_panel_label',

        parents: [
          {
            class: 'window',
            attributes: [lumin],
          },
        ],

        fg: palette('fg4_gs'),
        match_fg: palette('fg1_gs'),
        selected_fg: palette('fg4_gs'),
        selected_match_fg: palette('fg1_gs'),
      };
    }),

    // Panels SubLabels
    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'quick_panel_path_label',

        parents: [
          {
            class: 'window',
            attributes: [lumin],
          },
        ],

        fg: palette('fg4_gs'),
        match_fg: palette('fg1_gs'),
        selected_fg: palette('fg4_gs'),
        selected_match_fg: palette('fg1_gs'),
      };
    }),

    // Panel Row Match Score
    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'quick_panel_score_label',

        parents: [
          {
            class: 'window',
            attributes: [lumin],
          },
        ],

        fg: palette('fg4_gs'),
        selected_fg: palette('fg1_gs'),
      };
    }),

  ];
};
