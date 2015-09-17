'use strict';

/**
 * @ngdoc function
 * @name robertnortard.com-ui.service:blogService
 * @description
 * # blogService
 */
app.service("blogService", function($http){

	// Return blog post promise
	this.getPosts = function(){
		return $http.get(properties.api + '/blog/posts');
	};

	this.findById = function (id){
		return $http.get(properties.api + '/blog/posts/' + id);
	};
});