'use strict';

angular.module('parqueaderoApp')
  .service('carros', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
  });


'use strict';
function carrosService($resource, API) {
	return $resource(API+"/api/carros/:id",{
		id:'@id'
	},{
		update:{
			method:'PUT'
		}
	})
}

carrosService.$inject=['$resource','API'];
angular.module('parqueaderoApp')
  .factory('carrosService', carrosService);