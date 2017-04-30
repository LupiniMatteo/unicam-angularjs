angular.
  module('common').
  filter('media', function() {
    return function(input) {
      var toReturn = '(bassa)';
      switch (true) {
        case input <= 22:
          toReturn = '(bassa)';
          break;
        case input > 22 && input <=26:
          toReturn = '(media)';
          break;
        case input > 26:
          toReturn = '(alta)';
          break;
      }
      return input + toReturn;
    };
  });
