'use strict';

app.config(function($stateProvider) {

  $stateProvider.state('signup', {
    url: '/signup',
    templateUrl: 'js/signup/signup.html',
    controller: 'SignupCtrl',
    resolve: {

    }
  })
})

// add necessary dependencies here
app.controller('SignupCtrl', function($scope, User, $state) {

  $scope.signup = {
    username: "",
    password: ""
  };

  // $scope.sendSignup = function(signup){
  //   $state.go('create', {
  //     username: $scope.signup.username, 
  //     password: $scope.signup.password})
  //   // Create state
  // }

  $scope.sendSignup = function() {
    User.create($scope.signup).then(function(newUser) {
      $state.go('create', {
        userId: newUser._id
      })
    })
  }

  /*
  TODOS: 
  1 - create the signup object for ng-modelling
  2 - create a `sendSignup` function that
      a) persists the user data 
      b) changes the state to  'create' while sending along important user data
      (HINT: $stateParams)

  */

})
