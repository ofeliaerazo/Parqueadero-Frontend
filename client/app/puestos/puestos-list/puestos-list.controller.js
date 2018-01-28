'use strict';
(function(){

class PuestosListComponent {
  constructor(puestosService) {
    this.puestosService = puestosService;
  }
  $onInit(){
  	this.puestosService.query().$promise
  	.then(response => {
  		console.log('lista de ppuestos', response);
  		this.puestos = response;
  	})
  	.catch(err => {
  		console.log('error', err);
  	});
  }
}
PuestosListComponent.$inject = ['puestosService'];
angular.module('parqueaderoApp')
  .component('puestosList', {
    templateUrl: 'app/puestos/puestos-list/puestos-list.html',
    controller: PuestosListComponent,
    controllerAs: 'vm'
  });

})();
