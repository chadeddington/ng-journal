var journalApp = angular.module('journalApp', [
  'ngRoute',
  'demo'
]);

journalApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/demo', {
      templateUrl: '/public/assets/partials/demo.html',
      controller: 'SampleCtrl'
    }).
    otherwise({
      redirectTo: '/demo'
    })
}])