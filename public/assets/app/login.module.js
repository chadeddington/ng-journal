var login = angular.module('login', []);

login.controller('LoginCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.signIn = function() {
    console.log('Loggin in...');
  }

  $scope.register = function() {
    console.log('Creating account...');
  }
  
}]);
