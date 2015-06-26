;(function (){

  'use strict';

  angular.module('Cigars')

  .controller('AddPostCtrl', ['$scope', '$http', 'PostFactory', '$routeParams',

   function($scope, $http, PostFactory, $routeParams){

   // Call Method to Get All Post
      PostFactory.getPost().success( function (data) {
        $scope.cigar = data.results;
      });

       $scope.addPost = function (post) {
        PostFactory.addPost(post);
       };







    }
  ]);

}());






