module.exports = function (values) {
  'use strict';

  const stOpts = values.options;

  return [

    {
      class: 'sidebar_heading',
      settings: [stOpts.sidebarHeadingBold],

      'font.bold': true,
    },

    {
      class: 'sidebar_label',
      settings: [stOpts.sidebarLabelBold],

      'font.bold': true,
    },

  ];
};
