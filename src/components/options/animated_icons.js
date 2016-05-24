module.exports = function (values) {
  'use strict';

  const stOpts = values.options;
  const paths = values.paths;

  const closeButtonKeyFrames = {
    keyframes: [
      `${paths.this}close--hover.png`,
      `${paths.this}close--hover_1.png`,
      `${paths.this}close--hover_2.png`,
      `${paths.this}close--hover_3.png`,
      `${paths.this}close--hover_4.png`,
      `${paths.this}close--hover_5.png`,
      `${paths.this}close--hover_6.png`,
      `${paths.this}close--hover_7.png`,
      `${paths.this}close--hover_8.png`,
      `${paths.this}close--hover_9.png`,
      `${paths.this}close--hover.png`,
    ],
    loop: false,
    frame_time: 0.0197,
  };

  return [

    // Tab Close Button Hover
    {
      class: 'tab_close_button',
      'layer1.texture': closeButtonKeyFrames,
      settings: [stOpts.animatedIcons],
    },

    // Sidebar File Close Button Hover
    {
      class: 'close_button',
      'layer1.texture': closeButtonKeyFrames,
      settings: [stOpts.animatedIcons],
    },

    // Panel Close Button Hover
    {
      class: 'panel_close_button',
      'layer1.texture': closeButtonKeyFrames,
      settings: [stOpts.animatedIcons],
    },

  ];
};
