'use strict';

describe('Component: ParqueaderoListComponent', function () {

  // load the controller's module
  beforeEach(module('parqueaderoApp'));

  var ParqueaderoListComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ParqueaderoListComponent = $componentController('ParqueaderoListComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
