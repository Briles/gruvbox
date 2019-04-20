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
const joinScopes = function (scopes) {
  return _(scopes).sort().sortedUniq().join(',');
};

/**
 * Wraps fs.writeFileSync for common usage
 * @param {string} filepath     the path to write the file to
 * @param {string} filecontents the contents of the file to be written
 */
const writeOutput = function (filepath, filecontents) {
  fs.writeFile(filepath, filecontents, (err) => {
    if (err) throw err;
    console.log('Wrote "%s"', filepath.split(path.sep).slice(-1)[0]);
  });
};

/**
 * Convert Windows backslash paths to slash paths
 * @author Sindre Sorhus <https://github.com/sindresorhus>
 * @license MIT
 * @param  {string} str path to slash
 * @return {string}     forward-slashed path
 */
const slash = function (input) {
  const isExtendedLengthPath = /^\\\\\?\\/.test(input);
  const hasNonAscii = /[^\u0000-\u0080]+/.test(input); // eslint-disable-line no-control-regex

  if (isExtendedLengthPath || hasNonAscii) {
    return input;
  }

  return input.replace(/\\/g, '/');
};

/**
 * wraps path.join with slash()
 * @return {string} forward-slashed path
 */
const slashJoin = function (...args) {
  return slash(path.win32.join.apply(null, Array.prototype.slice.call(args)));
};

const utilities = {
  joinScopes,
  slash,
  slashJoin,
  writeOutput,
};

module.exports = utilities;
