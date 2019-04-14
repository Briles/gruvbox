module.exports = function (values) {

  const c = values.colors;

  return [

    // Title Bar
    {
      class: 'title_bar',
      fg: 'var(fg_gs)',
      bg: 'var(container)',
    },

    // Pane
    {
      class: 'grid_layout_control',

      border_size: 1,
      border_color: 'var(border)',
    },

  ];
};
