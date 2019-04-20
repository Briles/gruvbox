const path = require('path');

// External Paths:
// Paths used for writing files and navigating the package source
const rootDirectory = path.resolve(__dirname, '../');
const componentsDirectory = path.join(rootDirectory, '.gulp/components/');
const optionsDirectory = `${componentsDirectory}options/`;

// Internal Paths:
// Paths used inside themes, schemes, widgets, etc.
// Relative to the Sublime Text Packages directory
//
// Sublime Text expects forward-slashed paths
const packagesRoot = 'Packages/gruvbox/';
const assetsDirectory = 'gruvbox/assets/';
const commonsDirectory = `${assetsDirectory}commons/`;

const midstroke = `${commonsDirectory}midstroke__`;
const spacegray = `${commonsDirectory}spacegray__`;
const thick = `${commonsDirectory}thick__`;

const paths = {
  external: {
    root: rootDirectory,
    components: componentsDirectory,
    options: optionsDirectory,
  },
  internal: {
    packagesRoot,
    assets: assetsDirectory,
    commons: commonsDirectory,
    midstroke,
    spacegray,
    thick,
  },
};

module.exports = paths;
