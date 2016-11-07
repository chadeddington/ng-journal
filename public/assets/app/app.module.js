var journalApp = angular.module('journalApp', [
  'ngRoute',
  'demo',
  'login'
]);

journalApp.run(function($rootScope) {
    $rootScope.loggedIn = false;
})

journalApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/login', {
      templateUrl: '/assets/partials/login.html',
      controller: 'LoginCtrl'
    }).
    when('/demo', {
      templateUrl: '/assets/partials/demo.html',
      controller: 'SampleCtrl'
    }).
    otherwise({
      redirectTo: '/login'
    })
}]);