var app = angular.module('gruvboxConfigurator', ['ngRoute']);

app.config([
  '$routeProvider',
  '$locationProvider',
  require('../routes'),
]);

app.controller('configuratorCtrl', require('./configurator'));
