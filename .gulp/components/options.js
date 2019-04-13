module.exports = function (values, externalPaths) {

  const _ = require('lodash');

  // Specify the files manually so we can control the load order.
  var optionFiles = [
    'tab_size',
    'tab_font_size',
    'status_bar_size',
    'status_bar_font_size',
    'status_bar_button_size',
    'sidebar_bold',
    'sidebar_padding',
    'sidebar_indent',
    'autocomplete_padding',
    'sideline_selected_autocomplete_row',
    'command_palette_padding',
    'sideline_selected_command_palette_row',
    'disable_borders',
    'enable_borders',
    'underline_modified_tabs',
    'underline_active_tab',
    'iconset_midstroke',
    'iconset_spacegray',
    'iconset_thick',
    'autocollapse_tabs',
    'disable_greyscale',
    'folder_icons',
    'sidebar_font_size',
    'scrollbar_width',
    'panel_size',
    'less_contrast',
    'button_font_size',
    'misc',
    'animated_icons',
  ];

  optionFiles = optionFiles.map(function (file) {
    return require(`${externalPaths.options}${file}.js`)(values);
  });

  return _.flatten(optionFiles);
};
