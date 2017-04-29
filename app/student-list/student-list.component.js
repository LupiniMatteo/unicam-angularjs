// Register the `studentList` component on the `studentList` module,
angular.module('studentList').component('studentList', {
  templateUrl: 'student-list/student-list.template.html',
  controller: function () {
    var studentList = this;
    studentList.students = [
      {
        'name': 'Paolo',
        'surname': 'Rossa'
      },
      {
        'name': 'Caio',
        'surname': 'Primo'
      },
      {
        'name': 'Tizio',
        'surname': 'Verdi'
      },
      {
        'name': 'Luca',
        'surname': 'Bho'
      },
      {
        'name': 'Luca',
        'surname': 'Bho'
      }];
  }
});
