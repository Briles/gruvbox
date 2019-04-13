module.exports = function (values) {

  const stOpts = values.options;

  return [

    // Extra Extra Extra Small
    {
      class: 'tab_label',
      settings: [stOpts.tabsFontSizeXxxs],
      'font.size': 7,
    },

    // Extra Extra Small
    {
      class: 'tab_label',
      settings: [stOpts.tabsFontSizeXxs],
      'font.size': 8,
    },

    // Extra Small
    {
      class: 'tab_label',
      settings: [stOpts.tabsFontSizeXs],
      'font.size': 9,
    },

    // Small
    {
      class: 'tab_label',
      settings: [stOpts.tabsFontSizeS],
      'font.size': 10,
    },

    // Large
    {
      class: 'tab_label',
      settings: [stOpts.tabsFontSizeL],
      'font.size': 12,
    },

    // Extra Large
    {
      class: 'tab_label',
      settings: [stOpts.tabsFontSizeXl],
      'font.size': 13,
    },

    // Extra Extra Large
    {
      class: 'tab_label',
      settings: [stOpts.tabsFontSizeXxl],
      'font.size': 14,
    },

    // Extra Extra Extra Large
    {
      class: 'tab_label',
      settings: [stOpts.tabsFontSizeXxxl],
      'font.size': 15,
    },

  ];
};
