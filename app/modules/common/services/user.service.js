angular.
  module('common').
  factory('UserService', function($http) {
    var userService = {};
    userService.getStudents = function() {
      return $http.get('api/v1.0/students');
    }

    userService.getStudent = function(id) {
      return $http.get('api/v1.0/students/' + id);
    }

    userService.editStudent = function(id, user) {
      return $http.put('api/v1.0/students/' + id, user);
    }

    userService.deleteStudent = function(id) {
      return $http.delete('api/v1.0/students/' + id);
    }

    userService.addStudent = function(user) {
      return $http.post('api/v1.0/students', user);
    }

    return userService;
  });
