'use strict';

app.controller('mainController', function($scope, $rootScope, AuthService){

	$scope.$watch( AuthService.isLoggedIn, function ( isLoggedIn ) {
		// TODO  - don't expose globally.
    	$rootScope.isLoggedIn = isLoggedIn;
  	});

	$scope.message = 'ROBERT NORTHARD';

});
