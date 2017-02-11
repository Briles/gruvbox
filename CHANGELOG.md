# gruvbox for Sublime Text 3

<https://github.com/Briles/gruvbox>

## CHANGELOG

### [Version 2.4.0](https://github.com/Briles/gruvbox/compare/2.3.0...2.4.0)

* THEMES
  * fixed Briles/gruvbox#24
  * added support for the Skins package
* COLOR SCHEMES
  * added support for the Skins package
* Support
  * open README, CHANGELOG or CONTRIBUTING as md2html phantom
  * report issues via menu or control palette
* Development
  * removed unused 'uuid' npm dependency
  * moved 'scr' to '.gulp' and updated references
  * moved icon preferences output from 'prefs' to 'metadata' as those are TextMate metadata files

### [Version 2.3.0](https://github.com/Briles/gruvbox/compare/2.2.0...2.3.0)

* THEMES
  * You can now underline the active tab

### [Version 2.2.0](https://github.com/Briles/gruvbox/compare/2.1.6...2.2.0)

* THEMES
  * Added option to enable larger default folder icons (`"gruvbox_folder_icons_large": true`)
  * Colored more popup constructs
  * Fixed gulp file-type icon extensions
  * Progress bars now have better contrast

### [Version 2.1.6](https://github.com/Briles/gruvbox/compare/2.1.5...2.1.6)

* COLOR SCHEMES
  * Added preliminary support for tooltip popups
  * Colored more method calls
  * Fixed language constant punctuation color
  * Improved Pug/Jade coloring
  * Ensured more CSS invalid foregrounds are reset
  * Fixed JavaScript dollar-function call color

### [Version 2.1.5](https://github.com/Briles/gruvbox/compare/2.1.4...2.1.5)

* THEMES
  * Added PostScript file type icon
  * Added new LSL file type icon
  * Added animated panel switching icon (`"gruvbox_animate_icons": true`)
* COLOR SCHEMES
  * Improved Ruby, Batch, & C++ coloring
  * Improved coloring of function call parentheses
  * Improved coloring of method calls
  * Find in Files constructs are now colored (filename, match, etc.)
  * Colored build error messages

### [Version 2.1.4](https://github.com/Briles/gruvbox/compare/2.1.3...2.1.4)

* THEMES
  * Fixed an issue with broken animated icons when using Light themes

### [Version 2.1.3](https://github.com/Briles/gruvbox/compare/2.1.2...2.1.3)

* THEMES
  * Added animated tab close & folder icons for the default iconset (`"gruvbox_animate_icons": true`), see <https://github.com/Briles/gruvbox/issues/6>
* COLOR SCHEMES
  * Reverted a previous change to constructor call colors
  * Various JavaScript dollar sign ($) improvements
  * Fixed JavaScript object literal string key color

### [Version 2.1.2](https://github.com/Briles/gruvbox/compare/2.1.1...2.1.2)

* COLOR SCHEMES
  * Reverted a previous change to constructor call colors
  * Many CSS coloring improvements
  * C# operator improvements
  * Colored Python string placeholder

### [Version 2.1.1](https://github.com/Briles/gruvbox/compare/2.1.0...2.1.1)

* THEMES
  * Fixed an issue with view borders not being disabled when using a multiple view layout and the `gruvbox_disable_borders` option.
  * Slightly lightened the border & container colors
  * Began consideration for adding animated icons; however, feedback is needed before we can implement this feature, for more information please visit: <https://github.com/Briles/gruvbox/issues/6>
* COLOR SCHEMES
  * Colored constructor calls the same as function calls
  * Applied neutral color to accessor operators
  * Improved punctuation coloring within JavaScript template literal expressions
  * Colored JavaScript tagged template literal
  * Colored JavaScript getter & setter accessor names
* Extras
  * You can now find app icons in PNG, ICO, & ICNS format located at <https://github.com/Briles/gruvbox/tree/master/extras/app-icons>

### [Version 2.1.0](https://github.com/Briles/gruvbox/compare/2.0.1...2.1.0)

* THEMES
  * Added new icon set with 1.5x thicker stroke ("gruvbox_iconset_midstroke": true,)
  * Added new icon set with 2x thicker stroke ("gruvbox_iconset_thick": true,)
  * You can now add a border to the left of the selected command palette row:
  * You can now add a border to the left of the selected autocomplete row:
  * Added option to disable the selected command palette row highlight
  * Added option to disable the selected autocomplete row highlight
  * Began consideration for adding animated icons; however, feedback is needed before we can implement this feature, for more information please visit: <https://github.com/Briles/gruvbox/issues/6>
* COLOR SCHEMES
  * Added a new color scheme variation: No Dimmed Colors (NDC). This color scheme does not have any neutral-colored punctuation, methods, etc.
  * SCSS RGB values are now colored correctly
  * Improved Markdown punctuation coloring
  * Fixed an issue with mis-colored comment punctuation

### [Version 2.0.1](https://github.com/Briles/gruvbox/compare/2.0.0...2.0.1)

* THEMES
  * Fixed an issue with underlined, modified tabs not being shown when using
      `"gruvbox_enable_tab_borders"`

### [Version 2.0.0](https://github.com/Briles/gruvbox/compare/1.13.0...2.0.0)

* THEMES
  * Removed the "gruvbox_enable_literal_folder_icons" option
  * Added option to enable circle folder icons ("gruvbox_folder_icons_circle": true,)
  * Added option to enable spacegray folder icons ("gruvbox_folder_icons_spacegray": true,)
  * Added option to disable Command Palette row border ("gruvbox_disable_command_palette_row_border": true,)
  * Changed the folder icons option names:
  * Added option to enable AutoComplete border:
  * Added option to change Status Bar button widths:
  * Added option to change Status Bar labels font size:
  * Added option to change Button font size:
* COLOR SCHEMES
  * Slim comment punctuation is now colored correctly
  * Improved Regular Expression coloring in JavaScript, Ruby, & others
  * Improved DocBlockr support for CoffeeScript, TypeScript, PHP, Java, & Groovy
  * Improved Markdown punctuation coloring
  * Improved Scala variable coloring
  * Matlab functions are now colored the same as other languages
  * Minor improvements to React templates and JSX
  * Bracket Highlighter bracket match colors had their brightness increased
  * SASS equality operators are now correctly colored
  * CSS at-rule vendor prefixes are now correctly colored
  * Improvements to CSS, SASS, LESS, & Stylus keyframes at-rule
  * CSS, SASS & LESS attribute selectors are now `aqua` to differentiate
      between id, class, and tag selectors

### [Version 1.13.0](https://github.com/Briles/gruvbox/compare/1.12.0...1.13.0)

* THEMES
  * Added option to enable bold button labels ("gruvbox_buttons_bold": true,)
  * Added option to enable bold status bar labels ("gruvbox_statusbar_bold": true,)
  * Added option to enable tab borders ("gruvbox_enable_tab_borders": true,)
  * Added option to enable sidebar border ("gruvbox_enable_sidebar_border": true,)
  * Added option to highlight selected buttons ("gruvbox_highlight_active_buttons": true,)
* COLOR SCHEMES
  * Improved coloring for: `JavaScript, Pug, HTML, HAML, XML, CSS, SCSS, SASS, LESS, Diff, Markdown, Mustache`

### [Version 1.12.0](https://github.com/Briles/gruvbox/compare/1.11.0...1.12.0)

* THEMES
  * Added option to use less contrasting colors in sidebar, tabs, etc. ("gruvbox_less_contrast": true,)
  * Fixed an issue with minimap opacity

### [Version 1.11.0](https://github.com/Briles/gruvbox/compare/1.10.0...1.11.0)

* THEMES
  * Added option to change Find, Replace, and Console margins
  * Added option to change Scrollbar width
  * Added option to change Command Palette padding
  * Added option to underline modified tabs with accent color
  * Buttons are now the same height as text inputs
  * Fixed doubled left margin when using disable_panels_button
  * Improved support for the BracketGuard plugin
  * Removed excessive sidebar & scrollbar borders
* COLOR SCHEMES
  * Added support for PlainTasks plugin (see https://github.com/Briles/gruvbox#plaintasks-support)
  * Improved coloring of template strings across languages
  * Improved coloring of variables across languages
  * Improved coloring for: `Apache.conf, C#, CSS, Gradle, HAML, HTML, Haskell, Haxe, LESS, SASS, SCSS`
* EXTRAS
  * Added Bracket Highlighter icons: https://github.com/Briles/gruvbox#bracket-highlighter-icons

### [Version 1.10.0](https://github.com/Briles/gruvbox/compare/1.9.0...1.10.0)

* THEMES
  * Added option to further highlight active file in sidebar (`"gruvbox_highlight_active_tree_row": true`)
  * Added option to use plus/minus folder icons (`"gruvbox_enable_plus_minus_folder_icons": true`)
  * Added option to enable square folder icons (`"gruvbox_enable_square_folder_icons": true`)
  * The spacegray icon set now includes spacegray-like sidebar folder icons
  * Folder icons should now actually be completely hidden when using `gruvbox_disable_folder_icons`
  * Expanded-symlinked folder-literal icons look more consistent with their default state
  * Added new file-type icons & recolored remaining with gruvbox colors
  * Better looking file-type icons in the sidebar
  * Better detection of file-types for file-type icons
  * Additional code fold icons (see <https://github.com/Briles/gruvbox#code-fold-icon>)
  * Additional bookmark icons (see <https://github.com/Briles/gruvbox#bookmark-icon>)
* COLOR SCHEMES
  * Function and Method calls are now distinctly colored from Variables

### [Version 1.9.0](https://github.com/Briles/gruvbox/compare/1.6.0...1.9.0)

* THEMES
  * Added option to enable opaque file-type icons (`"gruvbox_disable_faded_file_icons": true`)
  * Added option to enable alternate 'literal' sidebar folder icons (`"gruvbox_enable_literal_folder_icons": true`)
  * Added option to change the font size of the sidebar labels:
  * Fixed symlinked & loading folder icons not being hidden when using `"gruvbox_disable_folder_icons": true`
  * Button hover states should now have better contrast, especially for light themes
* COLOR SCHEMES
  * Improved HexViewer Support
  * Improved coloring of HTML, XML, Pug, Slim, and Haml doctypes
  * Colored JavaScript dollar sign variable punctuation
  * Colored CSS, LESS, and SASS ID selector punctuation consistently

### [Version 1.6.0](https://github.com/Briles/gruvbox/compare/1.5.0...1.6.0)

* THEMES
  * Added option to disable greyscale colors (`"gruvbox_disable_greyscale": true`)
  * Improved quality of the spacegray regex icon
  * Made spacegray case-sensitive icon more spacegray-like

### [Version 1.5.0](https://github.com/Briles/gruvbox/compare/1.4.0...1.5.0)

* THEMES
  * Added option to use neutral accent colors (`"gruvbox_accent_neutral": true`)
  * Other minor fixes and improvements

### [Version 1.4.0](https://github.com/Briles/gruvbox/compare/1.3.1...1.4.0)

* THEMES
  * Added option to use opposite mode's accent color (`"gruvbox_accent_opposite": true`)

### [Version 1.3.1](https://github.com/Briles/gruvbox/compare/1.3.0...1.3.1)

* THEMES
  * Fixed transparency issue with overlay panel rows
  * Other minor fixes and improvements
* COLOR SCHEMES
  * Built-ins should now be more consistently colored
  * Made JavaScript method colors match
  * Other minor fixes and improvements

### [Version 1.3.0](https://github.com/Briles/gruvbox/compare/1.2.0...1.3.0)

* THEMES
  * Added option to enable colored tooltips (`"gruvbox_colored_tooltips": true`)
  * Added option to disable panels button (`"gruvbox_disable_panels_button": true`)
  * Added accent-colored hover state to status bar labels
  * Added SublimeLinter gutter theme (<https://github.com/Briles/gruvbox#sublimelinter-gutter-theme>)
  * Added fold icon (<https://github.com/Briles/gruvbox#code-fold-icon>)
  * Added bookmark icon (<https://github.com/Briles/gruvbox#bookmark-icon>)
  * Fixed progress control colors
  * Fixed bug which caused incorrect icons being shown when using the spacegray iconset
  * Fixed tabs bar border not showing at startup
  * Fixed sheet color
  * Fixed pane border color
  * Fixed improper scrollbar scaling
  * Made label control color distinguishable
  * Other minor fixes and improvements

### [Version 1.2.0](https://github.com/Briles/gruvbox/compare/1.1.0...1.2.0)

* THEMES
  * Added autocollapsing tabs
  * Added sidebar file close button
  * Updated Pug file-type icon
  * Other minor improvements
* COLOR SCHEMES
  * Made invalid foreground more prominent
  * Improved SCSS coloring

### [Version 1.1.0](https://github.com/Briles/gruvbox/tree/1.1.0)

* THEMES
  * Added spacegray-like iconset (use `"gruvbox_iconset_spacegray": true`)
  * Added loading folder icon
  * Added symlinked folder icon
* COLOR SCHEMES
  * Removed redudant tmTheme scopes
  * Improved markdown support
  * Improved diff coloring
  * Made Bracket Highlighter colors more neutral
* GENERAL
  * Added DocBlockr to the list of supported plugins in README.md
  * Added links to supported plugins in README.md
