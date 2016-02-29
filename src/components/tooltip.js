module.exports = function (values) {
  'use strict';

  const c = values.colors;
  const info = values.info;
  const paths = values.paths;

  return [

    {
      'class': 'tool_tip_control',
      'content_margin': [16, 8],

      'layer0.tint': c.bnp.fg[info.contrast],
      'layer0.inner_margin': [0, 0],
      'layer0.opacity': 1,
    },

    {
      'class': 'tool_tip_label_control',

      'color': c.bnp.bg[info.contrast],
    },

  ];
};
