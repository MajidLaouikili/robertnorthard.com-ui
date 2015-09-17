'use strict';

app.controller('blogController', function($scope, BlogService){

	$scope.message = 'Blog';

	BlogService.getPosts().success(function(data){
		$scope.posts = data;
	});
});