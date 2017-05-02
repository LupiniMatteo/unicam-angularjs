angular.
  module('common').
  factory('UserService', function($http) {
    var getStudents = function() {
      return $http.get('api/v1.0/students');
    }

    var getStudent = function(id) {
      return $http.get('api/v1.0/students/' + id);
    }

    var editStudent = function(id, user) {
      return $http.put('api/v1.0/students/' + id, user);
    }

    var deleteStudent = function(id) {
      return $http.delete('api/v1.0/students/' + id);
    }

    var addStudent = function(user) {
      return $http.post('api/v1.0/students', user);
    }

    return {
      getStudents: getStudents,
      getStudent: getStudent,
      editStudent: editStudent,
      deleteStudent: deleteStudent,
      addStudent: addStudent
    }
  });
