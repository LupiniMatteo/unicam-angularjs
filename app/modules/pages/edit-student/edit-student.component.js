// Register the `editStudent` component on the `editStudent` module,
angular.module('editStudent').component('editStudent', {
  templateUrl: 'modules/pages/edit-student/edit-student.template.html',
  controller: function (UserService, $location, $routeParams) {
    var editStudent = this;
    var id = $routeParams.studentId;
    var student;

    UserService.getStudent(id).then(function(response) {
      editStudent.student = response.data;
      delete editStudent.student._id;
      student = angular.copy(editStudent.student);
    });

    editStudent.reset = function() {
      editStudent.student = angular.copy(student);
    }

    editStudent.update = function() {
      UserService.editStudent(id, editStudent.student).then(
        function(res) {
          $location.path('');
        }, function(err) {
          alert('Errore, riprova più tardi');
        }
      )
    }

  }
});
