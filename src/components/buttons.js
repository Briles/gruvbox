module.exports = function (values) {
  'use strict';

  const c = values.colors;
  const info = values.info;
  const paths = values.paths;

  return [

    // Button Label
    {
      'class': 'label_control',
      'parents': [

        {
          'class': 'button_control',
        },

      ],

      'color': c.gs.fg[info.contrast],
      'font.bold': false,
    },

    // Button
    {
      'class': 'button_control',
      'content_margin': [15, 12, 15, 12],
      'min_size': [70, 0],

      // Background
      'layer0.tint': c.container,
      'layer0.opacity': 1,

      // Background Hover
      'layer1.tint': c.background,
      'layer1.opacity': 0,

      // Background Pressed
      'layer2.tint': c.border,
      'layer2.opacity': 0,
    },

    {
      'class': 'button_control',
      'attributes': ['hover'],

      'layer1.opacity': 1, // Background Hover
    },

    {
      'class': 'button_control',
      'attributes': ['pressed'],

      'layer2.opacity': 1, // Background Pressed
    },

    {
      'class': 'button_control',
      'attributes': ['pressed', 'hover'],

      'layer2.opacity': 1, // Background Pressed
    },

    // Status Bar Icon Buttons
    {
      'class': 'icon_button_control',

      'content_margin': [10, 6],
    },

    // Regex Icon
    {
      'class': 'icon_regex',
      'content_margin': [12, 12],

      // Default
      'layer0.texture': `${paths.this}regex.png`,
      'layer0.opacity': 1,

      // Hover
      'layer1.texture': `${paths.this}regex--hover.png`,
      'layer1.opacity': 0,

      // Selected
      'layer2.texture': `${paths.this}regex--selected.png`,
      'layer2.opacity': 0,
    },

    {
      'class': 'icon_regex',
      'parents': [

        {
          'class': 'icon_button_control',
          'attributes': ['hover'],
        },

      ],

      'layer1.opacity': 1, // Hover
    },

    {
      'class': 'icon_regex',
      'parents': [

        {
          'class': 'icon_button_control',
          'attributes': ['selected'],
        },

      ],

      'layer2.opacity': 1, // Selected
    },

    // Case Sensitive Icon
    {
      'class': 'icon_case',
      'content_margin': [12, 12],

      // Default
      'layer0.texture': `${paths.this}casesensitive.png`,
      'layer0.opacity': 1,

      // Hover
      'layer1.texture': `${paths.this}casesensitive--hover.png`,
      'layer1.opacity': 0,

      // Selected
      'layer2.texture': `${paths.this}casesensitive--selected.png`,
      'layer2.opacity': 0,
    },

    {
      'class': 'icon_case',
      'parents': [

        {
          'class': 'icon_button_control',
          'attributes': ['hover'],
        },

      ],

      'layer1.opacity': 1, // Hover
    },

    {
      'class': 'icon_case',
      'parents': [

        {
          'class': 'icon_button_control',
          'attributes': ['selected'],
        },

      ],

      'layer2.opacity': 1, // Selected
    },

    // Wholeword Icon
    {
      'class': 'icon_whole_word',
      'content_margin': [12, 12],

      // Default
      'layer0.texture': `${paths.this}wholeword.png`,
      'layer0.opacity': 1,

      // Hover
      'layer1.texture': `${paths.this}wholeword--hover.png`,
      'layer1.opacity': 0,

      // Selected
      'layer2.texture': `${paths.this}wholeword--selected.png`,
      'layer2.opacity': 0,
    },

    {
      'class': 'icon_whole_word',
      'parents': [

        {
          'class': 'icon_button_control',
          'attributes': ['hover'],
        },

      ],

      'layer1.opacity': 1, // Hover
    },

    {
      'class': 'icon_whole_word',
      'parents': [

        {
          'class': 'icon_button_control',
          'attributes': ['selected'],
        },

      ],

      'layer2.opacity': 1, // Selected
    },

    // Wrap Icon
    {
      'class': 'icon_wrap',
      'content_margin': [12, 12],

      // Default
      'layer0.texture': `${paths.this}wrap.png`,
      'layer0.opacity': 1,

      // Hover
      'layer1.texture': `${paths.this}wrap--hover.png`,
      'layer1.opacity': 0,

      // Selected
      'layer2.texture': `${paths.this}wrap--selected.png`,
      'layer2.opacity': 0,
    },

    {
      'class': 'icon_wrap',
      'parents': [

        {
          'class': 'icon_button_control',
          'attributes': ['hover'],
        },

      ],

      'layer1.opacity': 1, // Hover
    },

    {
      'class': 'icon_wrap',
      'parents': [

        {
          'class': 'icon_button_control',
          'attributes': ['selected'],
        },

      ],

      'layer2.opacity': 1, // Selected
    },

    // In Selection Icon
    {
      'class': 'icon_in_selection',
      'content_margin': [12, 12],

      // Default
      'layer0.texture': `${paths.this}inselection.png`,
      'layer0.opacity': 1,

      // Hover
      'layer1.texture': `${paths.this}inselection--hover.png`,
      'layer1.opacity': 0,

      // Selected
      'layer2.texture': `${paths.this}inselection--selected.png`,
      'layer2.opacity': 0,
    },

    {
      'class': 'icon_in_selection',
      'parents': [

        {
          'class': 'icon_button_control',
          'attributes': ['hover'],
        },

      ],

      'layer1.opacity': 1, // Hover
    },

    {
      'class': 'icon_in_selection',
      'parents': [

        {
          'class': 'icon_button_control',
          'attributes': ['selected'],
        },

      ],

      'layer2.opacity': 1, // Selected
    },

    // Highlight Result Icon
    {
      'class': 'icon_highlight',
      'content_margin': [12, 12],

      // Default
      'layer0.texture': `${paths.this}highlight.png`,
      'layer0.opacity': 1,

      // Hover
      'layer1.texture': `${paths.this}highlight--hover.png`,
      'layer1.opacity': 0,

      // Selected
      'layer2.texture': `${paths.this}highlight--selected.png`,
      'layer2.opacity': 0,
    },

    {
      'class': 'icon_highlight',
      'parents': [

        {
          'class': 'icon_button_control',
          'attributes': ['hover'],
        },

      ],

      'layer1.opacity': 1, // Hover
    },

    {
      'class': 'icon_highlight',
      'parents': [

        {
          'class': 'icon_button_control',
          'attributes': ['selected'],
        },

      ],

      'layer2.opacity': 1, // Selected
    },

    // Preserve Case Icon
    {
      'class': 'icon_preserve_case',
      'content_margin': [12, 12],

      // Default
      'layer0.texture': `${paths.this}preservecase.png`,
      'layer0.opacity': 1,

      // Hover
      'layer1.texture': `${paths.this}preservecase--hover.png`,
      'layer1.opacity': 0,

      // Selected
      'layer2.texture': `${paths.this}preservecase--selected.png`,
      'layer2.opacity': 0,
    },

    {
      'class': 'icon_preserve_case',
      'parents': [

        {
          'class': 'icon_button_control',
          'attributes': ['hover'],
        },

      ],

      'layer1.opacity': 1, // Hover
    },

    {
      'class': 'icon_preserve_case',
      'parents': [

        {
          'class': 'icon_button_control',
          'attributes': ['selected'],
        },

      ],

      'layer2.opacity': 1, // Selected
    },

    // Show Context Icon
    {
      'class': 'icon_context',
      'content_margin': [12, 12],

      // Default
      'layer0.texture': `${paths.this}context.png`,
      'layer0.opacity': 1,

      // Hover
      'layer1.texture': `${paths.this}context--hover.png`,
      'layer1.opacity': 0,

      // Selected
      'layer2.texture': `${paths.this}context--selected.png`,
      'layer2.opacity': 0,
    },

    {
      'class': 'icon_context',
      'parents': [

        {
          'class': 'icon_button_control',
          'attributes': ['hover'],
        },

      ],

      'layer1.opacity': 1, // Hover
    },

    {
      'class': 'icon_context',
      'parents': [

        {
          'class': 'icon_button_control',
          'attributes': ['selected'],
        },

      ],

      'layer2.opacity': 1, // Selected
    },

    // Use Buffer Icon
    {
      'class': 'icon_use_buffer',
      'content_margin': [12, 12],

      // Default
      'layer0.texture': `${paths.this}buffer.png`,
      'layer0.opacity': 1,

      // Hover
      'layer1.texture': `${paths.this}buffer--hover.png`,
      'layer1.opacity': 0,

      // Selected
      'layer2.texture': `${paths.this}buffer--selected.png`,
      'layer2.opacity': 0,
    },

    {
      'class': 'icon_use_buffer',
      'parents': [

        {
          'class': 'icon_button_control',
          'attributes': ['hover'],
        },

      ],

      'layer1.opacity': 1, // Hover
    },

    {
      'class': 'icon_use_buffer',
      'parents': [

        {
          'class': 'icon_button_control',
          'attributes': ['selected'],
        },

      ],

      'layer2.opacity': 1, // Selected
    },

  ];
};
