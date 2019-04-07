const mixins = require('../mixins.js');

module.exports = function (values) {

  const c = values.colors;
  const paths = values.paths;
  const stOpts = values.options;

  return [

    // All Labels
    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'label_control',

        parents: [
          {
            class: 'window',
            attributes: [lumin],
          },
        ],

        color: palette('fg3_gs'),
      };
    }),

    // Status Bar Labels
    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'label_control',

        parents: [
          {
            class: 'status_bar',
            attributes: [lumin]
          }
        ],

        color: palette('fg3_gs'),
      };
    }),

    // Status Bar
    {
      class: 'status_bar',
      content_margin: [12, 0, 0, 0],

      // Background
      'layer0.tint': 'var(container)',
      'layer0.opacity': 1,
      'layer0.inner_margin': [2, 2],

      // Border - Top
      'layer2.tint': 'var(border)',
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
      // 'layer0.tint': 'var(bg1_gs)',
      'layer0.opacity': 1,
      'layer0.draw_center': false,
      'layer0.inner_margin': [1, 0, 0, 0],
    },

    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'status_button',

        parents: [
          {
            class: 'window',
            attributes: [lumin],
          },
        ],

        'layer0.tint': palette('bg1_gs'),
      };
    }),

    // Status Bar Button Hover
    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'label_control',

        parents: [
          {
            class: 'window',
            attributes: [lumin],
          },
          {
            class: 'status_button',
            attributes: ['hover'],
          },
        ],

        color: palette('fg1_gs'),
      };
    }),

    // Panel Switcher
    {
      class: 'panel_button_control',
      content_margin: [12, 12],

      'layer0.texture': `${paths.commons}panels.png`,
      'layer0.opacity': 1,
      // 'layer0.tint': 'var(icon_default)',
    },

    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'panel_button_control',

        parents: [
          {
            class: 'window',
            attributes: [lumin],
          },
          {
            class: 'status_bar',
          },
        ],

        'layer0.tint': palette('icon_default_gs'),
      };
    }),

    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'panel_button_control',
        settings: [stOpts.disableGreyscaleColors],

        parents: [
          {
            class: 'window',
            attributes: [lumin],
          },
          {
            class: 'status_bar',
          },
        ],

        'layer0.tint': palette('icon_default'),
      };
    }),

    // Panel Switcher Hover
    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'panel_button_control',
        attributes: ['hover'],

        parents: [
          {
            class: 'window',
            attributes: [lumin],
          },
          {
            class: 'status_bar',
          },
        ],

        'layer0.tint': palette('icon_hover_gs'),
      };
    }),

    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'panel_button_control',
        attributes: ['hover'],
        settings: [stOpts.disableGreyscaleColors],

        parents: [
          {
            class: 'window',
            attributes: [lumin],
          },
          {
            class: 'status_bar',
          },
        ],

        'layer0.tint': palette('icon_hover'),
      };
    }),

  ];
};
