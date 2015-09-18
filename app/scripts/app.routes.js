'use strict';

app.config(function($routeProvider) {
	$routeProvider
		.when('/',{
			templateUrl: 'views/home.html',
			controller: 'mainController'
		})
		.when('/blog/post/:id',{
			templateUrl: 'views/blog-post.html',
			controller: 'blogViewController'
		})
		.when('/blog',{
			templateUrl: 'views/blog.html',
			controller: 'blogListController'
		})
		.when('/manage',{
			templateUrl: 'views/manage.html',
			controller: 'manageController',
		})
	    .when('/login',{
			templateUrl: 'views/login.html',
			controller: 'authController'
		})

    .otherwise({redirectTo: '/'});
}); 
