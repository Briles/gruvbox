module.exports = function (values) {

  const c = values.colors;
  const paths = values.paths;

  return [

    // All Labels
    {
      class: 'label_control',

      color: c.gs.fg3,
    },

    // Status Bar Labels
    {
      class: 'label_control',
      parents: [

        {
          class: 'status_bar',
        },

      ],

      color: c.gs.fg3,
    },

    // Status Bar
    {
      class: 'status_bar',
      content_margin: [12, 0, 0, 0],

      // Background
      'layer0.tint': c.container,
      'layer0.opacity': 1,
      'layer0.inner_margin': [2, 2],

      // Border - Top
      'layer2.tint': c.border,
      'layer2.opacity': 1,
      'layer2.draw_center': false,
      'layer2.inner_margin': [0, 1, 0, 0],
    },

    // Status Bar Status Message
    {
      class: 'status_container',
      content_margin: [12, 11, 12, 11],
    },

    // Status Bar Button
    {
      class: 'status_button',
      content_margin: [15, 0],
      min_size: [75, 0],

      // Border - Left
      'layer0.tint': c.gs.bg1,
      'layer0.opacity': 1,
      'layer0.draw_center': false,
      'layer0.inner_margin': [1, 0, 0, 0],
    },

    // Status Bar Button Hover
    {
      class: 'label_control',
      parents: [

        {
          class: 'status_button',
          attributes: ['hover'],
        },

      ],

      color: c.gs.fg1,
    },

    // Panel Switcher
    {
      class: 'panel_button_control',
      content_margin: [12, 12],

      // Default
      'layer0.texture': `${paths.this}panels.png`,
      'layer0.opacity': 1,

      // Hover
      'layer1.texture': `${paths.this}panels--hover.png`,
      'layer1.opacity': 0,
    },

    // Panel Switcher Hover
    {
      class: 'panel_button_control',
      attributes: ['hover'],

      'layer0.opacity': 0, // Default
      'layer1.opacity': 1, // Hover
    },

  ];
};
