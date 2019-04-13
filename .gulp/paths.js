const path = require('path');
const conf = require('./config.js');

// External Paths:
// Paths used for writing files and navigating the package source
const rootDirectory = path.resolve(__dirname, '../');
const widgetsDirectory = path.join(rootDirectory, '/widgets');
const componentsDirectory = path.join(rootDirectory, '.gulp/components/');
const optionsDirectory = `${componentsDirectory}options/`;

// Internal Paths:
// Paths used inside themes, schemes, widgets, etc.
// Relative to the Sublime Text Packages directory
//
// Sublime Text expects forward-slashed paths
const packagesRoot = `Packages/${conf.packageName}/`;
const assetsDirectory = `${conf.packageName}/assets/`;
const commonsDirectory = `${assetsDirectory}commons/`;

const paths = {
  external: {
    root: rootDirectory,
    widgets: widgetsDirectory,
    components: componentsDirectory,
    options: optionsDirectory,
  },
  internal: {
    packagesRoot: packagesRoot,
    assets: assetsDirectory,
    commons: commonsDirectory,
    widgets: `${packagesRoot}widgets/`,
  },
};

module.exports = paths;
