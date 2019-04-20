const path = require('path');
const components = require('./components.js');
const { common: themeVariables } = require('./theme-variables.js');
const about = require('./gruvbox/about.js');

module.exports = function (values) {
  const rules = [];

  components.forEach((component) => {
    const modulePath = path.join(values.externalPaths.components, component);
    const componentRules = require(modulePath)(values, values.externalPaths);
    rules.push(...componentRules);
  });

  return Object.assign({}, about, {
    name: 'gruvbox',
    variables: themeVariables,
    rules,
  });
};
