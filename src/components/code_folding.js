module.exports = function (values) {
  'use strict';

  const c = values.colors;
  const info = values.info;
  const paths = values.paths;

  return [

    {
      'class': 'fold_button_control',
      'content_margin': [9, 7, 8, 6],

      'layer0.texture': `${paths.this}fold.png`,
      'layer0.opacity': 1,
      'layer0.inner_margin': 0,

      'layer1.texture': `${paths.this}fold--hover.png`,
      'layer1.opacity': 0,
      'layer1.inner_margin': 0,

      'layer2.texture': `${paths.this}unfold.png`,
      'layer2.opacity': 0,
      'layer2.inner_margin': 0,

      'layer3.texture': `${paths.this}unfold--hover.png`,
      'layer3.opacity': 0,
      'layer3.inner_margin': 0,
    },

    {
      'class': 'fold_button_control',
      'attributes': ['hover'],

      'layer0.opacity': 0,
      'layer1.opacity': 1,
      'layer2.opacity': 0,
      'layer3.opacity': 0,
    },

    {
      'class': 'fold_button_control',
      'attributes': ['expanded'],

      'layer0.opacity': 0,
      'layer1.opacity': 0,
      'layer2.opacity': 1,
      'layer3.opacity': 0,
    },

    {
      'class': 'fold_button_control',
      'attributes': ['expanded', 'hover'],

      'layer0.opacity': 0,
      'layer1.opacity': 0,
      'layer2.opacity': 0,
      'layer3.opacity': 1,
    },
  ];
};
