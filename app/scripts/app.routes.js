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
    .otherwise({redirectTo: '/'});
}); 
