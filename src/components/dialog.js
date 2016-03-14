module.exports = function (values) {
  'use strict';

  const c = values.colors;

  return [

    {
      'class': 'progress_gauge_control',
      'content_margin': [0, 6],

      // Background
      'layer0.tint': c.bnp.fg3,
      'layer0.opacity': 1,
    },

    {
      'class': 'dialog',

      // Background
      'layer0.tint': c.container,
      'layer0.opacity': 1,
    },

    {
      'class': 'progress_bar_control',

      // Background
      'layer0.tint': c.bnp.fg3,
      'layer0.opacity': 1,
    },

  ];
};
