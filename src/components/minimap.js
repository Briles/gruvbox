module.exports = function (values) {
  'use strict';

  const c = values.colors;

  return [

    // Minimap
    {
      class: 'minimap_control',

      viewport_color: c.background,
      viewport_opacity: 0,
    },

    {
      class: 'minimap_control',
      settings: ['always_show_minimap_viewport'],

      viewport_opacity: 0.57,
    },

    // Minimap Hover
    {
      class: 'minimap_control',
      attributes: ['hover'],

      viewport_opacity: 1,
    },

  ];
};
