'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('create', {
		url: '/create/:userId',
		templateUrl: 'js/create/create.html',
		controller: 'CreateCtrl',
		/*
				add a resolve block that has an author function which 
				users $stateParams to retrieve the author object
		*/
		resolve: {
			author: function($stateParams, User) {
				console.log($stateParams.userId)
				return User.find($stateParams.userId)
			}
		}
	})
})

// add necessary dependencies here 
app.controller('CreateCtrl', function($scope, $state) {

	$scope.newPost = {
		title: "",
		name: "",
		body: ""
	}

	$scope.previewTrue = false;

	$scope.preview = function() {
		$scope.previewTrue = !$scope.previewTrue;
	}

	$scope.createNewPost = function() {
		$state.go('post', {
			title: $scope.newPost.title,
		name: $scope.newPost.name,
		body: $scope.newPost.body
		})
	}
	/*

	TODOS: 
	1 - create the object that the form can use via ng-model
  2 - create a function that 
	 		a) persists the ng-modeled post object 
			b) changes the state to 'main'  

	*/
	
}) 