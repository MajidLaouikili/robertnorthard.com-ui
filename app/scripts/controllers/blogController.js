'use strict';

app.controller('blogController', function($scope, $sce, $routeParams, BlogService){

	$scope.init = function(){
		$scope.message = 'Blog';
		$scope.posts = [];
		$scope.getPosts();
	}

	$scope.getPosts = function() {
		if ($routeParams.id){
			BlogService.findById($routeParams.id).success(function(data){
				$scope.posts = [data.data];
				$scope.posts[0].body = $sce.trustAsHtml(data.data.body);
			}).error(function(){
				$scope.error = "Blog post not found, " + $routeParams.id
			});
		}else{
			BlogService.getPosts().success(function(data){
				$scope.posts = data.data;

				/* Trust posts as html */
				for (var i = 0; i < data.data.length; i++) {
        			$scope.posts[i].body = $sce.trustAsHtml(data.data[i].body);
    			}
			});
		}
	};

	$scope.init()
});