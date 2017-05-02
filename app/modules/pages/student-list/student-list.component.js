// Register the `studentList` component on the `studentList` module,
angular.module('studentList').component('studentList', {
  templateUrl: 'modules/pages/student-list/student-list.template.html',
  controller: function (UserService) {
    var studentList = this;
    studentList.orderProp = 'name';

    UserService.getStudents().then(function (response) {
      studentList.students = response.data;
    });

    studentList.delete = function (e, id) {
      e.preventDefault();
      UserService.deleteStudent(id)
        .then(UserService.getStudents()
        .then(function (response) {
          studentList.students = response.data;
        }));
    }
  }
});
