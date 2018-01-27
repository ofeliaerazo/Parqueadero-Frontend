'use strict';

describe('Component: ParqueaderoCreateComponent', function () {

  // load the controller's module
  beforeEach(module('parqueaderoApp'));

  var ParqueaderoCreateComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ParqueaderoCreateComponent = $componentController('ParqueaderoCreateComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
