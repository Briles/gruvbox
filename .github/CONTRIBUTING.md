# Contributing to gruvbox for Sublime Text

Contributions are always welcome. Before contributing please
[search the issue tracker](https://github.com/briles/gruvbox/issues); your issue
may have already been discussed or fixed in `develop`. To contribute,
[fork](https://help.github.com/articles/fork-a-repo/) gruvbox, commit your changes,
& [send a pull request](https://help.github.com/articles/using-pull-requests/).

## Feature Requests

Feature requests should be submitted in the
[issue tracker](https://github.com/briles/gruvbox/issues), with a description of
the expected behavior, where they’ll remain closed until sufficient
interest, e.g. :+1:’s, has been shown by the community. Before submitting a request,
please search for similar ones in the
[closed issues](https://github.com/briles/gruvbox/issues?q=is%3Aissue+is%3Aclosed+label%3Aenhancement).

## Pull Requests

For additions or bug fixes you should only need to modify the `*.js` files
under the `./src/` directory.

**Note**: Do not edit the `*.sublime-theme`, `.tmTheme`, or `.sublime-settings` files
directly as your changes will not be retained on the next build

## Building

To build the themes, schemes, and widgets you will need [Node.js](https://nodejs.org/)

1. Install the dependencies with `npm install`
2. Run `./src/build.js` with Node to build everything.

Optionally, you can use gulp to ease the build process. You will need to have
[gulp](https://github.com/gulpjs/gulp) installed globally.

The following gulp tasks are available:

- `gulp` runs the default `watch` task.
- `gulp watch` watches `./src/*.js` and builds everything on change.
- `gulp build` builds everything.

## Navigating the Files

- `./src/build.js` the main script which builds everything
- `./src/components/*.js` contains all the `.sublime-theme` components
- `./src/scheme.js` contains all the `.tmTheme` components
- `./src/widget.js` contains all the `.sublime-settings` widget components

## Coding Guidelines

In addition to the following guidelines, please follow the conventions already
established in the code.

All `*.js` files should follow the
[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
with a few exceptions:

- **Sublime Text Theme Components**:<br>
  Single-quote all object keys which are outputted to a theme.

Guidelines are enforced using [JSCS](https://www.npmjs.com/package/jscs):

```bash
$ npm run style
```
