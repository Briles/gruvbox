(function () {
  'use strict';

  const fs = require('fs');
  const path = require('path');
  const _ = require('lodash');

  /**
   * Utility Functions
   */

  /**
   * Wraps fs.writeFileSync for common usage
   * @param  {[string]} filepath     [the path to write the file to]
   * @param  {[string]} filecontents [the contents of the file to be written]
   */
  var writeOutput = function (filepath, filecontents) {
    if (path.normalize(filepath)) {
      var pathparts = filepath.split(path.sep);

      fs.writeFileSync(filepath, filecontents);
      console.log('Wrote "%s"', pathparts.slice(-1)[0]);
    } else {
      throw new Error(`"${filepath}" is not a valid path`);
    }
  };

  const utilities = {
    writeOutput: writeOutput,
  };

  module.exports = utilities;

}());
