const config = require('../config.json');
module.exports =  client => {
  console.log('Ready to go!');
  client.user.setGame(`${config.prefix}help | ${client.guilds.size} Servers`);
  // require('../functions/dashboard.js').init(client);
};
