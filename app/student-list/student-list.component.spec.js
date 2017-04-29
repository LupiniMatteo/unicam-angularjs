describe('studentList', function() {

  // Load the module that contains the `studentList` component before each test
  beforeEach(module('studentList'));

  // Test the controller
  describe('StudentListController', function() {

    it('should create a `students` model with 5 students', inject(function($componentController) {
      var ctrl = $componentController('studentList');

      expect(ctrl.students.length).toBe(5);
    }));

  });

});
