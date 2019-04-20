const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const plist = require('plist');
const utils = require('./utils.js');

const sourceDirectory = path.resolve(__dirname, './icons/');
const destinationDirectory = path.resolve(__dirname, '../metadata/');

const sourceFiles = fs.readdirSync(sourceDirectory);

const writeIconPreferences = function (sourceFilename) {
  const sourcePath = path.join(sourceDirectory, sourceFilename);
  const source = require(sourcePath);

  if (_.isArray(source.scope)) {
    source.scope = utils.joinScopes(source.scope);
  }

  const plistFileName = path.basename(sourcePath, '.json');
  const plistPath = path.join(destinationDirectory, `${plistFileName}.tmPreferences`);
  const plistContents = plist.build(source);
  utils.writeOutput(plistPath, plistContents);
};

_.forEach(sourceFiles, writeIconPreferences);
