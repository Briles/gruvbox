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
    fs.writeFile(filepath, filecontents, function (err) {
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
    return slash(path.normalize(path.join.apply(null, Array.prototype.slice.call(arguments))));
  };

  /**
   * run the scheme through a number of checks
   * @return {object} the validated scheme
   */
  var validateScheme = function (scheme) {
    var allScopes = {};

    _.forEach(scheme.settings.slice(1), function (v) {
      var identifier = v.name || v.scope;

      // Validation
      if (!_.isArray(v.scope)) {
        // Ensure the scope property is an Array
        throw new TypeError(`Scope: "${identifier}" is not of type "Array"`);
      } else if (_.size(v.scope) < 1) {
        // Ensure the scope property has atleast 1 element
        throw new Error(`"${identifier}" must have atleast 1 scope`);
      }

      if (!v.settings) {
        // Ensure there is a settings property
        throw new Error(`Missing Settings: "${identifier}"`);
      } else if (_.size(v.settings) < 1) {
        // Ensure the settings property has atleast 1 element
        throw new Error(`"${identifier}" must have atleast 1 setting`);
      } else {
        // Ensure there are no undefined settings
        _.forEach(v.settings, function (value, setting) {
          if (value === undefined) {
            throw new Error(`"${setting}" for "${identifier}" is undefined`);
          }
        });
      }

      // Ensure there are no duplicate scopes
      _.forEach(v.scope, function (scope) {
        if (!allScopes[scope]) {
          allScopes[scope] = true;
        } else {
          throw new Error(`Duplicate Scope Found: "${scope}"`);
        }
      });

      // Join the scope arrays for compatibility with Sublime Text
      v.scope = joinScopes(v.scope);
    });

    return scheme;
  };

  /**
   * consolidate scheme scopes by style and remove scope names
   * @param  {object} scheme the scheme to minify
   * @return {object}        the minified scheme
   */
  var minifyScheme = function (scheme) {
    var buckets = {};
    var styleProps = ['foreground', 'background', 'fontStyle'];

    scheme.settings.slice(1).forEach(function (v) {
      var settings = v.settings;
      var bucket = [];

      styleProps.forEach(function (style) {
        if (settings[style]) {
          bucket.push(settings[style]);
        }
      });

      bucket = bucket.join(' ');
      buckets[bucket] = (!buckets[bucket] ? [] : buckets[bucket]).concat(v.scope);
    });

    scheme.settings = scheme.settings.slice(0, 1);

    _.forEach(buckets, function (v, k) {
      var styles = k.split(' ');
      var obj = {
        settings: {},
      };

      styles.forEach(function (style, i) {
        obj.settings[styleProps[i]] = style;
      });

      obj.scope = v.join(',');
      scheme.settings.push(obj);
    });

    return scheme;
  };

  const utilities = {
    joinScopes: joinScopes,
    minifyScheme: minifyScheme,
    slash: slash,
    slashJoin: slashJoin,
    validateScheme: validateScheme,
    writeOutput: writeOutput,
  };

  module.exports = utilities;

}());
