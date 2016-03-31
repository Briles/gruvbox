module.exports = function ($scope, $routeParams, $location) {
  'use strict';

  $scope.location = $location.$$path;

  $scope.conf = {
    brightness: 'dark',
    contrast: 'medium',
    accent: '',
    accentMod: '',
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
};
