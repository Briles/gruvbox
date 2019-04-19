module.exports = function (values) {

  const c = values.colors;
  const info = values.info;
  const paths = values.paths;
  const stOpts = values.options;

  return [

    /**
     * Square Folder Icons
     */

    {
      class: 'icon_folder',
      settings: [stOpts.enableSquareFolderIcons],

      'layer1.texture': `${paths.commons}folder__square.png`,
      'layer2.texture': `${paths.commons}folder__square--expanded.png`,
      'layer3.texture': `${paths.commons}folder__square--expanded.png`,
    },

    // Symlinked
    {
      class: 'icon_folder_dup',
      settings: [stOpts.enableSquareFolderIcons],

      'layer0.texture': `${paths.commons}folder__square.png`,
      'layer1.texture': `${paths.commons}folder__square--expanded.png`,
      'layer2.texture': `${paths.commons}folder__square--expanded.png`,
    },

    /**
     * Circle Folder Icons
     */

    {
      class: 'icon_folder',
      settings: [stOpts.enableCircleFolderIcons],

      'layer1.texture': `${paths.commons}folder.png`,
      'layer2.texture': `${paths.commons}folder--expanded.png`,
      'layer3.texture': `${paths.commons}folder--expanded.png`,
    },

    // Symlinked
    {
      class: 'icon_folder_dup',
      settings: [stOpts.enableCircleFolderIcons],

      'layer0.texture': `${paths.commons}folder_dup.png`,
      'layer1.texture': `${paths.commons}folder_dup--expanded.png`,
      'layer2.texture': `${paths.commons}folder_dup--expanded.png`,
    },

    /**
     * Plus Minus Folder Icons
     */

    {
      class: 'icon_folder',
      settings: [stOpts.enablePlusMinusFolderIcons],

      'layer1.texture': `${paths.commons}folder__plus_minus.png`,
      'layer2.texture': `${paths.commons}folder__plus_minus--hover.png`,
      'layer3.texture': `${paths.commons}folder__plus_minus--expanded.png`,
    },

    // Symlinked
    {
      class: 'icon_folder_dup',
      settings: [stOpts.enablePlusMinusFolderIcons],

      'layer0.texture': `${paths.commons}folder__plus_minus_dup.png`,
      'layer1.texture': `${paths.commons}folder__plus_minus_dup--hover.png`,
      'layer2.texture': `${paths.commons}folder__plus_minus_dup--expanded.png`,
    },

    /**
     * Spacegray Folder Icons
     */

    // Folder Icon
    {
      class: 'icon_folder',
      settings: [stOpts.enableSpacegrayFolderIcons],

      'layer1.texture': `${paths.commons}spacegray__folder.png`, // Default
      'layer2.texture': `${paths.commons}spacegray__folder--hover.png`, // Hover
      'layer3.texture': `${paths.commons}spacegray__folder--expanded.png`, // Expanded
    },

    // Symlinked Folder Icon
    {
      class: 'icon_folder_dup',
      settings: [stOpts.enableSpacegrayFolderIcons],

      'layer0.texture': `${paths.commons}spacegray__folder_dup.png`, // Default
      'layer1.texture': `${paths.commons}spacegray__folder_dup--hover.png`, // Hover
      'layer2.texture': `${paths.commons}spacegray__folder_dup--expanded.png`, // Expanded
    },

    /**
     * Large Literal Folder Icons
     */

    // Folder Icon
    {
      class: 'icon_folder',
      settings: [stOpts.enableLargeFolderIcons],

      'layer1.texture': `${paths.commons}folder__literal__large.png`, // Default
      'layer2.texture': `${paths.commons}folder__literal__large--hover.png`, // Hover
      'layer3.texture': `${paths.commons}folder__literal__large--expanded.png`, // Expanded
    },

    // Symlinked Folder Icon
    {
      class: 'icon_folder_dup',
      settings: [stOpts.enableLargeFolderIcons],

      'layer0.texture': `${paths.commons}folder__literal__large_dup.png`, // Default
      'layer1.texture': `${paths.commons}folder__literal__large_dup--hover.png`, // Hover
      'layer2.texture': `${paths.commons}folder__literal__large_dup--expanded.png`, // Expanded
    },

  ];
};
