module.exports = function (values) {
  'use strict';

  const c = values.colors;
  const info = values.info;
  const paths = values.paths;

  return [

    {
      'class': 'sheet_container_control',

      'layer0.tint': c.background,
      'layer0.opacity': 1,
    },

    {
      'class': 'grid_layout_control',

      'border_size': 1,
      'border_color': c.border,
    },

  ];
};
