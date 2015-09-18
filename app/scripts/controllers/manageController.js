'use strict';

app.controller('manageController', function($scope, $rootScope, BlogService){

	$scope.message = 'Manage Blog Posts';

	BlogService.getPosts().success(function(data){
		$scope.posts = data;
	}).error(function(){
		$scope.error = "Blog posts not found"
	});
});
