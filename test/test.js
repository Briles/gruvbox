(function () {
  'use strict';

  const _ = require('lodash');
  const assert = require('chai').assert;
  const tinycolor = require('../.gulp/tinycolor.js');
  const utils = require('../.gulp/utils.js');
  const schemes = require('./mock_schemes.js');

  const validRGBA = 'rgba(255, 255, 255, 0.5)';
  const validSublimeRGB = [255, 255, 255];
  const validSublimeRGBA = [255, 255, 255, 127.5];

  describe('Utility', function () {
    describe('joinScopes()', function () {
      it('should return sorted comma separated string', function () {
        assert.strictEqual(utils.joinScopes(['a', 'b', 'c']), 'a, b, c');
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

    describe('minifyScheme()', function () {
      it('should return scheme with consolidated scopes', function () {
        assert.deepEqual(
          utils.minifyScheme(schemes.validUnMinified),
          schemes.validMinified
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

}());
