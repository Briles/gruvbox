module.exports = function (values) {

  const c = values.colors;

  return [
    {
      class: 'title_bar',
      fg: 'var(fg1_gs)',
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
