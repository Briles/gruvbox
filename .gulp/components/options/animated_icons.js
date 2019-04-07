module.exports = function (values) {

  const mixins = require('../../mixins.js');

  const stOpts = values.options;
  const paths = values.paths;

  const closeButtonKeyFrames = {
    keyframes: [
      `${paths.commons}close--hover.png`,
      `${paths.commons}close--hover_1.png`,
      `${paths.commons}close--hover_2.png`,
      `${paths.commons}close--hover_3.png`,
      `${paths.commons}close--hover_4.png`,
      `${paths.commons}close--hover_5.png`,
      `${paths.commons}close--hover_6.png`,
      `${paths.commons}close--hover_7.png`,
      `${paths.commons}close--hover_8.png`,
      `${paths.commons}close--hover_9.png`,
      `${paths.commons}close--hover.png`,
    ],
    loop: false,
    frame_time: 0.0197,
  };

  return [

    // Tab Close Button Hover
    {
      class: 'tab_close_button',
      attributes: ['hover'],
      'layer0.texture': closeButtonKeyFrames,
      settings: [stOpts.animatedIcons],
    },

    // Sidebar File Close Button Hover
    {
      class: 'close_button',
      attributes: ['hover'],
      'layer0.texture': closeButtonKeyFrames,
      settings: [stOpts.animatedIcons],
    },

    // Panel Close Button Hover
    {
      class: 'panel_close_button',
      attributes: ['hover'],
      'layer0.texture': closeButtonKeyFrames,
      settings: [stOpts.animatedIcons],
    },

    // Folder Icon Hover
    {
      class: 'icon_folder',
      'layer2.texture': mixins.animatedIconFolder(paths.commons),
      settings: [stOpts.animatedIcons],
    },

    // Panel Switcher Hover
    {
      class: 'panel_button_control',
      attributes: ['hover'],
      'layer0.texture': mixins.animatedPanelButtonControl(paths.commons),
      settings: [stOpts.animatedIcons],
    },

  ];
};
