// Register the `studentList` component on the `studentList` module,
angular.module('studentList').component('studentList', {
  templateUrl: 'student-list/student-list.template.html',
  controller: function () {
    var studentList = this;
    studentList.students = [
      {
        'name': 'Saverio',
        'surname': 'Tosi'
      },
      {
        'name': 'Lorenzo',
        'surname': 'Pomili'
      },
      {
        'name': 'Antonio',
        'surname': 'Dell\'ava'
      },
      {
        'name': 'Mario',
        'surname': 'Rossi'
      },
      {
        'name': 'Vittorio',
        'surname': 'Verdi'
      }];
  }
});
