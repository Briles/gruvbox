module.exports = function (values) {

  const stOpts = values.options;

  return [

    // Extra Extra Small
    {
      class: 'label_control',
      settings: [stOpts.buttonsFontSizeXxs],

      parents: [

        {
          class: 'button_control',
        },

      ],

      'font.size': 10,
    },

    // Default: 11

    // Extra Small
    {
      class: 'label_control',
      settings: [stOpts.buttonsFontSizeXs],

      parents: [

        {
          class: 'button_control',
        },

      ],

      'font.size': 12,
    },

    // Small
    {
      class: 'label_control',
      settings: [stOpts.buttonsFontSizeS],

      parents: [

        {
          class: 'button_control',
        },

      ],

      'font.size': 13,
    },

    // Large
    {
      class: 'label_control',
      settings: [stOpts.buttonsFontSizeL],

      parents: [

        {
          class: 'button_control',
        },

      ],

      'font.size': 14,
    },

    // Extra Large
    {
      class: 'label_control',
      settings: [stOpts.buttonsFontSizeXl],

      parents: [

        {
          class: 'button_control',
        },

      ],

      'font.size': 15,
    },

    // Extra Extra Large
    {
      class: 'label_control',
      settings: [stOpts.buttonsFontSizeXxl],

      parents: [

        {
          class: 'button_control',
        },

      ],

      'font.size': 16,
    },

  ];
};
