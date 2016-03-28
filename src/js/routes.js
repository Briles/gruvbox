module.exports = function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'about.html',
      controller: 'configuratorCtrl',
    })
    .when('/options', {
      templateUrl: 'options.html',
    })
    .otherwise({
      redirectTo: '/',
    });
};
