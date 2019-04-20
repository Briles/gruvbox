const mixins = require('../mixins.js');

module.exports = function () {
  return [

    // About window title
    {
      class: 'title_label_control',
      fg: 'var(fg)',
      'font.face': 'var(font_face)',
    },

    // Progress Bar Foreground (Bar)
    {
      class: 'progress_gauge_control',
      content_margin: [0, 6],

      // Background
      'layer0.tint': 'var(bg)',
      'layer0.opacity': 1,
    },

    ...mixins.createComponentVariations((lumin, palette) => ({
      class: 'progress_gauge_control',

      parents: [
        {
          class: 'window',
          attributes: [lumin],
        },
      ],

      'layer0.tint': palette('bg4'),
    })),

    {
      class: 'dialog',

      // Background
      'layer0.tint': 'var(container)',
      'layer0.opacity': 1,
    },

    // Progress Bar Background
    {
      class: 'progress_bar_control',

      // Background
      'layer0.tint': 'var(bg)',
      'layer0.opacity': 1,
    },

    ...mixins.createComponentVariations((lumin, palette) => ({
      class: 'progress_bar_control',

      parents: [
        {
          class: 'window',
          attributes: [lumin],
        },
      ],

      'layer0.tint': palette('bg1'),
    })),

  ];
};
