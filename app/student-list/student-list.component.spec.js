describe('studentList', function() {

  // Load the module that contains the `studentList` component before each test
  beforeEach(module('studentList'));

  // Test the controller
  describe('StudentListController', function() {
    var ctrl;

    beforeEach(inject(function($componentController) {
      ctrl = $componentController('studentList');
    }));

    it('should create a `students` model with 5 students', function() {
      expect(ctrl.students.length).toBe(5);
    });

    it('should set a default value for th `orderProp` model', function() {
      expect(ctrl.orderProp).toBe('name');
    });


  });

});
