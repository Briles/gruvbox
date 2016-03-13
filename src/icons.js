(function () {
  'use strict';

  const path = require('path');
  const fs = require('fs');
  const _ = require('lodash');
  const plist = require('plist');
  const utils = require('./utils.js');

  var sourceDirectory = path.resolve(__dirname, './icons/');
  var destinationDirectory = path.resolve(__dirname, '../prefs/');

  var sourceFiles = fs.readdirSync(sourceDirectory);

  var writeIconPreferences = function (sourceFilename) {
    var sourcePath = path.join(sourceDirectory, sourceFilename);
    var source = require(sourcePath);

    if (_.isArray(source.scope)) {
      source.scope = source.scope.map(scope => scope.trim()).join(', ');
    }

    var plistFileName = path.basename(sourcePath, '.json');
    var plistPath = path.join(destinationDirectory, `${plistFileName}.tmPreferences`);
    var plistContents = plist.build(source);
    utils.writeOutput(plistPath, plistContents);
  };

  _.forEach(sourceFiles, writeIconPreferences);

}());
