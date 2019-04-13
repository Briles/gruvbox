module.exports = function (values) {

  const stOpts = values.options;

  return [

    // Cramped Command Palette
    {
      class: 'quick_panel',
      parents: [

        {
          class: 'overlay_control',
        },

      ],
      settings: [stOpts.commandPaletteSpacingXs],
      row_padding: [14, 4],
    },

    // Compact Command Palette
    {
      class: 'quick_panel',
      parents: [

        {
          class: 'overlay_control',
        },

      ],
      settings: [stOpts.commandPaletteSpacingS],
      row_padding: [14, 8],
    },

    // Comfortable Command Palette
    {
      class: 'quick_panel',
      parents: [

        {
          class: 'overlay_control',
        },

      ],
      settings: [stOpts.commandPaletteSpacingL],
      row_padding: [14, 14],
    },

    // Cozy Command Palette
    {
      class: 'quick_panel',
      parents: [

        {
          class: 'overlay_control',
        },

      ],
      settings: [stOpts.commandPaletteSpacingXl],
      row_padding: [14, 16],
    },

  ];
};
