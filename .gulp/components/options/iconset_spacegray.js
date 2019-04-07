module.exports = function (values) {

  const paths = values.paths;
  const stOpts = values.options;

  return [

    // Folder Icon
    {
      class: 'icon_folder',
      settings: [stOpts.iconsetSpacegray],

      'layer1.texture': `${paths.commons}spacegray__folder.png`, // Default
      'layer2.texture': `${paths.commons}spacegray__folder--hover.png`, // Hover
      'layer3.texture': `${paths.commons}spacegray__folder--expanded.png`, // Expanded
    },

    // Symlinked Folder Icon
    {
      class: 'icon_folder_dup',
      settings: [stOpts.iconsetSpacegray],

      'layer0.texture': `${paths.commons}spacegray__folder_dup.png`, // Default
      'layer1.texture': `${paths.commons}spacegray__folder_dup--hover.png`, // Hover
      'layer2.texture': `${paths.commons}spacegray__folder_dup--expanded.png`, // Expanded
    },

    // Regex Icon
    {
      class: 'icon_regex',
      settings: [stOpts.iconsetSpacegray],

      'layer0.texture': `${paths.spacegray}regex.png`, // Default
    },

    // Case Sensitive
    {
      class: 'icon_case',
      settings: [stOpts.iconsetSpacegray],

      'layer0.texture': `${paths.spacegray}casesensitive.png`, // Default
    },

    // Wholeword
    {
      class: 'icon_whole_word',
      settings: [stOpts.iconsetSpacegray],

      'layer0.texture': `${paths.spacegray}wholeword.png`, // Default
    },

    // Wrap
    {
      class: 'icon_wrap',
      settings: [stOpts.iconsetSpacegray],

      'layer0.texture': `${paths.spacegray}wrap.png`, // Default
    },

    // In selection
    {
      class: 'icon_in_selection',
      settings: [stOpts.iconsetSpacegray],

      'layer0.texture': `${paths.spacegray}inselection.png`, // Default
    },

    // Highlight Result
    {
      class: 'icon_highlight',
      settings: [stOpts.iconsetSpacegray],

      'layer0.texture': `${paths.spacegray}highlight.png`, // Default
    },

    // Preserve Case
    {
      class: 'icon_preserve_case',
      settings: [stOpts.iconsetSpacegray],

      'layer0.texture': `${paths.spacegray}preservecase.png`, // Default
    },

    // Show context
    {
      class: 'icon_context',
      settings: [stOpts.iconsetSpacegray],

      'layer0.texture': `${paths.spacegray}context.png`, // Default
    },

    // Use buffer
    {
      class: 'icon_use_buffer',
      settings: [stOpts.iconsetSpacegray],

      'layer0.texture': `${paths.spacegray}buffer.png`, // Default
    },

    // Panel Switcher
    {
      class: 'panel_button_control',
      settings: [stOpts.iconsetSpacegray],

      'layer0.texture': `${paths.spacegray}panels.png`, // Default
    },

    // Textline Input Overflow Menu
    {
      class: 'dropdown_button_control',
      settings: [stOpts.iconsetSpacegray],

      'layer0.texture': `${paths.spacegray}more.png`, // Default
    },

  ];
};
