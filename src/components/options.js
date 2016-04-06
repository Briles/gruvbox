module.exports = function (values, externalPaths) {
  'use strict';

  const _ = require('lodash');

  // Specify the files manually so we can control the load order.
  var optionFiles = [
    'tab_size',
    'tab_font_size',
    'status_bar_size',
    'status_bar_font_size',
    'status_bar_button_size',
    'sidebar_padding',
    'autocomplete_padding',
    'command_palette_padding',
    'disable_borders',
    'underline_modified_tabs',
    'enable_borders',
    'iconset_spacegray',
    'autocollapse_tabs',
    'disable_greyscale',
    'folder_icons',
    'sidebar_font_size',
    'scrollbar_width',
    'panel_size',
    'less_contrast',
    'button_font_size',
    'misc',
  ];

  optionFiles = optionFiles.map(function (file) {
    return require(`${externalPaths.options}${file}.js`)(values);
  });

  return _.flatten(optionFiles);
};
