module.exports = function (values) {
  'use strict';

  const c = values.colors;
  const info = values.info;

  return [

    // Tooltip Background
    {
      'class': 'tool_tip_control',
      'content_margin': [16, 8],

      // Background
      'layer0.tint': c.bnp.fg[info.contrast],
      'layer0.opacity': 1,
    },

    // Tooltip Foreground
    {
      'class': 'tool_tip_label_control',

      'color': c.bnp.bg[info.contrast],
    },

  ];
};
