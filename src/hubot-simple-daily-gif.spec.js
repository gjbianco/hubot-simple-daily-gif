describe('hubot-simple-gif', () => {
  const sut = require('./hubot-simple-daily-gif');
  const wordList = require('./word-list.json');
  const daysOfWeek = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
  ];

  describe('#_getRandomWord', () => {
    it('should return a random word', () => {
      const randomWord = sut._getRandomWord();
      console.log('randomly selected word: ' + randomWord);
      expect(typeof randomWord).toBe('string');
      expect(wordList).toContain(randomWord);
    });
  });

  describe('#_getDayOfWeek', () => {
    it('should return the day of the week', () => {
      const dayOfWeek = sut._getDayOfWeek();
      console.log('day of the week: ' + dayOfWeek);
      expect(typeof dayOfWeek).toBe('string');
      expect(daysOfWeek).toContain(dayOfWeek);
    });
  });

  describe('#getGif', () => {
    it('should resolve to a URL string', () => {
      return sut
        .getGif('dummy query')
        .then(result => expect(result).toBe('gif.link'));
    });
  });
});
