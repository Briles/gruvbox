const _ = require('lodash');

/**
 * @class Variant
 * @constructor
 * @param {object} the base scheme to inherit from
 */
var Variant = function (base) {
  if (!(this instanceof Variant)) {
    return new Variant(base);
  }

  this._base = _.cloneDeep(base);

  return this;
};

Variant.prototype = {
  /**
   * Color scheme variant without any neutral colors
   * @return {object}      a new, modified scheme
   */
  get noDimmed() {
    var _base = this._base;
    _base.info.name += ' NDC';

    _.forEach(Object.keys(_base.colors.accents), function (colorKey) {
      _base.colors.bnp[colorKey + 1] = _base.colors.bnp[colorKey];
    });

    return _base;
  },

};

module.exports = Variant;
