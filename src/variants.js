(function () {
  'use strict';

  const _ = require('lodash');
  const gruvboxPalette = require('./palette.js');

  /**
   * Color scheme variant without any neutral colors
   * @param  {object} base the inherited scheme values
   * @return {object}      a new, modified scheme
   */
  var noDimmedVariant = function (base) {
    base.info.name += ' NDC';

    _.forEach(gruvboxPalette.accents, function (v, k) {
      base.colors['neutral' + _.upperFirst(k)] = base.colors.bnp[k];
    });

    return base;
  };

  module.exports = {
    noDimmedVariant: noDimmedVariant,
  };
}());
