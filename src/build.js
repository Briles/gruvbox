(function () {
  'use strict';

  const commander = require('commander');

  commander
    .option('-t, --theme', 'Build Themes')
    .option('-s, --scheme', 'Build Color Schemes')
    .option('-w, --widget', 'Build Widgets')
    .parse(process.argv);

  const opts = require('./options.js');

  // Options
  const PACKAGE_NAME = 'gruvbox';
  const JSON_WHITESPACE = opts.jsonWhiteSpace || 2;
  const TEST_COLOR = opts.testColor || 'cyan';
  const BRIGHTNESS_MODES = ['Dark', 'Light'];
  const CONTRAST_MODES = ['Soft', 'Medium', 'Hard'];
  const BUILD_MODE_THEME = !!commander.theme;
  const BUILD_MODE_SCHEME = !!commander.scheme;
  const BUILD_MODE_WIDGET = !!commander.widget;
  const BUILD_MODE_ALL = !BUILD_MODE_THEME && !BUILD_MODE_SCHEME && !BUILD_MODE_WIDGET;

  const _ = require('lodash');
  _.mixin(require('lodash-deep'));
  const path = require('path');
  const tinycolor = require('./tinycolor.js');
  const paths = require('./paths.js')(PACKAGE_NAME);
  const components = require('./components.js');
  const utils = require('./utils.js');

  // theme-specific options exposed to the user
  const sublimeOpts = require('./sublime-options.js');

  // Gruvbox colors
  const gruvboxPalette = require('./palette.js');

  BRIGHTNESS_MODES.forEach(function (brightness) {

    const brightnessIdentifier = _.toLower(brightness);
    const brightnessPalette = gruvboxPalette[brightnessIdentifier];
    const oppositeBrightnessIdentifier = _.toLower(_.without(BRIGHTNESS_MODES, brightness));
    const oppositeBrightnessPalette = gruvboxPalette[oppositeBrightnessIdentifier];
    paths.internal.this = `${paths.internal.assets}${brightnessIdentifier}/`;
    paths.internal.spacegray = `${paths.internal.this}spacegray__`;

    CONTRAST_MODES.forEach(function (contrast) {
      const contrastIdentifier = _.toLower(contrast);
      const backgroundColor = brightnessPalette.bg[contrastIdentifier];
      const foregroundColor = brightnessPalette.fg[contrastIdentifier];

      const colors = {
        test: TEST_COLOR,
        transparent: 'rgba(0, 0, 0, 0)',
        black: 'rgb(0, 0, 0)',
        white: 'rgb(255, 255, 255)',

        background: backgroundColor,
        foreground: foregroundColor,
        bnp: brightnessPalette,
        obnp: oppositeBrightnessPalette,
        gs: _.deepMapValues(brightnessPalette, c => tinycolor(c).greyscale().toRgbString()),

        // Theme Colors
        border: tinycolor(backgroundColor).darken(12.3).toRgbString(),
        container: tinycolor(backgroundColor).darken(6.2).toRgbString(),
        panelRow: tinycolor(backgroundColor).lighten(2.35).toRgbString(),

        borderSofter: tinycolor(backgroundColor).darken(6.5).toRgbString(),
        containerSofter: tinycolor(backgroundColor).darken(2.8).toRgbString(),

        // Scheme Colors
        guide: tinycolor(brightnessPalette.fg1).setAlpha(0.15).toRgbString(),
        guideAlt: tinycolor(brightnessPalette.fg1).setAlpha(0.25).toRgbString(),
        ruler: tinycolor(brightnessPalette.fg1).setAlpha(0.50).toRgbString(),
        headingBackground: tinycolor(backgroundColor).lighten(7).toRgbString(),
      };

      const info = {
        brightness: brightnessIdentifier,
        oppositeBrightness: oppositeBrightnessIdentifier,
        contrast: contrastIdentifier,
        name: `${PACKAGE_NAME} (${brightness}) (${contrast})`,
      };

      const entirePalette = Object.assign(gruvboxPalette, colors);

      /**
       * Themes
       */

      if (BUILD_MODE_THEME || BUILD_MODE_ALL) {
        const themeValues = {
          colors: _.deepMapValues(entirePalette, c => tinycolor(c).toSublimeRgb()),
          info: info,
          paths: paths.internal,
          options: sublimeOpts,
        };

        var themeContents = [];
        const themePath = path.join(paths.external.root, `${info.name}.sublime-theme`);

        components.forEach(function (c) {
          const modulePath = path.join(paths.external.components, c);
          const m = require(modulePath)(themeValues);
          themeContents.push(m);
        });

        themeContents = _.flatten(themeContents);

        var themeStringified = JSON.stringify(themeContents, null, JSON_WHITESPACE);

        utils.writeOutput(themePath, themeStringified);
      }

      /**
       * Color Schemes
       */

      const schemeValues = {
        colors: _.deepMapValues(entirePalette, c => tinycolor(c).toSublimeHex()),
        info: info,
        paths: paths.internal,
      };

      if (BUILD_MODE_SCHEME || BUILD_MODE_ALL) {

        const schemeContents = require('./scheme.js')(schemeValues);
        const schemeDestination = path.join(paths.external.root, `${info.name}.tmTheme`);

        utils.writeOutput(schemeDestination, schemeContents);
      }

      /**
       * Widgets
       */
      if (BUILD_MODE_WIDGET || BUILD_MODE_ALL) {
        const widgetTemplate = require('./widget.js')(schemeValues);

        const widgetFilename = `Widget - ${info.name}.sublime-settings`;
        const widgetDestination = path.join(paths.external.widgets, widgetFilename);
        const widgetContents = JSON.stringify(widgetTemplate.settings, null, JSON_WHITESPACE);

        utils.writeOutput(widgetDestination, widgetContents);
      }
    });
  });

}());