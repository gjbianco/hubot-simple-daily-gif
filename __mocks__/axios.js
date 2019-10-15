const axios = jest.genMockFromModule('axios');

axios.get = async urlString => await { data: { data: ['gif.link'] } };

module.exports = axios;
