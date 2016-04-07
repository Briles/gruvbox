module.exports = function (values) {
  'use strict';

  const _ = require('lodash');
  const plist = require('plist');
  const uuid = require('uuid');
  const utils = require('./utils.js');

  const c = values.colors;
  const info = values.info;

  var scheme = {
    comment: 'Based on gruvbox for Vim (https://github.com/morhetz/gruvbox)',
    originalAuthor: 'Pavel Pertsev (https://github.com/morhetz)',
    author: 'Brian Reilly (https://github.com/Briles/gruvbox)',
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
          bracketContentsForeground: c.bnp.fg3,
          bracketsOptions: 'underline',
          bracketsForeground: c.bnp.fg3,
          gutterForeground: c.bnp.gray,
          highlight: c.foreground,
          highlightForeground: c.foreground,
          findHighlight: c.neutralYellow,
          findHighlightForeground: c.background,
          tagsOptions: 'underline',
          selectionBorder: c.bnp.bg1,
        },
      },

      {
        name: 'Text and Source Base Colors',
        scope: [
          'meta.method.body.source.cs', // Fix poor syntax highlighting
          'meta.method.body.java', // Fix poor syntax highlighting
          'none',
          'source',
          'text',
        ],
        settings: {
          foreground: c.foreground,
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
          'keyword.operator operator.neon',
          'keyword.operator keyword.operator.neon',
          'meta.attribute-selector keyword.operator.stylus',
        ],
        settings: {
          foreground: c.foreground,
        },
      },

      {
        name: 'Comments',
        scope: [
          'comment text',
          'comment',
          'string.comment',
          'markup.strikethrough',
          'text.cancelled',
          'comment punctuation',
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
        name: 'DocBlockr & Other Keywords Inside Comments',
        scope: [
          'comment.parameter',
          'comment.punctuation',
          'comment.string',
          'comment.type',
          'storage.type.class.jsdoc',
          'storage.type.annotation.coffeescript',
          'keyword.other.phpdoc.php',
          'source.java keyword.other.documentation',
          'punctuation.definition.keyword.javadoc',
          'source.groovy keyword.other.documentation',
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
          'constant.language.name',
        ],
        settings: {
          foreground: c.bnp.yellow,
        },
      },

      {
        name: 'Template String Punctuation',
        scope: [
          'entity.name.tag.mustache',
          'punctuation.definition.template-expression',
          'punctuation.quasi',
          'punctuation.section.embedded',
          'string.interpolated',
          'variable.other.interpolation.scss',
          'entity.tag.tagbraces',
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
          'meta.at-rule.media support.function.misc',
          'source.cs keyword.operator',
          'keyword.operator.logical.python',
          'storage.type.function.jade',
          'js.embedded.control.flow keyword.operator.js',
          'storage.type.import.include.jade',
        ],
        settings: {
          foreground: c.bnp.red,
        },
      },

      {
        name: 'CSS At-Rule Punctuation (@) & At-Rule Vendor Prefixes',
        scope: [
          'punctuation.definition.keyword',
          'keyword.control.at-rule support.type.property-vendor',
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
          'keyword.control.operator',
        ],
        settings: {
          foreground: c.bnp.aqua,
        },
      },

      {
        name: 'Constants Punctuation',
        scope: [
          'constant.other.color punctuation.definition.constant',
          'constant.other.color.rgb-value.scss',
          'constant.other.unit',
          'keyword.other.unit',
          'punctuation.section.flowtype',
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
          'variable.package',
          'variable.import',
        ],
        settings: {
          foreground: c.foreground,
        },
      },

      {
        name: 'Function Keyword',
        scope: [
          'storage.type.function',
          'meta.function storage.type.matlab',
        ],
        settings: {
          foreground: c.bnp.aqua,
        },
      },

      {
        name: 'Variables',
        scope: [
          'entity.name.variable',
          'meta.definition.variable',
          'variable',
          'variable.interpolation variable',
          'variable.other.interpolation variable',
          'variable.parameter.sass',
          'entity.name.val.declaration',
          'variable.parameter.output.function.matlab',
          'storage.type.variable',
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
        name: 'Object Properties',
        scope: [
          'meta.property.object',
        ],
        settings: {
          foreground: c.foreground,
        },
      },

      {
        name: 'Object Literal Properties',
        scope: [
          'constant.other.object.key string',
          'meta.object-literal.key',
        ],
        settings: {
          foreground: c.foreground,
        },
      },

      {
        name: 'Parameters',
        scope: [
          'variable.parameter',
          'meta.parameters',
        ],
        settings: {
          foreground: c.foreground,
        },
      },

      {
        name: 'SASS Import URL',
        scope: [
          'variable.parameter.url',
        ],
        settings: {
          foreground: c.bnp.green,
        },
      },

      {
        name: 'Language Constants',
        scope: [
          'constant',
          'constant.numeric',
          'constant.other.symbol',
          'constant.other',
          'constant.other.color',
          'support.constant.color',
          'punctuation.definition.constant.scss',
          'variable.language',
        ],
        settings: {
          foreground: c.bnp.purple,
        },
      },

      {
        name: 'User-Defined Constants',
        scope: [
          'variable.other.constant',
        ],
        settings: {
          foreground: c.bnp.yellow,
        },
      },

      {
        name: 'Escaped Characters',
        scope: [
          'constant.character.escape',
          'constant.character.escaped',
          'constant.other.character-class.escape',
          'constant.character.quoted',
        ],
        settings: {
          foreground: c.bnp.red,
        },
      },

      {
        name: 'Invalids and Illegals',
        scope: [
          'invalid',
        ],
        settings: {
          foreground: c.foreground,
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
        name: 'Regular Expressions Text',
        scope: [
          'string.regexp',
          'source.regexp',
        ],
        settings: {
          foreground: c.bnp.green,
        },
      },

      {
        name: 'Regular Expressions Start & End Punctuation',
        scope: [
          'string.regexp punctuation.definition.string',
        ],
        settings: {
          foreground: c.bnp.fg3,
        },
      },

      {
        name: 'Regular Expressions Character Class Punctuation ([])',
        scope: [
          'keyword.control.set.regexp',
          'punctuation.definition.character-class',
          'string.regexp.character-class.ruby',
        ],
        settings: {
          foreground: c.bnp.purple,
        },
      },

      {
        name: 'Regular Expressions Capturing Group',
        scope: [
          'string.regexp.group',
        ],
        settings: {
          foreground: c.foreground,
        },
      },

      {
        name: 'Regular Expressions Assertions',
        scope: [
          'constant.other.assertion.regexp',
          'punctuation.definition.group.assertion.regexp',
          'punctuation.definition.group.capture.regexp',
        ],
        settings: {
          foreground: c.bnp.blue,
        },
      },

      {
        name: 'Regular Expressions Character Class',
        scope: [
          'keyword.control.character-class.regexp',
          'constant.other.character-class.escape.backslash.regexp',
          'string.regexp.character-class constant.character.escape',
        ],
        settings: {
          foreground: c.bnp.yellow,
        },
      },

      {
        name: 'Regular Expressions Quantifiers & Operators',
        scope: [
          'string.regexp.arbitrary-repetition',
          'string.regexp.arbitrary-repetition punctuation',
        ],
        settings: {
          foreground: c.bnp.aqua,
        },
      },

      {
        name: 'Hyperlinks',
        scope: [
          'string.other.link',
          'constant.other.reference.link',
        ],
        settings: {
          foreground: c.bnp.aqua,
        },
      },

      {
        name: 'Markup Tag Punctuation',
        scope: [
          'punctuation.definition.tag',
        ],
        settings: {
          foreground: c.bnp.blue,
        },
      },

      {
        name: 'Markdown Heading',
        scope: [
          'markup.heading',
        ],
        settings: {
          foreground: c.bnp.green,
        },
      },

      {
        name: 'Markdown Heading Punctuation',
        scope: [
          'punctuation.definition.heading',
          'punctuation.definition.identity',
        ],
        settings: {
          foreground: c.neutralGreen,
        },
      },

      {
        name: 'Markdown Bold Text',
        scope: [
          'markup.bold',
        ],
        settings: {
          foreground: c.bnp.orange,
          fontStyle: 'bold',
        },
      },

      {
        name: 'Markdown Bold Text Punctuation',
        scope: [
          'punctuation.definition.bold',
        ],
        settings: {
          foreground: c.neutralOrange,
          fontStyle: 'bold',
        },
      },

      {
        name: 'Markdown Italic Text',
        scope: [
          'markup.italic',
        ],
        settings: {
          foreground: c.bnp.red,
          fontStyle: 'italic',
        },
      },

      {
        name: 'Markdown Italic Text Punctuation',
        scope: [
          'punctuation.definition.italic',
        ],
        settings: {
          foreground: c.neutralRed,
          fontStyle: 'italic',
        },
      },

      {
        name: 'Markdown Inline Code',
        scope: [
          'markup.raw.inline',
        ],
        settings: {
          foreground: c.bnp.yellow,
        },
      },

      {
        name: 'Markdown Quoted',
        scope: [
          'markup.quote',
        ],
        settings: {
          foreground: c.bnp.purple,
        },
      },

      {
        name: 'Markdown Quoted Punctuation',
        scope: [
          'markup.quote punctuation',
        ],
        settings: {
          foreground: c.neutralPurple,
        },
      },

      {
        name: 'Markdown List',
        scope: [
          'markup.list',
        ],
        settings: {
          foreground: c.bnp.blue,
        },
      },

      {
        name: 'Markdown List Punctuation',
        scope: [
          'markup.list punctuation',
        ],
        settings: {
          foreground: c.neutralBlue,
        },
      },

      {
        name: 'Markdown Separators',
        scope: [
          'meta.separator.markdown',
        ],
        settings: {
          foreground: c.bnp.gray,
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
        name: 'Special Variables',
        scope: [
          'support.module',
        ],
        settings: {
          foreground: c.bnp.purple,
        },
      },

      {
        name: 'Entities',
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
          'constant.id.tag',
          'entity.name.tag.id',
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
          'entity.name.tag.class',
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
        name: 'CSS Attribute Selector',
        scope: [
          'meta.attribute-selector entity.other.attribute-name.attribute',
          'meta.attribute-selector entity.other.attribute-name.stylus',
        ],
        settings: {
          foreground: c.bnp.aqua,
        },
      },

      {
        name: 'HTML & XML Entity Punctuation',
        scope: [
          'constant.character.entity punctuation.definition.entity',
          'constant.character.entity punctuation.definition.constant',
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
        name: 'Markup Tag',
        scope: [
          'entity.name.tag',
          'entity.tag',
          'source.less keyword.control.html.elements',
          'keyword.control.untitled',
          'keyword.doctype.xml',
          'punctuation.definition.prolog.haml',
          'entity.name.function.neon',
          'keyword.operator support.other.neon',
        ],
        settings: {
          foreground: c.bnp.blue,
        },
      },

      {
        name: 'HTML Attribute Names',
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
        name: 'CSS Pseudo Elements/Classes & Vendor Prefixes',
        scope: [
          'entity.other.attribute-name.placeholder punctuation.definition.entity',
          'entity.other.attribute-name.pseudo-class',
          'entity.other.attribute-name.pseudo-element',
          'entity.other.attribute-name.tag.pseudo-class',
          'entity.other.attribute-name.tag.pseudo-element',
          'support.type.vendor-prefix',
        ],
        settings: {
          foreground: c.neutralYellow,
        },
      },

      {
        name: 'CSS Animations / Keyframes',
        scope: [
          'entity.other.animation-name',
          'variable.other.animation-name',
          'meta.at-rule.keyframes entity.name.function',
          'keyword.language.function.misc.stylus',
          'entity.function-name.stylus',
          'entity.other.animation-keyframe.stylus',
        ],
        settings: {
          foreground: c.bnp.aqua,
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
          foreground: c.foreground,
        },
      },

      {
        name: 'Markdown Image & Hyperlink',
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
        name: 'Function with Parameters Punctuation',
        scope: [
          'meta.brace.round',
          'punctuation.definition.parameters',
          'constant.name.attribute.tag.jade',
        ],
        settings: {
          foreground: c.bnp.fg3,
        },
      },

      {
        name: 'CSS Property Names',
        scope: [
          'meta.property-name',
          'support.type.property-name',
        ],
        settings: {
          foreground: c.bnp.green,
        },
      },

      {
        name: 'CSS Property Name Vendor Prefixes',
        scope: [
          'meta.property-name support.type.vendor-prefix',
        ],
        settings: {
          foreground: c.neutralGreen,
        },
      },

      {
        name: 'CSS Property Values',
        scope: [
          'constant.string.sass',
          'meta.property-value',
          'support.constant.property-value',
        ],
        settings: {
          foreground: c.foreground,
        },
      },

      {
        name: 'CSS Property Value Vendor Prefixes',
        scope: [
          'meta.property-value support.type.vendor-prefix',
        ],
        settings: {
          foreground: c.bnp.fg3,
        },
      },

      {
        name: 'Diff Foreground Text',
        scope: [
          'source.diff',
        ],
        settings: {
          foreground: c.bnp.fg4,
        },
      },

      {
        name: 'Diff Header Text From',
        scope: [
          'meta.diff.header.from-file',
        ],
        settings: {
          foreground: c.bnp.blue,
        },
      },

      {
        name: 'Diff Header Text From Punctuation',
        scope: [
          'punctuation.definition.from-file',
        ],
        settings: {
          foreground: c.neutralBlue,
        },
      },

      {
        name: 'Diff Header Text To',
        scope: [
          'meta.diff.header.to-file',
        ],
        settings: {
          foreground: c.bnp.purple,
        },
      },

      {
        name: 'Diff Header Text To Punctuation',
        scope: [
          'punctuation.definition.to-file',
        ],
        settings: {
          foreground: c.neutralPurple,
        },
      },

      {
        name: 'Diff Additions & Deletions Stats',
        scope: [
          'meta.diff.range',
          'meta.toc-list.line-number',
        ],
        settings: {
          foreground: c.bnp.yellow,
        },
      },

      {
        name: 'Diff Additions & Deletions Stats Punctuation',
        scope: [
          'punctuation.definition.range.diff',
        ],
        settings: {
          foreground: c.neutralYellow,
        },
      },

      // GitGutter
      {
        name: 'GitGutter & Diff Deleted',
        scope: [
          'markup.deleted',
          'punctuation.definition.deleted',
        ],
        settings: {
          foreground: c.bnp.red,
        },
      },

      {
        name: 'GitGutter & Diff Inserted',
        scope: [
          'markup.inserted',
          'punctuation.definition.inserted',
        ],
        settings: {
          foreground: c.bnp.green,
        },
      },

      {
        name: 'GitGutter & Diff Changed',
        scope: [
          'markup.changed',
          'punctuation.definition.changed',
        ],
        settings: {
          foreground: c.bnp.yellow,
        },
      },

      {
        name: 'GitGutter ignored',
        scope: [
          'markup.ignored',
        ],
        settings: {
          foreground: c.bnp.gray,
        },
      },

      {
        name: 'GitGutter untracked',
        scope: [
          'markup.untracked',
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
          foreground: c.bnp.fg3,
        },
      },

      {
        name: 'Bracket Curly',
        scope: [
          'brackethighlighter.curly',
        ],
        settings: {
          foreground: c.bnp.fg3,
        },
      },

      {
        name: 'Bracket Round',
        scope: [
          'brackethighlighter.round',
        ],
        settings: {
          foreground: c.bnp.fg3,
        },
      },

      {
        name: 'Bracket Square',
        scope: [
          'brackethighlighter.square',
        ],
        settings: {
          foreground: c.bnp.fg3,
        },
      },

      {
        name: 'Bracket Angle',
        scope: [
          'brackethighlighter.angle',
        ],
        settings: {
          foreground: c.bnp.fg3,
        },
      },

      {
        name: 'Bracket Quote',
        scope: [
          'brackethighlighter.quote',
        ],
        settings: {
          foreground: c.bnp.fg3,
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
          foreground: c.foreground,
        },
      },

      {
        name: 'HexViewer Lower Byte Nibble',
        scope: [
          'raw.nibble.lower',
        ],
        settings: {
          foreground: c.foreground,
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

      /**
       * PlainTasks
       */

      {
        name: 'PlainTasks: Header',
        scope: [
          'keyword.control.header.todo',
        ],
        settings: {
          foreground: c.bnp.green,
          background: c.headingBackground,
        },
      },

      {
        name: 'PlainTasks: Notes',
        scope: [
          'notes.todo',
        ],
        settings: {
          foreground: c.bnp.fg3,
        },
      },

      {
        name: 'PlainTasks: Punctuation',
        scope: [
          'text.todo punctuation.definition.italic',
          'text.todo punctuation.definition.bold',
        ],
        settings: {
          foreground: c.bnp.bg4,
        },
      },

      {
        name: 'PlainTasks: Task Pending',
        scope: [
          'meta.item.todo.pending',
        ],
        settings: {
          foreground: c.foreground,
        },
      },

      {
        name: 'PlainTasks: Task Pending Punctuation',
        scope: [
          'punctuation.definition.bullet.pending.todo',
        ],
        settings: {
          foreground: c.bnp.gray,
        },
      },

      {
        name: 'PlainTasks: Task Completed Punctuation',
        scope: [
          'punctuation.definition.bullet.completed.todo',
        ],
        settings: {
          foreground: c.bnp.aqua,
        },
      },

      {
        name: 'PlainTasks: Task Cancelled Punctuation',
        scope: [
          'punctuation.definition.bullet.cancelled.todo',
        ],
        settings: {
          foreground: c.bnp.red,
        },
      },

      {
        name: 'PlainTasks: Tag Critical',
        scope: [
          'string.other.tag.todo.critical',
        ],
        settings: {
          foreground: c.bnp.red,
          fontStyle: 'bold',
        },
      },

      {
        name: 'PlainTasks: Tag High',
        scope: [
          'string.other.tag.todo.high',
        ],
        settings: {
          foreground: c.bnp.orange,
          fontStyle: 'bold',
        },
      },

      {
        name: 'PlainTasks: Tag Low',
        scope: [
          'string.other.tag.todo.low',
        ],
        settings: {
          foreground: c.bnp.blue,
          fontStyle: 'bold',
        },
      },

      {
        name: 'PlainTasks: Tag Today',
        scope: [
          'string.other.tag.todo.today',
        ],
        settings: {
          foreground: c.bnp.yellow,
          fontStyle: 'bold',
        },
      },

      {
        name: 'PlainTasks: Tag',
        scope: [
          'meta.tag.todo',
        ],
        settings: {
          foreground: c.bnp.purple,
        },
      },

      {
        name: 'PlainTasks: URL',
        scope: [
          'punctuation.definition.url',
          'todo.url',
        ],
        settings: {
          foreground: c.bnp.blue,
        },
      },

      {
        name: 'PlainTasks: Separator',
        scope: [
          'meta.punctuation.separator.todo',
          'meta.punctuation.archive.todo',
        ],
        settings: {
          fontStyle: 'italic',
          foreground: c.bnp.gray,
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
    } else {
      // Ensure there are no undefined settings
      _.forEach(v.settings, function (value, setting) {
        if (value === undefined) {
          throw new Error(`"${setting}" for "${identifier}" is undefined`);
        }
      });
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
    v.scope = utils.joinScopes(v.scope);
  });

  return plist.build(scheme);
};
