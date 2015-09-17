'use strict';

app.controller('authController', function($scope, authService, $rootScope, $location, $window){

    $scope.credentials = {};

    $rootScope.login = function() {
        authService.authenticate($scope.credentials, function() {
            if ($rootScope.authenticated) {
                $scope.error = false;
                $location.path('/');
            } else {
                $scope.error = true;
            }
        });
    };

	$rootScope.logout = function() {
		delete $window.sessionStorage.token;
		$rootScope.authenticated = false;
	    $location.path("/");
	};
});