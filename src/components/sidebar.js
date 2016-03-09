module.exports = function (values) {
  'use strict';

  const c = values.colors;
  const info = values.info;
  const paths = values.paths;

  return [

    {
      'class': 'sidebar_container',
      'content_margin': [0, 12, 0, 0],

      'layer0.opacity': 1,
      'layer0.tint': c.container,
      'layer0.inner_margin': [0, 0, 0, 0],

      'layer1.tint': c.border,
      'layer1.draw_center': false,
      'layer1.inner_margin': [0, 0, 1, 0],
      'layer1.opacity': 1,
    },

    {
      'class': 'sidebar_tree',
      'row_padding': [24, 5],
      'indent': 16,
      'indent_offset': 0,
      'indent_top_level': false,

      'layer0.opacity': 1,
      'layer0.tint': c.container,
      'layer0.inner_margin': [0, 0, 0, 0],

      'layer1.tint': c.border,
      'layer1.draw_center': false,
      'layer1.inner_margin': [0, 0, 1, 0],
      'layer1.opacity': 1,

    },

    {
      'class': 'sidebar_heading',

      'color': c.gs.fg1,
      'font.bold': false,
      'font.size': 12,
    },

    {
      'class': 'sidebar_heading',
      'parents': [

        {
          'class': 'tree_row',
          'attributes': ['selected'],
        },

      ],
    },

    {
      'class': 'tree_row',

      'layer1.tint': c.border,
      'layer1.draw_center': false,
      'layer1.inner_margin': [0, 0, 1, 0],
      'layer1.opacity': 1,

      'layer0.tint': c.background,
      'layer0.opacity': 0,
    },

    {
      'class': 'tree_row',
      'attributes': ['selected'],

      'layer0.opacity': 0,
    },

    {
      'class': 'sidebar_label',

      'color': c.gs.gray,
      'font.bold': false,
      'font.italic': false,
    },

    {
      'class': 'sidebar_label',
      'parents': [

        {
          'class': 'tree_row',
          'attributes': ['hover'],
        },

      ],

      'color': c.gs.fg1,
    },

    {
      'class': 'sidebar_label',
      'parents': [

        {
          'class': 'tree_row',
          'attributes': ['selected'],
        },

      ],

      'font.bold': false,
      'color': c.gs.fg1,
    },

    {
      'class': 'sidebar_label',
      'parents': [

        {
          'class': 'tree_row',
          'attributes': ['expandable'],
        },

      ],

      'color': c.gs.fg4,
    },

    {
      'class': 'sidebar_label',
      'parents': [

        {
          'class': 'tree_row',
          'attributes': ['expandable'],
        },

      ],
      'settings': ['bold_folder_labels'],

      'font.bold': true,
    },

    {
      'class': 'sidebar_label',
      'parents': [

        {
          'class': 'tree_row',
          'attributes': ['expanded'],
        },

      ],

      'color': c.gs.fg1,
    },

    {
      'class': 'sidebar_label',
      'parents': [

        {
          'class': 'tree_row',
          'attributes': ['hover'],
        },

      ],

      'color': c.gs.fg1,
    },

    {
      'class': 'sidebar_label',
      'parents': [

        {
          'class': 'tree_row',
          'attributes': ['expanded'],
        },

      ],
      'settings': ['bold_folder_labels'],

      'font.bold': true,
    },

    {
      'class': 'sidebar_label',
      'parents': [

        {
          'class': 'tree_row',
          'attributes': ['expanded', 'selected'],
        },

      ],

      'color': c.gs.fg1,
    },

    {
      'class': 'sidebar_label',
      'attributes': ['transient'],

      'font.italic': false,
      'color': c.gs.fg1,
    },

    // Sidebar file close
    {
      'class': 'close_button',
      'content_margin': [8, 8],

      // Close Icon
      'layer0.texture': `${paths.this}close.png`,
      'layer0.inner_margin': 0,
      'layer0.opacity': 0,

      // Close Icon Hover
      'layer1.texture': `${paths.this}close--hover.png`,
      'layer1.opacity': 0,

      // Dirty Icon
      'layer2.texture': `${paths.this}dirty.png`,
      'layer2.inner_margin': 0,
    },

    {
      'class': 'close_button',
      'parents': [

        {
          'class': 'tree_row',
          'attributes': ['selected'],
        },

      ],

      'layer0.opacity': 1,
      'layer1.opacity': 0,
      'layer2.opacity': 0,
    },

    {
      'class': 'close_button',
      'parents': [

        {
          'class': 'tree_row',
          'attributes': ['hover'],
        },

      ],

      'layer0.opacity': 1,
      'layer1.opacity': 0,
      'layer2.opacity': 0,
    },

    // Sidebar file dirty
    {
      'class': 'close_button',
      'attributes': ['dirty'],

      'layer0.opacity': 0,
      'layer1.opacity': 0,
      'layer2.opacity': 1,
    },

    {
      'class': 'close_button',
      'attributes': ['dirty'],
      'parents': [

        {
          'class': 'tree_row',
          'attributes': ['selected'],
        },

      ],

      'layer0.opacity': 0,
      'layer1.opacity': 0,
      'layer2.opacity': 1,
    },

    {
      'class': 'close_button',
      'attributes': ['hover'],

      'layer0.opacity': 0,
      'layer1.opacity': 1,
      'layer2.opacity': 0,
    },

    // File icons and folder

    {
      'class': 'icon_file_type',
      'content_margin': [9, 9],

      // layer0.texture is filled in by code with the relevant icon name
      'layer0.opacity': 0.6,
    },

    {
      'class': 'icon_file_type',
      'parents': [

        {
          'class': 'tree_row',
          'attributes': ['selected'],
        },

      ],
      'content_margin': [9, 9],

      'layer0.opacity': 1,
    },

    // Secondary folder icon (original) used as main folder icon

    {
      'class': 'icon_folder',
      'content_margin': [8, 8],

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

    {
      'class': 'icon_folder',
      'parents': [

        {
          'class': 'tree_row',
          'attributes': ['hover'],
        },

      ],

      'layer1.opacity': 0,
      'layer2.opacity': 1,
      'layer3.opacity': 0,
    },

    {
      'class': 'icon_folder',
      'parents': [

        {
          'class': 'tree_row',
          'attributes': ['expanded', 'hover'],
        },

      ],

      'layer1.opacity': 0,
      'layer2.opacity': 0,
      'layer3.opacity': 1,
    },

    {
      'class': 'icon_folder',
      'parents': [

        {
          'class': 'tree_row',
          'attributes': ['expanded'],
        },

      ],

      'layer1.opacity': 0,
      'layer2.opacity': 0,
      'layer3.opacity': 1,
    },

    // Folder loading

    {
      'class': 'icon_folder_loading',
      'content_margin': [8, 8],

      'layer1.texture': {
        'keyframes': [
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
        'loop': true,
        'frame_time': 0.065,
      },

      'layer0.opacity': 0,
      'layer1.opacity': 1,
      'layer2.opacity': 0,
    },

    // Symlinked
    {
      'class': 'icon_folder_dup',
      'content_margin': [8, 8],

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

    {
      'class': 'icon_folder_dup',
      'parents': [

        {
          'class': 'tree_row',
          'attributes': ['hover'],
        },

      ],

      'layer0.opacity': 0,
      'layer1.opacity': 1,
      'layer2.opacity': 0,
    },

    {
      'class': 'icon_folder_dup',
      'parents': [

        {
          'class': 'tree_row',
          'attributes': ['expanded', 'hover'],
        },

      ],

      'layer0.opacity': 0,
      'layer1.opacity': 0,
      'layer2.opacity': 1,
    },

    {
      'class': 'icon_folder_dup',
      'parents': [

        {
          'class': 'tree_row',
          'attributes': ['expanded'],
        },

      ],

      'layer0.opacity': 0,
      'layer1.opacity': 0,
      'layer2.opacity': 1,
    },

  ];
};
