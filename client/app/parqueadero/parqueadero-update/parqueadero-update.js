'use strict';

angular.module('parqueaderoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('parqueadero-update', {
        url: '/parqueadero-update',
        template: '<parqueadero-update></parqueadero-update>'
      });
  });
