(function () {
  'use strict';

  const fs = require('fs');
  const path = require('path');
  const _ = require('lodash');
  const slash = require('slash');

  /**
   * Utility Functions
   */

  /**
   * Wraps fs.writeFileSync for common usage
   * @param {string} filepath     the path to write the file to
   * @param {string} filecontents the contents of the file to be written
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

  /**
   * wraps path.join with slash()
   * @return {string} forward-slashed path
   */
  var slashJoin = function () {
    return slash(path.join.apply(null, Array.prototype.slice.call(arguments)));
  };

  const utilities = {
    writeOutput: writeOutput,
    slashJoin: slashJoin,
  };

  module.exports = utilities;

}());
