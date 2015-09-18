'use strict';

/**
 * @ngdoc function
 * @name robertnortard.com-ui.service:blogService
 * @description
 * # blogService
 */
app.service("BlogService", function($http){

	// Return blog post promise
	this.getPosts = function(){
		return $http.get(properties.api + '/blog/posts');
	};

	this.findById = function (id){
		return $http.get(properties.api + '/blog/posts/' + id);
	};

	this.createPost = function(){
		return $http.post(properties.api + '/blog/posts');
	};

	this.deletePost = function(id){
		return $http.delete(properties.api + '/blog/posts/' + id);
	};
});