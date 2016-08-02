module.exports = function (values) {
  'use strict';

  const c = values.colors;
  const stOpts = values.options;

  return [

    // Default Thickness
    {
      class: 'tab_control',
      settings: [stOpts.underlineActiveTab],
      attributes: ['selected'],

      'layer2.tint': c.bnp.gray,
      'layer2.opacity': 1, // Border - Bottom
    },

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
      settings: [stOpts.underlineActiveTab, stOpts.underlineActiveTabThick],
      attributes: ['selected'],

      'layer2.inner_margin': [0, 0, 0, 3],
    },

  ];
};
