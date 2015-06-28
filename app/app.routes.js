
app.config(function($routeProvider,$locationProvider) {
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
