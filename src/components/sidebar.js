module.exports = function (values) {
  'use strict';

  const c = values.colors;
  const paths = values.paths;

  return [

    // Sidebar Container
    {
      class: 'sidebar_container',
      content_margin: [0, 12, 1, 0],

      // Background
      'layer0.tint': c.container,
      'layer0.opacity': 1,

      // Border - Right
      'layer1.tint': c.border,
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

      // Background
      'layer0.tint': c.container,
      'layer0.opacity': 1,
    },

    // Sidebar Heading
    {
      class: 'sidebar_heading',

      color: c.gs.fg1,
      'font.bold': false,
      'font.size': 12,
    },

    // Sidebar Tree Row
    {
      class: 'tree_row',

      // Background
      'layer0.tint': c.background,
      'layer0.opacity': 0,
    },

    // Sidebar Label
    {
      class: 'sidebar_label',

      color: c.gs.gray,
      'font.bold': false,
      'font.italic': false,
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

      color: c.gs.fg1,
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
      color: c.gs.fg1,
    },

    // Sidebar Folder Label
    {
      class: 'sidebar_label',
      parents: [

        {
          class: 'tree_row',
          attributes: ['expandable'],
        },

      ],

      color: c.gs.fg4,
    },

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

      color: c.gs.fg1,
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

      color: c.gs.fg1,
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

      color: c.gs.fg1,
    },

    // Sidebar Transient Label
    {
      class: 'sidebar_label',
      attributes: ['transient'],

      'font.italic': false,
      color: c.gs.fg1,
    },

    // Sidebar file close
    {
      class: 'close_button',
      content_margin: [8, 8],

      // Close Icon
      'layer0.texture': `${paths.this}close.png`,
      'layer0.opacity': 0,

      // Close Icon Hover
      'layer1.texture': `${paths.this}close--hover.png`,
      'layer1.opacity': 0,

      // Dirty Icon
      'layer2.texture': `${paths.this}dirty.png`,
      'layer2.opacity': 0,
    },

    {
      class: 'close_button',
      parents: [

        {
          class: 'tree_row',
          attributes: ['selected'],
        },

      ],

      'layer0.opacity': 1, // Close Icon
      'layer1.opacity': 0, // Close Icon Hover
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
      'layer1.opacity': 0, // Close Icon Hover
      'layer2.opacity': 0, // Dirty Icon
    },

    // Sidebar Dirty File
    {
      class: 'close_button',
      attributes: ['dirty'],

      'layer0.opacity': 0, // Close Icon
      'layer1.opacity': 0, // Close Icon Hover
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
      'layer1.opacity': 0, // Close Icon Hover
      'layer2.opacity': 1, // Dirty Icon
    },

    // Close Icon Hover
    {
      class: 'close_button',
      attributes: ['hover'],

      'layer0.opacity': 0, // Close Icon
      'layer1.opacity': 1, // Close Icon Hover
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
      'layer1.texture': `${paths.commons}folder.png`,
      'layer1.opacity': 1,

      // Hover
      'layer2.texture': `${paths.this}folder--expanded.png`,
      'layer2.opacity': 0,

      // Expanded
      'layer3.texture': `${paths.this}folder--expanded.png`,
      'layer3.opacity': 0,
    },

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

      'layer0.opacity': 0, // Default
      'layer1.opacity': 1, // Hover
      'layer2.opacity': 0, // Expanded
    },

    // Symlinked Folder Icon
    {
      class: 'icon_folder_dup',
      content_margin: [8, 8],

      // Default
      'layer0.texture': `${paths.commons}folder_dup.png`,
      'layer0.opacity': 1.0,

      // Hover
      'layer1.texture': `${paths.this}folder_dup--expanded.png`,
      'layer1.opacity': 0,

      // Expanded
      'layer2.texture': `${paths.this}folder_dup--expanded.png`,
      'layer2.opacity': 0,
    },

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
