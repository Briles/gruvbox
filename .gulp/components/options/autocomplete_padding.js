module.exports = function (values) {

  const stOpts = values.options;

  return [

    // Cramped AutoComplete
    {
      class: 'auto_complete',
      settings: [stOpts.autocompleteSpacingXs],
      row_padding: [12, 2],
    },

    // Compact AutoComplete
    {
      class: 'auto_complete',
      settings: [stOpts.autocompleteSpacingS],
      row_padding: [12, 4],
    },

    // Comfortable AutoComplete
    {
      class: 'auto_complete',
      settings: [stOpts.autocompleteSpacingL],
      row_padding: [12, 8],
    },

    // Cozy AutoComplete
    {
      class: 'auto_complete',
      settings: [stOpts.autocompleteSpacingXl],
      row_padding: [12, 10],
    },

  ];
};
