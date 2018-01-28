'use strict';

angular.module('parqueaderoApp', [
  'parqueaderoApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .constant("API", "http://192.168.1.21:8080/Bakend-Parqueadero");
  .config(function($urlRouterProvider, $locationProvider) {
    
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
