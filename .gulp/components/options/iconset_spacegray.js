module.exports = function (values) {

  const paths = values.paths;
  const stOpts = values.options;

  return [

    // Folder Icon
    {
      class: 'icon_folder',
      settings: [stOpts.iconsetSpacegray],

      'layer1.texture': `${paths.commons}spacegray__folder.png`, // Default
      'layer2.texture': `${paths.this}spacegray__folder--hover.png`, // Hover
      'layer3.texture': `${paths.this}spacegray__folder--expanded.png`, // Expanded
    },

    // Symlinked Folder Icon
    {
      class: 'icon_folder_dup',
      settings: [stOpts.iconsetSpacegray],

      'layer0.texture': `${paths.commons}spacegray__folder_dup.png`, // Default
      'layer1.texture': `${paths.this}spacegray__folder_dup--hover.png`, // Hover
      'layer2.texture': `${paths.this}spacegray__folder_dup--expanded.png`, // Expanded
    },

    // Regex Icon
    {
      class: 'icon_regex',
      settings: [stOpts.iconsetSpacegray],

      'layer0.texture': `${paths.spacegray}regex.png`, // Default
      'layer1.texture': `${paths.spacegray}regex--hover.png`, // Hover
      'layer2.texture': `${paths.spacegray}regex--selected.png`, // Selected
    },

    // Case Sensitive
    {
      class: 'icon_case',
      settings: [stOpts.iconsetSpacegray],

      'layer0.texture': `${paths.spacegray}casesensitive.png`, // Default
      'layer1.texture': `${paths.spacegray}casesensitive--hover.png`, // Hover
      'layer2.texture': `${paths.spacegray}casesensitive--selected.png`, // Selected
    },

    // Wholeword
    {
      class: 'icon_whole_word',
      settings: [stOpts.iconsetSpacegray],

      'layer0.texture': `${paths.spacegray}wholeword.png`, // Default
      'layer1.texture': `${paths.spacegray}wholeword--hover.png`, // Hover
      'layer2.texture': `${paths.spacegray}wholeword--selected.png`, // Selected
    },

    // Wrap
    {
      class: 'icon_wrap',
      settings: [stOpts.iconsetSpacegray],

      'layer0.texture': `${paths.spacegray}wrap.png`, // Default
      'layer1.texture': `${paths.spacegray}wrap--hover.png`, // Hover
      'layer2.texture': `${paths.spacegray}wrap--selected.png`, // Selected
    },

    // In selection
    {
      class: 'icon_in_selection',
      settings: [stOpts.iconsetSpacegray],

      'layer0.texture': `${paths.spacegray}inselection.png`, // Default
      'layer1.texture': `${paths.spacegray}inselection--hover.png`, // Hover
      'layer2.texture': `${paths.spacegray}inselection--selected.png`, // Selected
    },

    // Highlight Result
    {
      class: 'icon_highlight',
      settings: [stOpts.iconsetSpacegray],

      'layer0.texture': `${paths.spacegray}highlight.png`, // Default
      'layer1.texture': `${paths.spacegray}highlight--hover.png`, // Hover
      'layer2.texture': `${paths.spacegray}highlight--selected.png`, // Selected
    },

    // Preserve Case
    {
      class: 'icon_preserve_case',
      settings: [stOpts.iconsetSpacegray],

      'layer0.texture': `${paths.spacegray}preservecase.png`, // Default
      'layer1.texture': `${paths.spacegray}preservecase--hover.png`, // Hover
      'layer2.texture': `${paths.spacegray}preservecase--selected.png`, // Selected
    },

    // Show context
    {
      class: 'icon_context',
      settings: [stOpts.iconsetSpacegray],

      'layer0.texture': `${paths.spacegray}context.png`, // Default
      'layer1.texture': `${paths.spacegray}context--hover.png`, // Hover
      'layer2.texture': `${paths.spacegray}context--selected.png`, // Selected
    },

    // Use buffer
    {
      class: 'icon_use_buffer',
      settings: [stOpts.iconsetSpacegray],

      'layer0.texture': `${paths.spacegray}buffer.png`, // Default
      'layer1.texture': `${paths.spacegray}buffer--hover.png`, // Hover
      'layer2.texture': `${paths.spacegray}buffer--selected.png`, // Selected
    },

    // Panel Switcher
    {
      class: 'panel_button_control',
      settings: [stOpts.iconsetSpacegray],

      'layer0.texture': `${paths.spacegray}panels.png`, // Default
      'layer1.texture': `${paths.spacegray}panels--hover.png`, // Hover
    },

    // Textline Input Overflow Menu
    {
      class: 'dropdown_button_control',
      settings: [stOpts.iconsetSpacegray],

      'layer0.texture': `${paths.spacegray}more.png`, // Default
      'layer1.texture': `${paths.spacegray}more--hover.png`, // Hover
    },

  ];
};
