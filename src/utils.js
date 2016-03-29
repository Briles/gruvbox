(function () {
  'use strict';

  const fs = require('fs');
  const path = require('path');
  const _ = require('lodash');

  /**
   * Utility Functions
   */

  /**
   * Join array of scopes
   * @param  {array} scopes the scopes to join
   * @return {string}        the joined array
   */
  var joinScopes = function (scopes) {
    return _(scopes).sort().sortedUniq().join(', ');
  };

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
   * Convert Windows backslash paths to slash paths
   * @author Sindre Sorhus <https://github.com/sindresorhus>
   * @license MIT
   * @param  {string} str path to slash
   * @return {string}     forward-slashed path
   */
  var slash = function (str) {
    var isExtendedLengthPath = /^\\\\\?\\/.test(str);
    var hasNonAscii = /[^\x00-\x80]+/.test(str);

    if (isExtendedLengthPath || hasNonAscii) {
      return str;
    }

    return str.replace(/\\/g, '/');
  };

  /**
   * wraps path.join with slash()
   * @return {string} forward-slashed path
   */
  var slashJoin = function () {
    return slash(path.join.apply(null, Array.prototype.slice.call(arguments)));
  };

  const utilities = {
    joinScopes: joinScopes,
    slash: slash,
    slashJoin: slashJoin,
    writeOutput: writeOutput,
  };

  module.exports = utilities;

}());
