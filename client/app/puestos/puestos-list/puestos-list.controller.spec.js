'use strict';

describe('Component: PuestosListComponent', function () {

  // load the controller's module
  beforeEach(module('parqueaderoApp'));

  var PuestosListComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    PuestosListComponent = $componentController('PuestosListComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
