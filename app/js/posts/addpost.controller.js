;(function (){

  'use strict';

  angular.module('Cigars')

  .controller('AddPostCtrl', ['$scope', '$http', 'PostFactory', '$routeParams',

   function($scope, $http, PostFactory, $routeParams){

   // Call Method to Get All Post
      PostFactory.getPosts().success( function(data) {
        $scope.posts = data.results;
      });

       $scope.addPost = function (post) {
        PostFactory.addPost(post);
       }

      //  $scope.addPost = function (cigar) {
      //   PostFactory.addPost(cigar);
      //  },

      //  $scope.addPost = function (cigar) {
      //   PostFactory.addPost(cigar);
      //  },

      // $scope.deleteMe = function (whichOne) {
      //   PostFactory.deletePost(whichOne).success( function () {
      //     $scope.addPost = _.without($scope.addPost, whichOne);
      //   });
      // };




    }
  ]);

}());






