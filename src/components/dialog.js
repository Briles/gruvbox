module.exports = function (values) {
  'use strict';

  const c = values.colors;
  const info = values.info;
  const paths = values.paths;

  return [

    {
      'class': 'progress_gauge_control',
      'content_margin': [0, 6],

      'layer0.tint': c.bnp.fg3,
      'layer0.opacity': 1,
    },

    {
      'class': 'dialog',

      'layer0.tint': c.container,
      'layer0.opacity': 1,
    },

    {
      'class': 'progress_bar_control',

      'layer0.tint': c.bnp.fg3,
      'layer0.opacity': 1,
    },

  ];
};
