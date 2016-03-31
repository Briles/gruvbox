module.exports = function ($scope, $routeParams, $location) {
  'use strict';

  $scope.conf = {
    brightness: 'dark',
    contrast: 'medium',
    accent: '',
    accentMod: '',
    sidebarSpacing: '',
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
    return $scope.brightness + $scope.contrast;
  };

  $scope.getLocation = function () {
    return $location.$$path;
  };
};
