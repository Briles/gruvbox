const mixins = require('../mixins.js');

module.exports = function (values) {

  const c = values.colors;
  const paths = values.paths;
  const stOpts = values.options;

  return [

    // Find & Replace & Console Panel
    {
      class: 'panel_control',
      content_margin: [6, 11, 6, 11],

      // Background
      'layer0.tint': 'var(container)',
      'layer0.opacity': 1,

      // Border - Top
      'layer1.tint': 'var(border)',
      'layer1.draw_center': false,
      'layer1.inner_margin': [0, 1, 0, 0],
      'layer1.opacity': 1,
    },

    // Status Bar Panel Close Icon
    {
      class: 'panel_close_button',
      content_margin: [0, 0],

      // Default
      'layer0.texture': `${paths.commons}close.png`,
      'layer0.opacity': 1,
      // 'layer0.tint': 'var(close_default)',
    },

    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'panel_close_button',

        parents: [
          {
            class: 'window',
            attributes: [lumin],
          },
        ],

        'layer0.tint': palette('close_default_gs'),
      };
    }),

    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'panel_close_button',
        settings: [stOpts.disableGreyscaleColors],

        parents: [
          {
            class: 'window',
            attributes: [lumin],
          },
        ],

        'layer0.tint': palette('close_default'),
      };
    }),

    // Status Bar Panel Close Icon Hover
    {
      class: 'panel_close_button',
      attributes: ['hover'],

      'layer0.tint': 'var(close_hover)',
    },

    // Textline Input
    {
      class: 'text_line_control',
      content_margin: [18, 0, 18, 0],
    },

    // Textline Input Inside Overlay Panels
    {
      class: 'text_line_control',
      parents: [

        {
          class: 'overlay_control',
        },

      ],

      content_margin: [18, 4, 18, 14],
    },

    // Textline Input Overflow Menu
    {
      class: 'dropdown_button_control',
      content_margin: [12, 12],

      'layer0.texture': `${paths.commons}more.png`,
      'layer0.opacity': 1,
      // 'layer0.tint': 'var(icon_default)',
    },

    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'dropdown_button_control',

        parents: [
          {
            class: 'window',
            attributes: [lumin],
          },
        ],

        'layer0.tint': palette('icon_default_gs'),
      };
    }),

    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'dropdown_button_control',
        settings: [stOpts.disableGreyscaleColors],

        parents: [
          {
            class: 'window',
            attributes: [lumin],
          },
        ],

        'layer0.tint': palette('icon_default'),
      };
    }),

    // Textline Input Overflow Menu Hover
    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'dropdown_button_control',
        attributes: ['hover'],

        parents: [
          {
            class: 'window',
            attributes: [lumin],
          },
        ],

        'layer0.tint': palette('icon_hover_gs'),
      };
    }),

    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'dropdown_button_control',
        settings: [stOpts.disableGreyscaleColors],
        attributes: ['hover'],

        parents: [
          {
            class: 'window',
            attributes: [lumin],
          },
        ],

        'layer0.tint': palette('icon_hover'),
      };
    }),

  ];
};
