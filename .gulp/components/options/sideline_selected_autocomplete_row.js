module.exports = function (values) {

  const stOpts = values.options;

  return [

    // Default Thickness
    {
      class: 'table_row',
      settings: [stOpts.sidelineAutocompleteRow],
      attributes: ['selected'],

      'layer1.opacity': 1,
    },

    // Thicker
    {
      class: 'table_row',
      settings: [stOpts.sidelineAutocompleteRowThick],

      'layer1.inner_margin': [2, 0, 0, 0],
    },

    // Thickest
    {
      class: 'table_row',
      settings: [stOpts.sidelineAutocompleteRowThickest],

      'layer1.inner_margin': [3, 0, 0, 0],
    },

  ];
};
