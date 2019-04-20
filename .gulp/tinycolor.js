const tinycolor = require('tinycolor2');

// Sublime Text expects rgb as [r, g, b, a]
// Tinycolor.toRgb returns an object {r:, g:, b:, a:}
tinycolor.prototype.toSublimeRgb = function () {
  const _this = this;

  if (!_this.isValid()) {
    throw new Error(`"${_this}" is not a valid color'`);
  }

  const rgba = _this.toRgb();
  const rgb = [rgba.r, rgba.g, rgba.b];

  // Only return an alpha channel when necessary
  if (rgba.a !== 1) {
    rgb.push(rgba.a * 255);
  }

  return rgb;
};

module.exports = tinycolor;
