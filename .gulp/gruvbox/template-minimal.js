module.exports = function (about, palette) {
  return {
    name: about.name,
    homepage: about.homepage,
    description: about.description,
    originalAuthor: about.originalAuthor,
    author: about.author,

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
      guide: 'color(var(fg0) alpha(0.15))',
      guideAlt: 'color(var(fg0) alpha(0.25))',
      ruler: 'color(var(fg0) alpha(0.25))',
      headingBackground: 'color(var(bg) lightness(+ 7%))',

      invisibles: 'color(var(fg0) alpha(0.25))',

      background: 'var(bg)',
      foreground: 'var(fg)',
      '--background': 'var(bg)',
      '--foreground': 'var(fg)',
      '--redish': 'var(red)',
      '--orangish': 'var(orange)',
      '--yellowish': 'var(yellow)',
      '--greenish': 'var(green)',
      '--cyanish': 'var(aqua)',
      '--bluish': 'var(blue)',
      '--purplish': 'var(purple)',
    },
    globals: {
      /* GLOBAL SETTINGS */

      background: 'var(bg)',
      foreground: 'var(fg)',
      invisibles: 'var(invisibles)',
      caret: 'var(fg4)',
      block_caret: 'var(gray)',
      line_highlight: 'var(bg1)',

      /* ACCENTS */

      misspelling: 'var(red)',

      fold_marker: 'var(yellow)',
      minimap_border: 'var(border)',
      accent: 'var(yellow)',

      /* CSS */

      // CSS passed to popups.
      // popup_css: '',

      // CSS passed to phantoms. If not specified', 'uses popup_css.
      // phantom_css: '',

      /* GUTTER */

      // The background color of the gutter
      gutter: 'var(bg)',

      // The color of line numbers in the gutter
      gutter_foreground: 'var(gray)',

      /* DIFF */

      // The width of the diff lines', 'between 1 and 8
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

    rules: [
      {
        name: 'Comment',
        scope: ['comment', 'punctuation.definition.comment'],
        font_style: 'italic',
        foreground: 'var(gray)',
      },
      {
        name: 'String',
        scope: ['string'],
        foreground: 'var(green)',
      },
      {
        name: 'Punctuation',
        scope: ['punctuation.definition'],
        foreground: 'var(fg)',
      },
      {
        name: 'Number',
        scope: ['constant.numeric'],
        foreground: 'var(purple)',
      },
      {
        name: 'Built-in constant',
        scope: ['constant.language'],
        foreground: 'var(purple)',
      },
      {
        name: 'User-defined constant',
        scope: ['constant.character', 'constant.other'],
        foreground: 'var(yellow)',
      },
      {
        name: 'Keyword',
        scope: ['keyword - keyword.operator', 'keyword.operator.word'],
        foreground: 'var(red)',
      },
      {
        name: 'Operators',
        scope: ['keyword.operator'],
        foreground: 'var(aqua)',
      },
      {
        name: 'Punctuation',
        scope: ['punctuation.separator', 'punctuation.terminator'],
        foreground: 'var(fg)',
      },
      {
        name: 'Accessor',
        scope: ['punctuation.accessor'],
        foreground: 'var(fg)',
      },
      {
        name: 'Storage',
        scope: ['storage'],
        foreground: 'var(red)',
      },
      {
        name: 'Storage type',
        scope: ['storage.type'],
        foreground: 'var(red)',
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
          'meta.interpolation',
        ],
        foreground: 'var(blue)',
      },
      {
        name: 'Entity name',
        scope: ['entity.name.function'],
        foreground: 'var(green)',
      },
      {
        name: 'Entity name',
        scope: ['entity.name - (entity.name.section | entity.name.tag | entity.name.label)'],
        foreground: 'var(blue)',
      },
      {
        name: 'Inherited class',
        scope: ['entity.other.inherited-class'],
        foreground: 'var(yellow)',
      },
      {
        name: 'Function argument',
        scope: ['variable.parameter'],
        foreground: 'var(fg)',
      },
      {
        name: 'Language variable',
        scope: ['variable.language'],
        foreground: 'var(purple)',
      },
      {
        name: 'Tag name',
        scope: ['entity.name.tag'],
        foreground: 'var(blue)',
      },
      {
        name: 'Tag attribute',
        scope: ['entity.other.attribute-name'],
        foreground: 'var(yellow)',
      },
      {
        name: 'Function call',
        scope: ['variable.function', 'variable.annotation'],
        foreground: 'var(aqua)',
      },
      {
        name: 'Library function',
        scope: ['support.function', 'support.macro'],
        foreground: 'var(aqua)',
      },
      {
        name: 'Library constant',
        scope: ['support.constant'],
        foreground: 'var(purple)',
      },
      {
        name: 'Library class/type',
        scope: ['support.type', 'support.class'],
        foreground: 'var(yellow)',
      },
      {
        name: 'Invalid',
        scope: ['invalid'],
        foreground: 'var(fg)',
        background: 'var(red)',
      },
      {
        name: 'YAML Key',
        scope: ['entity.name.tag.yaml'],
        foreground: 'var(blue)',
      },
      {
        name: 'YAML String',
        scope: ['source.yaml string.unquoted'],
        foreground: 'var(green)',
      },
      {
        name: 'markup headings',
        scope: ['markup.heading'],
        foreground: 'var(green)',
      },
      {
        name: 'markup links',
        scope: ['string.other.link', 'markup.underline.link'],
        foreground: 'var(aqua)',
      },
      {
        name: 'markup bold',
        scope: ['markup.bold'],
        foreground: 'var(orange)',
        font_style: 'bold',
      },
      {
        name: 'markup italic',
        scope: ['markup.italic'],
        foreground: 'var(red)',
        font_style: 'italic',
      },
      {
        name: 'markup bold/italic',
        scope: ['markup.italic markup.bold | markup.bold markup.italic'],
        font_style: 'bold italic',
      },
      {
        name: 'markup hr',
        scope: ['punctuation.definition.thematic-break'],
        foreground: 'var(fg4)',
      },
      {
        name: 'markup numbered list',
        scope: ['markup.list'],
        foreground: 'var(blue)',
      },
      {
        name: 'markup blockquote',
        scope: ['markup.quote punctuation.definition.blockquote', 'markup.list punctuation.definition.list_item'],
        foreground: 'var(purple)',
      },
      {
        name: 'markup code',
        scope: ['markup.raw'],
        background: 'var(yellow)',
      },
      {
        name: 'markup code',
        scope: ['markup.raw.inline'],
        background: 'var(yellow)',
      },
      {
        name: 'diff.header',
        scope: ['meta.diff', 'meta.diff.header'],
        foreground: 'var(blue)',
      },
      {
        name: 'diff.deleted',
        scope: ['markup.deleted'],
        foreground: 'var(red)',
      },
      {
        name: 'diff.inserted',
        scope: ['markup.inserted'],
        foreground: 'var(green)',
      },
      {
        name: 'diff.changed',
        scope: ['markup.changed'],
        foreground: 'var(yellow)',
      },
      {
        name: 'CSS Properties',
        scope: ['support.type.property-name'],
        foreground: 'var(green)',
      },
      {
        scope: ['message.error'],
        foreground: 'var(red)',
      },

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
    ],
  };
};
