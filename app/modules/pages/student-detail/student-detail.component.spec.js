describe('studentDetail', function() {

  // Load the module that contains the `studentDetail` component before each test
  beforeEach(module('studentDetail'));

  // Test the controller
  describe('studentDetailController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('api/v1.0/students/123456789').respond({name: 'Saverio'});

      $routeParams.studentId = '123456789';

      ctrl = $componentController('studentDetail');
    }));

    it('should fetch the student details', function() {
      expect(ctrl.student).toBeUndefined();

      $httpBackend.flush();
      expect(ctrl.student).toEqual({name: 'Saverio'});
    });

  });

});
