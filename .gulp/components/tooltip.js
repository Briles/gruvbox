module.exports = function () {
  return [

    // Tooltip Background
    {
      class: 'tool_tip_control',
      content_margin: [16, 8],

      // Background
      'layer0.tint': 'var(fg)',
      'layer0.opacity': 1,
    },

    // Tooltip Foreground
    {
      class: 'tool_tip_label_control',

      'font.face': 'var(font_face)',
      color: 'var(bg)',
    },

  ];
};
