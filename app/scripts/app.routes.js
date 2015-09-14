'use strict';

app.config(function($routeProvider) {
	$routeProvider
		.when('/',{
			templateUrl: 'views/home.html',
			controller: 'mainController'
		})
		.when('/about',{
			templateUrl: 'views/about.html',
			controller: 'aboutController'
		})
    .otherwise({redirectTo: '/'});
}); 
