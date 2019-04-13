module.exports = function (values) {

  const stOpts = values.options;

  return [

    // Default Thickness
    {
      class: 'mini_quick_panel_row',
      settings: [stOpts.sidelineCommandPaletteRow],
      attributes: ['selected'],

      'layer2.opacity': 1,
    },

    // Thicker
    {
      class: 'mini_quick_panel_row',
      settings: [stOpts.sidelineCommandPaletteRowThick],

      'layer2.inner_margin': [2, 0, 0, 0],
    },

    // Thickest
    {
      class: 'mini_quick_panel_row',
      settings: [stOpts.sidelineCommandPaletteRowThickest],

      'layer2.inner_margin': [3, 0, 0, 0],
    },

  ];
};
