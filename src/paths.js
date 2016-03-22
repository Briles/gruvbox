var paths = function (packageName) {
  'use strict';

  if (typeof packageName === 'undefined') {
    throw new Error('packageName is undefined');
  }

  const path = require('path');

  // External Paths:
  // Paths used for writing files and navigating the package source
  const rootDirectory = path.resolve(__dirname, '../');
  const widgetsDirectory = path.join(rootDirectory, '/widgets');
  const componentsDirectory = path.join(rootDirectory, 'src/components/');

  // Internal Paths:
  // Paths used inside themes, schemes, widgets, etc.
  // Relative to the Sublime Text Packages directory
  //
  // Sublime Text expects forward-slashed paths
  const packagesRoot = `Packages/${packageName}/`;
  const assetsDirectory = `${packageName}/assets/`;
  const commonsDirectory = `${assetsDirectory}commons/`;

  const paths = {
    external: {
      root: rootDirectory,
      widgets: widgetsDirectory,
      components: componentsDirectory,
    },
    internal: {
      packagesRoot: packagesRoot,
      assets: assetsDirectory,
      commons: commonsDirectory,
      widgets: `${packagesRoot}widgets/`,
    },
  };

  return paths;
};

module.exports = paths;
