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

      // Get a single posts
      var getSinglePost = function (id) {
        return $http.get(endpoint + id, PARSE.CONFIG);
      };

      // Get an array of all posts
      var getPost = function () {
        return $http.get(endpoint, PARSE.CONFIG);
      };



      return {
        addPost        : addPost,
        getSinglePost  : getSinglePost,
        getPost        : getPost
        // deletePost     : deletePost
      }

    }
  ])

}());