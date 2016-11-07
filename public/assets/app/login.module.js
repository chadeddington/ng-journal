var login = angular.module('login', []);

login.controller('LoginCtrl', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {
  $scope.user = {};
  $scope.newUser = {};
  $scope.hideRegisterSuccess = true;
  $scope.hideRegisterError = true;
  $scope.hideLoginError = true;

  /** Functions */

  /**
   * Log in form completed
   * @return {Boolean} [description]
   */
  $scope.loginFormCheck = function() {
    if ($scope.user.username && $scope.user.password) return false;
    return true;
  }

  /**
   * Register form completed
   * @return {Boolean} [description]
   */
  $scope.registerFormCheck = function() {
    var user = $scope.newUser;
    var passGood = false;
    var nameGood = false;

    // Check that passwords match
    if (user.password1 && user.password2 && user.password1.length > 0 
     && user.password2.length > 0 && user.password1 === user.password2) {
      passGood = true;
    }

    // Check that username is available
    if (user.username) nameGood = findUserName(user.username)

    return !(nameGood && user.email && passGood);
  }

  /**
   * Sign In Call
   */
  $scope.signIn = function() {
    // console.log('Loggin in...', $scope.user.firstName + ' ' + $scope.user.password);
    $rootScope.loggedIn = true;
    console.log($scope.user)

    //Try logging in
    $http.post('/user-login', { 'username': $scope.user.username, 'password': $scope.user.password })
          .then(function(response) {
          	if (response.data.success) {
              console.log('yay!');
              // route to logged in page
            } else {
              $scope.hideLoginError = false;
            }
          }, function(err) {
            $scope.hideLoginError = false;
          });
  }

  /**
   * Register Call
   */
  $scope.register = function() {
    // console.log('Registering new user...');
    var user = $scope.newUser;

    // Try Registering
    $http.post('/user-register', { 'username': user.username, 'email': user.email, 'password': user.password1 })
          .then(function(response) {
            if (response.data.success) {
              resetCredentials();
              $scope.hideRegisterSuccess = false;
              document.querySelector('#user-username').focus();
            }
          }, function(err) {
            console.log('Error registering');
            $scope.hideRegisterError = false;
          });
  }

  /**
   * Close the alert message
   */
  $scope.closeAlert = function() {
    $scope.hideRegisterSuccess = true;
    $scope.hideRegisterError = true;
    $scope.hideLoginError = true;
  }

  /**
   * Check that user name is available
   */
  function findUserName() {
    return true;
  }
  
  /**
   * Clear the input fields
   */
  function resetCredentials() {
    $scope.user = {};
    $scope.newUser = {};
  }
  
  
}]);
