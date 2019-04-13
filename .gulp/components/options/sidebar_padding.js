module.exports = function (values) {

  const stOpts = values.options;

  return [

    // Cramped Sidebar
    {
      class: 'sidebar_tree',
      settings: [stOpts.sidebarSpacingXs],
      row_padding: [24, 1],
    },

    // Compact Sidebar
    {
      class: 'sidebar_tree',
      settings: [stOpts.sidebarSpacingS],
      row_padding: [24, 3],
    },

    // Comfortable Sidebar
    {
      class: 'sidebar_tree',
      settings: [stOpts.sidebarSpacingL],
      row_padding: [24, 7],
    },

    // Cozy Sidebar
    {
      class: 'sidebar_tree',
      settings: [stOpts.sidebarSpacingXl],
      row_padding: [24, 9],
    },

  ];
};
