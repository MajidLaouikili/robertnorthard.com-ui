'use strict';

app.config(function($routeProvider, $httpProvider) {
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
	    .when('/404',{
			templateUrl: '404.html',
		})
    .otherwise({redirectTo: '/404'});

     $httpProvider.interceptors.push('AuthInterceptor');
}); 
