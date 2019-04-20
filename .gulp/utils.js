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

/**
 * run the scheme through a number of checks
 * @return {object} the validated scheme
 */
const validateScheme = function (scheme) {
  const styleProps = [
    'foreground',
    'background',
    'foreground_adjust',
    'selection_foreground',
    'font_style',
  ];
  const allScopes = {};

  _.forEach(scheme.rules, (v) => {
    const identifier = v.name || v.scope;
    const presentStyleRules = Object.keys(v).filter(k => styleProps.includes(k));

    // Validation
    if (!_.isArray(v.scope)) {
      // Ensure the scope property is an Array
      throw new TypeError(`"${identifier}" scope is not of type "Array"`);
    } else if (_.size(v.scope) < 1) {
      // Ensure the scope property has atleast 1 element
      throw new Error(`"${identifier}" must have atleast 1 scope`);
    }

    if (_.size(presentStyleRules) < 1) {
      // Ensure the settings property has atleast 1 element
      throw new Error(`"${identifier}" must have atleast 1 style`);
    } else {
      // Ensure there are no undefined settings
      _.forEach(v, (value, setting) => {
        if (value === undefined) {
          throw new Error(`"${setting}" for "${identifier}" is undefined`);
        }
      });
    }

    // Ensure there are no duplicate scopes
    _.forEach(v.scope, (scope) => {
      if (!allScopes[scope]) {
        allScopes[scope] = true;
      } else {
        throw new Error(`Duplicate Scope Found: "${scope}"`);
      }
    });

    // Join the scope arrays for compatibility with Sublime Text
    Object.assign(v, {
      scope: joinScopes(v.scope),
    });
  });

  return scheme;
};

const utilities = {
  joinScopes,
  slash,
  slashJoin,
  validateScheme,
  writeOutput,
};

module.exports = utilities;
