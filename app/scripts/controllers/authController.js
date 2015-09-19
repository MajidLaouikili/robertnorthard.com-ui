'use strict';

app.controller('authController', function($scope, AuthService, $rootScope, $location, $window) {

    $scope.login = function() {
        AuthService.authenticate($scope.credentials, function(user) {

            if (user.data) {
                // Login succedded
                AuthService.setUser(user.data);
                $scope.error = false;
                $window.sessionStorage.token = btoa($scope.credentials.username + ":" + $scope.credentials.password);
                $location.path('/');
            } else {
                // Login failed
                $scope.error = true;
            }
        });
    };

    $rootScope.logout = function() {
        AuthService.logout();
        delete $window.sessionStorage.token;
        $location.path("/");
    };
});