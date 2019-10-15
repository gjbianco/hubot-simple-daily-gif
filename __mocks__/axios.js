const axios = jest.genMockFromModule('axios');

axios.get = async () => await { data: { data: ['gif.link'] } };

module.exports = axios;
