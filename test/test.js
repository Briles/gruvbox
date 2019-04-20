const { assert } = require('chai');
const utils = require('../.gulp/utils.js');
const sublimeColorFns = require('../.gulp/sublime-color-functions.js');

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

  describe('minContrast()', () => {
    it('return a min-contrast color function for a given contrast ratio', () => {
      const color = 'var(base_green)';
      const color2 = '#888';

      assert.strictEqual(sublimeColorFns.minContrast(color, color2, 2.5), `color(${color} min-contrast(${color2} 2.5))`);
      assert.strictEqual(sublimeColorFns.minContrast(color, color2, 8), `color(${color} min-contrast(${color2} 8))`);
      assert.throws(() => sublimeColorFns.minContrast(color, color2, 0), 'Expected minContrast() ratio to be greater than 0');
    });
  });
});
