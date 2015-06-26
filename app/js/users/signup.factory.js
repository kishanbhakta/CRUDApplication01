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
    }

    var loginInfo = function (userInfo) {
      return $http.get(endpoint, userInfo, PARSE.CONFIG). success( function() {
        console.log(userInfo);
        $location.path('/');
      });
    };

    return {
      addUsernames   :   addUsernames
      loginInfo      :   loginInfo
    }












    }
  ])

}());