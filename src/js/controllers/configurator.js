module.exports = function ($scope, $routeParams, $location) {
  'use strict';

  $scope.brightness = 'dark';
  $scope.contrast = 'medium';
  $scope.location = $location.$$path;
};
