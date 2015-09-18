'use strict';

app.controller('blogListController', function($scope, BlogService){

	$scope.message = 'Blog';

	BlogService.getPosts().success(function(data){
		$scope.posts = data.data;
	});
});