module.exports = function (values) {
  'use strict';

  const paths = values.paths;

  return [

    // Fold Button
    {
      'class': 'fold_button_control',
      'content_margin': [9, 7, 8, 6],

      // Default
      'layer0.texture': `${paths.this}fold.png`,
      'layer0.opacity': 1,

      // Hover
      'layer1.texture': `${paths.this}fold--hover.png`,
      'layer1.opacity': 0,

      // Folded Default
      'layer2.texture': `${paths.this}unfold.png`,
      'layer2.opacity': 0,

      // Folded Hover
      'layer3.texture': `${paths.this}unfold--hover.png`,
      'layer3.opacity': 0,
    },

    // Fold Button Hover
    {
      'class': 'fold_button_control',
      'attributes': ['hover'],

      'layer0.opacity': 0, // Default
      'layer1.opacity': 1, // Hover
      'layer2.opacity': 0, // Folded Default
      'layer3.opacity': 0, // Folded Hover
    },

    // Fold Button Folded
    {
      'class': 'fold_button_control',
      'attributes': ['expanded'],

      'layer0.opacity': 0, // Default
      'layer1.opacity': 0, // Hover
      'layer2.opacity': 1, // Folded Default
      'layer3.opacity': 0, // Folded Hover
    },

    // Fold Button Folded Hover
    {
      'class': 'fold_button_control',
      'attributes': ['expanded', 'hover'],

      'layer0.opacity': 0, // Default
      'layer1.opacity': 0, // Hover
      'layer2.opacity': 0, // Folded Default
      'layer3.opacity': 1, // Folded Hover
    },
  ];
};
