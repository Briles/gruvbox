const _ = require('lodash');
const path = require('path');
const slash = require('../utils.js').slash;

module.exports = function (values) {
  'use strict';

  const c = values.colors;
  const info = values.info;
  const paths = values.paths;
  const stOpts = values.options;

  function populateData(colordata) {
    const name = colordata.name;
    const color = colordata.color;
    color.this = color[info.brightness];
    color.opposite = color[info.oppositeBrightness];

    var assets = {};
    assets.accent = [paths.assets, `accent-${name}/`];

    assets.this = [assets.accent, `${info.brightness}__`];
    assets.opposite = [assets.accent, `${info.oppositeBrightness}__`];
    assets.neutral = [assets.accent, 'neutral__'];

    assets = _.mapValues(assets, function (p) {
      return slash(path.join.apply(null, _.flattenDeep(p)));
    });

    var spacegray = {
      this: `${assets.this}spacegray__`,
      opposite: `${assets.opposite}spacegray__`,
      neutral: `${assets.neutral}spacegray__`,
    };

    /**
     * appends the appropriate accent setting to each object
     * @param  {object} obj the object the settings will be applied to
     * @return {object}     the object passed in with a modified settings property
     */
    var populateSettings = function (obj) {
      var setting = stOpts[`accent${_.upperFirst(name)}`];
      obj.settings = obj.settings || [];
      obj.settings.push(setting);

      return obj;
    };

    var data = [

      {
        class: 'auto_complete_label',

        match_fg: color.this,
        selected_match_fg: color.this,
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

        color: color.this,
      },

      {
        class: 'sidebar_label',

        parents: [

          {
            class: 'tree_row',
            attributes: ['hover'],
          },

        ],

        color: color.this,
      },

      {
        class: 'sidebar_label',

        parents: [

          {
            class: 'tree_row',
            attributes: ['selected'],
          },

        ],

        color: color.this,
      },

      // Folder Default
      {
        class: 'icon_folder',

        'layer2.texture': `${assets.this}folder__literal--hover.png`,
        'layer3.texture': `${assets.this}folder__literal--expanded.png`,
      },

      // Folder Symlink
      {
        class: 'icon_folder_dup',

        'layer1.texture': `${assets.this}folder__literal_dup--hover.png`,
        'layer2.texture': `${assets.this}folder__literal_dup--expanded.png`,
      },

      // Tab Scroll Left
      {
        class: 'scroll_tabs_left_button',

        'layer1.texture': `${assets.this}prevtab--hover.png`,
      },

      // Tab Scroll Right
      {
        class: 'scroll_tabs_right_button',

        'layer1.texture': `${assets.this}nexttab--hover.png`,
      },

      // Code Folding Button
      {
        class: 'fold_button_control',

        'layer1.texture': `${assets.this}fold--hover.png`,
        'layer3.texture': `${assets.this}unfold--hover.png`,
      },

      // Panel Labels
      {
        class: 'quick_panel_label',

        match_fg: color.this,
        selected_match_fg: color.this,
      },

      // Panels Sublabels
      {
        class: 'quick_panel_path_label',

        match_fg: color.this,
        selected_match_fg: color.this,
      },

      // Panels Match Score
      {
        class: 'quick_panel_score_label',

        selected_fg: color.this,
      },

      // List Tabs Button
      {
        class: 'show_tabs_dropdown_button',

        'layer1.texture': `${assets.this}more.png`,
      },

      // Input History Button
      {
        class: 'dropdown_button_control',

        'layer1.texture': `${assets.this}more.png`,
      },

      // Panel Switcher
      {
        class: 'panel_button_control',

        'layer1.texture': `${assets.this}panels.png`,
      },

      // Regex Icon
      {
        class: 'icon_regex',

        'layer2.texture': `${assets.this}regex.png`,
      },

      // Preserve case sensitive
      {
        class: 'icon_case',

        'layer2.texture': `${assets.this}casesensitive.png`,
      },

      // Wholeword
      {
        class: 'icon_whole_word',

        'layer2.texture': `${assets.this}wholeword.png`,
      },

      // Wrap
      {
        class: 'icon_wrap',

        'layer2.texture': `${assets.this}wrap.png`,
      },

      // In Selection
      {
        class: 'icon_in_selection',

        'layer2.texture': `${assets.this}inselection.png`,
      },

      // Highlight Result
      {
        class: 'icon_highlight',

        'layer2.texture': `${assets.this}highlight.png`,
      },

      // Preserve Case
      {
        class: 'icon_preserve_case',

        'layer2.texture': `${assets.this}preservecase.png`,
      },

      // Show Context
      {
        class: 'icon_context',

        'layer2.texture': `${assets.this}context.png`,
      },

      // Use Buffer
      {
        class: 'icon_use_buffer',

        'layer2.texture': `${assets.this}buffer.png`,
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

        color: color.this,
      },

      // Colored Tooltips
      {
        class: 'tool_tip_control',
        settings: [stOpts.coloredTooltips],

        'layer0.tint': color.this,
      },

      {
        class: 'tool_tip_label_control',
        settings: [stOpts.coloredTooltips],

        color: c.white,
      },

      /**
       * Spacegray Iconset
       */

      // Folder Icon
      {
        class: 'icon_folder',
        settings: [stOpts.iconsetSpacegray],

        'layer2.texture': `${spacegray.this}folder--hover.png`,
        'layer3.texture': `${spacegray.this}folder--expanded.png`,
      },

      // Symlinked Folder Icon
      {
        class: 'icon_folder_dup',
        settings: [stOpts.iconsetSpacegray],

        'layer1.texture': `${spacegray.this}folder_dup--hover.png`,
        'layer2.texture': `${spacegray.this}folder_dup--expanded.png`,
      },

      // Regex Icon
      {
        class: 'icon_regex',
        settings: [stOpts.iconsetSpacegray],

        'layer2.texture': `${spacegray.this}regex.png`,
      },

      // Case Sensitive
      {
        class: 'icon_case',
        settings: [stOpts.iconsetSpacegray],

        'layer2.texture': `${spacegray.this}casesensitive.png`,
      },

      // Wholeword
      {
        class: 'icon_whole_word',
        settings: [stOpts.iconsetSpacegray],

        'layer2.texture': `${spacegray.this}wholeword.png`,
      },

      // Wrap
      {
        class: 'icon_wrap',
        settings: [stOpts.iconsetSpacegray],

        'layer2.texture': `${spacegray.this}wrap.png`,
      },

      // In Selection
      {
        class: 'icon_in_selection',
        settings: [stOpts.iconsetSpacegray],

        'layer2.texture': `${spacegray.this}inselection.png`,
      },

      // Highlight Result
      {
        class: 'icon_highlight',
        settings: [stOpts.iconsetSpacegray],

        'layer2.texture': `${spacegray.this}highlight.png`,
      },

      // Preserve Case
      {
        class: 'icon_preserve_case',
        settings: [stOpts.iconsetSpacegray],

        'layer2.texture': `${spacegray.this}preservecase.png`,
      },

      // Show Context
      {
        class: 'icon_context',
        settings: [stOpts.iconsetSpacegray],

        'layer2.texture': `${spacegray.this}context.png`,
      },

      // Use Buffer
      {
        class: 'icon_use_buffer',
        settings: [stOpts.iconsetSpacegray],

        'layer2.texture': `${spacegray.this}buffer.png`,
      },

      // Input History Button
      {
        class: 'dropdown_button_control',
        settings: [stOpts.iconsetSpacegray],

        'layer1.texture': `${spacegray.this}more.png`,
      },

      // Panel Switcher
      {
        class: 'panel_button_control',
        settings: [stOpts.iconsetSpacegray],

        attributes: ['hover'],

        'layer0.texture': `${spacegray.this}panels.png`,
      },

      /**
       * Use Opposite Colors
       */

      {
        class: 'auto_complete_label',
        settings: [stOpts.accentOpposite],

        match_fg: color.opposite,
        selected_match_fg: color.opposite,
      },

      // Sidebar tree highlight
      {
        class: 'sidebar_label',
        settings: [stOpts.accentOpposite],
        parents: [

          {
            class: 'tree_row',
            attributes: ['expanded'],
          },

        ],

        color: color.opposite,
      },

      {
        class: 'sidebar_label',
        settings: [stOpts.accentOpposite],
        parents: [

          {
            class: 'tree_row',
            attributes: ['hover'],
          },

        ],

        color: color.opposite,
      },

      {
        class: 'sidebar_label',
        settings: [stOpts.accentOpposite],
        parents: [

          {
            class: 'tree_row',
            attributes: ['selected'],
          },

        ],

        color: color.opposite,
      },

      {
        class: 'icon_folder',
        settings: [stOpts.accentOpposite],

        'layer2.texture': `${assets.opposite}folder__literal--hover.png`,
        'layer3.texture': `${assets.opposite}folder__literal--expanded.png`,
      },

      // Folder Symlink
      {
        class: 'icon_folder_dup',
        settings: [stOpts.accentOpposite],

        'layer1.texture': `${assets.opposite}folder__literal_dup--hover.png`,
        'layer2.texture': `${assets.opposite}folder__literal_dup--expanded.png`,
      },

      // Tab Scroll Left
      {
        class: 'scroll_tabs_left_button',
        settings: [stOpts.accentOpposite],

        'layer1.texture': `${assets.opposite}prevtab--hover.png`,
      },

      // Tab Scroll Right
      {
        class: 'scroll_tabs_right_button',
        settings: [stOpts.accentOpposite],

        'layer1.texture': `${assets.opposite}nexttab--hover.png`,
      },

      // Code Folding Button
      {
        class: 'fold_button_control',
        settings: [stOpts.accentOpposite],

        'layer1.texture': `${assets.opposite}fold--hover.png`,
        'layer3.texture': `${assets.opposite}unfold--hover.png`,
      },

      // Panel Labels
      {
        class: 'quick_panel_label',
        settings: [stOpts.accentOpposite],

        match_fg: color.opposite,
        selected_match_fg: color.opposite,
      },

      // Panel Labels
      {
        class: 'quick_panel_label',
        settings: [stOpts.accentOpposite],
        parents: [

          {
            class: 'overlay_control',
          },

        ],

        match_fg: color.opposite,
        selected_match_fg: color.opposite,
      },

      // Panels Sublabels
      {
        class: 'quick_panel_path_label',
        settings: [stOpts.accentOpposite],

        match_fg: color.opposite,
        selected_match_fg: color.opposite,
      },

      // Panels Match Score
      {
        class: 'quick_panel_score_label',
        settings: [stOpts.accentOpposite],

        selected_fg: color.opposite,
      },

      // List Tabs Button
      {
        class: 'show_tabs_dropdown_button',
        settings: [stOpts.accentOpposite],

        'layer1.texture': `${assets.opposite}more.png`,
      },

      // Input History Button
      {
        class: 'dropdown_button_control',
        settings: [stOpts.accentOpposite],

        'layer1.texture': `${assets.opposite}more.png`,
      },

      // Panel Switcher
      {
        class: 'panel_button_control',
        settings: [stOpts.accentOpposite],

        'layer1.texture': `${assets.opposite}panels.png`,
      },

      // Regex Icon
      {
        class: 'icon_regex',
        settings: [stOpts.accentOpposite],

        'layer2.texture': `${assets.opposite}regex.png`,
      },

      // Preserve case sensitive
      {
        class: 'icon_case',
        settings: [stOpts.accentOpposite],

        'layer2.texture': `${assets.opposite}casesensitive.png`,
      },

      // Wholeword
      {
        class: 'icon_whole_word',
        settings: [stOpts.accentOpposite],

        'layer2.texture': `${assets.opposite}wholeword.png`,
      },

      // Wrap
      {
        class: 'icon_wrap',
        settings: [stOpts.accentOpposite],

        'layer2.texture': `${assets.opposite}wrap.png`,
      },

      // In Selection
      {
        class: 'icon_in_selection',
        settings: [stOpts.accentOpposite],

        'layer2.texture': `${assets.opposite}inselection.png`,
      },

      // Highlight Result
      {
        class: 'icon_highlight',
        settings: [stOpts.accentOpposite],

        'layer2.texture': `${assets.opposite}highlight.png`,
      },

      // Preserve Case
      {
        class: 'icon_preserve_case',
        settings: [stOpts.accentOpposite],

        'layer2.texture': `${assets.opposite}preservecase.png`,
      },

      // Show Context
      {
        class: 'icon_context',
        settings: [stOpts.accentOpposite],

        'layer2.texture': `${assets.opposite}context.png`,
      },

      // Use Buffer
      {
        class: 'icon_use_buffer',
        settings: [stOpts.accentOpposite],

        'layer2.texture': `${assets.opposite}buffer.png`,
      },

      /**
       * Spacegray Iconset
       */

      // Folder Icon
      {
        class: 'icon_folder',
        settings: [stOpts.iconsetSpacegray, stOpts.accentOpposite],

        'layer2.texture': `${spacegray.opposite}folder--hover.png`,
        'layer3.texture': `${spacegray.opposite}folder--expanded.png`,
      },

      // Symlinked Folder Icon
      {
        class: 'icon_folder_dup',
        settings: [stOpts.iconsetSpacegray, stOpts.accentOpposite],

        'layer1.texture': `${spacegray.opposite}folder_dup--hover.png`,
        'layer2.texture': `${spacegray.opposite}folder_dup--expanded.png`,
      },

      // Regex Icon
      {
        class: 'icon_regex',
        settings: [stOpts.iconsetSpacegray, stOpts.accentOpposite],

        'layer2.texture': `${spacegray.opposite}regex.png`,
      },

      // Case Sensitive
      {
        class: 'icon_case',
        settings: [stOpts.iconsetSpacegray, stOpts.accentOpposite],

        'layer2.texture': `${spacegray.opposite}casesensitive.png`,
      },

      // Wholeword
      {
        class: 'icon_whole_word',
        settings: [stOpts.iconsetSpacegray, stOpts.accentOpposite],

        'layer2.texture': `${spacegray.opposite}wholeword.png`,
      },

      // Wrap
      {
        class: 'icon_wrap',
        settings: [stOpts.iconsetSpacegray, stOpts.accentOpposite],

        'layer2.texture': `${spacegray.opposite}wrap.png`,
      },

      // In Selection
      {
        class: 'icon_in_selection',
        settings: [stOpts.iconsetSpacegray, stOpts.accentOpposite],

        'layer2.texture': `${spacegray.opposite}inselection.png`,
      },

      // Highlight Result
      {
        class: 'icon_highlight',
        settings: [stOpts.iconsetSpacegray, stOpts.accentOpposite],

        'layer2.texture': `${spacegray.opposite}highlight.png`,
      },

      // Preserve Case
      {
        class: 'icon_preserve_case',
        settings: [stOpts.iconsetSpacegray, stOpts.accentOpposite],

        'layer2.texture': `${spacegray.opposite}preservecase.png`,
      },

      // Show Context
      {
        class: 'icon_context',
        settings: [stOpts.iconsetSpacegray, stOpts.accentOpposite],

        'layer2.texture': `${spacegray.opposite}context.png`,
      },

      // Use Buffer
      {
        class: 'icon_use_buffer',
        settings: [stOpts.iconsetSpacegray, stOpts.accentOpposite],

        'layer2.texture': `${spacegray.opposite}buffer.png`,
      },

      // Input History Button
      {
        class: 'dropdown_button_control',
        settings: [stOpts.iconsetSpacegray, stOpts.accentOpposite],

        'layer1.texture': `${spacegray.opposite}more.png`,
      },

      // Panel Switcher
      {
        class: 'panel_button_control',
        settings: [stOpts.iconsetSpacegray, stOpts.accentOpposite],
        attributes: ['hover'],

        'layer0.texture': `${spacegray.opposite}panels.png`,
      },

      // Status Bar Buttons
      {
        class: 'label_control',
        settings: [stOpts.accentOpposite],
        parents: [

          {
            class: 'status_button',
            attributes: ['hover'],
          },

        ],

        color: color.opposite,
      },

      // Colored Tooltips
      {
        class: 'tool_tip_control',
        settings: [stOpts.coloredTooltips, stOpts.accentOpposite],

        'layer0.tint': color.opposite,
      },

      /**
       * Neutral Accents
       */

      {
        class: 'auto_complete_label',
        settings: [stOpts.accentNeutral],

        match_fg: color.neutral,
        selected_match_fg: color.neutral,
      },

      // Sidebar tree highlight
      {
        class: 'sidebar_label',
        settings: [stOpts.accentNeutral],

        parents: [

          {
            class: 'tree_row',
            attributes: ['expanded'],
          },

        ],

        color: color.neutral,
      },

      {
        class: 'sidebar_label',
        settings: [stOpts.accentNeutral],

        parents: [

          {
            class: 'tree_row',
            attributes: ['hover'],
          },

        ],

        color: color.neutral,
      },

      {
        class: 'sidebar_label',
        settings: [stOpts.accentNeutral],

        parents: [

          {
            class: 'tree_row',
            attributes: ['selected'],
          },

        ],

        color: color.neutral,
      },

      {
        class: 'icon_folder',
        settings: [stOpts.accentNeutral],

        'layer2.texture': `${assets.neutral}folder__literal--hover.png`,
        'layer3.texture': `${assets.neutral}folder__literal--expanded.png`,
      },

      // Folder Symlink
      {
        class: 'icon_folder_dup',
        settings: [stOpts.accentNeutral],

        'layer1.texture': `${assets.neutral}folder__literal_dup--hover.png`,
        'layer2.texture': `${assets.neutral}folder__literal_dup--expanded.png`,
      },

      // Tab Scroll Left
      {
        class: 'scroll_tabs_left_button',
        settings: [stOpts.accentNeutral],

        'layer1.texture': `${assets.neutral}prevtab--hover.png`,
      },

      // Tab Scroll Right
      {
        class: 'scroll_tabs_right_button',
        settings: [stOpts.accentNeutral],

        'layer1.texture': `${assets.neutral}nexttab--hover.png`,
      },

      // Code Folding Button
      {
        class: 'fold_button_control',
        settings: [stOpts.accentNeutral],

        'layer1.texture': `${assets.neutral}fold--hover.png`,
        'layer3.texture': `${assets.neutral}unfold--hover.png`,
      },

      // Panel Labels
      {
        class: 'quick_panel_label',
        settings: [stOpts.accentNeutral],

        match_fg: color.neutral,
        selected_match_fg: color.neutral,
      },

      // Panel Labels
      {
        class: 'quick_panel_label',
        settings: [stOpts.accentNeutral],

        parents: [

          {
            class: 'overlay_control',
          },

        ],

        match_fg: color.neutral,
        selected_match_fg: color.neutral,
      },

      // Panels Sublabels
      {
        class: 'quick_panel_path_label',
        settings: [stOpts.accentNeutral],

        match_fg: color.neutral,
        selected_match_fg: color.neutral,
      },

      // Panels Match Score
      {
        class: 'quick_panel_score_label',
        settings: [stOpts.accentNeutral],

        selected_fg: color.neutral,
      },

      // List Tabs Button
      {
        class: 'show_tabs_dropdown_button',
        settings: [stOpts.accentNeutral],

        'layer1.texture': `${assets.neutral}more.png`,
      },

      // Input History Button
      {
        class: 'dropdown_button_control',
        settings: [stOpts.accentNeutral],

        'layer1.texture': `${assets.neutral}more.png`,
      },

      // Panel Switcher
      {
        class: 'panel_button_control',
        settings: [stOpts.accentNeutral],

        'layer1.texture': `${assets.neutral}panels.png`,
      },

      // Regex Icon
      {
        class: 'icon_regex',
        settings: [stOpts.accentNeutral],

        'layer2.texture': `${assets.neutral}regex.png`,
      },

      // Preserve case sensitive
      {
        class: 'icon_case',
        settings: [stOpts.accentNeutral],

        'layer2.texture': `${assets.neutral}casesensitive.png`,
      },

      // Wholeword
      {
        class: 'icon_whole_word',
        settings: [stOpts.accentNeutral],

        'layer2.texture': `${assets.neutral}wholeword.png`,
      },

      // Wrap
      {
        class: 'icon_wrap',
        settings: [stOpts.accentNeutral],

        'layer2.texture': `${assets.neutral}wrap.png`,
      },

      // In Selection
      {
        class: 'icon_in_selection',
        settings: [stOpts.accentNeutral],

        'layer2.texture': `${assets.neutral}inselection.png`,
      },

      // Highlight Result
      {
        class: 'icon_highlight',
        settings: [stOpts.accentNeutral],

        'layer2.texture': `${assets.neutral}highlight.png`,
      },

      // Preserve Case
      {
        class: 'icon_preserve_case',
        settings: [stOpts.accentNeutral],

        'layer2.texture': `${assets.neutral}preservecase.png`,
      },

      // Show Context
      {
        class: 'icon_context',
        settings: [stOpts.accentNeutral],

        'layer2.texture': `${assets.neutral}context.png`,
      },

      // Use Buffer
      {
        class: 'icon_use_buffer',
        settings: [stOpts.accentNeutral],

        'layer2.texture': `${assets.neutral}buffer.png`,
      },

      /**
       * Spacegray Iconset
       */

      // Folder Icon
      {
        class: 'icon_folder',
        settings: [stOpts.iconsetSpacegray, stOpts.accentNeutral],

        'layer2.texture': `${spacegray.neutral}folder--hover.png`,
        'layer3.texture': `${spacegray.neutral}folder--expanded.png`,
      },

      // Symlinked Folder Icon
      {
        class: 'icon_folder_dup',
        settings: [stOpts.iconsetSpacegray, stOpts.accentNeutral],

        'layer1.texture': `${spacegray.neutral}folder_dup--hover.png`,
        'layer2.texture': `${spacegray.neutral}folder_dup--expanded.png`,
      },

      // Regex Icon
      {
        class: 'icon_regex',
        settings: [stOpts.iconsetSpacegray, stOpts.accentNeutral],

        'layer2.texture': `${spacegray.neutral}regex.png`,
      },

      // Case Sensitive
      {
        class: 'icon_case',
        settings: [stOpts.iconsetSpacegray, stOpts.accentNeutral],

        'layer2.texture': `${spacegray.neutral}casesensitive.png`,
      },

      // Wholeword
      {
        class: 'icon_whole_word',
        settings: [stOpts.iconsetSpacegray, stOpts.accentNeutral],

        'layer2.texture': `${spacegray.neutral}wholeword.png`,
      },

      // Wrap
      {
        class: 'icon_wrap',
        settings: [stOpts.iconsetSpacegray, stOpts.accentNeutral],

        'layer2.texture': `${spacegray.neutral}wrap.png`,
      },

      // In Selection
      {
        class: 'icon_in_selection',
        settings: [stOpts.iconsetSpacegray, stOpts.accentNeutral],

        'layer2.texture': `${spacegray.neutral}inselection.png`,
      },

      // Highlight Result
      {
        class: 'icon_highlight',
        settings: [stOpts.iconsetSpacegray, stOpts.accentNeutral],

        'layer2.texture': `${spacegray.neutral}highlight.png`,
      },

      // Preserve Case
      {
        class: 'icon_preserve_case',
        settings: [stOpts.iconsetSpacegray, stOpts.accentNeutral],

        'layer2.texture': `${spacegray.neutral}preservecase.png`,
      },

      // Show Context
      {
        class: 'icon_context',
        settings: [stOpts.iconsetSpacegray, stOpts.accentNeutral],

        'layer2.texture': `${spacegray.neutral}context.png`,
      },

      // Use Buffer
      {
        class: 'icon_use_buffer',
        settings: [stOpts.iconsetSpacegray, stOpts.accentNeutral],

        'layer2.texture': `${spacegray.neutral}buffer.png`,
      },

      // Input History Button
      {
        class: 'dropdown_button_control',
        settings: [stOpts.iconsetSpacegray, stOpts.accentNeutral],

        'layer1.texture': `${spacegray.neutral}more.png`,
      },

      // Panel Switcher
      {
        class: 'panel_button_control',
        settings: [stOpts.iconsetSpacegray, stOpts.accentNeutral],
        attributes: ['hover'],

        'layer0.texture': `${spacegray.neutral}panels.png`,
      },

      // Status Bar Buttons
      {
        class: 'label_control',
        settings: [stOpts.accentNeutral],
        parents: [

          {
            class: 'status_button',
            attributes: ['hover'],
          },

        ],

        color: color.neutral,
      },

      // Colored Tooltips
      {
        class: 'tool_tip_control',
        settings: [stOpts.coloredTooltips, stOpts.accentNeutral],

        'layer0.tint': color.neutral,
      },

      /**
       * Square Folder Icons
       */

      {
        class: 'icon_folder',
        settings: [stOpts.enableSquareFolderIcons],

        'layer2.texture': `${assets.this}folder__square--expanded.png`,
        'layer3.texture': `${assets.this}folder__square--expanded.png`,
      },

      // Symlinked
      {
        class: 'icon_folder_dup',
        settings: [stOpts.enableSquareFolderIcons],

        'layer1.texture': `${assets.this}folder__square_dup--expanded.png`,
        'layer2.texture': `${assets.this}folder__square_dup--expanded.png`,
      },

      /**
       * Circle Folder Icons
       */

      {
        class: 'icon_folder',
        settings: [stOpts.enableCircleFolderIcons],

        'layer2.texture': `${assets.this}folder--expanded.png`,
        'layer3.texture': `${assets.this}folder--expanded.png`,
      },

      // Symlinked
      {
        class: 'icon_folder_dup',
        settings: [stOpts.enableCircleFolderIcons],

        'layer1.texture': `${assets.this}folder_dup--expanded.png`,
        'layer2.texture': `${assets.this}folder_dup--expanded.png`,
      },

      /**
       * Plus Minus Folder Icons
       */

      {
        class: 'icon_folder',
        settings: [stOpts.enablePlusMinusFolderIcons],

        'layer2.texture': `${assets.this}folder__plus_minus--hover.png`,
        'layer3.texture': `${assets.this}folder__plus_minus--expanded.png`,
      },

      // Symlinked
      {
        class: 'icon_folder_dup',
        settings: [stOpts.enablePlusMinusFolderIcons],

        'layer1.texture': `${assets.this}folder__plus_minus_dup--hover.png`,
        'layer2.texture': `${assets.this}folder__plus_minus_dup--expanded.png`,
      },

      /**
       * Spacegray Folder Icons
       */

      {
        class: 'icon_folder',
        settings: [stOpts.enableSpacegrayFolderIcons],

        'layer2.texture': `${spacegray.this}folder--hover.png`,
        'layer3.texture': `${spacegray.this}folder--expanded.png`,
      },

      // Symlinked Folder Icon
      {
        class: 'icon_folder_dup',
        settings: [stOpts.enableSpacegrayFolderIcons],

        'layer1.texture': `${spacegray.this}folder_dup--hover.png`,
        'layer2.texture': `${spacegray.this}folder_dup--expanded.png`,
      },

      /**
       * Opposite Colors
       */

      /**
       * Square Folder Icons
       */

      {
        class: 'icon_folder',
        settings: [stOpts.enableSquareFolderIcons, stOpts.accentOpposite],

        'layer2.texture': `${assets.opposite}folder__square--expanded.png`,
        'layer3.texture': `${assets.opposite}folder__square--expanded.png`,
      },

      // Symlinked
      {
        class: 'icon_folder_dup',
        settings: [stOpts.enableSquareFolderIcons, stOpts.accentOpposite],

        'layer1.texture': `${assets.opposite}folder__square_dup--expanded.png`,
        'layer2.texture': `${assets.opposite}folder__square_dup--expanded.png`,
      },

      /**
       * Circle Folder Icons
       */

      {
        class: 'icon_folder',
        settings: [stOpts.enableCircleFolderIcons, stOpts.accentOpposite],

        'layer2.texture': `${assets.opposite}folder--expanded.png`,
        'layer3.texture': `${assets.opposite}folder--expanded.png`,
      },

      // Symlinked
      {
        class: 'icon_folder_dup',
        settings: [stOpts.enableCircleFolderIcons, stOpts.accentOpposite],

        'layer1.texture': `${assets.opposite}folder_dup--expanded.png`,
        'layer2.texture': `${assets.opposite}folder_dup--expanded.png`,
      },

      /**
       * Plus Minus Folder Icons
       */

      {
        class: 'icon_folder',
        settings: [stOpts.enablePlusMinusFolderIcons, stOpts.accentOpposite],

        'layer2.texture': `${assets.opposite}folder__plus_minus--hover.png`,
        'layer3.texture': `${assets.opposite}folder__plus_minus--expanded.png`,
      },

      // Symlinked
      {
        class: 'icon_folder_dup',
        settings: [stOpts.enablePlusMinusFolderIcons, stOpts.accentOpposite],

        'layer1.texture': `${assets.opposite}folder__plus_minus_dup--hover.png`,
        'layer2.texture': `${assets.opposite}folder__plus_minus_dup--expanded.png`,
      },

      /**
       * Spacegray Folder Icons
       */

      {
        class: 'icon_folder',
        settings: [stOpts.enableSpacegrayFolderIcons, stOpts.accentOpposite],

        'layer2.texture': `${spacegray.opposite}folder--hover.png`,
        'layer3.texture': `${spacegray.opposite}folder--expanded.png`,
      },

      // Symlinked Folder Icon
      {
        class: 'icon_folder_dup',
        settings: [stOpts.enableSpacegrayFolderIcons, stOpts.accentOpposite],

        'layer1.texture': `${spacegray.opposite}folder_dup--hover.png`,
        'layer2.texture': `${spacegray.opposite}folder_dup--expanded.png`,
      },

      /**
       * Neutral Colors
       */

      /**
       * Square Folder Icons
       */

      {
        class: 'icon_folder',
        settings: [stOpts.enableSquareFolderIcons, stOpts.accentNeutral],

        'layer2.texture': `${assets.neutral}folder__square--expanded.png`,
        'layer3.texture': `${assets.neutral}folder__square--expanded.png`,
      },

      // Symlinked
      {
        class: 'icon_folder_dup',
        settings: [stOpts.enableSquareFolderIcons, stOpts.accentNeutral],

        'layer1.texture': `${assets.neutral}folder__square_dup--expanded.png`,
        'layer2.texture': `${assets.neutral}folder__square_dup--expanded.png`,
      },

      /**
       * Circle Folder Icons
       */

      {
        class: 'icon_folder',
        settings: [stOpts.enableCircleFolderIcons, stOpts.accentNeutral],

        'layer2.texture': `${assets.neutral}folder--expanded.png`,
        'layer3.texture': `${assets.neutral}folder--expanded.png`,
      },

      // Symlinked
      {
        class: 'icon_folder_dup',
        settings: [stOpts.enableCircleFolderIcons, stOpts.accentNeutral],

        'layer1.texture': `${assets.neutral}folder_dup--expanded.png`,
        'layer2.texture': `${assets.neutral}folder_dup--expanded.png`,
      },

      /**
       * Plus Minus Folder Icons
       */

      {
        class: 'icon_folder',
        settings: [stOpts.enablePlusMinusFolderIcons, stOpts.accentNeutral],

        'layer2.texture': `${assets.neutral}folder__plus_minus--hover.png`,
        'layer3.texture': `${assets.neutral}folder__plus_minus--expanded.png`,
      },

      // Symlinked
      {
        class: 'icon_folder_dup',
        settings: [stOpts.enablePlusMinusFolderIcons, stOpts.accentNeutral],

        'layer1.texture': `${assets.neutral}folder__plus_minus_dup--hover.png`,
        'layer2.texture': `${assets.neutral}folder__plus_minus_dup--expanded.png`,
      },

      /**
       * Spacegray Folder Icons
       */

      {
        class: 'icon_folder',
        settings: [stOpts.enableSpacegrayFolderIcons, stOpts.accentNeutral],

        'layer2.texture': `${spacegray.neutral}folder--hover.png`,
        'layer3.texture': `${spacegray.neutral}folder--expanded.png`,
      },

      // Symlinked Folder Icon
      {
        class: 'icon_folder_dup',
        settings: [stOpts.enableSpacegrayFolderIcons, stOpts.accentNeutral],

        'layer1.texture': `${spacegray.neutral}folder_dup--hover.png`,
        'layer2.texture': `${spacegray.neutral}folder_dup--expanded.png`,
      },

      /**
       * Underline Dirty Tabs
       */

      // Default Color
      {
        class: 'tab_control',
        settings: [stOpts.underlineDirtyTabs],
        attributes: ['dirty'],

        'layer2.tint': color.this,
      },

      // Opposite Color
      {
        class: 'tab_control',
        settings: [stOpts.underlineDirtyTabs, stOpts.accentOpposite],
        attributes: ['dirty'],

        'layer2.tint': color.opposite,
      },

      // Neutral Color
      {
        class: 'tab_control',
        settings: [stOpts.underlineDirtyTabs, stOpts.accentNeutral],
        attributes: ['dirty'],

        'layer2.tint': color.neutral,
      },

      /**
       * Sideline Selected Autocomplete Row
       */

      {
        class: 'table_row',
        settings: [stOpts.sidelineAutocompleteRow],

        'layer1.tint': color.this,
      },

      {
        class: 'table_row',
        settings: [stOpts.sidelineAutocompleteRow, stOpts.accentOpposite],

        'layer1.tint': color.opposite,
      },

      {
        class: 'table_row',
        settings: [stOpts.sidelineAutocompleteRow, stOpts.accentNeutral],

        'layer1.tint': color.neutral,
      },

      /**
       * Sideline Selected Command Palette Row
       */

      {
        class: 'mini_quick_panel_row',
        settings: [stOpts.sidelineCommandPaletteRow],

        'layer2.tint': color.this,
      },

      {
        class: 'mini_quick_panel_row',
        settings: [stOpts.sidelineCommandPaletteRow, stOpts.accentOpposite],

        'layer2.tint': color.opposite,
      },

      {
        class: 'mini_quick_panel_row',
        settings: [stOpts.sidelineCommandPaletteRow, stOpts.accentNeutral],

        'layer2.tint': color.neutral,
      },

    ];

    return data.map(populateSettings);
  }

  // Create data for each accent color
  var accentsData = [];
  _.forEach(c.accents, function (value, name) {

    var data = populateData({
      name: name,
      color: value,
    });
    accentsData.push(data);
  });

  return _.flatten(accentsData);
};
