const getGif = require('./src/hubot-simple-daily-gif').getGif;
module.exports = robot => {
  let interval = null;

  robot.hear(/^!daily *(?:(on|off))? *$/i, res => {
    switch (res.match[1]) {
      case 'off':
        // turn off
        clearInterval(interval);
        interval = null;
        break;
      case 'on':
        // run and turn on
        _runScript();
        interval = setInterval(_runScript, 24 * 60 * 60 * 1000); // 24 hours in ms
        break;
      default:
        res.send(`daily gif is turned ${interval ? 'on' : 'off'}`);
    }

    function _runScript() {
      return getGif()
        .then(response => res.send(response))
        .catch(err => {
          console.error(`got an error: ${err}`);
          interval = null;
          res.send('error occurred trying to get daily gif D:');
        });
    }
  });
};
