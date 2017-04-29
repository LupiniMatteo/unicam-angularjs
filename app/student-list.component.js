angular.module('studentApp').component('studentList', {
  template:
  '<ul>' +
   '<li ng-repeat="student in $ctrl.students">' +
      '{{ student.name }} {{ student.surname }}' +
    '</li>' +
  '</ul>',
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
