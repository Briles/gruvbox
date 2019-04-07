module.exports = function (values) {

  const paths = values.paths;
  const stOpts = values.options;

  return [

    // Regex Icon
    {
      class: 'icon_regex',
      settings: [stOpts.iconsetThick],

      'layer0.texture': `${paths.thick}regex.png`, // Default
    },

    // Case Sensitive
    {
      class: 'icon_case',
      settings: [stOpts.iconsetThick],

      'layer0.texture': `${paths.thick}casesensitive.png`, // Default
    },

    // Wholeword
    {
      class: 'icon_whole_word',
      settings: [stOpts.iconsetThick],

      'layer0.texture': `${paths.thick}wholeword.png`, // Default
    },

    // Wrap
    {
      class: 'icon_wrap',
      settings: [stOpts.iconsetThick],

      'layer0.texture': `${paths.thick}wrap.png`, // Default
    },

    // In selection
    {
      class: 'icon_in_selection',
      settings: [stOpts.iconsetThick],

      'layer0.texture': `${paths.thick}inselection.png`, // Default
    },

    // Highlight Result
    {
      class: 'icon_highlight',
      settings: [stOpts.iconsetThick],

      'layer0.texture': `${paths.thick}highlight.png`, // Default
    },

    // Preserve Case
    {
      class: 'icon_preserve_case',
      settings: [stOpts.iconsetThick],

      'layer0.texture': `${paths.thick}preservecase.png`, // Default
    },

    // Show context
    {
      class: 'icon_context',
      settings: [stOpts.iconsetThick],

      'layer0.texture': `${paths.thick}context.png`, // Default
    },

    // Use buffer
    {
      class: 'icon_use_buffer',
      settings: [stOpts.iconsetThick],

      'layer0.texture': `${paths.thick}buffer.png`, // Default
    },

    // Panel Switcher
    {
      class: 'panel_button_control',
      settings: [stOpts.iconsetThick],

      'layer0.texture': `${paths.thick}panels.png`, // Default
    },

    // Textline Input Overflow Menu
    {
      class: 'dropdown_button_control',
      settings: [stOpts.iconsetThick],

      'layer0.texture': `${paths.thick}more.png`, // Default
    },

  ];
};
