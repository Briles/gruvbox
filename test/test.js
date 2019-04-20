const { assert } = require('chai');
const tinycolor = require('../.gulp/tinycolor.js');
const utils = require('../.gulp/utils.js');
const schemes = require('./mock_schemes.js');
const sublimeColorFns = require('../.gulp/sublime-color-functions.js');

const validRGBA = 'rgba(255, 255, 255, 0.5)';
const validSublimeRGB = [255, 255, 255];
const validSublimeRGBA = [255, 255, 255, 127.5];

describe('Utility', () => {
  describe('joinScopes()', () => {
    it('should return sorted comma separated string', () => {
      assert.strictEqual(utils.joinScopes(['a', 'b', 'c']), 'a,b,c');
    });
  });

  describe('slash()', () => {
    it('should return forward-slashed string', () => {
      assert.strictEqual(utils.slash('a\\b\\c'), 'a/b/c');
    });

    it('should return input string when incompatible', () => {
      assert.strictEqual(utils.slash('\\\\?\\C:\\'), '\\\\?\\C:\\');
    });
  });

  describe('slashJoin()', () => {
    it('should return forward-slashed string', () => {
      assert.strictEqual(utils.slashJoin('a\\b', '\\c\\d'), 'a/b/c/d');
    });
  });

  describe('validateScheme()', () => {
    const errored = function (scheme) {
      return function () {
        utils.validateScheme(scheme);
      };
    };

    it('should throw error when scope is not array', () => {
      assert.throws(
        errored(schemes.invalidNonArrayScope),
        '"name" scope is not of type "Array"',
      );
    });

    it('should throw error when scope array is empty', () => {
      assert.throws(
        errored(schemes.invalidEmptyScope),
        '"name" must have atleast 1 scope',
      );
    });

    it('should set scope identifier when there is no name', () => {
      assert.throws(
        errored(schemes.invalidMissingName),
        '"scope" scope is not of type "Array"',
      );
    });

    it('should throw error when there are no style properties', () => {
      assert.throws(
        errored(schemes.invalidMissingStyles),
        '"name" must have atleast 1 style',
      );
    });

    it('should throw error when a rules property is undefined', () => {
      assert.throws(
        errored(schemes.invalidUndefinedStyle),
        '"foreground" for "name" is undefined',
      );
    });

    it('should throw error when duplicate scopes are encountered', () => {
      assert.throws(
        errored(schemes.invalidDuplicateScope),
        'Duplicate Scope Found: "1"',
      );
    });

    it('should return scheme with scopes as strings', () => {
      assert.deepEqual(
        utils.validateScheme(schemes.validUnJoinedScopes),
        schemes.validJoinedScopes,
      );
    });
  });
});

describe('tinycolor', () => {
  const errored = function (func) {
    return function () {
      tinycolor('x')[func]();
    };
  };

  describe('toSublimeRgb()', () => {
    it('should return RGB color array', () => {
      assert.deepEqual(tinycolor('#ffffff').toSublimeRgb(), validSublimeRGB);
    });

    it('should multiply alpha channel by 255', () => {
      assert.deepEqual(tinycolor(validRGBA).toSublimeRgb(), validSublimeRGBA);
    });

    it('should throw error when color is not valid', () => {
      assert.throws(errored('toSublimeRgb'), '"#000000" is not a valid color');
    });
  });
});

describe('Sublime Color Functions', () => {
  describe('colorFn()', () => {
    it('should return a sublime color function', () => {
      assert.strictEqual(sublimeColorFns.color('#ffffff'), 'color(#ffffff)');
      assert.strictEqual(sublimeColorFns.color('var(--background)'), 'color(var(--background))');
      assert.throws(() => sublimeColorFns.color(), 'Expected a color value');
    });
  });

  describe('saturation()', () => {
    it('should return a sublime saturation adjuster function', () => {
      const color = 'var(base_green)';

      assert.strictEqual(sublimeColorFns.saturation(color, 0.9), `color(${color} s(0.9%))`);
      assert.strictEqual(sublimeColorFns.saturation(color, '+9'), `color(${color} s(+ 9%))`);
      assert.strictEqual(sublimeColorFns.saturation(color, '-9'), `color(${color} s(- 9%))`);
      assert.strictEqual(sublimeColorFns.saturation(color, 0), `color(${color} s(0%))`);
      assert.strictEqual(sublimeColorFns.saturation(color, -0), `color(${color} s(0%))`);
      assert.strictEqual(sublimeColorFns.saturation(color, '-0'), `color(${color} s(- 0%))`);
      assert.strictEqual(sublimeColorFns.saturation(color, '+0'), `color(${color} s(+ 0%))`);
      assert.throws(() => sublimeColorFns.saturation(color, 102), 'Invalid saturation amount');
    });
  });

  describe('lightness()', () => {
    it('should return a sublime lightness adjuster function', () => {
      const color = 'var(base_green)';

      assert.strictEqual(sublimeColorFns.lightness(color, 0.9), `color(${color} l(0.9%))`);
      assert.strictEqual(sublimeColorFns.lightness(color, '+9'), `color(${color} l(+ 9%))`);
      assert.strictEqual(sublimeColorFns.lightness(color, '-9'), `color(${color} l(- 9%))`);
      assert.strictEqual(sublimeColorFns.lightness(color, 0), `color(${color} l(0%))`);
      assert.strictEqual(sublimeColorFns.lightness(color, -0), `color(${color} l(0%))`);
      assert.strictEqual(sublimeColorFns.lightness(color, '-0'), `color(${color} l(- 0%))`);
      assert.strictEqual(sublimeColorFns.lightness(color, '+0'), `color(${color} l(+ 0%))`);
      assert.throws(() => sublimeColorFns.lightness(color, -3), 'Invalid lightness amount');
    });
  });

  describe('alpha()', () => {
    it('should set alpha channel', () => {
      const color = 'var(base_green)';

      assert.strictEqual(sublimeColorFns.alpha(color, 0.2345), `color(${color} a(0.2345))`);
      assert.throws(() => sublimeColorFns.alpha(color, 5), 'Expected alpha() adjustment amount to be between 0.0 and 1.0');
    });
  });

  describe('greyscale()', () => {
    it('should set saturation to 0', () => {
      const color = 'var(base_green)';

      assert.strictEqual(sublimeColorFns.greyscale(color), `color(${color} s(0%))`);
    });
  });

  describe('blend()', () => {
    it('should blend 2 colors', () => {
      const color = 'var(base_green)';
      const color2 = '#888';

      assert.strictEqual(sublimeColorFns.blend(color, color2, 50), `color(${color} blend(${color2} 50%))`);
      assert.strictEqual(sublimeColorFns.blend(color, color2, 100, true), `color(${color} blend(${color2} 100% hsl))`);
      assert.throws(() => sublimeColorFns.blend(color, color2, -50), 'Expected blend() amount to be between 0 and 100');
    });
  });

  describe('blenda()', () => {
    it('should blend 2 colors with alpha channel', () => {
      const color = 'var(base_green)';
      const color2 = '#888';

      assert.strictEqual(sublimeColorFns.blenda(color, color2, 50), `color(${color} blenda(${color2} 50%))`);
      assert.strictEqual(sublimeColorFns.blenda(color, color2, 100, true), `color(${color} blenda(${color2} 100% hsl))`);
      assert.throws(() => sublimeColorFns.blenda(color, color2, -50), 'Expected blenda() amount to be between 0 and 100');
    });
  });
});
