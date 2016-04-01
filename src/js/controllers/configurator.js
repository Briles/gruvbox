module.exports = function ($scope, $routeParams, $location) {
  'use strict';

  $scope.conf = {
    brightness: 'dark',
    contrast: 'medium',
    accent: 'none',
    accentMod: 'none',
    sidebarSpacing: 'default',
    sidebarFontSize: '11',
    statusbarHeight: 'default',
    tabSize: 'default',
    tabFontSize: '11',
    panelSize: 'default',
  };

  var getConfiguration = function () {
    var currentConfiguration = [];

    for (var option in $scope.conf) {
      currentConfiguration.push($scope.conf[option]);
    }

    return currentConfiguration;
  };

  $scope.getClassList = function () {
    return getConfiguration().join(' ');
  };

  $scope.getTheme = function () {
    return $scope.conf.brightness + $scope.conf.contrast;
  };

  $scope.getLocation = function () {
    return $location.$$path;
  };
};
