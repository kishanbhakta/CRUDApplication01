;(function (){

  'use strict';

  angular.module('Cigars', ['ngRoute'])

  .constant('PARSE', {
    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {
       'X-Parse-Application-Id' : 'p2ZEMWa5VjtCVls9N9X0hRpzHkQ6zScxNl2nngnS',
       'X-Parse-REST-API-Key'  : 'XtupWwYnOfcsHsfdLeja3530jnUdtZ7n6WmHxay6'
       // 'Content-Type' : 'application/json'
      }
    }
  })

  .config( ['$routeProvider',

    function($routeProvider) {

      $routeProvider

      .when('/', {
        controller: 'AddPostCtrl',
        templateUrl: 'js/posts/home.tpl.html'

      })

      .when('/add-post', {
        controller: 'AddPostCtrl',
        templateUrl: 'js/posts/addpost.tpl.html'

      })

      .when('/sign-up', {
        controller: 'UserCtrl',
        templateUrl: 'js/users/signup.tpl.html'

     });
    }

  ]);

































}());