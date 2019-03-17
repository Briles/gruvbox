(function () {
  'use strict';

  const commander = require('commander');
  const conf = require('./config.js');

  commander
    .option('-t, --theme', 'Build Themes')
    .option('-s, --scheme', 'Build Color Schemes')
    .option('-w, --widget', 'Build Widgets')
    .option('-m, --minify', 'Minify Color Schemes & Themes')
    .parse(process.argv);

  // Options
  conf.jsonWhitespace = !!commander.minify ? -1 : 2;
  conf.buildTheme = !!commander.theme;
  conf.buildScheme = !!commander.scheme;
  conf.buildWidget = !!commander.widget;
  conf.buildAll = !conf.buildTheme && !conf.buildScheme && !conf.buildWidget;

  const _ = require('lodash');
  _.mixin(require('lodash-deep'));
  const components = require('./components.js');
  const path = require('path');
  const paths = require('./paths.js');
  const tinycolor = require('./tinycolor.js');
  const utils = require('./utils.js');
  const variant = require('./variants.js');
  const Widget = require('./widget.js');

  // theme-specific options exposed to the user
  const sublimeOpts = require('./sublime-options.js');

  // Gruvbox colors
  const gruvboxPalette = require('./palette.js');

  conf.brightnessModes.forEach(function (brightness) {

    const brightnessIdentifier = _.toLower(brightness);
    const brightnessPalette = gruvboxPalette[brightnessIdentifier];
    const oppositeBrightnessIdentifier = _.toLower(_.without(conf.brightnessModes, brightness));
    const oppositeBrightnessPalette = gruvboxPalette[oppositeBrightnessIdentifier];
    paths.internal.this = `${paths.internal.assets}${brightnessIdentifier}/`;
    paths.internal.midstroke = `${paths.internal.this}midstroke__`;
    paths.internal.spacegray = `${paths.internal.this}spacegray__`;
    paths.internal.thick = `${paths.internal.this}thick__`;

    conf.contrastModes.forEach(function (contrast) {
      const contrastIdentifier = _.toLower(contrast);
      const backgroundColor = brightnessPalette.bg[contrastIdentifier];
      const foregroundColor = brightnessPalette.fg[contrastIdentifier];

      const colors = {
        test: conf.testColor,
        transparent: 'rgba(0, 0, 0, 0)',
        black: 'rgb(0, 0, 0)',
        white: 'rgb(255, 255, 255)',

        background: backgroundColor,
        foreground: foregroundColor,
        bnp: brightnessPalette,
        obnp: oppositeBrightnessPalette,
        gs: _.deepMapValues(brightnessPalette, c => tinycolor(c).greyscale().toRgbString()),

        // Theme Colors
        border: tinycolor(backgroundColor).darken(10).toRgbString(),
        container: tinycolor(backgroundColor).darken(5).toRgbString(),
        panelRow: tinycolor(backgroundColor).lighten(2.35).toRgbString(),

        borderSofter: tinycolor(backgroundColor).darken(6.5).toRgbString(),
        containerSofter: tinycolor(backgroundColor).darken(2.8).toRgbString(),
      };

      const info = {
        brightness: brightnessIdentifier,
        oppositeBrightness: oppositeBrightnessIdentifier,
        contrast: contrastIdentifier,
        name: `${conf.packageName} (${brightness}) (${contrast})`,
      };

      const entirePalette = Object.assign(gruvboxPalette, colors);

      /**
       * Themes
       */

      if (conf.buildTheme || conf.buildAll) {
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
          const m = require(modulePath)(themeValues, paths.external);
          themeContents.push(...m);
        });

        var themeStringified = JSON.stringify(themeContents, null, conf.jsonWhitespace);

        utils.writeOutput(themePath, themeStringified);
      }

      /**
       * Color Schemes
       */

      const defaultVariant = {
        colors: entirePalette,
        info: info,
      };

      const schemeVariants = [
        defaultVariant,
        (variant(defaultVariant).noDimmed),
      ];

      schemeVariants.forEach(function (variant) {
        var baseName = variant.info.name;

        if (conf.buildScheme || conf.buildAll) {
          var schemeContents = utils.validateScheme(require('./scheme.js')(variant));

          if (commander.minify) {
            schemeContents = utils.minifyScheme(schemeContents);
          }

          const schemeName = `${baseName}.sublime-color-scheme`;
          const schemeDestination = path.join(paths.external.root, schemeName);
          const schemeStringified = JSON.stringify(schemeContents, null, conf.jsonWhitespace);

          utils.writeOutput(schemeDestination, schemeStringified);
        }

        /**
         * Widgets
         */
        if (conf.buildWidget || conf.buildAll) {
          var widget = new Widget(baseName);
          utils.writeOutput(widget.destination, widget.contents);
        }

      });

    });
  });

}());
