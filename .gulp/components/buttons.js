const mixins = require('../mixins.js');

module.exports = function (values) {

  const c = values.colors;
  const info = values.info;
  const paths = values.paths;
  const stOpts = values.options;

  function createIcon(className, iconPath) {
    return [
      {
        class: className,
        content_margin: [12, 12],

        'layer0.texture': `${paths.commons}${iconPath}.png`,
        'layer0.opacity': 1,
        // 'layer0.tint': 'var(icon_default)',
      },

      ...mixins.createComponentVariations((lumin, palette) => {
        return {
          class: className,

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
          class: className,
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

      ...mixins.createComponentVariations((lumin, palette) => {
        return {
          class: className,

          parents: [
            {
              class: 'window',
              attributes: [lumin],
            },
            {
              class: 'icon_button_control',
              attributes: ['hover'],
            },
          ],

          'layer0.tint': palette('icon_hover_gs'),
        };
      }),

      ...mixins.createComponentVariations((lumin, palette) => {
        return {
          class: className,
          settings: [stOpts.disableGreyscaleColors],

          parents: [
            {
              class: 'window',
              attributes: [lumin],
            },
            {
              class: 'icon_button_control',
              attributes: ['hover'],
            },
          ],

          'layer0.tint': palette('icon_hover'),
        };
      }),

      {
        class: className,
        parents: [

          {
            class: 'icon_button_control',
            attributes: ['selected'],
          },

        ],

        'layer0.tint': 'var(icon_selected)',
      }
    ];
  }

  return [

    // Button Label
    {
      class: 'label_control',
      parents: [

        {
          class: 'button_control',
        },

      ],

      color: 'var(fg_gs)',
      'font.bold': false,
    },

    // Button
    {
      class: 'button_control',
      content_margin: [15, 10, 15, 11],
      min_size: [70, 15],

      // Background
      'layer0.tint': 'var(container)',
      'layer0.opacity': 1,

      // Background Hover
      'layer1.tint': 'var(bg)',
      'layer1.opacity': 0,

      // Background Pressed
      'layer2.tint': 'var(border)',
      'layer2.opacity': 0,
    },

    {
      class: 'button_control',
      attributes: ['hover'],

      'layer1.opacity': 1, // Background Hover
    },

    {
      class: 'button_control',
      attributes: ['pressed'],

      'layer2.opacity': 1, // Background Pressed
    },

    {
      class: 'button_control',
      attributes: ['pressed', 'hover'],

      'layer2.opacity': 1, // Background Pressed
    },

    // Status Bar Icon Buttons
    {
      class: 'icon_button_control',
      content_margin: [10, 6],

      'layer0.tint': 'var(bg)',
      'layer0.opacity': 0,
    },

    // Regex Icon
    ...createIcon('icon_regex', 'regex'),

    // Case Sensitive Icon
    ...createIcon('icon_case', 'casesensitive'),

    // Wholeword Icon
    ...createIcon('icon_whole_word', 'wholeword'),

    // Wrap Icon
    ...createIcon('icon_wrap', 'wrap'),

    // In Selection Icon
    ...createIcon('icon_in_selection', 'inselection'),

    // Highlight Result Icon
    ...createIcon('icon_highlight', 'highlight'),

    // Preserve Case Icon
    ...createIcon('icon_preserve_case', 'preservecase'),

    // Show Context Icon
    ...createIcon('icon_context', 'context'),

    // Use Buffer Icon
    ...createIcon('icon_use_buffer', 'buffer'),
  ];
};
