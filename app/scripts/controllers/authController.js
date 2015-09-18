'use strict';

app.controller('authController', function($scope, AuthService, $rootScope, $location, $window){

    $scope.login = function() {
        AuthService.authenticate($scope.credentials, function(user) {

            if (user.data) {
                // Login succedded
                AuthService.setUser(user.data);
                $scope.error = false;
                $location.path('/');
            } else {
                // Login failed
                $scope.error = true;
            }
        });
    };

	$rootScope.logout = function() {
		AuthService.logout();
	    $location.path("/");
	};
});