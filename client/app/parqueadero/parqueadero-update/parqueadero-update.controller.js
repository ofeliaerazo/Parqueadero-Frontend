'use strict';
(function(){

class ParqueaderoUpdateComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('parqueaderoApp')
  .component('parqueaderoUpdate', {
    templateUrl: 'app/parqueadero/parqueadero-update/parqueadero-update.html',
    controller: ParqueaderoUpdateComponent
  });

})();
