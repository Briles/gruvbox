module.exports = function (values) {
  'use strict';

  const c = values.colors;

  return [

    // Minimap
    {
      class: 'minimap_control',
      settings: ['always_show_minimap_viewport'],

      viewport_color: c.background,
      viewport_opacity: 0.5,
    },

    {
      class: 'minimap_control',
      settings: ['!always_show_minimap_viewport'],

      viewport_opacity: 0,
    },

    // Minimap Hover
    {
      class: 'minimap_control',
      settings: ['!always_show_minimap_viewport'],
      attributes: ['hover'],

      viewport_opacity: 0.5,
    },

  ];
};
