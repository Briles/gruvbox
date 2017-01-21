module.exports = function (values) {
  'use strict';

  const c = values.colors;
  const stOpts = values.options;

  return [

    // Default Thickness
    {
      class: 'tab_control',
      settings: [stOpts.underlineDirtyTabs],
      attributes: ['dirty'],

      'layer2.tint': c.bnp.gray,
    },

    {
      class: 'tab_control',
      settings: [stOpts.underlineDirtyTabs],
      attributes: ['dirty', 'selected'],

      'layer2.opacity': 1, // Border - Bottom
    },

    // Thick Thickness
    {
      class: 'tab_control',
      settings: [stOpts.underlineDirtyTabs, stOpts.underlineDirtyTabsThick],
      attributes: ['dirty'],

      'layer2.inner_margin': [0, 0, 0, 2],
    },

  ];
};
