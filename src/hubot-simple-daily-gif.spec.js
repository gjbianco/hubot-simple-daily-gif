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

describe('hubot-simple-gif', () => {
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

  // TODO properly mock out axios to better test
  describe('#getGif', () => {
    it('should return a Promise', () => {
      sut.getGif('dummy query').then(result => {
        expect(result).toBeTruthy();
      });
    });
  });
});
