[![GitHub Tag](https://img.shields.io/github/tag/Briles/gruvbox.svg?style=flat-square)](https://github.com/Briles/gruvbox/tags)
[![Package Control](https://img.shields.io/packagecontrol/dt/gruvbox.svg?style=flat-square)](https://packagecontrol.io/packages/gruvbox)
[![Build Status](https://img.shields.io/travis/Briles/gruvbox/develop.svg?style=flat-square)](https://travis-ci.org/Briles/gruvbox)

<p align="center">
<img src="https://cdn.rawgit.com/Briles/gruvbox/master/assets/banner-image.svg" alt="gruvbox for Sublime Text" width="327px" height="122px">
</p>

Based on [gruvbox for Vim](https://github.com/morhetz/gruvbox)

![Screenshot Dark](http://i.imgur.com/8WUkqa5.png)
![Screenshot Light](http://i.imgur.com/hdxzwzP.png)

## Contrast options

![Screenshot Contrast Options](http://i.imgur.com/euGncPs.png)

## Installation

<details>
<summary>Package Control</summary>

The easiest way to install is using [Package Control](https://packagecontrol.io/)

1. Open Command Palette using menu item `Tools -> Command Palette...` (<kbd>⇧</kbd><kbd>⌘</kbd><kbd>P</kbd> on Mac) (<kbd>ctrl</kbd><kbd>shift</kbd><kbd>P</kbd> on Windows)
2. Choose `Package Control: Install Package`
3. Find `gruvbox` and hit <kbd>Enter</kbd>
4. [Activate the theme](#how-to-activate) by adding the code below to *Preferences > Setting - User*:
5. Restart Sublime Text

</details>

<details>
<summary>Manual</summary>

You can also install the theme manually:

1. [Download the .zip](https://github.com/Briles/gruvbox/archive/master.zip)
2. Unzip and rename the folder to `gruvbox`
3. Copy the folder into `Packages` directory, which you can find using the menu item `Sublime Text -> Preferences -> Browse Packages...`
4. [Activate the theme](#how-to-activate) by adding the code below to *Preferences > Setting - User*:
5. Restart Sublime Text

</details>

## How to Activate

Activate the UI theme and color scheme by modifying your user preferences file, which you can find using the menu item `Sublime Text -> Preferences -> Settings - User` (<kbd>⌘</kbd><kbd>,</kbd> on Mac).

*Note: Don't forget to restart Sublime Text after activating the theme.*

```json
// gruvbox Dark Hard Contrast
{
  "theme": "gruvbox.sublime-theme",
  "color_scheme": "Packages/gruvbox/gruvbox (Dark) (Hard).sublime-color-scheme",
}
```

```json
// gruvbox Dark Medium Contrast
{
  "theme": "gruvbox.sublime-theme",
  "color_scheme": "Packages/gruvbox/gruvbox (Dark) (Medium).sublime-color-scheme",
}
```

```json
// gruvbox Dark Soft Contrast
{
  "theme": "gruvbox.sublime-theme",
  "color_scheme": "Packages/gruvbox/gruvbox (Dark) (Soft).sublime-color-scheme",
}
```

```json
// gruvbox Light Hard Contrast
{
  "theme": "gruvbox.sublime-theme",
  "color_scheme": "Packages/gruvbox/gruvbox (Light) (Hard).sublime-color-scheme",
}
```

```json
// gruvbox Light Medium Contrast
{
  "theme": "gruvbox.sublime-theme",
  "color_scheme": "Packages/gruvbox/gruvbox (Light) (Medium).sublime-color-scheme",
}
```

```json
// gruvbox Light Soft Contrast
{
  "theme": "gruvbox.sublime-theme",
  "color_scheme": "Packages/gruvbox/gruvbox (Light) (Soft).sublime-color-scheme",
}
```

### Color Scheme Variations

gruvbox comes with color scheme variations which have different brightness,
saturation, or colors than their parent color schemes while still maintaining
that excellent gruvbox tone.

#### No Dimmed Colors

A variant without out any neutral / dimmed colors

```json
"color_scheme": "Packages/gruvbox/gruvbox (Dark) (Hard) NDC.sublime-color-scheme",
"color_scheme": "Packages/gruvbox/gruvbox (Dark) (Medium) NDC.sublime-color-scheme",
"color_scheme": "Packages/gruvbox/gruvbox (Dark) (Soft) NDC.sublime-color-scheme",
"color_scheme": "Packages/gruvbox/gruvbox (Light) (Hard) NDC.sublime-color-scheme",
"color_scheme": "Packages/gruvbox/gruvbox (Light) (Medium) NDC.sublime-color-scheme",
"color_scheme": "Packages/gruvbox/gruvbox (Light) (Soft) NDC.sublime-color-scheme",
```

## Configuration

<details>
<summary>Accent Colors</summary>

![Accent Colors](http://i.imgur.com/d0o9auc.png)

Accent colors affect icons and certain text.

```json
  "gruvbox_accent_aqua": true,    // uses the cyanish color from the color scheme
  "gruvbox_accent_blue": true,    // uses the bluish color from the color scheme
  "gruvbox_accent_green": true,   // uses the greenish color from the color scheme
  "gruvbox_accent_orange": true,  // uses the orangish color from the color scheme
  "gruvbox_accent_purple": true,  // uses the purplish color from the color scheme
  "gruvbox_accent_red": true,     // uses the redish color from the color scheme
  "gruvbox_accent_yellow": true,  // uses the yellowish color from the color scheme
```

</details>

<details>
<summary>AutoComplete Spacing</summary>

Change the space between autocomplete rows

```json
  // sizes are top/bottom in px
  "gruvbox_autocomplete_cramped": true,      //  v  2
  "gruvbox_autocomplete_compact": true,      //  |  4
                                             //  |  6 (Default)
  "gruvbox_autocomplete_comfortable": true,  //  |  8
  "gruvbox_autocomplete_cozy": true,         //  v  10
```

</details>

<details>
<summary>AutoComplete Border</summary>

Add a border around the autocomplete popup

```json
  "gruvbox_autocomplete_border": true,
  "gruvbox_autocomplete_border_thick": true,
```

</details>

<details>
<summary>Sideline Selected AutoComplete Row</summary>

Add a border to the left of the selected autocomplete row

All thicknesses require `gruvbox_sideline_autocomplete_row` to be `true`.

```json
  "gruvbox_sideline_autocomplete_row": true,           //  v  1 (Default)
  "gruvbox_sideline_autocomplete_row_thick": true,     //  |  2
  "gruvbox_sideline_autocomplete_row_thickest": true,  //  v  3
```

</details>

<details>
<summary>Disable Selected AutoComplete Row Highlight</summary>

Remove the highlight from the selected autocomplete row.

```json
  "gruvbox_disable_autocomplete_row_highlight": true,
```

</details>

<details>
<summary>Sidebar Spacing</summary>

Change the space between sidebar tree rows

```json
  // sizes are top/bottom in px
  "gruvbox_sidebar_cozy": true,         //  v  1
  "gruvbox_sidebar_comfortable": true,  //  |  3
                                        //  |  5 (Default)
  "gruvbox_sidebar_compact": true,      //  |  7
  "gruvbox_sidebar_cramped": true,      //  v  9
```

</details>

<details>
<summary>Sidebar Indent</summary>

Change the indent of sidebar tree rows

```json
  "gruvbox_sidebar_indent_xxs": true,  //  v  4
  "gruvbox_sidebar_indent_xs": true,   //  |  8
  "gruvbox_sidebar_indent_s": true,    //  |  12
                                       //  |  16 (Default)
  "gruvbox_sidebar_indent_l": true,    //  |  20
  "gruvbox_sidebar_indent_xl": true,   //  |  24
  "gruvbox_sidebar_indent_xxl": true,  //  v  28
```

</details>

<details>
<summary>Sidebar Font Sizes</summary>

Change the font size of the sidebar labels

*Increasing the font size will distort the icons in the sidebar.*

```json
  "gruvbox_sidebar_font_size_10": true,  //  v  10
                                         //  |  11 (Default)
  "gruvbox_sidebar_font_size_12": true,  //  |  12
  "gruvbox_sidebar_font_size_13": true,  //  |  13
  "gruvbox_sidebar_font_size_14": true,  //  |  14
  "gruvbox_sidebar_font_size_15": true,  //  |  15
  "gruvbox_sidebar_font_size_16": true,  //  v  16
```

</details>

<details>
<summary>Bold Sidebar Labels</summary>

Toggle bold fonts for sidebar labels

```json
  "gruvbox_sidebar_heading_bold": true,
  "gruvbox_sidebar_label_bold": true,
```

</details>

<details>
<summary>Command Palette Spacing</summary>

Change the space between command palette rows

```json
  // sizes are top/bottom in px
  "gruvbox_command_palette_comfortable": true,  //  v  4
  "gruvbox_command_palette_compact": true,      //  |  8
                                                //  |  12 (Default)
  "gruvbox_command_palette_cozy": true,         //  |  14
  "gruvbox_command_palette_cramped": true,      //  v  16
```

</details>

<details>
<summary>Sideline Selected Command Palette Row</summary>

Add a border to the left of the selected Command Palette row

All thicknesses require `gruvbox_sideline_command_palette_row` to be `true`.

```json
  "gruvbox_sideline_command_palette_row": true,           //  v  1 (Default)
  "gruvbox_sideline_command_palette_row_thick": true,     //  |  2
  "gruvbox_sideline_command_palette_row_thickest": true,  //  v  3
```

</details>

<details>
<summary>Disable Selected Command Palette Row Highlight</summary>

Remove the highlight from the selected Command Palette row.

```json
  "gruvbox_disable_command_palette_row_highlight": true,
```

</details>

<details>
<summary>Statusbar Sizes</summary>

Change the height of the statusbar

```json
  // sizes are in px
  "gruvbox_statusbar_xxs": true,  //  v  20
  "gruvbox_statusbar_xs": true,   //  |  25
  "gruvbox_statusbar_s": true,    //  |  30
                                  //  |  35 (Default)
  "gruvbox_statusbar_l": true,    //  |  40
  "gruvbox_statusbar_xl": true,   //  |  45
  "gruvbox_statusbar_xxl": true,  //  v  50
```

</details>

<details>
<summary>Statusbar Button Widths</summary>

Change the minimum width of the buttons in the statusbar

```json
  // sizes are in px
  "gruvbox_statusbar_button_xxs": true,  //  v  44
  "gruvbox_statusbar_button_xs": true,   //  |  55
  "gruvbox_statusbar_button_s": true,    //  |  65
                                         //  |  75 (Default)
  "gruvbox_statusbar_button_l": true,    //  |  85
  "gruvbox_statusbar_button_xl": true,   //  |  95
  "gruvbox_statusbar_button_xxl": true,  //  v  105
```

</details>

<details>
<summary>Statusbar Font Sizes</summary>

Change the font size of the status bar labels

```json
  "gruvbox_statusbar_font_size_10": true,  //  v  10
                                           //  |  11 (Default)
  "gruvbox_statusbar_font_size_12": true,  //  |  12
  "gruvbox_statusbar_font_size_13": true,  //  |  13
  "gruvbox_statusbar_font_size_14": true,  //  |  14
  "gruvbox_statusbar_font_size_15": true,  //  |  15
  "gruvbox_statusbar_font_size_16": true,  //  v  16
```

</details>

<details>
<summary>Tab Sizes</summary>

Change the height of the tabs

```json
  // sizes are in px
  "gruvbox_tabs_xxs": true,  //  v  33
  "gruvbox_tabs_xs": true,   //  |  39
  "gruvbox_tabs_s": true,    //  |  45
                             //  |  51 (Default)
  "gruvbox_tabs_l": true,    //  |  57
  "gruvbox_tabs_xl": true,   //  |  63
  "gruvbox_tabs_xxl": true,  //  v  69
```

</details>

<details>
<summary>Tab Font Sizes</summary>

Change the font size of the tabs

```json
  "gruvbox_tabs_font_size_7": true,   //  v  7
  "gruvbox_tabs_font_size_8": true,   //  |  8
  "gruvbox_tabs_font_size_9": true,   //  |  9
  "gruvbox_tabs_font_size_10": true,  //  |  10
                                      //  |  11 (Default)
  "gruvbox_tabs_font_size_12": true,  //  |  12
  "gruvbox_tabs_font_size_13": true,  //  |  13
  "gruvbox_tabs_font_size_14": true,  //  |  14
  "gruvbox_tabs_font_size_15": true,  //  v  15
```

</details>

<details>
<summary>Autocollapsing Tab Bar</summary>

Autocollapse the tabs when not in use

```json
  "gruvbox_autocollapse_tabs": true,            // enable the autocollapsing tabs

  // Set the height of the trigger area which shows the tabs
  "gruvbox_autocollapse_tabs_trigger_2": true,  //  v  2
  "gruvbox_autocollapse_tabs_trigger_3": true,  //  |  3
                                                //  |  4 (Default)
  "gruvbox_autocollapse_tabs_trigger_5": true,  //  |  5
  "gruvbox_autocollapse_tabs_trigger_6": true,  //  v  6
```

</details>

<details>
<summary>Underline Modified Tabs</summary>

Underline modified tabs with the current accent color

All thicknesses require `gruvbox_underline_modified_tabs` to be `true`.

```json
  "gruvbox_underline_modified_tabs": true,        //  |  1 (Default)
  "gruvbox_underline_modified_tabs_thick": true,  //  v  2
```

</details>

<details>
<summary>Underline Active Tab</summary>

Underline the active tab with the current accent color

All thicknesses require `gruvbox_underline_active_tab` to be `true`.

```json
  "gruvbox_underline_active_tab": true,          //  |  1 (Default)
  "gruvbox_underline_active_tab_thick": true,    //  |  2
  "gruvbox_underline_active_tab_thicker": true,  //  v  3
```

</details>

<details>
<summary>Find, Replace, and Console Sizes</summary>

Adjust the top & bottom margins of the Find, Replace, and Console panels

```json
  "gruvbox_panel_xxs": true,  //  v  2
  "gruvbox_panel_xs": true,   //  |  4
  "gruvbox_panel_s": true,    //  |  8
                              //  |  11 (Default)
  "gruvbox_panel_l": true,    //  |  13
  "gruvbox_panel_xl": true,   //  |  15
  "gruvbox_panel_xxl": true,  //  v  17
```

</details>

<details>
<summary>Scrollbar Widths</summary>

Adjust the width of the scrollbars

```json
  // sizes are total width in px
  "gruvbox_scrollbar_width_xs": true,  //  v  12
  "gruvbox_scrollbar_width_s": true,   //  |  14
                                       //  |  16 (Default)
  "gruvbox_scrollbar_width_l": true,   //  |  18
  "gruvbox_scrollbar_width_xl": true,  //  v  20
```

</details>

<details>
<summary>Button Font Sizes</summary>

Adjust the font size of the buttons

```json
  "gruvbox_buttons_font_size_10": true,  //  v  10
                                         //  |  11 (Default)
  "gruvbox_buttons_font_size_12": true,  //  |  12
  "gruvbox_buttons_font_size_13": true,  //  |  13
  "gruvbox_buttons_font_size_14": true,  //  |  14
  "gruvbox_buttons_font_size_15": true,  //  |  15
  "gruvbox_buttons_font_size_16": true,  //  v  16
```

</details>

<details>
<summary>Disable/Enable Borders</summary>

```json
  "gruvbox_disable_borders": true,                     // Disable all borders
  "gruvbox_enable_pane_borders": true,                 // Enable borders between panes
  "gruvbox_enable_sidebar_border": true,               // Enable the sidebar border
  "gruvbox_enable_statusbar_border": true,             // Enable borders for the status bar
  "gruvbox_enable_tab_borders": true,                  // Enable borders for the tabs
  "gruvbox_disable_command_palette_row_border": true,  // Disable Command Palette row borders
```

</details>

### Alternate Folder Icons

<details>
<summary>Larger Default Folder Icons</summary>

Use larger default folder icons in the sidebar

```json
"gruvbox_folder_icons_large": true,
```

</details>

<details>
<summary>Square Folder Icons</summary>

![Square Folder Icons](http://i.imgur.com/ojqgVIv.png)

Use square folder icons in the sidebar

```json
"gruvbox_folder_icons_square": true,
```

</details>

<details>
<summary>Circle Folder Icons</summary>

![Circle Folder Icons](http://i.imgur.com/KgAedvC.png)

Use 'circle' folder icons in the sidebar

```json
"gruvbox_folder_icons_circle": true,
```

</details>

<details>
<summary>Plus/Minus Folder Icons</summary>

![Plus Minus Folder Icons](http://i.imgur.com/bOzgz16.png)

Use 'plus/minus' folder icons in the sidebar

```json
"gruvbox_folder_icons_plus_minus": true,
```

</details>

<details>
<summary>Spacegray Folder Icons</summary>

Use spacegray-like folder icons in the sidebar

```json
"gruvbox_folder_icons_spacegray": true,
```

</details>

### Alternate Icon Sets

<details>
<summary>Midstroke</summary>

![Midstroke Icon Set](http://i.imgur.com/dhktw4M.png)

Use icons with a 1.5x thicker stroke

```json
"gruvbox_iconset_midstroke": true,
```

</details>

<details>
<summary>Thick</summary>

![Thick Icon Set](http://i.imgur.com/Z9uIRPH.png)

Use icons with a 2x thicker stroke

```json
"gruvbox_iconset_thick": true,
```

</details>

<details>
<summary>Spacegray</summary>

![Spacegray Icon Set](http://i.imgur.com/SiL6f32.png)

Use spacegray-like icons

```json
"gruvbox_iconset_spacegray": true,
```

</details>

### PlainTasks Support

<details>
<summary>PlainTasks Support</summary>

To use the color scheme with the [Plain​Tasks](https://packagecontrol.io/packages/PlainTasks) plugin, add the color scheme path to the `"color_scheme"` key in `Preferences > Package Settings > PlainTasks > Settings - User` like so:

```json
// PlainTasks.sublime-settings

{
  "color_scheme": "Packages/gruvbox/gruvbox (Dark) (Medium).sublime-color-scheme",
}

```

</details>

### Even More Settings...

<details>
<summary>Even More Settings...</summary>

```json
  "gruvbox_animate_icons": true,              // Enable icon animations
  "gruvbox_buttons_bold": true,               // Enable bold button labels
  "gruvbox_colored_tooltips": true,           // Color the tooltip backgrounds with the current accent color
  "gruvbox_disable_faded_file_icons": true,   // Make file-type icons opaque
  "gruvbox_disable_file_icons": true,         // Disable the sidebar file icons
  "gruvbox_disable_folder_icons": true,       // Disable the sidebar folder icons
  "gruvbox_disable_greyscale": true,          // Use gruvbox colors instead of greyscale colors for certain text
  "gruvbox_disable_panels_button": true,      // Hide the panel-switching button
  "gruvbox_enable_panel_close_button": true,  // Enable the panel close button
  "gruvbox_highlight_active_buttons": true,   // Highlight selected buttons in the Find & Replace panel
  "gruvbox_highlight_active_tree_row": true,  // Highlight the active file in the sidebar tree
  "gruvbox_less_contrast": true,              // Use less contrasting colors in sidebar, tabs, etc.
  "gruvbox_statusbar_bold": true,             // Enable bold status bar labels
  "gruvbox_tabs_autowidth": true,             // Auto-size the tabs
  "gruvbox_tabs_bold": true,                  // Enable bold tabs
```

</details>

## Extras

All extras can be found in the [`extras`](extras) sub-directory of the package.

### App Icons

App icons in PNG, ICO, & ICNS format are located in [`extras/app-icons/`](extras/app-icons).

### SublimeLinter Gutter Theme

<details>
<summary>Activation</summary>

1. Add the `gruvbox` directory from `extras/sublimelinter gutter-themes/` to `Sublime Text/Data/Packages/SublimeLinter/gutter-themes/`
2. Set `gruvbox` as the gutter theme by choosing `SublimeLinter: Choose Gutter Theme` from the command palette and selecting `gruvbox` *or* by changing `"gutter_theme"` to `"Packages/SublimeLinter/gutter-themes/gruvbox/gruvbox.gutter-theme"` in `SublimeLinter.sublime-settings`
3. Restart Sublime Text

</details>

### Bracket Highlighter Icons

<details>
<summary>Activation</summary>

![Bracket Highlighter Icons](http://i.imgur.com/8z0feh7.png)

1. Move all images in `extras/BracketHighlighter/icons/` to `Sublime Text/Data/Packages/BracketHighlighter/icons/`
2. Restart Sublime Text

</details>

### Code Fold Icon

<details>
<summary>Activation</summary>

![Code Fold Icons](http://i.imgur.com/DxZmm7a.png)

1. Rename any `*_fold.png` in `extras` to `fold.png`
2. Add the newly renamed `fold.png` icon to `Sublime Text/Data/Packages/Theme - Default/`
2. Restart Sublime Text

</details>

### Bookmark Icon

<details>
<summary>Activation</summary>

![Bookmark Icons](http://i.imgur.com/Pf9yCR8.png)

1. Rename any `*_bookmark_*.png` in `extras` to `bookmark.png`
2. Add the newly renamed `bookmark.png` icon to `Sublime Text/Data/Packages/Theme - Default/`
3. Restart Sublime Text

</details>

---

## Palette

<details>
<summary>Dark mode</summary>

![Palette Dark](http://i.imgur.com/wa666xg.png)

</details>

<details>
<summary>Light mode</summary>

![Palette Light](http://i.imgur.com/49qKyYW.png)

</details>

---

## License

[MIT](https://en.wikipedia.org/wiki/MIT_License)

## Contributing

Contributions are always welcome. Before contributing please read [`CONTRIBUTING.md`](CONTRIBUTING.md).

## For Other Editors

* [Atom](https://atom.io/themes/gruvbox-plus-syntax)

## Thanks

Thanks to:

* [Pavel Pertsev](https://github.com/morhetz) for creating gruvbox for Vim.
* [Will Bond](https://github.com/wbond) for the mathematical [Package Control](https://packagecontrol.io/)
* [Spacegray](http://kkga.github.io/spacegray/) and [Material Theme](http://equinusocio.github.io/material-theme) for inspiration
