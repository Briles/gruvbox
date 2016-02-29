(function () {
  'use strict';

  const tinycolor = require('tinycolor2');

  // Sublime Text expects the alpha channel at the end for hex values
  // Tinycolor.toHex8String places it at the beginning
  tinycolor.prototype.toSublimeHex8 = function () {
    var hex = this.toHex8();
    return '#' + hex.slice(2) + hex.slice(0, 2);
  };

  // Sublime Text expects rgb as [r, g, b, a]
  // Tinycolor.toRgb returns an object {r:, g:, b:, a:}
  tinycolor.prototype.toSublimeRgb = function () {
    var _this = this;

    if (!_this.isValid()) {
      throw new Error(`"${_this}" is not a valid color'`);
    }

    var rgba = _this.toRgb();
    var rgb = [rgba.r, rgba.g, rgba.b];

    // Only return an alpha channel when necessary
    if (rgba.a !== 1) {
      rgb.push(rgba.a * 255);
    }

    return rgb;
  };

  tinycolor.prototype.toSublimeHex = function () {
    var _this = this;

    if (!_this.isValid()) {
      throw new Error(`"${_this}" is not a valid color'`);
    }

    var c = _this.toHexString();

    // Only return an alpha channel when necessary
    if (_this._a !== 1) {
      c = _this.toSublimeHex8();
    }

    return c;
  };

  module.exports = tinycolor;
}());
