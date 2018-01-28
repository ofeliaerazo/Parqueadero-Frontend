'use strict';
(function(){

class ParqueaderoListComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('parqueaderoApp')
  .component('parqueaderoList', {
    templateUrl: 'app/parqueadero/parqueadero-list/parqueadero-list.html',
    controller: ParqueaderoListComponent,
    controllerAs:'vm'
  });

})();
