'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('Student Application', function() {

  describe('phoneList', function() {
    beforeEach(function() {
      browser.get('index.html');
    });

    it('should filter the student list as a user types into the search box', function() {
      var studentList = element.all(by.repeater('student in $ctrl.students'));
      var query = element(by.model('$ctrl.query'));

      expect(studentList.count()).toBe(5);

      query.sendKeys('saverio');
      expect(studentList.count()).toBe(1);

      query.clear();
      query.sendKeys('a');
      expect(studentList.count()).toBe(3);
    });
  });

});
