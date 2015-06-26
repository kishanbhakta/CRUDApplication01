;(function (){

  'use strict';

  angular.module('Cigars')

  .factory('UserFactory', ['$http', 'PARSE', '$location',
   function($http, PARSE, $location){

    var endpoint = PARSE.URL + "classes/username";

    //Add Username
    var addUsernames =  function (users) {
      $http.post(endpoint, users, PARSE.CONFIG).success( function() {
        $location.path('/');
         console.log(users);
      });
    };


    return {
      addUsernames   :   addUsernames
    }












    }
  ])

}());