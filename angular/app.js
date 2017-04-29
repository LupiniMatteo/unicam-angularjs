// Define the `studentApp` module
var studentApp = angular.module('studentApp', []);

// Define the `PhoneListController` controller on the `studentApp` module
studentApp.controller('StudentListController', function StudentListController() {
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
});
