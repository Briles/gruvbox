const _ = require('lodash');
const path = require('path');
const paths = require('./paths.js');
const { joinScopes } = require('./utils.js');

class Scheme {
  constructor(about, palette, template) {
    if (typeof palette !== 'function' || typeof template !== 'function') {
      throw new TypeError('Expected palette and template to be functions');
    }

    this.about = about;
    this.palette = palette;
    this.template = template;
  }

  getPath() {
    return path.join(paths.external.root, `${this.about.name}.sublime-color-scheme`);
  }

  stringify() {
    return JSON.stringify(this.generate(), null, 2);
  }

  generate() {
    const generated = this.template(this.about, this.palette());
    generated.rules.map(rule => Object.assign(rule, {
      scope: joinScopes(rule.scope),
    }));

    return generated;
  }

  /**
   * run the scheme through a number of checks
   * @return {object} the validated scheme
   */
  validate() {
    const scheme = this.generate();
    const styleProps = [
      'foreground',
      'background',
      'foreground_adjust',
      'selection_foreground',
      'font_style',
    ];

    _.forEach(scheme.rules, (v) => {
      const identifier = v.name || v.scope;
      const presentStyleRules = Object.keys(v).filter(k => styleProps.includes(k));

      // Validation
      if (_.size(v.scope) < 1) {
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
    });

    return this;
  }
}

module.exports = Scheme;
