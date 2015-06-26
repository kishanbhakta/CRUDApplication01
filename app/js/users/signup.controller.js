;(function (){

  'use strict';

  angular.module('Cigars')

  .controller('UserCtrl', ['$scope', '$http', 'UserFactory', '$routeParams',

   function($scope, $http, UserFactory, $routeParams){


    $scope.addUsernames = function (user) {
        UserFactory.addUsernames(user);
       }

    $scope.loginInfo = function (user) {
        UserFactory.loginInfo(user);
      };



    }
  ]);

}());
