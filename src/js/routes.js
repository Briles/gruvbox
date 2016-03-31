module.exports = function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'about.html',
    })
    .when('/experiment', {
      templateUrl: 'experiment.html',
    })
    .when('/options', {
      templateUrl: 'options.html',
    })
    .otherwise({
      redirectTo: '/',
    });
};
