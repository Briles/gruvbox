var variant = (function () {
  'use strict';

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

  /**
   * Color scheme variant without any neutral colors
   * @return {object}      a new, modified scheme
   */
  Variant.prototype.noDimmedVariant = function () {
    var _base = this._base;
    _base.info.name += ' NDC';

    _.forEach(_base.colors.accents, function (v, k) {
      _base.colors['neutral' + _.upperFirst(k)] = _base.colors.bnp[k];
    });

    return _base;
  };

  return Variant;
}());

module.exports = variant;
