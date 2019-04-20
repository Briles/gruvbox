const paths = require('./paths.js');

/**
 * @class Widget
 * @constructor
 * @param {string} basename the name of the widget
 */
function Widget(basename) {
  if (!(this instanceof Widget)) {
    return new Widget(basename);
  }

  if (!basename) {
    throw new Error('"basename must be a string"');
  }

  this.config = {
    draw_shadows: false,
  };

  this.filename = `Widget - ${basename}.sublime-settings`;
  this.destination = `${paths.external.widgets}/${this.filename}`;
  this.contents = JSON.stringify(this.config, null, 2);

  return this;
}

module.exports = Widget;
