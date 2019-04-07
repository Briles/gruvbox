const _ = require('lodash');
const mixins = require('../mixins.js');

module.exports = function (values) {

  const c = values.colors;
  const info = values.info;
  const stOpts = values.options;

  function populateData(colorVarName) {
    const color = `var(${colorVarName})`;

    /**
     * appends the appropriate accent setting to each object
     * @param  {object} obj the object the settings will be applied to
     * @return {object}     the object passed in with a modified settings property
     */
    var populateSettings = function (obj) {
      var setting = stOpts[`accent${_.upperFirst(colorVarName)}`];
      obj.settings = obj.settings || [];
      obj.settings.push(setting);

      return obj;
    };

    var data = [

      {
        class: 'auto_complete_label',

        match_fg: color,
        selected_match_fg: color,
      },

      // Sidebar tree highlight
      {
        class: 'sidebar_label',

        parents: [

          {
            class: 'tree_row',
            attributes: ['expanded'],
          },

        ],

        color: color,
      },

      {
        class: 'sidebar_label',

        parents: [

          {
            class: 'tree_row',
            attributes: ['hover'],
          },

        ],

        color: color,
      },

      {
        class: 'sidebar_label',

        parents: [

          {
            class: 'tree_row',
            attributes: ['selected'],
          },

        ],

        color: color,
      },

      // Folder Default
      {
        class: 'icon_folder',

        'layer2.tint': color,
        'layer3.tint': color,
      },

      // Folder Symlink
      {
        class: 'icon_folder_dup',

        'layer1.tint': color,
        'layer2.tint': color,
      },

      // Tab Scroll Left
      {
        class: 'scroll_tabs_left_button',
        attributes: ['hover'],

        'layer0.tint': color,
      },

      // Tab Scroll Right
      {
        class: 'scroll_tabs_right_button',
        attributes: ['hover'],

        'layer0.tint': color,
      },

      // Code Folding Button
      // Hover
      {
        class: 'fold_button_control',
        attributes: ['hover'],

        'layer0.tint': color,
      },


      // Folded Hover
      {
        class: 'fold_button_control',
        attributes: ['expanded', 'hover'],

        'layer1.tint': color,
      },

      // Panel Labels
      {
        class: 'quick_panel_label',

        match_fg: color,
        selected_match_fg: color,
      },

      // Panels Sublabels
      {
        class: 'quick_panel_path_label',

        match_fg: color,
        selected_match_fg: color,
      },

      // Panels Match Score
      {
        class: 'quick_panel_score_label',

        selected_fg: color,
      },

      // List Tabs Button
      {
        class: 'show_tabs_dropdown_button',
        attributes: ['hover'],

        'layer0.tint': color,
      },

      // Input History Button
      {
        class: 'dropdown_button_control',
        attributes: ['hover'],

        'layer0.tint': color,
      },

      // Panel Switcher
      {
        class: 'panel_button_control',
        attributes: ['hover'],

        'layer0.tint': color,
      },

      // Regex Icon
      {
        class: 'icon_regex',

        parents: [

          {
            class: 'icon_button_control',
            attributes: ['selected'],
          },

        ],

        'layer0.tint': color,
      },

      // Preserve case sensitive
      {
        class: 'icon_case',

        parents: [

          {
            class: 'icon_button_control',
            attributes: ['selected'],
          },

        ],

        'layer0.tint': color,
      },

      // Wholeword
      {
        class: 'icon_whole_word',

        parents: [

          {
            class: 'icon_button_control',
            attributes: ['selected'],
          },

        ],

        'layer0.tint': color,
      },

      // Wrap
      {
        class: 'icon_wrap',

        parents: [

          {
            class: 'icon_button_control',
            attributes: ['selected'],
          },

        ],

        'layer0.tint': color,
      },

      // In Selection
      {
        class: 'icon_in_selection',

        parents: [

          {
            class: 'icon_button_control',
            attributes: ['selected'],
          },

        ],

        'layer0.tint': color,
      },

      // Highlight Result
      {
        class: 'icon_highlight',

        parents: [

          {
            class: 'icon_button_control',
            attributes: ['selected'],
          },

        ],

        'layer0.tint': color,
      },

      // Preserve Case
      {
        class: 'icon_preserve_case',

        parents: [

          {
            class: 'icon_button_control',
            attributes: ['selected'],
          },

        ],

        'layer0.tint': color,
      },

      // Show Context
      {
        class: 'icon_context',

        parents: [

          {
            class: 'icon_button_control',
            attributes: ['selected'],
          },

        ],

        'layer0.tint': color,
      },

      // Use Buffer
      {
        class: 'icon_use_buffer',

        parents: [

          {
            class: 'icon_button_control',
            attributes: ['selected'],
          },

        ],

        'layer0.tint': color,
      },

      // Status Bar Buttons
      {
        class: 'label_control',

        parents: [

          {
            class: 'status_button',
            attributes: ['hover'],
          },

        ],

        color: color,
      },

      // Colored Tooltips
      {
        class: 'tool_tip_control',
        settings: [stOpts.coloredTooltips],

        'layer0.tint': color,
      },

      {
        class: 'tool_tip_label_control',
        settings: [stOpts.coloredTooltips],

        color: '#ffffff',
      },

      /**
       * Underline Dirty Tabs
       */

      // Default Color
      {
        class: 'tab_control',
        settings: [stOpts.underlineDirtyTabs],
        attributes: ['dirty'],

        'layer2.tint': color,
      },

      /**
       * Underline Active Tab
       */

      // Default Color
      {
        class: 'tab_control',
        settings: [stOpts.underlineActiveTab],
        attributes: ['selected'],

        'layer2.tint': color,
      },

      /**
       * Sideline Selected Autocomplete Row
       */

      {
        class: 'table_row',
        settings: [stOpts.sidelineAutocompleteRow],

        'layer1.tint': color,
      },

      /**
       * Sideline Selected Command Palette Row
       */

      {
        class: 'mini_quick_panel_row',
        settings: [stOpts.sidelineCommandPaletteRow],

        'layer2.tint': color,
      },

    ];

    return data.map(populateSettings);
  }

  // Create data for each accent color
  var accentsData = [];
  _.forEach(c.accents, function (value, name) {
    accentsData.push(populateData(name));
  });

  return _.flatten(accentsData);
};
