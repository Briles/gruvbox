module.exports = function (values) {
  'use strict';

  const c = values.colors;
  const stOpts = values.options;

  return [

    // Button labels
    {
      class: 'label_control',
      settings: [stOpts.disableGreyscaleColors],

      parents: [

        {
          class: 'button_control',
        },

      ],

      color: c.foreground,
    },

    // All labels
    {
      class: 'label_control',
      settings: [stOpts.disableGreyscaleColors],

      color: c.bnp.fg3,
    },

    // Status bar labels
    {
      class: 'label_control',
      settings: [stOpts.disableGreyscaleColors],

      parents: [

        {
          class: 'status_bar',
        },

      ],

      color: c.bnp.fg3,
    },

    {
      class: 'status_button',
      settings: [stOpts.disableGreyscaleColors],

      'layer0.tint': c.bnp.bg1,
    },

    {
      class: 'label_control',
      settings: [stOpts.disableGreyscaleColors],

      parents: [

        {
          class: 'status_button',
          attributes: ['hover'],
        },

      ],

      color: c.bnp.fg1,
    },

    // Sidebar
    {
      class: 'sidebar_heading',
      settings: [stOpts.disableGreyscaleColors],

      color: c.bnp.fg1,
    },

    {
      class: 'sidebar_label',
      settings: [stOpts.disableGreyscaleColors],

      color: c.bnp.gray,
    },

    {
      class: 'sidebar_label',
      settings: [stOpts.disableGreyscaleColors],

      parents: [

        {
          class: 'tree_row',
          attributes: ['hover'],
        },

      ],

      color: c.bnp.fg1,
    },

    {
      class: 'sidebar_label',
      settings: [stOpts.disableGreyscaleColors],

      parents: [

        {
          class: 'tree_row',
          attributes: ['selected'],
        },

      ],

      color: c.bnp.fg1,
    },

    {
      class: 'sidebar_label',
      settings: [stOpts.disableGreyscaleColors],

      parents: [

        {
          class: 'tree_row',
          attributes: ['expandable'],
        },

      ],

      color: c.bnp.fg4,
    },

    {
      class: 'sidebar_label',
      settings: [stOpts.disableGreyscaleColors],

      parents: [

        {
          class: 'tree_row',
          attributes: ['expanded'],
        },

      ],

      color: c.bnp.fg1,
    },

    {
      class: 'sidebar_label',
      settings: [stOpts.disableGreyscaleColors],

      parents: [

        {
          class: 'tree_row',
          attributes: ['hover'],
        },

      ],

      color: c.bnp.fg1,
    },

    {
      class: 'sidebar_label',
      settings: [stOpts.disableGreyscaleColors],

      parents: [

        {
          class: 'tree_row',
          attributes: ['expanded', 'selected'],
        },

      ],

      color: c.bnp.fg1,
    },

    {
      class: 'sidebar_label',
      settings: [stOpts.disableGreyscaleColors],
      attributes: ['transient'],

      color: c.bnp.fg1,
    },

    // Tab Label
    {
      class: 'tab_label',
      settings: [stOpts.disableGreyscaleColors],

      fg: c.bnp.gray,
    },

    // Selected Tab Tab Label
    {
      class: 'tab_label',
      settings: [stOpts.disableGreyscaleColors],

      parents: [

        {
          class: 'tab_control',
          attributes: ['selected'],
        },

      ],

      fg: c.bnp.fg2,
    },

    // Hovered Tab Tab Label
    {
      class: 'tab_label',
      settings: [stOpts.disableGreyscaleColors],

      parents: [

        {
          class: 'tab_control',
          attributes: ['hover'],
        },

      ],

      fg: c.bnp.fg3,
    },

    // Selected & Hovered Tab Tab Label
    {
      class: 'tab_label',
      settings: [stOpts.disableGreyscaleColors],

      parents: [

        {
          class: 'tab_control',
          attributes: ['selected', 'hover'],
        },

      ],

      fg: c.bnp.fg2,
    },

    // Panel labels
    {
      class: 'quick_panel_label',
      settings: [stOpts.disableGreyscaleColors],

      fg: c.bnp.fg4,
      match_fg: c.bnp.fg1,
      selected_fg: c.bnp.fg4,
      selected_match_fg: c.bnp.fg1,
    },

    // Panel labels
    {
      class: 'quick_panel_label',
      settings: [stOpts.disableGreyscaleColors],
      parents: [

        {
          class: 'overlay_control',
        },

      ],

      fg: c.bnp.fg4,
      match_fg: c.bnp.fg1,
      selected_fg: c.bnp.fg4,
      selected_match_fg: c.bnp.fg1,
    },

    // Panels sublabels
    {
      class: 'quick_panel_path_label',
      settings: [stOpts.disableGreyscaleColors],

      fg: c.bnp.fg4,
      match_fg: c.bnp.fg1,
      selected_fg: c.bnp.fg4,
      selected_match_fg: c.bnp.fg1,
    },

    // Panels data / score
    {
      class: 'quick_panel_score_label',
      settings: [stOpts.disableGreyscaleColors],

      fg: c.bnp.fg4,
      selected_fg: c.bnp.fg1,
    },

    // Autocomplete
    {
      class: 'auto_complete_label',
      settings: [stOpts.disableGreyscaleColors],

      fg: c.bnp.fg4,
      match_fg: c.bnp.fg1,
      selected_fg: c.bnp.fg4,
      selected_match_fg: c.bnp.fg1,
    },

  ];
};
