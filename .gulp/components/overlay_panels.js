module.exports = function (values) {

  const c = values.colors;

  return [

    // Command Palette & Goto Panel
    {
      class: 'overlay_control',
      content_margin: [1, 14, 1, 1],

      // Background
      'layer0.tint': c.container,
      'layer0.opacity': 1,

      // Border - Left, Right, Bottom
      'layer1.tint': c.border,
      'layer1.opacity': 1,
      'layer1.inner_margin': [1, 0, 1, 1],
      'layer1.draw_center': false,
    },

    // Command Palette List Item
    {
      class: 'mini_quick_panel_row',

      // Background
      'layer0.tint': c.transparent,
      'layer0.opacity': 1,
      'layer0.inner_margin': [2, 2, 2, 2],

      // Border - Top
      'layer1.tint': c.border,
      'layer1.opacity': 1,
      'layer1.inner_margin': [0, 1, 0, 0],
      'layer1.draw_center': false,

      // Border - Left
      'layer2.tint': c.bnp.fg3,
      'layer2.opacity': 0,
      'layer2.draw_center': false,
      'layer2.inner_margin': [1, 0, 0, 0],
    },

    // Command Palette List Item Selected

    {
      class: 'mini_quick_panel_row',
      attributes: ['selected'],

      'layer0.tint': c.panelRow, // Background
    },

    // Quick Switch Project Panel
    {
      class: 'quick_panel',
      row_padding: [14, 12],

      // Background
      'layer0.tint': c.container,
      'layer0.opacity': 1,
    },

    // Quick Switch Project Panel List Item
    {
      class: 'quick_panel_row',

      // Background
      'layer0.tint': c.transparent,
      'layer0.opacity': 1,

      // Border - Top
      'layer1.tint': c.border,
      'layer1.opacity': 1,
      'layer1.inner_margin': [0, 1, 0, 0],
      'layer1.draw_center': false,
    },

    // Quick Switch Project Panel List Item Selected
    {
      class: 'quick_panel_row',
      attributes: ['selected'],

      'layer0.tint': c.panelRow,
    },

    // Panel Label
    {
      class: 'quick_panel_label',

      fg: c.gs.fg4,
      match_fg: c.gs.fg1,
      selected_fg: c.gs.fg4,
      selected_match_fg: c.gs.fg1,
    },

    // Panels SubLabels
    {
      class: 'quick_panel_path_label',

      fg: c.gs.fg4,
      match_fg: c.gs.fg1,
      selected_fg: c.gs.fg4,
      selected_match_fg: c.gs.fg1,
    },

    // Panel Row Match Score
    {
      class: 'quick_panel_score_label',

      fg: c.gs.fg4,
      selected_fg: c.gs.fg1,
    },

  ];
};
