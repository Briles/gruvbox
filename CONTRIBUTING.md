# Contributing to gruvbox for Sublime Text

Contributions are always welcome. Before contributing please [search the issue tracker](https://github.com/Briles/gruvbox/issues); your issue may have already been discussed or fixed in `develop`. To contribute, [fork](https://help.github.com/articles/fork-a-repo/) gruvbox, commit your changes, & [send a pull request](https://help.github.com/articles/using-pull-requests/) to the `develop` branch.

## Feature Requests

Feature requests should be submitted in the [issue tracker](https://github.com/Briles/gruvbox/issues), with a description of
the expected behavior, where they’ll remain closed until sufficient interest, e.g. :+1:’s, has been shown by the community. Before submitting a request, please search for similar ones in the [closed issues](https://github.com/Briles/gruvbox/issues?q=is%3Aissue+is%3Aclosed+label%3Aenhancement).

## Pull Requests

For additions or bug fixes you should only need to modify the `*.js` files under the `./.gulp/` directory.

> Do not edit the `*.sublime-theme`, `.sublime-color-scheme`, or `.sublime-settings` files directly as your changes will not be retained on the next build

## Building

To build the themes, schemes, and widgets you will need [Node.js](https://nodejs.org/)

1. Install the dependencies with `npm install`
2. Run `./.gulp/build.js` with Node to build everything

```bash
 Usage: build [options]

  Options:

    -h, --help    output usage information
    -t, --theme   Build Themes
    -s, --scheme  Build Schemes
    -w, --widget  Build Widgets
```

Optionally, you can use gulp to ease the build process. You will need to have [gulp](https://github.com/gulpjs/gulp) installed globally.

The following gulp tasks are available:

- `gulp` runs the default `watch` task.
- `gulp watch` watches `./.gulp/*.js` and builds everything on change.
- `gulp build_themes` builds theme `.sublime-themes`
- `gulp build_schemes` builds color scheme `.sublime-color-schemes`
- `gulp build_widgets` builds widget `.sublime-settings`
- `gulp build_all` builds themes, schemes, and widgets
- `gulp build_icons` builds file-type icon `.tmPreferences`
- `gulp build` builds themes, schemes, widgets, and icons

## Navigating the Files

- `./.gulp/build.js` the main script which builds themes, schemes, and widgets
- `./.gulp/icons.js` script which creates `.tmPreferences` for all icons in `./.gulp/icons/`
- `./.gulp/components/*.js` contains all the `.sublime-theme` components
- `./.gulp/scheme.js` contains all the `.sublime-color-scheme` components
- `./.gulp/widget.js` contains all the `.sublime-settings` widget components

## Coding Guidelines

In addition to the following guidelines, please follow the conventions already established in the code.

All `*.js` files should follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

Guidelines are enforced using [JSCS](https://www.npmjs.com/package/jscs):

```bash
$ npm run style
```
