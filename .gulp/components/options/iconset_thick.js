module.exports = function (values) {
  'use strict';

  const paths = values.paths;
  const stOpts = values.options;

  return [

    // Regex Icon
    {
      class: 'icon_regex',
      settings: [stOpts.iconsetThick],

      'layer0.texture': `${paths.thick}regex.png`, // Default
      'layer1.texture': `${paths.thick}regex--hover.png`, // Hover
      'layer2.texture': `${paths.thick}regex--selected.png`, // Selected
    },

    // Case Sensitive
    {
      class: 'icon_case',
      settings: [stOpts.iconsetThick],

      'layer0.texture': `${paths.thick}casesensitive.png`, // Default
      'layer1.texture': `${paths.thick}casesensitive--hover.png`, // Hover
      'layer2.texture': `${paths.thick}casesensitive--selected.png`, // Selected
    },

    // Wholeword
    {
      class: 'icon_whole_word',
      settings: [stOpts.iconsetThick],

      'layer0.texture': `${paths.thick}wholeword.png`, // Default
      'layer1.texture': `${paths.thick}wholeword--hover.png`, // Hover
      'layer2.texture': `${paths.thick}wholeword--selected.png`, // Selected
    },

    // Wrap
    {
      class: 'icon_wrap',
      settings: [stOpts.iconsetThick],

      'layer0.texture': `${paths.thick}wrap.png`, // Default
      'layer1.texture': `${paths.thick}wrap--hover.png`, // Hover
      'layer2.texture': `${paths.thick}wrap--selected.png`, // Selected
    },

    // In selection
    {
      class: 'icon_in_selection',
      settings: [stOpts.iconsetThick],

      'layer0.texture': `${paths.thick}inselection.png`, // Default
      'layer1.texture': `${paths.thick}inselection--hover.png`, // Hover
      'layer2.texture': `${paths.thick}inselection--selected.png`, // Selected
    },

    // Highlight Result
    {
      class: 'icon_highlight',
      settings: [stOpts.iconsetThick],

      'layer0.texture': `${paths.thick}highlight.png`, // Default
      'layer1.texture': `${paths.thick}highlight--hover.png`, // Hover
      'layer2.texture': `${paths.thick}highlight--selected.png`, // Selected
    },

    // Preserve Case
    {
      class: 'icon_preserve_case',
      settings: [stOpts.iconsetThick],

      'layer0.texture': `${paths.thick}preservecase.png`, // Default
      'layer1.texture': `${paths.thick}preservecase--hover.png`, // Hover
      'layer2.texture': `${paths.thick}preservecase--selected.png`, // Selected
    },

    // Show context
    {
      class: 'icon_context',
      settings: [stOpts.iconsetThick],

      'layer0.texture': `${paths.thick}context.png`, // Default
      'layer1.texture': `${paths.thick}context--hover.png`, // Hover
      'layer2.texture': `${paths.thick}context--selected.png`, // Selected
    },

    // Use buffer
    {
      class: 'icon_use_buffer',
      settings: [stOpts.iconsetThick],

      'layer0.texture': `${paths.thick}buffer.png`, // Default
      'layer1.texture': `${paths.thick}buffer--hover.png`, // Hover
      'layer2.texture': `${paths.thick}buffer--selected.png`, // Selected
    },

    // Panel Switcher
    {
      class: 'panel_button_control',
      settings: [stOpts.iconsetThick],

      'layer0.texture': `${paths.thick}panels.png`, // Default
      'layer1.texture': `${paths.thick}panels--hover.png`, // Hover
    },

    // Textline Input Overflow Menu
    {
      class: 'dropdown_button_control',
      settings: [stOpts.iconsetThick],

      'layer0.texture': `${paths.thick}more.png`, // Default
      'layer1.texture': `${paths.thick}more--hover.png`, // Hover
    },

  ];
};
