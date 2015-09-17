'use strict';

app.config(function($routeProvider) {
	$routeProvider
		.when('/',{
			templateUrl: 'views/home.html',
			controller: 'mainController'
		})
		.when('/blog',{
			templateUrl: 'views/blog.html',
			controller: 'blogController'
		})
	    .when('/login',{
			templateUrl: 'views/login.html',
			controller: 'authController'
		})

    .otherwise({redirectTo: '/'});
}); 
