module.exports = function ($scope, $routeParams, $location) {
  'use strict';

  $scope.brightness = 'dark';
  $scope.contrast = 'medium';
  $scope.accent = '';
  $scope.accentMod = '';
  $scope.location = $location.$$path;

  $scope.getTheme = function () {
    return $scope.brightness + $scope.contrast;
  };
};
