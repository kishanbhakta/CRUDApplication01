;(function (){

  'use strict';

  angular.module('Cigars')

  .controller('AddPostCtrl', ['$scope', '$http', 'PARSE', //'$location',

   function($scope, $http, PARSE){

    var endpoint = PARSE.URL + "classes/cigarpost";

     //Add Post
    $scope.userPost = function (post) {
      $http.post(endpoint, {

        title     : post.title,
        article   : post.article,
        img       : post.img

      }, PARSE.CONFIG);
    }

      // // Get a single object
      // this.getPost = function (id) {
      //   return $http.get(endpoint + id, PARSE.CONFIG);
      // };

      // // Get an array of all vehicles
      // this.getPosts = function () {
      //   $http.get(endpoint, PARSE.CONFIG).success( function (data) {
      //     $rootScope.$broadcast('AnythingCool', data);
      //   });
      // };

      // // Delete a single vehicle
      // this.deletePost = function (whichOne) {
      //   var deleteURL = endpoint + whichOne.objectId;
      //   return $http.delete(deleteURL, PARSE.CONFIG);
      // };



    }
  ])

}());