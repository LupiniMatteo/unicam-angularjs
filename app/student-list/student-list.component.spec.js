describe('studentList', function () {

  // Load the module that contains the `studentList` component before each test
  beforeEach(module('studentList'));

  // Test the controller
  describe('StudentListController', function () {
    var $httpBackend, ctrl;

    beforeEach(inject(function ($componentController, _$httpBackend_) {
      ctrl = $componentController('studentList');
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('api/v1.0/students')
        .respond([
          {
            'name': 'Saverio',
            'surname': 'Tosi',
            'CFU': 20
          },
          {
            'name': 'Lorenzo',
            'surname': 'Pomili',
            'CFU': 25
          },
          {
            'name': 'Antonio',
            'surname': 'Dell\'ava',
            'CFU': 15
          },
          {
            'name': 'Mario',
            'surname': 'Rossi',
            'CFU': 7
          },
          {
            'name': 'Vittorio',
            'surname': 'Verdi',
            'CFU': 0
          }]);
    }));

    it('should create a `students` model with 5 students', function () {
      expect(ctrl.students).toBeUndefined();
      $httpBackend.flush();
      expect(ctrl.students.length).toBe(5);
    });

    it('should set a default value for th `orderProp` model', function () {
      expect(ctrl.orderProp).toBe('name');
    });


  });

});
