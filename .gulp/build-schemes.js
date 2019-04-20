const utils = require('./utils.js');
const Scheme = require('./scheme.js');
const Widget = require('./widget.js');

// Gruvbox colors
const gruvboxPalette = require('./gruvbox/palette.js');
const gruvboxTemplate = require('./gruvbox/template.js');
const gruvboxAbout = require('./gruvbox/about.js');

['Dark', 'Light'].forEach((brightness) => {
  const brightnessIdentifier = brightness.toLowerCase();
  const brightnessPalette = gruvboxPalette[brightnessIdentifier];

  ['Soft', 'Medium', 'Hard'].forEach((contrast) => {
    const contrastIdentifier = contrast.toLowerCase();
    const background = brightnessPalette.bg[contrastIdentifier];
    const foreground = brightnessPalette.fg[contrastIdentifier];

    const about = Object.assign({}, gruvboxAbout, {
      name: `gruvbox (${brightness}) (${contrast})`,
    });

    const palette = () => Object.assign({}, brightnessPalette, {
      bg: background,
      fg: foreground,
    });

    const template = gruvboxTemplate;

    const { name } = about;
    const scheme = new Scheme(about, palette, template).validate();
    const widget = new Widget(name);

    const ndcName = `${name} NDC`;
    const ndcAbout = Object.assign({}, gruvboxAbout, {
      name: ndcName,
    });
    const ndcPalette = () => [
      'red',
      'green',
      'yellow',
      'blue',
      'purple',
      'aqua',
      'orange',
    ].reduce((acc, colorKey) => Object.assign(acc, {
      [colorKey + 1]: acc[colorKey],
    }), Object.assign({}, palette()));

    const ndcScheme = new Scheme(ndcAbout, ndcPalette, template).validate();
    const ndcWidget = new Widget(ndcName);

    utils.writeOutput(scheme.getPath(), scheme.stringify());
    utils.writeOutput(widget.getPath(), widget.stringify());

    utils.writeOutput(ndcScheme.getPath(), ndcScheme.stringify());
    utils.writeOutput(ndcWidget.getPath(), ndcWidget.stringify());
  });
});
