const path = require('path');

const paths = require('./paths.js');
const utils = require('./utils.js');
const themeGenerator = require('./theme.js');

// theme-specific options exposed to the user
const sublimeOpts = require('./sublime-options.js');

const themeValues = {
  paths: paths.internal,
  externalPaths: paths.external,
  options: sublimeOpts,
};

const destination = path.join(paths.external.root, 'gruvbox.sublime-theme');
const theme = themeGenerator(themeValues);
const stringified = JSON.stringify(theme, null, 2);

utils.writeOutput(destination, stringified);
