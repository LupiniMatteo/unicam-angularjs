// Register the `studentDetail` component on the `studentDetail` module,
angular.module('studentDetail').component('studentDetail', {
  templateUrl: 'student-detail/student-detail.template.html',
  controller: function ($http, $routeParams) {
    var studentDetail = this;
    studentDetail.studentId = $routeParams.studentId;

    $http.get('api/v1.0/students/' + studentDetail.studentId).then(function(response) {
      studentDetail.student = response.data;
    });
  }
});
