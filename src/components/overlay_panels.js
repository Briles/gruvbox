module.exports = function (values) {
  'use strict';

  const c = values.colors;
  const info = values.info;
  const paths = values.paths;

  return [

    /* @OVERLAY PANELS
     * Overlay panels setting and behavioring
    ========================================================================= */

    // Command Panel
    {
      'class': 'overlay_control',
      'content_margin': [1, 14, 1, 1],

      'layer0.tint': c.container,
      'layer0.inner_margin': [0, 0, 0, 0],
      'layer0.opacity': 1,

      'layer1.tint': c.border,
      'layer1.inner_margin': [1, 0, 1, 1],
      'layer1.opacity': 1,
      'layer1.draw_center': false,
    },

    // Command Panel list item style (cmd + shift + p)

    {
      'class': 'mini_quick_panel_row',

      'layer0.tint': c.transparent,
      'layer0.inner_margin': [2, 2, 2, 2],
      'layer0.opacity': 1,

      'layer1.tint': c.border,
      'layer1.inner_margin': [0, 1, 0, 0],
      'layer1.opacity': 1,
      'layer1.draw_center': false,
    },

    // Command Panel selected list item style (cmd + p)

    {
      'class': 'mini_quick_panel_row',
      'attributes': ['selected'],

      'layer0.tint': c.panelRow,
    },

    // Quick panel project setting (project manager) (cmd + ctrl + p)

    {
      'class': 'quick_panel',
      'row_padding': [14, 12],

      'layer0.tint': c.container,
      'layer0.opacity': 1,
    },

    // Quick Panel row default style (project manager)

    {
      'class': 'quick_panel_row',

      'layer0.tint': c.transparent,
      'layer0.opacity': 1,

      'layer1.tint': c.border,
      'layer1.inner_margin': [0, 1, 0, 0],
      'layer1.opacity': 1,
      'layer1.draw_center': false,
    },

    // Row panel style inside command panel (cmd + shift + p)

    {
      'class': 'quick_panel_row',
      'parents': [

        {
          'class': 'overlay_control',
        },

      ],

      'layer0.tint': c.transparent,
      'layer0.opacity': 1,
    },

    // Quick panel (project) style inside overlay_control (cmd + shift + p)

    {
      'class': 'quick_panel',
      'parents': [

        {
          'class': 'overlay_control',
        },

      ],
      'row_padding': [18, 12],

      'layer0.tint': c.transparent,
      'layer0.opacity': 1,
    },

    // Quick Panel selected list item style

    {
      'class': 'quick_panel_row',
      'attributes': ['selected'],

      'layer0.tint': c.panelRow,
    },

    // Panel labels

    {
      'class': 'quick_panel_label',

      'fg': c.gs.fg4,
      'match_fg': c.gs.fg1,
      'selected_fg': c.gs.fg4,
      'selected_match_fg': c.gs.fg1,
    },

    // Panel labels

    {
      'class': 'quick_panel_label',
      'parents': [

        {
          'class': 'overlay_control',
        },

      ],

      'fg': c.gs.fg4,
      'match_fg': c.gs.fg1,
      'selected_fg': c.gs.fg4,
      'selected_match_fg': c.gs.fg1,
    },

    // Panels sublabels

    {
      'class': 'quick_panel_path_label',

      'fg': c.gs.fg4,
      'match_fg': c.gs.fg1,
      'selected_fg': c.gs.fg4,
      'selected_match_fg': c.gs.fg1,
    },

    // Panels data / score

    {
      'class': 'quick_panel_score_label',

      'fg': c.gs.fg4,
      'selected_fg': c.gs.fg1,
    },

  ];
};
