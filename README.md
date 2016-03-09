<p>
  <a href="https://github.com/Briles/gruvbox/tags"><img src="https://img.shields.io/github/tag/briles/gruvbox.svg?style=flat-square" alt="GitHub tag"></a>
  <a href="https://github.com/Briles/gruvbox/compare/1.9.0...develop"><img src="https://img.shields.io/github/commits-since/briles/gruvbox/1.9.0.svg?style=flat-square" alt="GitHub Commits Since"></a>
  <a href="https://packagecontrol.io/packages/gruvbox"><img src="https://img.shields.io/packagecontrol/dt/gruvbox.svg?style=flat-square" alt="Package Control"></a>
  <a href="https://github.com/Briles/gruvbox/blob/master/LICENSE"><img src="https://img.shields.io/github/license/briles/gruvbox.svg?style=flat-square" alt="GitHub license"></a>
</p>

<p align="center"><img src="https://cdn.rawgit.com/Briles/gruvbox/master/assets/banner-image.svg" alt="gruvbox for Sublime Text" width="327px" height="122px"></p>

Based on [gruvbox for vim](https://github.com/morhetz/gruvbox)

> gruvbox is heavily inspired by [badwolf][], [jellybeans][] and [solarized][].

> Designed as a bright theme with pastel 'retro groove' colors and light/dark mode switching in the way of [solarized][]. The main focus when developing gruvbox is to keep colors easily distinguishable, contrast enough and still pleasant for the eyes.

   [badwolf]: https://github.com/sjl/badwolf
   [jellybeans]: https://github.com/nanotech/jellybeans.vim
   [solarized]: http://ethanschoonover.com/solarized

> &mdash; <cite>[Pavel Pertsev](https://github.com/morhetz), creator of gruvbox for vim</cite>

![Screenshot Dark](http://i.imgur.com/VyXrbOv.png)
![Screenshot Light](http://i.imgur.com/1UHJx8B.png)

Contrast options
----------------

![Screenshot Contrast Options](http://i.imgur.com/euGncPs.png)

Monospaced font used in screenshots is [Fira Mono Medium](https://github.com/mozilla/Fira)

Palette
-------

### Dark mode

![Palette Dark](http://i.imgur.com/wa666xg.png)

### Light mode

![Palette Light](http://i.imgur.com/49qKyYW.png)

--------------------------------------------------------------------------------

Features
--------

* Lots of customization options
* Support for High-DPI displays
* Support for:
    * [GitGutter](https://packagecontrol.io/packages/GitGutter)
    * [Bracket Highlighter](https://packagecontrol.io/packages/BracketHighlighter)
    * [SublimeLinter](https://packagecontrol.io/packages/SublimeLinter)
    * [Doc​Blockr](https://packagecontrol.io/packages/DocBlockr)
    * [Markdown Extended](https://packagecontrol.io/packages/Markdown%20Extended)
    * [HexViewer](https://packagecontrol.io/packages/HexViewer)
* Support for the latest Sublime Text features

![High DPI](http://i.imgur.com/xiEzVPe.png)

Installation
------------

#### Package Control

The easiest way to install is using [Package Control](https://packagecontrol.io/)


1. Open Command Palette using menu item `Tools -> Command Palette...` (<kbd>⇧</kbd><kbd>⌘</kbd><kbd>P</kbd> on Mac) (<kbd>ctrl</kbd><kbd>shift</kbd><kbd>P</kbd> on Windows)
2. Choose `Package Control: Install Package`
3. Find `gruvbox` and hit <kbd>Enter</kbd>
4. [Activate the theme](#how-to-activate) by adding the code below to *Preferences > Setting - User*:
5. Restart Sublime Text

#### Manual

You can also install the theme manually:

1. [Download the .zip](https://github.com/briles/gruvbox/archive/master.zip)
2. Unzip and rename the folder to `gruvbox`
3. Copy the folder into `Packages` directory, which you can find using the menu item `Sublime Text -> Preferences -> Browse Packages...`
4. [Activate the theme](#how-to-activate) by adding the code below to *Preferences > Setting - User*:
5. Restart Sublime Text

How to Activate
---------------

Activate the UI theme and color scheme by modifying your user preferences file, which you can find using the menu item `Sublime Text -> Preferences -> Settings - User` (<kbd>⌘</kbd><kbd>,</kbd> on Mac).

*Note: Don't forget to restart Sublime Text after activating the theme.*


```json
// gruvbox Dark Hard Contrast
{
  "theme": "gruvbox (Dark) (Hard).sublime-theme",
  "color_scheme": "Packages/gruvbox/gruvbox (Dark) (Hard).tmTheme",
}


// gruvbox Dark Medium Contrast
{
  "theme": "gruvbox (Dark) (Medium).sublime-theme",
  "color_scheme": "Packages/gruvbox/gruvbox (Dark) (Medium).tmTheme",
}


// gruvbox Dark Soft Contrast
{
  "theme": "gruvbox (Dark) (Soft).sublime-theme",
  "color_scheme": "Packages/gruvbox/gruvbox (Dark) (Soft).tmTheme",
}


// gruvbox Light Hard Contrast
{
  "theme": "gruvbox (Light) (Hard).sublime-theme",
  "color_scheme": "Packages/gruvbox/gruvbox (Light) (Hard).tmTheme",
}


// gruvbox Light Medium Contrast
{
  "theme": "gruvbox (Light) (Medium).sublime-theme",
  "color_scheme": "Packages/gruvbox/gruvbox (Light) (Medium).tmTheme",
}


// gruvbox Light Soft Contrast
{
  "theme": "gruvbox (Light) (Soft).sublime-theme",
  "color_scheme": "Packages/gruvbox/gruvbox (Light) (Soft).tmTheme",
}
```

Settings
--------

#### Accent Colors

![Accent Colors](http://i.imgur.com/QhdrE58.png)

Enable accent color by setting the appropriate key to `true`
Accent colors affect icons and certain text.

```json
  "gruvbox_accent_aqua": true,
  "gruvbox_accent_blue": true,
  "gruvbox_accent_green": true,
  "gruvbox_accent_orange": true,
  "gruvbox_accent_purple": true,
  "gruvbox_accent_red": true,
  "gruvbox_accent_yellow": true,
  "gruvbox_accent_opposite": true, // Use the other mode's accent color; IE: Use Light theme's red with Dark theme
  "gruvbox_accent_neutral": true, // Use brightness-mode-neutral accent color
```

#### AutoComplete Spacing

![AutoComplete Spacing](http://i.imgur.com/8H6F051.gif)

Change the space between autocomplete rows

```json
  // sizes are top/bottom in px
  "gruvbox_autocomplete_cozy": true,         //  v  2
  "gruvbox_autocomplete_comfortable": true,  //  |  4
                                             //  |  6 (Default)
  "gruvbox_autocomplete_compact": true,      //  |  8
  "gruvbox_autocomplete_cramped": true,      //  v  10
```

#### Sidebar Spacing

![Sidebar Spacing](http://i.imgur.com/YcbDJK4.png)

Change the space between sidebar tree rows

```json
  // sizes are top/bottom in px
  "gruvbox_sidebar_cozy": true,         //  v  1
  "gruvbox_sidebar_comfortable": true,  //  |  3
                                        //  |  5 (Default)
  "gruvbox_sidebar_compact": true,      //  |  7
  "gruvbox_sidebar_cramped": true,      //  v  9
```

#### Sidebar Font Sizes

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

#### Statusbar Sizes

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

#### Tab Sizes

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

#### Tab Font Sizes

Change the font size of the tabs

*Font sizes above 11 may get cut off. This is a [known issue][] with Sublime Text.*

   [known issue]: https://forum.sublimetext.com/t/increaseing-font-size-of-file-tabs-cuts-off-the-font/7009

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

#### Autocollapsing Tab Bar

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

#### Even More Settings...

```json
  "gruvbox_colored_tooltips": true,             // Color the tooltip backgrounds with the current accent color
  "gruvbox_disable_borders": true,              // Disable all borders
  "gruvbox_disable_faded_file_icons": true,     // Make file-type icons fully opaque
  "gruvbox_disable_fileicons": true,            // Disable the sidebar file icons
  "gruvbox_disable_folder_icons": true,         // Disable the sidebar folder icons
  "gruvbox_disable_greyscale": true,            // Use gruvbox colors instead of greyscale colors for certain text
  "gruvbox_disable_panels_button": true,        // Hide the panel-switching button
  "gruvbox_enable_literal_folder_icons": true,  // Use 'literal' folder icons in the sidebar
  "gruvbox_enable_panel_close_button": true,    // Enable the panel close button
  "gruvbox_enable_statusbar_border": true,      // Enable borders for the status bar
  "gruvbox_highlight_active_tree_row": true,    // Highlight the active file in the sidebar tree
  "gruvbox_iconset_spacegray": true,            // Use spacegray-like icons in the status bar
  "gruvbox_tabs_autowidth": true,               // Auto-size the tabs
  "gruvbox_tabs_bold": true,                    // Enable bold tabs
```

Extras
------

all extras can be found in the `extras` directory of the package.

### SublimeLinter Gutter Theme

Activation:

1. Add the `gruvbox` directory from `extras/sublimelinter gutter-themes/` to `Sublime Text/Data/Packages/SublimeLinter/gutter-themes/`
2. Set `gruvbox` as the gutter theme by choosing `SublimeLinter: Choose Gutter Theme` from the command palette and selecting `gruvbox` *or* by changing `"gutter_theme"` to `"Packages/SublimeLinter/gutter-themes/gruvbox/gruvbox.gutter-theme"` in `SublimeLinter.sublime-settings`
3. Restart Sublime Text

### Code Fold Icon

Activation:

1. Rename any `*_fold.png` in `extras` to `fold.png`
2. Add the newly renamed `fold.png` icon to `Sublime Text/Data/Packages/Theme - Default/`
2. Restart Sublime Text

### Bookmark Icon

Activation:

1. Rename any `*_bookmark_*.png` in `extras` to `bookmark.png`
2. Add the newly renamed `bookmark.png` icon to `Sublime Text/Data/Packages/Theme - Default/`
3. Restart Sublime Text

License
-------

[MIT](https://en.wikipedia.org/wiki/MIT_License)

Contributing
-------

Contributions are always welcome. Before contributing please
read [Contributing](https://github.com/briles/gruvbox/blob/master/.github/CONTRIBUTING.md)

Thanks
------

Thanks to:

* [Pavel Pertsev](https://github.com/morhetz) for creating gruvbox for vim.
* [Will Bond](https://github.com/wbond) for the mathematical [Package Control](https://packagecontrol.io/)
* [Spacegray](http://kkga.github.io/spacegray/) and [Material Theme](http://equinusocio.github.io/material-theme) for inspiration
