;(function (){

  'use strict';

  angular.module('Cigars', ['ngRoute'])

  .constant('PARSE',{
    URL: 'https.api.parse.com/1/',
    CONFIG: {
      headers: {
       'X-Parse-Application-Id' : 'p2ZEMWa5VjtCVls9N9X0hRpzHkQ6zScxNl2nngnS',
       'X-Parse-REST-API-Key'  : 'XtupWwYnOfcsHsfdLeja3530jnUdtZ7n6WmHxay6'
      }
    }
  })

  .config( ['$routeProvider',
    function($routeProvider){

      $routeProvider.when('/', {

      controller: '',
      templateUrl:'js/cigar/home.tpl.html'

    })

    .when('/add-post', {

      controller:'',
      templateUrl: 'js/cigar/addpost.tpl.html'

    });

    // .when('/', {

    //   controller:'',
    //   templateUrl: ''

    // });

    }
  ]);

}());