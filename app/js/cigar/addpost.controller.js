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

      }, PARSE.CONFIG).success(function(data) { this.data = data});
    }

    //http request\

    //on success(function(data) { $scope.data = data})

    }
  ])

}());