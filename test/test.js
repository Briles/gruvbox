const _ = require('lodash');
const assert = require('chai').assert;
const tinycolor = require('../.gulp/tinycolor.js');
const utils = require('../.gulp/utils.js');
const schemes = require('./mock_schemes.js');
const sublimeColorFns = require('../.gulp/sublime-color-functions.js');

const validRGBA = 'rgba(255, 255, 255, 0.5)';
const validSublimeRGB = [255, 255, 255];
const validSublimeRGBA = [255, 255, 255, 127.5];

describe('Utility', function () {
  describe('joinScopes()', function () {
    it('should return sorted comma separated string', function () {
      assert.strictEqual(utils.joinScopes(['a', 'b', 'c']), 'a,b,c');
    });
  });

  describe('slash()', function () {
    it('should return forward-slashed string', function () {
      assert.strictEqual(utils.slash('a\\b\\c'), 'a/b/c');
    });

    it('should return input string when incompatible', function () {
      assert.strictEqual(utils.slash('\\\\?\\C:\\'), '\\\\?\\C:\\');
    });
  });

  describe('slashJoin()', function () {
    it('should return forward-slashed string', function () {
      assert.strictEqual(utils.slashJoin('a\\b', '\\c\\d'), 'a/b/c/d');
    });
  });

  describe('validateScheme()', function () {
    var errored = function (scheme) {
      return function () {
        utils.validateScheme(scheme);
      };
    };

    it('should throw error when scope is not array', function () {
      assert.throws(
        errored(schemes.invalidNonArrayScope),
        '"name" scope is not of type "Array"'
      );
    });

    it('should throw error when scope array is empty', function () {
      assert.throws(
        errored(schemes.invalidEmptyScope),
        '"name" must have atleast 1 scope'
      );
    });

    it('should set scope identifier when there is no name', function () {
      assert.throws(
        errored(schemes.invalidMissingName),
        '"scope" scope is not of type "Array"'
      );
    });

    it('should throw error when there are no style properties', function () {
      assert.throws(
        errored(schemes.invalidMissingStyles),
        '"name" must have atleast 1 style'
      );
    });

    it('should throw error when a rules property is undefined', function () {
      assert.throws(
        errored(schemes.invalidUndefinedStyle),
        '"foreground" for "name" is undefined'
      );
    });

    it('should throw error when duplicate scopes are encountered', function () {
      assert.throws(
        errored(schemes.invalidDuplicateScope),
        'Duplicate Scope Found: "1"'
      );
    });

    it('should return scheme with scopes as strings', function () {
      assert.deepEqual(
        utils.validateScheme(schemes.validUnJoinedScopes),
        schemes.validJoinedScopes
      );
    });
  });

});

describe('tinycolor', function () {

  var errored = function (func) {
    return function () {
      tinycolor('x')[func]();
    };
  };

  describe('toSublimeRgb()', function () {

    it('should return RGB color array', function () {
      assert.deepEqual(tinycolor('#ffffff').toSublimeRgb(), validSublimeRGB);
    });

    it('should multiply alpha channel by 255', function () {
      assert.deepEqual(tinycolor(validRGBA).toSublimeRgb(), validSublimeRGBA);
    });

    it('should throw error when color is not valid', function () {
      assert.throws(errored('toSublimeRgb'), '"#000000" is not a valid color');
    });

  });

});

describe('Sublime Color Functions', function () {

  describe('colorFn()', function () {
    it('should return a sublime color function', function () {
      assert.strictEqual(sublimeColorFns.color('#ffffff'), 'color(#ffffff)');
      assert.strictEqual(sublimeColorFns.color('var(--background)'), 'color(var(--background))');
      assert.throws(() => sublimeColorFns.color(), 'Expected a color value');
    });
  });

  describe('saturation()', function () {
    it('should return a sublime saturation adjuster function', function () {
      const color = 'var(base_green)';

      assert.strictEqual(sublimeColorFns.saturation(color, .9), `color(${color} s(0.9%))`);
      assert.strictEqual(sublimeColorFns.saturation(color, '+9'), `color(${color} s(+ 9%))`);
      assert.strictEqual(sublimeColorFns.saturation(color, '-9'), `color(${color} s(- 9%))`);
      assert.strictEqual(sublimeColorFns.saturation(color, 0), `color(${color} s(0%))`);
      assert.strictEqual(sublimeColorFns.saturation(color, -0), `color(${color} s(0%))`);
      assert.strictEqual(sublimeColorFns.saturation(color, '-0'), `color(${color} s(- 0%))`);
      assert.strictEqual(sublimeColorFns.saturation(color, '+0'), `color(${color} s(+ 0%))`);
      assert.throws(() => sublimeColorFns.saturation(color, 102), 'Invalid saturation amount');
    });
  });

  describe('lightness()', function () {
    it('should return a sublime lightness adjuster function', function () {
      const color = 'var(base_green)';

      assert.strictEqual(sublimeColorFns.lightness(color, .9), `color(${color} l(0.9%))`);
      assert.strictEqual(sublimeColorFns.lightness(color, '+9'), `color(${color} l(+ 9%))`);
      assert.strictEqual(sublimeColorFns.lightness(color, '-9'), `color(${color} l(- 9%))`);
      assert.strictEqual(sublimeColorFns.lightness(color, 0), `color(${color} l(0%))`);
      assert.strictEqual(sublimeColorFns.lightness(color, -0), `color(${color} l(0%))`);
      assert.strictEqual(sublimeColorFns.lightness(color, '-0'), `color(${color} l(- 0%))`);
      assert.strictEqual(sublimeColorFns.lightness(color, '+0'), `color(${color} l(+ 0%))`);
      assert.throws(() => sublimeColorFns.lightness(color, -3), 'Invalid lightness amount');
    });
  });

  describe('alpha()', function () {
    it('should set alpha channel', function () {
      const color = 'var(base_green)';

      assert.strictEqual(sublimeColorFns.alpha(color, 0.2345), `color(${color} a(0.2345))`);
      assert.throws(() => sublimeColorFns.alpha(color, 5), 'Expected alpha() adjustment amount to be between 0.0 and 1.0');
    });
  });

  describe('greyscale()', function () {
    it('should set saturation to 0', function () {
      const color = 'var(base_green)';

      assert.strictEqual(sublimeColorFns.greyscale(color), `color(${color} s(0%))`);
    });
  });

  describe('blend()', function () {
    it('should blend 2 colors', function () {
      const color = 'var(base_green)';
      const color2 = '#888';

      assert.strictEqual(sublimeColorFns.blend(color, color2, 50), `color(${color} blend(${color2} 50%))`);
      assert.strictEqual(sublimeColorFns.blend(color, color2, 100, true), `color(${color} blend(${color2} 100% hsl))`);
      assert.throws(() => sublimeColorFns.blend(color, color2, -50), 'Expected blend() amount to be between 0 and 100');
    });
  });

  describe('blenda()', function () {
    it('should blend 2 colors with alpha channel', function () {
      const color = 'var(base_green)';
      const color2 = '#888';

      assert.strictEqual(sublimeColorFns.blenda(color, color2, 50), `color(${color} blenda(${color2} 50%))`);
      assert.strictEqual(sublimeColorFns.blenda(color, color2, 100, true), `color(${color} blenda(${color2} 100% hsl))`);
      assert.throws(() => sublimeColorFns.blenda(color, color2, -50), 'Expected blenda() amount to be between 0 and 100');
    });
  });
});
