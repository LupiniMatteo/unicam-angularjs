// Register the `studentDetail` component on the `studentDetail` module,
angular.module('studentDetail').component('studentDetail', {
  templateUrl: 'modules/pages/student-detail/student-detail.template.html',
  controller: function (UserService, $routeParams) {
    var studentDetail = this;
    studentDetail.studentId = $routeParams.studentId;

    UserService.getStudent(studentDetail.studentId).then(function(response) {
      studentDetail.student = response.data;
    });
  }
});
