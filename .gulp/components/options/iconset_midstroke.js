module.exports = function (values) {
  'use strict';

  const paths = values.paths;
  const stOpts = values.options;

  return [

    // Regex Icon
    {
      class: 'icon_regex',
      settings: [stOpts.iconsetMidstroke],

      'layer0.texture': `${paths.midstroke}regex.png`, // Default
      'layer1.texture': `${paths.midstroke}regex--hover.png`, // Hover
      'layer2.texture': `${paths.midstroke}regex--selected.png`, // Selected
    },

    // Case Sensitive
    {
      class: 'icon_case',
      settings: [stOpts.iconsetMidstroke],

      'layer0.texture': `${paths.midstroke}casesensitive.png`, // Default
      'layer1.texture': `${paths.midstroke}casesensitive--hover.png`, // Hover
      'layer2.texture': `${paths.midstroke}casesensitive--selected.png`, // Selected
    },

    // Wholeword
    {
      class: 'icon_whole_word',
      settings: [stOpts.iconsetMidstroke],

      'layer0.texture': `${paths.midstroke}wholeword.png`, // Default
      'layer1.texture': `${paths.midstroke}wholeword--hover.png`, // Hover
      'layer2.texture': `${paths.midstroke}wholeword--selected.png`, // Selected
    },

    // Wrap
    {
      class: 'icon_wrap',
      settings: [stOpts.iconsetMidstroke],

      'layer0.texture': `${paths.midstroke}wrap.png`, // Default
      'layer1.texture': `${paths.midstroke}wrap--hover.png`, // Hover
      'layer2.texture': `${paths.midstroke}wrap--selected.png`, // Selected
    },

    // In selection
    {
      class: 'icon_in_selection',
      settings: [stOpts.iconsetMidstroke],

      'layer0.texture': `${paths.midstroke}inselection.png`, // Default
      'layer1.texture': `${paths.midstroke}inselection--hover.png`, // Hover
      'layer2.texture': `${paths.midstroke}inselection--selected.png`, // Selected
    },

    // Highlight Result
    {
      class: 'icon_highlight',
      settings: [stOpts.iconsetMidstroke],

      'layer0.texture': `${paths.midstroke}highlight.png`, // Default
      'layer1.texture': `${paths.midstroke}highlight--hover.png`, // Hover
      'layer2.texture': `${paths.midstroke}highlight--selected.png`, // Selected
    },

    // Preserve Case
    {
      class: 'icon_preserve_case',
      settings: [stOpts.iconsetMidstroke],

      'layer0.texture': `${paths.midstroke}preservecase.png`, // Default
      'layer1.texture': `${paths.midstroke}preservecase--hover.png`, // Hover
      'layer2.texture': `${paths.midstroke}preservecase--selected.png`, // Selected
    },

    // Show context
    {
      class: 'icon_context',
      settings: [stOpts.iconsetMidstroke],

      'layer0.texture': `${paths.midstroke}context.png`, // Default
      'layer1.texture': `${paths.midstroke}context--hover.png`, // Hover
      'layer2.texture': `${paths.midstroke}context--selected.png`, // Selected
    },

    // Use buffer
    {
      class: 'icon_use_buffer',
      settings: [stOpts.iconsetMidstroke],

      'layer0.texture': `${paths.midstroke}buffer.png`, // Default
      'layer1.texture': `${paths.midstroke}buffer--hover.png`, // Hover
      'layer2.texture': `${paths.midstroke}buffer--selected.png`, // Selected
    },

    // Panel Switcher
    {
      class: 'panel_button_control',
      settings: [stOpts.iconsetMidstroke],

      'layer0.texture': `${paths.midstroke}panels.png`, // Default
      'layer1.texture': `${paths.midstroke}panels--hover.png`, // Hover
    },

    // Textline Input Overflow Menu
    {
      class: 'dropdown_button_control',
      settings: [stOpts.iconsetMidstroke],

      'layer0.texture': `${paths.midstroke}more.png`, // Default
      'layer1.texture': `${paths.midstroke}more--hover.png`, // Hover
    },

  ];
};
