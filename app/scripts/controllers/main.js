'use strict';

angular.module('newProjectApp')
  .controller('MainCtrl', function ($scope, $timeout, AccessToken) {
    $scope.$on('oauth:login', function(event, token) {
      console.log('yo')
      $scope.accessToken = token.access_token;
    });

    $scope.$on('oauth:logout', function(event) {
      $scope.accessToken = null;
    });
  });
