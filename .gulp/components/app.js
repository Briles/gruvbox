module.exports = function (values) {
  'use strict';

  const c = values.colors;

  return [
    {
      class: "title_bar",
      fg: c.gs.fg1,
      bg: c.container,
    },
    {
      class: 'sheet_container_control',

      'layer0.tint': c.background,
      'layer0.opacity': 1,
    },
    // Pane
    {
      class: 'grid_layout_control',

      border_size: 1,
      border_color: c.border,
    },

  ];
};
