const mixins = require('../../mixins.js');

module.exports = function (values) {
  const c = values.colors;
  const stOpts = values.options;

  return [

    // Default Thickness
    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'tab_control',
        settings: [stOpts.underlineDirtyTabs],
        attributes: ['dirty'],

        parents: [
          {
            attributes: [lumin],
          },
        ],

        'layer2.tint': palette('gray'),
      };
    }),

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
