const mixins = require('../mixins.js');

module.exports = function (values) {

  const paths = values.paths;

  return [

    // Fold Button
    {
      class: 'fold_button_control',
      content_margin: [9, 7, 8, 6],

      // Default
      'layer0.texture': `${paths.commons}fold.png`,
      'layer0.opacity': 1,
      'layer0.tint': 'var(fg)',

      // Folded Default
      'layer1.texture': `${paths.commons}unfold.png`,
      'layer1.opacity': 0,
      'layer1.tint': 'var(fg)',
    },

    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'fold_button_control',

        parents: [
          {
            class: 'window',
            attributes: [lumin],
          },
        ],

        'layer0.tint': palette('icon_default_gs'),
        'layer1.tint': palette('icon_default_gs'),
      };
    }),

    // Fold Button Hover
    {
      class: 'fold_button_control',
      attributes: ['hover'],

      'layer0.tint': 'var(fg)',
      'layer1.opacity': 0, // Folded Default
    },

    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'fold_button_control',
        attributes: ['hover'],

        parents: [
          {
            class: 'window',
            attributes: [lumin],
          },
        ],

        'layer0.tint': palette('icon_hover_gs'),
      };
    }),

    // Fold Button Folded
    {
      class: 'fold_button_control',
      attributes: ['expanded'],

      'layer0.opacity': 0, // Default
      'layer1.opacity': 1, // Folded Default
    },

    // Fold Button Folded Hover
    {
      class: 'fold_button_control',
      attributes: ['expanded', 'hover'],

      'layer0.opacity': 0, // Default
      'layer1.tint': 'var(fg)',
    },

    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'fold_button_control',
        attributes: ['expanded', 'hover'],

        parents: [
          {
            class: 'window',
            attributes: [lumin],
          },
        ],

        'layer1.tint': palette('icon_hover_gs'),
      };
    }),
  ];
};
