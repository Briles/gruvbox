const path = require('path');
const components = require('./components.js');
const { common: themeVariables } = require('./theme-variables.js');

module.exports = function (values) {
  const rules = [];

  components.forEach(function (component) {
    const modulePath = path.join(values.externalPaths.components, component);
    const componentRules = require(modulePath)(values, values.externalPaths);
    rules.push(...componentRules);
  });

  return {
    name: 'gruvbox',
    homepage: 'https://github.com/Briles/gruvbox',
    description: 'Based on gruvbox for Vim (https://github.com/morhetz/gruvbox)',
    originalAuthor: 'Pavel Pertsev (https://github.com/morhetz)',
    author: 'Brian Reilly (https://github.com/Briles)',
    variables: themeVariables,
    rules: rules,
  };
};
