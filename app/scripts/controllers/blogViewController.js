'use strict';

app.controller('blogViewController', function($routeParams, $scope, $sce, BlogService){

	$scope.message = 'Blog';
    	
	BlogService.findById($routeParams.id).success(function(data){
		$scope.post = data.data;
		$scope.post.body = $sce.trustAsHtml(data.data.body);

	}).error(function(){
		$scope.error = "Blog post not found, " + $routeParams.id
	});
});