'use strict';

/**
 * @ngdoc function
 * @name robertnortard.com-ui.service:authService
 * @description
 * # AuthService
 * AuthService for robertnorthard.com-ui.
 */
app.service("AuthService", function($http) {

    var user;

    this.authenticate = function(credentials, callback) {
        $http.put(properties.api + '/auth', {
            username: credentials.username,
            password: credentials.password
        })
        .success(function(response) {
            callback(response);
        })
        .error(function(error) {
            callback(error);
        });
    };

    this.isLoggedIn = function(){
        return user ? true : false;
    };

    this.getUser = function (){
        return user; 
    };

    this.logout = function(){
        user = undefined;
    };

    this.setUser = function(userObj){
        user = userObj;
    };
});