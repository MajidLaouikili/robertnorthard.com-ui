'use strict';

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/',{
			templateUrl: 'views/home.html',
			controller: 'mainController'
		})
		.when('/blog/post/:id',{
			templateUrl: 'views/blog.html',
			controller: 'blogController'
		})
		.when('/blog',{
			templateUrl: 'views/blog.html',
			controller: 'blogController'
		})
		.when('/blog/new',{
			templateUrl: 'views/new-blog-post.html'
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
