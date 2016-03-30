module.exports = function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'about.html',
    })
    .when('/options', {
      templateUrl: 'options.html',
    })
    .otherwise({
      redirectTo: '/',
    });
};
