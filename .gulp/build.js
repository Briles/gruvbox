const commander = require('commander');
const conf = require('./config.js');

commander
  .option('-t, --theme', 'Build Themes')
  .option('-s, --scheme', 'Build Color Schemes')
  .option('-w, --widget', 'Build Widgets')
  .parse(process.argv);

// Options
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
const themeGenerator = require('./theme.js');
const Widget = require('./widget.js');

// theme-specific options exposed to the user
const sublimeOpts = require('./sublime-options.js');

// Gruvbox colors
const gruvboxPalette = require('./palette.js');

let themeBuilt = false;

conf.brightnessModes.forEach(function (brightness) {

  const brightnessIdentifier = _.toLower(brightness);
  const brightnessPalette = gruvboxPalette[brightnessIdentifier];
  const oppositeBrightnessIdentifier = _.toLower(_.without(conf.brightnessModes, brightness));
  const oppositeBrightnessPalette = gruvboxPalette[oppositeBrightnessIdentifier];
  paths.internal.this = `${paths.internal.assets}${brightnessIdentifier}/`;
  paths.internal.midstroke = `${paths.internal.commons}midstroke__`;
  paths.internal.spacegray = `${paths.internal.commons}spacegray__`;
  paths.internal.thick = `${paths.internal.commons}thick__`;

  conf.contrastModes.forEach(function (contrast) {
    const contrastIdentifier = _.toLower(contrast);
    const backgroundColor = brightnessPalette.bg[contrastIdentifier];
    const foregroundColor = brightnessPalette.fg[contrastIdentifier];

    const colors = {
      background: backgroundColor,
      foreground: foregroundColor,
      bnp: brightnessPalette,
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

    if (!themeBuilt && (conf.buildTheme || conf.buildAll)) {
      const themeValues = {
        colors: entirePalette,
        info: info,
        paths: paths.internal,
        externalPaths: paths.external,
        options: sublimeOpts,
      };

      const themePath = path.join(paths.external.root, `gruvbox.sublime-theme`);
      const theme = themeGenerator(themeValues);
      const themeStringified = JSON.stringify(theme, null, conf.jsonWhitespace);

      utils.writeOutput(themePath, themeStringified);

      themeBuilt = true;
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
