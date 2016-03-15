module.exports = function (values) {
  'use strict';

  const _ = require('lodash');
  const plist = require('plist');
  const uuid = require('uuid');

  const c = values.colors;
  const info = values.info;

  var scheme = {
    comment: 'Based on gruvbox for vim (https://github.com/morhetz/gruvbox)',
    originalAuthor: 'Pavel Pertsev (https://github.com/morhetz)',
    author: 'Brian Reilly (https://github.com/briles/gruvbox)',
    name: info.name,
    colorSpaceName: 'sRGB',
    settings: [{
        settings: {
          background: c.background,
          caret: c.bnp.fg4,
          foreground: c.ruler,
          invisibles: c.guide,
          lineHighlight: c.bnp.bg1,
          selection: c.bnp.bg1,
          inactiveSelection: c.bnp.bg1,
          guide: c.guide,
          activeGuide: c.ruler,
          stackGuide: c.guideAlt,
          bracketContentsOptions: 'underline',
          bracketContentsForeground: c.bnp.fg4,
          bracketsOptions: 'underline',
          bracketsForeground: c.bnp.fg4,
          gutterForeground: c.bnp.gray,
          highlight: c.bnp.fg[info.contrast],
          highlightForeground: c.bnp.fg[info.contrast],
          findHighlight: c.neutralYellow,
          findHighlightForeground: c.background,
          tagsOptions: 'underline',
          selectionBorder: c.bnp.bg1,
        },
      },

      {
        name: 'Text and Source Base Colors',
        scope: [
          'source',
          'text',
          'meta.method.body.source.cs', // Fix poor syntax highlighting
        ],
        settings: {
          foreground: c.bnp.fg[info.contrast],
        },
      },

      {
        name: 'Punctuation',
        scope: [
          'meta.brace',
          'meta.delimiter',
          'meta.group.braces',
          'meta.punctuation.separator',
          'meta.separator',
          'punctuation',
        ],
        settings: {
          foreground: c.bnp.fg[info.contrast],
        },
      },

      {
        name: 'Comments',
        scope: [
          'comment text',
          'comment',
          'markup.strikethrough',
          'punctuation.definition.comment',
          'punctuation.whitespace.comment',
          'text.cancelled',
        ],
        settings: {
          fontStyle: 'italic',
          foreground: c.bnp.gray,
        },
      },

      {
        name: 'Keywords Inside Comments',
        scope: [
          'comment.keyword',
          'comment.keyword.punctuation',
        ],
        settings: {
          foreground: c.bnp.fg2,
        },
      },

      {
        scope: [
          'comment.parameter',
          'comment.punctuation',
          'comment.string',
          'comment.type',
          'storage.type.class.jsdoc',
        ],
        settings: {
          foreground: c.bnp.fg3,
        },
      },

      {
        name: 'Entity',
        scope: [
          'entity.name.type',
          'entity.other.inherited-class',
        ],
        settings: {
          foreground: c.bnp.yellow,
        },
      },

      {
        scope: [
          'punctuation.quasi',
        ],
        settings: {
          foreground: c.bnp.aqua,
        },
      },

      {
        name: 'Keywords',
        scope: [
          'keyword',
          'keyword.control',
          'meta.prolog.haml',
          'meta.tag.sgml.doctype.html',
          'storage.type.import.haxe',
          'variable.documentroot',
        ],
        settings: {
          foreground: c.bnp.red,
        },
      },

      {
        name: 'CSS At-Rule Punctuation (@)',
        scope: [
          'punctuation.definition.keyword',
        ],
        settings: {
          foreground: c.neutralRed,
        },
      },

      {
        name: 'Operators',
        scope: [
          'keyword.control.new',
          'keyword.operator',
          'keyword.other.arrow',
          'keyword.other.double-colon',
        ],
        settings: {
          foreground: c.bnp.aqua,
        },
      },

      {
        scope: [
          'constant.other.color punctuation.definition.constant',
          'constant.other.color.rgb-value.scss',
          'constant.other.unit',
          'keyword.other.unit',
        ],
        settings: {
          foreground: c.neutralPurple,
        },
      },

      {
        name: 'Storage',
        scope: [
          'storage',
          'storage.type.annotation',
          'storage.type.primitive',
        ],
        settings: {
          foreground: c.bnp.red,
        },
      },

      {
        scope: [
          'storage.modifier.package',
          'storage.modifier.import',
          'storage.type.import',
        ],
        settings: {
          foreground: c.bnp.fg[info.contrast],
        },
      },

      {
        scope: [
          'storage.type.function',
        ],
        settings: {
          foreground: c.bnp.aqua,
        },
      },

      {
        name: 'Variables',
        scope: [
          'variable',
          'variable.interpolation variable',
          'meta.definition.variable',
          'entity.name.variable',
        ],
        settings: {
          foreground: c.bnp.blue,
        },
      },

      {
        name: 'Variable - Punctuation',
        scope: [
          'punctuation.definition.variable',
          'variable.interpolation',
          'variable.other.dollar punctuation.dollar',
        ],
        settings: {
          foreground: c.neutralBlue,
        },
      },

      {
        name: 'Parameters',
        scope: [
          'variable.parameter',
          'meta.parameters',
        ],
        settings: {
          foreground: c.bnp.fg[info.contrast],
        },
      },

      {
        name: 'SASS import url',
        scope: [
          'variable.parameter.url',
        ],
        settings: {
          foreground: c.bnp.green,
        },
      },

      {
        scope: [
          'variable.language',
        ],
        settings: {
          foreground: c.bnp.purple,
        },
      },

      {
        name: 'Constants',
        scope: [
          'constant',
          'constant.numeric',
          'constant.other.symbol',
          'constant.other',
          'constant.other.color',
          'support.constant.color',
          'punctuation.definition.constant.scss',
        ],
        settings: {
          foreground: c.bnp.purple,
        },
      },

      {
        scope: [
          'variable.other.constant',
        ],
        settings: {
          foreground: c.bnp.yellow,
        },
      },

      {
        scope: [
          'constant.character.escape',
          'constant.character.escaped',
          'constant.other.character-class.escape',
        ],
        settings: {
          foreground: c.bnp.red,
        },
      },

      {
        name: 'Invalids and Illegals',
        scope: [
          'invalid.illegal',
        ],
        settings: {
          foreground: c.bnp.fg[info.contrast],
          background: c.bnp.red,
        },
      },

      {
        name: 'Strings',
        scope: [
          'string',
        ],
        settings: {
          foreground: c.bnp.green,
        },
      },

      {
        scope: [
          'string.regexp',
        ],
        settings: {
          foreground: c.bnp.red,
        },
      },

      {
        scope: [
          'string.regexp.source.ruby.embedded',
        ],
        settings: {
          foreground: c.bnp.yellow,
        },
      },

      {
        scope: [
          'string.other.link',
        ],
        settings: {
          foreground: c.bnp.aqua,
        },
      },

      {
        scope: [
          'punctuation.definition.tag',
        ],
        settings: {
          foreground: c.bnp.blue,
        },
      },

      {
        scope: [
          'punctuation.definition.heading',
          'punctuation.definition.identity',
        ],
        settings: {
          foreground: c.bnp.green,
        },
      },

      {
        scope: [
          'punctuation.definition.bold',
        ],
        settings: {
          foreground: c.bnp.yellow,
          fontStyle: 'bold',
        },
      },

      {
        scope: [
          'punctuation.definition.italic',
        ],
        settings: {
          foreground: c.bnp.red,
          fontStyle: 'italic',
        },
      },

      {
        scope: [
          'punctuation.section.embedded',
        ],
        settings: {
          foreground: c.bnp.blue,
        },
      },

      {
        name: 'Support',
        scope: [
          'support.class',
          'support.type',
          'variable.other.class',
        ],
        settings: {
          foreground: c.bnp.yellow,
        },
      },

      {
        scope: [
          'keyword.other.special-method',
          'meta.function-call variable.function',
          'support.function',
        ],
        settings: {
          foreground: c.bnp.aqua,
        },
      },

      {
        name: 'Methods',
        scope: [
          'meta.function-call.method variable.function',
          'meta.function-call.static variable.function',
          'support.function.mutator',
          'meta.method-call',
          'meta.method',
        ],
        settings: {
          foreground: c.neutralAqua,
        },
      },

      {
        scope: [
          'support.module',
        ],
        settings: {
          foreground: c.bnp.purple,
        },
      },

      {
        name: 'Entity',
        scope: [
          'entity.name.function',
          'entity.name.section',
        ],
        settings: {
          foreground: c.bnp.green,
        },
      },

      {
        name: 'HTML & CSS ID',
        scope: [
          'entity.other.attribute-name.id',
        ],
        settings: {
          foreground: c.bnp.orange,
        },
      },

      {
        name: 'HTML & CSS ID Punctuation (#)',
        scope: [
          'entity.other.attribute-name.id punctuation.definition.entity',
        ],
        settings: {
          foreground: c.neutralOrange,
        },
      },

      {
        name: 'HTML & CSS Class',
        scope: [
          'entity.other.attribute-name.class',
        ],
        settings: {
          foreground: c.bnp.yellow,
        },
      },

      {
        name: 'HTML & CSS Class Punctuation (.)',
        scope: [
          'entity.other.attribute-name.class punctuation.definition.entity',
        ],
        settings: {
          foreground: c.neutralYellow,
        },
      },

      {
        name: 'HTML Entity Punctuation',
        scope: [
          'constant.character.entity punctuation.definition.entity',
        ],
        settings: {
          foreground: c.neutralPurple,
        },
      },

      {
        scope: [
          'entity.name.class',
          'entity.name.type.class',
        ],
        settings: {
          foreground: c.bnp.yellow,
        },
      },

      {
        scope: [
          'entity.name.tag',
          'entity.tag',
          'source.less keyword.control.html.elements',
          'keyword.control.untitled',
          'keyword.doctype.xml',
          'punctuation.definition.prolog.haml',
        ],
        settings: {
          foreground: c.bnp.blue,
        },
      },

      {
        scope: [
          'entity.name.attribute-name',
          'entity.other.attribute-name',
          'meta.section.attributes.haml constant.other.symbol.ruby',
        ],
        settings: {
          foreground: c.bnp.yellow,
        },
      },

      {
        scope: [
          'entity.other.attribute-name.pseudo-class',
          'entity.other.attribute-name.pseudo-element',
          'entity.other.attribute-name.tag.pseudo-class',
        ],
        settings: {
          foreground: c.neutralYellow,
        },
      },

      {
        name: 'Meta',
        scope: [
          'meta.class',
        ],
        settings: {
          foreground: c.bnp.yellow,
        },
      },

      {
        scope: [
          'meta.class.body',
          'meta.tag',
        ],
        settings: {
          foreground: c.bnp.fg[info.contrast],
        },
      },

      {
        scope: [
          'meta.link',
          'meta.image',
        ],
        settings: {
          foreground: c.bnp.purple,
        },
      },

      {
        scope: [
          'meta.require',
        ],
        settings: {
          foreground: c.bnp.green,
        },
      },

      {
        scope: [
          'meta.brace.round',
          'punctuation.definition.parameters',
        ],
        settings: {
          foreground: c.bnp.fg3,
        },
      },

      {
        name: 'None',
        scope: [
          'none',
        ],
        settings: {
          foreground: c.bnp.fg[info.contrast],
        },
      },

      {
        name: 'Markup',
        scope: [
          'markup.bold',
        ],
        settings: {
          foreground: c.bnp.purple,
          fontStyle: 'bold',
        },
      },

      {
        scope: [
          'markup.changed',
        ],
        settings: {
          foreground: c.bnp.red,
        },
      },

      {
        scope: [
          'markup.deleted',
          'markup.list',
          'punctuation.definition.list_item.number',
          'punctuation.definition.list_item.markdown',
        ],
        settings: {
          foreground: c.bnp.blue,
        },
      },

      {
        scope: [
          'markup.italic',
        ],
        settings: {
          foreground: c.bnp.red,
          fontStyle: 'italic',
        },
      },

      {
        scope: [
          'markup.heading',
        ],
        settings: {
          foreground: c.bnp.green,
        },
      },

      {
        scope: [
          'markup.inserted',
          'markup.raw.inline',
        ],
        settings: {
          foreground: c.bnp.yellow,
        },
      },

      {
        scope: [
          'markup.quote',
        ],
        settings: {
          foreground: c.bnp.purple,
        },
      },

      {
        name: 'CS',
        scope: [
          'source.cs keyword.operator',
        ],
        settings: {
          foreground: c.bnp.red,
        },
      },

      {
        name: 'CSS',
        scope: [
          'meta.property-name',
          'support.type.property-name',
        ],
        settings: {
          foreground: c.bnp.green,
        },
      },

      {
        name: 'CSS',
        scope: [
          'constant.string.sass',
          'meta.property-value',
          'support.constant.property-value',
        ],
        settings: {
          foreground: c.bnp.fg[info.contrast],
        },
      },

      {
        name: 'DIFF',
        scope: [
          'source.diff',
        ],
        settings: {
          foreground: c.bnp.fg4,
        },
      },

      {
        scope: [
          'source.diff meta',
        ],
        settings: {
          foreground: c.bnp.blue,
        },
      },

      {
        scope: [
          'source.diff meta.header.from-file',
          'source.diff meta.header.to-file',
        ],
        settings: {
          foreground: c.bnp.aqua,
        },
      },

      {
        scope: [
          'source.diff meta.diff.range',
          'source.diff meta.diff.line-number',
          'source.diff punctuation.range',
        ],
        settings: {
          foreground: c.bnp.yellow,
        },
      },

      {
        scope: [
          'source.diff markup.deleted',
          'source.diff punctuation.deleted',
        ],
        settings: {
          foreground: c.bnp.red,
        },
      },

      {
        scope: [
          'source.diff markup.inserted',
          'source.diff punctuation.inserted',
        ],
        settings: {
          foreground: c.bnp.green,
        },
      },

      {
        name: 'GFM',
        scope: [
          'source.gfm.markup.heading',
        ],
        settings: {
          foreground: c.bnp.blue,
        },
      },

      {
        scope: [
          'source.gfm.markup.link',
        ],
        settings: {
          foreground: c.bnp.red,
        },
      },

      {
        scope: [
          'source.gfm.link.entity',
        ],
        settings: {
          foreground: c.bnp.green,
        },
      },

      {
        name: 'INI',
        scope: [
          'source.ini.keyword.other.definition.ini',
        ],
        settings: {
          foreground: c.bnp.blue,
        },
      },

      {
        name: 'JAVA',
        scope: [
          'source.java.storage.modifier.import',
          'source.java.storage.type',
        ],
        settings: {
          foreground: c.bnp.yellow,
        },
      },

      {
        scope: [
          'source.java-properties.meta.key-pair',
        ],
        settings: {
          foreground: c.bnp.blue,
        },
      },

      {
        name: 'PYTHON',
        scope: [
          'keyword.operator.logical.python',
        ],
        settings: {
          foreground: c.bnp.red,
        },
      },

      {
        scope: [
          'variable.parameter.python',
        ],
        settings: {
          foreground: c.bnp.purple,
        },
      },

      {
        scope: [
          'source.ruby.embedded',
        ],
        settings: {
          foreground: c.bnp.blue,
        },
      },

      {
        scope: [
          'source.ruby.punctuation.separator.namespace',
        ],
        settings: {
          foreground: c.bnp.yellow,
        },
      },

      // GitGutter
      {
        name: 'GitGutter deleted',
        scope: [
          'markup.deleted.git_gutter',
        ],
        settings: {
          foreground: c.bnp.red,
        },
      },

      {
        name: 'GitGutter inserted',
        scope: [
          'markup.inserted.git_gutter',
        ],
        settings: {
          foreground: c.bnp.green,
        },
      },

      {
        name: 'GitGutter changed',
        scope: [
          'markup.changed.git_gutter',
        ],
        settings: {
          foreground: c.bnp.yellow,
        },
      },

      {
        name: 'GitGutter ignored',
        scope: [
          'markup.ignored.git_gutter',
        ],
        settings: {
          foreground: c.bnp.gray,
        },
      },

      {
        name: 'GitGutter untracked',
        scope: [
          'markup.untracked.git_gutter',
        ],
        settings: {
          foreground: c.bnp.gray,
        },
      },

      // Bracket Highlighter
      {
        name: 'Bracket Tag',
        scope: [
          'brackethighlighter.tag',
        ],
        settings: {
          foreground: c.bnp.gray,
        },
      },

      {
        name: 'Bracket Curly',
        scope: [
          'brackethighlighter.curly',
        ],
        settings: {
          foreground: c.bnp.gray,
        },
      },

      {
        name: 'Bracket Round',
        scope: [
          'brackethighlighter.round',
        ],
        settings: {
          foreground: c.bnp.gray,
        },
      },

      {
        name: 'Bracket Square',
        scope: [
          'brackethighlighter.square',
        ],
        settings: {
          foreground: c.bnp.gray,
        },
      },

      {
        name: 'Bracket Angle',
        scope: [
          'brackethighlighter.angle',
        ],
        settings: {
          foreground: c.bnp.gray,
        },
      },

      {
        name: 'Bracket Quote',
        scope: [
          'brackethighlighter.quote',
        ],
        settings: {
          foreground: c.bnp.gray,
        },
      },

      {
        name: 'Bracket Unmatched',
        scope: [
          'brackethighlighter.unmatched',
        ],
        settings: {
          foreground: c.bnp.red,
        },
      },

      // SublimeLinter
      {
        name: 'SublimeLinter Error',
        scope: [
          'sublimelinter.mark.error',
        ],
        settings: {
          foreground: c.bnp.red,
        },
      },

      {
        name: 'SublimeLinter Gutter Mark',
        scope: [
          'sublimelinter.gutter-mark',
        ],
        settings: {
          foreground: c.bnp.gray,
        },
      },

      {
        name: 'SublimeLinter Warning',
        scope: [
          'sublimelinter.mark.warning',
        ],
        settings: {
          foreground: c.bnp.yellow,
        },
      },

      // HexViewer
      {
        name: 'HexViewer Upper Byte Nibble',
        scope: [
          'raw.nibble.upper',
        ],
        settings: {
          foreground: c.bnp.fg[info.contrast],
        },
      },

      {
        name: 'HexViewer Lower Byte Nibble',
        scope: [
          'raw.nibble.lower',
        ],
        settings: {
          foreground: c.bnp.fg[info.contrast],
        },
      },

      {
        name: 'HexViewer Highlight',
        scope: [
          'hexviewer.highlight',
        ],
        settings: {
          foreground: c.background,
          background: c.bnp.yellow,
        },
      },

      {
        name: 'HexViewer Edited Highlight',
        scope: [
          'hexviewer.highlight.edited',
        ],
        settings: {
          foreground: c.background,
          background: c.bnp.orange,
        },
      },

      // Raw Glyphs
      {
        name: 'Raw New Line: Carriage Return',
        scope: [
          'glyph.carriage-return',
        ],
        settings: {
          foreground: c.guide,
        },
      },

      {
        name: 'Raw New Line: New Line Glyph',
        scope: [
          'glyph.new-line',
        ],
        settings: {
          foreground: c.guide,
        },
      },

    ],
    uuid: uuid.v4(),
  };

  var allScopes = {};

  _.forEach(scheme.settings.slice(1), function (v) {
    var identifier = v.name || v.scope;

    // Validation
    if (!v.scope) {
      // Ensure there is a scope property
      throw new Error(`Missing Scope: "${identifier}"`);
    } else if (!(v.scope instanceof(Array))) {
      // Ensure the scope property is an Array
      throw new TypeError(`Scope: "${identifier}" is not of type "Array"`);
    } else if (_.size(v.scope) < 1) {
      // Ensure the scope property has atleast 1 element
      throw new Error(`"${identifier}" must have atleast 1 scope`);
    }

    if (!v.settings) {
      // Ensure there is a settings property
      throw new Error(`Missing Settings: "${identifier}"`);
    } else if (_.size(v.settings) < 1) {
      // Ensure the settings property has atleast 1 element
      throw new Error(`"${identifier}" must have atleast 1 setting`);
    }

    // Ensure there are no duplicate scopes
    _.forEach(v.scope, function (scope) {
      if (!allScopes[scope]) {
        allScopes[scope] = true;
      } else {
        throw new Error(`Duplicate Scope Found: "${scope}"`);
      }
    });

    // Join the scope arrays for compatibility with Sublime Text
    v.scope = _(v.scope).sort().sortedUniq().join(', ');
  });

  return plist.build(scheme);
};
