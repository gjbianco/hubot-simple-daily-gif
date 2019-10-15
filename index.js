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
        getGif()
          .then(response => res.send(response))
          .catch(err => {
            console.error(`got an error: ${err}`);
            intervall = null;
            res.send('error occurred trying to get daily gif D:');
          });

        interval = setInterval(_runScript, 24 * 60 * 60 * 1000); // 24 hours in ms
        break;
      default:
        res.send(`daily gif is turned ${interval ? 'on' : 'off'}`);
    }
  });
};
