'use strict';

app.controller('blogListController', function($scope, $sce, BlogService){

	$scope.message = 'Blog';

	BlogService.getPosts().success(function(data){
		$scope.posts = data.data;

		/* Trust posts as html */
		for (var i = 0; i < data.data.length; i++) {
        	$scope.posts[i].body = $sce.trustAsHtml(data.data[i].body);
    	}
	});
});