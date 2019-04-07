const mixins = require('../../mixins.js');

module.exports = function (values) {
  const c = values.colors;
  const stOpts = values.options;

  return [

    // Default Thickness
    {
      class: 'tab_control',
      settings: [stOpts.underlineActiveTab],
      attributes: ['selected'],

      'layer2.opacity': 1, // Border - Bottom
    },

    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'tab_control',
        settings: [stOpts.underlineActiveTab],
        attributes: ['selected'],

        parents: [
          {
            attributes: [lumin],
          },
        ],

        'layer2.tint': palette('gray'),
      };
    }),

    // Thick Thickness
    {
      class: 'tab_control',
      settings: [stOpts.underlineActiveTab, stOpts.underlineActiveTabThick],
      attributes: ['selected'],

      'layer2.inner_margin': [0, 0, 0, 2],
    },

    // Thicker Thickness
    {
      class: 'tab_control',
      settings: [stOpts.underlineActiveTab, stOpts.underlineActiveTabThicker],
      attributes: ['selected'],

      'layer2.inner_margin': [0, 0, 0, 3],
    },

  ];
};
