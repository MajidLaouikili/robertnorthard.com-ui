'use strict';

app.controller('manageController', function($scope, $location, $route, $rootScope, $timeout, BlogService) {

    $scope.message = 'Manage Blog Posts';

    BlogService.getPosts().success(function(data) {
        $scope.posts = data.data;
    }).error(function() {
        $scope.error = "Blog posts not found"
    });

    $scope.delete = function(id) {
        BlogService.deletePost(id).success(function(data) {
            $timeout(function() {
                $route.reload();
            }, 1000);
        });
    };
});