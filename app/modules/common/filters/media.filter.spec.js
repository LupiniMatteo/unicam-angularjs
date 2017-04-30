describe('media', function() {

  beforeEach(module('common'));

  it('should convert number values to string',
    inject(function(mediaFilter) {
      expect(mediaFilter(20)).toBe('20(bassa)');
      expect(mediaFilter(25)).toBe('25(media)');
      expect(mediaFilter(30)).toBe('30(alta)');
    })
  );

});
