module.exports = function (values) {
  'use strict';

  const info = values.info;
  const paths = values.paths;

  const settings = {
    draw_shadows: false,
    font_options: [
      'DirectWrite',
      'subpixel_antialias',
    ],
    line_padding_top: 4,
    line_padding_bottom: 4,
    color_scheme: `${paths.packagesRoot}${info.name}.tmTheme`,
  };

  return {
    settings: settings,
  };
};
