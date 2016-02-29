module.exports = function (values) {
  'use strict';

  const c = values.colors;
  const info = values.info;
  const paths = values.paths;

  const settings = {
    'draw_shadows': false,
    'font_options': [
      'DirectWrite',
      'subpixel_antialias',
    ],
    'line_padding_top': 4,
    'line_padding_bottom': 4,
    'color_scheme': `${paths.packagesRoot}${info.name}.tmTheme`,
  };

  const template = {
    name: info.name,
    colorSpaceName: 'sRGB',
    settings: [{
        settings: {
          background: c.background,
          caret: c.bnp.fg4,
          foreground: c.bnp.fg[info.contrast],
          invisibles: c.guide,
          lineHighlight: c.bnp.bg1,
          selection: c.bnp.bg1,
          selectionBorder: c.bnp.bg1,

          // selectionForeground: '#FFFFFF',
          inactiveSelection: c.bnp.bg1,
        },
      },

      {
        name: 'Comment',
        scope: 'comment',
        settings: {
          fontStyle: 'italic',
          foreground: c.bnp.gray,
        },
      },

      {
        name: 'Keyword',
        scope: 'keyword, storage',
        settings: {
          foreground: c.bnp.red,
        },
      },

      {
        scope: 'constant',
        settings: {
          foreground: c.bnp.purple,
        },
      },

      {
        scope: 'string',
        settings: {
          foreground: c.bnp.green,
        },
      },

      {
        scope: 'constant.character.escape',
        settings: {
          foreground: c.bnp.red,
        },
      },
    ],
  };

  return {
    settings: settings,
    template: template,
  };
};
