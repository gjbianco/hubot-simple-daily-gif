const axios = require('axios');
const apiKey = process.env.GIPHY_API_TOKEN;
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

/**
 * Get a random word from the JSON list of words.
 * @returns {string} A random word.
 */
function _getRandomWord() {
  const rand = Math.floor(Math.random() * wordList.length);
  return wordList[rand];
}

function _getDayOfWeek() {
  return daysOfWeek[new Date().getDay()];
}

/**
 * @param {string} query The giphy search string to query the service by.
 * @returns {Promise<string>} A Promise resolving to a string that should be sent to the channel.
 */
function getGif() {
  const query = `${_getDayOfWeek()} ${_getRandomWord()}`;
  return axios
    .get(`http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}`)
    .then(gifList => gifList.data[0].url);
}

module.exports = { getGif, _getDayOfWeek, _getRandomWord };
