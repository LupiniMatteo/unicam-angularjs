describe('StudentListController', function() {

  beforeEach(function() {module('studentApp') });

  it('should create a `students` model with 3 students', inject(function($controller) {
    var ctrl = $controller('StudentListController', {});
    expect(ctrl.students.length).toBe(5);
  }));

});
