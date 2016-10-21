var demo = angular.module('demo', []);

demo.controller('SampleCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/data/data.json')
       .success(function(data) {
         $scope.data = data;
         // pre-select first name from drop down
         $scope.order = 'firstName';
       });
}]);
