const path = require('path');
const paths = require('./paths.js');

class Widget {
  constructor(basename, settings = {}) {
    if (!basename) {
      throw new TypeError('"basename must be a string"');
    }

    this.settings = Object.assign({}, {
      draw_shadows: false,
    }, settings);

    this.basename = basename;
  }

  getPath() {
    return path.join(paths.external.root, '/widgets', `Widget - ${this.basename}.sublime-settings`);
  }

  stringify() {
    return JSON.stringify(this.generate(), null, 2);
  }

  generate() {
    return this.settings;
  }
}

module.exports = Widget;
