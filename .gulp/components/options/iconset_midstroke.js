module.exports = function (values) {

  const paths = values.paths;
  const stOpts = values.options;

  return [

    // Regex Icon
    {
      class: 'icon_regex',
      settings: [stOpts.iconsetMidstroke],

      'layer0.texture': `${paths.midstroke}regex.png`, // Default
    },

    // Case Sensitive
    {
      class: 'icon_case',
      settings: [stOpts.iconsetMidstroke],

      'layer0.texture': `${paths.midstroke}casesensitive.png`, // Default
    },

    // Wholeword
    {
      class: 'icon_whole_word',
      settings: [stOpts.iconsetMidstroke],

      'layer0.texture': `${paths.midstroke}wholeword.png`, // Default
    },

    // Wrap
    {
      class: 'icon_wrap',
      settings: [stOpts.iconsetMidstroke],

      'layer0.texture': `${paths.midstroke}wrap.png`, // Default
    },

    // In selection
    {
      class: 'icon_in_selection',
      settings: [stOpts.iconsetMidstroke],

      'layer0.texture': `${paths.midstroke}inselection.png`, // Default
    },

    // Highlight Result
    {
      class: 'icon_highlight',
      settings: [stOpts.iconsetMidstroke],

      'layer0.texture': `${paths.midstroke}highlight.png`, // Default
    },

    // Preserve Case
    {
      class: 'icon_preserve_case',
      settings: [stOpts.iconsetMidstroke],

      'layer0.texture': `${paths.midstroke}preservecase.png`, // Default
    },

    // Show context
    {
      class: 'icon_context',
      settings: [stOpts.iconsetMidstroke],

      'layer0.texture': `${paths.midstroke}context.png`, // Default
    },

    // Use buffer
    {
      class: 'icon_use_buffer',
      settings: [stOpts.iconsetMidstroke],

      'layer0.texture': `${paths.midstroke}buffer.png`, // Default
    },

    // Panel Switcher
    {
      class: 'panel_button_control',
      settings: [stOpts.iconsetMidstroke],

      'layer0.texture': `${paths.midstroke}panels.png`, // Default
    },

    // Textline Input Overflow Menu
    {
      class: 'dropdown_button_control',
      settings: [stOpts.iconsetMidstroke],

      'layer0.texture': `${paths.midstroke}more.png`, // Default
    },

  ];
};
