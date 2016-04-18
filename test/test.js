(function () {
  'use strict';

  const _ = require('lodash');
  const assert = require('chai').assert;
  const tinycolor = require('../src/tinycolor.js');
  const utils = require('../src/utils.js');
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

      it('should throw error when there is no scope property', function () {
        assert.throws(
          errored(schemes.invalidMissingScope),
          'Missing Scope: "Invalid: Missing Scope"'
        );
      });

      it('should throw error when scope is not array', function () {
        assert.throws(
          errored(schemes.invalidNonArrayScope),
          'Scope: "Invalid: Non-array Scope" is not of type "Array"'
        );
      });

      it('should throw error when scope array is empty', function () {
        assert.throws(
          errored(schemes.invalidEmptyScope),
          '"Invalid: Empty Scope" must have atleast 1 scope'
        );
      });

      it('should set scope identifier when there is no name', function () {
        assert.throws(
          errored(schemes.invalidMissingName),
          'Scope: "Invalid: Missing Name" is not of type "Array"'
        );
      });

      it('should throw error when there is no settings property', function () {
        assert.throws(
          errored(schemes.invalidMissingSettings),
          'Missing Settings: "Invalid: Missing Settings"'
        );
      });

      it('should throw error when settings object is empty', function () {
        assert.throws(
          errored(schemes.invalidEmptySettings),
          '"Invalid: Empty Settings" must have atleast 1 setting'
        );
      });

      it('should throw error when a settings property is undefined', function () {
        assert.throws(
          errored(schemes.invalidUndefinedSetting),
          '"foreground" for "Invalid: Undefined Setting" is undefined'
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

    describe('toSublimeHexString()', function () {

      it('should return Hex color string', function () {
        assert.strictEqual(tinycolor('#ffffff').toSublimeHexString(), '#ffffff');
      });

      it('should return Hex color string with flipped alpha', function () {
        assert.strictEqual(tinycolor('#50ffffff').toSublimeHexString(), '#ffffff50');
      });

      it('should throw error when color is not valid', function () {
        assert.throws(errored('toSublimeHexString'), '"#000000" is not a valid color');
      });

    });

    describe('toSublimeHex8String()', function () {

      it('should return Hex color string with flipped alpha', function () {
        assert.strictEqual(tinycolor('#50ffffff').toSublimeHex8String(), '#ffffff50');
      });

      it('should throw error when color is not valid', function () {
        assert.throws(errored('toSublimeHex8String'), '"#000000" is not a valid color');
      });

    });

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
