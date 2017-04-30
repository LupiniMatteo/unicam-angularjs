'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('Student Application', function () {

  it('should redirect `index.html` to `index.html#!/students', function () {
    browser.get('index.html');
    expect(browser.getCurrentUrl()).toBe('/students');
  });

  describe('View: Student List', function () {
    beforeEach(function () {
      browser.get('index.html');
    });

    it('should filter the student list as a user types into the search box', function () {
      var studentList = element.all(by.repeater('student in $ctrl.students'));
      var query = element(by.model('$ctrl.query'));

      expect(studentList.count()).toBe(5);

      query.sendKeys('saverio');
      expect(studentList.count()).toBe(1);

      query.clear();
      query.sendKeys('l');
      expect(studentList.count()).toBe(2);
    });

    // it('should render student specific links', function () {
    //   var query = element(by.model('$ctrl.query'));
    //   query.sendKeys('saverio');

    //   element.all(by.css('.students li a')).first().click();
    //   expect(browser.getCurrentUrl()).toBe('/students/590364b7babf803c177f111c');
    // });


    it('should be possible to control student order via the drop-down menu', function () {
      var queryField = element(by.model('$ctrl.query'));
      var orderSelect = element(by.model('$ctrl.orderProp'));
      var CFUOption = orderSelect.element(by.css('option[value="CFU"]'));
      var studentNameColumn = element.all(by.repeater('student in $ctrl.students').column('student.name'));

      function getNames() {
        return studentNameColumn.map(function (elem) {
          return elem.getText();
        });
      }

      CFUOption.click();

      expect(getNames()).toEqual([
        'Vittorio Verdi',
        'Mario Rossi',
        'Antonio Dell\'ava',
        'Saverio Tosi',
        'Lorenzo Pomili'

      ]);
    });

  });

  describe('View: Student details', function () {

    beforeEach(function () {
      browser.get('index.html#!/students/123456');
    });

    it('should display placeholder page with `studentId`', function () {
      expect(element(by.binding('$ctrl.studentId')).getText()).toBe('Dettagli Studente 123456');
    });

  });


});
