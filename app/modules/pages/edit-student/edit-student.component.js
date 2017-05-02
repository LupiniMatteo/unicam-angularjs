// Register the `editStudent` component on the `editStudent` module,
angular.module('editStudent').component('editStudent', {
  templateUrl: 'modules/pages/edit-student/edit-student.template.html',
  controller: function ($http, $location, $routeParams) {
    var editStudent = this;
    var id = $routeParams.studentId;
    var student;

    $http.get('api/v1.0/students/' + id).then(function(response) {
      editStudent.student = response.data;
      delete editStudent.student._id;
      student = angular.copy(editStudent.student);
    });

    editStudent.reset = function() {
      editStudent.student = angular.copy(student);
    }

    editStudent.update = function() {
      $http.put('api/v1.0/students/' + id, editStudent.student).then(
        function(res) {
          $location.path('');
        }, function(err) {
          alert('Errore, riprova più tardi');
        }
      )
    }

  }
});
