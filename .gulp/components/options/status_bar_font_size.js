module.exports = function (values) {

  const stOpts = values.options;

  return [

    // Extra Extra Small
    {
      class: 'label_control',
      settings: [stOpts.statusbarFontSizeXxs],

      parents: [

        {
          class: 'status_bar',
        },

      ],

      'font.size': 10,
    },

    // Default: 11

    // Extra Small
    {
      class: 'label_control',
      settings: [stOpts.statusbarFontSizeXs],

      parents: [

        {
          class: 'status_bar',
        },

      ],

      'font.size': 12,
    },

    // Small
    {
      class: 'label_control',
      settings: [stOpts.statusbarFontSizeS],

      parents: [

        {
          class: 'status_bar',
        },

      ],

      'font.size': 13,
    },

    // Large
    {
      class: 'label_control',
      settings: [stOpts.statusbarFontSizeL],

      parents: [

        {
          class: 'status_bar',
        },

      ],

      'font.size': 14,
    },

    // Extra Large
    {
      class: 'label_control',
      settings: [stOpts.statusbarFontSizeXl],

      parents: [

        {
          class: 'status_bar',
        },

      ],

      'font.size': 15,
    },

    // Extra Extra Large
    {
      class: 'label_control',
      settings: [stOpts.statusbarFontSizeXxl],

      parents: [

        {
          class: 'status_bar',
        },

      ],

      'font.size': 16,
    },

  ];
};
