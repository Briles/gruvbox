module.exports = function (values) {

  const stOpts = values.options;

  return [

    // Extra Extra Small
    {
      class: 'panel_control',
      settings: [stOpts.panelXxs],
      content_margin: [6, 2, 6, 2],
    },

    // Extra Small
    {
      class: 'panel_control',
      settings: [stOpts.panelXs],
      content_margin: [6, 4, 6, 4],
    },

    // Small
    {
      class: 'panel_control',
      settings: [stOpts.panelS],
      content_margin: [6, 8, 6, 8],
    },

    // Large
    {
      class: 'panel_control',
      settings: [stOpts.panelL],
      content_margin: [6, 13, 6, 13],
    },

    // Extra Large
    {
      class: 'panel_control',
      settings: [stOpts.panelXl],
      content_margin: [6, 15, 6, 15],
    },

    // Extra Extra Large
    {
      class: 'panel_control',
      settings: [stOpts.panelXxl],
      content_margin: [6, 17, 6, 17],
    },

  ];
};
