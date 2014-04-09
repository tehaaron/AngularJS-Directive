'use strict';

angular
  .module('angularJsDirectiveApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'app.directives.card'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
