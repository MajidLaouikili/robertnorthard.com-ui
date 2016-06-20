'use strict';

app.controller('mainController', function($scope, $rootScope, AuthService){

	$scope.$watch(AuthService.isLoggedIn, function(isLoggedIn) {
    	$rootScope.isLoggedIn = isLoggedIn;
  	});

	$scope.message = 'ROBERT NORTHARD';
});
