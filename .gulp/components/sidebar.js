const mixins = require('../mixins.js');

module.exports = function (values) {

  const c = values.colors;
  const paths = values.paths;

  return [

    // Sidebar Container
    {
      class: 'sidebar_container',
      content_margin: [0, 12, 1, 0],

      // Background
      'layer0.tint': 'var(container)',
      'layer0.opacity': 1,

      // Border - Right
      'layer1.tint': 'var(border)',
      'layer1.opacity': 1,
      'layer1.draw_center': false,
      'layer1.inner_margin': [0, 0, 1, 0],
    },

    // Sidebar Tree
    {
      class: 'sidebar_tree',
      row_padding: [24, 5],
      indent: 16,
      indent_offset: 0,
      indent_top_level: false,
    },

    // Sidebar Heading
    {
      class: 'sidebar_heading',

      color: 'var(fg1_gs)',
      'font.bold': false,
      'font.size': 12,
    },

    // Sidebar Tree Row
    {
      class: 'tree_row',

      // Background
      'layer0.tint': 'var(bg)',
      'layer0.opacity': 0,
    },

    // Sidebar Label
    {
      class: 'sidebar_label',

      'font.bold': false,
      'font.italic': false,
    },

    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'sidebar_label',

        parents: [
          {
            attributes: [lumin],
          },
        ],

        fg: palette('gray_gs'),
      };
    }),

    // Sidebar Label Hover
    {
      class: 'sidebar_label',
      parents: [

        {
          class: 'tree_row',
          attributes: ['hover'],
        },

      ],

      fg: 'var(fg1_gs)',
    },

    // Sidebar Label Selected
    {
      class: 'sidebar_label',
      parents: [

        {
          class: 'tree_row',
          attributes: ['selected'],
        },

      ],

      'font.bold': false,
      fg: 'var(fg1_gs)',
    },

    // Sidebar Folder Label
    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'sidebar_label',

        parents: [
          {
            class: 'window',
            attributes: [lumin],
          },
          {
            class: 'tree_row',
            attributes: ['expandable']
          }
        ],

        fg: palette('fg4_gs'),
      };
    }),

    // Sidebar Bold Folder Label
    {
      class: 'sidebar_label',
      parents: [

        {
          class: 'tree_row',
          attributes: ['expandable'],
        },

      ],
      settings: ['bold_folder_labels'],

      'font.bold': true,
    },

    // Sidebar Folder Label Expanded
    {
      class: 'sidebar_label',
      parents: [

        {
          class: 'tree_row',
          attributes: ['expanded'],
        },

      ],

      fg: 'var(fg1_gs)',
    },

    // Sidebar Label Hover
    {
      class: 'sidebar_label',
      parents: [

        {
          class: 'tree_row',
          attributes: ['hover'],
        },

      ],

      fg: 'var(fg1_gs)',
    },

    // Sidebar Bold Folder Label Expanded
    {
      class: 'sidebar_label',
      parents: [

        {
          class: 'tree_row',
          attributes: ['expanded'],
        },

      ],
      settings: ['bold_folder_labels'],

      'font.bold': true,
    },

    // Sidebar Expanded Selected Folder Label
    {
      class: 'sidebar_label',
      parents: [

        {
          class: 'tree_row',
          attributes: ['expanded', 'selected'],
        },

      ],

      fg: 'var(fg1_gs)',
    },

    // Sidebar Transient Label
    {
      class: 'sidebar_label',
      attributes: ['transient'],

      'font.italic': false,
      fg: 'var(fg1_gs)',
    },

    // Sidebar file close
    {
      class: 'close_button',
      content_margin: [8, 8],

      // Close Icon
      'layer0.texture': `${paths.commons}close.png`,
      'layer0.opacity': 0,
      // 'layer0.tint': 'var(close_default)',

      // Dirty Icon
      'layer2.texture': `${paths.commons}dirty.png`,
      'layer2.opacity': 0,
      'layer2.tint': 'var(dirty_default)',
    },

    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'close_button',

        parents: [
          {
            class: 'window',
            attributes: [lumin],
          },
          {
            class: 'tree_row',
          },
        ],

        'layer0.tint': palette('close_default_gs'),
      };
    }),

    {
      class: 'close_button',
      parents: [

        {
          class: 'tree_row',
          attributes: ['selected'],
        },

      ],

      'layer0.opacity': 1, // Close Icon
      'layer2.opacity': 0, // Dirty Icon
    },

    // Close Button Hover
    {
      class: 'close_button',
      parents: [

        {
          class: 'tree_row',
          attributes: ['hover'],
        },

      ],

      'layer0.opacity': 1, // Close Icon
      'layer0.tint': 'var(close_hover)',
      'layer2.opacity': 0, // Dirty Icon
    },

    // Sidebar Dirty File
    {
      class: 'close_button',
      attributes: ['dirty'],

      'layer0.opacity': 0, // Close Icon
      'layer2.opacity': 1, // Dirty Icon
    },

    // Sidebar Dirty File Selected
    {
      class: 'close_button',
      attributes: ['dirty'],
      parents: [

        {
          class: 'tree_row',
          attributes: ['selected'],
        },

      ],

      'layer0.opacity': 0, // Close Icon
      'layer2.opacity': 1, // Dirty Icon
    },

    // Close Icon Hover
    {
      class: 'close_button',
      attributes: ['hover'],

      'layer0.opacity': 1, // Close Icon
      'layer0.tint': 'var(close_hover)',
      'layer2.opacity': 0, // Dirty Icon
    },

    // File Icon
    {
      class: 'icon_file_type',
      content_margin: [8, 8],

      'layer0.opacity': 0.6,
    },

    // Selected File Icon
    {
      class: 'icon_file_type',
      parents: [

        {
          class: 'tree_row',
          attributes: ['selected'],
        },

      ],

      'layer0.opacity': 1,
    },

    // Folder Icon
    {
      class: 'icon_folder',
      content_margin: [8, 8],

      // Sublime Default
      'layer0.opacity': 0,

      // Default
      'layer1.texture': `${paths.commons}folder__literal.png`,
      'layer1.opacity': 1,

      // Hover
      'layer2.texture': `${paths.commons}folder__literal--hover.png`,
      'layer2.opacity': 0,

      // Expanded
      'layer3.texture': `${paths.commons}folder__literal--expanded.png`,
      'layer3.opacity': 0,
    },

    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'icon_folder',

        parents: [
          {
            class: 'window',
            attributes: [lumin],
          },
        ],

        'layer1.tint': palette('folder_default_gs'),
        'layer2.tint': palette('folder_hover_gs'),
        'layer3.tint': palette('folder_expanded_gs'),
      };
    }),

    // Folder Icon Hover
    {
      class: 'icon_folder',
      parents: [

        {
          class: 'tree_row',
          attributes: ['hover'],
        },

      ],

      'layer1.opacity': 0, // Default
      'layer2.opacity': 1, // Hover
      'layer3.opacity': 0, // Expanded
    },

    // Folder Icon Expanded
    {
      class: 'icon_folder',
      parents: [

        {
          class: 'tree_row',
          attributes: ['expanded'],
        },

      ],

      'layer1.opacity': 0, // Default
      'layer2.opacity': 0, // Hover
      'layer3.opacity': 1, // Expanded
    },

    // Folder Icon Expanded Hover
    {
      class: 'icon_folder',
      parents: [

        {
          class: 'tree_row',
          attributes: ['expanded', 'hover'],
        },

      ],

      'layer1.opacity': 0, // Default
      'layer2.opacity': 0, // Hover
      'layer3.opacity': 1, // Expanded
    },

    // Folder Icon Loading
    {
      class: 'icon_folder_loading',
      content_margin: [8, 8],

      'layer1.texture': {
        keyframes: [
          `${paths.commons}folder_loading_9.png`,
          `${paths.commons}folder_loading_8.png`,
          `${paths.commons}folder_loading_7.png`,
          `${paths.commons}folder_loading_6.png`,
          `${paths.commons}folder_loading_5.png`,
          `${paths.commons}folder_loading_4.png`,
          `${paths.commons}folder_loading_3.png`,
          `${paths.commons}folder_loading_2.png`,
          `${paths.commons}folder_loading_1.png`,
          `${paths.commons}folder_loading_0.png`,
        ],
        loop: true,
        frame_time: 0.065,
      },
      // 'layer1.tint': 'var(folder_hover)',

      'layer0.opacity': 0, // Default
      'layer1.opacity': 1, // Hover
      'layer2.opacity': 0, // Expanded
    },

    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'icon_folder_loading',

        parents: [
          {
            class: 'window',
            attributes: [lumin],
          },
        ],

        'layer1.tint': palette('folder_hover_gs'),
      };
    }),

    // Symlinked Folder Icon
    {
      class: 'icon_folder_dup',
      content_margin: [8, 8],

      // Default
      'layer0.texture': `${paths.commons}folder__literal_dup.png`,
      'layer0.opacity': 1.0,

      // Hover
      'layer1.texture': `${paths.commons}folder__literal_dup--hover.png`,
      'layer1.opacity': 0,

      // Expanded
      'layer2.texture': `${paths.commons}folder__literal_dup--expanded.png`,
      'layer2.opacity': 0,
    },

    ...mixins.createComponentVariations((lumin, palette) => {
      return {
        class: 'icon_folder_dup',

        parents: [
          {
            class: 'window',
            attributes: [lumin],
          },
        ],

        'layer0.tint': palette('folder_default_gs'),
        'layer1.tint': palette('folder_hover_gs'),
        'layer2.tint': palette('folder_expanded_gs'),
      };
    }),

    // Symlinked Folder Icon Hover
    {
      class: 'icon_folder_dup',
      parents: [

        {
          class: 'tree_row',
          attributes: ['hover'],
        },

      ],

      'layer0.opacity': 0, // Default
      'layer1.opacity': 1, // Hover
      'layer2.opacity': 0, // Expanded
    },

    // Symlinked Folder Icon Expanded
    {
      class: 'icon_folder_dup',
      parents: [

        {
          class: 'tree_row',
          attributes: ['expanded'],
        },

      ],

      'layer0.opacity': 0, // Default
      'layer1.opacity': 0, // Hover
      'layer2.opacity': 1, // Expanded
    },

    // Symlinked Folder Icon Expanded Hover
    {
      class: 'icon_folder_dup',
      parents: [

        {
          class: 'tree_row',
          attributes: ['expanded', 'hover'],
        },

      ],

      'layer0.opacity': 0, // Default
      'layer1.opacity': 0, // Hover
      'layer2.opacity': 1, // Expanded
    },

    // Sidebar Group Arrows
    {
      class: 'disclosure_button_control',
      content_margin: [0, 0],

      'layer0.opacity': 0, // Default
      'layer1.opacity': 0, // Hover
    },

  ];
};
