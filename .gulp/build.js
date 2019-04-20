const commander = require('commander');
const path = require('path');
const _ = require('lodash');

_.mixin(require('lodash-deep'));

const conf = require('./config.js');
const paths = require('./paths.js');
const utils = require('./utils.js');
const variantGenerator = require('./variants.js');
const themeGenerator = require('./theme.js');
const Widget = require('./widget.js');

// theme-specific options exposed to the user
const sublimeOpts = require('./sublime-options.js');

// Gruvbox colors
const gruvboxPalette = require('./palette.js');

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

let themeBuilt = false;

conf.brightnessModes.forEach((brightness) => {
  const brightnessIdentifier = _.toLower(brightness);
  const brightnessPalette = gruvboxPalette[brightnessIdentifier];
  const oppositeBrightnessIdentifier = _.toLower(_.without(conf.brightnessModes, brightness));
  paths.internal.this = `${paths.internal.assets}${brightnessIdentifier}/`;
  paths.internal.midstroke = `${paths.internal.commons}midstroke__`;
  paths.internal.spacegray = `${paths.internal.commons}spacegray__`;
  paths.internal.thick = `${paths.internal.commons}thick__`;

  conf.contrastModes.forEach((contrast) => {
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
        info,
        paths: paths.internal,
        externalPaths: paths.external,
        options: sublimeOpts,
      };

      const themePath = path.join(paths.external.root, 'gruvbox.sublime-theme');
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
      info,
    };

    const schemeVariants = [
      defaultVariant,
      (variantGenerator(defaultVariant).noDimmed),
    ];

    schemeVariants.forEach((variant) => {
      const baseName = variant.info.name;

      if (conf.buildScheme || conf.buildAll) {
        const schemeContents = utils.validateScheme(require('./scheme.js')(variant));

        const schemeName = `${baseName}.sublime-color-scheme`;
        const schemeDestination = path.join(paths.external.root, schemeName);
        const schemeStringified = JSON.stringify(schemeContents, null, conf.jsonWhitespace);

        utils.writeOutput(schemeDestination, schemeStringified);
      }

      /**
       * Widgets
       */
      if (conf.buildWidget || conf.buildAll) {
        const widget = new Widget(baseName);
        utils.writeOutput(widget.destination, widget.contents);
      }
    });
  });
});
