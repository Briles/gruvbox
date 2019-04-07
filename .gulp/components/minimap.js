module.exports = function (values) {

  const c = values.colors;

  return [

    // Minimap
    {
      class: 'minimap_control',
      settings: ['always_show_minimap_viewport'],

      viewport_color: 'var(fg)',
      viewport_opacity: 0.25,
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

      viewport_color: 'var(fg)',
      viewport_opacity: 0.25,
    },

  ];
};
