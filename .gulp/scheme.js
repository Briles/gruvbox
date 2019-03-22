module.exports = function (values) {
  const c = values.colors;
  const palette = Object.assign({}, c.bnp, {
    bg: c.background,
    fg: c.foreground,
  });

  return {
    name: values.info.name,
    homepage: 'https://github.com/Briles/gruvbox',
    description: 'Based on gruvbox for Vim (https://github.com/morhetz/gruvbox)',
    originalAuthor: 'Pavel Pertsev (https://github.com/morhetz)',
    author: 'Brian Reilly (https://github.com/Briles)',
    variables: {

      bg: palette.bg,
      bg0: palette.bg0,
      bg1: palette.bg1,
      bg2: palette.bg2,
      bg3: palette.bg3,
      bg4: palette.bg4,

      gray: palette.gray,

      fg: palette.fg,
      fg0: palette.fg0,
      fg1: palette.fg1,
      fg2: palette.fg2,
      fg3: palette.fg3,
      fg4: palette.fg4,

      red: palette.red,
      red1: palette.red1,

      green: palette.green,
      green1: palette.green1,

      yellow: palette.yellow,
      yellow1: palette.yellow1,

      blue: palette.blue,
      blue1: palette.blue1,

      purple: palette.purple,
      purple1: palette.purple1,

      aqua: palette.aqua,
      aqua1: palette.aqua1,

      orange: palette.orange,
      orange1: palette.orange1,

      border: 'color(var(bg) lightness(- 10%))',
      container: 'color(var(bg) lightness(- 5%))',
      panelRow: 'color(var(bg) lightness(2.35%))',
      borderSofter: 'color(var(bg) lightness(- 6.5%))',
      containerSofter: 'color(var(bg) lightness(- 2.8%))',
      guide: 'color(var(fg1) alpha(0.15))',
      guideAlt: 'color(var(fg1) alpha(0.15))',
      ruler: 'color(var(fg1) alpha(0.25))',
      headingBackground: 'color(var(bg) lightness(7%))',
    },
    globals: {
      /* GLOBAL SETTINGS */

      background: 'var(bg)',
      foreground: 'var(fg)',
      invisibles: 'var(guide)',
      caret: 'var(fg4)',
      block_caret: 'var(fg4)',
      line_highlight: 'var(bg1)',

      /* ACCENTS */

      misspelling: 'var(red)',

      // fold_marker: '', // TODO: use a single fold marker image styled by this
      minimap_border: 'var(border)',
      accent: 'var(yellow)',

      /* CSS */

      // CSS passed to popups.
      popup_css: `
        html {
          background-color: color(var(--background) lightness(- 5%));
          color: var(--foreground);
        }

        a {
          color: var(--bluish);
        }

        .error, .deleted {
          color: var(--redish);
        }

        .success, .inserted, .name {
          color: var(--greenish);
        }

        .warning, .modified {
          color: var(--yellowish);
        }

        .type {
          color: var(--yellowish);
          font-style: italic;
        }

        .param {
          color: var(--foreground);
        }

        .current {
          text-decoration: underline;
        }
      `,

      // CSS passed to phantoms. If not specified, uses popup_css.
      // phantom_css: '',

      /* GUTTER */

      // The background color of the gutter
      gutter: 'var(bg)',

      // The color of line numbers in the gutter
      gutter_foreground: 'var(gray)',

      /* DIFF */

      // The width of the diff lines, between 1 and 8
      line_diff_width: '3',

      // The color of diff markers for added lines
      line_diff_added: 'var(green)',

      // The color of diff markers for modified lines
      line_diff_modified: 'var(yellow)',

      // The color of diff markers for deleted lines
      line_diff_deleted: 'var(red)',

      /* SELECTION */

      selection: 'var(bg1)',
      selection_border_width: '0',
      inactive_selection: 'var(bg1)',
      selection_corner_style: 'round',
      selection_corner_radius: '0',

      /* FIND */

      highlight: 'var(fg)',
      find_highlight: 'var(yellow)',
      find_highlight_foreground: 'var(bg)',

      /* GUIDES */

      guide: 'var(guide)',
      active_guide: 'var(ruler)',
      stack_guide: 'var(guideAlt)',

      /* BRACKETS */

      brackets_options: 'underline',
      brackets_foreground: 'var(fg3)',
      bracket_contents_options: 'underline',
      bracket_contents_foreground: 'var(fg3)',

      /* TAGS */

      tags_options: 'underline',
      tags_foreground: 'var(fg4)',

      /* SHADOWS */

      shadow: 'var(container)',
      shadow_width: '6',
    },

    rules: [{
        name: 'Text and Source Base Colors',
        scope: [
          'meta.method.source.cs',
          'meta.method.attribute.source.cs',
          'meta.method-call.source.cs', // Fix poor syntax highlighting
          'meta.method.body.source.cs', // Fix poor syntax highlighting
          'meta.method.body.java', // Fix poor syntax highlighting
          'none',
          'source',
          'text',
          'meta.group', // Reset meta.group
        ],
        foreground: 'var(fg)',
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
          'keyword.other.accessor',
          'entity.quasi.element meta.group.braces',
          'keyword.operator.accessor',
        ],
        foreground: 'var(fg)',
      },

      {
        name: 'Comments',
        scope: [
          'comment text',
          'comment',
          'string.comment',
          'markup.strikethrough',
          'text.cancelled',
          'punctuation.definition.comment',
          'punctuation.whitespace.comment',
        ],
        font_style: 'italic',
        foreground: 'var(gray)',
      },

      {
        name: 'Keywords Inside Comments',
        scope: [
          'comment.keyword',
          'comment.keyword.punctuation',
        ],
        foreground: 'var(fg2)',
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
        foreground: 'var(fg3)',
      },

      {
        name: 'Entity',
        scope: [
          'entity.name.type',
          'entity.other.inherited-class',
          'constant.language.name',
        ],
        foreground: 'var(yellow)',
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
          'punctuation.definition.string.template',
          'constant.other.placeholder',
        ],
        foreground: 'var(aqua)',
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
          'keyword.operator.logical.python',
          'storage.type.function.jade',
          'storage.type.function.pug',
          'js.embedded.control.flow keyword.operator.js',
          'storage.type.import.include.jade',
          'storage.type.import.include.pug',
          'support.keyword.timing-direction',
        ],
        foreground: 'var(red)',
      },

      {
        name: 'CSS At-Rule Punctuation (@) & At-Rule Vendor Prefixes',
        scope: [
          'punctuation.definition.keyword',
          'keyword.control.at-rule support.type.property-vendor',
        ],
        foreground: 'var(red1)',
      },

      {
        name: 'Operators',
        scope: [
          'keyword.control.new',
          'keyword.operator',
          'keyword.other.arrow',
          'keyword.other.double-colon',
          'keyword.control.operator',
          'punctuation.operator',
        ],
        foreground: 'var(aqua)',
      },

      {
        name: 'Constants Punctuation',
        scope: [
          'constant.other.symbol punctuation.definition.constant',
          'constant.other.color punctuation.definition.constant',
          'constant.other.unit',
          'keyword.other.unit',
          'punctuation.section.flowtype',
          'support.constant.unicode-range.prefix',
        ],
        foreground: 'var(purple1)',
      },

      {
        name: 'Storage',
        scope: [
          'storage',
          'storage.type.annotation',
          'storage.type.primitive',
        ],
        foreground: 'var(red)',
      },

      {
        scope: [
          'storage.modifier.package',
          'storage.modifier.import',
          'storage.type.import',
          'variable.package',
          'variable.import',
        ],
        foreground: 'var(fg)',
      },

      {
        name: 'Function Keyword',
        scope: [
          'storage.type.function',
          'meta.function storage.type.matlab',
          'entity.quasi.tag.name',
        ],
        foreground: 'var(aqua)',
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
          'support.type.custom-property',
          'support.type.variable-name',
          'variable.parameter.dosbatch',
        ],
        foreground: 'var(blue)',
      },

      {
        name: 'Variable - Punctuation',
        scope: [
          'punctuation.definition.variable',
          'variable.interpolation',
          'variable.other.dollar punctuation.dollar',
          'keyword.other.custom-property.prefix',
          'support.constant.custom-property-name.prefix',
          'punctuation.definition.custom-property',
          'variable.other.object.dollar punctuation.dollar',
        ],
        foreground: 'var(blue1)',
      },

      {
        name: 'Function Declaration - Punctuation',
        scope: [
          'entity.name.function punctuation.dollar',
        ],
        foreground: 'var(green1)',
      },

      {
        name: 'Object Properties',
        scope: [
          'meta.property.object',
        ],
        foreground: 'var(fg)',
      },

      {
        name: 'Object Literal Properties',
        scope: [
          'constant.other.object.key string',
          'meta.object-literal.key',
        ],
        foreground: 'var(fg)',
      },

      {
        name: 'Parameters',
        scope: [
          'variable.parameter',
          'meta.parameters',
        ],
        foreground: 'var(fg)',
      },

      {
        name: 'SASS Import URL',
        scope: [
          'variable.parameter.url',
        ],
        foreground: 'var(green)',
      },

      {
        name: 'Language Constants',
        scope: [
          'constant',
          'constant.numeric',
          'constant.other',
          'constant.other.color',
          'constant.other.symbol',
          'support.constant',
          'support.constant.color',
          'support.constant.font-name',
          'support.constant.media',
          'support.constant.prototype',
          'variable.language',
        ],
        foreground: 'var(purple)',
      },

      {
        name: 'Language Constants Punctuation',
        scope: [
          'variable.language punctuation.definition.variable',
        ],
        foreground: 'var(purple1)',
      },

      {
        name: 'User-Defined Constants',
        scope: [
          'variable.other.constant',
          'entity.name.constant',
        ],
        foreground: 'var(yellow)',
      },

      {
        name: 'Escaped Characters',
        scope: [
          'constant.character.escape',
          'constant.character.escaped',
          'constant.other.character-class.escape',
          'constant.character.quoted',
        ],
        foreground: 'var(red)',
      },

      {
        name: 'Invalids and Illegals',
        scope: [
          'invalid',
        ],
        foreground: 'var(fg)',
        background: 'var(red)',
      },

      {
        name: 'Inner Scopes of Invalids and Illegals',
        scope: [
          'invalid keyword.other.custom-property.prefix',
          'invalid support.type.custom-property.name',
        ],
        foreground: 'var(fg)',
      },

      {
        name: 'Errors',
        scope: [
          'message.error',
        ],
        foreground: 'var(red)',
      },

      {
        name: 'Strings',
        scope: [
          'string',
          'meta.object-literal.key string',
        ],
        foreground: 'var(green)',
      },

      {
        name: 'JSON Keys',
        scope: [
          'meta.structure.dictionary.key.json string',
        ],
        foreground: 'var(blue)',
      },

      {
        name: 'Regular Expressions Text',
        scope: [
          'string.regexp',
          'source.regexp',
        ],
        foreground: 'var(green)',
      },

      {
        name: 'Regular Expressions Start & End Punctuation',
        scope: [
          'string.regexp punctuation.definition.string',
        ],
        foreground: 'var(fg3)',
      },

      {
        name: 'Regular Expressions Character Class Punctuation ([])',
        scope: [
          'keyword.control.set.regexp',
          'punctuation.definition.character-class',
          'string.regexp.character-class.ruby',
        ],
        foreground: 'var(purple)',
      },

      {
        name: 'Regular Expressions Capturing Group',
        scope: [
          'string.regexp.group',
        ],
        foreground: 'var(fg)',
      },

      {
        name: 'Regular Expressions Assertions',
        scope: [
          'constant.other.assertion.regexp',
          'punctuation.definition.group.assertion.regexp',
          'punctuation.definition.group.capture.regexp',
        ],
        foreground: 'var(blue)',
      },

      {
        name: 'Regular Expressions Character Class',
        scope: [
          'keyword.control.character-class.regexp',
          'constant.other.character-class.escape.backslash.regexp',
          'string.regexp.character-class constant.character.escape',
        ],
        foreground: 'var(yellow)',
      },

      {
        name: 'Regular Expressions Quantifiers & Operators',
        scope: [
          'string.regexp.arbitrary-repetition',
          'string.regexp.arbitrary-repetition punctuation',
        ],
        foreground: 'var(aqua)',
      },

      {
        name: 'Hyperlinks',
        scope: [
          'string.other.link',
          'constant.other.reference.link',
        ],
        foreground: 'var(aqua)',
      },

      {
        name: 'Hyperlink Punctuation',
        scope: [
          'meta.link.inline punctuation.definition.string',
          'meta.image.inline punctuation.definition.string',
          'meta.link.reference punctuation.definition.constant',
          'meta.link.reference.literal punctuation.definition.string',
          'meta.link.reference.literal punctuation.definition.constant',
        ],
        foreground: 'var(aqua1)',
      },

      {
        name: 'Markup Tag Punctuation',
        scope: [
          'punctuation.definition.tag',
        ],
        foreground: 'var(blue)',
      },

      {
        name: 'Markdown Heading',
        scope: [
          'markup.heading',
        ],
        foreground: 'var(green)',
      },

      {
        name: 'Markdown Heading Punctuation',
        scope: [
          'punctuation.definition.heading',
          'punctuation.definition.identity',
        ],
        foreground: 'var(green1)',
      },

      {
        name: 'Markdown Bold Text',
        scope: [
          'markup.bold',
        ],
        foreground: 'var(orange)',
        font_style: 'bold',
      },

      {
        name: 'Markdown Bold Text Punctuation',
        scope: [
          'punctuation.definition.bold',
        ],
        foreground: 'var(orange1)',
        font_style: 'bold',
      },

      {
        name: 'Markdown Italic Text',
        scope: [
          'markup.italic',
        ],
        foreground: 'var(red)',
        font_style: 'italic',
      },

      {
        name: 'Markdown Italic Text Punctuation',
        scope: [
          'punctuation.definition.italic',
        ],
        foreground: 'var(red1)',
        font_style: 'italic',
      },

      {
        name: 'Markdown Inline Code',
        scope: [
          'markup.raw.inline',
        ],
        foreground: 'var(yellow)',
      },

      {
        name: 'Markdown Inline Code Punctuation',
        scope: [
          'markup.raw.inline punctuation.definition.raw',
        ],
        foreground: 'var(yellow1)',
      },

      {
        name: 'Markdown Quoted',
        scope: [
          'markup.quote',
        ],
        foreground: 'var(purple)',
      },

      {
        name: 'Markdown Quoted Punctuation',
        scope: [
          'markup.quote punctuation.definition.blockquote',
        ],
        foreground: 'var(purple1)',
      },

      {
        name: 'Markdown List',
        scope: [
          'markup.list',
        ],
        foreground: 'var(blue)',
      },

      {
        name: 'Markdown List Punctuation',
        scope: [
          'markup.list punctuation.definition.list_item',
        ],
        foreground: 'var(blue1)',
      },

      {
        name: 'Markdown Separators',
        scope: [
          'meta.separator.markdown',
        ],
        foreground: 'var(gray)',
      },

      {
        name: 'Support',
        scope: [
          'support.class',
          'support.type',
          'variable.other.class',
          'meta.function-call.constructor variable.type',
        ],
        foreground: 'var(yellow)',
      },

      {
        name: 'Supporting Type - Dollar Punctuation',
        scope: [
          'support.class punctuation.dollar',
        ],
        foreground: 'var(yellow1)',
      },

      {
        name: 'Function Calls',
        scope: [
          'keyword.other.special-method',
          'meta.function-call variable.function',
          'support.function',
          'meta.function-call variable.other.dollar.only punctuation.dollar',
          'entity.name.function.jade',
          'entity.name.function.pug',
        ],
        foreground: 'var(aqua)',
      },

      {
        name: 'Method Calls',
        scope: [
          'meta.function-call.method variable.function',
          'meta.function-call.static variable.function',
          'meta.method-call variable.function',
          'meta.function-call.method support.function',
          'meta.method-call support.function',
          'meta.method-call',
          'support.function.mutator',
        ],
        foreground: 'var(aqua1)',
      },

      {
        name: 'Special Variables',
        scope: [
          'support.module',
        ],
        foreground: 'var(purple)',
      },

      {
        name: 'Entities',
        scope: [
          'entity.name.function',
          'entity.name.label',
          'entity.name.section',
          'entity.name.accessor',
        ],
        foreground: 'var(green)',
      },

      {
        name: 'Modules',
        scope: [
          'entity.name.module',
        ],
        foreground: 'var(orange)',
      },

      {
        name: 'HTML & CSS ID',
        scope: [
          'entity.other.attribute-name.id',
          'constant.id.tag',
          'entity.name.tag.id',
        ],
        foreground: 'var(orange)',
      },

      {
        name: 'HTML & CSS ID Punctuation (#)',
        scope: [
          'entity.other.attribute-name.id punctuation.definition.entity',
        ],
        foreground: 'var(orange1)',
      },

      {
        name: 'HTML & CSS Class',
        scope: [
          'entity.name.tag.class',
          'entity.other.attribute-name.class',
        ],
        foreground: 'var(yellow)',
      },

      {
        name: 'HTML & CSS Class Punctuation (.)',
        scope: [
          'entity.other.attribute-name.class punctuation.definition.entity',
        ],
        foreground: 'var(yellow1)',
      },

      {
        name: 'CSS Attribute Selector Attribute Name',
        scope: [
          'meta.attribute-selector entity.other.attribute-name',
        ],
        foreground: 'var(yellow1)',
      },

      {
        name: 'HTML & XML Entity Punctuation',
        scope: [
          'constant.character.entity punctuation.definition.entity',
          'constant.character.entity punctuation.definition.constant',
        ],
        foreground: 'var(purple1)',
      },

      {
        scope: [
          'entity.name.class',
          'entity.name.type.class',
        ],
        foreground: 'var(yellow)',
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
          'entity.name.namespace.wildcard',
        ],
        foreground: 'var(blue)',
      },

      {
        name: 'HTML Attribute Names',
        scope: [
          'entity.name.attribute-name',
          'entity.other.attribute-name',
          'meta.section.attributes.haml constant.other.symbol.ruby',
        ],
        foreground: 'var(yellow)',
      },

      {
        name: 'CSS Pseudo Elements/Classes & Vendor Prefixes',
        scope: [
          'entity.other.attribute-name.placeholder punctuation.definition.entity',
          'entity.other.attribute-name.pseudo-class',
          'entity.other.attribute-name.pseudo-element',
          'entity.other.attribute-name.tag.pseudo-class',
          'entity.other.attribute-name.tag.pseudo-element',
          'entity.other.pseudo-class',
          'entity.other.pseudo-element',
          'support.type.vendor-prefix',
        ],
        foreground: 'var(yellow1)',
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
        foreground: 'var(aqua)',
      },

      {
        name: 'Author-Defined Names',
        scope: [
          'entity.other.namespace-prefix',
        ],
        foreground: 'var(aqua)',
      },

      {
        scope: [
          'meta.class.body',
          'meta.tag',
        ],
        foreground: 'var(fg)',
      },

      {
        name: 'Markdown Image & Hyperlink',
        scope: [
          'meta.link',
          'meta.image',
        ],
        foreground: 'var(purple)',
      },

      {
        name: 'Markdown Image & Hyperlink Punctuation',
        scope: [
          'meta.image punctuation.definition.metadata',
          'meta.link punctuation.definition.metadata',
        ],
        foreground: 'var(purple1)',
      },

      {
        scope: [
          'meta.require',
        ],
        foreground: 'var(green)',
      },

      {
        name: 'Function Call Braces',
        scope: [
          'constant.name.attribute.tag.jade',
          'constant.name.attribute.tag.pug',
          'meta.brace.round',
          'meta.function-call meta.group punctuation.definition.group',
          'punctuation.definition.method-parameters',
          'punctuation.definition.parameters',
        ],
        foreground: 'var(fg3)',
      },

      {
        name: 'CSS Property Names',
        scope: [
          'meta.property-name',
          'support.type.property-name',
          'support.type.shape.definition support.constant.property-value',
        ],
        foreground: 'var(green)',
      },

      {
        name: 'CSS Property Name Vendor Prefixes',
        scope: [
          'meta.property-name support.type.vendor-prefix',
          'support.type.property-name.media support.type.vendor-prefix',
        ],
        foreground: 'var(green1)',
      },

      {
        name: 'CSS Property Values',
        scope: [
          'constant.string.sass',
          'meta.property-value',
          'support.constant.property-value',
        ],
        foreground: 'var(fg)',
      },

      {
        name: 'CSS Property Value Vendor Prefixes',
        scope: [
          'meta.property-value support.type.vendor-prefix',
        ],
        foreground: 'var(fg3)',
      },

      {
        name: 'Diff Foreground Text',
        scope: [
          'source.diff',
        ],
        foreground: 'var(fg4)',
      },

      {
        name: 'Diff Header Text From',
        scope: [
          'meta.diff.header.from-file',
        ],
        foreground: 'var(blue)',
      },

      {
        name: 'Diff Header Text From Punctuation',
        scope: [
          'punctuation.definition.from-file',
        ],
        foreground: 'var(blue1)',
      },

      {
        name: 'Diff Header Text To',
        scope: [
          'meta.diff.header.to-file',
        ],
        foreground: 'var(purple)',
      },

      {
        name: 'Diff Header Text To Punctuation',
        scope: [
          'punctuation.definition.to-file',
        ],
        foreground: 'var(purple1)',
      },

      {
        name: 'Diff Additions & Deletions Stats',
        scope: [
          'meta.diff.range',
          'meta.toc-list.line-number',
        ],
        foreground: 'var(yellow)',
      },

      {
        name: 'Diff Additions & Deletions Stats Punctuation',
        scope: [
          'punctuation.definition.range.diff',
        ],
        foreground: 'var(yellow1)',
      },

      // Find in Files
      {
        name: 'FiF Line Number',
        scope: [
          'constant.numeric.line-number',
        ],
        foreground: 'var(gray)',
      },

      {
        name: 'FiF Line Number Matched',
        scope: [
          'constant.numeric.line-number.match',
        ],
        foreground: 'var(aqua)',
      },

      {
        name: 'FiF Filename',
        scope: [
          'entity.name.filename',
        ],
        foreground: 'var(green)',
      },

      // Incremental Diff

      {
        name: 'Incremental Diff Deleted',
        scope: [
          'diff.deleted',
        ],
        background: 'color(var(red) alpha(0.17))',
      },

      {
        name: 'Incremental Diff Deleted Char',
        scope: [
          'diff.deleted.char',
        ],
        background: 'color(var(red) alpha(0.3))',
      },

      {
        name: 'Incremental Diff Deleted',
        scope: [
          'diff.inserted',
        ],
        background: 'color(var(green) alpha(0.17))',
      },

      {
        name: 'Incremental Diff Deleted Char',
        scope: [
          'diff.inserted.char',
        ],
        background: 'color(var(green) alpha(0.3))',
      },

      // GitGutter
      {
        name: 'GitGutter & Diff Deleted',
        scope: [
          'markup.deleted',
          'punctuation.definition.deleted',
        ],
        foreground: 'var(red)',
      },

      {
        name: 'GitGutter & Diff Inserted',
        scope: [
          'markup.inserted',
          'punctuation.definition.inserted',
        ],
        foreground: 'var(green)',
      },

      {
        name: 'GitGutter & Diff Changed',
        scope: [
          'markup.changed',
          'punctuation.definition.changed',
        ],
        foreground: 'var(yellow)',
      },

      {
        name: 'GitGutter ignored',
        scope: [
          'markup.ignored',
        ],
        foreground: 'var(gray)',
      },

      {
        name: 'GitGutter untracked',
        scope: [
          'markup.untracked',
        ],
        foreground: 'var(gray)',
      },

      // Bracket Highlighter
      {
        name: 'Bracket Tag',
        scope: [
          'brackethighlighter.tag',
        ],
        foreground: 'var(fg3)',
      },

      {
        name: 'Bracket Curly',
        scope: [
          'brackethighlighter.curly',
        ],
        foreground: 'var(fg3)',
      },

      {
        name: 'Bracket Round',
        scope: [
          'brackethighlighter.round',
        ],
        foreground: 'var(fg3)',
      },

      {
        name: 'Bracket Square',
        scope: [
          'brackethighlighter.square',
        ],
        foreground: 'var(fg3)',
      },

      {
        name: 'Bracket Angle',
        scope: [
          'brackethighlighter.angle',
        ],
        foreground: 'var(fg3)',
      },

      {
        name: 'Bracket Quote',
        scope: [
          'brackethighlighter.quote',
        ],
        foreground: 'var(fg3)',
      },

      {
        name: 'Bracket Unmatched',
        scope: [
          'brackethighlighter.unmatched',
        ],
        foreground: 'var(red)',
      },

      // SublimeLinter
      {
        name: 'SublimeLinter Error',
        scope: [
          'sublimelinter.mark.error',
        ],
        foreground: 'var(red)',
      },

      {
        name: 'SublimeLinter Gutter Mark',
        scope: [
          'sublimelinter.gutter-mark',
        ],
        foreground: 'var(gray)',
      },

      {
        name: 'SublimeLinter Warning',
        scope: [
          'sublimelinter.mark.warning',
        ],
        foreground: 'var(yellow)',
      },

      // HexViewer
      {
        name: 'HexViewer Upper Byte Nibble',
        scope: [
          'raw.nibble.upper',
        ],
        foreground: 'var(fg)',
      },

      {
        name: 'HexViewer Lower Byte Nibble',
        scope: [
          'raw.nibble.lower',
        ],
        foreground: 'var(fg)',
      },

      {
        name: 'HexViewer Highlight',
        scope: [
          'hexviewer.highlight',
        ],
        foreground: 'var(bg)',
        background: 'var(yellow)',
      },

      {
        name: 'HexViewer Edited Highlight',
        scope: [
          'hexviewer.highlight.edited',
        ],
        foreground: 'var(bg)',
        background: 'var(orange)',
      },

      // Raw Glyphs
      {
        name: 'Raw New Line: Carriage Return',
        scope: [
          'glyph.carriage-return',
        ],
        foreground: 'var(guide)',
      },

      {
        name: 'Raw New Line: New Line Glyph',
        scope: [
          'glyph.new-line',
        ],
        foreground: 'var(guide)',
      },

      /**
       * PlainTasks
       */

      {
        name: 'PlainTasks: Header',
        scope: [
          'keyword.control.header.todo',
        ],
        foreground: 'var(green)',
        background: 'var(headingBackground)',
      },

      {
        name: 'PlainTasks: Notes',
        scope: [
          'notes.todo',
        ],
        foreground: 'var(fg3)',
      },

      {
        name: 'PlainTasks: Punctuation',
        scope: [
          'text.todo punctuation.definition.italic',
          'text.todo punctuation.definition.bold',
        ],
        foreground: 'var(bg4)',
      },

      {
        name: 'PlainTasks: Task Pending',
        scope: [
          'meta.item.todo.pending',
        ],
        foreground: 'var(fg)',
      },

      {
        name: 'PlainTasks: Task Pending Punctuation',
        scope: [
          'punctuation.definition.bullet.pending.todo',
        ],
        foreground: 'var(gray)',
      },

      {
        name: 'PlainTasks: Task Completed Punctuation',
        scope: [
          'punctuation.definition.bullet.completed.todo',
        ],
        foreground: 'var(aqua)',
      },

      {
        name: 'PlainTasks: Task Cancelled Punctuation',
        scope: [
          'punctuation.definition.bullet.cancelled.todo',
        ],
        foreground: 'var(red)',
      },

      {
        name: 'PlainTasks: Tag Critical',
        scope: [
          'string.other.tag.todo.critical',
        ],
        foreground: 'var(red)',
        font_style: 'bold',
      },

      {
        name: 'PlainTasks: Tag High',
        scope: [
          'string.other.tag.todo.high',
        ],
        foreground: 'var(orange)',
        font_style: 'bold',
      },

      {
        name: 'PlainTasks: Tag Low',
        scope: [
          'string.other.tag.todo.low',
        ],
        foreground: 'var(blue)',
        font_style: 'bold',
      },

      {
        name: 'PlainTasks: Tag Today',
        scope: [
          'string.other.tag.todo.today',
        ],
        foreground: 'var(yellow)',
        font_style: 'bold',
      },

      {
        name: 'PlainTasks: Tag',
        scope: [
          'meta.tag.todo',
        ],
        foreground: 'var(purple)',
      },

      {
        name: 'PlainTasks: URL',
        scope: [
          'punctuation.definition.url',
          'todo.url',
        ],
        foreground: 'var(blue)',
      },

      {
        name: 'PlainTasks: Separator',
        scope: [
          'meta.punctuation.separator.todo',
          'meta.punctuation.archive.todo',
        ],
        font_style: 'italic',
        foreground: 'var(gray)',
      },
    ],
  };
};
