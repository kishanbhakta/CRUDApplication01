;(function (){

  'use strict';

  angular.module('Cigars')

  .factory('PostFactory', ['$http', 'PARSE', '$location',
   function($http, PARSE, $location){

     var endpoint = PARSE.URL + "classes/cigarpost";

      //Add Post
      var addPost = function (posts) {
        $http.post(endpoint, posts, PARSE.CONFIG).success( function() {
          $location.path('/');
        });
      };

      // Get a single object
      var getSinglePost = function (id) {
        return $http.get(endpoint + id, PARSE.CONFIG);
      };

      // Get an array of all vehicles
      var getPosts = function () {
        $http.get(endpoint, PARSE.CONFIG);
      };

      // Delete a single vehicle
      // var deletePost = function (whichOne) {
      //   var deleteURL = endpoint + whichOne.objectId;
      //   return $http.delete(deleteURL, PARSE.CONFIG);
      // };

      return {
        addPost        : addPost,
        getSinglePost  : getSinglePost,
        getPosts       : getPosts
        // deletePost     : deletePost
      }

    }
  ])

}());