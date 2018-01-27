'use strict';

describe('Component: ParqueaderoUpdateComponent', function () {

  // load the controller's module
  beforeEach(module('parqueaderoApp'));

  var ParqueaderoUpdateComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ParqueaderoUpdateComponent = $componentController('ParqueaderoUpdateComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
