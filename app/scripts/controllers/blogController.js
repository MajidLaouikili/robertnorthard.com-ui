'use strict';

app.controller('blogController', function($scope, blogService){

	$scope.message = 'Blog';

	blogService.getPosts().success(function(data){
		$scope.posts = data;
	});
});