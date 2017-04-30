// Register the `studentList` component on the `studentList` module,
angular.module('studentList').component('studentList', {
  templateUrl: 'modules/pages/student-list/student-list.template.html',
  controller: function ($http) {
    var studentList = this;
    studentList.orderProp = 'name';

    $http.get('api/v1.0/students').then(function(response) {
      studentList.students = response.data;
    });
  }
});
