'use strict';

/**
 * @ngdoc function
 * @name robertnortard.com-ui.service:authService
 * @description
 * # AuthService
 * AuthService for robertnorthard.com-ui.
 */
app.service("authService", function($http, $rootScope){
    this.authenticate = function(credentials, callback){

            var payload = {
                username: credentials.username,
                password: credentials.password
            };

            $http.put(properties.api + '/auth', payload).success(function(data) {

                if (data.username) {
                    $rootScope.authenticated = true;
                } else {
                    $rootScope.authenticated = false;
                }
                callback();
            }).error(function() {
                $rootScope.authenticated = false;
                callback();
            }); 
    };
});
