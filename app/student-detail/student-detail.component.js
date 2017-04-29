// Register the `studentDetail` component on the `studentDetail` module,
angular.module('studentDetail').component('studentDetail', {
  templateUrl: 'student-detail/student-detail.template.html',
  controller: function ($http) {
    var studentDetail = this;
    studentDetail.orderProp = 'name';

    $http.get('api/v1.0/students').then(function(response) {
      studentDetail.students = response.data;
    });
  }
});
