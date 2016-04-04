module.exports = function ($scope, $routeParams, $location) {
  'use strict';

  $scope.commandPaletteVisible = false;

  $scope.conf = {
    brightness: 'dark',
    contrast: 'medium',
    accent: '',
    accentMod: '',
    sidebarSpacing: '',
    sidebarFontSize: '',
    statusbarHeight: '',
    tabSize: '',
    tabFontSize: '',
    panelSize: '',
    underlineTabs: '',
    buttonsFontSize: '',
    statusbarFontSize: '',
    statusbarButtonWidth: '',
    commandPaletteSpacing: '',
  };

  var getConfiguration = function () {
    var currentConfiguration = [];

    for (var option in $scope.conf) {
      currentConfiguration.push($scope.conf[option]);
    }

    return currentConfiguration;
  };

  $scope.getClassList = function () {
    return getConfiguration().join(' ').trim();
  };

  $scope.getTheme = function () {
    return $scope.conf.brightness + $scope.conf.contrast;
  };

  $scope.getLocation = function () {
    return $location.$$path;
  };

  $scope.toggleCommandPalette = function () {
    $scope.commandPaletteVisible = $scope.commandPaletteVisible === false ? true : false;
  };
};
