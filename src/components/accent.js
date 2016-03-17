const _ = require('lodash');
const utils = require('../utils.js');

module.exports = function (values) {
  'use strict';

  const c = values.colors;
  const info = values.info;
  const paths = values.paths;
  const stOpts = values.options;

  function populateData(colordata) {
    const name = colordata.name;
    const color = colordata.color;
    const assets = utils.slashJoin(paths.assets, `accent-${name}/`);

    const brightnessAssets = utils.slashJoin(assets, `${info.brightness}__`);
    const spacegrayPath = `${brightnessAssets}spacegray__`;

    const oppositeBrightnessAssets = utils.slashJoin(assets, `${info.oppositeBrightness}__`);
    const oppositeSpacegrayPath = `${oppositeBrightnessAssets}spacegray__`;

    const neutralAssets = utils.slashJoin(assets, 'neutral__');
    const neutralSpacegrayPath = `${neutralAssets}spacegray__`;

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

        match_fg: color[info.brightness],
        selected_match_fg: color[info.brightness],
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

        color: color[info.brightness],
      },

      {
        class: 'sidebar_label',

        parents: [

          {
            class: 'tree_row',
            attributes: ['hover'],
          },

        ],

        color: color[info.brightness],
      },

      {
        class: 'sidebar_label',

        parents: [

          {
            class: 'tree_row',
            attributes: ['selected'],
          },

        ],

        color: color[info.brightness],
      },

      {
        class: 'icon_folder',

        'layer2.texture': `${brightnessAssets}folder--expanded.png`,
        'layer3.texture': `${brightnessAssets}folder--expanded.png`,
      },

      // Folder Symlink
      {
        class: 'icon_folder_dup',

        'layer1.texture': `${brightnessAssets}folder_dup--expanded.png`,
        'layer2.texture': `${brightnessAssets}folder_dup--expanded.png`,
      },

      // Tab Scroll Left
      {
        class: 'scroll_tabs_left_button',

        'layer1.texture': `${brightnessAssets}prevtab--hover.png`,
      },

      // Tab Scroll Right
      {
        class: 'scroll_tabs_right_button',

        'layer1.texture': `${brightnessAssets}nexttab--hover.png`,
      },

      // Code Folding Button
      {
        class: 'fold_button_control',

        'layer1.texture': `${brightnessAssets}fold--hover.png`,
        'layer3.texture': `${brightnessAssets}unfold--hover.png`,
      },

      // Panel Labels
      {
        class: 'quick_panel_label',

        match_fg: color[info.brightness],
        selected_match_fg: color[info.brightness],
      },

      // Panels Sublabels
      {
        class: 'quick_panel_path_label',

        match_fg: color[info.brightness],
        selected_match_fg: color[info.brightness],
      },

      // Panels Match Score
      {
        class: 'quick_panel_score_label',

        selected_fg: color[info.brightness],
      },

      // List Tabs Button
      {
        class: 'show_tabs_dropdown_button',

        'layer1.texture': `${brightnessAssets}more.png`,
      },

      // Input History Button
      {
        class: 'dropdown_button_control',

        'layer1.texture': `${brightnessAssets}more.png`,
      },

      // Panel Switcher
      {
        class: 'panel_button_control',

        'layer1.texture': `${brightnessAssets}panels.png`,
      },

      // Regex Icon
      {
        class: 'icon_regex',

        'layer2.texture': `${brightnessAssets}regex.png`,
      },

      // Preserve case sensitive
      {
        class: 'icon_case',

        'layer2.texture': `${brightnessAssets}casesensitive.png`,
      },

      // Wholeword
      {
        class: 'icon_whole_word',

        'layer2.texture': `${brightnessAssets}wholeword.png`,
      },

      // Wrap
      {
        class: 'icon_wrap',

        'layer2.texture': `${brightnessAssets}wrap.png`,
      },

      // In Selection
      {
        class: 'icon_in_selection',

        'layer2.texture': `${brightnessAssets}inselection.png`,
      },

      // Highlight Result
      {
        class: 'icon_highlight',

        'layer2.texture': `${brightnessAssets}highlight.png`,
      },

      // Preserve Case
      {
        class: 'icon_preserve_case',

        'layer2.texture': `${brightnessAssets}preservecase.png`,
      },

      // Show Context
      {
        class: 'icon_context',

        'layer2.texture': `${brightnessAssets}context.png`,
      },

      // Use Buffer
      {
        class: 'icon_use_buffer',

        'layer2.texture': `${brightnessAssets}buffer.png`,
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

        color: color[info.brightness],
      },

      // Colored Tooltips
      {
        class: 'tool_tip_control',
        settings: [stOpts.coloredTooltips],

        'layer0.tint': color[info.brightness],
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

        'layer2.texture': `${spacegrayPath}folder--hover.png`,
        'layer3.texture': `${spacegrayPath}folder--expanded.png`,
      },

      // Symlinked Folder Icon
      {
        class: 'icon_folder_dup',
        settings: [stOpts.iconsetSpacegray],

        'layer1.texture': `${spacegrayPath}folder_dup--hover.png`,
        'layer2.texture': `${spacegrayPath}folder_dup--expanded.png`,
      },

      // Regex Icon
      {
        class: 'icon_regex',
        settings: [stOpts.iconsetSpacegray],

        'layer2.texture': `${spacegrayPath}regex.png`,
      },

      // Case Sensitive
      {
        class: 'icon_case',
        settings: [stOpts.iconsetSpacegray],

        'layer2.texture': `${spacegrayPath}casesensitive.png`,
      },

      // Wholeword
      {
        class: 'icon_whole_word',
        settings: [stOpts.iconsetSpacegray],

        'layer2.texture': `${spacegrayPath}wholeword.png`,
      },

      // Wrap
      {
        class: 'icon_wrap',
        settings: [stOpts.iconsetSpacegray],

        'layer2.texture': `${spacegrayPath}wrap.png`,
      },

      // In Selection
      {
        class: 'icon_in_selection',
        settings: [stOpts.iconsetSpacegray],

        'layer2.texture': `${spacegrayPath}inselection.png`,
      },

      // Highlight Result
      {
        class: 'icon_highlight',
        settings: [stOpts.iconsetSpacegray],

        'layer2.texture': `${spacegrayPath}highlight.png`,
      },

      // Preserve Case
      {
        class: 'icon_preserve_case',
        settings: [stOpts.iconsetSpacegray],

        'layer2.texture': `${spacegrayPath}preservecase.png`,
      },

      // Show Context
      {
        class: 'icon_context',
        settings: [stOpts.iconsetSpacegray],

        'layer2.texture': `${spacegrayPath}context.png`,
      },

      // Use Buffer
      {
        class: 'icon_use_buffer',
        settings: [stOpts.iconsetSpacegray],

        'layer2.texture': `${spacegrayPath}buffer.png`,
      },

      // Input History Button
      {
        class: 'dropdown_button_control',
        settings: [stOpts.iconsetSpacegray],

        'layer1.texture': `${spacegrayPath}more.png`,
      },

      // Panel Switcher
      {
        class: 'panel_button_control',
        settings: [stOpts.iconsetSpacegray],

        attributes: ['hover'],

        'layer0.texture': `${spacegrayPath}panels.png`,
      },

      /**
       * Use Opposite Colors
       */

      {
        class: 'auto_complete_label',
        settings: [stOpts.accentOpposite],

        match_fg: color[info.oppositeBrightness],
        selected_match_fg: color[info.oppositeBrightness],
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

        color: color[info.oppositeBrightness],
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

        color: color[info.oppositeBrightness],
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

        color: color[info.oppositeBrightness],
      },

      {
        class: 'icon_folder',
        settings: [stOpts.accentOpposite],

        'layer2.texture': `${oppositeBrightnessAssets}folder--expanded.png`,
        'layer3.texture': `${oppositeBrightnessAssets}folder--expanded.png`,
      },

      // Folder Symlink
      {
        class: 'icon_folder_dup',
        settings: [stOpts.accentOpposite],

        'layer1.texture': `${oppositeBrightnessAssets}folder_dup--expanded.png`,
        'layer2.texture': `${oppositeBrightnessAssets}folder_dup--expanded.png`,
      },

      // Tab Scroll Left
      {
        class: 'scroll_tabs_left_button',
        settings: [stOpts.accentOpposite],

        'layer1.texture': `${oppositeBrightnessAssets}prevtab--hover.png`,
      },

      // Tab Scroll Right
      {
        class: 'scroll_tabs_right_button',
        settings: [stOpts.accentOpposite],

        'layer1.texture': `${oppositeBrightnessAssets}nexttab--hover.png`,
      },

      // Code Folding Button
      {
        class: 'fold_button_control',
        settings: [stOpts.accentOpposite],

        'layer1.texture': `${oppositeBrightnessAssets}fold--hover.png`,
        'layer3.texture': `${oppositeBrightnessAssets}unfold--hover.png`,
      },

      // Panel Labels
      {
        class: 'quick_panel_label',
        settings: [stOpts.accentOpposite],

        match_fg: color[info.oppositeBrightness],
        selected_match_fg: color[info.oppositeBrightness],
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

        match_fg: color[info.oppositeBrightness],
        selected_match_fg: color[info.oppositeBrightness],
      },

      // Panels Sublabels
      {
        class: 'quick_panel_path_label',
        settings: [stOpts.accentOpposite],

        match_fg: color[info.oppositeBrightness],
        selected_match_fg: color[info.oppositeBrightness],
      },

      // Panels Match Score
      {
        class: 'quick_panel_score_label',
        settings: [stOpts.accentOpposite],

        selected_fg: color[info.oppositeBrightness],
      },

      // List Tabs Button
      {
        class: 'show_tabs_dropdown_button',
        settings: [stOpts.accentOpposite],

        'layer1.texture': `${oppositeBrightnessAssets}more.png`,
      },

      // Input History Button
      {
        class: 'dropdown_button_control',
        settings: [stOpts.accentOpposite],

        'layer1.texture': `${oppositeBrightnessAssets}more.png`,
      },

      // Panel Switcher
      {
        class: 'panel_button_control',
        settings: [stOpts.accentOpposite],

        'layer1.texture': `${oppositeBrightnessAssets}panels.png`,
      },

      // Regex Icon
      {
        class: 'icon_regex',
        settings: [stOpts.accentOpposite],

        'layer2.texture': `${oppositeBrightnessAssets}regex.png`,
      },

      // Preserve case sensitive
      {
        class: 'icon_case',
        settings: [stOpts.accentOpposite],

        'layer2.texture': `${oppositeBrightnessAssets}casesensitive.png`,
      },

      // Wholeword
      {
        class: 'icon_whole_word',
        settings: [stOpts.accentOpposite],

        'layer2.texture': `${oppositeBrightnessAssets}wholeword.png`,
      },

      // Wrap
      {
        class: 'icon_wrap',
        settings: [stOpts.accentOpposite],

        'layer2.texture': `${oppositeBrightnessAssets}wrap.png`,
      },

      // In Selection
      {
        class: 'icon_in_selection',
        settings: [stOpts.accentOpposite],

        'layer2.texture': `${oppositeBrightnessAssets}inselection.png`,
      },

      // Highlight Result
      {
        class: 'icon_highlight',
        settings: [stOpts.accentOpposite],

        'layer2.texture': `${oppositeBrightnessAssets}highlight.png`,
      },

      // Preserve Case
      {
        class: 'icon_preserve_case',
        settings: [stOpts.accentOpposite],

        'layer2.texture': `${oppositeBrightnessAssets}preservecase.png`,
      },

      // Show Context
      {
        class: 'icon_context',
        settings: [stOpts.accentOpposite],

        'layer2.texture': `${oppositeBrightnessAssets}context.png`,
      },

      // Use Buffer
      {
        class: 'icon_use_buffer',
        settings: [stOpts.accentOpposite],

        'layer2.texture': `${oppositeBrightnessAssets}buffer.png`,
      },

      /**
       * Spacegray Iconset
       */

      // Folder Icon
      {
        class: 'icon_folder',
        settings: [stOpts.iconsetSpacegray, stOpts.accentOpposite],

        'layer2.texture': `${oppositeSpacegrayPath}folder--hover.png`,
        'layer3.texture': `${oppositeSpacegrayPath}folder--expanded.png`,
      },

      // Symlinked Folder Icon
      {
        class: 'icon_folder_dup',
        settings: [stOpts.iconsetSpacegray, stOpts.accentOpposite],

        'layer1.texture': `${oppositeSpacegrayPath}folder_dup--hover.png`,
        'layer2.texture': `${oppositeSpacegrayPath}folder_dup--expanded.png`,
      },

      // Regex Icon
      {
        class: 'icon_regex',
        settings: [stOpts.iconsetSpacegray, stOpts.accentOpposite],

        'layer2.texture': `${oppositeSpacegrayPath}regex.png`,
      },

      // Case Sensitive
      {
        class: 'icon_case',
        settings: [stOpts.iconsetSpacegray, stOpts.accentOpposite],

        'layer2.texture': `${oppositeSpacegrayPath}casesensitive.png`,
      },

      // Wholeword
      {
        class: 'icon_whole_word',
        settings: [stOpts.iconsetSpacegray, stOpts.accentOpposite],

        'layer2.texture': `${oppositeSpacegrayPath}wholeword.png`,
      },

      // Wrap
      {
        class: 'icon_wrap',
        settings: [stOpts.iconsetSpacegray, stOpts.accentOpposite],

        'layer2.texture': `${oppositeSpacegrayPath}wrap.png`,
      },

      // In Selection
      {
        class: 'icon_in_selection',
        settings: [stOpts.iconsetSpacegray, stOpts.accentOpposite],

        'layer2.texture': `${oppositeSpacegrayPath}inselection.png`,
      },

      // Highlight Result
      {
        class: 'icon_highlight',
        settings: [stOpts.iconsetSpacegray, stOpts.accentOpposite],

        'layer2.texture': `${oppositeSpacegrayPath}highlight.png`,
      },

      // Preserve Case
      {
        class: 'icon_preserve_case',
        settings: [stOpts.iconsetSpacegray, stOpts.accentOpposite],

        'layer2.texture': `${oppositeSpacegrayPath}preservecase.png`,
      },

      // Show Context
      {
        class: 'icon_context',
        settings: [stOpts.iconsetSpacegray, stOpts.accentOpposite],

        'layer2.texture': `${oppositeSpacegrayPath}context.png`,
      },

      // Use Buffer
      {
        class: 'icon_use_buffer',
        settings: [stOpts.iconsetSpacegray, stOpts.accentOpposite],

        'layer2.texture': `${oppositeSpacegrayPath}buffer.png`,
      },

      // Input History Button
      {
        class: 'dropdown_button_control',
        settings: [stOpts.iconsetSpacegray, stOpts.accentOpposite],

        'layer1.texture': `${oppositeSpacegrayPath}more.png`,
      },

      // Panel Switcher
      {
        class: 'panel_button_control',
        settings: [stOpts.iconsetSpacegray, stOpts.accentOpposite],
        attributes: ['hover'],

        'layer0.texture': `${oppositeSpacegrayPath}panels.png`,
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

        color: color[info.oppositeBrightness],
      },

      // Colored Tooltips
      {
        class: 'tool_tip_control',
        settings: [stOpts.coloredTooltips, stOpts.accentOpposite],

        'layer0.tint': color[info.oppositeBrightness],
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

        'layer2.texture': `${neutralAssets}folder--expanded.png`,
        'layer3.texture': `${neutralAssets}folder--expanded.png`,
      },

      // Folder Symlink
      {
        class: 'icon_folder_dup',
        settings: [stOpts.accentNeutral],

        'layer1.texture': `${neutralAssets}folder_dup--expanded.png`,
        'layer2.texture': `${neutralAssets}folder_dup--expanded.png`,
      },

      // Tab Scroll Left
      {
        class: 'scroll_tabs_left_button',
        settings: [stOpts.accentNeutral],

        'layer1.texture': `${neutralAssets}prevtab--hover.png`,
      },

      // Tab Scroll Right
      {
        class: 'scroll_tabs_right_button',
        settings: [stOpts.accentNeutral],

        'layer1.texture': `${neutralAssets}nexttab--hover.png`,
      },

      // Code Folding Button
      {
        class: 'fold_button_control',
        settings: [stOpts.accentNeutral],

        'layer1.texture': `${neutralAssets}fold--hover.png`,
        'layer3.texture': `${neutralAssets}unfold--hover.png`,
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

        'layer1.texture': `${neutralAssets}more.png`,
      },

      // Input History Button
      {
        class: 'dropdown_button_control',
        settings: [stOpts.accentNeutral],

        'layer1.texture': `${neutralAssets}more.png`,
      },

      // Panel Switcher
      {
        class: 'panel_button_control',
        settings: [stOpts.accentNeutral],

        'layer1.texture': `${neutralAssets}panels.png`,
      },

      // Regex Icon
      {
        class: 'icon_regex',
        settings: [stOpts.accentNeutral],

        'layer2.texture': `${neutralAssets}regex.png`,
      },

      // Preserve case sensitive
      {
        class: 'icon_case',
        settings: [stOpts.accentNeutral],

        'layer2.texture': `${neutralAssets}casesensitive.png`,
      },

      // Wholeword
      {
        class: 'icon_whole_word',
        settings: [stOpts.accentNeutral],

        'layer2.texture': `${neutralAssets}wholeword.png`,
      },

      // Wrap
      {
        class: 'icon_wrap',
        settings: [stOpts.accentNeutral],

        'layer2.texture': `${neutralAssets}wrap.png`,
      },

      // In Selection
      {
        class: 'icon_in_selection',
        settings: [stOpts.accentNeutral],

        'layer2.texture': `${neutralAssets}inselection.png`,
      },

      // Highlight Result
      {
        class: 'icon_highlight',
        settings: [stOpts.accentNeutral],

        'layer2.texture': `${neutralAssets}highlight.png`,
      },

      // Preserve Case
      {
        class: 'icon_preserve_case',
        settings: [stOpts.accentNeutral],

        'layer2.texture': `${neutralAssets}preservecase.png`,
      },

      // Show Context
      {
        class: 'icon_context',
        settings: [stOpts.accentNeutral],

        'layer2.texture': `${neutralAssets}context.png`,
      },

      // Use Buffer
      {
        class: 'icon_use_buffer',
        settings: [stOpts.accentNeutral],

        'layer2.texture': `${neutralAssets}buffer.png`,
      },

      /**
       * Spacegray Iconset
       */

      // Folder Icon
      {
        class: 'icon_folder',
        settings: [stOpts.iconsetSpacegray, stOpts.accentNeutral],

        'layer2.texture': `${neutralSpacegrayPath}folder--hover.png`,
        'layer3.texture': `${neutralSpacegrayPath}folder--expanded.png`,
      },

      // Symlinked Folder Icon
      {
        class: 'icon_folder_dup',
        settings: [stOpts.iconsetSpacegray, stOpts.accentNeutral],

        'layer1.texture': `${neutralSpacegrayPath}folder_dup--hover.png`,
        'layer2.texture': `${neutralSpacegrayPath}folder_dup--expanded.png`,
      },

      // Regex Icon
      {
        class: 'icon_regex',
        settings: [stOpts.iconsetSpacegray, stOpts.accentNeutral],

        'layer2.texture': `${neutralSpacegrayPath}regex.png`,
      },

      // Case Sensitive
      {
        class: 'icon_case',
        settings: [stOpts.iconsetSpacegray, stOpts.accentNeutral],

        'layer2.texture': `${neutralSpacegrayPath}casesensitive.png`,
      },

      // Wholeword
      {
        class: 'icon_whole_word',
        settings: [stOpts.iconsetSpacegray, stOpts.accentNeutral],

        'layer2.texture': `${neutralSpacegrayPath}wholeword.png`,
      },

      // Wrap
      {
        class: 'icon_wrap',
        settings: [stOpts.iconsetSpacegray, stOpts.accentNeutral],

        'layer2.texture': `${neutralSpacegrayPath}wrap.png`,
      },

      // In Selection
      {
        class: 'icon_in_selection',
        settings: [stOpts.iconsetSpacegray, stOpts.accentNeutral],

        'layer2.texture': `${neutralSpacegrayPath}inselection.png`,
      },

      // Highlight Result
      {
        class: 'icon_highlight',
        settings: [stOpts.iconsetSpacegray, stOpts.accentNeutral],

        'layer2.texture': `${neutralSpacegrayPath}highlight.png`,
      },

      // Preserve Case
      {
        class: 'icon_preserve_case',
        settings: [stOpts.iconsetSpacegray, stOpts.accentNeutral],

        'layer2.texture': `${neutralSpacegrayPath}preservecase.png`,
      },

      // Show Context
      {
        class: 'icon_context',
        settings: [stOpts.iconsetSpacegray, stOpts.accentNeutral],

        'layer2.texture': `${neutralSpacegrayPath}context.png`,
      },

      // Use Buffer
      {
        class: 'icon_use_buffer',
        settings: [stOpts.iconsetSpacegray, stOpts.accentNeutral],

        'layer2.texture': `${neutralSpacegrayPath}buffer.png`,
      },

      // Input History Button
      {
        class: 'dropdown_button_control',
        settings: [stOpts.iconsetSpacegray, stOpts.accentNeutral],

        'layer1.texture': `${neutralSpacegrayPath}more.png`,
      },

      // Panel Switcher
      {
        class: 'panel_button_control',
        settings: [stOpts.iconsetSpacegray, stOpts.accentNeutral],
        attributes: ['hover'],

        'layer0.texture': `${neutralSpacegrayPath}panels.png`,
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

        'layer2.texture': `${brightnessAssets}folder__square--expanded.png`,
        'layer3.texture': `${brightnessAssets}folder__square--expanded.png`,
      },

      // Symlinked
      {
        class: 'icon_folder_dup',
        settings: [stOpts.enableSquareFolderIcons],

        'layer1.texture': `${brightnessAssets}folder__square_dup--expanded.png`,
        'layer2.texture': `${brightnessAssets}folder__square_dup--expanded.png`,
      },

      /**
       * Literal Folder Icons
       */

      {
        class: 'icon_folder',
        settings: [stOpts.enableLiteralFolderIcons],

        'layer2.texture': `${brightnessAssets}folder__literal--hover.png`,
        'layer3.texture': `${brightnessAssets}folder__literal--expanded.png`,
      },

      // Symlinked
      {
        class: 'icon_folder_dup',
        settings: [stOpts.enableLiteralFolderIcons],

        'layer1.texture': `${brightnessAssets}folder__literal_dup--hover.png`,
        'layer2.texture': `${brightnessAssets}folder__literal_dup--expanded.png`,
      },

      /**
       * Plus Minus Folder Icons
       */

      {
        class: 'icon_folder',
        settings: [stOpts.enablePlusMinusFolderIcons],

        'layer2.texture': `${brightnessAssets}folder__plus_minus--hover.png`,
        'layer3.texture': `${brightnessAssets}folder__plus_minus--expanded.png`,
      },

      // Symlinked
      {
        class: 'icon_folder_dup',
        settings: [stOpts.enablePlusMinusFolderIcons],

        'layer1.texture': `${brightnessAssets}folder__plus_minus_dup--hover.png`,
        'layer2.texture': `${brightnessAssets}folder__plus_minus_dup--expanded.png`,
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

        'layer2.texture': `${oppositeBrightnessAssets}folder__square--expanded.png`,
        'layer3.texture': `${oppositeBrightnessAssets}folder__square--expanded.png`,
      },

      // Symlinked
      {
        class: 'icon_folder_dup',
        settings: [stOpts.enableSquareFolderIcons, stOpts.accentOpposite],

        'layer1.texture': `${oppositeBrightnessAssets}folder__square_dup--expanded.png`,
        'layer2.texture': `${oppositeBrightnessAssets}folder__square_dup--expanded.png`,
      },

      /**
       * Literal Folder Icons
       */

      {
        class: 'icon_folder',
        settings: [stOpts.enableLiteralFolderIcons, stOpts.accentOpposite],

        'layer2.texture': `${oppositeBrightnessAssets}folder__literal--hover.png`,
        'layer3.texture': `${oppositeBrightnessAssets}folder__literal--expanded.png`,
      },

      // Symlinked
      {
        class: 'icon_folder_dup',
        settings: [stOpts.enableLiteralFolderIcons, stOpts.accentOpposite],

        'layer1.texture': `${oppositeBrightnessAssets}folder__literal_dup--hover.png`,
        'layer2.texture': `${oppositeBrightnessAssets}folder__literal_dup--expanded.png`,
      },

      /**
       * Plus Minus Folder Icons
       */

      {
        class: 'icon_folder',
        settings: [stOpts.enablePlusMinusFolderIcons, stOpts.accentOpposite],

        'layer2.texture': `${oppositeBrightnessAssets}folder__plus_minus--hover.png`,
        'layer3.texture': `${oppositeBrightnessAssets}folder__plus_minus--expanded.png`,
      },

      // Symlinked
      {
        class: 'icon_folder_dup',
        settings: [stOpts.enablePlusMinusFolderIcons, stOpts.accentOpposite],

        'layer1.texture': `${oppositeBrightnessAssets}folder__plus_minus_dup--hover.png`,
        'layer2.texture': `${oppositeBrightnessAssets}folder__plus_minus_dup--expanded.png`,
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

        'layer2.texture': `${neutralAssets}folder__square--expanded.png`,
        'layer3.texture': `${neutralAssets}folder__square--expanded.png`,
      },

      // Symlinked
      {
        class: 'icon_folder_dup',
        settings: [stOpts.enableSquareFolderIcons, stOpts.accentNeutral],

        'layer1.texture': `${neutralAssets}folder__square_dup--expanded.png`,
        'layer2.texture': `${neutralAssets}folder__square_dup--expanded.png`,
      },

      /**
       * Literal Folder Icons
       */

      {
        class: 'icon_folder',
        settings: [stOpts.enableLiteralFolderIcons, stOpts.accentNeutral],

        'layer2.texture': `${neutralAssets}folder__literal--hover.png`,
        'layer3.texture': `${neutralAssets}folder__literal--expanded.png`,
      },

      // Symlinked
      {
        class: 'icon_folder_dup',
        settings: [stOpts.enableLiteralFolderIcons, stOpts.accentNeutral],

        'layer1.texture': `${neutralAssets}folder__literal_dup--hover.png`,
        'layer2.texture': `${neutralAssets}folder__literal_dup--expanded.png`,
      },

      /**
       * Plus Minus Folder Icons
       */

      {
        class: 'icon_folder',
        settings: [stOpts.enablePlusMinusFolderIcons, stOpts.accentNeutral],

        'layer2.texture': `${neutralAssets}folder__plus_minus--hover.png`,
        'layer3.texture': `${neutralAssets}folder__plus_minus--expanded.png`,
      },

      // Symlinked
      {
        class: 'icon_folder_dup',
        settings: [stOpts.enablePlusMinusFolderIcons, stOpts.accentNeutral],

        'layer1.texture': `${neutralAssets}folder__plus_minus_dup--hover.png`,
        'layer2.texture': `${neutralAssets}folder__plus_minus_dup--expanded.png`,
      },

      /**
       * Underline Dirty Tabs
       */

      // Default Color
      {
        class: 'tab_control',
        settings: [stOpts.underlineDirtyTabs],
        attributes: ['dirty'],

        'layer2.tint': color[info.brightness],
      },

      // Opposite Color
      {
        class: 'tab_control',
        settings: [stOpts.underlineDirtyTabs, stOpts.accentOpposite],
        attributes: ['dirty'],

        'layer2.tint': color[info.oppositeBrightness],
      },

      // Neutral Color
      {
        class: 'tab_control',
        settings: [stOpts.underlineDirtyTabs, stOpts.accentNeutral],
        attributes: ['dirty'],

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
