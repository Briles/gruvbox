module.exports = function (values) {
  'use strict';

  const c = values.colors;

  return [

    // Progress Bar Foreground (Bar)
    {
      class: 'progress_gauge_control',
      content_margin: [0, 6],

      // Background
      'layer0.tint': c.bnp.bg4,
      'layer0.opacity': 1,
    },

    {
      class: 'dialog',

      // Background
      'layer0.tint': c.container,
      'layer0.opacity': 1,
    },

    // Progress Bar Background
    {
      class: 'progress_bar_control',

      // Background
      'layer0.tint': c.bnp.bg1,
      'layer0.opacity': 1,
    },

  ];
};
