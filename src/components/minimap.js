module.exports = function (values) {
  'use strict';

  const c = values.colors;
  const info = values.info;
  const paths = values.paths;

  return [

    {
      'class': 'minimap_control',
      'settings': ['always_show_minimap_viewport'],

      'viewport_color': c.bnp[info.contrast],
      'viewport_opacity': 0.57,
    },

    {
      'class': 'minimap_control',
      'settings': ['!always_show_minimap_viewport'],

      'viewport_color': c.bnp[info.contrast],
      'viewport_opacity': 0,
    },

    {
      'class': 'minimap_control',
      'attributes': ['hover'],

      'viewport_opacity': 1,
    },

  ];
};
