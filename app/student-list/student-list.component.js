// Register the `studentList` component on the `studentList` module,
angular.module('studentList').component('studentList', {
  templateUrl: 'student-list/student-list.template.html',
  controller: function () {
    var studentList = this;
    studentList.students = [
      {
        'name': 'Saverio',
        'surname': 'Tosi',
        'CFU': 20
      },
      {
        'name': 'Lorenzo',
        'surname': 'Pomili',
        'CFU': 25
      },
      {
        'name': 'Antonio',
        'surname': 'Dell\'ava',
        'CFU': 15
      },
      {
        'name': 'Mario',
        'surname': 'Rossi',
        'CFU': 7
      },
      {
        'name': 'Vittorio',
        'surname': 'Verdi',
        'CFU': 0
      }];
  }
});
